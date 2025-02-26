var delay = 3000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1dSK25o7twuoO-_cnIsVOy1yzYrOm8uTK"
randomimages[1] = "https://lh3.google.com/u/0/d/1POcN2CRbASAUVjlEG-f9Zs9WzEUvuEJ0"
randomimages[2] = "https://lh3.google.com/u/0/d/1dOJoVogevl2BKsjAZJD2EV5girjlg-WT"
randomimages[3] = "https://lh3.google.com/u/0/d/1qFXMC5ouxp7yc9JACWbECXaRZxKGFkh3"
randomimages[4] = "https://lh3.google.com/u/0/d/1Lpo9518_dElCEYBJHS2KEWr6oE8skoLl"
randomimages[5] = "https://lh3.google.com/u/0/d/1ElNsiT7OHfbiifN8C0pUXc5gjKbQcwhD"
randomimages[6] = "https://lh3.google.com/u/0/d/1AQyRbtrgQth_S2hqf3ktpIoazzBb5oze"
randomimages[7] = "https://lh3.google.com/u/0/d/1au59BS5imtpIX9U4epXnwOuBf-ofQ5af"
randomimages[8] = "https://lh3.google.com/u/0/d/1MJeLu_Ma9efAVAaWGLUO0b5sHtwS6m3O"
randomimages[9] = "https://lh3.google.com/u/0/d/1xbU4xVOWikrk3wmjvyJFHxeE4Zb4dDjd"
randomimages[10] = "https://lh3.google.com/u/0/d/1aS7YkhkQdLaNjLrl4vNH9ENf_sdcppSC"
randomimages[11] = "https://lh3.google.com/u/0/d/1rntzwsmyXqoiIP4vq5HSTGyr3ryKN64j"
randomimages[12] = "https://lh3.google.com/u/0/d/1f9nkhnlVkqfnNg4V1ITrsrtGgiDeOSAn"
randomimages[13] = "https://lh3.google.com/u/0/d/1KbOsCCYchS70DsCJ2sRLJDPcCRUgyP1s"
randomimages[14] = "https://lh3.google.com/u/0/d/1iI8M2KVMw5N45aD5i4EHi3OYzGV09qqv"
randomimages[15] = "https://lh3.google.com/u/0/d/1PgNxWSk0XzaHPIHrMl0yOx_G5fQIs1sr"
randomimages[16] = "https://lh3.google.com/u/0/d/16OcKHsi_871uj50KoWg_eZ-jxXEUkqI6"
randomimages[17] = "https://lh3.google.com/u/0/d/11PrzVHwhMnPyo2FU9aGmbME_C1oW_WYx"
randomimages[18] = "https://lh3.google.com/u/0/d/19GSu8ta_s_uQIwS93KpYIB5757xqKwHa"
randomimages[19] = "https://lh3.google.com/u/0/d/1T5M-CxxIO9EF15e-oOeKWyb1AdOVr6Vy"
randomimages[20] = "https://lh3.google.com/u/0/d/1G-rSkCNv0NpwvKUPNX3GhkZ9MD25tSCT"
randomimages[21] = "https://lh3.google.com/u/0/d/15bRB5eOF3WxGGkW1IIPvde0nOqI8O2ih"
randomimages[22] = "https://lh3.google.com/u/0/d/1c5IaLwqefriCL5Bi93b9RdbqltJEXfzp"
randomimages[23] = "https://lh3.google.com/u/0/d/1Uv9mVK7oq1ClDVh3mNFI4DFPvONhfFq0"
randomimages[24] = "https://lh3.google.com/u/0/d/11EU6d7-uoiKWWd4zzvAhVwju5ToLq9N_"
randomimages[25] = "https://lh3.google.com/u/0/d/1CQXZ5ZLGWouX2krAHxxPknFhlx7oylGI"
randomimages[26] = "https://lh3.google.com/u/0/d/1lIW2LyJWny1zlKWaOjjiQ-fipNdZCvWH"
randomimages[27] = "https://lh3.google.com/u/0/d/1HYsTUNOyNjGG1E3oUhFJRxVRK7p2LA6Q"
randomimages[28] = "https://lh3.google.com/u/0/d/1OnjAeD7YBwFcabNOor0udE-BFGvewb5-"
randomimages[29] = "https://lh3.google.com/u/0/d/1pwxBiYfDe0wPWCampEpnJzA1oukreNGH"
randomimages[30] = "https://lh3.google.com/u/0/d/1ZAmb9vWoLbx_O3Nx8DzMH6cxFhIh6E7Z"
randomimages[31] = "https://lh3.google.com/u/0/d/1RcjXjhyQDj3ApXjmWznz--DL50yBq3Om"
randomimages[32] = "https://lh3.google.com/u/0/d/17eouumaaI9J29Du-cPRO85ME9-Jc2AKi"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="side-random-img">')

function rotateimage() {

    if (curindex == (tempindex = Math.floor(Math.random() * (randomimages.length)))) {
        curindex = curindex == 0 ? 1 : curindex - 1
    } else
        curindex = tempindex

    document.images.defaultimage.src = randomimages[curindex]
}

setInterval("rotateimage()", delay)