var delay = 4000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1YBDfn4-iPvsrGn0DmQUv2JlnzdvnBYza"
randomimages[1] = "https://lh3.google.com/u/0/d/1zK1GmYbxc9hKzNhL-zi1A9drmeJxNbPY"
randomimages[2] = "https://lh3.google.com/u/0/d/1b1mhulHCBb8Jt_d6GCA6FVUoemXj7CiN"
randomimages[3] = "https://lh3.google.com/u/0/d/1y3PdW2HDONh89l98B9pXPGBtkI8yJtqb"
randomimages[4] = "https://lh3.google.com/u/0/d/1nIFg7Jkvpg1SAPohxYsqo7fxdqd12_dY"
randomimages[5] = "https://lh3.google.com/u/0/d/1qtKI4SBJInz7XhfBNuvqeFpA6MuB7yuK"
randomimages[6] = "https://lh3.google.com/u/0/d/1uCTB-9JejVezsjMgjDIvlCAatUemnr1k"
randomimages[7] = "https://lh3.google.com/u/0/d/1rSEr3BOOMz4JVf7KK1aOcEWQv4nnw6Q_"
randomimages[8] = "https://lh3.google.com/u/0/d/12WCFEYrTTzk_h0U1dGtVnLV6fh9iKsNS"
randomimages[9] = "https://lh3.google.com/u/0/d/1BLlf99ZI4R5zsHA9PZ-9xQ9bioqwGM36"
randomimages[10] = "https://lh3.google.com/u/0/d/1Oo02gqCw5GZ5ltEc0vZGBWN33pyACr8f"
randomimages[11] = "https://lh3.google.com/u/0/d/1wTW_V3IhpMBm7Rk0hQ8iFVYxOeXLPGdf"
randomimages[12] = "https://lh3.google.com/u/0/d/14_FnjoX22XgQu7sLp23c4e0WjFgRomjm"
randomimages[13] = "https://lh3.google.com/u/0/d/1xcGAtcISOuWjg4GLRUOqOY9mu1GEoNRo"
randomimages[14] = "https://lh3.google.com/u/0/d/1GvLVm6KniGmemo0v5m9XrVAa8I-Wm4J7"
randomimages[15] = "https://lh3.google.com/u/0/d/1ljW6i_kAJnZ4RKo1ZR44p6Nz6SvjERvl"
randomimages[16] = "https://lh3.google.com/u/0/d/1EPz579fLFlVAwdYnUFZbfHsoymlFyki7"
randomimages[17] = "https://lh3.google.com/u/0/d/11VSMHblefzddhE1kCUSsoCnQAPGTvjL0"
randomimages[18] = "https://lh3.google.com/u/0/d/1joYLlY-c_9_uzUL5U8cQE0CG8SRc1i7e"
randomimages[19] = "https://lh3.google.com/u/0/d/1fMuJr0bCXvJkb8MCMtTNLJ0lCelaouxG"
randomimages[20] = "https://lh3.google.com/u/0/d/1pqH44paOwjVwkrLhQtd8yfyCexVCyPut"
randomimages[21] = "https://lh3.google.com/u/0/d/1crGiUQKYb1cgfKU7NfqSbVjiL1-EVOiZ"
randomimages[22] = "https://lh3.google.com/u/0/d/1Ola6n21SkzNBJCBCVHL7MZzO-AVGBwC0"
randomimages[23] = "https://lh3.google.com/u/0/d/1DIvMAOLPyR6DGp0iC2FH5sHZn5PXlJKP"
randomimages[24] = "https://lh3.google.com/u/0/d/1a22B-ecG2R2BLqcNDuH5zUX_pidtqrSa"
randomimages[25] = "https://lh3.google.com/u/0/d/1zAoK4kRdlx2FcVgHqwLXA_9ctnxDby24"
randomimages[26] = "https://lh3.google.com/u/0/d/1YEgjYIbmn4KH9xQdCGrLG8QMImOqH22W"
randomimages[27] = "https://lh3.google.com/u/0/d/1a4HO48K8jnGIZBh_mSLEeHfxLKbqjspx"
randomimages[28] = "https://lh3.google.com/u/0/d/1AQkHG1MXeBUKokQbW6TXKZ-tHNt5jjgm"
randomimages[29] = "https://lh3.google.com/u/0/d/18yDQSkA1j4vbG_o8Uzb7SzHbC5eoFAsN"
randomimages[30] = "https://lh3.google.com/u/0/d/1SvCNPoxmNBrJon-mQ0Qemq-eoNzU7S1t"
randomimages[31] = "https://lh3.google.com/u/0/d/145m8HDW6fgkoJNAbpf8zQok-QtG4gard"
randomimages[32] = "https://lh3.google.com/u/0/d/1-zpF61AKzH2c5ePcqaxVTVMzOXighTDs"
randomimages[33] = "https://lh3.google.com/u/0/d/1RDXiFsHKOj_a777_0RUmlXsKV4BCrN1n"
randomimages[34] = "https://lh3.google.com/u/0/d/1Oq3s56G6PLcGUbYWyjyvJhpKQgBFZ6LI"
randomimages[35] = "https://lh3.google.com/u/0/d/1FZUytAPemjSCmRgkaOLxRGeBKgQRAoHp"
randomimages[36] = "https://lh3.google.com/u/0/d/1ghruqfRDnbZ7fcNcgS1F85UOMI8ADDs4"
randomimages[37] = "https://lh3.google.com/u/0/d/1z-xwk-K2UW7tAkycorht8qAV0RFWaS5o"
randomimages[38] = "https://lh3.google.com/u/0/d/1yf6JJ3dwWONbexsXIwKNr1LDSNYZ3yzE"
randomimages[39] = "https://lh3.google.com/u/0/d/1O0E23xjtC6LlI-iqNsWDcDN_XTYZqS5Y"
randomimages[40] = "https://lh3.google.com/u/0/d/1x6U9DC59aT-ekK4QYUcFlCJoKOeFPkVk"
randomimages[41] = "https://lh3.google.com/u/0/d/1CTk-c8e-HgAQ4DjgM25oMixe-ZP_3S7K"
randomimages[42] = "https://lh3.google.com/u/0/d/16cCyVRXlV6p1ayEMvDXUc8uQ1pmpD9ij"
randomimages[43] = "https://lh3.google.com/u/0/d/1QZenrCTagub7-06X9ac8t7ZcY_KzLxE_"
randomimages[44] = "https://lh3.google.com/u/0/d/1hR3uICuTrzj7BqirG9zGRx5k_IOFsAlg"
randomimages[45] = "https://lh3.google.com/u/0/d/1ZGYMsbyQFFlQW5ZBAkYEMiFmwQQiDiw2"
randomimages[46] = "https://lh3.google.com/u/0/d/1cSXmvKQSP2F0ZMOQuXVh0kFATkUqI-rh"
randomimages[47] = "https://lh3.google.com/u/0/d/1jKy2eeX4qgb4oyF2dUcSvrr_0SWpRjbW"
randomimages[48] = "https://lh3.google.com/u/0/d/1GicRBHlBF36G0izIRa5qPFFUBfJxC4V4"
randomimages[49] = "https://lh3.google.com/u/0/d/1ydhLBsEmSpU1-a-w0A7F-TIgngb9FkoC"
randomimages[50] = "https://lh3.google.com/u/0/d/1lDboIWVQSmAPX-6UxTvvvAQ_xLlstyZP"
randomimages[51] = "https://lh3.google.com/u/0/d/1WgMvXAGV_IxaHyTuNsyR_i_9G0bQl9sq"
randomimages[52] = "https://lh3.google.com/u/0/d/1lOeYkw5yB1fxI2LFYfQuGm2ujnA_5Otq"
randomimages[53] = "https://lh3.google.com/u/0/d/1GqCPzOPfag0nyGhsXDKAw-jUCnOuCN2n"
randomimages[54] = "https://lh3.google.com/u/0/d/1a1nV2eizPuMZYS7VpH1IBM4_QsQqSrTB"
randomimages[55] = "https://lh3.google.com/u/0/d/19srOn99SvDBTbVQZL62gOYyAweckw4EZ"
randomimages[56] = "https://lh3.google.com/u/0/d/1qvzokfJSb2iYI27ROiaiZEKsy8Dk6GvL"
randomimages[57] = "https://lh3.google.com/u/0/d/1n7XHhDn0OtxUVaO_HNIAoXCFV96FPgra"
randomimages[58] = "https://lh3.google.com/u/0/d/1FCWu66ghGWODuMBnRFJvfT3wkuTKmSoF"
randomimages[59] = "https://lh3.google.com/u/0/d/1ATJ5RaeudZuBxvBNbT0OwrtYPVK63gGX"
randomimages[60] = "https://lh3.google.com/u/0/d/1H_FKosDMixTzD7aiaY1IQU23eqUA5ZjX"
randomimages[61] = "https://lh3.google.com/u/0/d/106aWou06JQnsz6nuOVJg49peGaUvy9Ya"
randomimages[62] = "https://lh3.google.com/u/0/d/18UeKVPhObA6Sw0RqfICF85lpHDCHRO4v"
randomimages[63] = "https://lh3.google.com/u/0/d/1zYr-FkCDS8o92mu_3_0tQ-rZH9sxgn6j"
randomimages[64] = "https://lh3.google.com/u/0/d/1f9DjykNxS75PoLHMdFYr6ZNTc6uDQMZZ"
randomimages[65] = "https://lh3.google.com/u/0/d/1ahvmBdQVGkW77alf5_HOqM7yJvV5YYda"
randomimages[66] = "https://lh3.google.com/u/0/d/18HlzgJzV48ugw0Q1GohYbPMNWP_OIO4H"
randomimages[67] = "https://lh3.google.com/u/0/d/1tBiU88BOPe0GrSrgbX6hcdQqa-U7hgJm"

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