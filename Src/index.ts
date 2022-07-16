import { Orbit } from './Core/Client/Orbit';
const client = new Orbit();
client.start();
client.on('ready', async () => {
  console.log(`${client.user!.tag} is online`);
});