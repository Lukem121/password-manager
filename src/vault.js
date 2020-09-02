export default class Vault {
    constructor(name) {
      this.name = name;
      this.privateKey = bsv.PrivateKey.fromRandom();
      this.publicKey = bsv.PublicKey.fromPrivateKey(this.privateKey);
      this.address = bsv.Address.fromPublicKey(this.publicKey);
      this.passwords = [{
        "website": "www.facebook.com",
        "username": "lukeask@hotmail.co.uk",
        "password": "Lukeiscool123",
        "notes": "I use 2FA with this so I will need my phone"
      }];
    }

    addPassword(website, username, password, notes){
      let newPass = {
        "website": website,
        "username": username,
        "password": password,
        "notes": notes
      }
      this.passwords = [newPass, ...this.passwords];
    }

    fromLocalStorage(lsVault){
      let vault = new Object();
      vault.name = lsVault.name;
      vault.privateKey = bsv.PrivateKey.fromWIF(lsVault.privateKey);
      vault.publicKey = bsv.PublicKey.fromHex(lsVault.publicKey);
      vault.address = bsv.Address.fromString(lsVault.address)
      vault.passwords = lsVault.passwords;
      return vault;
    }
    
    async checkBalance() {
		const response = await fetch('https://api.whatsonchain.com/v1/bsv/main/address/'+ this.address.toString() +'/balance');
		const data = await response.json();
        setBalance(data.confirmed, data.unconfirmed)
        console.count("Checked");
        return {
            'confirmed': data.confirmed, 
            'unconfirmed': data.unconfirmed
        }
	}

	setBalance(confirmed, unconfirmed){
		this.confirmed = confirmed;
		this.unconfirmed = unconfirmed;
    }    
  }