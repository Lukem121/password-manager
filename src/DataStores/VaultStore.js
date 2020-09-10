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
    username: "Lukem121",
    password: "Happygonk123",
    url: "facebook.com",
    notes: "No notes...",
    updated: new Date()
},
{
    id: 45234545,
    title: "Google",
    username: "4",
    password: "CrypticMist22",
    url: "google.com",
    notes: "This is the same for my other Google account",
    updated: new Date()
},
{
    id: 4524353445,
    title: "Twitter",
    username: "1",
    password: "Twinseats22",
    url: "twitter.com",
    notes: "This is a fake account",
    updated: new Date()
},
{
    id: 2342234,
    title: "Reddit",
    username: "Jebby21",
    password: "B£txz02nasn",
    url: "reddit.com",
    notes: "No notes...",
    updated: new Date()
},
{
    id: 45245,
    title: "Amazon",
    username: "5",
    password: "Happygonk123",
    url: "amazon.co.uk",
    notes: "No notes...",
    updated: new Date()
},
{
    id: 45245,
    title: "Netflix",
    username: "5",
    password: "Happygonk123",
    url: "netflix.com",
    notes: "Abbie also has acces to this",
    updated: new Date()
},
{
    id: 45245,
    title: "PayPal",
    username: "2",
    password: "Happygonk123",
    url: "paypal.com",
    notes: "Must stop shopping",
    updated: new Date()
},
{
    id: 45245,
    title: "Uber",
    username: "3",
    password: "Happygonk123",
    url: "uber.com",
    notes: "Must stop shopping",
    updated: new Date()
}
]

export const vaultStorage = writable({
    vaultName : "blank",
    passphrase : "blank",
    entrys : fakeData,
});