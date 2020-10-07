<script>
	import { goto } from '@sapper/app';
    import { vaultStorage } from '../VaultStore.js';
    import Card from '../components/Card.svelte';
    import Button from '../components/Button.svelte';

    let errorMessage = "";

    //Form save data
    let password;
    let error = "";

    const handleSubmit = () => {
        try{
            let ls = localStorage.getItem('r-vault');
            let encryptedVault = JSON.parse(ls);
            let decryptedVault = JSON.parse(CryptoJS.AES.decrypt(encryptedVault.data, password).toString(CryptoJS.enc.Utf8));
            vaultStorage.set(decryptedVault);
            goto("vault");
        }catch(err){
            error="Unable to decrypt, incorect Passphrase!";
            console.error("Unable to decrypt, incorect Passphrase!");
        }
    }

</script>

<div class="card">
    <Card errorMessage={errorMessage}>
        <span slot="title">
            Unlock vault!
        </span>
    
        <span slot="content">
            <div class="wrapper">
              <label for="entry-password">Password</label>
              <input bind:value={password} name="entry-password" type="password" autocomplete="off">
              {#if error}
                <div class="error">{ error }</div>
              {/if}
            </div>
        </span>
        
        <span slot="action-button">
            <Button on:click={handleSubmit}>
              Unlock
              <span slot="icon">
                <i class="fas fa-play"></i>
              </span>
            </Button>
        </span>
    </Card>
</div>

<style>
    .card {
        margin: 0 auto;
		max-width: 860px;
		min-width: 300px;
	}
	@media screen and (max-width: 500px) {
		.card {
			margin-right: 0;
			margin-bottom: 35px;
		}
	}
    .wrapper {
        font-size: 20px;
        font-weight: bold;
    }
    input {
        width: 100%;
        height: 40px; 
        padding-left: 15px;
        border-radius: 16px;
        font-weight: bold;
        border-style: none;
        outline: none;
    }
    .error{
        font-weight: bold;
        font-size: 12px;
        padding: 5px 0 0 5px;
        color: crimson;
    }
</style>