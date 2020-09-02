<script>
  import { modalStore } from './modals.js';
</script>
                        

<div class="backdrop" on:click|self={() => { modalStore.set("default") }}>
  <div class="modal">
    <slot></slot>
  </div>
</div>

<style>
  .backdrop{
    width: 100%;
    height: 100%;
    position: fixed;
    background: rgba(0,0,0,0.8);
  }
  .modal{
    position: fixed;
    top: 30%;
    left: 50%;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
</style>