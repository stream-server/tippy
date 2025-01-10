var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1EAf7ES5Mlt649s9QZxOA0uXCqo6zdrTs"
randomimages[1] = "https://lh3.google.com/u/0/d/10lygvYi35rSoYzpGPGnIbZQSD2cBIMX8"
randomimages[2] = "https://lh3.google.com/u/0/d/1ljUMZJxBnMIHzT0Q65bZ43p2WUSewYvW"
randomimages[3] = "https://lh3.google.com/u/0/d/1xC1GEDnZRvi0h7mWUXaCJxjkBY7WTmx5"
randomimages[4] = "https://lh3.google.com/u/0/d/16CFRnXyA6RQYG_UsS6XOjZybxbajuE4p"
randomimages[5] = "https://lh3.google.com/u/0/d/1pmW3nzTNgwKbCzAAiQEjT_j4giPKlLDV"
randomimages[6] = "https://lh3.google.com/u/0/d/1vsvFT9vbfNKBAp4Ba5tSgByBGgU0PsRy"
randomimages[7] = "https://lh3.google.com/u/0/d/15xcAcF_WAiVKmwIbyaRm8jA9uZygPgR6"
randomimages[8] = "https://lh3.google.com/u/0/d/14Bslmk4ey_SvEvOtER9Z_HtyRfUeA6Fw"
randomimages[9] = "https://lh3.google.com/u/0/d/1KToI0FrO_LBrKRUH-nbttGSk2kQQ1VHT"
randomimages[10] = "https://lh3.google.com/u/0/d/12dhSkj7vS5ZXhfUQ_qLSSz5uF2N0qN4f"
randomimages[11] = "https://lh3.google.com/u/0/d/11qxaqaIHgNifai6QExbbIEAgeH3Yjtpy"
randomimages[12] = "https://lh3.google.com/u/0/d/1f-jWMJvjB_UR6RYgVY4QOA43IWETWuU7"
randomimages[13] = "https://lh3.google.com/u/0/d/1JDXQxV8itGHpbKkIV8u-T4HTF_GTSlTy"
randomimages[14] = "https://lh3.google.com/u/0/d/1xlD1nSuK-nhllo68m6Pjc-ORlJl8Hw8W"
randomimages[15] = "https://lh3.google.com/u/0/d/1EAsi3RGdp8wYCC4E3mxJUnZmnym0TA31"
randomimages[16] = "https://lh3.google.com/u/0/d/1kwcafo_5hNX98qi-J6mZdr-l-KmaWIU3"
randomimages[17] = "https://lh3.google.com/u/0/d/16dQT92xQ3NtFeWezWnAvH3GlsNpl6te8"
randomimages[18] = "https://lh3.google.com/u/0/d/1AqY6CK9an9tGltKSRAL2rEVfPKZqNTjQ"
randomimages[19] = "https://lh3.google.com/u/0/d/13S0yDvppRgng__CPD7pyTbmFSd-kCc_N"
randomimages[20] = "https://lh3.google.com/u/0/d/18S_HC2sGn5dV9vYltYktC9BjjHBy4Nrb"
randomimages[21] = "https://lh3.google.com/u/0/d/183xOUAJzdykl1keWNVncuUaSd6pOtuav"
randomimages[22] = "https://lh3.google.com/u/0/d/1uo7O-fkbyLSs335_Eq7mak0gRLsz10xM"
randomimages[23] = "https://lh3.google.com/u/0/d/1qvHaLMv7bgxhBrznKeuM-91hm7dFnksl"
randomimages[24] = "https://lh3.google.com/u/0/d/1_-lVas8qrhX5HjNMkYh10XzlcKUmW7du"
randomimages[25] = "https://lh3.google.com/u/0/d/1uxAhrLPJ1zjaZyRNSgmjUIDEXNX8Py14"
randomimages[26] = "https://lh3.google.com/u/0/d/1s7l3Za2_ZYIFbpMxICy6K1aMFhTu9oGv"
randomimages[27] = "https://lh3.google.com/u/0/d/1j5En1NY-bYEDgYG7ZvJPyrs_NbhXXpFm"
randomimages[28] = "https://lh3.google.com/u/0/d/1-e-OR_icWXJDf50K6U48OF8BKkqAoV-E"
randomimages[29] = "https://lh3.google.com/u/0/d/1kzMqfeiDsEQUInKQncS5DNWFJcX2Fl3U"
randomimages[30] = "https://lh3.google.com/u/0/d/1DxpzNtiXrwYSl1fMR_xOzgtZW9AWuqNb"
randomimages[31] = "https://lh3.google.com/u/0/d/1W-04k5Y2xe0qtrQmKwKCUUoKiRhJ2Zg6"
randomimages[32] = "https://lh3.google.com/u/0/d/1ISuNinHSj0Vky60uv3T2uEwYj4tmmoYg"
randomimages[33] = "https://lh3.google.com/u/0/d/13pCpHqmPW5_D2_JuxH5fWTZXMTUYv4WB"
randomimages[34] = "https://lh3.google.com/u/0/d/1Q575iWfHu4IR8pzOE9opJMbasOaXkpAO"
randomimages[35] = "https://lh3.google.com/u/0/d/1wP7GtJMRDzRg0RiJJp4W5QWDmLlbE8l0"
randomimages[36] = "https://lh3.google.com/u/0/d/1I6EZGGBCihN2cPmpPpO-RwlxGV-Mdyh9"

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