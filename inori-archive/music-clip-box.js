var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ILmtWrpClxEpz9A1b78skbYUauT8oth1"
randomimages[1] = "https://lh3.google.com/u/0/d/1vhnZWCsY5UNNLDsNv1cEzmyanDuV1NuR"
randomimages[2] = "https://lh3.google.com/u/0/d/11hB-9GAUnD_Bb9bc1nYDNqKquZ1yyF8v"
randomimages[3] = "https://lh3.google.com/u/0/d/1K5c2cn-u4kiaKFl-jneDxvBKb8BjikbW"
randomimages[4] = "https://lh3.google.com/u/0/d/188IEoWvO-zTX9tJWRTllA6wbapC5OXig"
randomimages[5] = "https://lh3.google.com/u/0/d/1pNCBxzuPsy1Yvd5YPMcJq4abMivnbrp8"
randomimages[6] = "https://lh3.google.com/u/0/d/1yiLcep87JNPqZ3nkJ1mwNK7a31ovEol0"
randomimages[7] = "https://lh3.google.com/u/0/d/1_6W7QCLSSs_KqE6NhwKd5VcWV9-D84SQ"
randomimages[8] = "https://lh3.google.com/u/0/d/1T6tmTt3iuJv36v93ds8W6HHnE9KAe0BO"
randomimages[9] = "https://lh3.google.com/u/0/d/1CN3CByyFvvyGsr6wSWABMNg9DuVwwQAq"
randomimages[10] = "https://lh3.google.com/u/0/d/13jEikbbJjm0LYwIt8z0-iDCaAILe0jLf"
randomimages[11] = "https://lh3.google.com/u/0/d/1J6u4wxVotDkYsubmTQYXN97ANgwe0t1V"
randomimages[12] = "https://lh3.google.com/u/0/d/1qa9SEsVlE9sZl9DxDd883M9cpOpBGBQr"
randomimages[13] = "https://lh3.google.com/u/0/d/1IniWmvTGd1AEMPg1lrGWf3eY1VJ40Oo5"
randomimages[14] = "https://lh3.google.com/u/0/d/15MrGWxNCskZO5dDrCetJuG3YZ3BbqNYC"
randomimages[15] = "https://lh3.google.com/u/0/d/1eG4y71X1nfxFT53aLKxyQXDcBPEUUvOg"
randomimages[16] = "https://lh3.google.com/u/0/d/1XeU5Ogz3zVj5pVM1LGsjk4o7JneD2ftq"
randomimages[17] = "https://lh3.google.com/u/0/d/10Fka3sBghuBPQnp8QGv-GEiaHg2kt0eX"
randomimages[18] = "https://lh3.google.com/u/0/d/1djQ94vRfkfaKn96SN3IXMLhroaghGTkx"
randomimages[19] = "https://lh3.google.com/u/0/d/1JsklLYIp2zKLFB4_ipQCaLHNWYpu06oo"
randomimages[20] = "https://lh3.google.com/u/0/d/1KqlUk7sBA1KQA87jpDedEaCYCB4BIgdy"
randomimages[21] = "https://lh3.google.com/u/0/d/1Bw60fe8fP9ScXRa8hU_H_E366-n4qwiV"
randomimages[22] = "https://lh3.google.com/u/0/d/1X2qbPpDlu4ZgurQ3oxtzClY8XyuvtYmW"
randomimages[23] = "https://lh3.google.com/u/0/d/14KAmE5OEaEYGzXrzur01ZNkJlvoilXxQ"
randomimages[24] = "https://lh3.google.com/u/0/d/1UFyIx2bmEnoBcaZ80jy20YJMImbx-OtI"
randomimages[25] = "https://lh3.google.com/u/0/d/1u9BEAwnzunMwUDwoX0_cT2XE22Tj19-_"
randomimages[26] = "https://lh3.google.com/u/0/d/17ohID5KwjsFUcCNlBMKq7uxJReJYo3lp"
randomimages[27] = "https://lh3.google.com/u/0/d/15e4KEDmse7zB6UNlQcHc4Nc1Gx-CmC18"
randomimages[28] = "https://lh3.google.com/u/0/d/1LP9uRlvuwOnAu_py1bkVQqBqf95e97Lz"
randomimages[29] = "https://lh3.google.com/u/0/d/1iufgau05S4dI9pRMr8s3vGfVHO1pWy5o"
randomimages[30] = "https://lh3.google.com/u/0/d/1_lJOwDkE0T4uGHXMQLyNXvoAfoWBdN4W"
randomimages[31] = "https://lh3.google.com/u/0/d/1F4YT9Rv_-iMO0zTjKk6Dy3ocP0Xe_3mN"
randomimages[32] = "https://lh3.google.com/u/0/d/1aLYDfsdmMHj0i5AfJF_mh1cqYI2bsP3s"
randomimages[33] = "https://lh3.google.com/u/0/d/1KODg-txFqC2aG6kxW3Ue0sKZQmBF8gJr"
randomimages[34] = "https://lh3.google.com/u/0/d/1vs1aGIGNsGU2HlgErz_kR7kOCQQ-YnfK"
randomimages[35] = "https://lh3.google.com/u/0/d/1cupFMeJ9Nbt-rXTDpODkld1bZx5OAIo6"
randomimages[36] = "https://lh3.google.com/u/0/d/1ASpmuObMd6cjc_Pu9FMfCirY6LH3pQm9"
randomimages[37] = "https://lh3.google.com/u/0/d/1b2DhJlwRaOQixoCgK3DVaLXUeUegWSvi"
randomimages[38] = "https://lh3.google.com/u/0/d/13L9liednEh6_ha_kufLg39gk9IkbH5dA"
randomimages[39] = "https://lh3.google.com/u/0/d/1JDtU1RODU4D5eNL-EhGoHu0OiAql7jOS"
randomimages[40] = "https://lh3.google.com/u/0/d/1n9LMfb11aeuWP5h-eTdRhSbaNFohNL3d"
randomimages[41] = "https://lh3.google.com/u/0/d/1uVmHlR3XnawV3O35wqu_9bG1BzNrj5Ng"
randomimages[42] = "https://lh3.google.com/u/0/d/13NcWr8okSvCEjX_vW5mYtgxTmKvj05D6"
randomimages[43] = "https://lh3.google.com/u/0/d/1BVXQEIcMQHvake_uK4cATIm1044_chrG"
randomimages[44] = "https://lh3.google.com/u/0/d/11xVHLHQDuKAs7kJAw_5nlze9Lj-aUKpv"
randomimages[45] = "https://lh3.google.com/u/0/d/1rliYrRU6-8Z17gBVFnFBNh4Doyg2d9uO"
randomimages[46] = "https://lh3.google.com/u/0/d/1Jdyq0g37lzLcpQ9ROc4KtQ8bNfXDvTUW"
randomimages[47] = "https://lh3.google.com/u/0/d/16Hqn2JZJQuQnwsUI-AbGiNMdBgFonRp9"
randomimages[48] = "https://lh3.google.com/u/0/d/1QnCRrTjSidq74HG5-2xvnk1SHryz8f_7"
randomimages[49] = "https://lh3.google.com/u/0/d/16KqmQ5okM2gS8s2QKNuhelh_wy0WXpE4"
randomimages[50] = "https://lh3.google.com/u/0/d/1QwxBrY8A-W4n9NOpobOIrcLVFxXSpz0u"
randomimages[51] = "https://lh3.google.com/u/0/d/18NiE4u371YVGvMY9CN9t3AsLCWZonKql"
randomimages[52] = "https://lh3.google.com/u/0/d/1V6X6aYncev6Gqh97rCb_o-pmRWuaAOMU"
randomimages[53] = "https://lh3.google.com/u/0/d/1U8XiuvW8393TIRy22uXezQxFMhoBc-Ox"
randomimages[54] = "https://lh3.google.com/u/0/d/1NIFEWpjBxn6BQYzunogxfrKAvK-mbK10"
randomimages[55] = "https://lh3.google.com/u/0/d/1iWnmKqSGA04ls4PqqIppG9TQ_p1QvpNt"
randomimages[56] = "https://lh3.google.com/u/0/d/1ALPZvexfHQcTSChsP-u_l85Xyo_aUxSR"

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