<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Entry from '../ReusableComponents/Entry.svelte';
    import SortableList from '../ReusableComponents/SortableList.svelte';
    
    const sortList = ev => {
        vaultStorage.update( (n) => {
            n.entrys = ev.detail;
            return n;
        })
    };

    let lastAct;
    const sortBy = (val) => {
        console.log("Bonk");
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

<div class="vault-wrapper">

    <div class="toolbar">
        <span on:click={() => sortBy("title") } >Title <i class="fas fa-sort"></i></span>
        <span on:click={() => sortBy("username") } >Username <i class="fas fa-sort" ></i></span>
        <span on:click={() => sortBy("title") }>Updated <i class="fas fa-sort" ></i></span>
        <button on:click={() => { modalStore.set("entry") }}><i class="fas fa-plus-circle fa-2x"></i></button>
    </div>

    <div class="flex-wrapper">
        <SortableList list={$vaultStorage.entrys} key="id" on:sort={sortList} let:item >
            <div class="entry">
                <Entry entry={item}/>
            </div>
        </SortableList>
    </div>

    <!-- <div class="flex-wrapper">
        {#each $vaultStorage.entrys as entry}
            <div class="entry">
                
            </div>
        {/each}
    </div> -->

    <div class="mobile-toolbar">
        <div></div>
        <button on:click={() => { modalStore.set("entry") }}><i class="fas fa-plus-circle fa-4x"></i></button>
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
            button {
                display: none;
            }
        }
    }

    .mobile-toolbar {
        display: none;
        @media screen and (max-width: 500px) {
            display: flex;
            flex-direction: row-reverse;
            div{
                position: fixed;
                bottom: 35px;
                right: 35px;
                border-radius: 25px;
                background: black;
                padding: 20px;
            }
            button {
                position: fixed;
                bottom: 30px;
                right: 20px;
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
</style>