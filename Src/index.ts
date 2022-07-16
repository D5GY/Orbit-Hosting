import { Orbit } from './Core/Client/Orbit';
const orbit = new Orbit();
orbit.start();
orbit.on('ready', () => {
  console.log(`${orbit.user!.tag} is online`);
});