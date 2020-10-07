<script>
    export let closeButton = false;
    export let errorMessage = "";
</script>

<div class="card">
    <p>
        <slot>
        </slot>
        {#if closeButton}
        <button on:click>
            <i class="fas fa-times-circle"></i>
        </button>
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
    </div>

    <div class="action-button">
        <slot name="action-button">
        </slot>
    </div>
</div>

<style>
    .card {
        box-sizing: border-box;
        border-radius: 16px;
        background: var(--bg-dark-colour);
        padding: 5px 20px 20px 20px;
    }
    p {
        margin: -1.35rem 0 5px;
        font-size: 22px;
        font-weight: bold;
    }
    .action-button {
        display: flex;
        justify-content: flex-end;
        padding-top: 7px;
    }

    button {
        position: relative;
        top: 3px;
        padding: 0;
        width: 20px;
        border-style: none;
        background: rgba(0, 0, 0, 0.0);
        float: right;
        cursor: pointer;
    }
    button i {
        font-size: 1.3rem;
        color: crimson;
    }
    button:hover, button:active,button:focus {
        border-style: none;
        outline: none;
    }
    .error {
        color: crimson;
    }
</style>