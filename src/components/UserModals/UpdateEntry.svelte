<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    export let entryToUpdate;

    let errorMessage = "";

    //Form save data
    let fields = $vaultStorage.entrys.find(x => x.id == entryToUpdate);
    // let fields = { title: '', username: '', password: '', url: '', notes: '' };
    let errors = { title: '', username: '', password: '', url: '', notes: '' };
    let valid = false;

    const getValidUrl = (url = "") => {
        let newUrl = window.decodeURIComponent(url);
        newUrl = newUrl.trim().replace(/\s/g, "");

        if(/^(:\/\/)/.test(newUrl)){
            return `http${newUrl}`;
        }
        if(!/^(f|ht)tps?:\/\//i.test(newUrl)){
            return `http://${newUrl}`;
        }

        return newUrl;
    };

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

        if(fields.url){
          fields.url = getValidUrl(fields.url);
        }else{
          fields.url = "No url"
        }

        if(!fields.notes){
          fields.notes = "No notes..."
        }
        

        if (valid) {
            //Runs when valid vault details are given
            vaultStorage.update( (n) => {
              let thue = n.entrys.find(x => x.id == entryToUpdate);
              thue.title = fields.title;
              thue.username = fields.username;
              thue.password = fields.password;
              thue.url = fields.url;
              thue.notes = fields.notes;
              thue.updated = new Date()
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
        Update entry!
    </span>

    <span slot="content">
        <div class="wrapper">
          <label for="entry-title">Title</label>
          <input bind:value={fields.title} name="entry-title" type="text" autocomplete="off" placeholder="{entryToUpdate}">
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
        </div>
    </span>
    
    <span slot="action-btn">
        <Button on:click={handleSubmit} icon={"start"}>Update</Button>
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

    textarea {
      height: 180px;
      width: 100%
    }
  }
</style>