var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://i.imgur.com/GDYOmBb.jpg"
randomimages[1] = "https://i.imgur.com/ypsAXC6.jpg"
randomimages[2] = "https://i.imgur.com/d0UCNHG.jpg"
randomimages[3] = "https://i.imgur.com/rrjxvC9.jpg"
randomimages[4] = "https://i.imgur.com/qTZbQvt.jpg"
randomimages[5] = "https://i.imgur.com/igeEi1V.jpg"
randomimages[6] = "https://i.imgur.com/rZgdzpj.jpg"
randomimages[7] = "https://i.imgur.com/jVfQscs.jpg"
randomimages[8] = "https://i.imgur.com/iCqNwIt.jpg"
randomimages[9] = "https://i.imgur.com/6tycfvp.jpg"
randomimages[10] = "https://i.imgur.com/QoDkOfa.jpg"
randomimages[11] = "https://i.imgur.com/2SJCTc8.jpg"
randomimages[12] = "https://i.imgur.com/K7MM0nf.jpg"
randomimages[13] = "https://i.imgur.com/ko0lzyR.jpg"
randomimages[14] = "https://i.imgur.com/luZWME5.jpg"
randomimages[15] = "https://i.imgur.com/OcbQtYc.jpg"
randomimages[16] = "https://i.imgur.com/zonkHNt.jpg"
randomimages[17] = "https://i.imgur.com/dZup7bE.jpg"
randomimages[18] = "https://i.imgur.com/F7n8Dr3.jpg"
randomimages[19] = "https://i.imgur.com/VelkVXn.jpg"
randomimages[20] = "https://i.imgur.com/R2sO6vP.jpg"
randomimages[21] = "https://i.imgur.com/wlmd6SL.jpg"
randomimages[22] = "https://i.imgur.com/CdIHwfQ.jpg"
randomimages[23] = "https://i.imgur.com/VtLyTGc.jpg"
randomimages[24] = "https://i.imgur.com/SE57yih.jpg"
randomimages[25] = "https://i.imgur.com/Wj9inAE.jpg"
randomimages[26] = "https://i.imgur.com/0AoHXVJ.jpg"
randomimages[27] = "https://i.imgur.com/3UqAtLE.jpg"
randomimages[28] = "https://i.imgur.com/wABXPCB.jpg"
randomimages[29] = "https://i.imgur.com/3JYne8m.jpg"
randomimages[30] = "https://i.imgur.com/Q612S6h.jpg"
randomimages[31] = "https://i.imgur.com/uq9IhY1.jpg"
randomimages[32] = "https://i.imgur.com/5Zi82jI.jpg"

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