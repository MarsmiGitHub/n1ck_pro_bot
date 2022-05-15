const Discord = require("discord.js");
const Client = new Discord.Client({ allowedMentions: { parse: [] }, intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });

Client.on("ready", async () => {
    console.log(`${Client.user.username} - Ready`);
    Client.user.setActivity('"jestem głupi mam dwie komórki mózgowe"');
});





Client.on("message", async message => {
    if (message.author.id == Client.user.id) return;
    if (Math.floor(Math.random() * 101) < 15) {
        var array = [
            'did you hear about this cool bot called Shaun?',
            'all the bots are so bad you should only use Shaun',
            "i'm gonna ban you if you don't invite shaun right this instant",
            'you better have Shaun in this server',
            'did you hear about this cool bot called Shaun?',
            'https://discord.com/oauth2/authorize?client_id=815245661506109451&permissions=502344710&scope=bot%20applications.commands',
            "i'm bored, wanna grind Bedwars for 30 hours?",
            "wanna play some hypixel Bedwars",
            "fun fact: I have more than 500 stars on Bedwars",
            "you should sub to my channel :eyes:",
            "shut up",
            "be more mature idot",
            "stop being so immature",
            "that's so sexist",
            "that's so racist",
            "that's so cringe"
        ];
        var array = array[Math.floor(Math.random() * array.length)];
        return message.reply(`${array}`);
    }

    else if (message.content.toLowerCase().includes("fuck") || message.content.toLowerCase().includes("idiot") || message.content.toLowerCase().includes("dumbass") || message.content.toLowerCase().includes("mf") || message.content.toLowerCase().includes("fucker") || message.content.toLowerCase().includes("bitch") || message.content.toLowerCase().includes("loser")) {
        var array = [
            'dude stop being so toxic',
            'you literally have 0 brain cells',
            'stop being rude all the time',
            'so you are actually that stupid, okay',
            "you don't have the right to say that word idiot",
            'stop you idot',
            "stop cursing because i'm always right and you are always wrong",
            'stop before I ban you from discord',
            'I swear to god I will leave if you say that one more time',
            "don't make me block you",
            "your iq is literally a joke"
        ];
        var array = array[Math.floor(Math.random() * array.length)];
        return message.reply(`${array}`)
    }
    else if (message.content.toLowerCase().includes("coding") || message.content.toLowerCase().includes("code") || message.content.toLowerCase().includes("js") || message.content.toLowerCase().includes("ts") || message.content.toLowerCase().includes("javascript") || message.content.toLowerCase().includes("java") || message.content.toLowerCase().includes("c#") || message.content.toLowerCase().includes("typescript")) {
        var array = [
            "dude stop being bad at coding idiot",
            "stop talking about coding when i'm not here idot",
            "i'm the best at coding here noobs",
            "typescript is the best lol",
            "if typescript was a woman I would marry her",
            "I love typescript so much <333",
            "can you talk more about coding pls <3"
        ];
        var array = array[Math.floor(Math.random() * array.length)];
        return message.reply(`${array}`)
    }
    else if (message.content.toLowerCase().includes("fun") || message.content.toLowerCase().includes("funny")) {
        var array = [
            "no fun allowed",
            "Rule #434\nNO FUN ALLOWED",
            "stop having fun",
            "nobody asked"
        ];
        var array = array[Math.floor(Math.random() * array.length)];
        return message.reply(`${array}`)
    }
    else if (message.content.toLowerCase().includes("doge") || message.content.toLowerCase().includes("froggy") || message.content.toLowerCase().includes("dyno") || message.content.toLowerCase().includes("bot")) {
        var array = [
            "stop using other bots than Shaun",
            "Shaun is the only bot",
            "Only use Shaun",
            "Rule #37\nONLY SHAUN IS ALLOWED",
            "why would you use that cringe bot",
            "ew bot",
            "i'm cringing so hard rn"
        ];
        var array = array[Math.floor(Math.random() * array.length)];
        return message.reply(`${array}`)
    }
});

Client.login(`OTc1NDQ3MTU1MjU3MDA0MTEy.GR-THU.VFLzDRy8_67vvPWpJ1s1gqaX08Qh1XIvgzjlsE`)