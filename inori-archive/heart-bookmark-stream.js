var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1dSK25o7twuoO-_cnIsVOy1yzYrOm8uTK=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1POcN2CRbASAUVjlEG-f9Zs9WzEUvuEJ0=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1dOJoVogevl2BKsjAZJD2EV5girjlg-WT=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1qFXMC5ouxp7yc9JACWbECXaRZxKGFkh3=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1Lpo9518_dElCEYBJHS2KEWr6oE8skoLl=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1ElNsiT7OHfbiifN8C0pUXc5gjKbQcwhD=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1AQyRbtrgQth_S2hqf3ktpIoazzBb5oze=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1au59BS5imtpIX9U4epXnwOuBf-ofQ5af=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1MJeLu_Ma9efAVAaWGLUO0b5sHtwS6m3O=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1xbU4xVOWikrk3wmjvyJFHxeE4Zb4dDjd=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1aS7YkhkQdLaNjLrl4vNH9ENf_sdcppSC=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1rntzwsmyXqoiIP4vq5HSTGyr3ryKN64j=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1f9nkhnlVkqfnNg4V1ITrsrtGgiDeOSAn=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1KbOsCCYchS70DsCJ2sRLJDPcCRUgyP1s=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1iI8M2KVMw5N45aD5i4EHi3OYzGV09qqv=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1PgNxWSk0XzaHPIHrMl0yOx_G5fQIs1sr=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/16OcKHsi_871uj50KoWg_eZ-jxXEUkqI6=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/11PrzVHwhMnPyo2FU9aGmbME_C1oW_WYx=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/19GSu8ta_s_uQIwS93KpYIB5757xqKwHa=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1T5M-CxxIO9EF15e-oOeKWyb1AdOVr6Vy=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1G-rSkCNv0NpwvKUPNX3GhkZ9MD25tSCT=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/15bRB5eOF3WxGGkW1IIPvde0nOqI8O2ih=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1c5IaLwqefriCL5Bi93b9RdbqltJEXfzp=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1Uv9mVK7oq1ClDVh3mNFI4DFPvONhfFq0=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/11EU6d7-uoiKWWd4zzvAhVwju5ToLq9N_=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1CQXZ5ZLGWouX2krAHxxPknFhlx7oylGI=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1lIW2LyJWny1zlKWaOjjiQ-fipNdZCvWH=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1HYsTUNOyNjGG1E3oUhFJRxVRK7p2LA6Q=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1OnjAeD7YBwFcabNOor0udE-BFGvewb5-=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1pwxBiYfDe0wPWCampEpnJzA1oukreNGH=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1ZAmb9vWoLbx_O3Nx8DzMH6cxFhIh6E7Z=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1RcjXjhyQDj3ApXjmWznz--DL50yBq3Om=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/17eouumaaI9J29Du-cPRO85ME9-Jc2AKi=w1920-h1080"

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
"https://i.postimg.cc/0QbT2sJC/01.jpg",
"https://i.postimg.cc/1t2L8jG1/02.jpg",
"https://i.postimg.cc/WzZxgw8F/03.jpg",
"https://i.postimg.cc/BZPrrJ3S/04.jpg",
"https://i.postimg.cc/ZKkGZXYr/05.jpg",
"https://i.postimg.cc/L82Ggf15/06.jpg",
"https://i.postimg.cc/pXDgdky3/07.jpg",
"https://i.postimg.cc/JzxvNnNq/08.jpg",
"https://i.postimg.cc/0NN3csZq/09.jpg",
"https://i.postimg.cc/LXYWF3rC/10.jpg",
"https://i.postimg.cc/XvDPPzDB/11.jpg",
"https://i.postimg.cc/k40pJtCn/12.jpg",
"https://i.postimg.cc/2ynXV8jn/13.jpg",
"https://i.postimg.cc/NfwzZTbD/14.jpg",
"https://i.postimg.cc/L6BbSXbp/15.jpg",
"https://i.postimg.cc/SQ9PZVLj/16.jpg",
"https://i.postimg.cc/kgJhgm0t/17.jpg",
"https://i.postimg.cc/GmXgBfRg/18.jpg",
"https://i.postimg.cc/XvXH9g7j/19.jpg",
"https://i.postimg.cc/KYV9fgRn/20.jpg",
"https://i.postimg.cc/B6KmVQKR/21.jpg",
"https://i.postimg.cc/ZnzwttPn/22.jpg",
"https://i.postimg.cc/br03qCLT/23.jpg",
"https://i.postimg.cc/ZY6fPnZd/24.jpg",
"https://i.postimg.cc/ZKZwwmKD/25.jpg",
"https://i.postimg.cc/g22NPKhV/26.jpg",
"https://i.postimg.cc/KvNJVW1c/27.jpg",
"https://i.postimg.cc/3xf9rDjP/28.jpg",
"https://i.postimg.cc/pd9CmXqy/29.jpg",
"https://i.postimg.cc/jjGXP0Fc/30.jpg",
"https://i.postimg.cc/fLmvvq4N/31.jpg",
"https://i.postimg.cc/x8Q3pGYb/32.jpg",
"https://i.postimg.cc/QCqk2BxY/33.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);