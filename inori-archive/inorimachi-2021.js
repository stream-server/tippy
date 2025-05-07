var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1VmVegDbkp84JL6pWypyNIWcucCeuiqSA"
randomimages[1] = "https://lh3.google.com/u/0/d/11MkONlKlUVek_ZL2Epx0ywQtKzo-FGFn"
randomimages[2] = "https://lh3.google.com/u/0/d/1PhaOt02Howfnd6NBmYVBkA5X-13R953X"
randomimages[3] = "https://lh3.google.com/u/0/d/1zogLvj63h15H2Phfa62seaKd0REvB2I2"
randomimages[4] = "https://lh3.google.com/u/0/d/1J2H_YENu2fxU5dF42cA1IVGNNIVt6R6w"

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
"https://i.postimg.cc/V65nYkLk/02.jpg",
"https://i.postimg.cc/wBqDGkCJ/03.jpg",
"https://i.postimg.cc/C1tDdpzH/04.jpg",
"https://i.postimg.cc/Y0WFWDFc/05.jpg",
"https://i.postimg.cc/J7GQKQXv/06.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);