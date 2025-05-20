var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1Enry4HQqSWilBlBhvtRG0ZGUhjMKA-an"
randomimages[1] = "https://lh3.google.com/u/0/d/1PSJedxcoTXP8yPwqBnO2WhBeC78NgVOM"
randomimages[2] = "https://lh3.google.com/u/0/d/1UxRwD_65fZZYzMFVgSBWx5kRWd_pw5RY"
randomimages[3] = "https://lh3.google.com/u/0/d/1uQRP2v8GBa9ZqBo26Nk4NZcLsajlF9uo"
randomimages[4] = "https://lh3.google.com/u/0/d/1OTUGEu9GtFpiByCpNZga0EBJmLQcW_dt"
randomimages[5] = "https://lh3.google.com/u/0/d/1ezLM1wW4EEEsHlpyUmaElhvxM7IMTbDP"
randomimages[6] = "https://lh3.google.com/u/0/d/15CSjtONylN_DGH75Ru2sdGLbYNdsxVna"
randomimages[7] = "https://lh3.google.com/u/0/d/1jaKZabvMjbt6e2vC-5rJY5yD_rgybAml"
randomimages[8] = "https://lh3.google.com/u/0/d/15u0b-iCf_pDrqDQZGiP8VlLYzi5mG0t6"
randomimages[9] = "https://lh3.google.com/u/0/d/13mLoHt0o1VbAv8GsPuyLwU630sS1sA1j"
randomimages[10] = "https://lh3.google.com/u/0/d/1NY4pgWT2jvNc-_GQkEkX6DTdl3zswtjY"
randomimages[11] = "https://lh3.google.com/u/0/d/1rKWZW3CK9bkrdXoJclc99jyvCFVRYJA-"
randomimages[12] = "https://lh3.google.com/u/0/d/1Yk9uGLBrn19_FceQ1OJSOgWkjol6LZ12"
randomimages[13] = "https://lh3.google.com/u/0/d/1-K-lJMsUvAFCIkShmlP3g9oEnDOCZwdZ"
randomimages[14] = "https://lh3.google.com/u/0/d/1aCx1VwzH5w4HXqSU2cjWDw4TgWkFGacw"
randomimages[15] = "https://lh3.google.com/u/0/d/1KkYmCPmzpp71TyuB45VqVB5I2H3WNdZs"
randomimages[16] = "https://lh3.google.com/u/0/d/1v82GGwsQI_1YMtG7Q3D2ZsR2vBXxRq_U"
randomimages[17] = "https://lh3.google.com/u/0/d/1D9Le4qKM6FlwnU5VkDqyCZe5d4PfC6q1"
randomimages[18] = "https://lh3.google.com/u/0/d/1pEXF6In-6TO0_ggSTZ9cZ3qgfXsjoTAb"
randomimages[19] = "https://lh3.google.com/u/0/d/1yymkToqXGxWKnxpMK3LhuWI9JqBBF6Hp"
randomimages[20] = "https://lh3.google.com/u/0/d/1bKjchgoNPd6NFh3JAohiX9Vrn_yRS0ox"
randomimages[21] = "https://lh3.google.com/u/0/d/1GALp30ZXS2tK53xLT1cVKuzg_9vDvPvw"
randomimages[22] = "https://lh3.google.com/u/0/d/1SEZKnFQBCK6tasnhZbiG2EpqxJkwNV_j"
randomimages[23] = "https://lh3.google.com/u/0/d/14rICYebNBiC2Dlnn-CLtyKgArHL8I_My"
randomimages[24] = "https://lh3.google.com/u/0/d/1iGKOf1-uVGF_BSUu-YfD3PVFYDxKi2S_"
randomimages[25] = "https://lh3.google.com/u/0/d/1WaN5yHLQtOfD04czljCy2iaSLvPZEY4f"
randomimages[26] = "https://lh3.google.com/u/0/d/1-bfKk0cNfvbgkNGrv50jmGxPplfuvT6E"
randomimages[27] = "https://lh3.google.com/u/0/d/1RbGHO1n_SSY6eKqqWCg45bseiA4Os949"
randomimages[28] = "https://lh3.google.com/u/0/d/1gBbZyxDp0yf1MfuQWqV4kZD1pWk5FTrw"
randomimages[29] = "https://lh3.google.com/u/0/d/1lXaDr6CrWBeYKqfeX9mzwmTm79dyfW13"
randomimages[30] = "https://lh3.google.com/u/0/d/1gNykddLNzTIMzi401TDMTl_YGSeXkL5_"
randomimages[31] = "https://lh3.google.com/u/0/d/1Th-kkHWH15VvW9Tj7V6qtskXjYNCbZ-3"
randomimages[32] = "https://lh3.google.com/u/0/d/1voRmeqlH0HuCefrB0ZYDYf5cB9pWx82x"

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
"https://i.postimg.cc/3rCRDsSZ/01.jpg",
"https://i.postimg.cc/NFYjzDMT/02.jpg",
"https://i.postimg.cc/0Q7NnF8P/03.jpg",
"https://i.postimg.cc/j2XS0fw1/04.jpg",
"https://i.postimg.cc/SNgxgWp2/05.jpg",
"https://i.postimg.cc/XYX7mpV2/06.jpg",
"https://i.postimg.cc/vZjHsbTG/07.jpg",
"https://i.postimg.cc/zfgDD6HK/08.jpg",
"https://i.postimg.cc/ydC1Dj05/09.jpg",
"https://i.postimg.cc/gjYGD0SH/10.jpg",
"https://i.postimg.cc/63V9nZ0Q/11.jpg",
"https://i.postimg.cc/8ctNnVxQ/12.jpg",
"https://i.postimg.cc/NG4s01FJ/13.jpg",
"https://i.postimg.cc/02y8KbJ8/14.jpg",
"https://i.postimg.cc/zGL8p6j6/15.jpg",
"https://i.postimg.cc/tCv93phF/16.jpg",
"https://i.postimg.cc/K8dFWfpz/17.jpg",
"https://i.postimg.cc/6QnwxZFh/18.jpg",
"https://i.postimg.cc/vByyYBsw/19.jpg",
"https://i.postimg.cc/ZRLSCSbB/20.jpg",
"https://i.postimg.cc/x8TSm48s/21.jpg",
"https://i.postimg.cc/PJ3nQQ8d/22.jpg",
"https://i.postimg.cc/SQD44k1H/23.jpg",
"https://i.postimg.cc/9F0hFKv0/24.jpg",
"https://i.postimg.cc/RVYz3GBR/25.jpg",
"https://i.postimg.cc/9f55bMzw/26.jpg",
"https://i.postimg.cc/YS6csHmn/27.jpg",
"https://i.postimg.cc/8zrgLWkV/28.jpg",
"https://i.postimg.cc/mDTxx5Yb/29.jpg",
"https://i.postimg.cc/mDjvTyj7/30.jpg",
"https://i.postimg.cc/gj0fjLtQ/31.jpg",
"https://i.postimg.cc/SRtHMQws/32.jpg",
"https://i.postimg.cc/1RWkTMfQ/33.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);