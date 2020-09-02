<script>
    import WelcomeView from  './WelcomeView.svelte';
</script>

<div class="wrapper">
    <WelcomeView />
</div>

<style type="text/scss">
    .wrapper {
        padding-top: 20px;
        @media screen and (max-width: 500px) {
            padding-top: 5px;
        }
    }
</style>