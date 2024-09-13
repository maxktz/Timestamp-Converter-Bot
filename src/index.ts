import { Context, Telegraf } from "telegraf";
import { TELEGRAM_BOT_TOKEN } from "./config";

const bot = new Telegraf(TELEGRAM_BOT_TOKEN);

async function converter(ctx: Context) {
  // @ts-ignore
  const val: string = ctx.message.text.split(" ").slice(1).join(" ").trim();
  let msg = "<b>⚠️ Invalid input.</b>";

  if (/^\d*\.?\d+$/.test(val)) {
    const date = new Date(Number(val) * 1000);
    msg =
      `Locale Date\n<code>${date.toLocaleString()}</code>\n` +
      `\n` +
      `UTC Date\n<code>${date.toUTCString()}</code>\n` +
      `\n` +
      `ISO Date\n<code>${date.toISOString()}</code>\n` +
      `\n` +
      `JSON Date\n<code>${date.toJSON()}\n</code>\n` +
      ``;
  } else if (new Date(val).toString() !== "Invalid Date") {
    const date = new Date(val);
    msg =
      `Timestamp: <code><${date.getTime() / 1000}</code>\n` +
      `\n` +
      `Locale Date: <code>${date.toLocaleString()}\n</code>\n` +
      `\n` +
      `UTC Date: <code>${date.toUTCString()}\n</code>\n` +
      `\n` +
      `ISO Date: <code>${date.toISOString()}\n</code>\n` +
      `\n` +
      `JSON Date: <code>${date.toJSON()}\n</code>\n` +
      ``;
  }
  await ctx.reply(msg, { parse_mode: "HTML" });
}

bot.command("start", async (ctx) => {
  await ctx.reply(`Hello, that's how to use it: 

/now - get current time

/ts <timestamp> - convert timestamp to date

/date <date> - convert date to timestamp`);
});
bot.command("now", converter);

bot.command("ts", converter);
bot.command("iso", converter);

(async () => {
  await bot.launch();
})();
