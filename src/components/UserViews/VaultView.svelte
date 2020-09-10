<script lang="ts">
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Entry from '../ReusableComponents/Entry.svelte';
</script>

<div class="vault-wrapper">

    <div class="toolbar">
        <span>Title <i class="fas fa-sort"></i></span>
        <span>Username <i class="fas fa-sort"></i></span>
        <span>Updated <i class="fas fa-sort"></i></span>
        <button on:click={() => { modalStore.set("entry") }}><i class="fas fa-plus-circle fa-2x"></i></button>
    </div>

    <div class="flex-wrapper">
        {#each $vaultStorage.entrys as entry}
            <div class="entry">
                <Entry entry={entry}/>
            </div>
        {/each}
    </div>

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