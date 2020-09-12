<script>
	import ModalManager from './components/ModalManager.svelte'
	import Header from './components/header-footer/Header.svelte'
	import ViewManager from './components/UserViews/ViewManager.svelte'
	import Footer from './components/header-footer/Footer.svelte'

	import { modalStore } from './DataStores/ModalStateStore.js';
	import { stateStore } from './DataStores/StateStore.js';

	let needToReaload;
	const checkFocus = () => {
		if ( !document.hasFocus() && needToReaload) {
			modalStore.set("default");
			stateStore.set("default");	
			location.reload();
			needToReaload = false;
		}else if ( document.hasFocus()){
			needToReaload = true;
		}
	}


	// setInterval( checkFocus, 200 );
</script>

<main>
	<ModalManager />
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