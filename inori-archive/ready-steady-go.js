var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1UoD_F3--iks9RJpjd4CS3ceXlxJGIviQ=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/10RzKpP_wvLxXSvVRSXXoswz5P-hJczR1=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1txPN3FC_uP3j3kFH52vjDADsmb2JvuAB=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1Az53AguA5FZk3wMdA_ylf-E8NcVIEo2v=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1xGLMpXWeZ-ou-fGRQM3MaQo6r8cwJ3TC=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1rhcq2Aw7L7kDxwWBSA0dYFQlfkCHkKXv=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1aA8lY-9eRNDE8OOjPuUw7d671ISWVNRi=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/18EZ9t0QcyPewsjD-82RRPSrhuOdqyy0V=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1W1F2ksiroNUQ6bwPRUIT8jqujUwY0i1H=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1cXomApISzfSnWeIoT7ZdicF4AW0lr5ed=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1r_-h1yNvfh1evhb5--zHjT4L0lJghcNp=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1UOc0b6EGYjkqloQicbLpBMYGzesy4e3_=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1JYC5fiTX9HTlLHpX4J5weSmHSMm8U8MS=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/19xWbZi94j8Pw2iuuolFG13JrOFJTMylc=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1_3EKWE-xv-OSKyvPSe7aYxhQp5g_Pb9U=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1HsdecDrRwhgBqFHyqZJmIYgpj7DOMdo9=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/12HoPaHjfK0YXiK1kgDewrhDcQDE4GSe_=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1kFxbq66HlnY6kdR6pYxIOB5kjkxFtVCf=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1WbxH8aEvS03_QoSQOZ5fvt3I93u_NA8j=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1RjyahNDe-woTSRykDEf-lS4zK9LluJvh=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1fV5Rm0QWOlt-B3PWscNdqWj2LSkTxXs2=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1wh_0gACKBMKRreArHm-4O1lyJs4aPXQO=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1ig9zqT1VkhJxyOYXQjs6_S754ZCV48qX=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1eSksQHI9LYWsXVz26iNFpp49SFkMNJFx=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1XJ7lQvbaC8k8E88ZkW5Wvvwbg5wM8s7h=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/14RKIZpPf_nt9KeZ6_PlETVQ9SkqAdsdy=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1NiU29CsFZPVXRJqbkNrqJkXn-bpl4xyT=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1ziHtuXIXdyFFPbCPPqac-ePap3n7PTa6=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1ezHGkSRtANc1PrGZO1ZOwr-ltqCTqHOt=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1bTLBHwqWTk30NMEreFCLiHB8qar1fxUe=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1arz05yK6ViieUyhvgY-j4mwboYN0mDUe=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1K8gPDhPqUJZ4sl6uUp8BG6UKJmbSS8tR=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1HAOoUCXpb5OsStWtsRyt7JkT7ImgPQDf=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1cSnXACWeYKVYIwWNHEecyghBUzCtfE8P=w1920-h1080"
randomimages[34] = "https://lh3.google.com/u/0/d/1cFlvg1tNUcaoqle-0Ti7MhiNO-2tmhJO=w1920-h1080"
randomimages[35] = "https://lh3.google.com/u/0/d/121mOCA5SvDFGlembTXLhxUrsThug9VsF=w1920-h1080"
randomimages[36] = "https://lh3.google.com/u/0/d/1lt9A8uWZLlBXGVI4KZc8Llm8BZPYqZ_S=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/1WbLPC64d2U81XomrjlMgeTTXmrIEOzBr=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/1vszf9OsRzxLKrBJ-SUUpzAKa6Jw4oqP5=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/1OWAOs0_xmp2PbXM_pQEFcpeW02h9TC0r=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/18i3y8KMGhAOC2TJTR7urysoOncK5OpfH=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1xptbfuuQf2GLcQSIW9qURYPb4GGubk9f=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/1t4cXM-n6_m9974hoK4mt9x7nfZmcqsnr=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/1bm4RKiBhrVhyCYWovqS3ZIdMK1gxDVSf=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/1Dy8IfXwxftW_PsF26YkspP0Wxm_W7PLJ=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1y8LGhS9dK7AoeDc6AOn8TB2vxqInKpU5=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/16yD-cedXWQRhk7ukBbPbb3JnkvrxU8ks=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/1_QLHofB8gPBAhN86ak0ZcF-S3kgK252d=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/15hasJ2kzp_akAXsxcPJgGqa_Q4beS73O=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/1oLGOPogGHYFUdWWAi2yW4gtcK9unYpFe=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/1ZUsZ-GvphazkB_rh5_dY3cYMimE1Bpfh=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/1lNk7osLveY9mC-BQ52SAxHSWNZ9c_TSz=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/19tseOkRjl0DRfWhClhzTU0-8swd6U6ba=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1c9I1eVNSRZbsNt30WLCihrU3djTlWEMD=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1-dQhc6fyUZ-2JCkVCl4NJU58SOqT-TiU=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1gpcU0o7_-GOZWsoYeewwsBzGYASe9ZZj=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1hhGpCAeeBbGzRCsl3V411dHDxV3ufgzq=w1920-h1080"
randomimages[57] = "https://lh3.google.com/u/0/d/1bCX1Aw7aJ-K1HjKrqrbdtj5VlSDHm7BY=w1920-h1080"
randomimages[58] = "https://lh3.google.com/u/0/d/1s2sGw5TNTTW7EXB-bLCA4RTODkz20js6=w1920-h1080"
randomimages[59] = "https://lh3.google.com/u/0/d/1593k7QD1XOoQpkKGPYcdvMjxo48Ptlyz=w1920-h1080"
randomimages[60] = "https://lh3.google.com/u/0/d/1NGMcF0pr9_g_DH8ZEXdM3xOhiiSjLv-X=w1920-h1080"
randomimages[61] = "https://lh3.google.com/u/0/d/1oSfktKLDEZBR8hlf1bjbLMaxrnTK9u5h=w1920-h1080"
randomimages[62] = "https://lh3.google.com/u/0/d/1Lh04Eao1Jv0CFySjIgSUGqeT1fa4rNxL=w1920-h1080"
randomimages[63] = "https://lh3.google.com/u/0/d/1UC6zforU240UYucc3hsvsAKtOVl7Ibj0=w1920-h1080"
randomimages[64] = "https://lh3.google.com/u/0/d/1b-llB894UpvW5gwsqAmCO-2pe4kxOs4U=w1920-h1080"
randomimages[65] = "https://lh3.google.com/u/0/d/1ncEaBA-1oQsAD8a7UnBpSMwPn1zBRS31=w1920-h1080"
randomimages[66] = "https://lh3.google.com/u/0/d/1PlwNgCEu6gk1TJlypNqmJO36tZqJ89ug=w1920-h1080"
randomimages[67] = "https://lh3.google.com/u/0/d/1WzrQnzKc8MGED6cQvzB2f19E5-RXU6ew=w1920-h1080"
randomimages[68] = "https://lh3.google.com/u/0/d/1hf_NpMiF1SX09cWGGCAjZXCjCwqTVy7O=w1920-h1080"
randomimages[69] = "https://lh3.google.com/u/0/d/1NoP9hxhsWrfkp9JKecnpemxSdsOuGb2L=w1920-h1080"
randomimages[70] = "https://lh3.google.com/u/0/d/17seAnUzda1h3RU9UV-Q0tDHruXbxBqph=w1920-h1080"
randomimages[71] = "https://lh3.google.com/u/0/d/1rMEtspy0dtToCudHTIgBNxk_gZRVrFmq=w1920-h1080"
randomimages[72] = "https://lh3.google.com/u/0/d/12gkqj9FhvL4zgo-rC9zVDvsF6zjzB3Nv=w1920-h1080"
randomimages[73] = "https://lh3.google.com/u/0/d/1uIoU-aGPyqHli-6bM-P2bR43EnnPS0pf=w1920-h1080"
randomimages[74] = "https://lh3.google.com/u/0/d/199UH4yiwkOya8AqallHDv_kf5-TOVzQe=w1920-h1080"
randomimages[75] = "https://lh3.google.com/u/0/d/1U_wm_pjZIAAGvJol1AxcBhL85Im-Wasq=w1920-h1080"

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