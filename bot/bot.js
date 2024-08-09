
// These lines make "require" available
import { createRequire } from "module";
const require = createRequire(import.meta.url);

const { Telegraf } = require ( 'telegraf');
const { message } = require('telegraf/filters')

// Token del Bot
const bot_token = 'TOKEN';

// Declaracion de Mensajes
const startMessage = 'Hola! Soy el bot de QvaEx. ¿Necesitas ayuda? presiona /help';
const helpMessage = 'Estoy aquí para ayudarte con tus dudas.';
const onMessage = ` Estoy aquí para ayudarte con tus dudas.`;
const stickerMessage = 'Sticker recibido ♥';

// Creacion del Bot
const Bot = new Telegraf (process.env.BOT_TOKEN || bot_token);

// Funciones del bot
Bot.start((ctx)=>{ ctx.reply(startMessage); });
Bot.help((ctx)=>{ ctx.reply(helpMessage); });
Bot.on(message('sticker'), (ctx) => { ctx.reply(stickerMessage); });
Bot.on(message('text'), (ctx) => { ctx.reply(`Hola,  ${ctx.from.first_name}! ${onMessage}`); });

Bot.launch();