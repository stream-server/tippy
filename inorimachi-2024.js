var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1MhoXJMgJd-uIrFWrhELf40K632s64j81"
randomimages[1] = "https://lh3.google.com/u/0/d/1F_thpxh-DEAk0hqJjt691rdflfbEdbm-"
randomimages[2] = "https://lh3.google.com/u/0/d/1f1DxlVHk07nc-s0ea76zfLy7zg-R5ogc"
randomimages[3] = "https://lh3.google.com/u/0/d/1iJh2WtlGmduOp7gj4wRMbUrwSZXUgoX3"
randomimages[4] = "https://lh3.google.com/u/0/d/1IsJf_ABnntIOX_qYanrlK3PbhvlGjTqp"
randomimages[5] = "https://lh3.google.com/u/0/d/1ykBHYn6kSoMQuzNzCFxWMDli9Ec2NT8F"
randomimages[6] = "https://lh3.google.com/u/0/d/1Ml9rciytN7Gs8DzV7iN6F-DjKbwX47hr"
randomimages[7] = "https://lh3.google.com/u/0/d/1hnHmIz0ZIFSn2u63FBFTMfAxIzu21q6_"
randomimages[8] = "https://lh3.google.com/u/0/d/1aBxfvSXPA1VYIkpg1ny6VvarJnLmwzvJ"
randomimages[9] = "https://lh3.google.com/u/0/d/1_nV-Vroswv6u7LGIh9afzvAlXznKvche"
randomimages[10] = "https://lh3.google.com/u/0/d/1RSmkazrtC7Sylmo8IF1EQFvliUypL4vJ"
randomimages[11] = "https://lh3.google.com/u/0/d/1L60ZCqid6DRV0FTaWAgIGNb9geOmGwbc"
randomimages[12] = "https://lh3.google.com/u/0/d/18UJbUeCOpgge1FVSVU0WGMUC_oQsrUJd"
randomimages[13] = "https://lh3.google.com/u/0/d/1smDCYbfRi41aIJTZj1eKE2ZpMbPOHKT-"
randomimages[14] = "https://lh3.google.com/u/0/d/1F8Fxl-lvwOhg65FNb3iqW0BIxMH3Qbq1"
randomimages[15] = "https://lh3.google.com/u/0/d/12Sv7SugBZ5l1jDbaVx_6nt4Ndk_zzuSe"
randomimages[16] = "https://lh3.google.com/u/0/d/1S-CfExnR4H7AtcYnsrt8WO0V3lkv6xCG"
randomimages[17] = "https://lh3.google.com/u/0/d/1AmH3x07jJgqokIabS0C892pL_QAy0ODy"

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
"https://i.postimg.cc/X7Fs8Jb5/01.jpg",
"https://i.postimg.cc/8zStnSp0/02.jpg",
"https://i.postimg.cc/XvNx4kyK/03.jpg",
"https://i.postimg.cc/QdJS2yVx/04.jpg",
"https://i.postimg.cc/xds5CNKw/05.jpg",
"https://i.postimg.cc/63y0G6cy/06.jpg",
"https://i.postimg.cc/hj608FZM/07.jpg",
"https://i.postimg.cc/5yzSnPZJ/08.jpg",
"https://i.postimg.cc/Df46vZmN/09.jpg",
"https://i.postimg.cc/WbRnhvk1/10.jpg",
"https://i.postimg.cc/9FGB9ndt/11.jpg",
"https://i.postimg.cc/wjgQQQFK/12.jpg",
"https://i.postimg.cc/tggdLRL2/13.jpg",
"https://i.postimg.cc/Z5HF7vDW/14.jpg",
"https://i.postimg.cc/7LQ1D84D/15.jpg",
"https://i.postimg.cc/V6rqkGst/16.jpg",
"https://i.postimg.cc/SsBW26jv/17.jpg",
"https://i.postimg.cc/hvVV9XdP/18.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);