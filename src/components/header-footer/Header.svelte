<script>
    import { vaultStorage } from '../../DataStores/VaultStore.js';
</script>
<header>
    <a href="#default"><img src="/images/logov2.png" alt="Onchain Logo"></a>
    <div class="header-right">
        <a href="#about">About</a>
    </div>
</header>

<style type="text/scss">
    /* Style the header with a grey background and some padding */
    header {
        overflow: hidden;
        margin: 15px 0 20px 0;
        
        .header-right {
            padding-top: 10px; 
            float: right;
        }

        /* Style the header links */
        a {
            // float: left;
            // text-align: center;
            font-size: 18px;
            // line-height: 25px;
            // border-radius: 4px;

            // Style the logo link
            img {
                width: 100%;
                max-width: 280px;
                height: 100%;
            }
        }
        // Media queries for responsiveness
        @media screen and (max-width: 500px) {
            a {
                float: none;
                display: block;
                text-align: center;
            }
            .header-right {
                display: none;
                // float: none;
            }
        }
    }
</style>