import fs from "fs";
import path from "path";
import nodemailer from "nodemailer";
import config from "config";

import { logger } from "./logger";

const loadTemplate = (templateName: string, data: unknown): string => {
  const templatePath = path.join(__dirname, "..", "templates", `${templateName}.html`);
  const template = fs.readFileSync(templatePath, "utf8");
  let output = template;

  const entries = Object.entries(data as { [key: string]: unknown });
  entries.forEach(([key, value]) => {
    output = output.replace(new RegExp(`{{${key}}}`, "g"), value as string);
  });

  return output;
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  port: 587,
  auth: {
    user: config.get("smtp.email") as string,
    pass: config.get("smtp.password") as string
  }
});

export const sendEmail = async (to: string, subject: string, html: string) => {
  const mailOptions = {
    from: config.get("smtp.email") as string,
    to,
    subject,
    html
  };

  try {
    await transporter.sendMail(mailOptions);
    logger.info(`Email sent to ${to}`);
  } catch (error) {
    logger.error(`Error sending email to ${to}: ${(error as Error).message}`);
  }
};

export const sendContactUsEmail = async (
  name: string,
  email: string,
  message: string,
  contactSubject: string,
  submissionTime: string
) => {
  const subject = "Internal Email - Contact Us";

  const html = loadTemplate("contact-us", {
    name,
    email,
    message,
    contactSubject,
    submissionTime
  });

  await sendEmail(config.get("smtp.email") as string, subject, html);
};
