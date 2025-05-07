var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1Sr5pgeivtX_zUss1atPsC0phB_JI5k9X"
randomimages[1] = "https://lh3.google.com/u/0/d/1yytG7qWD6bdoCun9_7sMOiJBaDRRSUku"
randomimages[2] = "https://lh3.google.com/u/0/d/1h1zF5-1UhlPYYcMQKJWWVKco3BfTP04g"
randomimages[3] = "https://lh3.google.com/u/0/d/1Mj0gGe0npwsTMDmHkWyzWth5x4ig5Mws"
randomimages[4] = "https://lh3.google.com/u/0/d/1IHy4z3uM6jm9mSv5iYnmnHsLn54yKahE"
randomimages[5] = "https://lh3.google.com/u/0/d/1piSyBevMJU4I0TIEzPFaectvHeXYbybB"
randomimages[6] = "https://lh3.google.com/u/0/d/1QbI0Ix5xH6BjIhviYueGfMdA6c0HZvMk"
randomimages[7] = "https://lh3.google.com/u/0/d/1zGO6NvSQhovE6bh4ZuQcLU9bdoIw13gL"
randomimages[8] = "https://lh3.google.com/u/0/d/1bhVVKVLHcK9T6ephZT03Bo-3kuL9ktje"
randomimages[9] = "https://lh3.google.com/u/0/d/1RyssGG3IYrlhNX0lpmpXgC_afaMHaEYS"
randomimages[10] = "https://lh3.google.com/u/0/d/1QGE5rFi_cfq6DUi68aegzOhWlzwUAwo_"
randomimages[11] = "https://lh3.google.com/u/0/d/1QTnIpIZ1cEF4HAzI_KwPjtxNZHB3xyDF"
randomimages[12] = "https://lh3.google.com/u/0/d/1SlybTmgzA3esd6GwoxMroCp9q5OpfwdY"
randomimages[13] = "https://lh3.google.com/u/0/d/1AHZ_e1SrMofw16rzTWlR-XjDFIh1Su6j"
randomimages[14] = "https://lh3.google.com/u/0/d/1f33ctjwgXffPvtPReQ-7j8PL_HAwdjGY"
randomimages[15] = "https://lh3.google.com/u/0/d/1raYzL_1v8k0uyP_R2JDPul0wM9g1w6hJ"
randomimages[16] = "https://lh3.google.com/u/0/d/1fkRHFsxoOsmPaQvL__iZXBtLQIAweAsH"
randomimages[17] = "https://lh3.google.com/u/0/d/1-_pSErezQfffXR5OJEEQyuZbwjqQHmt4"
randomimages[18] = "https://lh3.google.com/u/0/d/1wSFw3UK0B8X1c_MyAZlJ28Bw76bIReK6"
randomimages[19] = "https://lh3.google.com/u/0/d/1JBfzvJmptUXGzUvELMAtGANKvI7Js_vx"
randomimages[20] = "https://lh3.google.com/u/0/d/1BoEjuUJRbn5DaQ36R4z_Q0G1wics-vdz"
randomimages[21] = "https://lh3.google.com/u/0/d/1ISvxKynXOPYNfE2nOj5FDdYrOlRjz18Q"
randomimages[22] = "https://lh3.google.com/u/0/d/1bPjlStfEAb_y90NdkigFOGzdMigIyUaL"
randomimages[23] = "https://lh3.google.com/u/0/d/1GW_5frCboKS0ilU9gwuANZDd4MA8zCJs"
randomimages[24] = "https://lh3.google.com/u/0/d/1zRDhbQd4eopp1CPuyaidZSyb20HgFri0"
randomimages[25] = "https://lh3.google.com/u/0/d/1QRgkp1v2eoqPl1m0tWT_ja7g_d79MQqa"
randomimages[26] = "https://lh3.google.com/u/0/d/187WZFJ9ma0CPwI0BHFixXSGyqdgQVxKw"
randomimages[27] = "https://lh3.google.com/u/0/d/1EP13IYRSw6o7akw1DuUD5ZMQKVNgx69k"
randomimages[28] = "https://lh3.google.com/u/0/d/195c5kBY-i3haTh7ODukckuj9So6jLetC"
randomimages[29] = "https://lh3.google.com/u/0/d/1ZcZOwAQprprDyfng2uPHqj4DTCwhe-MB"
randomimages[30] = "https://lh3.google.com/u/0/d/1XqiVctdkvulOyoMbcO3URJo8cxn1dhZB"
randomimages[31] = "https://lh3.google.com/u/0/d/153Ut-SohPosI80FkFnh_2S99hPZzKBVc"
randomimages[32] = "https://lh3.google.com/u/0/d/1P7W0EL-j5qEYrR2CEiE2S9QndPmygMkO"
randomimages[33] = "https://lh3.google.com/u/0/d/1I4CJ4Na4ibn2g6H_t1s_I9EY42OrwU13"

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
"https://i.postimg.cc/wvyvmnm6/01.jpg",
"https://i.postimg.cc/T2b1YMx0/02.jpg",
"https://i.postimg.cc/2ynSHvGM/03.jpg",
"https://i.postimg.cc/50htqpB8/04.jpg",
"https://i.postimg.cc/65N38j5X/05.jpg",
"https://i.postimg.cc/tCtgW3YV/06.jpg",
"https://i.postimg.cc/mgLgwPHp/07.jpg",
"https://i.postimg.cc/y8LYr7h1/08.jpg",
"https://i.postimg.cc/mrhZvKVQ/09.jpg",
"https://i.postimg.cc/3w6rY9bz/10.jpg",
"https://i.postimg.cc/W3kN3rBz/11.jpg",
"https://i.postimg.cc/GtncstRQ/12.jpg",
"https://i.postimg.cc/rsGqGTFL/13.jpg",
"https://i.postimg.cc/xjLjVvGF/14.jpg",
"https://i.postimg.cc/VL1ffJDs/15.jpg",
"https://i.postimg.cc/dtBqLJx2/16.jpg",
"https://i.postimg.cc/3xx3GzsP/17.jpg",
"https://i.postimg.cc/XY14kQ3X/18.jpg",
"https://i.postimg.cc/5tH17LNg/19.jpg",
"https://i.postimg.cc/Zq1m1nWS/20.jpg",
"https://i.postimg.cc/9MZ2V29q/21.jpg",
"https://i.postimg.cc/Vvw8kh9Z/22.jpg",
"https://i.postimg.cc/BbCGLCMS/23.jpg",
"https://i.postimg.cc/QNgDyXs2/24.jpg",
"https://i.postimg.cc/CLF0yWxz/25.jpg",
"https://i.postimg.cc/X7QbnQrx/26.jpg",
"https://i.postimg.cc/Cx5V5kD0/27.jpg",
"https://i.postimg.cc/t4cGxJtx/28.jpg",
"https://i.postimg.cc/XJSMsPPN/29.jpg",
"https://i.postimg.cc/VNbQBwDH/30.jpg",
"https://i.postimg.cc/50whT3cB/31.jpg",
"https://i.postimg.cc/8cN2S6Dq/32.jpg",
"https://i.postimg.cc/QCmRxddV/33.jpg",
"https://i.postimg.cc/zDkmk0F5/34.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);