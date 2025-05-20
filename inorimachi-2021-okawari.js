var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1--zVWkCaS21kD0hpfn0Zgga7aUdFF2Gq"
randomimages[1] = "https://lh3.google.com/u/0/d/1ku2ZZo9tVj_YwyotNXVXjRILfQhTuk_C"
randomimages[2] = "https://lh3.google.com/u/0/d/1vr0LDfxfEitamxSk2GC0ncxd9kGMDDuk"
randomimages[3] = "https://lh3.google.com/u/0/d/1bd9POszBy8Rs3EnYaeRAb-BJT8uIZuip"
randomimages[4] = "https://lh3.google.com/u/0/d/1MUa9CvuJu2Sj-6FYe_Um6tS8Vx5ucBCl"
randomimages[5] = "https://lh3.google.com/u/0/d/1Yux8Mi3rMq-53lF_XvKyC0zAhcqIpdgj"
randomimages[6] = "https://lh3.google.com/u/0/d/1IcR0a2iObsWO7PqLpOu4qpZVU1TH48Ml"
randomimages[7] = "https://lh3.google.com/u/0/d/1dRazxSH4VU45pc3bh96W9PergBAHW3Ao"
randomimages[8] = "https://lh3.google.com/u/0/d/1E7SqoNJudniVU1SKvDXCptS-5WXBUEWy"
randomimages[9] = "https://lh3.google.com/u/0/d/1_maMpPae_G-Zdz6Q0e7MqYhwjaWyP10T"
randomimages[10] = "https://lh3.google.com/u/0/d/1A7l82JzZcy48j0wmsLWJJerRO8Yc73Y2"
randomimages[11] = "https://lh3.google.com/u/0/d/1PpKuWQLH7ah6S_jQ0Igf3g6QEQ4yNx3e"
randomimages[12] = "https://lh3.google.com/u/0/d/1P1vPFfBGbvLhMlqanWwF688FoarFm3HO"
randomimages[13] = "https://lh3.google.com/u/0/d/1_vRgCQK21DhT_zvtQMSJ-vgTnL2FuNDX"
randomimages[14] = "https://lh3.google.com/u/0/d/1hWPGOxIhbXiUdRuumhjBFBO19UUmcdD_"
randomimages[15] = "https://lh3.google.com/u/0/d/1FcspHuny6DyzdkAejiCSCXjl9Y-hwJFP"
randomimages[16] = "https://lh3.google.com/u/0/d/105i6FagC82EUa5ViSJ-yLLKt0pL-3k0n"
randomimages[17] = "https://lh3.google.com/u/0/d/11dRKHxZ3lNMBxWcWF3cValROLmGM4BNW"
randomimages[18] = "https://lh3.google.com/u/0/d/1vUv2_1Tc0JLRIaJROIYhstxyHz1pPnUa"
randomimages[19] = "https://lh3.google.com/u/0/d/1jBbUtZmc6JQ7vyfYQrfyOQbp6hVxkEk6"
randomimages[20] = "https://lh3.google.com/u/0/d/1gdlhAyn2VpThWaUK6DdmBI9xTqffUXMH"
randomimages[21] = "https://lh3.google.com/u/0/d/1z87cAPXvNLKeZb-c34Hjl7ilTH5M25fz"
randomimages[22] = "https://lh3.google.com/u/0/d/1lXTG7UePKxsgmkLiZvrVgzXXQ6z-_NFY"
randomimages[23] = "https://lh3.google.com/u/0/d/1YlfNrYJYqreGjGpUKVy82ap-C3dic0U4"

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
"https://i.postimg.cc/15kzqy04/02.jpg",
"https://i.postimg.cc/RV6FhWHj/03.jpg",
"https://i.postimg.cc/cJZ4FTbS/04.jpg",
"https://i.postimg.cc/5t39TvhF/05.jpg",
"https://i.postimg.cc/yd86HxKp/06.jpg",
"https://i.postimg.cc/d1NstFts/07.jpg",
"https://i.postimg.cc/kGVn2HBx/08.jpg",
"https://i.postimg.cc/XqTndgCt/09.jpg",
"https://i.postimg.cc/h4wDkK5M/10.jpg",
"https://i.postimg.cc/vHVYMpRy/11.jpg",
"https://i.postimg.cc/8zg1CtD6/12.jpg",
"https://i.postimg.cc/LsH2t5J4/13.jpg",
"https://i.postimg.cc/Jn08FF39/16.jpg",
"https://i.postimg.cc/vBKywv3D/17.jpg",
"https://i.postimg.cc/C5fghfQ7/18.jpg",
"https://i.postimg.cc/23RfVSpD/19.jpg",
"https://i.postimg.cc/PfLppVG3/20.jpg",
"https://i.postimg.cc/dQz78Rwq/21.jpg",
"https://i.postimg.cc/3Jmk9yx2/22.jpg",
"https://i.postimg.cc/wjz7r61Z/23.jpg",
"https://i.postimg.cc/ht0fWHxj/24.jpg",
"https://i.postimg.cc/2583z2Fx/25.jpg",
"https://i.postimg.cc/d0H3Dr5c/26.jpg",
"https://i.postimg.cc/B6j6FbzL/27.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);