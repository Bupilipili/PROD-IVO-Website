// smoke‑xss.js
const puppeteer = require("puppeteer");

// simple sleep helper
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

;(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page    = await browser.newPage();

  // catch any alert() calls
  let xssFired = false;
  page.on("dialog", async (dlg) => {
    xssFired = true;
    await dlg.accept();
  });

  // 1) LOGIN FORM XSS
  console.log("→ Testing login form for XSS…");
  await page.goto("http://localhost:3000/portal/login", {
    waitUntil: "networkidle2",
  });

  // inject payload into email field
  await page.type('input[name="email"]', `"><script>alert("XSS")</script>`);
  await page.type('input[name="password"]', "irrelevant");
  await page.click('button[type="submit"]');

  // wait up to 5s for redirect (or validation errors)
  await page
    .waitForFunction(
      () => window.location.pathname === "/admin/posts/new",
      { timeout: 5_000 }
    )
    .catch(() => { /* no-op */ });

  if (xssFired) {
    console.error("❌  XSS fired on login form!");
    await browser.close();
    process.exit(1);
  } else {
    console.log("✅  Login form is safe.");
  }

  // 2) REFLECTED ENDPOINT XSS
  xssFired = false;
  console.log("→ Testing reflected endpoint for XSS…");
  const payload = `"><script>alert("REFLECT")</script>`;
  await page.goto(
    `http://192.168.0.164:4000/hello?name=${encodeURIComponent(payload)}`,
    { waitUntil: "networkidle2" }
  );

  // give it a moment to fire
  await sleep(1000);

  if (xssFired) {
    console.error("❌  Reflected XSS detected!");
    await browser.close();
    process.exit(1);
  } else {
    console.log("✅  Reflected endpoint is safe.");
  }

  await browser.close();
  process.exit(0);
})();
