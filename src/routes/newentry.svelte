<script>
    import { goto } from '@sapper/app';
    import { vaultStorage } from '../VaultStore.js';
    import Card from '../components/Card.svelte';
    import Button from '../components/Button.svelte';
    import { fade, fly } from 'svelte/transition';
    import { v4 as uuidv4 } from 'uuid';

    let errorMessage = "";

    //Form save data
    let fields = { title: '', username: '', password: '', url: '', notes: '' };
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
              let obj = {
                id: uuidv4(),
                title: fields.title,
                username: fields.username,
                password: fields.password,
                url: fields.url,
                notes: fields.notes,
                updated: new Date()
              };
              n.entrys = [obj,...n.entrys];
              return n;
            })
            goto("vault")
        }
    }
</script>

<div class="card" in:fly="{{ y: 200, duration: 200 }}" out:fade>
  <Card closeButton={true} errorMessage={errorMessage} on:click={() => { goto("vault") }}>
    New entry!
    <span slot="content">
        <div class="wrapper">
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
        </div>
    </span>
    
    <span slot="action-button">
        <Button on:click={handleSubmit}>
          Add
          <span slot="icon">
            <i class="fas fa-plus-circle"></i>
          </span>
        </Button>
    </span>
    </Card>
</div>



<style>
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

  textarea {
    height: 180px;
    width: 100%
  }

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
</style>