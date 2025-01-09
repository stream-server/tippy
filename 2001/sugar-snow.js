var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ufUcEH1hbYWVpPS4HcCnJ35qo86JUTpB"
randomimages[1] = "https://lh3.google.com/u/0/d/1bNiDeBKs19UnSQfGF2FLxYyjLzzcl-aO"
randomimages[2] = "https://lh3.google.com/u/0/d/1QiDeQjTTjEEfCc9E2nalx2aHcHZx3pPC"
randomimages[3] = "https://lh3.google.com/u/0/d/1t1UMJy2sNFAUqver-MDbnNaPDozxZkMr"
randomimages[4] = "https://lh3.google.com/u/0/d/180-sUxQUo7KKxCZ7LFksNC3pQHHPuEHS"
randomimages[5] = "https://lh3.google.com/u/0/d/1HyOy8FhzVSLqiBBXWui-s1blZRJPzkii"
randomimages[6] = "https://lh3.google.com/u/0/d/1EibPdlGKUefIxLxV3sKIhYncohKNwEvy"
randomimages[7] = "https://lh3.google.com/u/0/d/1dGr9Eh0W9uB3MrYha4og4X2l_FPBRS6R"
randomimages[8] = "https://lh3.google.com/u/0/d/1kqLU8fy7DShn203w30eyLNCCSAKBaa_-"
randomimages[9] = "https://lh3.google.com/u/0/d/1KZ4YHomeUAbStzxw3eFFHWaXEBGfKPG0"
randomimages[10] = "https://lh3.google.com/u/0/d/1fxCazYPwfeKiGTYy5qcJYYBG0CrV2eTB"
randomimages[11] = "https://lh3.google.com/u/0/d/1Wd1rLyMNvt3-j2drJwAcwrDTqteomHq0"
randomimages[12] = "https://lh3.google.com/u/0/d/1hS9d3RE6fev_GHgq9-VwiFsVjJ_c4wO2"
randomimages[13] = "https://lh3.google.com/u/0/d/1ZJwKkjK79OOwV0_cJGoCWEB0iwssIV0Q"
randomimages[14] = "https://lh3.google.com/u/0/d/1uOl0_XFIoohO9Tr2S9J_okHaRYtAFoU-"
randomimages[15] = "https://lh3.google.com/u/0/d/1RzEwnNFpFXwfCyO-R_gRrniFxQn7kJCo"
randomimages[16] = "https://lh3.google.com/u/0/d/18iWg3avMAj08EJVLjXbH5_0Qe8KJq0B0"
randomimages[17] = "https://lh3.google.com/u/0/d/1FvW-BiehPXDzsIRlxRRGw8f8ofp11FcH"
randomimages[18] = "https://lh3.google.com/u/0/d/1zSvic3zY_poTxUKeSH-fn6Y8YAdRt9Nq"
randomimages[19] = "https://lh3.google.com/u/0/d/1SuO_MP3Pc_WHnmwoj3254nHoIYkOIhty"
randomimages[20] = "https://lh3.google.com/u/0/d/1bdqtsOHV2xzymZhehUSsC98QLtalnYk9"
randomimages[21] = "https://lh3.google.com/u/0/d/1_dtoIDLlaXF2Mi3EEGPN8K3EH7cKsNGs"
randomimages[22] = "https://lh3.google.com/u/0/d/17nC8HeHHXa_ATjgKq6KOpn5Wfr_Ga-aF"
randomimages[23] = "https://lh3.google.com/u/0/d/1yXpJ3gFwonU8Mqo9ed2O-WInHvHQFmlk"
randomimages[24] = "https://lh3.google.com/u/0/d/1x5kz6SanqBs8OC2lyP3ShtK6Yx8KSPlD"
randomimages[25] = "https://lh3.google.com/u/0/d/1P3J7A9vXf28u3yZa2e0ux-fQ4sJhgr-u"
randomimages[26] = "https://lh3.google.com/u/0/d/1nezcEGBanDEwxYewdNppj5ypCCuiXIti"
randomimages[27] = "https://lh3.google.com/u/0/d/1TL7BHf7yj3BCsqoDHUyfFw_mbfnBcIjU"
randomimages[28] = "https://lh3.google.com/u/0/d/1mlpdWS47MI1CFuwOtBsWW8n3EhIacU7x"

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