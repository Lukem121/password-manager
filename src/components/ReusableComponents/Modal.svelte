<script>
  import { modalStore } from '../../DataStores/ModalStateStore.js';
  import { fade } from 'svelte/transition';
</script>
                        

<div class="backdrop" on:click|self={() => { modalStore.set("default") }}>
  <div class="modal" in:fade="{{ duration: 100 }}" >
    <slot></slot>
  </div>
</div>

<style type="text/scss">
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.85);
    z-index: 10;
    @media screen and (max-width: 500px) {
      background: rgba(0,0,0,1);
    }
    
  }
  .modal{
    position: fixed;
    top: 50%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);

    @media screen and (max-width: 500px) {
      width: 100%;
      padding: 30px;
    }
  }
</style>