var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ILmtWrpClxEpz9A1b78skbYUauT8oth1=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1vhnZWCsY5UNNLDsNv1cEzmyanDuV1NuR=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/11hB-9GAUnD_Bb9bc1nYDNqKquZ1yyF8v=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1K5c2cn-u4kiaKFl-jneDxvBKb8BjikbW=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/188IEoWvO-zTX9tJWRTllA6wbapC5OXig=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1pNCBxzuPsy1Yvd5YPMcJq4abMivnbrp8=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1yiLcep87JNPqZ3nkJ1mwNK7a31ovEol0=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1_6W7QCLSSs_KqE6NhwKd5VcWV9-D84SQ=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1T6tmTt3iuJv36v93ds8W6HHnE9KAe0BO=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1CN3CByyFvvyGsr6wSWABMNg9DuVwwQAq=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/13jEikbbJjm0LYwIt8z0-iDCaAILe0jLf=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1J6u4wxVotDkYsubmTQYXN97ANgwe0t1V=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1qa9SEsVlE9sZl9DxDd883M9cpOpBGBQr=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1IniWmvTGd1AEMPg1lrGWf3eY1VJ40Oo5=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/15MrGWxNCskZO5dDrCetJuG3YZ3BbqNYC=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1eG4y71X1nfxFT53aLKxyQXDcBPEUUvOg=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1XeU5Ogz3zVj5pVM1LGsjk4o7JneD2ftq=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/10Fka3sBghuBPQnp8QGv-GEiaHg2kt0eX=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1djQ94vRfkfaKn96SN3IXMLhroaghGTkx=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1JsklLYIp2zKLFB4_ipQCaLHNWYpu06oo=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1KqlUk7sBA1KQA87jpDedEaCYCB4BIgdy=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1Bw60fe8fP9ScXRa8hU_H_E366-n4qwiV=w1920-h1080"

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