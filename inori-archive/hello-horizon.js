var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1yaGN44-anmq8jmWC_5tuZJpSofbcVWHj"
randomimages[1] = "https://lh3.google.com/u/0/d/1wKa818teQ5xwNddt8-eL0viIYZozZdds"
randomimages[2] = "https://lh3.google.com/u/0/d/15YXB2gk9VjxTW8JahdOLxKKIVgMZe2g6"
randomimages[3] = "https://lh3.google.com/u/0/d/1BQniyOsrqJed1o0HW4jVOpy32v85XyHB"
randomimages[4] = "https://lh3.google.com/u/0/d/10-Au6i1u25CMdaszYEQqAV_puonfFjP_"
randomimages[5] = "https://lh3.google.com/u/0/d/1BtTXrSXa28Xtd8KDcXQqk8XSFrCm_ioI"
randomimages[6] = "https://lh3.google.com/u/0/d/1ry5EEEMAANY_ZKYTKViaMB7k_m-JfGYN"
randomimages[7] = "https://lh3.google.com/u/0/d/1bVkkgoxmbhBgsT_wvAKKwInmhnyVKJZw"
randomimages[8] = "https://lh3.google.com/u/0/d/15AUhZaTkdu9oPyy3IakRX9mp6kbNncvu"
randomimages[9] = "https://lh3.google.com/u/0/d/1bSg1bXRYbnwLV5YL5bA8xi3Wov3ZxgFC"
randomimages[10] = "https://lh3.google.com/u/0/d/1fo8kM3RUeGfXEn3WowLzqhgLcH-5UDwS"
randomimages[11] = "https://lh3.google.com/u/0/d/11hRj95M0Sg0CaAFaKYaHwjKjBTPjmsZZ"
randomimages[12] = "https://lh3.google.com/u/0/d/1UuQ-yoVWcufcJImO9bfgFd3Q3CXMENEI"
randomimages[13] = "https://lh3.google.com/u/0/d/1BumReeQ5-usssfv81lF4J9i0bE8w_Mcw"
randomimages[14] = "https://lh3.google.com/u/0/d/1RGJ-r7JE7jr2vUVh0cUEWjQ5Eu2FddVg"
randomimages[15] = "https://lh3.google.com/u/0/d/1b8O1O-TnQ0KyzIBawzmLn59cbKkWV9lq"
randomimages[16] = "https://lh3.google.com/u/0/d/1tkAcS7nxuWSnV4uYm5dWJK4U5-AQiKKb"
randomimages[17] = "https://lh3.google.com/u/0/d/1ZjR9Ir6fs6LiASQhRnP13q32iOp6RAwW"
randomimages[18] = "https://lh3.google.com/u/0/d/1HKhQCD0vb_Xh_IVqbroHG6wO5z1AxseD"
randomimages[19] = "https://lh3.google.com/u/0/d/19jxVJfa4_U5k_KflXcuvuj6RPTu7xzLQ"
randomimages[20] = "https://lh3.google.com/u/0/d/1PIjlfcM7lfLv6ovAyNxt7teTxLwMVojA"
randomimages[21] = "https://lh3.google.com/u/0/d/14skB-uZ_YZYxdmElrYB_-yaLMAmf-ngr"
randomimages[22] = "https://lh3.google.com/u/0/d/1EOO-ZOQ_C4n1_Kpufw_orml9P6_mZ6BX"
randomimages[23] = "https://lh3.google.com/u/0/d/1UVFdANsfalsKrrsCUP4oQ-oxx3RoFp2k"
randomimages[24] = "https://lh3.google.com/u/0/d/1SDPWL0hR4TxSSYXE-ErlboqjZT4saBcZ"
randomimages[25] = "https://lh3.google.com/u/0/d/1-6p2tv-AGDnuMqh9YQuoEO5AGGy2UoB1"
randomimages[26] = "https://lh3.google.com/u/0/d/1IMmD-ITN9vUxCNhr-No3iUCqd11XZr1m"
randomimages[27] = "https://lh3.google.com/u/0/d/1R35A9Ht-A3qoE-qqsb-z5EjLFoo1Gfok"
randomimages[28] = "https://lh3.google.com/u/0/d/1v-qYxv-Hb_7zcez-ozERuVmsJhDbV71H"
randomimages[29] = "https://lh3.google.com/u/0/d/1ckn4ga68L8ZhNXxcSY5L-Y-vzdO6Ql3V"
randomimages[30] = "https://lh3.google.com/u/0/d/1oxDDOUytBmfzVXQnh1Mx3BqqGOyEw9Um"
randomimages[31] = "https://lh3.google.com/u/0/d/1O4WdtHMU9SreEfjd3lrU6xpDAM_XHNHa"
randomimages[32] = "https://lh3.google.com/u/0/d/1yItv4YgngBSxnt_oBM9tLRpqo-CDXcU1"
randomimages[33] = "https://lh3.google.com/u/0/d/1ixEqB21b_DuFz6o-DRs10R6YTmi4vczy"
randomimages[34] = "https://lh3.google.com/u/0/d/1LtScHrsJWCRRAO5tRfUfMmo5U8Jdipmk"
randomimages[35] = "https://lh3.google.com/u/0/d/1J-35dKeYRNR4Cr0nSdl0CDMEDLuCTCFd"
randomimages[36] = "https://lh3.google.com/u/0/d/1TJpdWEwbFCaNdfy6ZosY4OZAUM1215SC"
randomimages[37] = "https://lh3.google.com/u/0/d/1TgVMnZHydh7K_P7ckn3H0M_z4yRVI5yz"
randomimages[38] = "https://lh3.google.com/u/0/d/1GBQnIwi-VjYlN_2xLoiZIcn83qP68QXw"
randomimages[39] = "https://lh3.google.com/u/0/d/1SAXMeOhzLXbKLXNIgnVgezImRiYVqc0t"
randomimages[40] = "https://lh3.google.com/u/0/d/1NXBLRdW9ML8HXC0v0xnA_wPYM1Y1Sudm"
randomimages[41] = "https://lh3.google.com/u/0/d/1vM436MNLrN718ol7ItANTmSj5or49cfs"
randomimages[42] = "https://lh3.google.com/u/0/d/1I4COVMLpFErQSS4Ml42eyrJm6M7ju4Oc"
randomimages[43] = "https://lh3.google.com/u/0/d/12-EU1XjiwRg0zB7BK3DxHqyTyJZsmAEv"
randomimages[44] = "https://lh3.google.com/u/0/d/1gemWL6GC8ED8Plw5fI6qo_uUyfaLcz-D"
randomimages[45] = "https://lh3.google.com/u/0/d/1Q8xZ3vcRwsjIkoXvAPf7lmjcsWcnKdrw"
randomimages[46] = "https://lh3.google.com/u/0/d/1oAjV0KBtaaGkRMWPnoeTZ-3bx22PFy3H"
randomimages[47] = "https://lh3.google.com/u/0/d/126dkN9baPN4LH64ji0F3QF6SglAY00pA"
randomimages[48] = "https://lh3.google.com/u/0/d/12ugjSco9kdHd-od7-cExl_G1Sk3lsnai"
randomimages[49] = "https://lh3.google.com/u/0/d/1Z-pRW-w1Rtxg29EcUgv7-l_H2mKPl4kD"
randomimages[50] = "https://lh3.google.com/u/0/d/1lCJOC7JjE1IEVgCHg028L7atBz6hDLyO"
randomimages[51] = "https://lh3.google.com/u/0/d/1YDTb1_8uYipRGsd3UAXjqm8ryebzDmbp"
randomimages[52] = "https://lh3.google.com/u/0/d/13lr4d2d2SnPTnEd2Uxcgyr2tpackMXQH"
randomimages[53] = "https://lh3.google.com/u/0/d/1ErWBrwXLf4F6pIyF4uENV4NVh2Ga_OwJ"
randomimages[54] = "https://lh3.google.com/u/0/d/1mpNzje3En-5EYgkTLEM0mj_P8eLyMhIe"
randomimages[55] = "https://lh3.google.com/u/0/d/1AP2_J_BY_sPM2o8u_Hxyq6F9PZau3d1K"
randomimages[56] = "https://lh3.google.com/u/0/d/1aKIO5vTnA9AUhJ5ypBflEmDW_K55yJUp"
randomimages[57] = "https://lh3.google.com/u/0/d/1fHQqQhNDD7l96JzQKwAjyoOhoN7zRTNi"
randomimages[58] = "https://lh3.google.com/u/0/d/1MVZl-FyDPCa2ZdeVy3PQDWkYpdc-WRoH"
randomimages[59] = "https://lh3.google.com/u/0/d/1C2OBaEfrMFvgkTNYLKpStjIjpXWN7Cun"
randomimages[60] = "https://lh3.google.com/u/0/d/1B2U2tL77YD4csKdtXGB0CHdoU73PH2PM"
randomimages[61] = "https://lh3.google.com/u/0/d/187fUwMCyWCuuu-eJn0ibfd47EPXM1DdW"
randomimages[62] = "https://lh3.google.com/u/0/d/1MXCP4b1_9cLyPdloyboBw4k7fQwMxA3N"
randomimages[63] = "https://lh3.google.com/u/0/d/1fLRXUZf04bzUi2Ht-hEqCzLfPmPlCGry"
randomimages[64] = "https://lh3.google.com/u/0/d/1_EeUa7To4kCpQjVAdjr77uDO2Kfl4rYs"
randomimages[65] = "https://lh3.google.com/u/0/d/1sAM7rFP-FjhSN0pGYPc97nyoT4k7zVtD"
randomimages[66] = "https://lh3.google.com/u/0/d/1DetuDUp7WQL7ilQslCAzlzl9gDxU0MIj"
randomimages[67] = "https://lh3.google.com/u/0/d/1_OlO-G4UN6VBZjYVdfZxdavMI9Ecnosg"
randomimages[68] = "https://lh3.google.com/u/0/d/1G-aJMTBdDwXIzq19aw7VexxsX6IPJ5E3"
randomimages[69] = "https://lh3.google.com/u/0/d/1LYUrUjR2mSB8usg-hGspgP-7NQ9gam69"
randomimages[70] = "https://lh3.google.com/u/0/d/1V1sxO53oN89AvxnMkj-Ckjagsa1uz_Jj"
randomimages[71] = "https://lh3.google.com/u/0/d/11gjj9lizLB8wIxeMkSJAbezy_o7grYM_"
randomimages[72] = "https://lh3.google.com/u/0/d/152pWQZ6G9kkw5xNrpW4L2SbMp0TB3r2f"

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
"https://i.postimg.cc/cC8BFsv6/01.jpg",
"https://i.postimg.cc/bJ5R0GNK/02.jpg",
"https://i.postimg.cc/TPC0wN82/03.jpg",
"https://i.postimg.cc/Jn0qB3mN/04.jpg",
"https://i.postimg.cc/HjD4KfMz/05.jpg",
"https://i.postimg.cc/jqWppPNn/06.jpg",
"https://i.postimg.cc/8kq2NcBK/07.jpg",
"https://i.postimg.cc/sD7tXzTV/08.jpg",
"https://i.postimg.cc/MpwgfLL1/09.jpg",
"https://i.postimg.cc/XYgmf8Mm/10.jpg",
"https://i.postimg.cc/LsCW788V/11.jpg",
"https://i.postimg.cc/R0V8XH4F/12.jpg",
"https://i.postimg.cc/V62VfZMr/13.jpg",
"https://i.postimg.cc/ydDGzCJC/14.jpg",
"https://i.postimg.cc/SR8tJL7Z/15.jpg",
"https://i.postimg.cc/CMf2PYTj/16.jpg",
"https://i.postimg.cc/DzZjq3P4/17.jpg",
"https://i.postimg.cc/65rmK0Qq/18.jpg",
"https://i.postimg.cc/3x3bxvyB/19.jpg",
"https://i.postimg.cc/T3QNL3gX/20.jpg",
"https://i.postimg.cc/BvVhp7mY/21.jpg",
"https://i.postimg.cc/brQ3zypW/22.jpg",
"https://i.postimg.cc/hjQ258wS/23.jpg",
"https://i.postimg.cc/3NMt5452/24.jpg",
"https://i.postimg.cc/7P7B1V09/25.jpg",
"https://i.postimg.cc/yYHLLZTH/26.jpg",
"https://i.postimg.cc/rFNQ3wht/27.jpg",
"https://i.postimg.cc/0y5cs13X/28.jpg",
"https://i.postimg.cc/SxZVQtbS/29.jpg",
"https://i.postimg.cc/BvXpjcJx/30.jpg",
"https://i.postimg.cc/5tT3LYtD/31.jpg",
"https://i.postimg.cc/pTjBZWhr/32.jpg",
"https://i.postimg.cc/x8S3pwMR/33.jpg",
"https://i.postimg.cc/FFjZkKXn/34.jpg",
"https://i.postimg.cc/J0ccfpQW/35.jpg",
"https://i.postimg.cc/ZKHxjDR8/36.jpg",
"https://i.postimg.cc/pV9fNtxC/0001.jpg",
"https://i.postimg.cc/Njtmr9XC/0002.jpg",
"https://i.postimg.cc/ncBqzYXQ/0003.jpg",
"https://i.postimg.cc/bYKQpFwh/0004.jpg",
"https://i.postimg.cc/t4zPdqtq/0005.jpg",
"https://i.postimg.cc/0N2ScTcp/0006.jpg",
"https://i.postimg.cc/XvHChszt/0007.jpg",
"https://i.postimg.cc/LXJ1Mzd5/0008.jpg",
"https://i.postimg.cc/XJtyNp38/0009.jpg",
"https://i.postimg.cc/Y0gLvMCw/0010.jpg",
"https://i.postimg.cc/Pf8w3zzF/0011.jpg",
"https://i.postimg.cc/5NdFZYs9/0012.jpg",
"https://i.postimg.cc/dt2Tvsf2/0013.jpg",
"https://i.postimg.cc/7ZqJLvvp/0014.jpg",
"https://i.postimg.cc/4xw778sn/0015.jpg",
"https://i.postimg.cc/1ztgpp3B/0016.jpg",
"https://i.postimg.cc/jjFDvLWb/0017.jpg",
"https://i.postimg.cc/gJLn7mR6/0018.jpg",
"https://i.postimg.cc/QCLHGwkY/0019.jpg",
"https://i.postimg.cc/Kjn4Zf0G/0020.jpg",
"https://i.postimg.cc/Wprd6pTB/0021.jpg",
"https://i.postimg.cc/8PSjy8Cj/0022.jpg",
"https://i.postimg.cc/K8c42nBb/0023.jpg",
"https://i.postimg.cc/gkHrQMw4/0024.jpg",
"https://i.postimg.cc/mgdk2tyH/0025.jpg",
"https://i.postimg.cc/s2vXBsT0/0026.jpg",
"https://i.postimg.cc/tgwgWwfR/0027.jpg",
"https://i.postimg.cc/VvBLy6N5/0028.jpg",
"https://i.postimg.cc/RFtZRG57/0029.jpg",
"https://i.postimg.cc/tJHCmPpL/0030.jpg",
"https://i.postimg.cc/QNpMK6qs/0031.jpg",
"https://i.postimg.cc/Pryr2PcR/0032.jpg",
"https://i.postimg.cc/28rSQ4HW/0033.jpg",
"https://i.postimg.cc/0yN53912/0034.jpg",
"https://i.postimg.cc/0yH51h9G/0035.jpg",
"https://i.postimg.cc/yNg11nNM/0036.jpg",
"https://i.postimg.cc/YS5phgGh/0037.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);