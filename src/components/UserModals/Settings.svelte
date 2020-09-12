<script>
    import { stateStore } from '../../DataStores/StateStore.js';
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';
    import CopyButton from '../ReusableComponents/CopyButton.svelte';

    let errorMessage = "";
    let showCopiedText = false;

    //Form save data
    let fields = { vaultName: '', passphrase: '', confPassphrase: '' };
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
            modalStore.set("default");
            //Scrol to top of page after new entry has been added
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }
    }
</script>
<Modal>
    <Card closeButton={true} errorMessage={errorMessage} on:closeClick>
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
          <a href="/#" on:click={toggleShowCopy}>Get export string </a>
          {#if showCopiedText}
            <p>Copied to clipboard!</p>
          {/if}
        </div>

    </span>

    <span slot="action-btn">
        <Button on:click={handleSubmit}>
          Submit
          <span slot="icon">
            <i class="fas fa-play"></i>
          </span>
        </Button>
    </span>
    </Card>
</Modal>



<style type="text/scss">
  form {
    font-size: 20px;
    font-weight: bold;

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
  }
  .export-button {
    margin-top: 10px;

    text-align: center;
    a{
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
    p {
      margin-bottom: 0;
    }    
  }
</style>