<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { stateStore } from '../../DataStores/StateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    let errorMessage = "";

    //Form save data
    let password;
    let error = "";
    let valid = false;

    const handleSubmit = () => {
      try{
        let ls = localStorage.getItem('r-vault');
        let encryptedVault = JSON.parse(ls);
        let decryptedVault = JSON.parse(CryptoJS.AES.decrypt(encryptedVault.data, password).toString(CryptoJS.enc.Utf8));
        vaultStorage.set(decryptedVault);
        modalStore.set("default");
        stateStore.set("vault");
      }catch(err){
        error="Unable to decrypt, incorect Passphrase!";
			  console.error("Unable to decrypt, incorect Passphrase!");
		  }
    }

</script>
<Modal>
    <Card closeButton={true} errorMessage={errorMessage} on:closeClick>
    <span slot="title">
        Unlock vault!
    </span>

    <span slot="content">
        <div class="wrapper">
          <label for="entry-password">Password</label>
          <input bind:value={password} name="entry-password" type="password" autocomplete="off">
          <div class="error">{ error }</div>
        </div>
    </span>
    
    <span slot="action-btn">
        <Button on:click={handleSubmit} icon={"start"}>Unlock</Button>
    </span>
    </Card>
</Modal>



<style type="text/scss">
  .wrapper {
    font-size: 20px;
    font-weight: bold;

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
  }
</style>