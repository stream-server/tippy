var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/152WnMQURQzIWEnKRdtoWtN3UmwVyAy_C"
randomimages[1] = "https://lh3.google.com/u/0/d/1l109PQkXNAruTsawsm-AqJt22ev40fSD"
randomimages[2] = "https://lh3.google.com/u/0/d/1y5vfaV535spy4oDV3ZxyWyzq6ZfvuGsw"
randomimages[3] = "https://lh3.google.com/u/0/d/1uwPTdAeLf68e7iD4lb6ikleONY7uQChS"
randomimages[4] = "https://lh3.google.com/u/0/d/1Wd7zKk-VPVwAut0ULxqb8Rlnz_VhT-A3"
randomimages[5] = "https://lh3.google.com/u/0/d/1NndCxqaXPxGFAzIkhgGbhJBwPa6Mgni6"
randomimages[6] = "https://lh3.google.com/u/0/d/1KNHtz3uNerSIvyQfc7xB16biNO7dh8UT"
randomimages[7] = "https://lh3.google.com/u/0/d/1Znvvl1LbEGbZXj20Dyx7r5A-6-tT9l4_"
randomimages[8] = "https://lh3.google.com/u/0/d/1qHYJsGXnJQwVPbDQtXxByFXq6GGfWeWr"
randomimages[9] = "https://lh3.google.com/u/0/d/1UWAdLGkasXbdd7AfFpmsKI-OF31Wkzs1"
randomimages[10] = "https://lh3.google.com/u/0/d/1DaW2XlSXz6oodmgkNMZYS--a0di5og7e"
randomimages[11] = "https://lh3.google.com/u/0/d/1eJSe0rYw6fETrWam2EVQdfKIjwsLlqx4"
randomimages[12] = "https://lh3.google.com/u/0/d/1PBJgqH2dKWWq9qNN8x3iUZ2k5fB0_BHZ"
randomimages[13] = "https://lh3.google.com/u/0/d/1TGIwCZlBNvC8-gzgZ1Q-YcFDK9YzyTrQ"
randomimages[14] = "https://lh3.google.com/u/0/d/1pDHUmqVXnF7dp2Eo2i6GaZbY88Lhnr6I"
randomimages[15] = "https://lh3.google.com/u/0/d/1O7SpGeck9gL4aykPfTMs3lo8Tuq_TORR"
randomimages[16] = "https://lh3.google.com/u/0/d/1GZaGkCgVTwj6prpBVp7oy-EfYt28gAjz"
randomimages[17] = "https://lh3.google.com/u/0/d/10XkNd41D6Uot-1f6kJWl98HvMgXMUFtP"
randomimages[18] = "https://lh3.google.com/u/0/d/14uFvNedZlvpooGDcEpnSPMAhpq_XtDme"
randomimages[19] = "https://lh3.google.com/u/0/d/1Z3TzHNoJ_R-is3WnVP3OjeCxxXNLZJDh"
randomimages[20] = "https://lh3.google.com/u/0/d/1Y8ghz7sMT10Tvq5dKD2kd9e0E0mQaVKF"
randomimages[21] = "https://lh3.google.com/u/0/d/1GKOboTFS7zynzfhWVShif6x3e_6JrryH"
randomimages[22] = "https://lh3.google.com/u/0/d/1MAJXS3fccey9M1l94vulrOaxJZdfsuOh"
randomimages[23] = "https://lh3.google.com/u/0/d/1IYhSNXbAiRLfsOLS-mom-5t2e13LHua0"
randomimages[24] = "https://lh3.google.com/u/0/d/1snQbjaR5h2esD2AYBu4iNtj5EjHn0uVT"
randomimages[25] = "https://lh3.google.com/u/0/d/136hOmwfvshH44GvHlfcaPR2YNBeZz30P"
randomimages[26] = "https://lh3.google.com/u/0/d/1bfXx_o5Fq6adfOKmo7CUK7vRL8_pc8fJ"
randomimages[27] = "https://lh3.google.com/u/0/d/1WZ6s78AlS7hOuPa-ftnvrJq9n0yd02jB"
randomimages[28] = "https://lh3.google.com/u/0/d/1vIaDPl0-SpEozXfnqAvW4W6quIlPP-Ia"
randomimages[29] = "https://lh3.google.com/u/0/d/1Phxtli-FvVBAKY1yz8ownqHv-nibUeRz"
randomimages[30] = "https://lh3.google.com/u/0/d/13Lo5yFhsa6IhfQAyO4l7jiqYXd-9Xboq"
randomimages[31] = "https://lh3.google.com/u/0/d/1BjfjTN-wIn4bMXZxt-rvUJ3ONkshxcEj"
randomimages[32] = "https://lh3.google.com/u/0/d/1T8KUQJr3Vn8vcoZqsjcqtJ2hQAncOEiZ"
randomimages[33] = "https://lh3.google.com/u/0/d/1kOa_WRcUFC_A1ERoLbeCgEkOLMwxKrs2"
randomimages[34] = "https://lh3.google.com/u/0/d/1aFL_NiL57_ZDUGP3nd8E6yLnM9dNo-P3"
randomimages[35] = "https://lh3.google.com/u/0/d/12dcQ0iK_1EkHPvH90-P_qO2x08yCfZYt"
randomimages[36] = "https://lh3.google.com/u/0/d/1kNFd0QeFySVd33gfiNa_PWWkf2KFfMIX"
randomimages[37] = "https://lh3.google.com/u/0/d/19g0_fDBykyrmsj_BXXZz_qTDQfgeLYTZ"
randomimages[38] = "https://lh3.google.com/u/0/d/1J1XYXXB-kR0FJa32rFWse_w7qGxNlj2G"
randomimages[39] = "https://lh3.google.com/u/0/d/1C1irdBlR7eRIB_q4vAxlMu-inuIUjqnN"
randomimages[40] = "https://lh3.google.com/u/0/d/1Vim8h5DKhDSRhePPa5ee8DAmjp77ujf2"
randomimages[41] = "https://lh3.google.com/u/0/d/1CzFCniE6WNLnA4IOZ64_HV7UGpfmkAA3"
randomimages[42] = "https://lh3.google.com/u/0/d/1X5d00DFUPz-vmr2DsAnpPoVBCj5JG7eq"
randomimages[43] = "https://lh3.google.com/u/0/d/1leTloh6CewmSIANQ1W3no3Z23dfVMY6W"
randomimages[44] = "https://lh3.google.com/u/0/d/1dDNHtJ0HUfvg5CbmVoNQDNIrgs0CLLvW"
randomimages[45] = "https://lh3.google.com/u/0/d/1DE7fqvSfy2FbPSRGqCyxuXy_bzKp5J_-"
randomimages[46] = "https://lh3.google.com/u/0/d/13pBXj-mQHCqD8XMR2VhCJVODKivZSP6N"
randomimages[47] = "https://lh3.google.com/u/0/d/1HxRK3TE9ltVA00_HiQ7ou3yBw0DrCvR_"
randomimages[48] = "https://lh3.google.com/u/0/d/1gsKmR3tKRekIHDbfAdHZ0ve39YTDsvQs"
randomimages[49] = "https://lh3.google.com/u/0/d/1uQ6n6FA9SduvjF3aFVPRq5DbuqltKhUb"
randomimages[50] = "https://lh3.google.com/u/0/d/14_oX79XxEwdAsdN6ZEfZvYeJI2nbwbao"
randomimages[51] = "https://lh3.google.com/u/0/d/1xNwwCJGMI0KAZrMaYMs8XMJmTfRiBK_v"
randomimages[52] = "https://lh3.google.com/u/0/d/1BTyZ-DqsBAHYqE5lGgpwF2ZcOhR1zLsI"
randomimages[53] = "https://lh3.google.com/u/0/d/1ExtR1NLdiw092izXyvz287UhCNM-TUeD"
randomimages[54] = "https://lh3.google.com/u/0/d/1jqcn5bonkPI5Lq5kkolBxRupiMy-4rb-"
randomimages[55] = "https://lh3.google.com/u/0/d/1azz1_eSIuTqr5ETrC38YIPP8hwlCKHuY"
randomimages[56] = "https://lh3.google.com/u/0/d/1K7zbgOSuKijJ5JHY4MnxZTBNJS9ZDIkJ"
randomimages[57] = "https://lh3.google.com/u/0/d/1Kby4fyvbCQU_9zcef7oyJ4Ph5aaLWji4"
randomimages[58] = "https://lh3.google.com/u/0/d/157J2iHNvKbD420Z1RyO7IKI6JTCZS33b"
randomimages[59] = "https://lh3.google.com/u/0/d/1tARKjagI9C7S8c9l61HLuv9jxn9zHWP6"
randomimages[60] = "https://lh3.google.com/u/0/d/1bDfwYFy7rNDTCsatAx5WL8iOnt3sAmft"
randomimages[61] = "https://lh3.google.com/u/0/d/1RehNt1KYTURj2Nqzd_mdYFEQpt28nnbE"
randomimages[62] = "https://lh3.google.com/u/0/d/1gm2yFm0OLBNAtgc4Bu7cH0nX2HBNEqxE"
randomimages[63] = "https://lh3.google.com/u/0/d/10gB9XfjNRf1_wQMcZiU2TjxZ_9O0inDs"
randomimages[64] = "https://lh3.google.com/u/0/d/1zHaYsM6cxXd_a9OVmM0fZKYSbp3Lccb1"
randomimages[65] = "https://lh3.google.com/u/0/d/1vaiiUY1qazPbFm8ay0b9cPcRgelS_rrU"
randomimages[66] = "https://lh3.google.com/u/0/d/1vtFvzJGtrfSIarHN0oB_ybBXJlzlvZU5"
randomimages[67] = "https://lh3.google.com/u/0/d/16pphNgJzC-Nrd3-S_YtRf9V9aEpziGGH"
randomimages[68] = "https://lh3.google.com/u/0/d/1MAJ_XsGoU7gjInn6kZ6Rg3nXFLO5P3Gn"
randomimages[69] = "https://lh3.google.com/u/0/d/1tsoSeRqHIx6EjxivGR8EjmzvBT5wBSBV"
randomimages[70] = "https://lh3.google.com/u/0/d/1lrO1gn3f_JjY1TsEgnMA6gbzxz4WWfXG"
randomimages[71] = "https://lh3.google.com/u/0/d/1fNeGb0IxPokRKKQZx2hZEtnslf2IMZn4"
randomimages[72] = "https://lh3.google.com/u/0/d/1evM386DqGwY-lXYE3_hs2rDkn5v0vaPT"
randomimages[73] = "https://lh3.google.com/u/0/d/1kDbO6NTHKc_X4AR7C1g5LfPBrykyLSjV"
randomimages[74] = "https://lh3.google.com/u/0/d/1LdiltpvYAHtBEBsq8GcqUw2UpwPt4sqm"
randomimages[75] = "https://lh3.google.com/u/0/d/1Jra71oUDotyc2gr6jfoHC2SxMt_ZnHlv"
randomimages[76] = "https://lh3.google.com/u/0/d/182iM1GkZsiapdaThRWbSVC6QYZH-oE7w"
randomimages[77] = "https://lh3.google.com/u/0/d/1Q3Zz2h9P-XdDUEUnFLp2ajMQUS524ozJ"
randomimages[78] = "https://lh3.google.com/u/0/d/1VeG36owdK8PK3SXYSnEVyDky1eI7eSXN"
randomimages[79] = "https://lh3.google.com/u/0/d/1f5-E6qfltKROXFxg-ML1OAVHyfyH0nNU"
randomimages[80] = "https://lh3.google.com/u/0/d/18oNyNOpiwe00NRuFa-IgDbsSTWaNyB1p"

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
"https://i.postimg.cc/gkMfCj7T/01.jpg",
"https://i.postimg.cc/4xmrsZkN/02.jpg",
"https://i.postimg.cc/DzGH4gw9/03.jpg",
"https://i.postimg.cc/MpNgG4q0/04.jpg",
"https://i.postimg.cc/50MGBCH6/05.jpg",
"https://i.postimg.cc/hjbYptxM/06.jpg",
"https://i.postimg.cc/yx1b5CyK/07.jpg",
"https://i.postimg.cc/VvKVPZKC/08.jpg",
"https://i.postimg.cc/nV25mMnh/09.jpg",
"https://i.postimg.cc/GhS5MN80/10.jpg",
"https://i.postimg.cc/KvYWDFYr/11.jpg",
"https://i.postimg.cc/FHdnwZ3Y/12.jpg",
"https://i.postimg.cc/x1wFQz3t/13.jpg",
"https://i.postimg.cc/rp5Zwwhc/14.jpg",
"https://i.postimg.cc/76DsGrcz/15.jpg",
"https://i.postimg.cc/XJ829DSz/16.jpg",
"https://i.postimg.cc/90QLbtcF/17.jpg",
"https://i.postimg.cc/1RvCtTKg/18.jpg",
"https://i.postimg.cc/vT23Ngm7/19.jpg",
"https://i.postimg.cc/3J6tjvVY/20.jpg",
"https://i.postimg.cc/MKXsjDs9/21.jpg",
"https://i.postimg.cc/T3DCtPvm/22.jpg",
"https://i.postimg.cc/Xv6xm0nP/23.jpg",
"https://i.postimg.cc/hG8Mq3jt/24.jpg",
"https://i.postimg.cc/LXHD4BYB/25.jpg",
"https://i.postimg.cc/RFXRW6wr/26.jpg",
"https://i.postimg.cc/hvv0TD0X/27.jpg",
"https://i.postimg.cc/Wzyw7B9X/28.jpg",
"https://i.postimg.cc/bYVg8nzk/29.jpg",
"https://i.postimg.cc/xTkRddC7/30.jpg",
"https://i.postimg.cc/gkfKLPL0/31.jpg",
"https://i.postimg.cc/t4WNhmFN/32.jpg",
"https://i.postimg.cc/1zScMcHh/33.jpg",
"https://i.postimg.cc/431v07LK/34.jpg",
"https://i.postimg.cc/76Y1rHdK/35.jpg",
"https://i.postimg.cc/507B4cMb/36.jpg",
"https://i.postimg.cc/Y0v1jXpg/37.jpg",
"https://i.postimg.cc/pr3KjDTS/38.jpg",
"https://i.postimg.cc/h4YLNqr0/39.jpg",
"https://i.postimg.cc/RZ7w3JzP/40.jpg",
"https://i.postimg.cc/HkDQs4Fc/41.jpg",
"https://i.postimg.cc/sxysJrJz/0001.jpg",
"https://i.postimg.cc/wvD9JvLF/0002.jpg",
"https://i.postimg.cc/xjy01X01/0003.jpg",
"https://i.postimg.cc/6q0wjmHv/0004.jpg",
"https://i.postimg.cc/fTzMtMLj/0005.jpg",
"https://i.postimg.cc/4xMGSt1B/0006.jpg",
"https://i.postimg.cc/zXx8T4Hm/0007.jpg",
"https://i.postimg.cc/nhMZ2TqX/0008.jpg",
"https://i.postimg.cc/nLDxbzRZ/0009.jpg",
"https://i.postimg.cc/4dRgJgqc/0010.jpg",
"https://i.postimg.cc/C1CV52pQ/0011.jpg",
"https://i.postimg.cc/kGnPbynX/0012.jpg",
"https://i.postimg.cc/vT3FL6B7/0013.jpg",
"https://i.postimg.cc/sfcrRbcB/0014.jpg",
"https://i.postimg.cc/CLxVMJPc/0015.jpg",
"https://i.postimg.cc/wT4Y1Jng/0016.jpg",
"https://i.postimg.cc/y8J4cxz9/0017.jpg",
"https://i.postimg.cc/pLgNZv2S/0018.jpg",
"https://i.postimg.cc/s2SkHLxg/0019.jpg",
"https://i.postimg.cc/W3vQB7q6/0020.jpg",
"https://i.postimg.cc/wvQSgshK/0021.jpg",
"https://i.postimg.cc/qqBWRMLN/0022.jpg",
"https://i.postimg.cc/90xKq58J/0023.jpg",
"https://i.postimg.cc/fW56Pmzm/0024.jpg",
"https://i.postimg.cc/Hsxf1nnK/0025.jpg",
"https://i.postimg.cc/SNvHS4zK/0026.jpg",
"https://i.postimg.cc/3x0VWqgF/0027.jpg",
"https://i.postimg.cc/s2F8WJmd/0028.jpg",
"https://i.postimg.cc/rpSHNtZd/0029.jpg",
"https://i.postimg.cc/xCn4xTB6/0030.jpg",
"https://i.postimg.cc/k4shkPmq/0031.jpg",
"https://i.postimg.cc/fygqR7yP/0032.jpg",
"https://i.postimg.cc/rspYTZVW/0033.jpg",
"https://i.postimg.cc/66HmcKch/0034.jpg",
"https://i.postimg.cc/J4GddFdC/0035.jpg",
"https://i.postimg.cc/9FKN3BvR/0036.jpg",
"https://i.postimg.cc/W4PWz1ps/0037.jpg",
"https://i.postimg.cc/L8PQm1py/0038.jpg",
"https://i.postimg.cc/LsBy1FhL/0039.jpg",
"https://i.postimg.cc/qRJ1cDCY/0040.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);