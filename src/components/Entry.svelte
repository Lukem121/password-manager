<script>
    import CopyButton from "./CopyButton.svelte";
    import StyledTitle from "./StyledTitle.svelte";
    import { modalStore } from '../ModalStateStore.js';
    import { vaultStorage } from '../VaultStore.js';
    import { ruSureStore } from '../AreYouSureStore.js';
    import { sineInOut } from 'svelte/easing';
    import { flip } from 'svelte/animate';

    export let entry;

    let showDraw = false;
    let showPassword = false;

    const toggleShowPassword = () => {
        console.log("Bonk")
        showPassword = !showPassword;
    }
    const toggleDraw = () => {
        showDraw = !showDraw;
    }

    $: {
        ruSureStoreChange($ruSureStore)
    }

    let waitingForDeleteResponce = false;
    const ruSureStoreChange = () => {
        if(waitingForDeleteResponce){
            if($ruSureStore == true){
                vaultStorage.update( (n) => {
                    n.entrys = n.entrys.filter(en => en != n.entrys.find(x => x.id == entry.id));
                    return n;
                });
                ruSureStore.set("default");
                waitingForDeleteResponce = false;
            }else if ($ruSureStore == false){
                waitingForDeleteResponce = false;
                modalStore.set("default");
                ruSureStore.set("default");
                return;
            }
        }
    }

    const deleteEntry = () => {
        modalStore.set("are-u-sure");
        waitingForDeleteResponce = true;
    }

</script>

<div class="entry-wrapper">
    <p class="entry-title">
        <StyledTitle txt={ entry.title.toLowerCase() } />
        {#if showDraw}
            <div class="delete-edit"">
                <span class="delete" on:click={ () => {deleteEntry()} }>Delete<i class="fas fa-trash-alt"></i></span>
                <span class="edit" on:click={() => { modalStore.set("update_entry-" + entry.id) }} >Edit<i class="fas fa-pen"></i></span>
            </div>
        {/if}
    </p>
    
    <div class="username-section row">
        <span class="title">Username</span>
        <div class="username-value">{entry.username}</div>
        <div class="copy-button">
            <CopyButton toCopy={ entry.username } />
        </div>
    </div>

    <div class="password-section row">
        <span class="title">Password</span>
        <div class="password-value">
            <span>
                {#if showPassword}
                    {entry.password}
                {:else}
                    {entry.password.replace(/./g, "•")}
                {/if}
            </span>
        </div>
        {#if showPassword}
            <i class="fas fa-eye" on:click={toggleShowPassword}></i>
        {:else}
            <i class="fas fa-eye-slash" on:click={toggleShowPassword}></i>
        {/if}
        <div class="copy-button">
            <CopyButton toCopy={ entry.password } />
        </div>
    </div>

    {#if showDraw}
        <div class="drawer">
            <div class="url-section row">
                <span class="title">URL</span>
                <a class="url-value" href="{entry.url}">{entry.url.replace(/^(?:https?:\/\/)?(?:www\.)?/i, "").split('/')[0]}</a>
                <div class="copy-button">
                    <CopyButton toCopy={ entry.url } />
                </div>
            </div>

            <div class="notes-section">
                <div class="notes-value"><p>{entry.notes}</p></div>
            </div>
            <span class="last-updated" >Updated: {entry.updated.toLocaleString()}</span>
        </div>
    {/if}

    <div class="drawer-buttton" on:click={toggleDraw} class:spin="{showDraw}">
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
    </div>

</div>

<style>
.entry-wrapper {
	 padding: 10px;
	 background-color: var(--bg-dark-colour);
	 border-radius: 12px;
}
 .entry-wrapper .entry-title {
	 display: flex;
	 justify-content: space-between;
	 font-size: 1.5rem;
	 font-weight: bold;
	 margin: -1.8rem 0 5px;
}
 .entry-wrapper .entry-title .delete {
	 margin-right: 5px;
}
 .entry-wrapper .entry-title .delete i {
	 color: crimson;
}
 .entry-wrapper .entry-title span {
	 cursor: pointer;
	 font-size: 1rem;
	 margin-top: 10px;
}
 .entry-wrapper .entry-title span i {
	 margin-left: 5px;
	 font-size: 1.2rem;
	 color: var(--acent-colour);
}
 .title {
	 flex: 3;
	 flex-shrink: 0;
	 min-width: 120px;
	 text-align: center;
	 color: white;
	 margin-right: 5px;
	 padding: 3px 15px;
	 border-radius: 12px;
	 background-color: #3e3e3e;
	 font-weight: bold;
}
 .row {
	 display: flex;
	 margin-bottom: 10px;
}
 .username-section {
	 color: black;
}
 .username-section .username-value {
	 flex: 10;
	 text-overflow: ellipsis;
	 white-space: nowrap;
	 overflow: hidden;
	 text-align: center;
	 border-radius: 12px;
	 display: inline;
	 padding: 2px 20px 2px 20px;
	 background-color: white;
}
 .username-section .copy-button {
	 flex: 1;
	 text-align: center;
	 margin: 3px 0 0 5px;
}
 .password-section {
	 color: black;
}
 .password-section .password-value {
	 flex: 10;
	 text-overflow: ellipsis;
	 white-space: nowrap;
	 overflow: hidden;
	 text-align: center;
	 border-radius: 12px;
	 display: inline;
	 padding: 2px 40px 2px 10px;
	 background-color: white;
}
 .password-section i {
	 user-select: none;
	 margin: 7px 0 0 -30px;
	 display: inline;
	 cursor: pointer;
}
 .password-section .copy-button {
	 flex: 1;
	 text-align: center;
	 margin: 3px 0 0 15px;
}
 .drawer {
	 border-top: 1px solid #505050;
	 margin-top: 15px;
	 padding-top: 15px;
}
 .drawer .url-section {
	 color: black;
}
 .drawer .url-section .url-value {
	 flex: 10;
	 text-overflow: ellipsis;
	 white-space: nowrap;
	 overflow: hidden;
	 text-align: center;
	 border-radius: 12px;
	 display: inline;
	 padding: 2px 20px 2px 20px;
	 color: black;
	 background-color: white;
}
 .drawer .url-section .copy-button {
	 flex: 1;
	 text-align: center;
	 margin: 3px 0 0 5px;
}
 .drawer .notes-section .notes-value {
	 max-height: 150px;
	 margin: 0 3px;
	 overflow: auto;
	 border-radius: 12px;
	 border-style: none;
	 background-color: white;
}
 .drawer .notes-section .notes-value p {
	 margin: 15px;
	 color: black;
	 font-size: 1rem;
	 font-weight: bold;
}
 .drawer .last-updated {
	 font-size: 0.75rem;
	 color: gray;
	 padding-left: 5px;
}
 .drawer-buttton {
	 text-align: center;
	 cursor: pointer;
	 height: 18px;
}
 .drawer-buttton svg {
	 width: 15px;
}
 .spin {
	 transform: rotate(180deg);
}
 

</style>