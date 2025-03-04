var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1yaGN44-anmq8jmWC_5tuZJpSofbcVWHj=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1wKa818teQ5xwNddt8-eL0viIYZozZdds=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/15YXB2gk9VjxTW8JahdOLxKKIVgMZe2g6=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1BQniyOsrqJed1o0HW4jVOpy32v85XyHB=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/10-Au6i1u25CMdaszYEQqAV_puonfFjP_=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1BtTXrSXa28Xtd8KDcXQqk8XSFrCm_ioI=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1ry5EEEMAANY_ZKYTKViaMB7k_m-JfGYN=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1bVkkgoxmbhBgsT_wvAKKwInmhnyVKJZw=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/15AUhZaTkdu9oPyy3IakRX9mp6kbNncvu=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1bSg1bXRYbnwLV5YL5bA8xi3Wov3ZxgFC=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1fo8kM3RUeGfXEn3WowLzqhgLcH-5UDwS=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/11hRj95M0Sg0CaAFaKYaHwjKjBTPjmsZZ=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1UuQ-yoVWcufcJImO9bfgFd3Q3CXMENEI=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1BumReeQ5-usssfv81lF4J9i0bE8w_Mcw=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1RGJ-r7JE7jr2vUVh0cUEWjQ5Eu2FddVg=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1b8O1O-TnQ0KyzIBawzmLn59cbKkWV9lq=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1tkAcS7nxuWSnV4uYm5dWJK4U5-AQiKKb=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1ZjR9Ir6fs6LiASQhRnP13q32iOp6RAwW=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1HKhQCD0vb_Xh_IVqbroHG6wO5z1AxseD=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/19jxVJfa4_U5k_KflXcuvuj6RPTu7xzLQ=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1PIjlfcM7lfLv6ovAyNxt7teTxLwMVojA=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/14skB-uZ_YZYxdmElrYB_-yaLMAmf-ngr=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1EOO-ZOQ_C4n1_Kpufw_orml9P6_mZ6BX=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1UVFdANsfalsKrrsCUP4oQ-oxx3RoFp2k=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1SDPWL0hR4TxSSYXE-ErlboqjZT4saBcZ=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1-6p2tv-AGDnuMqh9YQuoEO5AGGy2UoB1=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1IMmD-ITN9vUxCNhr-No3iUCqd11XZr1m=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1R35A9Ht-A3qoE-qqsb-z5EjLFoo1Gfok=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1v-qYxv-Hb_7zcez-ozERuVmsJhDbV71H=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1ckn4ga68L8ZhNXxcSY5L-Y-vzdO6Ql3V=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1oxDDOUytBmfzVXQnh1Mx3BqqGOyEw9Um=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1O4WdtHMU9SreEfjd3lrU6xpDAM_XHNHa=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1yItv4YgngBSxnt_oBM9tLRpqo-CDXcU1=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1ixEqB21b_DuFz6o-DRs10R6YTmi4vczy=w1920-h1080"
randomimages[34] = "https://lh3.google.com/u/0/d/1LtScHrsJWCRRAO5tRfUfMmo5U8Jdipmk=w1920-h1080"
randomimages[35] = "https://lh3.google.com/u/0/d/1J-35dKeYRNR4Cr0nSdl0CDMEDLuCTCFd=w1920-h1080"
randomimages[36] = "https://lh3.google.com/u/0/d/1TJpdWEwbFCaNdfy6ZosY4OZAUM1215SC=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/1TgVMnZHydh7K_P7ckn3H0M_z4yRVI5yz=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/1GBQnIwi-VjYlN_2xLoiZIcn83qP68QXw=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/1SAXMeOhzLXbKLXNIgnVgezImRiYVqc0t=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/1NXBLRdW9ML8HXC0v0xnA_wPYM1Y1Sudm=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1vM436MNLrN718ol7ItANTmSj5or49cfs=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/1I4COVMLpFErQSS4Ml42eyrJm6M7ju4Oc=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/12-EU1XjiwRg0zB7BK3DxHqyTyJZsmAEv=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/1gemWL6GC8ED8Plw5fI6qo_uUyfaLcz-D=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1Q8xZ3vcRwsjIkoXvAPf7lmjcsWcnKdrw=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/1oAjV0KBtaaGkRMWPnoeTZ-3bx22PFy3H=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/126dkN9baPN4LH64ji0F3QF6SglAY00pA=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/12ugjSco9kdHd-od7-cExl_G1Sk3lsnai=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/1Z-pRW-w1Rtxg29EcUgv7-l_H2mKPl4kD=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/1lCJOC7JjE1IEVgCHg028L7atBz6hDLyO=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/1YDTb1_8uYipRGsd3UAXjqm8ryebzDmbp=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/13lr4d2d2SnPTnEd2Uxcgyr2tpackMXQH=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1ErWBrwXLf4F6pIyF4uENV4NVh2Ga_OwJ=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1mpNzje3En-5EYgkTLEM0mj_P8eLyMhIe=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1AP2_J_BY_sPM2o8u_Hxyq6F9PZau3d1K=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1aKIO5vTnA9AUhJ5ypBflEmDW_K55yJUp=w1920-h1080"
randomimages[57] = "https://lh3.google.com/u/0/d/1fHQqQhNDD7l96JzQKwAjyoOhoN7zRTNi=w1920-h1080"
randomimages[58] = "https://lh3.google.com/u/0/d/1MVZl-FyDPCa2ZdeVy3PQDWkYpdc-WRoH=w1920-h1080"
randomimages[59] = "https://lh3.google.com/u/0/d/1C2OBaEfrMFvgkTNYLKpStjIjpXWN7Cun=w1920-h1080"
randomimages[60] = "https://lh3.google.com/u/0/d/1B2U2tL77YD4csKdtXGB0CHdoU73PH2PM=w1920-h1080"
randomimages[61] = "https://lh3.google.com/u/0/d/187fUwMCyWCuuu-eJn0ibfd47EPXM1DdW=w1920-h1080"
randomimages[62] = "https://lh3.google.com/u/0/d/1MXCP4b1_9cLyPdloyboBw4k7fQwMxA3N=w1920-h1080"
randomimages[63] = "https://lh3.google.com/u/0/d/1fLRXUZf04bzUi2Ht-hEqCzLfPmPlCGry=w1920-h1080"
randomimages[64] = "https://lh3.google.com/u/0/d/1_EeUa7To4kCpQjVAdjr77uDO2Kfl4rYs=w1920-h1080"
randomimages[65] = "https://lh3.google.com/u/0/d/1sAM7rFP-FjhSN0pGYPc97nyoT4k7zVtD=w1920-h1080"
randomimages[66] = "https://lh3.google.com/u/0/d/1DetuDUp7WQL7ilQslCAzlzl9gDxU0MIj=w1920-h1080"
randomimages[67] = "https://lh3.google.com/u/0/d/1_OlO-G4UN6VBZjYVdfZxdavMI9Ecnosg=w1920-h1080"
randomimages[68] = "https://lh3.google.com/u/0/d/1G-aJMTBdDwXIzq19aw7VexxsX6IPJ5E3=w1920-h1080"
randomimages[69] = "https://lh3.google.com/u/0/d/1LYUrUjR2mSB8usg-hGspgP-7NQ9gam69=w1920-h1080"
randomimages[70] = "https://lh3.google.com/u/0/d/1V1sxO53oN89AvxnMkj-Ckjagsa1uz_Jj=w1920-h1080"
randomimages[71] = "https://lh3.google.com/u/0/d/11gjj9lizLB8wIxeMkSJAbezy_o7grYM_=w1920-h1080"
randomimages[72] = "https://lh3.google.com/u/0/d/152pWQZ6G9kkw5xNrpW4L2SbMp0TB3r2f=w1920-h1080"

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