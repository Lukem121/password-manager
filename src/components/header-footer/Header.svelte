<script lang="ts">
</script>
<header>
    <a href="#default"><img src="/images/logo.png" alt="Onchain Logo"></a>
    <div class="header-right">
        <a href="#about"><img src="/images/about.png" alt="about link"></a>
    </div>
</header>

<style type="text/scss">
    header {
        overflow: hidden;
        margin: 15px 0 10px 0;
        
        .header-right {
            :focus {outline:none;}
            ::-moz-focus-inner {border:0;}
            padding-top: 20px; 
            float: right;
            img {
                width: 50px;
            }
        }

        img {
            width: 100%;
            max-width: 280px;
            height: 100%;
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
            }
        }
    }
</style>