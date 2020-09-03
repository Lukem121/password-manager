import { writable } from 'svelte/store';

/**
 * Usable states! 
 *  - default
 *  - vault
 */

export const stateStore = writable("vault");