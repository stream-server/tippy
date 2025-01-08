var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/14dSKFuPenis-zRbx9aahdRxL637KJ2cd"
randomimages[1] = "https://lh3.google.com/u/0/d/1QEi_Yt_aLXv4ieJPvtfMoF-MdRmYNIll"
randomimages[2] = "https://lh3.google.com/u/0/d/1nw-iKppDhC6NlMmdcMvC7f-Cw6YcLS8O"
randomimages[3] = "https://lh3.google.com/u/0/d/1S4FaLrOiFv-rog7OBzBiiyo7Yuy-tXaw"
randomimages[4] = "https://lh3.google.com/u/0/d/1DesTaUYcB_19ZalxgCBYwHL2NlnXWfCo"
randomimages[5] = "https://lh3.google.com/u/0/d/1GrIZAR8JAAH1I-oxs0u2IZ9POodc5twM"
randomimages[6] = "https://lh3.google.com/u/0/d/1X4bXBdGUXODUM8hkp5tSu_beEVJADHwU"
randomimages[7] = "https://lh3.google.com/u/0/d/1BB_tXrdP0saKRjrtwtbXVXKMG0wTuXGa"
randomimages[8] = "https://lh3.google.com/u/0/d/1cHzjO6H5KteCZWRwo6YNpxSRPs7p1UB1"
randomimages[9] = "https://lh3.google.com/u/0/d/1AKZsLfZ7Zg5US1d9MK7n3PxMsJ1VMGVa"
randomimages[10] = "https://lh3.google.com/u/0/d/1zI5EJufyFk9eVBQsSUa4rTBGzIQom9OB"
randomimages[11] = "https://lh3.google.com/u/0/d/1vwt1u84qP9IjoxouTX4FA3DpGaczwSUN"
randomimages[12] = "https://lh3.google.com/u/0/d/1yEujFDiNhhfNMCtynxfhUFt5bZU9sTCo"
randomimages[13] = "https://lh3.google.com/u/0/d/13gFr-S86NN2ZPIatwizHS5GZrbpkXYjY"
randomimages[14] = "https://lh3.google.com/u/0/d/1KCdv76YT0bbnMC4bA-CPvvj_ns3pvJLZ"
randomimages[15] = "https://lh3.google.com/u/0/d/1-033EvHJ383gbjSwnkqYdZ_or_1e-n3K"
randomimages[16] = "https://lh3.google.com/u/0/d/1sBXRBUme3EuzrGzIOQgcOvq317pcT7zt"
randomimages[17] = "https://lh3.google.com/u/0/d/1Atoqo32FuJ9OBIEVP0SAnuG691ydSYlH"
randomimages[18] = "https://lh3.google.com/u/0/d/1_RxPDzGV68aRDWjuMymcJAiYFT5KUyKL"
randomimages[19] = "https://lh3.google.com/u/0/d/1FAZVoDxXe9Yjb-8HrE8_36FacSUDmfgp"
randomimages[20] = "https://lh3.google.com/u/0/d/1tugMUod5t-ByyYkZx8q-qOtHWcGdKjLV"
randomimages[21] = "https://lh3.google.com/u/0/d/1eS7ldGpjXKQYfB0B1q_Q2AbJt1G5JjcL"
randomimages[22] = "https://lh3.google.com/u/0/d/1X82hIYd2fzDeq9_V-pGivE0e9p-dGwlT"
randomimages[23] = "https://lh3.google.com/u/0/d/1Tqwo1WelbHmoci-ORP8Tqp3x3_iCudLi"
randomimages[24] = "https://lh3.google.com/u/0/d/1dOyI8CEo_D9qmVzfnEcXATqZtxBG2uik"
randomimages[25] = "https://lh3.google.com/u/0/d/184Z0YwV4DPB9Yi7yI59Bs_Ghz-ZpxkxA"

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