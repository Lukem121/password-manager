<script>
    import CopyButton from "./CopyButton.svelte";
    import { slide } from 'svelte/transition';
    import { sineInOut } from 'svelte/easing';

    export let entry = {
        title: "Facebook",
        username: "lukeask@mail.com",
        password: "goodpassword123",
        url: "No url",
        notes: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet fuga accusantium minima, veritatis rerum aliquid quo euLorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet fuga accusantium minima, veritatis rerum aliquid quo eum cumqLorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet fuga accusantium minima, veritatis rerum aliquid quo eum cumque aspernatur incidunt autem quod libero eos! Unde quis dignissimos pariatur excepturi recusandae.ue aspernatur incidunt autem quod libero eos! Unde quis dignissimos pariatur excepturi recusandae.m cumque aspernatur incidunt autem quod libero eos! Unde quis dignissimos pariatur excepturi recusandae.",
    };
    let showDraw = false;

    const toggleDraw = () => {
        showDraw = !showDraw;
    }
</script>

<fieldset class="wrapper">
    <legend>{entry.title}</legend>
    <div class="content">
        <div class="row mb-20">
            <span class="title">Username</span>
            <div class="value">{entry.username}</div>
            <div class="copy-btn">
                <CopyButton toCopy={ entry.username } />
            </div>
        </div>  

        <div class="row mb-10">
            <span class="title">Password</span>
            <div class="value">{entry.password}</div>
            <div class="copy-btn">
                <CopyButton toCopy={ entry.username } />
            </div>
        </div>   
        
        {#if showDraw}
            <div class="drawer" transition:slide="{{duration: 200, easing: sineInOut }}">
                <div class="row mb-20">
                    <span class="title">URL</span>
                    <div class="value">{entry.url}</div>
                    <div class="copy-btn">
                        <CopyButton toCopy={ entry.url } />
                    </div>
                </div>

                <div class="notes-section">
                    <div class="notes-value"><p>{entry.notes}</p></div>
                </div>
            </div> 
        {/if}

        <div class="drawer-btn" on:click={toggleDraw} class:spin="{showDraw}">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" class="svg-inline--fa fa-chevron-down fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="white" d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"></path></svg>
        </div>
        
    </div>
</fieldset>

<style type="text/scss">
    .mb-10 {
        margin-bottom: 10px;
    }
    .mb-20 {
        margin-bottom: 20px;
    }

    .row {
        display: flex;
        .title {
            min-width: 25%;
            text-align: center;
            margin-right: 5px;
            padding: 3px 20px;
            border-radius: 12px;
            border-style: none;
            background-color: #3E3E3E;
            font-size: 1.1rem;
            font-weight: bold;
        }
        .value {
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            text-align: center;
            width: 100%;
            padding: 3px 20px;
            border-radius: 12px;
            border-style: none;
            color: black;
            background-color: white;
            font-size: 1rem;
            font-weight: bold;
        }
    }

    .drawer{
        border-top: 1px solid #505050;
        margin-top: 20px;
        padding-top: 20px;
        .notes-section{
            .notes-value{
                max-height: 150px;
                overflow: auto;
                border-radius: 12px;
                border-style: none;
                background-color: white;
                
                p{
                    margin: 15px;
                    color: black;
                    font-size: 1rem;
                    font-weight: bold;
                }
            }
            margin-bottom: 10px;
        }
        
    }
    
    .drawer-btn {
        text-align: center;
        cursor: pointer;
        height: 18px;
        svg{
            width: 15px;
        }
    }
    .spin {
        transform: rotate(180deg);
    }

    

    // Card css
    .wrapper {
        min-width: 300px;
        max-width: 500px;
        padding: 5px 20px;
        margin: 0 10px;
        border-radius: 16px;
        background: var(--bg-dark-colour);
        justify-content: space-between;
        flex-direction: column;
        display: flex;
        border: 0;

        legend {
            width: 100%;
            font-size: 22px;
            font-weight: bold;
        }
        .action-btn {
            padding: 15px 0px 15px;
            justify-content: flex-end;
            display: flex;
        }
        .error {
            color: crimson;
        }

        @media screen and (max-width: 500px) {
            margin: 0 5px;
            padding: 5px 10px 5px 10px;
        }
    }
</style>