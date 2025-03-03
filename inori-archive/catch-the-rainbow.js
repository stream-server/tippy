var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1_wAKymHXMvnKj3Xg2f490g0Xq0Y7062D=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1do-B9szYTAnIoX7ZH4Ax726mCOY2tsMk=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1v17Yz_7o-JJ26mPTU88-TtThJDPSjRT-=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1PvRzW_kL0DmW_6oS27pmLgyzttPM5FDW=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1xq3Y9HGhm9BnmDaRqsUUx8Fkxif53Lo2=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1Ns4EI8i204M9X_VS5vHzSPPM5uDB5tuL=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1P-HI1IMwBPgo2cdx3T3tTLCFCFbl1_g0=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/12bSWfABu6ucc4Vk15MTpOTf4BuTXVkDM=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1h6azDA6uHdh5s48C76Z5tU4prUkU0Z1a=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1NtZZa17YJgVup0rk9srfBRMrlK8MXEDd=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1O_SiFcnk7tK5EzWX5LxoL5SA4ElN3h10=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1WuLwEKMBu3wI1BTd0zRa-hW01Jw9zEzI=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1K16KHGECfeH4HLdyse3utzP8Xnx71nry=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1W3yi5x5MpRH1en3y-ZSHrXKut9qJaKIP=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/17a--ch55bHCGyic7R4n6ZIa_4RZ2pc3c=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1yr6V7Gbrpf5cuG90LUdMKxSp6MyrwdXB=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1adH-m8oO35Q3iog3_BE5Yl2UmzBLmVCk=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/14mRscBHtQjB7J8_3BVClCRg5Cfco3YUx=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/15ICoabBEIuVw8kljj6hZkIfKrioYDAkf=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1C2VKQQAOMbmnsbAfJMlwTIA1rg-Nf_xf=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1pM5k0WN245XSxJiDuUWvrRjRUkX-aw7f=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1vWwbbChQXMkmwifpFMHNSLaOtY3azdT-=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1nHPhX7fUgLLgHFA-qanFz259KmqGtaGW=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1tGMrDV8opaLbOESQ2PSL8P9ax6gXiqKL=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1TjYWJvusz4JCpMkCsqV4EyVd529jlxZE=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1NYRoVSnenHay2JqZ5NXxhrordzXgTQyF=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1_sueK1H33U9GRIbhsx-AzZPZRyVnT6Sj=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1b1l0cd48FnY3BtuIl-ycA4cS-cNMUAKC=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1KWbiBbwEcoAYO7KuvsNDNtxnkt8xKjrl=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/140HOywulTlW9E_0pEGM7WQtGwb8FPDth=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1u5Rq_FVU-NX2Ks58WcenZxzy4Bgv-T32=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1wBsF5uYWoQ8hgT-4moFSBN-TCRY2B28q=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1Y508pwZ5TGpWxtlZGICUBUvx-y76QL_K=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1BRBowqVsWluchheMWElCmVNDvGFGRePV=w1920-h1080"
randomimages[34] = "https://lh3.google.com/u/0/d/1sX_7roqRELg3-K1khX1DpfZ4m_f1jc_-=w1920-h1080"
randomimages[35] = "https://lh3.google.com/u/0/d/1Ja3wCIBYeH4tlTsnkBQ-_ey4R8wkcdeK=w1920-h1080"
randomimages[36] = "https://lh3.google.com/u/0/d/1s5dRi4bGwX2fSCc_A_beRVgiX3boWv4w=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/1FeFU4lMN4IQ8dsRbkoy49NC9ymPJl1a9=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/1YshE3dWGmAJhdFlopapAjTy650PsKd0-=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/1A_8IQNAQ6hdwvOBjfv_EDf6UYiFuPSAD=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/11rzauCQtwiRheIkzErhBKhf4VSfVcz9z=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1r81iMUAHR4QoC2j2uiBBa19QzViqIsW_=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/1E-yk7tEd-ruaZHSCtqGk5n36zycJhI9r=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/1AEVSitLOh6GKWIoVAkMtVuQHoimEKN0x=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/1JYlH9oPWMdLFwt2t0VS1hdRnx8RVYIEg=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1dM5ir04Ye0gtYK-Rc3HPXv4KUVMD-zZ8=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/18q2osxvKVG2nqAohKABFSVI8lYWofvEw=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/1SfECGainAjc_g_bLjthuJYmBHM-z34j0=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/1awvY52MW5nQNyJCndZ3Qn7pmxHgC_-Wt=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/1EWhQ8N_Yeixq94FolGz3A7McTJMwtzyQ=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/1oJROd0FFXWfd9sn0oLyKxmBakjzloajE=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/1T52cL5pBFNWLX0RVX_WIz2qVmIYWAujR=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/1-BRynHKldfYyEbh6o6QPUZ3Bm5VKqke6=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1t28gPb-n8Qd4NlTIWbFzUoJJtgUaqUBk=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1rz-d4gBGbnjODgitBupCU6GsFTENTHJL=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1evLL9XgF_3qMTSUzgBLaweEvEydzu7nQ=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1EC1HPgLQr3FLrQrfqaw8ydAHPZ2auUT_=w1920-h1080"
randomimages[57] = "https://lh3.google.com/u/0/d/1P2AJ0_VwoxZMBPd_IzIgBYdr88hgUYyv=w1920-h1080"
randomimages[58] = "https://lh3.google.com/u/0/d/1qdZ6NziQvUMlJ5JpvkhPiFD369gILPHa=w1920-h1080"
randomimages[59] = "https://lh3.google.com/u/0/d/1EAelvO9pcj61a7o5VReSOqq8ulVzb-0W=w1920-h1080"
randomimages[60] = "https://lh3.google.com/u/0/d/1ymTJpoDbGxO1vYd1bFExYPyqVhyGf-rS=w1920-h1080"
randomimages[61] = "https://lh3.google.com/u/0/d/1Dv7Bhi5CoPKd3cF2mE5JB9ZzJmQGzclI=w1920-h1080"
randomimages[62] = "https://lh3.google.com/u/0/d/1IPcEwMqTQg-O5hfeEoAaz_VYFl5_ZBoT=w1920-h1080"
randomimages[63] = "https://lh3.google.com/u/0/d/1O1qw5NMuySvsHBaduE6t9QwhrF9uaoIz=w1920-h1080"
randomimages[64] = "https://lh3.google.com/u/0/d/18bbe5zFdTLMG19SCLqFcriiuNIACfGZg=w1920-h1080"
randomimages[65] = "https://lh3.google.com/u/0/d/1bb51uNsPVb-M8NauaGrgj_8ZdIogZ974=w1920-h1080"
randomimages[66] = "https://lh3.google.com/u/0/d/1z5BVdB8vDEv-d0CZfjvFAclvrRkHgY8J=w1920-h1080"
randomimages[67] = "https://lh3.google.com/u/0/d/1D7MauEw_UyTOaNILhsL0Lz9f-KRMk5fJ=w1920-h1080"
randomimages[68] = "https://lh3.google.com/u/0/d/1slmTOSGU8dTrxv7li37OU8OQ5VqmvNgb=w1920-h1080"
randomimages[69] = "https://lh3.google.com/u/0/d/1qJIyAVSPLKVW6sVE1h5-yUTXVHTGboao=w1920-h1080"
randomimages[70] = "https://lh3.google.com/u/0/d/1AP_6DRYe8soXgniqpz0AHJ7H4ak-W4vU=w1920-h1080"
randomimages[71] = "https://lh3.google.com/u/0/d/1MJS9EfkI19Epxhbkwi776J2JGNVVEMQi=w1920-h1080"
randomimages[72] = "https://lh3.google.com/u/0/d/1LgKY1yFbxHZeWZkQyukEC_d5E-nk11EJ=w1920-h1080"
randomimages[73] = "https://lh3.google.com/u/0/d/1Y1ETtbcQiv9UugUswpU7-V5V2oFPiSJq=w1920-h1080"
randomimages[74] = "https://lh3.google.com/u/0/d/16r6qrc-tdqPYir7vyDA50641ChNCie3S=w1920-h1080"
randomimages[75] = "https://lh3.google.com/u/0/d/1ile5CeVzzAqxh-xWXRl4kpGSA3_P56zR=w1920-h1080"
randomimages[76] = "https://lh3.google.com/u/0/d/1WOpWolszcIMxUWr1hZJogC4fNEtRI1JL=w1920-h1080"
randomimages[77] = "https://lh3.google.com/u/0/d/1wSRUEvBOrsdRJ2ocMOUGTQ6YbILJqP6x=w1920-h1080"
randomimages[78] = "https://lh3.google.com/u/0/d/1rHPIdQtE91Js5uwmdOrh9NEhs3II5QkV=w1920-h1080"
randomimages[79] = "https://lh3.google.com/u/0/d/1yhMVH2qXVaCFtH45Jr4Z6j7gXyj3d5ja=w1920-h1080"
randomimages[80] = "https://lh3.google.com/u/0/d/1ug84Fuerl3Un0cvC8iWh64jmPZlLK1nN=w1920-h1080"
randomimages[81] = "https://lh3.google.com/u/0/d/1Z1tCT3BstvW1lviwhtn0cYmtW7G0Z9z0=w1920-h1080"
randomimages[82] = "https://lh3.google.com/u/0/d/1Hu7hjGkg5Po4qjR6RbKHlDFbJRhhPfM4=w1920-h1080"
randomimages[83] = "https://lh3.google.com/u/0/d/1tSdSDiH1jDzi7wqrTNVZ2LG2-IYIme5-=w1920-h1080"
randomimages[84] = "https://lh3.google.com/u/0/d/1-DNT4upUf8OQVoe5f0-EHY71LzzT9AHn=w1920-h1080"
randomimages[85] = "https://lh3.google.com/u/0/d/13mGkibbJPwLTDydDvGADmeAQYfHcXYJv=w1920-h1080"
randomimages[86] = "https://lh3.google.com/u/0/d/1sMWwhZFxvAEFtgqz68hJuWFCSfYoyxh7=w1920-h1080"
randomimages[87] = "https://lh3.google.com/u/0/d/1B4AQ9JqAp87VsdDqAXAciosC3CLTFPHX=w1920-h1080"
randomimages[88] = "https://lh3.google.com/u/0/d/1mr2Sj2eKyVMEQgGFC4WJ-Js0S1fA3_sG=w1920-h1080"
randomimages[89] = "https://lh3.google.com/u/0/d/1KmkCB7PhUKgl9CDxVzlxOBgpLlIlDWuL=w1920-h1080"
randomimages[90] = "https://lh3.google.com/u/0/d/1LkKFFTkv9ZSGUa9h2VOAX4Z1V4aAwZiO=w1920-h1080"
randomimages[91] = "https://lh3.google.com/u/0/d/1zjc1UO03DsMMcokxNt6sSrLMnDQjbKrO=w1920-h1080"
randomimages[92] = "https://lh3.google.com/u/0/d/1lWqtY4OTRkK0ZfvOkNRk09jKIkOynQBa=w1920-h1080"
randomimages[93] = "https://lh3.google.com/u/0/d/1M_4M8h18Fq_R8gBgfow-HECHbgvOqpdT=w1920-h1080"
randomimages[94] = "https://lh3.google.com/u/0/d/1qTw1svmWFEHtwJucxa0L04mvFPg-cuPe=w1920-h1080"
randomimages[95] = "https://lh3.google.com/u/0/d/19If9s-GvsEyXjyqvTImBmVuj4CgjIDPS=w1920-h1080"
randomimages[96] = "https://lh3.google.com/u/0/d/1BokqACGAfSHcCZ6nPGdBpY5-IofH60S8=w1920-h1080"
randomimages[97] = "https://lh3.google.com/u/0/d/1I0cE5cf_BiyCe0v2O6auFrl0Vj6FbJJP=w1920-h1080"
randomimages[98] = "https://lh3.google.com/u/0/d/1YlXDPLxOUTkqU-Qq4o0nL0HmUdGC3z1L=w1920-h1080"

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