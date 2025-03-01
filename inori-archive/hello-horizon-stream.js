var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1Enry4HQqSWilBlBhvtRG0ZGUhjMKA-an=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1PSJedxcoTXP8yPwqBnO2WhBeC78NgVOM=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1UxRwD_65fZZYzMFVgSBWx5kRWd_pw5RY=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1uQRP2v8GBa9ZqBo26Nk4NZcLsajlF9uo=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1OTUGEu9GtFpiByCpNZga0EBJmLQcW_dt=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1ezLM1wW4EEEsHlpyUmaElhvxM7IMTbDP=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/15CSjtONylN_DGH75Ru2sdGLbYNdsxVna=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1jaKZabvMjbt6e2vC-5rJY5yD_rgybAml=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/15u0b-iCf_pDrqDQZGiP8VlLYzi5mG0t6=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/13mLoHt0o1VbAv8GsPuyLwU630sS1sA1j=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1NY4pgWT2jvNc-_GQkEkX6DTdl3zswtjY=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1rKWZW3CK9bkrdXoJclc99jyvCFVRYJA-=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1Yk9uGLBrn19_FceQ1OJSOgWkjol6LZ12=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1-K-lJMsUvAFCIkShmlP3g9oEnDOCZwdZ=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1aCx1VwzH5w4HXqSU2cjWDw4TgWkFGacw=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1KkYmCPmzpp71TyuB45VqVB5I2H3WNdZs=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1v82GGwsQI_1YMtG7Q3D2ZsR2vBXxRq_U=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1D9Le4qKM6FlwnU5VkDqyCZe5d4PfC6q1=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1pEXF6In-6TO0_ggSTZ9cZ3qgfXsjoTAb=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1yymkToqXGxWKnxpMK3LhuWI9JqBBF6Hp=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1bKjchgoNPd6NFh3JAohiX9Vrn_yRS0ox=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1GALp30ZXS2tK53xLT1cVKuzg_9vDvPvw=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1SEZKnFQBCK6tasnhZbiG2EpqxJkwNV_j=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/14rICYebNBiC2Dlnn-CLtyKgArHL8I_My=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1iGKOf1-uVGF_BSUu-YfD3PVFYDxKi2S_=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1WaN5yHLQtOfD04czljCy2iaSLvPZEY4f=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1-bfKk0cNfvbgkNGrv50jmGxPplfuvT6E=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1RbGHO1n_SSY6eKqqWCg45bseiA4Os949=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1gBbZyxDp0yf1MfuQWqV4kZD1pWk5FTrw=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1lXaDr6CrWBeYKqfeX9mzwmTm79dyfW13=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1gNykddLNzTIMzi401TDMTl_YGSeXkL5_=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1Th-kkHWH15VvW9Tj7V6qtskXjYNCbZ-3=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1voRmeqlH0HuCefrB0ZYDYf5cB9pWx82x=w1920-h1080"

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