var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1hWo28wgsPVOejUYYQU1RF95i0wMCoCvv"
randomimages[1] = "https://lh3.google.com/u/0/d/1wHuxhm84H5p2gEW1xjLxwl80PJmgsnAf"
randomimages[2] = "https://lh3.google.com/u/0/d/1sDoQ_tWEYQj_jaUKJvYtbO_Lkv47yUPl"
randomimages[3] = "https://lh3.google.com/u/0/d/1vGWBwZftRSlNLtQX64y1cifSWF0PoIqh"
randomimages[4] = "https://lh3.google.com/u/0/d/1y4N9TvnHFpEtQTO7HvyGU0FuhXOLZso4"
randomimages[5] = "https://lh3.google.com/u/0/d/141Cz0sMWAnFVSXqvNwzD6mCZfjEKQakN"
randomimages[6] = "https://lh3.google.com/u/0/d/1Z42b7Cd94e09323PCrwbvIXrljpbsgol"
randomimages[7] = "https://lh3.google.com/u/0/d/122nAuxyvB-Z9HgcrpUEo0Cjn3oWDUhFa"
randomimages[8] = "https://lh3.google.com/u/0/d/1oMvJm0jpp395tFynQ0vsBFaLq2W8hwar"
randomimages[9] = "https://lh3.google.com/u/0/d/1M6-dooexWSMjdjGJU7aeGhSRTyTfCRTr"
randomimages[10] = "https://lh3.google.com/u/0/d/1t69OgzWxAZqINXYc3UzZkq4UrF53ybt8"
randomimages[11] = "https://lh3.google.com/u/0/d/1ACQAT1-8_ttwL2qKffogdJPOi2h7NO4j"
randomimages[12] = "https://lh3.google.com/u/0/d/1UoXodaez7EkAd3ZZQ3AJTH9niQNgHnZZ"
randomimages[13] = "https://lh3.google.com/u/0/d/1OrZhednH_ChKDJ8kCO77AQomV5jffwYB"
randomimages[14] = "https://lh3.google.com/u/0/d/1uNzXJdeiZrHhDtXEoJlj1mZyO8LJItjU"
randomimages[15] = "https://lh3.google.com/u/0/d/1N2JR8tUpwxa5AMZAEdNlTvhW3Fp2OC_S"
randomimages[16] = "https://lh3.google.com/u/0/d/1eENPLChuVQCytEJTToKqfp9aDwqDxj6e"
randomimages[17] = "https://lh3.google.com/u/0/d/1Qds26aCfOvOqlj2vQ88qp5irjVfDn7w7"
randomimages[18] = "https://lh3.google.com/u/0/d/1CpDhHg89w82m2P1cxIbRlDgmI4poDgk3"
randomimages[19] = "https://lh3.google.com/u/0/d/1hl0L76At1x4GAHQtQjVOvrarveEbyYcw"
randomimages[20] = "https://lh3.google.com/u/0/d/1BNyGWcZ9z_d7xRfJ0QyyHTd8djQUhJ-1"
randomimages[21] = "https://lh3.google.com/u/0/d/1IaoYixn2nVNU7DXHX4mPQcOFmVinjRgl"
randomimages[22] = "https://lh3.google.com/u/0/d/1McVEWodfWk6dFyLHFdId874KcN9W9jux"
randomimages[23] = "https://lh3.google.com/u/0/d/1z_w3X0v9uXyo1RJ2JGsXQkwtBSj8wM7t"
randomimages[24] = "https://lh3.google.com/u/0/d/1uU1cAQw5rSEa8QeXuOGZ2ENm7Bkck51k"
randomimages[25] = "https://lh3.google.com/u/0/d/1m2eT_VYMS0HZUhU5tPvOcyG-4_4a-wLG"
randomimages[26] = "https://lh3.google.com/u/0/d/1op-dFeKTmrYJEPVFR_LlVdYoL40ll86V"
randomimages[27] = "https://lh3.google.com/u/0/d/19ndDTjdX8hJVRLjhACImAehQy9PWLDJU"
randomimages[28] = "https://lh3.google.com/u/0/d/1iF4zQ21IxZd3EiR3-7gE5qjv8kyGLedd"
randomimages[29] = "https://lh3.google.com/u/0/d/1Gv8VME8oAoOtFF924xrUyzk5I8g_3NiJ"
randomimages[30] = "https://lh3.google.com/u/0/d/1kjsoVPjtRtgYQYgKa1E27obovHYjmhVa"
randomimages[31] = "https://lh3.google.com/u/0/d/1wcVGO6GeOZt65LdK5pC3mOHMPVUJ1ip6"
randomimages[32] = "https://lh3.google.com/u/0/d/1RCaGR0oAjmZrzxpnW7lWiHytXnpTRxB-"
randomimages[33] = "https://lh3.google.com/u/0/d/177fqLpb9s-l6wXg-A5Cx02q4hD5c4lu8"
randomimages[34] = "https://lh3.google.com/u/0/d/1aZFP-fXLeU7ngZxejqoLhX2ElIrSubnf"
randomimages[35] = "https://lh3.google.com/u/0/d/10kHNV-tArMgVKMGWnC-LR_PvAmv4TWFf"

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