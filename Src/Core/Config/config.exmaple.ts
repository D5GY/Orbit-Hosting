import { ClientOptions, IntentsBitField, Partials } from "discord.js";
import { config as ClientConfig } from '../Utils/types';

export const clientOptions: ClientOptions = {
  allowedMentions: { parse: [], repliedUser: false },
  intents: [
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildWebhooks,
    IntentsBitField.Flags.Guilds
  ],
  partials: [
    Partials.GuildMember,
    Partials.User
  ],
  presence: {
    status: 'online',
    activities: [{
      name: ''
    }]
  }
}

export const config: ClientConfig = {
  TOKEN: '',
  guildID: '',
  ROLES: {
    UNVERIFIED: '',
    VERIFIED: ''
  }
}