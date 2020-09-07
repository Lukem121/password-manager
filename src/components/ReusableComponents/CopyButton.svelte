<script>
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

<button on:click={handleClick}>
    {#if showPopover}
        <span class="popover" in:fade="{{ duration: 80 }}" out:fade="{{ duration: 600 }}" >Copied
            <svg xmlns="http://www.w3.org/2000/svg" height="15" viewBox="0 0 20 20" width="15">
                <path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/>
            </svg>
        </span>
    {/if}
    
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path class="copy" d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>
</button>

<style type="text/scss">
    button {
        top: 3px;
        position: relative;
        display: inline-block;
        border-style: none;
        background: rgba(0, 0, 0, 0.0);
        float: right;
        cursor: pointer;
        .popover {
            cursor: default;
            width: 86px;
            display: inline;
            background-color: #50FA7B;
            font-weight: bold;
            color: black;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            
            /* Position the tooltip */
            position: absolute;
            bottom: 120%;
            left: 50%;
            margin-left: -43px;

            &:after {
                content: " ";
                position: absolute;
                top: 100%;
                left: 50%;
                margin-left: -5px;
                border-width: 5px;
                border-style: solid;
                border-color: #50FA7B transparent transparent transparent;

                @media screen and (max-width: 500px) {
                    left: 67%;
                }
            }

            @media screen and (max-width: 500px) {
                left: 5%;
            }
        }
        .copy {
            fill: #50fa7b;
        }
        &:hover {
            border-style: none;
            outline: none;
            .copy{
                transition: 0.3s;
                fill: white;
            }
        }
        &:active, &:focus {
            border-style: none;
            outline: none;
        }
    }
</style>