<script>
    import { modalStore } from './modals.js';
    import NewVaultModal from './NewVaultModal.svelte';

</script>

<div>
    {#if $modalStore == "new"}
        <NewVaultModal />
    {/if}
</div>

<style>
</style>