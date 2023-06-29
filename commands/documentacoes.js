const { SlashCommandBuilder, ActionRowBuilder, StringSelectMenuBuilder } = require('discord.js')

const row = new ActionRowBuilder()
    .addComponents(
        new StringSelectMenuBuilder()
            .setCustomId("select")
            .setPlaceholder("Nenhuma linguagem selecionada")
            .addOptions({
                label: "javascript",
                description: "Veja a documentacao do JavaScript",
                value: "javascript"
            },
            {
                label: "python",
                description: "Veja a documentação de Python",
                value: "python"
            },
            {
                label: "java",
                description: "Veja a documentação do Java",
                value: "java"
            },
            {
                label: "discord.js",
                description: "Veja a documentação de Discord.js",
                value: "discordjs"
            }
        )
    )

module.exports = {
    data: new SlashCommandBuilder()
    .setName('docs')
    .setDescription('Acesse a documentação da tecnologia que quiser :)'),

    async execute(interaction){
    await interaction.reply({content: "Selecione uma das tecnologias abaixo: ", components: [row]})
}
    }