var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1UoD_F3--iks9RJpjd4CS3ceXlxJGIviQ"
randomimages[1] = "https://lh3.google.com/u/0/d/10RzKpP_wvLxXSvVRSXXoswz5P-hJczR1"
randomimages[2] = "https://lh3.google.com/u/0/d/1txPN3FC_uP3j3kFH52vjDADsmb2JvuAB"
randomimages[3] = "https://lh3.google.com/u/0/d/1Az53AguA5FZk3wMdA_ylf-E8NcVIEo2v"
randomimages[4] = "https://lh3.google.com/u/0/d/1xGLMpXWeZ-ou-fGRQM3MaQo6r8cwJ3TC"
randomimages[5] = "https://lh3.google.com/u/0/d/1rhcq2Aw7L7kDxwWBSA0dYFQlfkCHkKXv"
randomimages[6] = "https://lh3.google.com/u/0/d/1aA8lY-9eRNDE8OOjPuUw7d671ISWVNRi"
randomimages[7] = "https://lh3.google.com/u/0/d/18EZ9t0QcyPewsjD-82RRPSrhuOdqyy0V"
randomimages[8] = "https://lh3.google.com/u/0/d/1W1F2ksiroNUQ6bwPRUIT8jqujUwY0i1H"
randomimages[9] = "https://lh3.google.com/u/0/d/1cXomApISzfSnWeIoT7ZdicF4AW0lr5ed"
randomimages[10] = "https://lh3.google.com/u/0/d/1r_-h1yNvfh1evhb5--zHjT4L0lJghcNp"
randomimages[11] = "https://lh3.google.com/u/0/d/1UOc0b6EGYjkqloQicbLpBMYGzesy4e3_"
randomimages[12] = "https://lh3.google.com/u/0/d/1JYC5fiTX9HTlLHpX4J5weSmHSMm8U8MS"
randomimages[13] = "https://lh3.google.com/u/0/d/19xWbZi94j8Pw2iuuolFG13JrOFJTMylc"
randomimages[14] = "https://lh3.google.com/u/0/d/1_3EKWE-xv-OSKyvPSe7aYxhQp5g_Pb9U"
randomimages[15] = "https://lh3.google.com/u/0/d/1HsdecDrRwhgBqFHyqZJmIYgpj7DOMdo9"
randomimages[16] = "https://lh3.google.com/u/0/d/12HoPaHjfK0YXiK1kgDewrhDcQDE4GSe_"
randomimages[17] = "https://lh3.google.com/u/0/d/1kFxbq66HlnY6kdR6pYxIOB5kjkxFtVCf"
randomimages[18] = "https://lh3.google.com/u/0/d/1WbxH8aEvS03_QoSQOZ5fvt3I93u_NA8j"
randomimages[19] = "https://lh3.google.com/u/0/d/1RjyahNDe-woTSRykDEf-lS4zK9LluJvh"
randomimages[20] = "https://lh3.google.com/u/0/d/1fV5Rm0QWOlt-B3PWscNdqWj2LSkTxXs2"
randomimages[21] = "https://lh3.google.com/u/0/d/1wh_0gACKBMKRreArHm-4O1lyJs4aPXQO"
randomimages[22] = "https://lh3.google.com/u/0/d/1ig9zqT1VkhJxyOYXQjs6_S754ZCV48qX"
randomimages[23] = "https://lh3.google.com/u/0/d/1eSksQHI9LYWsXVz26iNFpp49SFkMNJFx"
randomimages[24] = "https://lh3.google.com/u/0/d/1XJ7lQvbaC8k8E88ZkW5Wvvwbg5wM8s7h"
randomimages[25] = "https://lh3.google.com/u/0/d/14RKIZpPf_nt9KeZ6_PlETVQ9SkqAdsdy"
randomimages[26] = "https://lh3.google.com/u/0/d/1NiU29CsFZPVXRJqbkNrqJkXn-bpl4xyT"
randomimages[27] = "https://lh3.google.com/u/0/d/1ziHtuXIXdyFFPbCPPqac-ePap3n7PTa6"
randomimages[28] = "https://lh3.google.com/u/0/d/1ezHGkSRtANc1PrGZO1ZOwr-ltqCTqHOt"
randomimages[29] = "https://lh3.google.com/u/0/d/1bTLBHwqWTk30NMEreFCLiHB8qar1fxUe"
randomimages[30] = "https://lh3.google.com/u/0/d/1arz05yK6ViieUyhvgY-j4mwboYN0mDUe"
randomimages[31] = "https://lh3.google.com/u/0/d/1K8gPDhPqUJZ4sl6uUp8BG6UKJmbSS8tR"
randomimages[32] = "https://lh3.google.com/u/0/d/16mjygCVLBpCfnNRqHPkjfQ-8_yFlH1Mw"
randomimages[33] = "https://lh3.google.com/u/0/d/1cb6uIAPG1dNLAWYrGYCqGgtyyx5lFZFl"
randomimages[34] = "https://lh3.google.com/u/0/d/1EylXiU95Z79hZ5NUufQN1Zgk2EkCVs_V"
randomimages[35] = "https://lh3.google.com/u/0/d/1rsSoCxblYWlcYUpIIwOeO9LTMO8GvuT9"
randomimages[36] = "https://lh3.google.com/u/0/d/14Ca4b3dzyO_vgn75APq5r4DIK0tAerSk"
randomimages[37] = "https://lh3.google.com/u/0/d/1h3DTvXVJ4ZcbF1BIlc4jAuT-6MYXevta"
randomimages[38] = "https://lh3.google.com/u/0/d/1VIfVke73z4csTy9idEvovWNTxPDA7Ozv"
randomimages[39] = "https://lh3.google.com/u/0/d/1LbBX9MC5FFqXut65LmEA_X2CBCRswuIA"
randomimages[40] = "https://lh3.google.com/u/0/d/1eMnAoR5LskDK7H4rIPEdRWCE6sYJwa0h"
randomimages[41] = "https://lh3.google.com/u/0/d/1RvBFZE9juhgWpA6kSaNSRg7D18Aeebz6"
randomimages[42] = "https://lh3.google.com/u/0/d/17KDNg6ufIFs56oJ_H3HSsrhkX0WgLkZN"
randomimages[43] = "https://lh3.google.com/u/0/d/1LlOqG8QCeu8z0u34KyqeQI3e4WiYWWTE"
randomimages[44] = "https://lh3.google.com/u/0/d/19QGEjnXbcpm_jMtBqNd5NcnoMBFuv8ls"
randomimages[45] = "https://lh3.google.com/u/0/d/14ZQkYE1-KoC4eMXPflJe_ME2N53_SE9x"
randomimages[46] = "https://lh3.google.com/u/0/d/1EtGooT8RK6m8Jc1gjsR2U1xdYmjTMZwd"
randomimages[47] = "https://lh3.google.com/u/0/d/1meq8sdnVhN8ZdnxK-ToCSb0rfFmdO-7W"
randomimages[48] = "https://lh3.google.com/u/0/d/1x7qrzD1CkNHjnCpxXl4GNZw4ewpZSkZZ"
randomimages[49] = "https://lh3.google.com/u/0/d/1Vy4vm2_a9adOl6q8Pwojc6gJ72LWvTSA"
randomimages[50] = "https://lh3.google.com/u/0/d/1BJNodHyxanXL6u_d94k3QxhuoKs5eV6P"
randomimages[51] = "https://lh3.google.com/u/0/d/1rVdNHaRUeZV6XKhLdI_WilobrL89R3J6"
randomimages[52] = "https://lh3.google.com/u/0/d/11rkY-2A8BIpuo4nI9kRI-rXBaUjY7g7R"
randomimages[53] = "https://lh3.google.com/u/0/d/1rHHlQkUAiRVAjiOgjQE_Z-1MKRObXuC6"
randomimages[54] = "https://lh3.google.com/u/0/d/1oUeTDHYr9GhWKhYDkH6526a7Mjij33gr"
randomimages[55] = "https://lh3.google.com/u/0/d/19Ss2y6qeY_Iqk-wlWsh7moRSV-h8W8cM"
randomimages[56] = "https://lh3.google.com/u/0/d/16t2W-V8Eek64sTaG42zCtnxwPMm7FwI0"
randomimages[57] = "https://lh3.google.com/u/0/d/1OC4UiVgBDFMI87LYOSZAGCh4J0KUPVD0"
randomimages[58] = "https://lh3.google.com/u/0/d/1R2Gj5WhlcvoC1-c0vjjapwFCC6DXfKQ6"
randomimages[59] = "https://lh3.google.com/u/0/d/1EodcKItFb0Peu7o5wBuxVoOH9SRmsPXX"
randomimages[60] = "https://lh3.google.com/u/0/d/1UvToBEbZh_NcyKWlSHlnfyg0d7T5Iz-d"
randomimages[61] = "https://lh3.google.com/u/0/d/1iCBcFETBptRGLZcCv341YmG-vjAF7G1B"
randomimages[62] = "https://lh3.google.com/u/0/d/1DdgoLgPNd7A-fxzECmMV6twYFKJ0a9Ax"
randomimages[63] = "https://lh3.google.com/u/0/d/1elChh4geMPiAqw9FfOIC44EMBTGDdWg9"
randomimages[64] = "https://lh3.google.com/u/0/d/1Yn86xSM15VuZQVyDWy0gRPIkMphHq-SH"
randomimages[65] = "https://lh3.google.com/u/0/d/1CNwFUOzkyYhdY_q4PccTbgED05EoNX-J"
randomimages[66] = "https://lh3.google.com/u/0/d/1cDZVUtfLU2gAlTkduvwppRDHqV2nH4GN"

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
"https://i.postimg.cc/VL1HTY5b/01.jpg",
"https://i.postimg.cc/9FpNHvqg/02.jpg",
"https://i.postimg.cc/KctHJKc2/03.jpg",
"https://i.postimg.cc/wjj4q0Xq/04.jpg",
"https://i.postimg.cc/pdgsBvgr/05.jpg",
"https://i.postimg.cc/W1YWhg8M/06.jpg",
"https://i.postimg.cc/VNS7MvZ2/07.jpg",
"https://i.postimg.cc/4dVBLMg5/08.jpg",
"https://i.postimg.cc/28z2G2XQ/09.jpg",
"https://i.postimg.cc/0jvZLf5q/10.jpg",
"https://i.postimg.cc/x8PgYzqN/11.jpg",
"https://i.postimg.cc/DfQx1t5f/12.jpg",
"https://i.postimg.cc/rwsgXzTz/13.jpg",
"https://i.postimg.cc/mgnjbRZj/14.jpg",
"https://i.postimg.cc/Dzbg0D8T/15.jpg",
"https://i.postimg.cc/MT2YQDQj/16.jpg",
"https://i.postimg.cc/tT3Ntx3v/17.jpg",
"https://i.postimg.cc/gjGqM24z/18.jpg",
"https://i.postimg.cc/sxKPbC0p/19.jpg",
"https://i.postimg.cc/QNqqFcxH/20.jpg",
"https://i.postimg.cc/9FFYZzr1/21.jpg",
"https://i.postimg.cc/X7Hc835W/22.jpg",
"https://i.postimg.cc/nhXKS5KD/23.jpg",
"https://i.postimg.cc/y82mMPnr/24.jpg",
"https://i.postimg.cc/N0T6BHzG/25.jpg",
"https://i.postimg.cc/k4mx4g0Q/26.jpg",
"https://i.postimg.cc/8cyWtBj4/27.jpg",
"https://i.postimg.cc/HsxbjKhh/28.jpg",
"https://i.postimg.cc/dVZdjCvR/29.jpg",
"https://i.postimg.cc/rpSrvLDK/30.jpg",
"https://i.postimg.cc/ZR4dmDNj/31.jpg",
"https://i.postimg.cc/26GBSFFY/32.jpg",
"https://i.postimg.cc/qMk8Z6bf/0001.jpg",
"https://i.postimg.cc/T31nTMvC/0002.jpg",
"https://i.postimg.cc/c4XQq12v/0003.jpg",
"https://i.postimg.cc/GmfG27cr/0004.jpg",
"https://i.postimg.cc/3wDpDXRG/0005.jpg",
"https://i.postimg.cc/KjmgVC57/0006.jpg",
"https://i.postimg.cc/TwMbjKL4/0007.jpg",
"https://i.postimg.cc/0QYwV972/0008.jpg",
"https://i.postimg.cc/7hXTyXBF/0009.jpg",
"https://i.postimg.cc/Kc5TLvZ0/0010.jpg",
"https://i.postimg.cc/qMM3GVq4/0011.jpg",
"https://i.postimg.cc/qMbCbb6n/0012.jpg",
"https://i.postimg.cc/SxnYw6cP/0013.jpg",
"https://i.postimg.cc/mgK1RPwg/0014.jpg",
"https://i.postimg.cc/0NmMN9Wd/0015.jpg",
"https://i.postimg.cc/MTScMggk/0016.jpg",
"https://i.postimg.cc/ydyDFvzD/0017.jpg",
"https://i.postimg.cc/nczXD4SL/0018.jpg",
"https://i.postimg.cc/L54nvLHN/0019.jpg",
"https://i.postimg.cc/T1khs11G/0020.jpg",
"https://i.postimg.cc/KcQKjqNV/0021.jpg",
"https://i.postimg.cc/BQVXcjRB/0022.jpg",
"https://i.postimg.cc/3x0WLKT5/0023.jpg",
"https://i.postimg.cc/W4RzCQND/0024.jpg",
"https://i.postimg.cc/bvQrh3rm/0025.jpg",
"https://i.postimg.cc/JnMn4ZBM/0026.jpg",
"https://i.postimg.cc/50gtHywv/0027.jpg",
"https://i.postimg.cc/VvNkXwRh/0028.jpg",
"https://i.postimg.cc/KjsvNWp8/0029.jpg",
"https://i.postimg.cc/zDdB8LDY/0030.jpg",
"https://i.postimg.cc/3JdwRKW4/0031.jpg",
"https://i.postimg.cc/HsRk8f7S/0032.jpg",
"https://i.postimg.cc/3xGJXnX3/0033.jpg",
"https://i.postimg.cc/JhW7PZxZ/0034.jpg",
"https://i.postimg.cc/FKgrqzCq/0035.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);