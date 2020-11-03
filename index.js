import Discord from 'discord.js'
import dotenv from 'dotenv'

const listOfNerdNames = ['wow', 'world of warcraft', 'warcraft', 'vampire live']

dotenv.config()

var client = new Discord.Client()

client.login(process.env.TOKEN)

client.on('ready', (e) => {
    console.info('Connected')
    console.info(`Logged in as: ${client.user.tag}`)
})

client.on('voiceStateUpdate', (oldState, newState) => {
    const { channel } = newState
    const { member } = newState

    const oldName = oldState?.channel?.name || null

    if (channel.name && channel.name != oldName) {
        const { name } = channel

        if (listOfNerdNames.includes(name.toLowerCase())) {
            member.send('Stop being a nerd')
        }
    }
})
