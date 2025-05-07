var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1eiuKwS8rKLuH_Pt4i9qqDJ3oxOc3XUGe"
randomimages[1] = "https://lh3.google.com/u/0/d/12qDaItUlc6hhgYGNa62vgvyBgLcw_3pU"
randomimages[2] = "https://lh3.google.com/u/0/d/1i0RGenMslfw7Q71GjbHfi6EYSJQpU6e3"
randomimages[3] = "https://lh3.google.com/u/0/d/1eFpfA5k4beYlAPUw2uLdl2wVUNhq0QFA"
randomimages[4] = "https://lh3.google.com/u/0/d/1DS9Mbece6eMwEwqRXCXicFNKB3rBYH8-"
randomimages[5] = "https://lh3.google.com/u/0/d/1LetEx4wFIfepf6PusnLiQZAPNoMXOXvE"
randomimages[6] = "https://lh3.google.com/u/0/d/18tuh4oW37Kci465e1KkKaaAPsosqgS6Y"
randomimages[7] = "https://lh3.google.com/u/0/d/1ZwuEd4-_kJICRmmyNgz4kvhVvrisA9ex"
randomimages[8] = "https://lh3.google.com/u/0/d/1WYPO9j-fwsqJ5VNRaY_c2_hlXvNUxNo0"
randomimages[9] = "https://lh3.google.com/u/0/d/1NUMnY_CwDliS0nWE5cYfymM2nTyrh8t0"
randomimages[10] = "https://lh3.google.com/u/0/d/17YDj98UFo5-_tbSi9ADuTtYQyUiTNjDP"
randomimages[11] = "https://lh3.google.com/u/0/d/1kc-5g7gHBLN-LVlriIB8U1PsMKtVeOp8"
randomimages[12] = "https://lh3.google.com/u/0/d/1mTrXTbsyQv0hjVmU8DV57mxEXAkOvsn5"
randomimages[13] = "https://lh3.google.com/u/0/d/1LZ2nCQAs_e9KpZkKSOL2d6qrSEcYXh1t"
randomimages[14] = "https://lh3.google.com/u/0/d/1UhMpYyIU6BqWGFa1-SMKji0S9JxDTg3z"
randomimages[15] = "https://lh3.google.com/u/0/d/1sxA1MuDxMFlowqHkfWXM2VFlFhgAm1oG"
randomimages[16] = "https://lh3.google.com/u/0/d/1vvxD6pCr0Se2f4YHTMUpzdg53ustTR3C"
randomimages[17] = "https://lh3.google.com/u/0/d/1bgfbwCdO--tkYSj1BwTRd--HEn-tW8ci"
randomimages[18] = "https://lh3.google.com/u/0/d/1QhwLccd47AzDMmcoDR8qJ0FQFkJEMcg9"
randomimages[19] = "https://lh3.google.com/u/0/d/1-32SB_WwwawHIvX_8Wd_pVpctH36rm4a"
randomimages[20] = "https://lh3.google.com/u/0/d/1UuSBL-v7t0x0eN5SICKYI9lvYKjmhzUv"
randomimages[21] = "https://lh3.google.com/u/0/d/1Mu64GI5tqwQ7ufSNWDE1mFxUAdE40Ovw"

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
"https://i.postimg.cc/hGM46c94/01.jpg",
"https://i.postimg.cc/GmFmPkty/02.jpg",
"https://i.postimg.cc/VkQNb7fw/03.jpg",
"https://i.postimg.cc/JhR4pGHd/04.jpg",
"https://i.postimg.cc/1ttRZ2HG/05.jpg",
"https://i.postimg.cc/G25L3K7Z/06.jpg",
"https://i.postimg.cc/Vv0YJt25/07.jpg",
"https://i.postimg.cc/14xywtZB/08.jpg",
"https://i.postimg.cc/y6D9mbH3/09.jpg",
"https://i.postimg.cc/MZgBdm6P/10.jpg",
"https://i.postimg.cc/hPxdwQhS/11.jpg",
"https://i.postimg.cc/JzLkW7Bj/12.jpg",
"https://i.postimg.cc/KY9kLnp5/13.jpg",
"https://i.postimg.cc/wBxR7W2v/14.jpg",
"https://i.postimg.cc/8zmrk8h9/15.jpg",
"https://i.postimg.cc/V6dSFd3P/16.jpg",
"https://i.postimg.cc/qRSNDpTh/17.jpg",
"https://i.postimg.cc/0jSbLhkt/18.jpg",
"https://i.postimg.cc/MZfMMf7y/19.jpg",
"https://i.postimg.cc/sDFBpfmb/20.jpg",
"https://i.postimg.cc/dt8hnMS3/21.jpg",
"https://i.postimg.cc/FHN7BP2Z/22.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);