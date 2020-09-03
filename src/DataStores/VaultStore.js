import { writable } from 'svelte/store';

// entryLayout = {
//     id,
//     title,
//     username,
//     password,
//     url,
//     notes
// }

function createVault() {
	const { subscribe, set, update } = writable({
        vaultName : "blank",
        passphrase : "blank",
        entrys : [],
    });

	return {
        subscribe,
        update,
        addEntry : (entry) =>{
            update( (n) => {
                n.entrys = [entry, ...n.entrys];
                return n;
            })
        },
        removeEntry: (entry) => {
            console.log(`Removed ${enrty}`);
        }
    };
}

export const vaultStorage = createVault();