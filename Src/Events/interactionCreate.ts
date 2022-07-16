import { BaseInteraction } from 'discord.js';
import { Orbit } from '../Core/Client/Orbit';

module.exports = async (interaction: BaseInteraction & { client: Orbit }) => {
  const { client } = interaction;
  if (interaction.isChatInputCommand()) {
    const interactionCommand: any = client.interactions.get(interaction.commandName);
    if (!interactionCommand) return;
    try {
      interactionCommand.run(interaction, client);
    } catch (error) {
      if (interaction.replied) {
        await interaction.editReply({
          content: `An unexcepted error occured.`
        }).catch(() => { });
      } else {
        await interaction.followUp({
          ephemeral: true,
          content: `An unexcepted error occured.`
        }).catch(() => { });
      }
      console.error(`SynAckL ~ ERROR: ${error}`);
    }
  }
}