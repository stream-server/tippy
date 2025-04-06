var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1WaA7tma2V_6eVpVrEqUbyY6WL7eZ3Xn4=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1ufVKie4oFu2VAH-In9l_yTcEjOcQmRs5=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/10_GqBVWMVcxwF27DinxGgaO_M3Q_4yHe=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1CraNBYKA7Wcu7n5BXhLJPip0vmoWRwCE=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/11peV9LhWkSOAGJiEqb73aD53LcOXdKND=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1d6cLWjdM0BBOWEPi9_VmGQKR75-qG1vj=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1S7VtvlCwZNjdJcbxfOc9eeTByqx8-rNc=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1t7bvGjKzryCzFF2LEhNYuUCYwDAGaF3Z=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/12sAx6ZQ7oOe92DdCFcbKqLn_rLEsULO0=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1xy_x5E9Lj_flDueN45E89P63LOkawfV4=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1pk8IFWP4Euw0zc8Wj-Fwj-fpXgVYX3Op=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1OKUcuNH0-0DNqsN1lo4ebXp70-V7sXVk=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1Iq5yOAVN2a7mLCwVpmBftsrBEua4wFBD=w1920-h1080"

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
"https://i.postimg.cc/xCrkmxkR/01.jpg",
"https://i.postimg.cc/6Q42yJQq/02.jpg",
"https://i.postimg.cc/XYJy6ySw/03.jpg",
"https://i.postimg.cc/Jz2Hr4MS/04.jpg",
"https://i.postimg.cc/nzvXG4Bt/05.jpg",
"https://i.postimg.cc/8cNjK7mf/06.jpg",
"https://i.postimg.cc/Vvg53zKG/07.jpg",
"https://i.postimg.cc/kMvVVy7Q/08.jpg",
"https://i.postimg.cc/QxNFcWMR/09.jpg",
"https://i.postimg.cc/tCrYkCZ7/10.jpg",
"https://i.postimg.cc/sgv1Nd7m/11.jpg",
"https://i.postimg.cc/NjSLhJxc/12.jpg",
"https://i.postimg.cc/BvFbJTh1/13.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);