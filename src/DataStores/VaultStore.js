import { writable } from 'svelte/store';

// entryLayout = {
//     id,
//     title,
//     username,
//     password,
//     url,
//     notes
// }

export const vaultStorage = writable({
    vaultName : "blank",
    passphrase : "blank",
    entrys : [],
    addEntry : (entry) =>{
        this.entrys = [entry, ...this.entrys];
    },
    removeEntry: (entry) => {
        console.log(`Removed ${enrty}`);
    }
});