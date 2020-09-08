<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Button from '../ReusableComponents/Button.svelte';
    import Entry from '../ReusableComponents/Entry.svelte';
</script>

<div class="vault-wrapper">
    <div class="flex-wrapper">        
        {#each $vaultStorage.entrys as entry}
            <div class="entry">
                <Entry entry={entry}/>
            </div>
        {/each}
    </div>

    <div class="add-button-wrapper">
        <button on:click={() => { modalStore.set("entry") }}><i class="fas fa-plus-circle fa-4x"></i></button>
    </div>
    
</div>

<style type="text/scss">
    .flex-wrapper {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        .entry {
            margin-bottom: 30px;
        }

        @media screen and (max-width: 500px) {
            display: block;
        }
    }

    .add-button-wrapper {
        display: flex;
        flex-direction: row-reverse;
    }
    
    button {
        border-style: none;
        outline: none;
        background: none;
        cursor: pointer;
        i{
            color: var(--acent-colour);
        }

        @media screen and (max-width: 500px) {
            position: fixed;
            bottom: 30px;
            right: 20px;
        }
    }
</style>