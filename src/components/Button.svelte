<script>
</script>

<button on:click>
    <slot></slot>
    <div class="icon">
        <slot  name="icon"></slot>
    </div>
</button>

<style>
    button {
        padding: 6px 25px;
        border-radius: 8px;
        border-style: none;
        font-size: 20px;
        font-weight: bold;
        background: var(--acent-colour);                
        transition: all .2s ease-in-out;
        display: inline-flex;
        cursor: pointer;
    }
    .icon {
        margin-left: 10px;
    }
    button:hover, button:active, button:focus {
        border-style: none;
        box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.88);
        outline: none;
    }
</style>