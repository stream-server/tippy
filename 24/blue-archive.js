var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1gA61zPGzmGHHSg3wGLtT6gw8MV5bM5d4"
randomimages[1] = "https://lh3.google.com/u/0/d/13_E6acu824SJlQDFhhJlO-Afs3ZDN92e"
randomimages[2] = "https://lh3.google.com/u/0/d/1n1a5hxe6qfvq0nP48Czrn8Wr-MDiyWKg"
randomimages[3] = "https://lh3.google.com/u/0/d/1gIYjCUtehTvdXnQ1NywP60ai_L1gfpnZ"
randomimages[4] = "https://lh3.google.com/u/0/d/1GCqTlkXTaqvR6Ny5IVxaUPeYiFgZZ8H2"
randomimages[5] = "https://lh3.google.com/u/0/d/1hiAKZXJQcOuhkiSob2Qnlom_M8fHbsCN"
randomimages[6] = "https://lh3.google.com/u/0/d/1Xzu-D-x_zf8Q9BjQUC19a7vtMVCJe-J5"
randomimages[7] = "https://lh3.google.com/u/0/d/1S2Lml_QRIHZ2MbPiMHo6ZXPFfEN_IZce"
randomimages[8] = "https://lh3.google.com/u/0/d/1i3vNlV4t7ORdmxt429i6wu-mQXqUCal4"
randomimages[9] = "https://lh3.google.com/u/0/d/11yfQ7bK58kfNY5F2piShAI_SxKGWykzI"
randomimages[10] = "https://lh3.google.com/u/0/d/1ZLfctjxEwDzWcUgZAnQQLObr91T_F6Ap"
randomimages[11] = "https://lh3.google.com/u/0/d/1fhERvr1Bw6njEXZ3khryhDAq85JI9Y4_"
randomimages[12] = "https://lh3.google.com/u/0/d/1mV35ghPm1SsLAgBwZFqzNRUBy1cRHw_M"
randomimages[13] = "https://lh3.google.com/u/0/d/1YteWsDykg_uz3FhVHCRnLlMSigWrl3jm"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {
  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = curindex === 0 ? 1 : curindex - 1;
  } else {
    curindex = tempindex;
  }

  var img = new Image();
  img.src = randomimages[curindex];

  img.onload = function() {
    document.images.defaultimage.src = randomimages[curindex];
  };

  img.onerror = function() {
    console.error(`Failed to load image: ${randomimages[curindex]}`);

    // 대체 이미지 배열
    var placeholderImages = [
"https://i.postimg.cc/mr285V5h/01.jpg",
"https://i.postimg.cc/mgSmjKV0/02.jpg",
"https://i.postimg.cc/BvYM9Drp/03.jpg",
"https://i.postimg.cc/wv1F6MHp/04.jpg",
"https://i.postimg.cc/9Msbz2Fq/05.jpg",
"https://i.postimg.cc/J0JqkFGY/06.jpg",
"https://i.postimg.cc/J7BKvsP3/07.jpg",
"https://i.postimg.cc/fTn5NMrG/08.jpg",
"https://i.postimg.cc/L6tD4rdn/09.jpg",
"https://i.postimg.cc/CxJ4kkx0/10.jpg",
"https://i.postimg.cc/13yH8JPM/11.jpg",
"https://i.postimg.cc/8C5mHc76/12.jpg",
"https://i.postimg.cc/bJS075HY/13.jpg",
"https://i.postimg.cc/D0VQncBr/14.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);