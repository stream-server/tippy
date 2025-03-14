var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ILmtWrpClxEpz9A1b78skbYUauT8oth1=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1vhnZWCsY5UNNLDsNv1cEzmyanDuV1NuR=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/11hB-9GAUnD_Bb9bc1nYDNqKquZ1yyF8v=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1K5c2cn-u4kiaKFl-jneDxvBKb8BjikbW=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/188IEoWvO-zTX9tJWRTllA6wbapC5OXig=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1pNCBxzuPsy1Yvd5YPMcJq4abMivnbrp8=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1yiLcep87JNPqZ3nkJ1mwNK7a31ovEol0=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1_6W7QCLSSs_KqE6NhwKd5VcWV9-D84SQ=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1T6tmTt3iuJv36v93ds8W6HHnE9KAe0BO=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1CN3CByyFvvyGsr6wSWABMNg9DuVwwQAq=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/13jEikbbJjm0LYwIt8z0-iDCaAILe0jLf=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1J6u4wxVotDkYsubmTQYXN97ANgwe0t1V=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1qa9SEsVlE9sZl9DxDd883M9cpOpBGBQr=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1IniWmvTGd1AEMPg1lrGWf3eY1VJ40Oo5=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/15MrGWxNCskZO5dDrCetJuG3YZ3BbqNYC=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1eG4y71X1nfxFT53aLKxyQXDcBPEUUvOg=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1XeU5Ogz3zVj5pVM1LGsjk4o7JneD2ftq=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/10Fka3sBghuBPQnp8QGv-GEiaHg2kt0eX=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1djQ94vRfkfaKn96SN3IXMLhroaghGTkx=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1JsklLYIp2zKLFB4_ipQCaLHNWYpu06oo=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1KqlUk7sBA1KQA87jpDedEaCYCB4BIgdy=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1Bw60fe8fP9ScXRa8hU_H_E366-n4qwiV=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1X2qbPpDlu4ZgurQ3oxtzClY8XyuvtYmW=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/14KAmE5OEaEYGzXrzur01ZNkJlvoilXxQ=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1UFyIx2bmEnoBcaZ80jy20YJMImbx-OtI=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1u9BEAwnzunMwUDwoX0_cT2XE22Tj19-_=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/17ohID5KwjsFUcCNlBMKq7uxJReJYo3lp=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/15e4KEDmse7zB6UNlQcHc4Nc1Gx-CmC18=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1LP9uRlvuwOnAu_py1bkVQqBqf95e97Lz=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1iufgau05S4dI9pRMr8s3vGfVHO1pWy5o=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1_lJOwDkE0T4uGHXMQLyNXvoAfoWBdN4W=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1F4YT9Rv_-iMO0zTjKk6Dy3ocP0Xe_3mN=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1aLYDfsdmMHj0i5AfJF_mh1cqYI2bsP3s=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1KODg-txFqC2aG6kxW3Ue0sKZQmBF8gJr=w1920-h1080"
randomimages[34] = "https://lh3.google.com/u/0/d/1vs1aGIGNsGU2HlgErz_kR7kOCQQ-YnfK=w1920-h1080"
randomimages[35] = "https://lh3.google.com/u/0/d/1cupFMeJ9Nbt-rXTDpODkld1bZx5OAIo6=w1920-h1080"
randomimages[36] = "https://lh3.google.com/u/0/d/1ASpmuObMd6cjc_Pu9FMfCirY6LH3pQm9=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/1b2DhJlwRaOQixoCgK3DVaLXUeUegWSvi=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/13L9liednEh6_ha_kufLg39gk9IkbH5dA=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/1JDtU1RODU4D5eNL-EhGoHu0OiAql7jOS=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/1n9LMfb11aeuWP5h-eTdRhSbaNFohNL3d=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1uVmHlR3XnawV3O35wqu_9bG1BzNrj5Ng=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/13NcWr8okSvCEjX_vW5mYtgxTmKvj05D6=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/1BVXQEIcMQHvake_uK4cATIm1044_chrG=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/11xVHLHQDuKAs7kJAw_5nlze9Lj-aUKpv=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1rliYrRU6-8Z17gBVFnFBNh4Doyg2d9uO=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/1Jdyq0g37lzLcpQ9ROc4KtQ8bNfXDvTUW=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/16Hqn2JZJQuQnwsUI-AbGiNMdBgFonRp9=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/1QnCRrTjSidq74HG5-2xvnk1SHryz8f_7=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/16KqmQ5okM2gS8s2QKNuhelh_wy0WXpE4=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/1QwxBrY8A-W4n9NOpobOIrcLVFxXSpz0u=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/18NiE4u371YVGvMY9CN9t3AsLCWZonKql=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/1V6X6aYncev6Gqh97rCb_o-pmRWuaAOMU=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1U8XiuvW8393TIRy22uXezQxFMhoBc-Ox=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1NIFEWpjBxn6BQYzunogxfrKAvK-mbK10=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1iWnmKqSGA04ls4PqqIppG9TQ_p1QvpNt=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1ALPZvexfHQcTSChsP-u_l85Xyo_aUxSR=w1920-h1080"

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
"https://i.postimg.cc/DZb0jJwL/01.jpg",
"https://i.postimg.cc/jj2LfkV8/02.jpg",
"https://i.postimg.cc/bv5d9Hpq/03.jpg",
"https://i.postimg.cc/T1MwZdKS/04.jpg",
"https://i.postimg.cc/sxYXzkS2/05.jpg",
"https://i.postimg.cc/RCKqwH8z/06.jpg",
"https://i.postimg.cc/GhRtKpwT/07.jpg",
"https://i.postimg.cc/Qxqtyrh4/08.jpg",
"https://i.postimg.cc/y8QN7XJ0/09.jpg",
"https://i.postimg.cc/Jhsz0DJv/10.jpg",
"https://i.postimg.cc/G2Y3PWXj/11.jpg",
"https://i.postimg.cc/25g8Zk76/12.jpg",
"https://i.postimg.cc/Fz4rTTqX/13.jpg",
"https://i.postimg.cc/QCJXwpG9/14.jpg",
"https://i.postimg.cc/tR3CsHZq/15.jpg",
"https://i.postimg.cc/m2TZM6CQ/16.jpg",
"https://i.postimg.cc/XYznRjh8/17.jpg",
"https://i.postimg.cc/5Np4mqSD/18.jpg",
"https://i.postimg.cc/nhzHSjdr/19.jpg",
"https://i.postimg.cc/7LJqwvry/20.jpg",
"https://i.postimg.cc/JnbmHbh6/21.jpg",
"https://i.postimg.cc/Bb43TXLq/22.jpg",
"https://i.postimg.cc/hjfYm3mr/0001.jpg",
"https://i.postimg.cc/pdV4WdX3/0002.jpg",
"https://i.postimg.cc/sg4bCWyp/0003.jpg",
"https://i.postimg.cc/jj89LrD2/0004.jpg",
"https://i.postimg.cc/cH2bBMMN/0005.jpg",
"https://i.postimg.cc/fydg2tBS/0006.jpg",
"https://i.postimg.cc/05K32FP5/0007.jpg",
"https://i.postimg.cc/nc8Ws2h4/0008.jpg",
"https://i.postimg.cc/kXxpWS2k/0009.jpg",
"https://i.postimg.cc/P5yVRkzy/0010.jpg",
"https://i.postimg.cc/pLR1Cd8y/0011.jpg",
"https://i.postimg.cc/QMMYLnf3/0012.jpg",
"https://i.postimg.cc/pd1GPYSn/0013.jpg",
"https://i.postimg.cc/xCJs8Nrp/0014.jpg",
"https://i.postimg.cc/QCc0kLdp/0015.jpg",
"https://i.postimg.cc/63kMv6tW/0016.jpg",
"https://i.postimg.cc/RCtsztLN/0017.jpg",
"https://i.postimg.cc/CLVvMKcJ/0018.jpg",
"https://i.postimg.cc/MKb9n84w/0019.jpg",
"https://i.postimg.cc/L89NfbK1/0020.jpg",
"https://i.postimg.cc/FHTGxVNn/0021.jpg",
"https://i.postimg.cc/nLM2S9LV/0022.jpg",
"https://i.postimg.cc/MG4DCZc7/0023.jpg",
"https://i.postimg.cc/1tqHsx6L/0024.jpg",
"https://i.postimg.cc/kGPy5jvD/0025.jpg",
"https://i.postimg.cc/2yd7L40G/0026.jpg",
"https://i.postimg.cc/W4DmwR9h/0027.jpg",
"https://i.postimg.cc/qMLGkxhM/0028.jpg",
"https://i.postimg.cc/nVqkWJnm/0029.jpg",
"https://i.postimg.cc/wjjQ3RL5/0030.jpg",
"https://i.postimg.cc/XY1c5NkR/0031.jpg",
"https://i.postimg.cc/g0fVMM54/0032.jpg",
"https://i.postimg.cc/XJdwtf6W/0033.jpg",
"https://i.postimg.cc/NFt1tKQH/0034.jpg",
"https://i.postimg.cc/nr1qhnLw/0035.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);