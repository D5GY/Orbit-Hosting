import { EmbedBuilder } from '@discordjs/builders';
import { GuildMember } from 'discord.js';
import { utc } from 'moment';

export enum OrbitColours {
  GREEN = 0x32a852,
  RED = 0xa83632,
  BLUE = 0x3253a8
};

export const Responses = {
  WS_PING : (ping: number) => {
    return new EmbedBuilder()
      .setColor(OrbitColours.BLUE)
      .setDescription(`My ping is: ${ping}`);
  },
  MEMBER_JOIN: (member: GuildMember) => {
    return new EmbedBuilder()
      .setColor(OrbitColours.GREEN)
      .setThumbnail(member.user.displayAvatarURL())
      .addFields({
        name: 'User',
        value: `${member.user.tag}\n${member.user}\n${member.user.id}`,
        inline: false
      }, {
        name: 'Created Timestamp',
        value: `<t:${member.user.createdTimestamp}:D>\n${utc(new Date()).diff(member.user.createdTimestamp, 'days')} days old`,
        inline: false
      })
      .setFooter({ text: `Member Count: ${member.guild.memberCount}`, iconURL: member.guild.iconURL()! });
  },
  MEMBER_LEAVE: (member: GuildMember) => {
    return new EmbedBuilder()
      .setColor(OrbitColours.RED)
      .setThumbnail(member.user.displayAvatarURL())
      .addFields({
        name: 'User Tag & Mention',
        value: `${member.user.tag}\n${member.user}\n${member.user.id}`,
        inline: false
      }, {
        name: 'Created Timestamp',
        value: `<t:${member.user.createdTimestamp}:D>\n${utc(new Date()).diff(member.user.createdTimestamp, 'days')} days old`,
        inline: false
      }, {
        name: 'Joined Timestamp',
        value: `<t:${member.joinedTimestamp}:D>\n${utc(new Date()).diff(member.joinedTimestamp, 'days')} days ago`,
        inline: false
      })
      .setFooter({ text: `Member Count: ${member.guild.memberCount}`, iconURL: member.guild.iconURL()! });
  }
}