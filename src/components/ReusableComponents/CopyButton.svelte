<script>
    export let toCopy = " ";

    const handleClick = () => {
        navigator.clipboard.writeText(toCopy).then(() => {
        console.log('Copying to clipboard was successful!');
        }, (err) => {
        console.error('Could not copy text: ', err);

        });
    }
</script>

<button on:click={handleClick}>
    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
        <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </svg>
</button>

<style type="text/scss">
    button {
        border-style: none;
        background: rgba(0, 0, 0, 0.0);
        float: right;
        cursor: pointer;
        path {
            fill: #50fa7b;
        }
        &:hover {
            border-style: none;
            outline: none;
            path{
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