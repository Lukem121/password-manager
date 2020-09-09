<script lang="ts">
  import { modalStore } from '../../DataStores/ModalStateStore.js';
    import CloseButton from './CloseButton.svelte';

    export let closeButton: boolean = false;
    export let errorMessage:string;
</script>

<div class="card">
    <p>
        <slot name="title">
            <span>Missing title slot</span>
        </slot>
        {#if closeButton}
            <CloseButton on:click={() => { modalStore.set("default") }} />
        {/if}
    </p>

    <div class="content">
        <slot name="content">
            <span>Missing content slot</span>
        </slot>
        {#if errorMessage != ""}
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
</div>
    

<style type="text/scss">
    .card {       
        box-sizing: border-box;
        padding: 5px 20px 0 20px;
        border-radius: 16px;
        background: var(--bg-dark-colour);

        p {
            width: 100%;
            margin: -1.35rem 0 5px;
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

        @media screen and (max-width: 500px) {
            width: 100%;
            padding: 5px 20px 20px 20px;
            .content {
                height: 400px;
                max-height: 100%;
                overflow: auto;
            }
        }
    }
</style>
