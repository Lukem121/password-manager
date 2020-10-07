<script>
    // import { onMount } from 'svelte';
    // import {userStore} from '../userStore';
	// import { goto } from '@sapper/app';
	import Card from "../components/Card.svelte";
    import Button from "../components/Button.svelte";
    // import MoneyButton from '../components/MoneyButton.svelte';

    let email = "";
    let password = "";
    
    let errorMessage = "";

    let fields = { email: '', passphrase: '', confPassphrase: '' };
    let errors = { email: '', passphrase: '', confPassphrase: '' };
    let valid = false;

    let mbDisabled = true;
    let showCurrentlyOffline = false;

    $:{
        checkVaildCreate(fields)
    }


    let auth;
    let db;

	// onMount(async () => {
	// 	const module = await import('../firebase');
	// 	auth = module.auth;
    //     db = module.db;
    //     auth.onAuthStateChanged( u => {
    //         if (u) {
    //             goto("vault")
    //         } else {
    //             console.log("Not logged in");
    //         }
    //     });
	// });
    

    function validateEmail(email) {
        const re = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        return re.test(String(email).toLowerCase());
    }

    const checkVaildCreate = (fields) => {
        valid = true;
        //Vault name validation
        if (fields.email.length > 0 && !validateEmail(fields.email)) {
            valid = false;
            errors.email = 'Not a valid email!'
        } else {
            errors.email = ''
        }

        //Vault passphrase validation
        if (fields.passphrase.length > 0 && fields.passphrase.trim().length < 8) {
            valid = false;
            errors.passphrase = 'Passphrase must be at least 8 characters long'
        } else {
            errors.passphrase = ''
        }

        //Vault confimation passphrase validation
        if (fields.passphrase.length > 0 && !fields.confPassphrase || fields.confPassphrase !== fields.passphrase) {
        valid = false;
        errors.confPassphrase = 'Passphrases do not match'
        } else {
        errors.confPassphrase = ''
        }
        if(fields.email.length > 2 && valid){
            mbDisabled = false;
        }
    }
    
    const userAcept = (payment) => {
        // auth.createUserWithEmailAndPassword(fields.email, fields.passphrase).catch( e => {
        //     errorMessage = e.message;
        // });
        showCurrentlyOffline = true;
    }

    const handleLogin = () => {
        // console.log(auth);
        // auth.signInWithEmailAndPassword(email, password).catch( e => {
        //     errorMessage = e.message;
        // });
        showCurrentlyOffline = true;
    }

</script>

<svelte:head>
	<title>Rashek - Sync</title>
</svelte:head>
<div class="sync-content">
	<div class="card">
		<Card errorMessage={errorMessage}>
			Sign up
		
			<span slot="content">
                <form on:submit|preventDefault>
                    <label for="vault-name">Email</label>
                    <input bind:value={fields.email} name="vault-name" type="text">
                    <div class="error">{ errors.email }</div>
            
                    <label for="passphrase">Passphrase</label>
                    <input bind:value={fields.passphrase} name="passphrase" type="password" autocomplete="off">
                    <div class="error">{ errors.passphrase }</div>
            
                    <label for="conf-passphrase">Confirm passphrase</label>
                    <input bind:value={fields.confPassphrase} name="conf-passphrase" type="password" autocomplete="off">
                    <div class="error">{ errors.confPassphrase }</div>
                </form>
            </span>
		
			<span slot="action-button">
                <Button on:click={handleLogin}>
					Sign up
					<span slot="icon">
						<i class="fas fa-play f"></i>
					</span>
				</Button>
			</span>
        </Card>
        <!-- <button on:click={ userAcept } >Simulate payment</button> -->
    </div>
    
    <div class="card">
		<Card errorMessage={errorMessage}>
			Login
			<span slot="content">
                <form on:submit|preventDefault>
                    <label for="vault-name">Email</label>
                    <input bind:value={email} name="vault-name" type="text">
            
                    <label for="passphrase">Passphrase</label>
                    <input bind:value={password} name="passphrase" type="password">
                </form>
            </span>
		
			<span slot="action-button">
                <Button on:click={handleLogin}>
					Login
					<span slot="icon">
						<i class="fas fa-play f"></i>
					</span>
				</Button>
			</span>
        </Card>
    </div>

    
    <!-- <button on:click={ () => {
        auth.signOut().then(function() {
            // Sign-out successful.
            }).catch( e => {
                console.log(e.code);
                console.log(e.message);
            });
    } } >Sign out</button> -->
</div>

<br>

    {#if showCurrentlyOffline}
        <h2>Sign in & Login are currently offline</h2>
    {/if}




<style>
    .disabled {
        pointer-events:none;
    }
	.sync-content {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-evenly;
	}
	@media screen and (max-width: 500px) {
		.sync-content {
			justify-content: center;
		}
	}
	.card {
		max-width: 45%;
		min-width: 300px;
		margin-right: 15px;
	}
	@media screen and (max-width: 500px) {
		.card {
			margin-right: 0;
			margin-bottom: 35px;
		}
	}
    form {
      font-size: 20px;
      font-weight: bold;
    }
    input {
        width: 98%;
        height: 40px;
        padding-left: 15px;
        border-radius: 16px;
        font-size: 20px;
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
    h2 {
       text-align: center; 
    }
</style>