<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';

    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    let importString;
    let errorMessage; 

    const handleClick = () => {

    }
</script>

<Modal>
    <Card closeButton={true} errorMessage={errorMessage} on:closeClick>
        <span slot="title">
            Already have a vault? 
        </span>

        <span slot="content">
            <textarea bind:value={importString} rows="15" cols="80" placeholder="Paste import string here..."></textarea>
        </span>

        <span slot="action-btn">
            <Button on:click={handleClick} icon={"import"}>Import</Button>
        </span>
    </Card>
</Modal>

<style>
    textarea {
        width: 100%;
        resize: none;
    }
</style>