<script>
    import { modalStore } from '../DataStores/ModalStateStore.js';
    import NewVault from './UserModals/NewVault.svelte';
    import ImportVault from './UserModals/ImportVault.svelte';
</script>

<div>
    {#if $modalStore == "new"}
        <NewVault />
    {:else if $modalStore == "import"}
        <ImportVault />
    {/if}
</div>

<style>
</style>