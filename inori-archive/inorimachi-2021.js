var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1VmVegDbkp84JL6pWypyNIWcucCeuiqSA=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/11MkONlKlUVek_ZL2Epx0ywQtKzo-FGFn=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1PhaOt02Howfnd6NBmYVBkA5X-13R953X=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1zogLvj63h15H2Phfa62seaKd0REvB2I2=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1J2H_YENu2fxU5dF42cA1IVGNNIVt6R6w=w1920-h1080"

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