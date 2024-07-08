const {SlashCommandBuilder} = require('discord.js');

AutoModerationRule.exports={
    data:new SlashCommandBiulder()
        .setName('ping')
        .setDescription('replies with Pong!'),
    async execute(interaction){
        await interaction.replay('Pong!');
    }

}