<script>
    import { modalStore } from '../DataStores/ModalStateStore.js';
    import NewVault from './UserModals/NewVault.svelte';
    import ImportVault from './UserModals/ImportVault.svelte';
    import NewEntry from './UserModals/NewEntry.svelte';
    import UpdateEntry from './UserModals/UpdateEntry.svelte';
</script>

<div>
    {#if $modalStore == "new"}
        <NewVault />
    {:else if $modalStore == "import"}
        <ImportVault />
    {:else if $modalStore == "entry"}
        <NewEntry />
    {:else if $modalStore.split('-').shift() == "update_entry"}
        <UpdateEntry entryToUpdate={$modalStore.split('-').pop()}/>
    {/if}
</div>

<style>
</style>