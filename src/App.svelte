<script>
	import Modals from './Components/ModalManager.svelte'
	import Header from './Components/header-footer/Header.svelte'
	import ViewManager from './Components/UserViews/ViewManager.svelte'
	import Footer from './Components/header-footer/Footer.svelte'
	
</script>

<main>
	<Modals />
	<div class="content">
		<Header />
		<ViewManager />
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