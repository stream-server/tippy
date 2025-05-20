var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1HV6THsCwaIZOTGR4qNUMZNuTPhzZXhJc"
randomimages[1] = "https://lh3.google.com/u/0/d/1aATvNFHZmYkAC42YGYmC5LA_3OvPMDFQ"
randomimages[2] = "https://lh3.google.com/u/0/d/1TghbwPIJgKmoEHNmSXdXGr4-8SqkAc-t"
randomimages[3] = "https://lh3.google.com/u/0/d/1kNJ0vSgS8ob1hGFj-sU7hwG_DlOENZxR"
randomimages[4] = "https://lh3.google.com/u/0/d/1CzA7BdvSUb0svc4mvR_W7AlxzPj2Yi2G"
randomimages[5] = "https://lh3.google.com/u/0/d/1qOdVbPUYHQozXZ2ZRA9V-r0kby9uAGKu"
randomimages[6] = "https://lh3.google.com/u/0/d/1cU-LXaUFd-LkFZehb8fMAQ4Bzv_yHPlG"
randomimages[7] = "https://lh3.google.com/u/0/d/1AjvBcDL6Bv7o_lebZApdsgKBv1BrZIm-"
randomimages[8] = "https://lh3.google.com/u/0/d/1mES4dIYOSK4Lns0-QACYEFKrTr_VawZp"
randomimages[9] = "https://lh3.google.com/u/0/d/1ksK2r457XwPMNnbciYFpmiZpa--JAZtz"
randomimages[10] = "https://lh3.google.com/u/0/d/1VuL0C4B9qx72n6uu3_9fgtfeP4cuugsN"
randomimages[11] = "https://lh3.google.com/u/0/d/1f8GN1I9htb99PFVacr5NLwXyqBKt2Gkd"
randomimages[12] = "https://lh3.google.com/u/0/d/1xN7w_EsxzDXWCB9pMwaOhUB01tU4xMx9"
randomimages[13] = "https://lh3.google.com/u/0/d/1ijpPnD4mk0BlHA1Q25E8JC4SxWI0ue8d"
randomimages[14] = "https://lh3.google.com/u/0/d/1ntJxnYP8wnyGvAF4ZdqLCztl2ERj1sxM"
randomimages[15] = "https://lh3.google.com/u/0/d/1Gaq4_He7xBOViuZYzKqd3H6eZUl0Bcp4"
randomimages[16] = "https://lh3.google.com/u/0/d/1TmkbSda_wBBgD31M-6cRg4wTsT5Eg-td"
randomimages[17] = "https://lh3.google.com/u/0/d/1pJnaNUyN3QEqPzVaZo8k1dZ-q7Yj2Z5H"
randomimages[18] = "https://lh3.google.com/u/0/d/1RZ8-XHVxZqo_Od3s0DSBzcovsQO1i4Ic"
randomimages[19] = "https://lh3.google.com/u/0/d/1NWt4hV4BvHm69wfO6r546f1FBOMji3_S"
randomimages[20] = "https://lh3.google.com/u/0/d/1X3o-glWUCJTDvYjGcNyxMDVCOylWIvZh"
randomimages[21] = "https://lh3.google.com/u/0/d/1hN8Us6jugdkS4OSqlCIzU2LGs1B7aqsW"
randomimages[22] = "https://lh3.google.com/u/0/d/1EgHSaXEAIOB242bNIstvmmN_gs8p_2tc"
randomimages[23] = "https://lh3.google.com/u/0/d/1Wr-o6Wd1Ng3T7jvQSTXvCRgwECMWKnl4"
randomimages[24] = "https://lh3.google.com/u/0/d/12_ujEzrca2UhBByW7Suq4gLiEkJiuRu3"
randomimages[25] = "https://lh3.google.com/u/0/d/1iaPmarkyq-ObtEBcvrxEyr01cP-6gBhl"
randomimages[26] = "https://lh3.google.com/u/0/d/17b5M9dqEUMQOOdWt0tV-Lm6APq5pP4Tp"
randomimages[27] = "https://lh3.google.com/u/0/d/1Qv0B-IXscEBeVJLhaWCwq5LlUg8anxyn"
randomimages[28] = "https://lh3.google.com/u/0/d/1UDSCbBkLiiAQ3cF8Ep0aEwBpXr8KWzyI"
randomimages[29] = "https://lh3.google.com/u/0/d/1zz8xgBQUXPUHT7kuXoDaNokQV67OLwkV"
randomimages[30] = "https://lh3.google.com/u/0/d/1raqApvCF8Q8ZPMMTmfKtRrW3Sw_f91Xs"
randomimages[31] = "https://lh3.google.com/u/0/d/1E3e4G5WdRvPNLIb1qD3spx-KHLNzNnJf"
randomimages[32] = "https://lh3.google.com/u/0/d/1ynJBre3MM2dYQVpbzrc6t2TPIi7b6ngN"
randomimages[33] = "https://lh3.google.com/u/0/d/14ZuQ_qHkH36MH1LmXmnr9gB4zahgNYP0"
randomimages[34] = "https://lh3.google.com/u/0/d/1ywy9znwnS5KdXwlEz5hwyJFQGgGMoXRl"
randomimages[35] = "https://lh3.google.com/u/0/d/10J7lf-zT7zZV5I6kNA5m8Ic9fIe_2Asl"
randomimages[36] = "https://lh3.google.com/u/0/d/1jJh-swaEkusLwAvVR3Afm5b6Z_2NNO1u"
randomimages[37] = "https://lh3.google.com/u/0/d/1yNs-apAhNqoU4Dx_3fJb_sg7a7ZFOZCH"
randomimages[38] = "https://lh3.google.com/u/0/d/1FudGfd2WyVy7zyXxTU1EWgTKszr2wSh1"
randomimages[39] = "https://lh3.google.com/u/0/d/12hlGjmsOqM52ah0DDRnIq9jTF7kIrTwK"
randomimages[40] = "https://lh3.google.com/u/0/d/1XYAItxzC5C_B5a5AAGdFCI4dMRAMaW0q"
randomimages[41] = "https://lh3.google.com/u/0/d/1E5BUK3nVB2uwDW0Q-9aksOIaBOHHTnmm"
randomimages[42] = "https://lh3.google.com/u/0/d/1LnglVLy1dy7V-PlMen3v5gfyezX7oEbX"
randomimages[43] = "https://lh3.google.com/u/0/d/1AsdooxqYDcRir3kvyu66S3BuE_PqhUu-"
randomimages[44] = "https://lh3.google.com/u/0/d/18SaVeqlLMCfwntBhf5PSBoeBHobLAdMv"
randomimages[45] = "https://lh3.google.com/u/0/d/1Y8bq7Em3pFIylCevPULYcPqQMmRth4yQ"
randomimages[46] = "https://lh3.google.com/u/0/d/1tSC9F3eTYge_CIO4QnYlfZEH4p96-tiy"
randomimages[47] = "https://lh3.google.com/u/0/d/1qNqkECg6xNmrSHVHuue5W_d-yjJND0wj"
randomimages[48] = "https://lh3.google.com/u/0/d/15AAxgi17cSvwYQfCh9sy723sK263rP0Y"
randomimages[49] = "https://lh3.google.com/u/0/d/1qE9tdq46rh8M3pSQG5Wt2AecLoUsjuot"
randomimages[50] = "https://lh3.google.com/u/0/d/1mKaJXySywFr4E3QnuRjQgaCKudrW3285"
randomimages[51] = "https://lh3.google.com/u/0/d/1AbTHL43HU49DHFXtfJA3WaZrXJUiPBUm"
randomimages[52] = "https://lh3.google.com/u/0/d/155loiQy2b3FEoNLNvPj6EHy3ne10scRT"
randomimages[53] = "https://lh3.google.com/u/0/d/1_tuVeZR7iAbnGyUtJNDeV0Olp4jPyt_O"
randomimages[54] = "https://lh3.google.com/u/0/d/1NBA2HnYsfTpKNCEDqUWWoQI_58vqL69h"
randomimages[55] = "https://lh3.google.com/u/0/d/1xtMT2ALDB86t9YPO7EaZgVmoqIY5JZ6e"
randomimages[56] = "https://lh3.google.com/u/0/d/1WgUVAprvBy0Y0d1yxjqiVv_M3v8StDRr"
randomimages[57] = "https://lh3.google.com/u/0/d/1XCapP2ZR2tzd8XzTUO616IN9cp0mob5T"
randomimages[58] = "https://lh3.google.com/u/0/d/1iH3Rdls3pl82BQAHDQQNs4qKY2lsM1sC"
randomimages[59] = "https://lh3.google.com/u/0/d/1GZAaeFTp5x7KnpTmwvaRuGMJvPfBNoUo"
randomimages[60] = "https://lh3.google.com/u/0/d/1sosomMJMK6p26vxAdn30xR3jzCw4TNrZ"
randomimages[61] = "https://lh3.google.com/u/0/d/1bsCGnYL-Tj1_5J_wazOyUhQ_V1iLwdqt"
randomimages[62] = "https://lh3.google.com/u/0/d/1ljZe_dNPa8-qdxe23F9lNCQr1KuRaM4H"
randomimages[63] = "https://lh3.google.com/u/0/d/1fzaUiZUpkL51RLiZgewI7InJhBLnRPvc"
randomimages[64] = "https://lh3.google.com/u/0/d/1mtb5edegxtsrQLczPKe6bJ6-u-NdNkdu"

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
"https://i.postimg.cc/3xD66TvM/01.jpg",
"https://i.postimg.cc/25Qtk7G2/02.jpg",
"https://i.postimg.cc/CKTtpQGR/03.jpg",
"https://i.postimg.cc/3R3cd0b7/04.jpg",
"https://i.postimg.cc/d1nSdQzC/05.jpg",
"https://i.postimg.cc/yxdpT4Hb/06.jpg",
"https://i.postimg.cc/T147772Y/07.jpg",
"https://i.postimg.cc/gcST2JyF/08.jpg",
"https://i.postimg.cc/fTVgtN53/09.jpg",
"https://i.postimg.cc/jdB3yFkM/10.jpg",
"https://i.postimg.cc/VkMGgWxm/11.jpg",
"https://i.postimg.cc/TP6k4Wxm/12.jpg",
"https://i.postimg.cc/Jh5TV47F/13.jpg",
"https://i.postimg.cc/HxW6pDVk/14.jpg",
"https://i.postimg.cc/85ytcK6B/15.jpg",
"https://i.postimg.cc/NF5bH68h/16.jpg",
"https://i.postimg.cc/HnRz4r3r/17.jpg",
"https://i.postimg.cc/FFBTQ6mh/18.jpg",
"https://i.postimg.cc/W1RSdJhK/19.jpg",
"https://i.postimg.cc/QxK0Nqx1/20.jpg",
"https://i.postimg.cc/Dwq6LyGz/21.jpg",
"https://i.postimg.cc/KYxNNS7D/22.jpg",
"https://i.postimg.cc/nzLGy4Ps/23.jpg",
"https://i.postimg.cc/s2mJH6wd/24.jpg",
"https://i.postimg.cc/sX04sMkT/25.jpg",
"https://i.postimg.cc/Y0XfxpwL/0001.jpg",
"https://i.postimg.cc/1RMHSKNR/0002.jpg",
"https://i.postimg.cc/Hsh9cs2f/0003.jpg",
"https://i.postimg.cc/286xSB4Q/0004.jpg",
"https://i.postimg.cc/QdKkpGYV/0005.jpg",
"https://i.postimg.cc/MGk05Pg5/0006.jpg",
"https://i.postimg.cc/QtmpXXCY/0007.jpg",
"https://i.postimg.cc/PqmWRbjj/0008.jpg",
"https://i.postimg.cc/fLDcn3z0/0009.jpg",
"https://i.postimg.cc/Rh0whjnS/0010.jpg",
"https://i.postimg.cc/WzfgkXMM/0011.jpg",
"https://i.postimg.cc/c1DQ24Vr/0012.jpg",
"https://i.postimg.cc/RVNcBxBG/0013.jpg",
"https://i.postimg.cc/7YdSPtP4/0014.jpg",
"https://i.postimg.cc/zfShjJCD/0015.jpg",
"https://i.postimg.cc/qvKyNcg3/0016.jpg",
"https://i.postimg.cc/zf1WKLRP/0017.jpg",
"https://i.postimg.cc/kGZR4Dms/0018.jpg",
"https://i.postimg.cc/qRJ3D9ws/0019.jpg",
"https://i.postimg.cc/gJg6CNtf/0020.jpg",
"https://i.postimg.cc/kGDtqKkD/0021.jpg",
"https://i.postimg.cc/NGPHbCHX/0022.jpg",
"https://i.postimg.cc/dtbTc7nt/0023.jpg",
"https://i.postimg.cc/VN1r533x/0024.jpg",
"https://i.postimg.cc/htVQDS38/0025.jpg",
"https://i.postimg.cc/MGDcB9wv/0026.jpg",
"https://i.postimg.cc/J09t8gNd/0027.jpg",
"https://i.postimg.cc/vBZ4t58X/0028.jpg",
"https://i.postimg.cc/85XjKsjG/0029.jpg",
"https://i.postimg.cc/yxJWwBZZ/0030.jpg",
"https://i.postimg.cc/NfH5DsYh/0031.jpg",
"https://i.postimg.cc/2jJ1nqsF/0032.jpg",
"https://i.postimg.cc/mgWh6v2P/0033.jpg",
"https://i.postimg.cc/0yGrgVbc/0034.jpg",
"https://i.postimg.cc/QMXCjc7s/0035.jpg",
"https://i.postimg.cc/xCZ1G74T/0036.jpg",
"https://i.postimg.cc/HxnLyH3h/0037.jpg",
"https://i.postimg.cc/8Ct5csdv/0038.jpg",
"https://i.postimg.cc/Hn7s62q0/0039.jpg",
"https://i.postimg.cc/pybV4jvw/0040.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);