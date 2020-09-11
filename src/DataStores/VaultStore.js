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
    id: 1,
    title: "Facebook",
    username: "Lukem121",
    password: "Happygonk123",
    url: "http://www.facebook.com",
    notes: "No notes...",
    updated: new Date()
},
{
    id: 2,
    title: "Google",
    username: "4",
    password: "CrypticMist22",
    url: "http://www.google.com",
    notes: "This is the same for my other Google account",
    updated: new Date()
},
{
    id: 3,
    title: "Twitter",
    username: "1",
    password: "Twinseats22",
    url: "http://www.twitter.com",
    notes: "This is a fake account",
    updated: new Date()
},
{
    id: 4,
    title: "Reddit",
    username: "Jebby21",
    password: "B£txz02nasn",
    url: "http://www.reddit.com",
    notes: "No notes...",
    updated: new Date()
},
{
    id: 5,
    title: "Amazon",
    username: "5",
    password: "Happygonk123",
    url: "http://www.amazon.co.uk",
    notes: "No notes...",
    updated: new Date()
},
{
    id: 6,
    title: "Netflix",
    username: "5",
    password: "Happygonk123",
    url: "http://www.netflix.com",
    notes: "Abbie also has acces to this",
    updated: new Date()
},
{
    id: 7,
    title: "PayPal",
    username: "2",
    password: "Happygonk123",
    url: "http://www.paypal.com",
    notes: "Must stop shopping",
    updated: new Date()
},
{
    id: 8,
    title: "Uber",
    username: "3",
    password: "Happygonk123",
    url: "http://www.uber.com",
    notes: "Must stop shopping",
    updated: new Date()
}
]

export const vaultStorage = writable({
    vaultName : "blank",
    passphrase : "blank",
    entrys : fakeData,
});