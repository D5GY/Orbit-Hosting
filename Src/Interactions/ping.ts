import { BaseInteraction, CacheType, ChatInputCommandInteraction, Client } from "discord.js";
import { Orbit } from "../Core/Client/Orbit";

module.exports = {
  name: 'ping',
  description: 'get the bots api ping!',
  async run(interaction: BaseInteraction<CacheType> & { client: Orbit; } & ChatInputCommandInteraction<CacheType>, client: Client<boolean> & Orbit) {
    await interaction.deferReply({
      ephemeral: true
    });
    await interaction.editReply({
      embeds: [client.responses.WS_PING(client.ws.ping)]
    });
  }
}