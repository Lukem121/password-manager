<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Button from '../ReusableComponents/Button.svelte';
    import Entry from '../ReusableComponents/Entry.svelte';

    const addEntryClick = () => {

    };

</script>

<div class="wrapper">
    <Entry />
    <!-- <div class="flex-wrapper">        
        {#each $vaultStorage.entrys as entry}
            <div class="entry">
                <Entry entry={entry}/>
            </div>
        {/each}
    </div> -->
    <br>
    <br>
    
    <div class="add-btn">
        <Button  on:click={() => { modalStore.set("entry") }} icon={"add"}>Add</Button>
    </div>
</div>

<style type="text/scss">
    .add-btn {
        @media screen and (max-width: 500px) {
            position: fixed;
            bottom: 30px;
            right: 20px;
        }
    }
</style>