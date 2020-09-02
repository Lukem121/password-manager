<script>
    import Welcome from  './Welcome.svelte';
</script>

<div class="wrapper">
    <Welcome />
</div>

<style type="text/scss">
    .wrapper {
        padding-top: 20px;
        @media screen and (max-width: 500px) {
            padding-top: 5px;
        }
    }
</style>