<script>
	import Nav from '../components/Nav.svelte';
	import { vaultStorage } from '../VaultStore.js';
	import { goto } from '@sapper/app';
	import { onMount } from 'svelte';

	export let segment;

	const validateInput = (val) =>{
        try {
            let parsedInput = JSON.parse(val);
            let saveObj = {...parsedInput};
            delete parsedInput.valid;
            parsedInput = JSON.stringify(parsedInput).replace(/\s+/g, ' ').trim();
            if(saveObj.valid == CryptoJS.MD5(parsedInput)){
            return true;
            }else{
            return false
            }
        } catch (e) {
            return false;
        }
    };

    const checkLocalStorage = () => {
        let ls = localStorage.getItem('r-vault')
        if(ls){
            if(validateInput(ls)){
                goto("passphrase")
            }
        }else{
			if(segment){
				goto("/")
			}
		}
	}
	
	onMount(() => {
		checkLocalStorage()
	});

	
	
</script>

<style>
	.wrapper {
		max-width: 1750px;
		padding: 30px 60px;
		margin: 0 auto;
	}
	@media screen and (max-width: 500px) {
    	.wrapper {
			padding: 10px 10px;
		}
	}

	main {
		margin-top: 20px;
	}

</style>

<div class="wrapper">
	<Nav />

	<main>
		<slot></slot>
	</main>
</div>