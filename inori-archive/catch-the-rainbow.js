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
randomimages[36] = "https://lh3.google.com/u/0/d/1470UPUbMjG_Wv7ZHljrF3D5FUWUnBPQp=w1920-h1080"
randomimages[37] = "https://lh3.google.com/u/0/d/1D28ANs5NEf_TAHF9WtnwpCwT6IlblQ0J=w1920-h1080"
randomimages[38] = "https://lh3.google.com/u/0/d/1P4jYLzDk1NBDUpvtqm3JQt9Yk6V5COH2=w1920-h1080"
randomimages[39] = "https://lh3.google.com/u/0/d/1n5F2n6pGW66h1aRajixMuiAaxRqmpa1R=w1920-h1080"
randomimages[40] = "https://lh3.google.com/u/0/d/12Sx6dP8cHLTilFX55kJhjFZ_YUSYPMP7=w1920-h1080"
randomimages[41] = "https://lh3.google.com/u/0/d/1brZyGkIYaUZp6pt8fxrBomhYcegK4akx=w1920-h1080"
randomimages[42] = "https://lh3.google.com/u/0/d/17xk1QKlRE-RQwm1MX9SWksqpIZ9mGjCa=w1920-h1080"
randomimages[43] = "https://lh3.google.com/u/0/d/1iksyIasm9xU2LCiFGSfkCiPVML8xA0wk=w1920-h1080"
randomimages[44] = "https://lh3.google.com/u/0/d/11A4RIXqJE0xe3DYsT26GYXU2zFbARhq3=w1920-h1080"
randomimages[45] = "https://lh3.google.com/u/0/d/1PQAoLEfY3Qtgz2fgY-3JLY6axWCeH22E=w1920-h1080"
randomimages[46] = "https://lh3.google.com/u/0/d/1aVGyBZiO_2DW_fGZmOTUoTtuq0FlHUAR=w1920-h1080"
randomimages[47] = "https://lh3.google.com/u/0/d/1gxeK6pj3rUcuQxK-Pg5yK5C4xtLkhAzy=w1920-h1080"
randomimages[48] = "https://lh3.google.com/u/0/d/1gW3Y2QxLbP8Gne1rNqAGnv7ZqqSb61nw=w1920-h1080"
randomimages[49] = "https://lh3.google.com/u/0/d/1RENZrAGSKTPaN09pPqMCmC_XRQzXxZy5=w1920-h1080"
randomimages[50] = "https://lh3.google.com/u/0/d/16hOSDhC2yolTXCJ8pVjzDVzDJQdudVUT=w1920-h1080"
randomimages[51] = "https://lh3.google.com/u/0/d/1Xbnp5C3NdpnD__ys1G3nCU_YzO31iEa9=w1920-h1080"
randomimages[52] = "https://lh3.google.com/u/0/d/1LrNOXcyEMHaN4zWai8PJiQaDqbhRWCn0=w1920-h1080"
randomimages[53] = "https://lh3.google.com/u/0/d/1oXFNUCyKXt51AMBzjPDFP1HmQvc7EBoU=w1920-h1080"
randomimages[54] = "https://lh3.google.com/u/0/d/1EOdWwsnfc3EDtPOLYqOPpMWJTCNClObT=w1920-h1080"
randomimages[55] = "https://lh3.google.com/u/0/d/1uwt6pnlDC9lgO54ldZDk2LjP3chRRe4b=w1920-h1080"
randomimages[56] = "https://lh3.google.com/u/0/d/1g2VroNpR8vYIFCG7uoe9KDbYbyvAVs-R=w1920-h1080"
randomimages[57] = "https://lh3.google.com/u/0/d/1z6LcfipXmzUtpneiLrMKc1E-HEeT0d2T=w1920-h1080"
randomimages[58] = "https://lh3.google.com/u/0/d/1QqnnPLmHzDgF_ufRH0A5LqQMbAQeIDK4=w1920-h1080"
randomimages[59] = "https://lh3.google.com/u/0/d/1uH6vSXLd4Z-bhZxd-RMARQpBhTYKN4Bg=w1920-h1080"
randomimages[60] = "https://lh3.google.com/u/0/d/1mWgTa09j-KrE2DhU0Yhv0aEMJuXQ3Z8V=w1920-h1080"
randomimages[61] = "https://lh3.google.com/u/0/d/19fIBMx2Qf6wL_87CXTvc835hWTlnI-AA=w1920-h1080"
randomimages[62] = "https://lh3.google.com/u/0/d/10rNgKfbrOZTR2WpNvcDXugmxB8ua53AB=w1920-h1080"
randomimages[63] = "https://lh3.google.com/u/0/d/1DxCkvLDpYwADCzivvfde4ymIVK2Xvxts=w1920-h1080"
randomimages[64] = "https://lh3.google.com/u/0/d/1Ie5BnXW_GDVnebJQuU6__wSdQUapHRg1=w1920-h1080"
randomimages[65] = "https://lh3.google.com/u/0/d/1pEOmRC_4uZADESannsb5RKQTWOttFQLi=w1920-h1080"
randomimages[66] = "https://lh3.google.com/u/0/d/1rXCk0-0lkfhx_k2Q1yOyaEd8UGUSP6dU=w1920-h1080"
randomimages[67] = "https://lh3.google.com/u/0/d/1vauHDvq6uS8Q6OwQWln7H-A-PuORc9Wd=w1920-h1080"
randomimages[68] = "https://lh3.google.com/u/0/d/1EwJ7QBaJ1RymfeqD1PY7Sdo7OANUL7yJ=w1920-h1080"
randomimages[69] = "https://lh3.google.com/u/0/d/1Xm10LpdGfH2mtlab4S55fAk-ymSh98h6=w1920-h1080"
randomimages[70] = "https://lh3.google.com/u/0/d/1aMdVEf6f0_QPhHlHyMz4iwM6ipTIZCCe=w1920-h1080"
randomimages[71] = "https://lh3.google.com/u/0/d/12-DTBWUPmY2pJ56DOSVETMWw4R9mBZ8k=w1920-h1080"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {
  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = curindex === 0 ? 1 : curindex - 1;
  } else {
    curindex = tempindex;
  }

  var img = new Image();
  img.src = randomimages[curindex];

  img.onload = function() {
    document.images.defaultimage.src = randomimages[curindex];
  };

  img.onerror = function() {
    console.error(`Failed to load image: ${randomimages[curindex]}`);

    // 대체 이미지 배열
    var placeholderImages = [
"https://i.postimg.cc/GpHZGvXP/01.jpg",
"https://i.postimg.cc/7hycFdwX/02.jpg",
"https://i.postimg.cc/xCmhFnDc/03.jpg",
"https://i.postimg.cc/vmkCzDKJ/04.jpg",
"https://i.postimg.cc/Bbcy4pv3/05.jpg",
"https://i.postimg.cc/9XGsdmYk/06.jpg",
"https://i.postimg.cc/8PN9w2yz/07.jpg",
"https://i.postimg.cc/RVd8Yg8Q/08.jpg",
"https://i.postimg.cc/DwzD3q3V/09.jpg",
"https://i.postimg.cc/6p1PWyB8/10.jpg",
"https://i.postimg.cc/CKBQzSKm/11.jpg",
"https://i.postimg.cc/hGk3m6zg/12.jpg",
"https://i.postimg.cc/85LXm4Mv/13.jpg",
"https://i.postimg.cc/KjN9dY9v/14.jpg",
"https://i.postimg.cc/KjFqqTDH/15.jpg",
"https://i.postimg.cc/zDSPLdJZ/16.jpg",
"https://i.postimg.cc/pXWcKDT9/17.jpg",
"https://i.postimg.cc/m2mXjtzm/18.jpg",
"https://i.postimg.cc/W1t9HT0T/19.jpg",
"https://i.postimg.cc/BnyhWkCD/20.jpg",
"https://i.postimg.cc/qRHjqKSv/21.jpg",
"https://i.postimg.cc/0NwV9nt4/22.jpg",
"https://i.postimg.cc/xCGgzCVy/23.jpg",
"https://i.postimg.cc/C5F7HgFy/24.jpg",
"https://i.postimg.cc/RhXRgDFW/25.jpg",
"https://i.postimg.cc/pVZqVpZP/26.jpg",
"https://i.postimg.cc/289GvMMJ/27.jpg",
"https://i.postimg.cc/m2gVPBXC/28.jpg",
"https://i.postimg.cc/htJr0MqG/29.jpg",
"https://i.postimg.cc/BndC7DqB/30.jpg",
"https://i.postimg.cc/bvk97Jrc/31.jpg",
"https://i.postimg.cc/85GmNSfF/32.jpg",
"https://i.postimg.cc/d19m0xG5/33.jpg",
"https://i.postimg.cc/J043H5qM/34.jpg",
"https://i.postimg.cc/T17VV57m/35.jpg",
"https://i.postimg.cc/FFDV5wrR/36.jpg",
"https://i.postimg.cc/MHk8p8LR/0001.jpg",
"https://i.postimg.cc/c1YS5rKc/0002.jpg",
"https://i.postimg.cc/SRWbXv0P/0003.jpg",
"https://i.postimg.cc/br04YSkc/0004.jpg",
"https://i.postimg.cc/6qxDNf7f/0005.jpg",
"https://i.postimg.cc/pXHHNRzM/0006.jpg",
"https://i.postimg.cc/nzD65PLL/0007.jpg",
"https://i.postimg.cc/52PdFzGf/0008.jpg",
"https://i.postimg.cc/CMb3sXtP/0009.jpg",
"https://i.postimg.cc/5N3DZvf8/0010.jpg",
"https://i.postimg.cc/NfYWJbvg/0011.jpg",
"https://i.postimg.cc/fRR1ZLbp/0012.jpg",
"https://i.postimg.cc/QdYwM39t/0013.jpg",
"https://i.postimg.cc/Bv8yLVHC/0014.jpg",
"https://i.postimg.cc/xdWZK3PV/0015.jpg",
"https://i.postimg.cc/tTWMDnrZ/0016.jpg",
"https://i.postimg.cc/J08dF7gT/0017.jpg",
"https://i.postimg.cc/0jCH1R19/0018.jpg",
"https://i.postimg.cc/44v09t7j/0019.jpg",
"https://i.postimg.cc/gkYTqJ3j/0020.jpg",
"https://i.postimg.cc/zX0Pdrkj/0021.jpg",
"https://i.postimg.cc/6pqbgmjN/0022.jpg",
"https://i.postimg.cc/JzFYL5vH/0023.jpg",
"https://i.postimg.cc/Dzbjyb3j/0024.jpg",
"https://i.postimg.cc/pTb09X22/0025.jpg",
"https://i.postimg.cc/MT7912T1/0026.jpg",
"https://i.postimg.cc/4ywwF6pd/0027.jpg",
"https://i.postimg.cc/d3J4BHkp/0028.jpg",
"https://i.postimg.cc/SQGZshHh/0029.jpg",
"https://i.postimg.cc/sDDTGLRZ/0030.jpg",
"https://i.postimg.cc/fT2Bcvwq/0031.jpg",
"https://i.postimg.cc/vZ4X36TY/0032.jpg",
"https://i.postimg.cc/pL3C7X5D/0033.jpg",
"https://i.postimg.cc/JhJxWVjS/0034.jpg",
"https://i.postimg.cc/rmN9K1nJ/0035.jpg",
"https://i.postimg.cc/SshrSTrR/0036.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);