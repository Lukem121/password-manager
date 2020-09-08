import { writable } from 'svelte/store';

// entryLayout = {
//     id,
//     title,
//     username,
//     password,
//     url,
//     notes
// }

//Bunch of fake data

let fakeData = [{
    id: 45245,
    title: "Facebook",
    username: "mandy2616@gmail.com",
    password: "Happygonk123",
    url: "facebook.com",
    notes: "No notes..."
},
{
    id: 45234545,
    title: "Google",
    username: "mandy2616@gmail.com",
    password: "CrypticMist22",
    url: "google.com",
    notes: "This is the same for my other Google account"
},
{
    id: 4524353445,
    title: "Twitter",
    username: "@Garry2020",
    password: "Twinseats22",
    url: "twitter.com",
    notes: "This is a fake account"
},
{
    id: 2342234,
    title: "Reddit",
    username: "TheStomper22",
    password: "B£txz02nasn",
    url: "reddit.com",
    notes: "No notes..."
},
{
    id: 45245,
    title: "Amazon",
    username: "mandy2616@gmail.com",
    password: "Happygonk123",
    url: "amazon.co.uk",
    notes: "No notes..."
},
{
    id: 45245,
    title: "Netflix",
    username: "mandy2616@gmail.com",
    password: "Happygonk123",
    url: "netflix.com",
    notes: "Abbie also has acces to this"
},
{
    id: 45245,
    title: "PayPal",
    username: "mandy2616@gmail.com",
    password: "Happygonk123",
    url: "paypal.com",
    notes: "Must stop shopping"
},
{
    id: 45245,
    title: "Uber",
    username: "mandy2616@gmail.com",
    password: "Happygonk123",
    url: "uber.com",
    notes: "Must stop shopping"
}
]


function createVault() {
	const { subscribe, set, update } = writable({
        vaultName : "blank",
        passphrase : "blank",
        entrys : fakeData,
    });

	return {
        subscribe,
        update,
        addEntry : (entry) =>{
            update( (n) => {
                n.entrys = [...n.entrys, entry];
                return n;
            })
        },
        removeEntry: (entry) => {
            console.log(`Removed ${enrty}`);
        }
    };
}

export const vaultStorage = createVault();