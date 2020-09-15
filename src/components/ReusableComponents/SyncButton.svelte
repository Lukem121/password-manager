<script>
    import { fade } from 'svelte/transition';

    let usingSync = false;
    let syncSpin = false;
    const toggleSpin = () => {
        if(!syncSpin){
            syncSpin = true;
            setTimeout(() => {
                syncSpin = false;
            }, 300);
        }
    }
</script>

<span class="sync-button-wrapper">
    <span class="popover" in:fade="{{ duration: 300 }}" >
        Sync across devices
    </span>
    <button class="sync" class:spin="{syncSpin}" on:click={ toggleSpin }><i class="fas fa-sync"></i></button>
</span>

<style type="text/scss">

.sync-button-wrapper {
    position: relative;
    display: inline-block;

    button {
        border-style: none;
        outline: none;
        background: none;
        cursor: pointer;
        i {
            font-size: 1.5rem;
            background: none;
            color: var(--acent-colour);
        }    
    }

    .popover {
        cursor: default;
        display: inline;
        color: black;
        background-color: var(--acent-colour);
        text-align: center;
        font-weight: bold;
        border-radius: 6px;
        padding: 2px 4px;
        
        /* Position the tooltip */
        top: -50px;
        right: 105%;

        i{
            color: black;
        }

        &:after {
            content: " ";
            position: absolute;
            top: 40%;
            left: 85%;
            margin-left: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent var(--acent-colour);
        }

        @media screen and (max-width: 500px) {
            left: -11%;
            &:after {
                left: 76%;
            }
        }
    }
}

    
    .spin {
        animation-name: spin;
        animation-duration: 200ms;
        animation-iteration-count: infinite;
        animation-timing-function: linear; 

        @keyframes spin {
            from {
                transform:rotate(0deg);
            }
            to {
                transform:rotate(360deg);
            }
        }
    }

</style>