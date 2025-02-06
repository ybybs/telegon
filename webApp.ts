import { Bot } from "grammy";
import dotenv from "dotenv";

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

bot.command("start", async (ctx) => {
    await ctx.reply("Welcome to Burger King! Please click below to order:", {
        reply_markup: {
            inline_keyboard: [
                [
                    {
                        text: "Open WebApp",
                        web_app: {
                            url: "https://your-webapp-url.com", // 这里是你的 WebApp 地址
                        },
                    },
                ],
            ],
        },
    });
});

bot.start();
