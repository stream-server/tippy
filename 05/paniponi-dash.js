var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1l6lM_5UwYdEcqSICbTx3-nMMi40HsI_r=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1yA2cjP5KbTPIi0f3TLFj_zJvWjvmfyNk=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1JzN3mvKAwy9dQbj1eCe82fZt4ar-Ao6D=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1vh7A7hYr7qNn9W50AKOK8Hzn8nM7XDCs=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1y6yk083sIuI4janNawUFUMipq8tT9Pzn=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1MY92cC1OfWabmAUKZqrmBaSl0MzPJTU0=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1seQ_AGHfqIWPYElYRobLBtJXwlg-_L1f=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1acngUnTsqCEpQxpwWqFHwHjhUuL2QeFS=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/18wreKLnf3fo6I09a-KpS4sqmNnc0u_XN=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1A9NTjkWy1y6tSLrNEeZq3FEwRLGbNdmR=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1al9XE2cN_xvMUgpLRA7S0-YdIEBexhLp=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/11hnWq0Cd94bBapGvOCgiRbUbK3xBdB-F=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1Vpgrn5O123xoMA2WFUBMxpiMHWdhvBVB=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1EUeJ2KAWsvGgHSuZGoSA__8Fs6pgYwVl=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/15pTatALlRlVJaRqZhu8zDxKhcv6qzwkG=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1aypul7fH56uQY1YIMKF1D_YJ9oVSAUd5=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1H__4iHHhHGBQIVyF9bVPaU_zJbHQTkXO=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1o9aDY5JJ7eSvQ8Zz4ETkplsf6zzWzqkh=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/14w6MF6YR28kPf-CD8YTJ2aoo79NsZCpx=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/19oxx3ECUT_iyJPD81YxBHsEJwSBE3Rax=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1XTQZRpVMF0-VU8SUltD5tlb2YN1bIv8C=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1B3hrE8YbZJc_eYDHh4wpqP0PQh2XH-92=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1uHH2nkQl761yiITnaOaT_kSTqFOQmeNO=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1pmD4Y3hGC7HwICC7bWCyIgh3nYD-T64E=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1d6ITCtYf1RI7DsM92NorQFkfqEzN41t-=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1PUUYvYs4nuH6VVCATyXJHrtHXWEiEomN=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1op2LgpewXP2U_cUs5uejeRANnwcVfJUr=w1920-h1080"

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
"https://i.postimg.cc/50cVN8ZD/01.jpg",
"https://i.postimg.cc/2yrNnrjw/02.jpg",
"https://i.postimg.cc/ZnHtc2Ch/03.jpg",
"https://i.postimg.cc/PxmkLPHJ/04.jpg",
"https://i.postimg.cc/ZYxS4BjD/05.jpg",
"https://i.postimg.cc/65Hx4kkr/06.jpg",
"https://i.postimg.cc/X7N0JjzN/07.jpg",
"https://i.postimg.cc/BnX9Th3d/08.jpg",
"https://i.postimg.cc/T3F8CrYh/09.jpg",
"https://i.postimg.cc/0NwT3bbn/10.jpg",
"https://i.postimg.cc/k4P0dqSm/11.jpg",
"https://i.postimg.cc/d1RzspRT/12.jpg",
"https://i.postimg.cc/4yJjmPw2/13.jpg",
"https://i.postimg.cc/yxvt9Rb1/14.jpg",
"https://i.postimg.cc/zDj99mXs/15.jpg",
"https://i.postimg.cc/xT1WQsXc/16.jpg",
"https://i.postimg.cc/157b3pFM/17.jpg",
"https://i.postimg.cc/fR6FxDB9/18.jpg",
"https://i.postimg.cc/dV7pkLmF/19.jpg",
"https://i.postimg.cc/wBLr2ZGb/20.jpg",
"https://i.postimg.cc/HxthD5Hw/21.jpg",
"https://i.postimg.cc/Xq7DVJ7T/22.jpg",
"https://i.postimg.cc/hvyZhBXh/23.jpg",
"https://i.postimg.cc/CMmQcjcY/24.jpg",
"https://i.postimg.cc/pXr14pSj/25.jpg",
"https://i.postimg.cc/vZ628CbH/26.jpg",
"https://i.postimg.cc/KYP9BL16/27.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);