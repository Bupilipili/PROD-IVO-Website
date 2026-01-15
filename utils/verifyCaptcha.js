export async function verifyCaptcha(token) {
  try {
    const response = await fetch(
      "https://ivo-solutions.vercel.app/api/verifyCaptcha",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token: token }),
      }
    );

    const data = await response.json();

    if (data.success) {
      return "success!";
    } else {
      throw new Error("Failed Captcha");
    }
  } catch (error) {
    throw new Error("Error in Captcha Verification");
  }
}
