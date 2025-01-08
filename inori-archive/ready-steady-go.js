var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1KMinNaTt_Tun9ZapyqhFiJnOqdCzBSAi"
randomimages[1] = "https://lh3.google.com/u/0/d/1HFMaUpbr9vjnRUTKXri3dtM4UncX7BPp"
randomimages[2] = "https://lh3.google.com/u/0/d/1fL6JvltmMIaMYr8DT5I1VHB2tHxZW8pL"
randomimages[3] = "https://lh3.google.com/u/0/d/1P7Dqz0gygXdwoalIlqvz4TZxGntv0exi"
randomimages[4] = "https://lh3.google.com/u/0/d/1KdgSHsKgkCCZSuiYrdt412tFNM_Di7hz"
randomimages[5] = "https://lh3.google.com/u/0/d/1a5EJSK7cvKaDcR07uTk_KMpbRE33lrHs"
randomimages[6] = "https://lh3.google.com/u/0/d/1C7q3aea-Cfng4bKLozKXyZmgv2Ej_MzB"
randomimages[7] = "https://lh3.google.com/u/0/d/1KaKq4UX8lqi7eSfL6mh0fXmxfncf9J5k"
randomimages[8] = "https://lh3.google.com/u/0/d/1vKl7ldeijgPmD-bvR55g1gAzGduLR4Aq"
randomimages[9] = "https://lh3.google.com/u/0/d/1Ast7ot9CylChbE_LuQJc4Cn_KJyVvtRE"
randomimages[10] = "https://lh3.google.com/u/0/d/1WwiLPllIXe0wd8pMEPVh_KGXjlfVQcI9"
randomimages[11] = "https://lh3.google.com/u/0/d/1jD6xZFw4TqIFsXeQXxRhRab7Df1Vhyp1"
randomimages[12] = "https://lh3.google.com/u/0/d/1ugl3nxxfDWStFUB7Evw1l1EduRD4f73I"
randomimages[13] = "https://lh3.google.com/u/0/d/1rV4y1gn9-LqOQkO4DJxWGt-sKquhrJst"
randomimages[14] = "https://lh3.google.com/u/0/d/11YtBu99C-JOMtaM-7n3YgdhSETyumgR0"
randomimages[15] = "https://lh3.google.com/u/0/d/1hl6Rfoc8MoEAKwuTaMObWGcFKiZnEhx-"
randomimages[16] = "https://lh3.google.com/u/0/d/1ze4gQOSbQymRqMpqVutJ1ho-fDjH32XA"
randomimages[17] = "https://lh3.google.com/u/0/d/1PNKlmb5QHC7blNbCoozDCVq_BGWFT3R9"
randomimages[18] = "https://lh3.google.com/u/0/d/1H4ZspHDgYO1Kx19GVj0Rjl_XBY4V7PJk"
randomimages[19] = "https://lh3.google.com/u/0/d/17HceQRMvCRjkgjD9ouNO9L6oIwWl87yF"
randomimages[20] = "https://lh3.google.com/u/0/d/1aaVD9k850v23YtVG0kibrU14NeRF14Lo"
randomimages[21] = "https://lh3.google.com/u/0/d/1_JI7rQgA_dCIBcXpdlUjuv-0u_BDWss4"
randomimages[22] = "https://lh3.google.com/u/0/d/1C7rrzeecDfRomSBBA2lHdNqn_KopbZoZ"
randomimages[23] = "https://lh3.google.com/u/0/d/16bLzurhWu2B7ssdw8C9I4txna1RRm38l"
randomimages[24] = "https://lh3.google.com/u/0/d/1Zz9X8M2lAV2t3-Sli4DKwkp8A-oR_Ues"
randomimages[25] = "https://lh3.google.com/u/0/d/1NkXfH02u4KAls7edjD6CmfqIwjRnC63N"
randomimages[26] = "https://lh3.google.com/u/0/d/1bw8C6nR741sA87RcAo91DgFgPfFAoeaX"
randomimages[27] = "https://lh3.google.com/u/0/d/1bUQFcBrFc7bMwOuoigHWLW4gTstXW4kk"
randomimages[28] = "https://lh3.google.com/u/0/d/1iVuCUlDfuix1AS7Ywt3r_tnw7fx0yD-L"
randomimages[29] = "https://lh3.google.com/u/0/d/1hkQmB370hFFUy_FIuc87Y8bc_0CaOgFM"
randomimages[30] = "https://lh3.google.com/u/0/d/1M-6YnRHjUmCRjdZg5WZT7id00LSCMFmH"
randomimages[31] = "https://lh3.google.com/u/0/d/1wvDWlC8_Je9VfIQl8Ax7zHUQPke94JaJ"

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