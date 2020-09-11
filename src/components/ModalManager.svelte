<script>
    import { modalStore } from '../DataStores/ModalStateStore.js';
    import NewVault from './UserModals/NewVault.svelte';
    import ImportVault from './UserModals/ImportVault.svelte';
    import NewEntry from './UserModals/NewEntry.svelte';
</script>

<div>
    {#if $modalStore == "new"}
        <NewVault />
    {:else if $modalStore == "import"}
        <ImportVault />
    {:else if $modalStore == "entry"}
        <NewEntry />
    {/if}
</div>

<style>
</style>