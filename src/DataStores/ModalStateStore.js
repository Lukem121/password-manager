import { writable } from 'svelte/store';

/**
 * Usable states! 
 *  - default
 *  - new
 *  - import
 *  - entry
 *  - update_entry-{ENTRY ID HERE}
 */

export const modalStore = writable("default");