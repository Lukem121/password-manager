<script>
    import { goto } from '@sapper/app';
    import { onMount } from 'svelte';
    import { vaultStorage } from '../VaultStore.js';
    import { userStore } from '../userStore.js';
    import { CryptoJS } from '../aes';
    import Entry from "../components/Entry.svelte";
    import SortableList from "../components/SortableList.svelte";
    import SyncButton from "../components/SyncButton.svelte";
    import { scale } from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';

    let loggedIn = false;
    let uid;
    let auth;
    let db;

	// onMount(async () => {
	// 	const module = await import('../firebase');
	// 	auth = module.auth;
    //     db = module.db;
    //     auth.onAuthStateChanged( u => {
    //         if (u) {
    //             loggedIn = true;
    //             uid = u.uid;
    //             console.log("Logged in");
    //         } else {
    //             console.log("Not logged in");
    //         }
    //     });
    // });
    
    $: {
        saveVault($vaultStorage);
    }

    const saveVault = () => {
        let encryptedData = CryptoJS.AES.encrypt(JSON.stringify($vaultStorage), $vaultStorage.passphrase).toString();
        let saveObj = {
            'encrypted': true,
            'saveDateTime': new Date(),
            'data': encryptedData
        };
        let md5 = CryptoJS.MD5(JSON.stringify(saveObj).replace(/\s+/g, ' ').trim()).toString()
        let newObj = {"valid": md5, ...saveObj}
        console.log("Saving...");
        if (loggedIn) {
            console.log("Found userstore");
            db.collection('vaults').doc(uid).set(newObj)
            .then(function() {
                console.log("Document successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error);
            });
        } else {
            // No user is signed in.
        }
        localStorage.setItem('r-vault', JSON.stringify(newObj));
    }

    const handleSyncClick = () => {
        if(loggedIn){
            saveVault();
        }else{
            goto("sync");
        }
    }
    
    const sortList = ev => {
        vaultStorage.update( (n) => {
            n.entrys = ev.detail;
            return n;
        })
    };

    let fakedata = [{
        id: 4,
        title: "Reddit",
        username: "Jebby21",
        password: "Password123",
        url: "http://www.reddit.com",
        notes: "No notes...",
        updated: new Date()
    },{
        id: 5,
        title: "Amazon",
        username: "Mongo22",
        password: "Password123",
        url: "http://www.amazon.co.uk",
        notes: "No notes...",
        updated: new Date()
    },{
        id: 1,
        title: "Facebook",
        username: "PolosMe22",
        password: "Password123 the arrow ↙",
        url: "http://www.facebook.com",
        notes: "No notes...",
        updated: new Date()
    },{
        id: 7,
        title: "PayPal",
        username: "@morriscalls",
        password: "Password123",
        url: "http://www.paypal.com",
        notes: "No notes...",
        updated: new Date()
    },{
        id: 8,
        title: "Uber",
        username: "chonksMogs22",
        password: "Password123",
        url: "http://www.uber.com",
        notes: "No notes...",
        updated: new Date()
    }];
    
    let testDataCount = 0;
    let loadedFake = false;
    const loadTestData = () => {
        testDataCount = testDataCount + 1;
        if(testDataCount > 10 && !loadedFake){
            loadedFake = true;
            vaultStorage.update( (n) => {
                n.entrys = [...fakedata, ...n.entrys];
                return n;
            })
        }
    }

    let lastAct;
    const sortBy = (val) => {
        let comparator = null;
        if(lastAct ==  val){
            vaultStorage.update((n) => {
                n.entrys = n.entrys.reverse();
                return n;
            })
            return
        }
        if(val == "title"){
            lastAct = "title"
            comparator = (a, b) => {
                if(a.title < b.title) { return -1; }
                if(a.title > b.title) { return 1; }
                return 0;
            }
        }else if(val == "username"){
            lastAct = "username"
            comparator = (a, b) => {
                if(a.username < b.username) { return -1; }
                if(a.username > b.username) { return 1; }
                return 0;
            }
        }else if(val == "updated"){
            lastAct = "updated"
            comparator = (a, b) => {
                if(a.updated < b.updated) { return -1; }
                if(a.updated > b.updated) { return 1; }
                return 0;
            }
        }
        vaultStorage.update((n) => {
            n.entrys = n.entrys.sort(comparator);
            return n;
        })
    }
    
</script>

<div class="vault-wrapper" transition:scale="{{duration: 250, opacity: 0.5, start: 0.5, easing: sineInOut}}">

    <div class="toolbar">
        <span on:click={() => { 
            loadTestData();
            sortBy("title");
        } } >Title <i class="fas fa-sort"></i></span>
        <span on:click={() => sortBy("username") } >Username <i class="fas fa-sort" ></i></span>
        <span on:click={() => sortBy("updated") }>Updated <i class="fas fa-sort" ></i></span>
        <div class="sync-add">
            <span class="sync-btn" on:click={handleSyncClick} rel=prefetch><SyncButton /></span>
            <button on:click={() => { goto("newentry") }}><i class="fas fa-plus-circle"></i></button>
        </div>
    </div>

    <div class="flex-wrapper">
        <SortableList list={$vaultStorage.entrys} key="id" on:sort={sortList} let:item >
            <div class="entry">
                <Entry entry={item}/>
            </div>
        </SortableList>
    </div>

    <div class="mobile-toolbar">
        <div class="add-btn-bg"></div>
        <span on:click={handleSyncClick} ><SyncButton class="sync-btn"/></span>
        <button class="add" on:click={() => { goto("newentry") }}><i class="fas fa-plus-circle"></i></button>
    </div>

    <div class="bottom-links">
        <a href="http://www.github.com/lukem121"><i class="fab fa-github"></i><span>GitHub</span></a>
        <a href="https://www.linkedin.com/in/luke-askew/"><i class="fab fa-linkedin"></i><span>Linkedin</span></a>
        <a href="/settings"><span id="settings">Settings</span><i class="fas fa-cog"></i></a>
    </div>
    <!-- <button on:click={() => {
        auth.signOut().then(function() {
            // Sign-out successful.
            }).catch( e => {
                console.log(e.code);
                console.log(e.message);
            });}}>Sign out</button> -->
    
</div>

<style>

    .flex-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
    }
    .entry {
        margin: 20px 10px;
    }
    @media screen and (max-width: 500px) {
        .flex-wrapper {
            display: block;
        }
        .entry {
            margin: 0 0 30px;
        }
    }

    .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 5px 20px 5px 20px;
        background-color: var(--bg-dark-colour);
        border-radius: 12px;
    }
    .toolbar span {
        cursor: pointer;
        
    }
    .toolbar span i{
        color: var(--acent-colour);
    }
    .sync-add i{
        vertical-align: middle;
        font-size: 1.5rem;
    }

    @media screen and (max-width: 500px) {
        .toolbar {
            margin-bottom: 20px;
        }
        
        .sync-add {
            display: none;
        }
    }

    .mobile-toolbar {
	    display: none;
    }
    @media screen and (max-width: 500px) {
        .mobile-toolbar {
            display: flex;
            justify-content: flex-end;
            position: fixed;
            bottom: 45px;
            right: 26px;
        }
        .mobile-toolbar i {
            vertical-align: middle;
            font-size: 1.5rem;
        }
    }
    button {
        border-style: none;
        outline: none;
        background: none;
        cursor: pointer;
    }
    button i {
        color: var(--acent-colour);
    }
    .bottom-links {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 10px 10px;
        margin-bottom: 90px;
        border-radius: 16px;
        background: var(--bg-dark-colour);
    }
    .bottom-links a {
        font-size: 2rem;
        color: var(--acent-colour);
        background: none;
    }
    .bottom-links a span {
        margin-left: 10px;
        font-size: 0.8rem;
    }
    .bottom-links a #settings {
        margin-left: 0;
        margin-right: 10px;
    }
 
</style>