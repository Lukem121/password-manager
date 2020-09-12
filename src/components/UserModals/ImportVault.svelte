<script>    
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { stateStore } from '../../DataStores/StateStore.js';

    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    let importString;
    let errorMessage = "";

    const validateInput = (val) =>{
        try {
            let parsedInput = JSON.parse(val);
            let saveObj = {...parsedInput};
            delete parsedInput.valid;
            parsedInput = JSON.stringify(parsedInput).replace(/\s+/g, ' ').trim();
            if(saveObj.valid == CryptoJS.MD5(parsedInput)){
            return true;
            }else{
            return false
            }
        } catch (e) {
            return false;
        }
    };

    const handleClick = () => {
      if(validateInput(importString)){
            console.log(importString)
            localStorage.setItem("r-vault", importString);


            modalStore.set("enter-passphrase")
            console.log("Sucsessfuly saved imported data 🥳")
      }else{
        errorMessage ='Not a valid import string 😭';
        console.error(errorMessage)
      }
    }
    
</script>

<Modal>
    <Card closeButton={true} errorMessage={errorMessage} on:closeClick>
        <span slot="title">
            Already have a vault? 
        </span>

        <span slot="content">
            <textarea bind:value={importString} placeholder="Paste import string here..."></textarea>
        </span>

        <span slot="action-btn">
            <Button on:click={handleClick} icon={"import"}>
                Import
                <span slot="icon">
                    <i class="fas fa-file-import"></i>
                </span>
            </Button>
        </span>
    </Card>
</Modal>

<style>
    textarea {
        height: 240px;
        width: 100%;
        resize: none;
    }
</style>