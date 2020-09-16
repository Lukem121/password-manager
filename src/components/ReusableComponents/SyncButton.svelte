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

<span class="sync-button-wrapper" on:click={() => { console.log("Hello") }}>
    <span class="text">Sync across devices</span>
    <button class="sync" class:spin="{syncSpin}" on:click={ toggleSpin }><i class="fas fa-sync"></i></button>
</span>

<style type="text/scss">

.sync-button-wrapper {
    position: relative;
    .text {
        width: 130px;
        font-weight: bold;
        cursor: pointer;
        background-color: var(--acent-colour);
        color: black;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        
        /* Position the tooltip */
        position: absolute;
        z-index: 1;
        top: -22px;
        right: 105%;

        &::after{
            content: " ";
            position: absolute;
            top: 50%;
            left: 100%; /* To the right of the tooltip */
            margin-top: -5px;
            border-width: 5px;
            border-style: solid;
            border-color: transparent transparent transparent var(--acent-colour);;
        }

        @media screen and (max-width: 880px) {
            top: -75px;
            right: 30%;

            &::after{
                content: " ";
                position: absolute;
                top: 109%; /* At the bottom of the tooltip */
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: var(--acent-colour) transparent transparent transparent;
            }
        }

        @media screen and (max-width: 500px) {
            top: -18px;
            right: 100%;

            &::after{
                content: " ";
                position: absolute;
                top: 50%; /* At the bottom of the tooltip */
                left: 104%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: transparent transparent transparent var(--acent-colour);
            }
        }
    }
    

    button {
        border-style: none;
        outline: none;
        background: none;
        cursor: pointer;
        i {
            font-size: 1.5rem;
            background: none;
            color: var(--acent-colour);
            vertical-align: middle;
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