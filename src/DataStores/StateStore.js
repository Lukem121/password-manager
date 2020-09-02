import { writable } from 'svelte/store';

/**
 * Usable states! 
 *  - default
 *  - new
 *  - import
 */

export const stateStore = writable("default");