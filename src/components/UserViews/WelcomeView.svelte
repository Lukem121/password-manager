<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    let title, username, password, url, notes;
</script>

<div class="wrapper">
    <div class="flex-wrapper">
        <div class="new-card">
            <Card>
                <span slot="title">
                    Create a new vault?
                </span>

                <span slot="content">
                    Just starting? It is easy to create a new vault that you can use to store all your
                    passwords on the blockchain. All your passwords are stored using military-grade
                    technology (AES-256) to encrypt your data before sending it to the Bitcoin SV 
                    blockchain. Items put into the vault are encrypted on your local device and are
                    only decrypted locally.
                </span>

                <span slot="action-btn">
                    <Button on:click={() => { modalStore.set("new") }}
                    icon={"start"}>Start</Button>
                </span>

            </Card>
        </div>
        <div class="import-card">
            <Card>
                <span slot="title">
                    Already have a vault? 
                </span>

                <span slot="content">
                    You can use your export code to access your passwords from this device. This 
                    code is not sent to our server but is stored in your client. You will then need to use
                    the passphrase you created before to decrypt your vault. 
                </span>

                <span slot="action-btn">
                    <Button on:click={() => { modalStore.set("import") }} 
                    icon={"import"}>Import</Button>
                </span>
            </Card>
        </div>
    </div>

    <form on:submit|preventDefault={() => {
        console.log(vaultStorage);

        vaultStorage.addEntry(title, username, password, url, notes)
        console.log(vaultStorage.name);
    }}>
        <label for="title"></label>
        <input bind:value={title} name="title" type="text" placeholder="title">

        <label for="username"></label>
        <input bind:value={username} name="username" type="text" placeholder="username">

        <label for="password"></label>
        <input bind:value={password} name="password" type="text" placeholder="password">

        <label for="url"></label>
        <input bind:value={url} name="url" type="text" placeholder="url">

        <label for="notes"></label>
        <input bind:value={notes} name="notes" type="text" placeholder="notes">
        <button>Submit</button>
    </form>

    <h2>{$vaultStorage.name}</h2>
    <h2>{$vaultStorage.passphrase}</h2>
    {#if $vaultStorage.entrys}
        <ul>
            {#each $vaultStorage.entrys as { title, username, password, url, notes }, i}
                <li>Title: {title}</li>
                <li>username: {username}</li>
                <li>password: {password}</li>
                <li>url: {url}</li>
                <li>notes: {notes}</li>
            {/each}
        </ul>
    {/if}
</div>

<style type="text/scss">
    .wrapper {
        .flex-wrapper{
            display: flex;
            flex-flow: wrap;
            justify-content: space-evenly;

            .import-card{
                @media screen and (max-width: 500px) {
                    padding-top: 20px; 
                }
            }

            @media screen and (max-width: 500px) {
                justify-content: center;
            }
        }
    }
</style>