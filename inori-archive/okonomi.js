var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1WlsXF2kBxOMpQHGjtGwohAiKnGyERdf3"
randomimages[1] = "https://lh3.google.com/u/0/d/1QwxBrY8A-W4n9NOpobOIrcLVFxXSpz0u"
randomimages[2] = "https://lh3.google.com/u/0/d/1-uZp_hzPQqG3nx3LHhnHtMhCSqzCc_Sc"
randomimages[3] = "https://lh3.google.com/u/0/d/1-kJHmsaUqYg6IY9PAmKVK21t4v-74Fi2"
randomimages[4] = "https://lh3.google.com/u/0/d/1SAIVd-1CepE0CmjNbIxbKljd0lL0BmHv"
randomimages[5] = "https://lh3.google.com/u/0/d/1rJMt8kyF_sSV1yQEnoBKX79x5aJVafT6"
randomimages[6] = "https://lh3.google.com/u/0/d/1xBLsDj9NahgT4KCsxff4G-kbzZvIhlmJ"
randomimages[7] = "https://lh3.google.com/u/0/d/1qZWuc62_XIr5drVYqHnj87NRC-SuRPXO"
randomimages[8] = "https://lh3.google.com/u/0/d/1YHZ01vQwQ0RFxMOMLC9kx1VnO72GXW-F"
randomimages[9] = "https://lh3.google.com/u/0/d/1sgul7m1KrJMobu3ILr8xN_aH2OVuajXC"
randomimages[10] = "https://lh3.google.com/u/0/d/1V5PisXo02mueY5FO3rVsp8UJG_uqJyJK"
randomimages[11] = "https://lh3.google.com/u/0/d/1FC5oM3jZBHXnms22K7Law8vQR8UkaA5U"
randomimages[12] = "https://lh3.google.com/u/0/d/1P51p3IvREbFVKG7qwf866KTMMPIgXdQ1"
randomimages[13] = "https://lh3.google.com/u/0/d/12KRi4a-8MArPBoW-ACbItsbc_mX_SdOV"
randomimages[14] = "https://lh3.google.com/u/0/d/1yamdJ6s20pC4XTtWvFsU07iMqmhPn22Q"

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
"https://i.postimg.cc/Bnzcff43/01.jpg",
"https://i.postimg.cc/nVqkWJnm/0029.jpg",
"https://i.postimg.cc/fb07wqR9/02.jpg",
"https://i.postimg.cc/2SyFtSpT/03.jpg",
"https://i.postimg.cc/k43QDN2h/04.jpg",
"https://i.postimg.cc/B6TxF8DZ/05.jpg",
"https://i.postimg.cc/NFbmNWpW/06.jpg",
"https://i.postimg.cc/8cTLm1BR/07.jpg",
"https://i.postimg.cc/1RKG5qsJ/08.jpg",
"https://i.postimg.cc/4NNzKx3Z/09.jpg",
"https://i.postimg.cc/Qx4ccZB7/10.jpg",
"https://i.postimg.cc/jSDPX3NF/11.jpg",
"https://i.postimg.cc/13b6Y0r5/12.jpg",
"https://i.postimg.cc/Pxrn4CcY/14.jpg",
"https://i.postimg.cc/cCL8LBFv/20.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);