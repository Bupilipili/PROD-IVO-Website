import emailjs from "@emailjs/browser";
import { EMAILJS_PUBLIC_ID, EMAILJS_SERVICE_ID } from "@/constants";

export const sendEmail = async (templateId, formData) => {
  try {
    // console.log(EMAILJS_SERVICE_ID, templateId, formData, EMAILJS_PUBLIC_ID);
    const response = await emailjs.send(
      EMAILJS_SERVICE_ID,
      templateId,
      formData,
      EMAILJS_PUBLIC_ID
    );
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
};
