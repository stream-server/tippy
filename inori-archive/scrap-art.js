var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1vOxWgvxH4j2DUI3kVlmhhtBG43ooJQFR"
randomimages[1] = "https://lh3.google.com/u/0/d/1FyKKNpDj-mAeLiitQfk8WBqe_tZgBWu6"
randomimages[2] = "https://lh3.google.com/u/0/d/1JMNjOCsCbfNJ1ei0QMTjZHK3OHDu4MvG"
randomimages[3] = "https://lh3.google.com/u/0/d/1QMgm3OYIei98rddG_0dbUrReI14SBE8Z"
randomimages[4] = "https://lh3.google.com/u/0/d/18hpNW3OvevZ6--nGoWFclL1Z6AZc-Cc8"
randomimages[5] = "https://lh3.google.com/u/0/d/1SzVMx4Ew5j4tk62X17Mr8nbss61fpjBZ"
randomimages[6] = "https://lh3.google.com/u/0/d/1wQvzWF4Ih4jTsMWthqTMh6a08g2l24ef"
randomimages[7] = "https://lh3.google.com/u/0/d/17b0F7-XamDXs3MWl6JUgByWvLsfWg1Qd"
randomimages[8] = "https://lh3.google.com/u/0/d/1GESCjYSkD557feGYn4oAzQ54F_mIb2YQ"
randomimages[9] = "https://lh3.google.com/u/0/d/1opCW8_ia94jJD7PA-NY6UWAZ5oRgKX70"
randomimages[10] = "https://lh3.google.com/u/0/d/1eoTFLDrFZyrVh7DNNTr93K5gKtsVgMo0"
randomimages[11] = "https://lh3.google.com/u/0/d/1s8_CsAboCiQDyDQqMWyR1oALKodLzwAy"
randomimages[12] = "https://lh3.google.com/u/0/d/1Wbgbob0WeBXed2JkUibdR_lCfpToSZau"
randomimages[13] = "https://lh3.google.com/u/0/d/1J36jMrX-pYzDJpTYDjtZBG9pHJbbOTzS"
randomimages[14] = "https://lh3.google.com/u/0/d/1TOZKhtu1WPPHM_n-9x3wTYmy4Ge_xLPS"
randomimages[15] = "https://lh3.google.com/u/0/d/13Tplir23Jl98kv3i4EWgTq2o6N7pn83m"
randomimages[16] = "https://lh3.google.com/u/0/d/1R67RY-_obY7PImiWHEStPQNFD-IbKXv_"
randomimages[17] = "https://lh3.google.com/u/0/d/1FCNNarzptoiJ7wb67k4BQwsAit2tbJDI"
randomimages[18] = "https://lh3.google.com/u/0/d/1zvngJycJzbk7ryf9vXxv_K0IYOVLGqkj"
randomimages[19] = "https://lh3.google.com/u/0/d/1EmmmGAuLwcRWwOIpQNM5K8zVCNPi4RJW"
randomimages[20] = "https://lh3.google.com/u/0/d/1hp3vTQ16F5OMD7mtFN_sk_bTYT200wbf"
randomimages[21] = "https://lh3.google.com/u/0/d/11leQ0oRvt1JJ6Rjrj3tu_o0EaEAwKmIR"
randomimages[22] = "https://lh3.google.com/u/0/d/188zAOU3eKqjzaab7ebkso4QumScYsb-v"
randomimages[23] = "https://lh3.google.com/u/0/d/18z4BBFAOIzx9nTt2-i-0nGhllMABweLG"
randomimages[24] = "https://lh3.google.com/u/0/d/1bg0OtmSYNT5frmTw-GDCvzjaANl-_aXW"
randomimages[25] = "https://lh3.google.com/u/0/d/1wC91OAu-DSso3W4DaITR6qz8YikJ14vG"
randomimages[26] = "https://lh3.google.com/u/0/d/1z_LcWm2DZaa9W8iDfSye9SccbxZ0ElcD"
randomimages[27] = "https://lh3.google.com/u/0/d/1I5wVa221ZCT70xgVUMy7QhfrMNeUwX17"
randomimages[28] = "https://lh3.google.com/u/0/d/1FKmAu-fxsG3wonp258cyc3Hc2mlaXT5K"
randomimages[29] = "https://lh3.google.com/u/0/d/1SnhNvuMmz9NglUFf7qaj11fN9m6tuEv_"
randomimages[30] = "https://lh3.google.com/u/0/d/18n8LRCJvrbIlaTf_IBF7jfhctoHd7QA1"
randomimages[31] = "https://lh3.google.com/u/0/d/15oo_qmhKgNpbaX_wZiK1IagGf5L2kZXI"
randomimages[32] = "https://lh3.google.com/u/0/d/12wbqJzZQ8fVG0cAn1CuX4PDBlzNwrkrj"
randomimages[33] = "https://lh3.google.com/u/0/d/1vdKyvUrHJWsJZKHIUSYHsv7vxxAd4zYU"
randomimages[34] = "https://lh3.google.com/u/0/d/1KWpnMlDz_WCx0xl0f_UZ8M5JY_3jRPmN"

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