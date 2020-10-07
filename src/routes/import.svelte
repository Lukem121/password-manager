<script>
    import { onMount } from 'svelte';
    import { vaultStorage } from '../VaultStore.js';
	import { goto } from '@sapper/app';
	import Card from "../components/Card.svelte";
    import Button from "../components/Button.svelte";
    import MoneyButton from '../components/MoneyButton.svelte';

    let email = "";
    let password = "";
    let importString;

    let errorMessage = "";
    let loginErrorMessage = "";

    let fields = { email: '', passphrase: '', confPassphrase: '' };
    let errors = { email: '', passphrase: '', confPassphrase: '' };
    let valid = false;

    let mbDisabled = true;

    $:{
        checkVaildCreate(fields)
    }

    let user;
    let auth;
    let db;

	onMount(async () => {
		const module = await import('../firebase');
		auth = module.auth;
        db = module.db;
        auth.onAuthStateChanged( u => {
            if (u) {
                user = u;
                console.log("Logged in");
            } else {
                console.log("Not logged in");
            }
        });
    });
    
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


    const handleLogin = () => {
        console.log(auth);
        auth.signInWithEmailAndPassword(email, password)
        .then(() => {
            const query = db.collection('vaults').doc(user.uid).get()
            .then(function(doc) {
                if (doc.exists) {
                    localStorage.setItem('r-vault', JSON.stringify(doc.data()));
                    goto("passphrase");
                } else {
                    console.log("No such document!");
                }
            }).catch(function(error) {
                console.log("Error getting document:", error);
            });
        })
        .catch( e => {
            loginErrorMessage = e.message;
		});
    }


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
            goto("passphrase")
      }else{
        errorMessage ='Not a valid import string 😭';
        console.error(errorMessage)
      }
    }

</script>

<svelte:head>
	<title>Rashek - Import</title>
</svelte:head>
<div class="sync-content">
	<div class="card">
		<Card errorMessage={errorMessage}>
            Already have a vault? 
            <span slot="content">
                <textarea bind:value={importString} placeholder="Paste import string here..."></textarea>
            </span>
    
            <span slot="action-button">
                <Button on:click={handleClick} icon={"import"}>
                    Import
                    <span slot="icon">
                        <i class="fas fa-file-import"></i>
                    </span>
                </Button>
            </span>
        </Card>
    </div>
    
    <div class="card">
		<Card errorMessage={loginErrorMessage}>
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
</div>




<style>
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
    textarea {
        height: 240px;
        width: 100%;
        resize: none;
    }
</style>