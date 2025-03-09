var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://i.postimg.cc/vT7ZQwmg/01.jpg"
randomimages[1] = "https://i.postimg.cc/59805Lm4/02.jpg"
randomimages[2] = "https://i.postimg.cc/650pgKSF/03.jpg"
randomimages[3] = "https://i.postimg.cc/vHMm0TPW/04.jpg"
randomimages[4] = "https://i.postimg.cc/9QQQjSH0/05.jpg"
randomimages[5] = "https://i.postimg.cc/pLcXVZPZ/06.jpg"
randomimages[6] = "https://i.postimg.cc/W4Dpdk3P/07.jpg"
randomimages[7] = "https://i.postimg.cc/tgLqW4Zn/08.jpg"
randomimages[8] = "https://i.postimg.cc/nzBHkfBR/09.jpg"
randomimages[9] = "https://i.postimg.cc/zvNq22kJ/10.jpg"
randomimages[10] = "https://i.postimg.cc/T1cfzjkn/11.jpg"
randomimages[11] = "https://i.postimg.cc/2jdkLmz3/12.jpg"
randomimages[12] = "https://i.postimg.cc/jdssz95c/13.jpg"
randomimages[13] = "https://i.postimg.cc/SNDmVrYh/14.jpg"
randomimages[14] = "https://i.postimg.cc/RZY4xZTp/15.jpg"
randomimages[15] = "https://i.postimg.cc/K8jxWMtg/16.jpg"
randomimages[16] = "https://i.postimg.cc/KYgFGhqG/17.jpg"
randomimages[17] = "https://i.postimg.cc/1thS472p/18.jpg"
randomimages[18] = "https://i.postimg.cc/W3GvZ6cx/19.jpg"
randomimages[19] = "https://i.postimg.cc/90cjYRW0/20.jpg"
randomimages[20] = "https://i.postimg.cc/prkMGWTZ/21.jpg"
randomimages[21] = "https://i.postimg.cc/MZYwKDDQ/22.jpg"
randomimages[22] = "https://i.postimg.cc/yYYHJZQr/23.jpg"
randomimages[23] = "https://i.postimg.cc/65jNCpF6/24.jpg"
randomimages[24] = "https://i.postimg.cc/g2xbsPPV/25.jpg"
randomimages[25] = "https://i.postimg.cc/JhJVwc0t/26.jpg"
randomimages[26] = "https://i.postimg.cc/JzSVdd19/27.jpg"
randomimages[27] = "https://i.postimg.cc/W3vRsFq8/28.jpg"
randomimages[28] = "https://i.postimg.cc/pTYwrWDH/29.jpg"
randomimages[29] = "https://i.postimg.cc/gjg1ygSt/30.jpg"
randomimages[30] = "https://i.postimg.cc/qqJ9CPLC/31.jpg"
randomimages[31] = "https://i.postimg.cc/Df5VKzvQ/32.jpg"
randomimages[32] = "https://i.postimg.cc/X7vRN0qR/33.jpg"

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
"https://lh3.google.com/u/0/d/1dSK25o7twuoO-_cnIsVOy1yzYrOm8uTK=w1920-h1080",
"https://lh3.google.com/u/0/d/1POcN2CRbASAUVjlEG-f9Zs9WzEUvuEJ0=w1920-h1080",
"https://lh3.google.com/u/0/d/1dOJoVogevl2BKsjAZJD2EV5girjlg-WT=w1920-h1080",
"https://lh3.google.com/u/0/d/1qFXMC5ouxp7yc9JACWbECXaRZxKGFkh3=w1920-h1080",
"https://lh3.google.com/u/0/d/1Lpo9518_dElCEYBJHS2KEWr6oE8skoLl=w1920-h1080",
"https://lh3.google.com/u/0/d/1ElNsiT7OHfbiifN8C0pUXc5gjKbQcwhD=w1920-h1080",
"https://lh3.google.com/u/0/d/1AQyRbtrgQth_S2hqf3ktpIoazzBb5oze=w1920-h1080",
"https://lh3.google.com/u/0/d/1au59BS5imtpIX9U4epXnwOuBf-ofQ5af=w1920-h1080",
"https://lh3.google.com/u/0/d/1MJeLu_Ma9efAVAaWGLUO0b5sHtwS6m3O=w1920-h1080",
"https://lh3.google.com/u/0/d/1xbU4xVOWikrk3wmjvyJFHxeE4Zb4dDjd=w1920-h1080",
"https://lh3.google.com/u/0/d/1aS7YkhkQdLaNjLrl4vNH9ENf_sdcppSC=w1920-h1080",
"https://lh3.google.com/u/0/d/1rntzwsmyXqoiIP4vq5HSTGyr3ryKN64j=w1920-h1080",
"https://lh3.google.com/u/0/d/1f9nkhnlVkqfnNg4V1ITrsrtGgiDeOSAn=w1920-h1080",
"https://lh3.google.com/u/0/d/1KbOsCCYchS70DsCJ2sRLJDPcCRUgyP1s=w1920-h1080",
"https://lh3.google.com/u/0/d/1iI8M2KVMw5N45aD5i4EHi3OYzGV09qqv=w1920-h1080",
"https://lh3.google.com/u/0/d/1PgNxWSk0XzaHPIHrMl0yOx_G5fQIs1sr=w1920-h1080",
"https://lh3.google.com/u/0/d/16OcKHsi_871uj50KoWg_eZ-jxXEUkqI6=w1920-h1080",
"https://lh3.google.com/u/0/d/11PrzVHwhMnPyo2FU9aGmbME_C1oW_WYx=w1920-h1080",
"https://lh3.google.com/u/0/d/19GSu8ta_s_uQIwS93KpYIB5757xqKwHa=w1920-h1080",
"https://lh3.google.com/u/0/d/1T5M-CxxIO9EF15e-oOeKWyb1AdOVr6Vy=w1920-h1080",
"https://lh3.google.com/u/0/d/1G-rSkCNv0NpwvKUPNX3GhkZ9MD25tSCT=w1920-h1080",
"https://lh3.google.com/u/0/d/15bRB5eOF3WxGGkW1IIPvde0nOqI8O2ih=w1920-h1080",
"https://lh3.google.com/u/0/d/1c5IaLwqefriCL5Bi93b9RdbqltJEXfzp=w1920-h1080",
"https://lh3.google.com/u/0/d/1Uv9mVK7oq1ClDVh3mNFI4DFPvONhfFq0=w1920-h1080",
"https://lh3.google.com/u/0/d/11EU6d7-uoiKWWd4zzvAhVwju5ToLq9N_=w1920-h1080",
"https://lh3.google.com/u/0/d/1CQXZ5ZLGWouX2krAHxxPknFhlx7oylGI=w1920-h1080",
"https://lh3.google.com/u/0/d/1lIW2LyJWny1zlKWaOjjiQ-fipNdZCvWH=w1920-h1080",
"https://lh3.google.com/u/0/d/1HYsTUNOyNjGG1E3oUhFJRxVRK7p2LA6Q=w1920-h1080",
"https://lh3.google.com/u/0/d/1OnjAeD7YBwFcabNOor0udE-BFGvewb5-=w1920-h1080",
"https://lh3.google.com/u/0/d/1pwxBiYfDe0wPWCampEpnJzA1oukreNGH=w1920-h1080",
"https://lh3.google.com/u/0/d/1ZAmb9vWoLbx_O3Nx8DzMH6cxFhIh6E7Z=w1920-h1080",
"https://lh3.google.com/u/0/d/1RcjXjhyQDj3ApXjmWznz--DL50yBq3Om=w1920-h1080",
"https://lh3.google.com/u/0/d/17eouumaaI9J29Du-cPRO85ME9-Jc2AKi=w1920-h1080"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);