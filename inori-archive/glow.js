var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/152WnMQURQzIWEnKRdtoWtN3UmwVyAy_C=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1l109PQkXNAruTsawsm-AqJt22ev40fSD=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1y5vfaV535spy4oDV3ZxyWyzq6ZfvuGsw=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1uwPTdAeLf68e7iD4lb6ikleONY7uQChS=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1Wd7zKk-VPVwAut0ULxqb8Rlnz_VhT-A3=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1NndCxqaXPxGFAzIkhgGbhJBwPa6Mgni6=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1KNHtz3uNerSIvyQfc7xB16biNO7dh8UT=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1Znvvl1LbEGbZXj20Dyx7r5A-6-tT9l4_=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1qHYJsGXnJQwVPbDQtXxByFXq6GGfWeWr=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1UWAdLGkasXbdd7AfFpmsKI-OF31Wkzs1=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1DaW2XlSXz6oodmgkNMZYS--a0di5og7e=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1eJSe0rYw6fETrWam2EVQdfKIjwsLlqx4=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1PBJgqH2dKWWq9qNN8x3iUZ2k5fB0_BHZ=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1TGIwCZlBNvC8-gzgZ1Q-YcFDK9YzyTrQ=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1pDHUmqVXnF7dp2Eo2i6GaZbY88Lhnr6I=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1O7SpGeck9gL4aykPfTMs3lo8Tuq_TORR=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1GZaGkCgVTwj6prpBVp7oy-EfYt28gAjz=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/10XkNd41D6Uot-1f6kJWl98HvMgXMUFtP=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/14uFvNedZlvpooGDcEpnSPMAhpq_XtDme=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1Z3TzHNoJ_R-is3WnVP3OjeCxxXNLZJDh=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1Y8ghz7sMT10Tvq5dKD2kd9e0E0mQaVKF=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1GKOboTFS7zynzfhWVShif6x3e_6JrryH=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1MAJXS3fccey9M1l94vulrOaxJZdfsuOh=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1IYhSNXbAiRLfsOLS-mom-5t2e13LHua0=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1snQbjaR5h2esD2AYBu4iNtj5EjHn0uVT=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/136hOmwfvshH44GvHlfcaPR2YNBeZz30P=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1bfXx_o5Fq6adfOKmo7CUK7vRL8_pc8fJ=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1WZ6s78AlS7hOuPa-ftnvrJq9n0yd02jB=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1vIaDPl0-SpEozXfnqAvW4W6quIlPP-Ia=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1Phxtli-FvVBAKY1yz8ownqHv-nibUeRz=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/13Lo5yFhsa6IhfQAyO4l7jiqYXd-9Xboq=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1BjfjTN-wIn4bMXZxt-rvUJ3ONkshxcEj=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1T8KUQJr3Vn8vcoZqsjcqtJ2hQAncOEiZ=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1kOa_WRcUFC_A1ERoLbeCgEkOLMwxKrs2=w1920-h1080"
randomimages[34] = "https://lh3.google.com/u/0/d/1aFL_NiL57_ZDUGP3nd8E6yLnM9dNo-P3=w1920-h1080"
randomimages[35] = "https://lh3.google.com/u/0/d/12dcQ0iK_1EkHPvH90-P_qO2x08yCfZYt=w1920-h1080"
randomimages[36] = "https://lh3.google.com/u/0/d/1kNFd0QeFySVd33gfiNa_PWWkf2KFfMIX=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/19g0_fDBykyrmsj_BXXZz_qTDQfgeLYTZ=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/1J1XYXXB-kR0FJa32rFWse_w7qGxNlj2G=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/1C1irdBlR7eRIB_q4vAxlMu-inuIUjqnN=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/1Vim8h5DKhDSRhePPa5ee8DAmjp77ujf2=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1CzFCniE6WNLnA4IOZ64_HV7UGpfmkAA3=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/1X5d00DFUPz-vmr2DsAnpPoVBCj5JG7eq=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/1leTloh6CewmSIANQ1W3no3Z23dfVMY6W=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/1dDNHtJ0HUfvg5CbmVoNQDNIrgs0CLLvW=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1DE7fqvSfy2FbPSRGqCyxuXy_bzKp5J_-=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/13pBXj-mQHCqD8XMR2VhCJVODKivZSP6N=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/1HxRK3TE9ltVA00_HiQ7ou3yBw0DrCvR_=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/1gsKmR3tKRekIHDbfAdHZ0ve39YTDsvQs=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/1uQ6n6FA9SduvjF3aFVPRq5DbuqltKhUb=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/14_oX79XxEwdAsdN6ZEfZvYeJI2nbwbao=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/1xNwwCJGMI0KAZrMaYMs8XMJmTfRiBK_v=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/1BTyZ-DqsBAHYqE5lGgpwF2ZcOhR1zLsI=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1ExtR1NLdiw092izXyvz287UhCNM-TUeD=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1jqcn5bonkPI5Lq5kkolBxRupiMy-4rb-=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1azz1_eSIuTqr5ETrC38YIPP8hwlCKHuY=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1K7zbgOSuKijJ5JHY4MnxZTBNJS9ZDIkJ=w1920-h1080"
randomimages[57] = "https://lh3.google.com/u/0/d/1Kby4fyvbCQU_9zcef7oyJ4Ph5aaLWji4=w1920-h1080"
randomimages[58] = "https://lh3.google.com/u/0/d/157J2iHNvKbD420Z1RyO7IKI6JTCZS33b=w1920-h1080"
randomimages[59] = "https://lh3.google.com/u/0/d/1tARKjagI9C7S8c9l61HLuv9jxn9zHWP6=w1920-h1080"
randomimages[60] = "https://lh3.google.com/u/0/d/1bDfwYFy7rNDTCsatAx5WL8iOnt3sAmft=w1920-h1080"
randomimages[61] = "https://lh3.google.com/u/0/d/1RehNt1KYTURj2Nqzd_mdYFEQpt28nnbE=w1920-h1080"
randomimages[62] = "https://lh3.google.com/u/0/d/1gm2yFm0OLBNAtgc4Bu7cH0nX2HBNEqxE=w1920-h1080"
randomimages[63] = "https://lh3.google.com/u/0/d/10gB9XfjNRf1_wQMcZiU2TjxZ_9O0inDs=w1920-h1080"
randomimages[64] = "https://lh3.google.com/u/0/d/1zHaYsM6cxXd_a9OVmM0fZKYSbp3Lccb1=w1920-h1080"
randomimages[65] = "https://lh3.google.com/u/0/d/1vaiiUY1qazPbFm8ay0b9cPcRgelS_rrU=w1920-h1080"
randomimages[66] = "https://lh3.google.com/u/0/d/1vtFvzJGtrfSIarHN0oB_ybBXJlzlvZU5=w1920-h1080"
randomimages[67] = "https://lh3.google.com/u/0/d/16pphNgJzC-Nrd3-S_YtRf9V9aEpziGGH=w1920-h1080"
randomimages[68] = "https://lh3.google.com/u/0/d/1MAJ_XsGoU7gjInn6kZ6Rg3nXFLO5P3Gn=w1920-h1080"
randomimages[69] = "https://lh3.google.com/u/0/d/1tsoSeRqHIx6EjxivGR8EjmzvBT5wBSBV=w1920-h1080"
randomimages[70] = "https://lh3.google.com/u/0/d/1lrO1gn3f_JjY1TsEgnMA6gbzxz4WWfXG=w1920-h1080"
randomimages[71] = "https://lh3.google.com/u/0/d/1fNeGb0IxPokRKKQZx2hZEtnslf2IMZn4=w1920-h1080"
randomimages[72] = "https://lh3.google.com/u/0/d/1evM386DqGwY-lXYE3_hs2rDkn5v0vaPT=w1920-h1080"
randomimages[73] = "https://lh3.google.com/u/0/d/1kDbO6NTHKc_X4AR7C1g5LfPBrykyLSjV=w1920-h1080"
randomimages[74] = "https://lh3.google.com/u/0/d/1LdiltpvYAHtBEBsq8GcqUw2UpwPt4sqm=w1920-h1080"
randomimages[75] = "https://lh3.google.com/u/0/d/1Jra71oUDotyc2gr6jfoHC2SxMt_ZnHlv=w1920-h1080"
randomimages[76] = "https://lh3.google.com/u/0/d/182iM1GkZsiapdaThRWbSVC6QYZH-oE7w=w1920-h1080"
randomimages[77] = "https://lh3.google.com/u/0/d/1Q3Zz2h9P-XdDUEUnFLp2ajMQUS524ozJ=w1920-h1080"
randomimages[78] = "https://lh3.google.com/u/0/d/1VeG36owdK8PK3SXYSnEVyDky1eI7eSXN=w1920-h1080"
randomimages[79] = "https://lh3.google.com/u/0/d/1f5-E6qfltKROXFxg-ML1OAVHyfyH0nNU=w1920-h1080"
randomimages[80] = "https://lh3.google.com/u/0/d/18oNyNOpiwe00NRuFa-IgDbsSTWaNyB1p=w1920-h1080"

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