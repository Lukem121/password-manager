<script>
    export let title;
    let txt = title.toLowerCase();
</script>

<span>
    {#if txt == "google"}
        <span style="color: #4285F4">
            G<span style="color: #DB4437">
            o<span style="color: #F4B400">
            o<span style="color: #4285F4">
            g<span style="color: #0F9D58">
            l<span style="color: #DB4437">
            e</span></span></span></span></span></span>
    {:else if txt == "facebook"}
        <span style="color: #1778F2">Facebook</span>
    {:else if txt == "twitter"}
        <span style="color: #1DA1F2">Twitter <img style="width: 28px; margin-bottom: -2px;" src="./images/CompanyLogos/twitter.png" alt="twitter bird"></span>
    {:else if txt == "reddit"}
        <span style="color: white">Redd<span class="reddit-i"><i>i</i>t</span></span>
    {:else if txt == "amazon"}
        <img style="width: 80px; margin-bottom: -12px;" src="./images/CompanyLogos/amazon.png" alt="amazon logo">
    {:else if txt == "netflix"}
        <img style="width: 80px; margin-bottom: -4px;" src="./images/CompanyLogos/netflix.png" alt="netflix logo">
    {:else if txt == "paypal"}
        <img style="width: 20px; margin-bottom: -4px;" src="./images/CompanyLogos/paypal.png" alt="paypal icon">
        <span style="color: #003087">Pay</span><span style="color: #009cde">Pal</span>
    {:else if txt == "uber"}
        <span style="font-size: 1.7rem; font-weight: 100;">U<span style="font-size: 1.6rem; font-weight: 100;">b</span></span><span style="font-size: 1.5rem; font-weight: 100;">er</span>
    {:else if txt == "ebay"}
        <span style="color: #E53238">
        e<span style="color: #0064D2">
        b<span style="color: #F5AF02">
        a<span style="color: #86B817">
        y</span></span></span></span>
    {:else}
        { title }
    {/if}
    
</span>

<style type="text/scss">

    // Reddit - START
    .reddit-i {
        position: relative;
        display: inline-block;
    }

    .reddit-i:before,
    .reddit-i:after {
        opacity: 1;
        content: 'i';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        font: inherit;
    }

    /* The 0.35 might have to be adjusted for other fonts. */
    .reddit-i:before {
        color: #ff5500;
        clip: rect(auto, auto, 0.7em, auto);
    }
    .reddit-i:after {
        clip: rect(0.46em, auto, auto, auto);
    }

    .reddit-i i {
        font: inherit;
        opacity: 0;
    }

    // Reddit - END


</style>