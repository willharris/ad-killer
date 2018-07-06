function killAds() {
    console.log('loop');
    var ads = document.getElementsByTagName('wp-ad');
    var ad, i;
    
    for (i = 0; i < ads.length; i++) {
        ad = ads[i];
        ad.parentNode.removeChild(ad);
    }
}

window.setInterval(killAds, 500);