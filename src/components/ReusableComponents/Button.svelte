<script>
</script>

<button on:click>
    <slot> ... Missing </slot>
    <div class="icon">
        <slot  name="icon"></slot>
    </div>
    
</button>

<style type="text/scss">
    button {
        padding: 6px 25px;
        border-radius: 8px;
        border-style: none;

        font-size: 20px;
        font-weight: bold;

        background: var(--acent-colour);
        color: var(--bg-dark-colour);

        align-items: center;
        justify-content: center;
                
        transition: all .2s ease-in-out;
        display: inline-flex;
        cursor: pointer;

        &:hover, &:active, &:focus {
            border-style: none;
            box-shadow: inset 0 0 0 2px rgba(255, 255, 255, 0.88);
            outline: none;
        }

        .icon {
            margin: 2px 0 0 10px;
            max-width: 20px;
        }
    }
</style>