import { writable } from 'svelte/store';

/**
 * Usable states! 
 *  - default
 *  - new
 */

export const modalStore = writable("default");