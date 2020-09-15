<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Entry from '../ReusableComponents/Entry.svelte';
    import SortableList from '../ReusableComponents/SortableList.svelte';

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
        localStorage.setItem('r-vault', JSON.stringify(newObj));
    }
    
    const sortList = ev => {
        vaultStorage.update( (n) => {
            n.entrys = ev.detail;
            return n;
        })
    };

    const toggleSettings = () => {
        modalStore.set("settings");
    }

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


    function spin(node, { duration }) {
		return {
			duration,
			css: t => {
				const eased = elasticOut(t);

				return `
					transform: scale(${eased}) rotate(${eased * 1080}deg);
					color: hsl(
						${~~(t * 360)},
						${Math.min(100, 1000 - 1000 * t)}%,
						${Math.min(50, 500 - 500 * t)}%
					);`
			}
		};
    }
    
</script>

<div class="vault-wrapper">

    <div class="toolbar">
        <span on:click={() => { 
            loadTestData();
            sortBy("title");
        } } >Title <i class="fas fa-sort"></i></span>
        <span on:click={() => sortBy("username") } >Username <i class="fas fa-sort" ></i></span>
        <span on:click={() => sortBy("title") }>Updated <i class="fas fa-sort" ></i></span>
        <div class="sync-add">
            <button class="sync" ><i class="fas fa-sync fa-2x"></i></button>
            <button on:click={() => { modalStore.set("entry") }}><i class="fas fa-plus-circle fa-2x"></i></button>
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
        <button class="sync" ><i class="fas fa-sync"></i></button>
        <button class="add" on:click={() => { modalStore.set("entry") }}><i class="fas fa-plus-circle"></i></button>
    </div>

    <div class="bottom-links">
        <a href="http://www.github.com/lukem121"><i class="fab fa-github"></i><span>GitHub</span></a>
        <a href="https://www.linkedin.com/in/luke-askew/"><i class="fab fa-linkedin"></i><span>Linkedin</span></a>
        <a href="#settings" on:click={toggleSettings}><span id="settings">Settings</span><i class="fas fa-cog"></i></a>
    </div>
    
    
</div>

<style type="text/scss">
    .flex-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-evenly;
        .entry {
            margin: 20px 10px;
        }

        @media screen and (max-width: 500px) {
            display: block;
            .entry {
                margin: 0 0 30px;
            }
        }
    }

    .toolbar {
        display: flex;
        justify-content: space-between;
        align-items: center;

        padding: 5px 20px 5px 20px;
        background-color: var(--bg-dark-colour);
        border-radius: 12px;

        span {
            cursor: pointer;
            i{
                color: var(--acent-colour);
            }
        }

        @media screen and (max-width: 500px) {
            margin-bottom: 20px;
            .sync-add {
                display: none;
            }
        }
    }

    .mobile-toolbar {
        display: none;
        
        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: row-reverse;
            .add-btn-bg{
                position: fixed;
                bottom: 45px;
                right: 26px;
                border-radius: 25px;
                background: black;
                padding: 20px;
            }
            button {
                position: fixed;
                font-size: 2.7rem;
            }
            .add {
                bottom: 30px;
                right: 20px;
            }
            .sync {
                bottom: 30px;
                right: 80px;
            }
        }
    }

    button {
        border-style: none;
        outline: none;
        background: none;
        cursor: pointer;
        i{
            color: var(--acent-colour);
        }

        
    }

    .bottom-links {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;
        padding: 10px 10px;
        margin-bottom: 90px;
        border-radius: 16px;
        background: var(--bg-dark-colour);
        a{
            font-size: 2rem;
            color: var(--acent-colour);
            background: none;
            span{
                margin-left: 10px;
                font-size: .8rem;
            }
            #settings{
                    margin-left: 0;
                    margin-right: 10px;
                }
        }
    }
</style>