import { Client, Events, GatewayIntentBits } from 'discord.js'
import { serializeError } from 'serialize-error'

export async function postToDiscord(config, message) {
    try {
        if (config.DISCORD_ENABLED) {
            console.log("posting to discord")
            const client = new Client({ intents: [GatewayIntentBits.Guilds] })
            await client.login(config.DISCORD_BOT_TOKEN)
            const guild = await client.guilds.fetch(config.DISCORD_GUILD_ID)
            const channel = await guild.channels.fetch(config.DISCORD_CHANNEL_ID)
            //@ts-ignore
            await channel!.send(message);
            await client.destroy()
        }
    }
    catch (e) {
        console.log("Error posting to discord")
        console.log(serializeError(e))
    }
}
