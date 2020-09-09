<script lang="ts">
    import { fade } from 'svelte/transition';
    export let toCopy = " ";

    let showPopover = false;

    const handleClick = () => {
        showPop();
        navigator.clipboard.writeText(toCopy).then(() => {
        console.log('Copying to clipboard was successful!');
        }, (err) => {
        console.error('Could not copy text: ', err);

        });
    }

    const showPop = () => {
        showPopover = true;
        setTimeout(() =>{
            showPopover = false;
        }, 2000);
    }
</script>

<div class="wrapper" on:click={handleClick}>
    {#if showPopover}
        <span class="popover" in:fade="{{ duration: 80 }}" out:fade="{{ duration: 600 }}" >
            Copied
            <i class="fas fa-check"></i>
        </span>
    {/if}
    <i class="far fa-copy"></i>
</div>

<style type="text/scss">
    .wrapper {
        position: relative;
        display: inline-block;
        i{
            color: var(--acent-colour);
            cursor: pointer;
        }
        .popover {
            cursor: default;
            display: inline;
            background-color: var(--acent-colour);
            text-align: center;
            font-weight: bold;
            border-radius: 6px;
            padding: 2px 4px;
            
            /* Position the tooltip */
            position: absolute;
            bottom: 120%;
            left: 50%;
            margin-left: -43px;

            i{
                color: black;
            }

            &:after {
                content: " ";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: var(--acent-colour) transparent transparent transparent;
            }

            @media screen and (max-width: 500px) {
                left: -100%;
                &:after {
                    left: 72%;
                }
            }
        }
    }
</style>