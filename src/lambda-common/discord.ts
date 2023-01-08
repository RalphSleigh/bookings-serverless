import { Client, Events, GatewayIntentBits } from 'discord.js'

export async function postToDiscord(config, message) {
    if (config.DISCORD_ENABLED) {
        const client = new Client({ intents: [GatewayIntentBits.Guilds] })
        await client.login(config.DISCORD_BOT_TOKEN)
        const guild = await client.guilds.fetch(config.DISCORD_GUILD_ID)
        const channel = await guild.channels.fetch(config.DISCORD_CHANNEL_ID)
        //@ts-ignore
        await channel!.send(message);
    }
}
