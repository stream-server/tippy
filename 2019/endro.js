var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/10ANbumoVRhSHUpViouKz_B_uo2rG2Y7A"
randomimages[1] = "https://lh3.google.com/u/0/d/1qzIWLnelbWy-n2JMlNNLlm3AtPIJIlvx"
randomimages[2] = "https://lh3.google.com/u/0/d/1gkLWnq-OgoDyTOkFZyBX9TgOlY31bX2l"
randomimages[3] = "https://lh3.google.com/u/0/d/1_1m-EdT3mBRGG1Y2PVyNrEcBRXa98ByH"
randomimages[4] = "https://lh3.google.com/u/0/d/1roYileE7qPNw3DGQRCHQrxwKP5I_G-yu"
randomimages[5] = "https://lh3.google.com/u/0/d/1n_dKgIPchu8ELgAFWo8eY3A-jUfTVp-N"
randomimages[6] = "https://lh3.google.com/u/0/d/1OFE3dJ9ydpe4bNascq14zUcRAToPdP1j"
randomimages[7] = "https://lh3.google.com/u/0/d/1KHeBnr794thknpdrTjOGuxVhcfOEfz5d"
randomimages[8] = "https://lh3.google.com/u/0/d/1IybAy0aL9seIO91T_rjeNroIg3WL98CZ"
randomimages[9] = "https://lh3.google.com/u/0/d/1ldioBhQPzNU6imdRE1e3BC-1q8gyi5wx"
randomimages[10] = "https://lh3.google.com/u/0/d/1uu4PZbq23BqbXNNL3Da5mJdzpYnwEn7_"
randomimages[11] = "https://lh3.google.com/u/0/d/1NSPRSxzfzTuCPnS3cXbgxyOIMKza_jYH"
randomimages[12] = "https://lh3.google.com/u/0/d/11undwz9Hz5ZEIcFxK3JGG5uJ1NV-B6d2"
randomimages[13] = "https://lh3.google.com/u/0/d/1fk6TCi8u42DoEXl23We86zcccfCGyxJ1"

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