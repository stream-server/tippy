var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/13eZjqlvXtA4CV77m-EOS1LuOh-IaVdR7"
randomimages[1] = "https://lh3.google.com/u/0/d/1NySiY2M-zKTKdf5nC_auQ0WGPNfp5S10"
randomimages[2] = "https://lh3.google.com/u/0/d/1jsO-FR4JtRop0x9zi2X-JfW9H3Pp1hm-"
randomimages[3] = "https://lh3.google.com/u/0/d/1ueNqSl8APQtUj97F98tHMZk7XSz6YcM_"
randomimages[4] = "https://lh3.google.com/u/0/d/17cLEKO0KVcBw-jp5A9AzHYzsrSwnCnrj"
randomimages[5] = "https://lh3.google.com/u/0/d/1i-pgeCAExexCAhXAFXGOKgXR3gvLGV-_"
randomimages[6] = "https://lh3.google.com/u/0/d/19gFaUnzcNkEe-iyDIJH3R_8T61TQw0h0"
randomimages[7] = "https://lh3.google.com/u/0/d/1wWUL4Eb85Tqw0QFK9Ip6G8EXfVrLdk6M"
randomimages[8] = "https://lh3.google.com/u/0/d/1xE4zlCBnS6-vIpWmat3MPT-fTec-HauF"
randomimages[9] = "https://lh3.google.com/u/0/d/1TErdiMzE7tgUVDCZCqhl61HyVddw7VBN"
randomimages[10] = "https://lh3.google.com/u/0/d/1qY2ps7kRufbqkWF-NUDhnClvmP6MX3mU"
randomimages[11] = "https://lh3.google.com/u/0/d/1Zmyh5IrHOu-x2TUI1HUDh66vtxpzqtWM"
randomimages[12] = "https://lh3.google.com/u/0/d/1m-_NKma8bPvLBiMrFFx9M_bagn6Dlbnm"
randomimages[13] = "https://lh3.google.com/u/0/d/1xg3Y4PmGJNs1PYSJwEZdBafeDtkV2P3Y"
randomimages[14] = "https://lh3.google.com/u/0/d/1f1moL4usDx4DVtEFx8NMziwNJ9n-j285"
randomimages[15] = "https://lh3.google.com/u/0/d/1yS1ayisq4xVlGD5eX2YpGoYI2n3D4Img"
randomimages[16] = "https://lh3.google.com/u/0/d/1OX7Va_JWgSE32P4TnwH7ktVOdH6538nX"
randomimages[17] = "https://lh3.google.com/u/0/d/1oryd9KwAhzlT9-zK4NPZAl2WEAfq1Irg"
randomimages[18] = "https://lh3.google.com/u/0/d/1PgoGmsURwF586YPyNwDCt73w0KoCNVKB"
randomimages[19] = "https://lh3.google.com/u/0/d/1r034JQpcPkkKQJUp-M2Tj0D7yf3KVXGC"
randomimages[20] = "https://lh3.google.com/u/0/d/1Ziigji0v2M-CTIPOr5vCmLdR7YLHFSvI"
randomimages[21] = "https://lh3.google.com/u/0/d/1clLPI5xj60fqZG8CiTkqXSAEhwKDfa6Z"
randomimages[22] = "https://lh3.google.com/u/0/d/19faUiEfNYc2FNcL0tObpSLY-nKPhtnlX"
randomimages[23] = "https://lh3.google.com/u/0/d/1GcSyDpK1CRHD_XmNlk8XSzMscHkH3JKL"
randomimages[24] = "https://lh3.google.com/u/0/d/1W0MVSVg2oPbTxBEAZksL6jpwKnbWkbA3"

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