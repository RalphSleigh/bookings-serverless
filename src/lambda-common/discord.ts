import { Client, Events, GatewayIntentBits } from 'discord.js'

export async function postToDiscord(config, message) {
    if (config.DISCORD_ENABLED) {
        const client = new Client({ intents: [GatewayIntentBits.Guilds] })
        await client.login(config.DISCORD_BOT_TOKEN)
        const guild = await client.guilds.fetch(config.DISCORD_GUILD_ID)
        const channel = await guild.channels.fetch("1061621786002849792")
        //@ts-ignore
        await channel!.send(message);
    }
}


