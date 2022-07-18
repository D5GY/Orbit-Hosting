import { GuildMember, WebhookClient } from 'discord.js';
import { Orbit } from '../Core/Client/Orbit';
module.exports = async (member: GuildMember & { client: Orbit }) => {
  const { client } = member;
  if (member.guild.id !== client.config.guildID) return;
  const memberWebhook = new WebhookClient({ id: client.config.WEBHOOKS.JOIN.ID, token: client.config.WEBHOOKS.JOIN.TOKEN });

  memberWebhook.send({
    embeds: [client.responses.MEMBER_JOIN(member)]
  });
}