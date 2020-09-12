<script>
    import { modalStore } from '../DataStores/ModalStateStore.js';
    import NewVault from './UserModals/NewVault.svelte';
    import ImportVault from './UserModals/ImportVault.svelte';
    import NewEntry from './UserModals/NewEntry.svelte';
    import UpdateEntry from './UserModals/UpdateEntry.svelte';
    import Settings from './UserModals/Settings.svelte';
    import EnterPassphrase from './UserModals/EnterPassphrase.svelte';
    import AreYouSure from './UserModals/AreYouSure.svelte';
</script>

<div>
    {#if $modalStore == "new"}
        <NewVault />
    {:else if $modalStore == "are-u-sure"}
        <AreYouSure />
    {:else if $modalStore == "enter-passphrase"}
        <EnterPassphrase />
    {:else if $modalStore == "import"}
        <ImportVault />
    {:else if $modalStore == "entry"}
        <NewEntry />
    {:else if $modalStore.split('-').shift() == "update_entry"}
        <UpdateEntry entryToUpdate={$modalStore.split('-').pop()}/>
    {:else if $modalStore == "settings"}
        <Settings />
    {/if}
</div>

<style>
</style>