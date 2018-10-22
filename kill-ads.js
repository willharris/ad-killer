function killAds(ads) {
    // console.log('loop');
    // console.log(ads);
    var ad, i;
    
    for (i = 0; i < ads.length; i++) {
        ad = ads[i];
        ad.parentNode.removeChild(ad);
    }
}

function killWpAds() {
    var ads = document.getElementsByTagName('wp-ad');
    killAds(ads);
}

function killTaAds() {
    //var ads = document.getElementsByTagName('iframe');
    var ads1 = Array.from(document.querySelectorAll('[class^=ad-]'));
    var ads2 = Array.from(document.querySelectorAll('[class^=publi]'));
    var ads = ads1.concat(ads2);
    killAds(ads);
}

function killBbcAds() {
    var ads1 = Array.from(document.getElementsByClassName('advert'));
    var ads2 = Array.from(document.querySelectorAll('[class^=teads-inread]'));
    var ads3 = Array.from(document.getElementsByClassName('bbccom_advert'));
    var ads = ads1.concat(ads2).concat(ads3);
    killAds(ads);
}

var origin = window.location.origin;

if (origin.indexOf('washingtonpost') >= 0) {
    console.log('Killing Washington Post ads...');
    window.setInterval(killWpAds, 500);
} else if (origin.indexOf('tagesanzeiger') >= 0) {
    console.log('Killing Tages Anzeiger ads...');
    window.setInterval(killTaAds, 500);
} else if (origin.indexOf('bbc.co') >= 0) {
    console.log('Killing BBC ads...');
    window.setInterval(killBbcAds, 500);
} else {
    console.log('Unhandled site: ' + origin);
}