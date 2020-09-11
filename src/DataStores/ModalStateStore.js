import { writable } from 'svelte/store';

/**
 * Usable states! 
 *  - default
 *  - new
 *  - import
 *  - entry
 *  - update_entry-{ENTRY ID HERE}
 *  - enter-passphrase
 */

export const modalStore = writable("default");