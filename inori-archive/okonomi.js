var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1WlsXF2kBxOMpQHGjtGwohAiKnGyERdf3=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1-uZp_hzPQqG3nx3LHhnHtMhCSqzCc_Sc=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1-kJHmsaUqYg6IY9PAmKVK21t4v-74Fi2=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1SAIVd-1CepE0CmjNbIxbKljd0lL0BmHv=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1rJMt8kyF_sSV1yQEnoBKX79x5aJVafT6=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1xBLsDj9NahgT4KCsxff4G-kbzZvIhlmJ=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1qZWuc62_XIr5drVYqHnj87NRC-SuRPXO=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1YHZ01vQwQ0RFxMOMLC9kx1VnO72GXW-F=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1sgul7m1KrJMobu3ILr8xN_aH2OVuajXC=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1V5PisXo02mueY5FO3rVsp8UJG_uqJyJK=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1FC5oM3jZBHXnms22K7Law8vQR8UkaA5U=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1P51p3IvREbFVKG7qwf866KTMMPIgXdQ1=w1920-h1080"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {

    if (curindex == (tempindex = Math.floor(Math.random() * (randomimages.length)))) {
        curindex = curindex == 0 ? 1 : curindex - 1
    } else
        curindex = tempindex

    document.images.defaultimage.src = randomimages[curindex]
}

setInterval("rotateimage()", delay)