import { writable } from 'svelte/store';

/**
 * Usable states! 
 *  - default
 *  - new
 *  - import
 *  - entry
 */

export const modalStore = writable("default");