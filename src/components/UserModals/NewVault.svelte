<script>
    import { stateStore } from '../../DataStores/StateStore.js';
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    let saveObj;
    let errorMessage;

    //Form save data
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
        if (fields.passphrase.trim().length < 15) {
        valid = false;
        errors.passphrase = 'Passphrase must be at least 15 characters long'
        } else {
        errors.passphrase = ''
        }

        //Vault confimation passphrase validation
        if (!fields.confPassphrase | fields.confPassphrase !== fields.passphrase) {
        valid = false;
        errors.confPassphrase = 'Passphrases do not match'
        } else {
        errors.confPassphrase = ''
        }

        if (valid) {
            //Runs when valid vault details are given
            vaultStorage.constructor("Luke's Vault", "Lukeaskew121");
            modalStore.set("default");
            stateStore.set("vault");
        }
    }
</script>
<Modal>
    <Card closeButton={true} errorMessage={errorMessage} on:closeClick>
    <span slot="title">
        Create a new vault!
    </span>

    <span slot="content">
        <form>
        <label for="vault-name">Name</label>
        <input bind:value={fields.vaultName} name="vault-name" type="text" autocomplete="off">
        <div class="error">{ errors.vaultName }</div>

        <label for="passphrase">Passphrase</label>
        <input bind:value={fields.passphrase} name="passphrase" type="password">
        <div class="error">{ errors.passphrase }</div>

        <label for="conf-passphrase">Confirm passphrase</label>
        <input bind:value={fields.confPassphrase} name="conf-passphrase" type="password">
        <div class="error">{ errors.confPassphrase }</div>
        </form>
    </span>

    <span slot="action-btn">
        <Button on:click={handleSubmit} icon={"start"}>Start</Button>
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
</style>