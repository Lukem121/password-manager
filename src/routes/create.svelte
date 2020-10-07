<script>
    import { goto } from '@sapper/app';
    import { vaultStorage } from '../VaultStore.js';
    import Card from "../components/Card.svelte";
    import Button from "../components/Button.svelte";

    let errorMessage = "";

    let fields = { vaultName: '', passphrase: '', confPassphrase: '' };
    let errors = { vaultName: '', passphrase: '', confPassphrase: '' };

    let valid = false;

    const handleSubmit = () => {
        valid = true;
        //Vault name validation
        if (fields.vaultName.trim().length < 5) {
        valid = false;
        errors.vaultName = 'Vault name must be at least 5 characters long'
        } else {
        errors.vaultName = ''
        }

        //Vault passphrase validation
        if (fields.passphrase.trim().length < 8) {
        valid = false;
        errors.passphrase = 'Passphrase must be at least 8 characters long'
        } else {
        errors.passphrase = ''
        }

        //Vault confimation passphrase validation
        if (!fields.confPassphrase || fields.confPassphrase !== fields.passphrase) {
        valid = false;
        errors.confPassphrase = 'Passphrases do not match'
        } else {
        errors.confPassphrase = ''
        }

        if (valid) {
            //Runs when valid vault details are given
            vaultStorage.update((n) => {
              n.vaultName = fields.vaultName;
              n.passphrase = fields.passphrase;
              return n;
            });
            goto("vault");
        }
    }
</script>

<div class="card">
    <Card errorMessage={errorMessage}>
        Create a new vault!    
        <span slot="content">
            <form>
            <label for="vault-name">Vault Name</label>
            <input bind:value={fields.vaultName} name="vault-name" type="text" autocomplete="off">
            <div class="error">{ errors.vaultName }</div>
    
            <label for="passphrase">Passphrase</label>
            <input bind:value={fields.passphrase} name="passphrase" type="password" autocomplete="off">
            <div class="error">{ errors.passphrase }</div>
    
            <label for="conf-passphrase">Confirm passphrase</label>
            <input bind:value={fields.confPassphrase} name="conf-passphrase" type="password" autocomplete="off">
            <div class="error">{ errors.confPassphrase }</div>
            </form>
        </span>
    
        <span slot="action-button">
            <Button on:click={handleSubmit} icon={"start"}>
              Start
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
    form {
      font-size: 20px;
      font-weight: bold;
    }
    input {
        width: 98%;
        height: 40px;
        padding-left: 15px;
        border-radius: 16px;
        font-size: 20px;
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