import { Bot, Context } from 'grammy';
import dotenv from 'dotenv';

dotenv.config();

const bot = new Bot(process.env.BOT_TOKEN!);

// 处理支付请求
bot.on('pre_checkout_query', async (ctx: Context) => {
    try {
        // 自动确认支付请求，弹出支付界面
        await ctx.answerPreCheckoutQuery(true);
    } catch (error) {
        console.error('Error handling pre-checkout query:', error);
        await ctx.answerPreCheckoutQuery(false, {
            error_message: 'Something went wrong. Please try again later.',
        });
    }
});

// 处理支付成功
bot.on('successful_payment', async (ctx: Context) => {
    console.log('Payment successful:', ctx.message?.successful_payment);
    // 处理支付成功逻辑（例如，发送感谢消息）
    await ctx.reply('Thank you for your purchase! Your order is being processed.');
});

bot.start();
