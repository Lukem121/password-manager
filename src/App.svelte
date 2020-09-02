<script>
	import Modals from './components/Modals.svelte'
	import Header from './components/header-footer/Header.svelte'
	import Main from './components/Main.svelte'
	import Footer from './components/header-footer/Footer.svelte'
	
</script>

<main>
	<Modals />
	<div class="content">
		<Header />
		<Main />
		<Footer />
	</div>
</main>

<style type="text/scss">

	.content {
    	padding: 30px 60px;

		@media screen and (max-width: 500px) {
    	padding: 10px 10px;
		}
	}  

</style>