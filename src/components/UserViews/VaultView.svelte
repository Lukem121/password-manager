<script>
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Button from '../ReusableComponents/Button.svelte';

    const addEntryClick = () => {

    };

</script>

<div class="wrapper">

    <!-- //Make add new entry modal -->
    <Button on:click={addEntryClick} icon={"add"}>Add</Button>

    <button on:click={() => {
        console.log($vaultStorage);
    }}></button>
</div>

<style type="text/scss">
</style>