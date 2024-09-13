import dotenv from "dotenv";

dotenv.config();

export const TELEGRAM_BOT_TOKEN: string = process.env.TELEGRAM_BOT_TOKEN || "";
