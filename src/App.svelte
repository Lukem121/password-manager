<script>
	import Main from './Main.svelte'
	import ModalManager from './ModalManager.svelte'
</script>

<main>
	<ModalManager />
	<div class="content">
		<Main />
	</div>
</main>

<style type="text/scss">
	.content {
    	padding: 30px 60px;

		@media screen and (max-width: 640px) {
    		padding: 10px 10px;
		}
	}  
</style>