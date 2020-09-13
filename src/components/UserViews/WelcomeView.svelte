<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';
</script>

<div class="wrapper">
    <div class="flex-wrapper">
        <div class="new-card">
            <Card closeButton={false} errorMessage="">
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
                    <Button on:click={() => { modalStore.set("new") }}>
                        Start
                        <span slot="icon">
                            <i class="fas fa-play f"></i>
                        </span>
                    </Button>
                </span>

            </Card>
        </div>
        <div class="import-card">
            <Card closeButton={false} errorMessage="">
                <span slot="title">
                    Already have a vault? 
                </span>

                <span slot="content">
                    You can use your export code to access your passwords from this device. This 
                    code is not sent to our server but is stored in your client. You will then need to use
                    the passphrase you created before to decrypt your vault. 
                </span>

                <span slot="action-btn">
                    <Button on:click={() => { modalStore.set("import") }}>
                        Import
                        <span slot="icon">
                            <i class="fas fa-file-import"></i>
                        </span>
                    </Button>
                </span>
            </Card>
        </div>
    </div>
</div>

<style type="text/scss">
    .wrapper {
        .flex-wrapper{
            display: flex;
            flex-flow: wrap;
            justify-content: space-evenly;

            .import-card{
                padding-top: 30px; 
            }

            @media screen and (max-width: 500px) {
                justify-content: center;
            }
        }
    }
</style>