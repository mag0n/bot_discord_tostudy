const { SlashCommandBuilder } = require('discord.js')


module.exports = {
    data: new SlashCommandBuilder()
    .setName('playlist')
    .setDescription('Ouça uma playlist para estudar ou só relaxar :P'),

    async execute(interaction){
    await interaction.reply('https://open.spotify.com/playlist/5bWjbsAqxaTTDxxwbVGJwH?si=3f19946f96534cbe')
}
    }