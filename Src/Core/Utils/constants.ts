import { EmbedBuilder } from '@discordjs/builders';

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
  }
}