<script>
    import { stateStore } from '../../DataStores/StateStore.js';
    import WelcomeView from  './WelcomeView.svelte';
    import VaultView from  './VaultView.svelte';
</script>

<div class="wrapper">
    {#if $stateStore == "vault"}
        <VaultView />
    {:else}
        <WelcomeView />
    {/if}
</div>

<style type="text/scss">
    .wrapper {
        padding-top: 20px;
        @media screen and (max-width: 500px) {
            padding-top: 5px;
        }
    }
</style>