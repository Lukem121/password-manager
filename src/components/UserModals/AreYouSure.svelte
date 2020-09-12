<script>
    import { modalStore } from '../../DataStores/ModalStateStore.js';
    import { vaultStorage } from '../../DataStores/VaultStore.js';
    import { ruSureStore } from '../../DataStores/AreYouSureStore.js';
    import Modal from '../ReusableComponents/Modal.svelte';
    import Card from '../ReusableComponents/Card.svelte';
    import Button from '../ReusableComponents/Button.svelte';

    const sendEvent = (anwser) => {
      ruSureStore.set(anwser)
      modalStore.set("default")
    }

</script>
<Modal>
    <Card closeButton={true} on:closeClick>
    <span slot="title">
        Are you sure?
    </span>

    <span slot="content">
        <div class="wrapper">
          <Button on:click={() => {sendEvent(true)}} icon={"start"}>
            Yes
            <span slot="icon">
              <i class="fas fa-play f"></i>
            </span>
          </Button>
          
          <Button on:click={() => {sendEvent(false)}} icon={"start"}>
            No
            <span slot="icon"><i class="fas fa-times fa-lg"></i></span>
          </Button>
        </div>
    </span>
    </Card>
</Modal>



<style type="text/scss">
  .wrapper {
    font-size: 20px;
    font-weight: bold;
    text-align: center;

    input {
      width: 100%;
      height: 40px; 
      padding-left: 15px;
      border-radius: 16px;
      font-weight: bold;
      border-style: none;
      outline: none;
    }

  }
</style>