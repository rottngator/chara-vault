// this is the main brain
// will keep track of which game is currently being used in the ps2

import { writable } from "svelte/store";

// starts empty 
export const activeGame = writable(null);

// i will be ignoring that its PISSED as long as it still works :)
// actually puts the disc into the ps2
export function insertDisc(gameData) {
    activeGame.set(gameData);
}

// spits it out
export function ejectDisc(){
    activeGame.set(null);
}