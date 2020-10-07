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

let fakeData = [
{
    id: 2,
    title: "Google",
    username: "Tutorial Card 😀",
    password: "Password123",
    url: "http://www.google.com",
    notes: "👉 When this draw is open you can edit the data using the edit button in the top right of this card",
    updated: new Date()
},
{
    id: 3,
    title: "Twitter",
    username: "Tutorial Card 😎",
    password: "Password123",
    url: "http://www.twitter.com",
    notes: "👉 Next to each value there is a copy button that you can use to quickly save the data to the clipboard",
    updated: new Date()
},
{
    id: 6,
    title: "Netflix",
    username: "Tutorial Card 😇",
    password: "Password123",
    url: "http://www.netflix.com",
    notes: "👉 All data is stored locally so you will need to use the export string to move your passwords to a new device. Note that passwords will not sync across devices",
    updated: new Date()
}
]

export const vaultStorage = writable({
    entrys : fakeData,
});