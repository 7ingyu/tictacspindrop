import type { PlayerData, PrivateGameData } from "../../types";

const x = '\u2573';
const o = '\u25EF';

const queue: { name: string, socket: string }[] = []
const players: { [key: string]: PlayerData } = {}
const games: { [key: string]: PrivateGameData } = {}

export { x, o, queue, players, games }