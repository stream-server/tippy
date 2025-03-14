var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1eiuKwS8rKLuH_Pt4i9qqDJ3oxOc3XUGe=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/12qDaItUlc6hhgYGNa62vgvyBgLcw_3pU=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1i0RGenMslfw7Q71GjbHfi6EYSJQpU6e3=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1eFpfA5k4beYlAPUw2uLdl2wVUNhq0QFA=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1DS9Mbece6eMwEwqRXCXicFNKB3rBYH8-=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1LetEx4wFIfepf6PusnLiQZAPNoMXOXvE=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/18tuh4oW37Kci465e1KkKaaAPsosqgS6Y=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1ZwuEd4-_kJICRmmyNgz4kvhVvrisA9ex=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1WYPO9j-fwsqJ5VNRaY_c2_hlXvNUxNo0=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1NUMnY_CwDliS0nWE5cYfymM2nTyrh8t0=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/17YDj98UFo5-_tbSi9ADuTtYQyUiTNjDP=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1kc-5g7gHBLN-LVlriIB8U1PsMKtVeOp8=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1mTrXTbsyQv0hjVmU8DV57mxEXAkOvsn5=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1LZ2nCQAs_e9KpZkKSOL2d6qrSEcYXh1t=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1UhMpYyIU6BqWGFa1-SMKji0S9JxDTg3z=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1sxA1MuDxMFlowqHkfWXM2VFlFhgAm1oG=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1vvxD6pCr0Se2f4YHTMUpzdg53ustTR3C=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1bgfbwCdO--tkYSj1BwTRd--HEn-tW8ci=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1QhwLccd47AzDMmcoDR8qJ0FQFkJEMcg9=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1-32SB_WwwawHIvX_8Wd_pVpctH36rm4a=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1UuSBL-v7t0x0eN5SICKYI9lvYKjmhzUv=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1Mu64GI5tqwQ7ufSNWDE1mFxUAdE40Ovw=w1920-h1080"

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
"placeholder1.png",
"placeholder2.png",
"placeholder3.png"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);