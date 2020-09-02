<script>
  import { modalStore } from '../../DataStores/ModalStateStore.js';
    import CloseButton from './CloseButton.svelte'

    export let closeButton = false;
    export let errorMessage;
</script>

<fieldset class="card">
    <legend>
        <slot name="title">
            <span>Missing title slot</span>
        </slot>
        {#if closeButton}
            <CloseButton on:click={() => { modalStore.set("default") }} />
        {/if}
    </legend>

    <div class="content">
        <slot name="content">
            <span>Missing content slot</span>
        </slot>
        {#if errorMessage}
            <div class="error">
                {errorMessage}
            </div>
        {/if}
        <div class="action-btn">
            <slot name="action-btn">
                <span>Missing action button slot</span>
            </slot>
        </div>
    </div>
</fieldset>
    

<style type="text/scss">
    .card {
        min-width: 300px;
        max-width: 500px;
        padding: 5px 20px;
        margin: 0 10px;
        border-radius: 16px;
        background: var(--bg-dark-colour);
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        border: 0;

        legend {
            width: 100%;
            font-size: 22px;
            font-weight: bold;
        }
        .action-btn {
            padding: 15px 0px 15px;
            justify-content: flex-end;
            display: flex;
        }
        .error {
            color: crimson;
        }
    }
</style>