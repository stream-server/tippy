var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1MhoXJMgJd-uIrFWrhELf40K632s64j81=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1F_thpxh-DEAk0hqJjt691rdflfbEdbm-=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1f1DxlVHk07nc-s0ea76zfLy7zg-R5ogc=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1iJh2WtlGmduOp7gj4wRMbUrwSZXUgoX3=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1IsJf_ABnntIOX_qYanrlK3PbhvlGjTqp=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1ykBHYn6kSoMQuzNzCFxWMDli9Ec2NT8F=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1Ml9rciytN7Gs8DzV7iN6F-DjKbwX47hr=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1hnHmIz0ZIFSn2u63FBFTMfAxIzu21q6_=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1aBxfvSXPA1VYIkpg1ny6VvarJnLmwzvJ=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1_nV-Vroswv6u7LGIh9afzvAlXznKvche=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1RSmkazrtC7Sylmo8IF1EQFvliUypL4vJ=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1L60ZCqid6DRV0FTaWAgIGNb9geOmGwbc=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/18UJbUeCOpgge1FVSVU0WGMUC_oQsrUJd=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1smDCYbfRi41aIJTZj1eKE2ZpMbPOHKT-=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1F8Fxl-lvwOhg65FNb3iqW0BIxMH3Qbq1=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/12Sv7SugBZ5l1jDbaVx_6nt4Ndk_zzuSe=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1S-CfExnR4H7AtcYnsrt8WO0V3lkv6xCG=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1AmH3x07jJgqokIabS0C892pL_QAy0ODy=w1920-h1080"

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