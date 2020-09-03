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

    {#each $vaultStorage.entrys as entry}
		<Entry entry={entry}/>
	{/each}
    <br>
    <div class="btn">
    <Button  on:click={() => { modalStore.set("entry") }} icon={"add"}>Add</Button>
    
    </div>

</div>

<style type="text/scss">
    .wrapper {
        .btn{
            margin-left: 15px;
        }
    }
</style>