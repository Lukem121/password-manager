<script>
	import { goto } from '@sapper/app';
	import Card from "../components/Card.svelte";
	import Button from "../components/Button.svelte";
</script>

<svelte:head>
	<title>Rashek - Welcome</title>
</svelte:head>
<div class="welcome-content">
	<div class="card">
		<Card>
			Create a new vault?
		
			<span slot="content">
				Just starting? It is easy to create a new vault that you can use to store all your
				passwords on the blockchain. All your passwords are stored using military-grade
				technology (AES-256) to encrypt your data before sending it to the Bitcoin SV 
				blockchain. Items put into the vault are encrypted on your local device and are
				only decrypted locally.
			</span>
		
			<span slot="action-button">
				<Button on:click={() => goto('create')}>
					Start
					<span slot="icon">
						<i class="fas fa-play f"></i>
					</span>
				</Button>
			</span>
		</Card>
	</div>
	<div class="card">
		<Card>
			Already have a vault? 
		
			<span slot="content">
				You can use your export code to access your passwords from this device. This 
				code is not sent to our server but is stored in your client. You will then need to use
				the passphrase you created before to decrypt your vault. 
			</span>
		
			<span slot="action-button">
				<Button on:click={() => goto('import')}>
					Import
					<span slot="icon">
						<i class="fas fa-file-import"></i>
					</span>
				</Button>
			</span>
		</Card>
	</div>
	<!-- <button on:click={() => {
		localStorage.clear() }} >Clear Local Storage</button> -->
</div>


<style>
	.welcome-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	@media screen and (max-width: 500px) {
		.welcome-content {
			justify-content: center;
		}
	}
	.card {
		max-width: 45%;
		min-width: 300px;
		margin-right: 15px;
	}
	@media screen and (max-width: 500px) {
		.card {
			margin-right: 0;
			margin-bottom: 35px;
		}
	}
</style>