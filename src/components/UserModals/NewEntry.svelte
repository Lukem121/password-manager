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
    let fields = { title: '', username: '', password: '', url: '', notes: '' };
    let errors = { title: '', username: '', password: '', url: '', notes: '' };
    let valid = false;

    const handleSubmit = () => {
        valid = true;
        //Title title validation
        if (fields.title.trim().length < 1) {
          valid = false;
          errors.title = 'Title must be at least 1 characters long'
        } else {
          errors.title = ''
        }
        //Username validation
        if (fields.username.trim().length < 1) {
          valid = false;
          errors.username = 'Username must be at least 1 characters long'
        } else {
          errors.username = ''
        }
        //password title validation
        if (fields.password.trim().length < 5) {
          valid = false;
          errors.password = 'Password must be at least 5 characters long'
        } else {
          errors.password = ''
        }

        if(!fields.notes){
          fields.notes = "No notes..."
        }
        if(!fields.url){
          fields.url = "No url"
        }

        if (valid) {
            //Runs when valid vault details are given
            vaultStorage.addEntry({
                  title: fields.title,
                  username: fields.username,
                  password: fields.password,
                  url: fields.url,
                  notes: fields.notes
            });
            modalStore.set("default");
            console.log($vaultStorage);
        }
    }
</script>
<Modal>
    <Card closeButton={true} errorMessage={errorMessage} on:closeClick>
    <span slot="title">
        Create a new entry!
    </span>

    <span slot="content">
        <form>
          <label for="entry-title">Title</label>
          <input bind:value={fields.title} name="entry-title" type="text" autocomplete="off">
          <div class="error">{ errors.title }</div>

          <label for="entry-username">Username</label>
          <input bind:value={fields.username} name="entry-username" type="text" autocomplete="off">
          <div class="error">{ errors.username }</div>

          <label for="entry-password">Password</label>
          <input bind:value={fields.password} name="entry-password" type="text" autocomplete="off">
          <div class="error">{ errors.password }</div>

          <label for="entry-url">URL</label>
          <input bind:value={fields.url} name="entry-url" type="text" autocomplete="off">
          <div class="error">{ errors.url }</div>

          <label for="entry-notes">Notes</label>
          <textarea bind:value={fields.notes} placeholder="Notes..."></textarea>
          <div class="error">{ errors.notes }</div>
        </form>
    </span>

    <span slot="action-btn">
        <Button on:click={handleSubmit} icon={"start"}>Start</Button>
    </span>
    </Card>
</Modal>



<style type="text/scss">
  form {
    width: 480px;
    font-size: 20px;
    font-weight: bold;

    input {
      width: 98%;
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

    textarea {
      height: 180px;
      width: 100%
    }

    @media screen and (max-width: 500px) {
      width: 100%;
    }
  }
</style>