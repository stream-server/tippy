var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1Sr5pgeivtX_zUss1atPsC0phB_JI5k9X=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1yytG7qWD6bdoCun9_7sMOiJBaDRRSUku=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1h1zF5-1UhlPYYcMQKJWWVKco3BfTP04g=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1Mj0gGe0npwsTMDmHkWyzWth5x4ig5Mws=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1IHy4z3uM6jm9mSv5iYnmnHsLn54yKahE=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1piSyBevMJU4I0TIEzPFaectvHeXYbybB=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1QbI0Ix5xH6BjIhviYueGfMdA6c0HZvMk=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1zGO6NvSQhovE6bh4ZuQcLU9bdoIw13gL=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1bhVVKVLHcK9T6ephZT03Bo-3kuL9ktje=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1RyssGG3IYrlhNX0lpmpXgC_afaMHaEYS=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1QGE5rFi_cfq6DUi68aegzOhWlzwUAwo_=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1QTnIpIZ1cEF4HAzI_KwPjtxNZHB3xyDF=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1SlybTmgzA3esd6GwoxMroCp9q5OpfwdY=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1AHZ_e1SrMofw16rzTWlR-XjDFIh1Su6j=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1f33ctjwgXffPvtPReQ-7j8PL_HAwdjGY=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1raYzL_1v8k0uyP_R2JDPul0wM9g1w6hJ=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1fkRHFsxoOsmPaQvL__iZXBtLQIAweAsH=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1-_pSErezQfffXR5OJEEQyuZbwjqQHmt4=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1wSFw3UK0B8X1c_MyAZlJ28Bw76bIReK6=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1JBfzvJmptUXGzUvELMAtGANKvI7Js_vx=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1BoEjuUJRbn5DaQ36R4z_Q0G1wics-vdz=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1ISvxKynXOPYNfE2nOj5FDdYrOlRjz18Q=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1bPjlStfEAb_y90NdkigFOGzdMigIyUaL=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1GW_5frCboKS0ilU9gwuANZDd4MA8zCJs=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1zRDhbQd4eopp1CPuyaidZSyb20HgFri0=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1QRgkp1v2eoqPl1m0tWT_ja7g_d79MQqa=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/187WZFJ9ma0CPwI0BHFixXSGyqdgQVxKw=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1EP13IYRSw6o7akw1DuUD5ZMQKVNgx69k=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/195c5kBY-i3haTh7ODukckuj9So6jLetC=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1ZcZOwAQprprDyfng2uPHqj4DTCwhe-MB=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1XqiVctdkvulOyoMbcO3URJo8cxn1dhZB=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/153Ut-SohPosI80FkFnh_2S99hPZzKBVc=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1P7W0EL-j5qEYrR2CEiE2S9QndPmygMkO=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1I4CJ4Na4ibn2g6H_t1s_I9EY42OrwU13=w1920-h1080"

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