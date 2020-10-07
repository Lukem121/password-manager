<script>
    import { vaultStorage } from '../VaultStore.js';
    import Card from '../components/Card.svelte';
    import Button from '../components/Button.svelte';
    import CopyButton from '../components/CopyButton.svelte';
    import { goto } from '@sapper/app';


    let errorMessage = "";
    let showCopiedText = false;

    //Form save data
    let fields = { vaultName: $vaultStorage.vaultName, passphrase: '', confPassphrase: '' };
    let errors = { vaultName: '', passphrase: '', confPassphrase: '' };
    let valid = false;

    const toggleShowCopy = () => {
      showCopiedText = !showCopiedText;
      navigator.clipboard.writeText(localStorage.getItem("r-vault")).then(() => {
        console.log('Copying to clipboard was successful!');
        }, (err) => {
        console.error('Could not copy text: ', err);

      });
    }

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
            vaultStorage.update( (n) => {
              n.vaultName = fields.vaultName;
              n.passphrase = fields.passphrase;
              return n;
            })
            goto("vault");
        }
    }
</script>

<Card closeButton={true} errorMessage={errorMessage} on:click={ () => goto("vault") }>
    <span slot="title">
        Update vault info!
    </span>

    <span slot="content">
        <form>
          <label for="vault-name">Vault Name</label>
          <input bind:value={fields.vaultName} name="vault-name" type="text" autocomplete="off">
          <div class="error">{ errors.vaultName }</div>

          <label for="passphrase">Passphrase</label>
          <input bind:value={fields.passphrase} name="passphrase" type="password">
          <div class="error">{ errors.passphrase }</div>

          <label for="conf-passphrase">Confirm passphrase</label>
          <input bind:value={fields.confPassphrase} name="conf-passphrase" type="password">
          <div class="error">{ errors.confPassphrase }</div>
        </form>

        <div class="export-button">
          <span on:click={toggleShowCopy} >Get export string</span>
          {#if showCopiedText}
            <p>Copied to clipboard!</p>
          {/if}
        </div>

    </span>

    <span slot="action-button">
        <Button on:click={handleSubmit}>
          Submit
          <span slot="icon">
            <i class="fas fa-play"></i>
          </span>
        </Button>
    </span>
    </Card>

<style>
  form {
	 font-size: 20px;
	 font-weight: bold;
}
 form input {
	 width: 98%;
	 height: 40px;
	 padding-left: 15px;
	 border-radius: 16px;
	 font-size: 20px;
	 font-weight: bold;
	 border-style: none;
	 outline: none;
}
 form .error {
	 font-weight: bold;
	 font-size: 12px;
	 padding: 5px 0 0 5px;
	 color: crimson;
}
 .export-button {
	 margin: 10px 0 10px;
	 text-align: center;
}
 .export-button span {
	 cursor: pointer;
	 padding: 6px 25px;
	 border-radius: 8px;
	 border-style: none;
	 font-size: 20px;
	 font-weight: bold;
	 background: var(--acent-colour);
	 color: var(--bg-dark-colour);
	 align-items: center;
	 justify-content: center;
}
 .export-button p {
	 margin-bottom: 0;
}
 
</style>