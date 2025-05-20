var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://img.youtube.com/vi/aLTnGfbbvUI/sddefault.jpg"
randomimages[1] = "https://img.youtube.com/vi/VPKMFOcBNx8/sddefault.jpg"
randomimages[2] = "https://img.youtube.com/vi/X-KCMshLwVc/sddefault.jpg"
randomimages[3] = "https://img.youtube.com/vi/sYXWEjR9c5Q/sddefault.jpg"
randomimages[4] = "https://img.youtube.com/vi/8mPGOIozMLI/sddefault.jpg"
randomimages[5] = "https://img.youtube.com/vi/qDUaOYerHkw/sddefault.jpg"
randomimages[6] = "https://img.youtube.com/vi/QPlNUk2ULqk/sddefault.jpg"
randomimages[7] = "https://img.youtube.com/vi/CzOFrsl64Cs/sddefault.jpg"
randomimages[8] = "https://img.youtube.com/vi/-eb--xDPbI0/sddefault.jpg"
randomimages[9] = "https://img.youtube.com/vi/M-2IDEnjCCY/sddefault.jpg"
randomimages[10] = "https://img.youtube.com/vi/tBlWdhbCQkI/sddefault.jpg"
randomimages[11] = "https://img.youtube.com/vi/aIHTWsBVI6g/sddefault.jpg"
randomimages[12] = "https://img.youtube.com/vi/zMzbzxt1ez4/sddefault.jpg"
randomimages[13] = "https://img.youtube.com/vi/9EJBqkELc0w/sddefault.jpg"
randomimages[14] = "https://img.youtube.com/vi/wfADX5owWpA/sddefault.jpg"
randomimages[15] = "https://img.youtube.com/vi/Mg0F0wHbmdQ/sddefault.jpg"
randomimages[16] = "https://img.youtube.com/vi/J2jyJn8R66c/sddefault.jpg"
randomimages[17] = "https://img.youtube.com/vi/4hIQEfXqSPA/sddefault.jpg"
randomimages[18] = "https://img.youtube.com/vi/rUlRtcC-9RY/sddefault.jpg"
randomimages[19] = "https://img.youtube.com/vi/kagwjHXy9KI/sddefault.jpg"
randomimages[20] = "https://img.youtube.com/vi/0Y0jFT8JpR8/sddefault.jpg"
randomimages[21] = "https://img.youtube.com/vi/ZODzNoIcues/sddefault.jpg"
randomimages[22] = "https://img.youtube.com/vi/Uvft4TeIp84/sddefault.jpg"
randomimages[23] = "https://img.youtube.com/vi/lUMswOjpHww&/sddefault.jpg"
randomimages[24] = "https://img.youtube.com/vi/JLi-1PPM20I/sddefault.jpg"
randomimages[25] = "https://img.youtube.com/vi/FpSdqLTllJ0/sddefault.jpg"
randomimages[26] = "https://img.youtube.com/vi/KcMitUPDfvk/sddefault.jpg"
randomimages[27] = "https://img.youtube.com/vi/JHb8gxytcOo/sddefault.jpg"
randomimages[28] = "https://img.youtube.com/vi/0l1nCfctdho/sddefault.jpg"
randomimages[29] = "https://img.youtube.com/vi/TtRvjHJWsak/sddefault.jpg"
randomimages[30] = "https://img.youtube.com/vi/G1y5hDNeDlI/sddefault.jpg"
randomimages[31] = "https://img.youtube.com/vi/dpT-QcvBNvY/sddefault.jpg"
randomimages[32] = "https://img.youtube.com/vi/7KBZY4OmKu0/sddefault.jpg"
randomimages[33] = "https://img.youtube.com/vi/lvascj4nNno/sddefault.jpg"
randomimages[34] = "https://img.youtube.com/vi/5TnVsDS64eM/sddefault.jpg"
randomimages[35] = "https://img.youtube.com/vi/WvEMSBS8LS8/sddefault.jpg"
randomimages[36] = "https://img.youtube.com/vi/O2nqGQvBv4Q/sddefault.jpg"

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
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);