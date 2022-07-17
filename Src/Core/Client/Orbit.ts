import { Client, Collection } from 'discord.js';
import { clientOptions, config } from '../Config/config';
import { config as configType } from '../Utils/types';
import { promises as fs } from 'fs';
import { Responses } from '../Utils/constants';

export class Orbit extends Client {
  public config: configType;
  public interactions = new Collection();
  public interactionCount!: number;
  public eventCount!: number;
  public interactionData: Array<any>;
  public responses: any;
  constructor() {
    super(clientOptions);
    this.config = config;
    this.responses = Responses;
    this.interactionData = [];
    this.interactionCount = 0;
    this.eventCount = 0;
  }
  async loadEvents() {
    const eventsDir = `${__dirname}/../../Events`;
    const events = await fs.readdir(eventsDir);
    for (let event of events) {
      if (!event.endsWith('.js')) continue;
      event = event.split('.')[0];
      this.on(event, require(`${eventsDir}/${event}`));
      delete require.cache[require.resolve(`${eventsDir}/${event}`)];
      this.eventCount++;
    }
    console.log(`[Orbit Hosting] ~ Loaded ${this.eventCount} events`);
  }
  async loadInteractions() {
    const interactionDir = `${__dirname}/../../Interactions`;
    const files = await fs.readdir(interactionDir);
    for (let file of files) {
      if (!file.endsWith('.js')) continue;
      const interaction: any = require(`${interactionDir}/${file}`);
      if (!interaction.name || !interaction.description) return console.log(`[Orbit Hosting] ~ ERROR: ${interaction} doesn't have a valid file setup, missing name or description.`);
      this.interactions.set(interaction.name, interaction);
      this.interactionData.push(interaction);
      this.interactionCount++;
    }
    console.log(`[Orbit Hosting] ~ Loaded ${this.interactionCount} interaction commands`);
  }
  async start() {
    await this.loadEvents();
    await this.loadInteractions();
    await super.login(config.TOKEN);
    await this.guilds.cache.get(this.config.guildID)?.commands.set(this.interactionData).then(() => {
      console.log('[Orbit Hosting] ~ Guild Interactions Set.');
    }).catch((error) => {
      console.log(`[Orbit Hosting] ~ ERROR: ${error}`);
    });
  }
}