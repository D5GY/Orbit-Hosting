import { Client, Collection } from 'discord.js';
import { clientOptions, config } from '../Config/config';
import { config as configType } from '../Utils/types';

export class Orbit extends Client {
  public config: configType;
  public interactions = new Collection();
  interactionData: Array<Object>;
  constructor() {
    super(clientOptions);
    this.config = config;
    this.interactionData = [];
  }
  start() {
    super.login(config.TOKEN);
  }
}