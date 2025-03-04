var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1HV6THsCwaIZOTGR4qNUMZNuTPhzZXhJc=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1aATvNFHZmYkAC42YGYmC5LA_3OvPMDFQ=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1TghbwPIJgKmoEHNmSXdXGr4-8SqkAc-t=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1kNJ0vSgS8ob1hGFj-sU7hwG_DlOENZxR=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1CzA7BdvSUb0svc4mvR_W7AlxzPj2Yi2G=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1qOdVbPUYHQozXZ2ZRA9V-r0kby9uAGKu=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1cU-LXaUFd-LkFZehb8fMAQ4Bzv_yHPlG=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1AjvBcDL6Bv7o_lebZApdsgKBv1BrZIm-=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1mES4dIYOSK4Lns0-QACYEFKrTr_VawZp=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1ksK2r457XwPMNnbciYFpmiZpa--JAZtz=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1VuL0C4B9qx72n6uu3_9fgtfeP4cuugsN=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1f8GN1I9htb99PFVacr5NLwXyqBKt2Gkd=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1xN7w_EsxzDXWCB9pMwaOhUB01tU4xMx9=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1ijpPnD4mk0BlHA1Q25E8JC4SxWI0ue8d=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1ntJxnYP8wnyGvAF4ZdqLCztl2ERj1sxM=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1Gaq4_He7xBOViuZYzKqd3H6eZUl0Bcp4=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1TmkbSda_wBBgD31M-6cRg4wTsT5Eg-td=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1pJnaNUyN3QEqPzVaZo8k1dZ-q7Yj2Z5H=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1RZ8-XHVxZqo_Od3s0DSBzcovsQO1i4Ic=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1NWt4hV4BvHm69wfO6r546f1FBOMji3_S=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1X3o-glWUCJTDvYjGcNyxMDVCOylWIvZh=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1hN8Us6jugdkS4OSqlCIzU2LGs1B7aqsW=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1EgHSaXEAIOB242bNIstvmmN_gs8p_2tc=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1Wr-o6Wd1Ng3T7jvQSTXvCRgwECMWKnl4=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/12_ujEzrca2UhBByW7Suq4gLiEkJiuRu3=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1iaPmarkyq-ObtEBcvrxEyr01cP-6gBhl=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/17b5M9dqEUMQOOdWt0tV-Lm6APq5pP4Tp=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1Qv0B-IXscEBeVJLhaWCwq5LlUg8anxyn=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1UDSCbBkLiiAQ3cF8Ep0aEwBpXr8KWzyI=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1zz8xgBQUXPUHT7kuXoDaNokQV67OLwkV=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1raqApvCF8Q8ZPMMTmfKtRrW3Sw_f91Xs=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1E3e4G5WdRvPNLIb1qD3spx-KHLNzNnJf=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1ynJBre3MM2dYQVpbzrc6t2TPIi7b6ngN=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/14ZuQ_qHkH36MH1LmXmnr9gB4zahgNYP0=w1920-h1080"
randomimages[34] = "https://lh3.google.com/u/0/d/1ywy9znwnS5KdXwlEz5hwyJFQGgGMoXRl=w1920-h1080"
randomimages[35] = "https://lh3.google.com/u/0/d/10J7lf-zT7zZV5I6kNA5m8Ic9fIe_2Asl=w1920-h1080"
randomimages[36] = "https://lh3.google.com/u/0/d/1jJh-swaEkusLwAvVR3Afm5b6Z_2NNO1u=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/1yNs-apAhNqoU4Dx_3fJb_sg7a7ZFOZCH=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/1FudGfd2WyVy7zyXxTU1EWgTKszr2wSh1=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/12hlGjmsOqM52ah0DDRnIq9jTF7kIrTwK=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/1XYAItxzC5C_B5a5AAGdFCI4dMRAMaW0q=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1E5BUK3nVB2uwDW0Q-9aksOIaBOHHTnmm=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/1LnglVLy1dy7V-PlMen3v5gfyezX7oEbX=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/1AsdooxqYDcRir3kvyu66S3BuE_PqhUu-=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/18SaVeqlLMCfwntBhf5PSBoeBHobLAdMv=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1Y8bq7Em3pFIylCevPULYcPqQMmRth4yQ=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/1tSC9F3eTYge_CIO4QnYlfZEH4p96-tiy=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/1qNqkECg6xNmrSHVHuue5W_d-yjJND0wj=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/15AAxgi17cSvwYQfCh9sy723sK263rP0Y=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/1qE9tdq46rh8M3pSQG5Wt2AecLoUsjuot=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/1mKaJXySywFr4E3QnuRjQgaCKudrW3285=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/1AbTHL43HU49DHFXtfJA3WaZrXJUiPBUm=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/155loiQy2b3FEoNLNvPj6EHy3ne10scRT=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1_tuVeZR7iAbnGyUtJNDeV0Olp4jPyt_O=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1NBA2HnYsfTpKNCEDqUWWoQI_58vqL69h=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1xtMT2ALDB86t9YPO7EaZgVmoqIY5JZ6e=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1WgUVAprvBy0Y0d1yxjqiVv_M3v8StDRr=w1920-h1080"
randomimages[57] = "https://lh3.google.com/u/0/d/1XCapP2ZR2tzd8XzTUO616IN9cp0mob5T=w1920-h1080"
randomimages[58] = "https://lh3.google.com/u/0/d/1iH3Rdls3pl82BQAHDQQNs4qKY2lsM1sC=w1920-h1080"
randomimages[59] = "https://lh3.google.com/u/0/d/1GZAaeFTp5x7KnpTmwvaRuGMJvPfBNoUo=w1920-h1080"
randomimages[60] = "https://lh3.google.com/u/0/d/1sosomMJMK6p26vxAdn30xR3jzCw4TNrZ=w1920-h1080"
randomimages[61] = "https://lh3.google.com/u/0/d/1bsCGnYL-Tj1_5J_wazOyUhQ_V1iLwdqt=w1920-h1080"
randomimages[62] = "https://lh3.google.com/u/0/d/1ljZe_dNPa8-qdxe23F9lNCQr1KuRaM4H=w1920-h1080"
randomimages[63] = "https://lh3.google.com/u/0/d/1fzaUiZUpkL51RLiZgewI7InJhBLnRPvc=w1920-h1080"
randomimages[64] = "https://lh3.google.com/u/0/d/1mtb5edegxtsrQLczPKe6bJ6-u-NdNkdu=w1920-h1080"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {

    if (curindex == (tempindex = Math.floor(Math.random() * (randomimages.length)))) {
        curindex = curindex == 0 ? 1 : curindex - 1
    } else
        curindex = tempindex

    document.images.defaultimage.src = randomimages[curindex]
}

setInterval("rotateimage()", delay)