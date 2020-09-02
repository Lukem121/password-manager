<script>
    import { modalStore } from './modals.js';
    let welcome = true;
</script>

<div>
    {#if welcome == true}
        <h1>Password Manager!</h1>
        <h2>Create a new password vault!</h2>
        <button on:click={ () => { modalStore.set("new") } } >Start</button>
    {/if}
</div>

<style type="text/scss">
</style>