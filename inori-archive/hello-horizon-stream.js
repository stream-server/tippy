var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1Enry4HQqSWilBlBhvtRG0ZGUhjMKA-an"
randomimages[1] = "https://lh3.google.com/u/0/d/1PSJedxcoTXP8yPwqBnO2WhBeC78NgVOM"
randomimages[2] = "https://lh3.google.com/u/0/d/1UxRwD_65fZZYzMFVgSBWx5kRWd_pw5RY"
randomimages[3] = "https://lh3.google.com/u/0/d/1uQRP2v8GBa9ZqBo26Nk4NZcLsajlF9uo"
randomimages[4] = "https://lh3.google.com/u/0/d/1OTUGEu9GtFpiByCpNZga0EBJmLQcW_dt"
randomimages[5] = "https://lh3.google.com/u/0/d/1ezLM1wW4EEEsHlpyUmaElhvxM7IMTbDP"
randomimages[6] = "https://lh3.google.com/u/0/d/15CSjtONylN_DGH75Ru2sdGLbYNdsxVna"
randomimages[7] = "https://lh3.google.com/u/0/d/1jaKZabvMjbt6e2vC-5rJY5yD_rgybAml"
randomimages[8] = "https://lh3.google.com/u/0/d/15u0b-iCf_pDrqDQZGiP8VlLYzi5mG0t6"
randomimages[9] = "https://lh3.google.com/u/0/d/13mLoHt0o1VbAv8GsPuyLwU630sS1sA1j"
randomimages[10] = "https://lh3.google.com/u/0/d/1NY4pgWT2jvNc-_GQkEkX6DTdl3zswtjY"
randomimages[11] = "https://lh3.google.com/u/0/d/1rKWZW3CK9bkrdXoJclc99jyvCFVRYJA-"
randomimages[12] = "https://lh3.google.com/u/0/d/1Yk9uGLBrn19_FceQ1OJSOgWkjol6LZ12"
randomimages[13] = "https://lh3.google.com/u/0/d/1-K-lJMsUvAFCIkShmlP3g9oEnDOCZwdZ"
randomimages[14] = "https://lh3.google.com/u/0/d/1aCx1VwzH5w4HXqSU2cjWDw4TgWkFGacw"
randomimages[15] = "https://lh3.google.com/u/0/d/1KkYmCPmzpp71TyuB45VqVB5I2H3WNdZs"
randomimages[16] = "https://lh3.google.com/u/0/d/1v82GGwsQI_1YMtG7Q3D2ZsR2vBXxRq_U"
randomimages[17] = "https://lh3.google.com/u/0/d/1D9Le4qKM6FlwnU5VkDqyCZe5d4PfC6q1"
randomimages[18] = "https://lh3.google.com/u/0/d/1pEXF6In-6TO0_ggSTZ9cZ3qgfXsjoTAb"
randomimages[19] = "https://lh3.google.com/u/0/d/1yymkToqXGxWKnxpMK3LhuWI9JqBBF6Hp"
randomimages[20] = "https://lh3.google.com/u/0/d/1bKjchgoNPd6NFh3JAohiX9Vrn_yRS0ox"
randomimages[21] = "https://lh3.google.com/u/0/d/1GALp30ZXS2tK53xLT1cVKuzg_9vDvPvw"
randomimages[22] = "https://lh3.google.com/u/0/d/1SEZKnFQBCK6tasnhZbiG2EpqxJkwNV_j"
randomimages[23] = "https://lh3.google.com/u/0/d/14rICYebNBiC2Dlnn-CLtyKgArHL8I_My"
randomimages[24] = "https://lh3.google.com/u/0/d/1iGKOf1-uVGF_BSUu-YfD3PVFYDxKi2S_"
randomimages[25] = "https://lh3.google.com/u/0/d/1WaN5yHLQtOfD04czljCy2iaSLvPZEY4f"
randomimages[26] = "https://lh3.google.com/u/0/d/1-bfKk0cNfvbgkNGrv50jmGxPplfuvT6E"
randomimages[27] = "https://lh3.google.com/u/0/d/1RbGHO1n_SSY6eKqqWCg45bseiA4Os949"
randomimages[28] = "https://lh3.google.com/u/0/d/1gBbZyxDp0yf1MfuQWqV4kZD1pWk5FTrw"
randomimages[29] = "https://lh3.google.com/u/0/d/1lXaDr6CrWBeYKqfeX9mzwmTm79dyfW13"
randomimages[30] = "https://lh3.google.com/u/0/d/1gNykddLNzTIMzi401TDMTl_YGSeXkL5_"
randomimages[31] = "https://lh3.google.com/u/0/d/1Th-kkHWH15VvW9Tj7V6qtskXjYNCbZ-3"
randomimages[32] = "https://lh3.google.com/u/0/d/1voRmeqlH0HuCefrB0ZYDYf5cB9pWx82x"

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