<script>
	
</script>

<nav>
	<a href="."><img id="logo" src="logo.png" alt="logo"></a>
	<a class="about" href="https://github.com/Lukem121/password-manager"><img src="about.png" alt="about"></a>
</nav>

<style>
	nav {
		display: grid;
		grid-template-columns: 1fr 1fr;
		align-items: center;
	}
	img {
		width: 100%;
        height: auto;
	}

	#logo {
		max-width: 280px;
	}
	.about {
		text-align: right;
	}
	.about img{
		max-width: 50px;
	}
	@media screen and (max-width: 500px) {
		nav {
			grid-template-columns: 1fr;
			justify-items: center;
		}
		.about {
			display: none;
		}
	}

</style>