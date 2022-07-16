import { Snowflake } from "discord.js";

export interface config {
  TOKEN: string;
  guildID: Snowflake;
  ROLES: {
    UNVERIFIED: Snowflake;
    VERIFIED: Snowflake;
  }
};