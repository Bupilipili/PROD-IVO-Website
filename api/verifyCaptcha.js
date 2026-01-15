// your-nextjs-project/api/verifyCaptcha.js
// import { NextApiRequest, NextApiResponse } from "next";
import Cors from "cors";

const RECAPTCHA_SECRET_KEY = "6LfOOzcpAAAAAJs5VKm5HufUF2ASzLP65-XwSrdD";

// Initializing the cors middleware
const cors = Cors({
  methods: ["GET", "HEAD", "POST"], // Adjust methods based on your needs
  origin: "*",
  allowedHeaders: ["Authorization", "Content-Type"], // Adjust to the origin of the requesting app
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error if anything goes wrong
function runMiddleware(req, res, fn) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default async function POST(req, res) {
  // Run the middleware

  await runMiddleware(req, res, cors);

  if (req.method !== "POST") {
    return res.status(405).end(); // Method not allowed
  }

  const token = req.body.token;

  const fetch = (await import("node-fetch")).default;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
      }
    );

    const data = await response.json();

    console.log(data);

    if (data.success) {
      res.status(200).json({ success: true });
    } else {
      res.status(400).json({ success: false, error: "Failed Captcha" });
    }
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, error: "Error in Captcha Verification" });
  }
}
