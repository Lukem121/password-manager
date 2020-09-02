<script>
    import { modalStore } from '../DataStores/ModalStateStore.js';
    import NewVault from './UserModals/NewVault.svelte';
</script>

<div>
    {#if $modalStore == "new"}
        <NewVault />
    {/if}
</div>

<style>
</style>