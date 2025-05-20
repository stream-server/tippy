var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1vfv_LKHiR-6LTGdV2-Ggorzn8K2vmrB0"
randomimages[1] = "https://lh3.google.com/u/0/d/1YBDfn4-iPvsrGn0DmQUv2JlnzdvnBYza"
randomimages[2] = "https://lh3.google.com/u/0/d/1zK1GmYbxc9hKzNhL-zi1A9drmeJxNbPY"
randomimages[3] = "https://lh3.google.com/u/0/d/1b1mhulHCBb8Jt_d6GCA6FVUoemXj7CiN"
randomimages[4] = "https://lh3.google.com/u/0/d/1y3PdW2HDONh89l98B9pXPGBtkI8yJtqb"
randomimages[5] = "https://lh3.google.com/u/0/d/1nIFg7Jkvpg1SAPohxYsqo7fxdqd12_dY"
randomimages[6] = "https://lh3.google.com/u/0/d/1qtKI4SBJInz7XhfBNuvqeFpA6MuB7yuK"
randomimages[7] = "https://lh3.google.com/u/0/d/1KZgfIHjEAy3asAp0r_AFqSraNJ_lsSsX"
randomimages[8] = "https://lh3.google.com/u/0/d/1uCTB-9JejVezsjMgjDIvlCAatUemnr1k"
randomimages[9] = "https://lh3.google.com/u/0/d/1rSEr3BOOMz4JVf7KK1aOcEWQv4nnw6Q_"
randomimages[10] = "https://lh3.google.com/u/0/d/12WCFEYrTTzk_h0U1dGtVnLV6fh9iKsNS"
randomimages[11] = "https://lh3.google.com/u/0/d/1BLlf99ZI4R5zsHA9PZ-9xQ9bioqwGM36"
randomimages[12] = "https://lh3.google.com/u/0/d/1Oo02gqCw5GZ5ltEc0vZGBWN33pyACr8f"
randomimages[13] = "https://lh3.google.com/u/0/d/1fEZOywf5Y_7m1BFn5sqyQRRcFAIpe-rB"
randomimages[14] = "https://lh3.google.com/u/0/d/1wTW_V3IhpMBm7Rk0hQ8iFVYxOeXLPGdf"
randomimages[15] = "https://lh3.google.com/u/0/d/14_FnjoX22XgQu7sLp23c4e0WjFgRomjm"
randomimages[16] = "https://lh3.google.com/u/0/d/1xcGAtcISOuWjg4GLRUOqOY9mu1GEoNRo"
randomimages[17] = "https://lh3.google.com/u/0/d/1GvLVm6KniGmemo0v5m9XrVAa8I-Wm4J7"
randomimages[18] = "https://lh3.google.com/u/0/d/1ljW6i_kAJnZ4RKo1ZR44p6Nz6SvjERvl"
randomimages[19] = "https://lh3.google.com/u/0/d/1EPz579fLFlVAwdYnUFZbfHsoymlFyki7"
randomimages[20] = "https://lh3.google.com/u/0/d/1DjQkO4MGtt_9kt-9T767XuamI9TWHdOk"
randomimages[21] = "https://lh3.google.com/u/0/d/11VSMHblefzddhE1kCUSsoCnQAPGTvjL0"
randomimages[22] = "https://lh3.google.com/u/0/d/1joYLlY-c_9_uzUL5U8cQE0CG8SRc1i7e"
randomimages[23] = "https://lh3.google.com/u/0/d/1fMuJr0bCXvJkb8MCMtTNLJ0lCelaouxG"
randomimages[24] = "https://lh3.google.com/u/0/d/1pqH44paOwjVwkrLhQtd8yfyCexVCyPut"
randomimages[25] = "https://lh3.google.com/u/0/d/1crGiUQKYb1cgfKU7NfqSbVjiL1-EVOiZ"
randomimages[26] = "https://lh3.google.com/u/0/d/1Ola6n21SkzNBJCBCVHL7MZzO-AVGBwC0"
randomimages[27] = "https://lh3.google.com/u/0/d/1DIvMAOLPyR6DGp0iC2FH5sHZn5PXlJKP"
randomimages[28] = "https://lh3.google.com/u/0/d/1a22B-ecG2R2BLqcNDuH5zUX_pidtqrSa"
randomimages[29] = "https://lh3.google.com/u/0/d/1zAoK4kRdlx2FcVgHqwLXA_9ctnxDby24"
randomimages[30] = "https://lh3.google.com/u/0/d/1YEgjYIbmn4KH9xQdCGrLG8QMImOqH22W"
randomimages[31] = "https://lh3.google.com/u/0/d/1a4HO48K8jnGIZBh_mSLEeHfxLKbqjspx"
randomimages[32] = "https://lh3.google.com/u/0/d/1dNhAKeCNzkhic-Nix0qAN6daUDETYa4C"
randomimages[33] = "https://lh3.google.com/u/0/d/1ae5dkiSvWDjIHRg9mkGM490AWZ6jGm6O"
randomimages[34] = "https://lh3.google.com/u/0/d/1dr7im3mCWbUh9GbXsbo6DS3--Nj5EcXq"
randomimages[35] = "https://lh3.google.com/u/0/d/1D_BP2M2KvRKwRq5Y53Rz7eAZv8KgQTix"
randomimages[36] = "https://lh3.google.com/u/0/d/14iOYrrML8eg3nnJN2YdpbMt6CN950gwK"
randomimages[37] = "https://lh3.google.com/u/0/d/1NuEXF0ZJvGGhNaz9gYzxT5rPeOy3QE6r"
randomimages[38] = "https://lh3.google.com/u/0/d/12ToyHcz-LjcSydZrCGW5hVwiUCEvXDWr"
randomimages[39] = "https://lh3.google.com/u/0/d/1d6LmAjPqkb6ZkVi_G5BdYi_amd0IYDoh"
randomimages[40] = "https://lh3.google.com/u/0/d/1AQkHG1MXeBUKokQbW6TXKZ-tHNt5jjgm"
randomimages[41] = "https://lh3.google.com/u/0/d/18yDQSkA1j4vbG_o8Uzb7SzHbC5eoFAsN"
randomimages[42] = "https://lh3.google.com/u/0/d/1SvCNPoxmNBrJon-mQ0Qemq-eoNzU7S1t"
randomimages[43] = "https://lh3.google.com/u/0/d/145m8HDW6fgkoJNAbpf8zQok-QtG4gard"
randomimages[44] = "https://lh3.google.com/u/0/d/1-zpF61AKzH2c5ePcqaxVTVMzOXighTDs"
randomimages[45] = "https://lh3.google.com/u/0/d/1RDXiFsHKOj_a777_0RUmlXsKV4BCrN1n"
randomimages[46] = "https://lh3.google.com/u/0/d/1Oq3s56G6PLcGUbYWyjyvJhpKQgBFZ6LI"
randomimages[47] = "https://lh3.google.com/u/0/d/1FZUytAPemjSCmRgkaOLxRGeBKgQRAoHp"
randomimages[48] = "https://lh3.google.com/u/0/d/1ghruqfRDnbZ7fcNcgS1F85UOMI8ADDs4"
randomimages[49] = "https://lh3.google.com/u/0/d/1z-xwk-K2UW7tAkycorht8qAV0RFWaS5o"
randomimages[50] = "https://lh3.google.com/u/0/d/1yf6JJ3dwWONbexsXIwKNr1LDSNYZ3yzE"
randomimages[51] = "https://lh3.google.com/u/0/d/1O0E23xjtC6LlI-iqNsWDcDN_XTYZqS5Y"
randomimages[52] = "https://lh3.google.com/u/0/d/1x6U9DC59aT-ekK4QYUcFlCJoKOeFPkVk"
randomimages[53] = "https://lh3.google.com/u/0/d/1CTk-c8e-HgAQ4DjgM25oMixe-ZP_3S7K"
randomimages[54] = "https://lh3.google.com/u/0/d/16cCyVRXlV6p1ayEMvDXUc8uQ1pmpD9ij"
randomimages[55] = "https://lh3.google.com/u/0/d/1QZenrCTagub7-06X9ac8t7ZcY_KzLxE_"
randomimages[56] = "https://lh3.google.com/u/0/d/1hR3uICuTrzj7BqirG9zGRx5k_IOFsAlg"
randomimages[57] = "https://lh3.google.com/u/0/d/1ZGYMsbyQFFlQW5ZBAkYEMiFmwQQiDiw2"
randomimages[58] = "https://lh3.google.com/u/0/d/1cSXmvKQSP2F0ZMOQuXVh0kFATkUqI-rh"
randomimages[59] = "https://lh3.google.com/u/0/d/1jKy2eeX4qgb4oyF2dUcSvrr_0SWpRjbW"
randomimages[60] = "https://lh3.google.com/u/0/d/1GicRBHlBF36G0izIRa5qPFFUBfJxC4V4"
randomimages[61] = "https://lh3.google.com/u/0/d/1ydhLBsEmSpU1-a-w0A7F-TIgngb9FkoC"
randomimages[62] = "https://lh3.google.com/u/0/d/1lDboIWVQSmAPX-6UxTvvvAQ_xLlstyZP"
randomimages[63] = "https://lh3.google.com/u/0/d/1WgMvXAGV_IxaHyTuNsyR_i_9G0bQl9sq"
randomimages[64] = "https://lh3.google.com/u/0/d/1lOeYkw5yB1fxI2LFYfQuGm2ujnA_5Otq"
randomimages[65] = "https://lh3.google.com/u/0/d/1GqCPzOPfag0nyGhsXDKAw-jUCnOuCN2n"
randomimages[66] = "https://lh3.google.com/u/0/d/1a1nV2eizPuMZYS7VpH1IBM4_QsQqSrTB"
randomimages[67] = "https://lh3.google.com/u/0/d/19srOn99SvDBTbVQZL62gOYyAweckw4EZ"
randomimages[68] = "https://lh3.google.com/u/0/d/1qvzokfJSb2iYI27ROiaiZEKsy8Dk6GvL"
randomimages[69] = "https://lh3.google.com/u/0/d/1n7XHhDn0OtxUVaO_HNIAoXCFV96FPgra"
randomimages[70] = "https://lh3.google.com/u/0/d/1FCWu66ghGWODuMBnRFJvfT3wkuTKmSoF"
randomimages[71] = "https://lh3.google.com/u/0/d/1ATJ5RaeudZuBxvBNbT0OwrtYPVK63gGX"
randomimages[72] = "https://lh3.google.com/u/0/d/1H_FKosDMixTzD7aiaY1IQU23eqUA5ZjX"
randomimages[73] = "https://lh3.google.com/u/0/d/106aWou06JQnsz6nuOVJg49peGaUvy9Ya"
randomimages[74] = "https://lh3.google.com/u/0/d/18UeKVPhObA6Sw0RqfICF85lpHDCHRO4v"
randomimages[75] = "https://lh3.google.com/u/0/d/1zYr-FkCDS8o92mu_3_0tQ-rZH9sxgn6j"
randomimages[76] = "https://lh3.google.com/u/0/d/1f9DjykNxS75PoLHMdFYr6ZNTc6uDQMZZ"
randomimages[77] = "https://lh3.google.com/u/0/d/1ahvmBdQVGkW77alf5_HOqM7yJvV5YYda"
randomimages[78] = "https://lh3.google.com/u/0/d/18HlzgJzV48ugw0Q1GohYbPMNWP_OIO4H"
randomimages[79] = "https://lh3.google.com/u/0/d/1tBiU88BOPe0GrSrgbX6hcdQqa-U7hgJm"

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
"https://i.postimg.cc/wBKHr3yd/01.jpg",
"https://i.postimg.cc/0yKPZ7Nf/02.jpg",
"https://i.postimg.cc/yYb7FL7x/03.jpg",
"https://i.postimg.cc/VL6YrxQ2/04.jpg",
"https://i.postimg.cc/YS1kBkYL/05.jpg",
"https://i.postimg.cc/85NG13mK/06.jpg",
"https://i.postimg.cc/gJsWrDMY/07.jpg",
"https://i.postimg.cc/sx2RWh85/08.jpg",
"https://i.postimg.cc/8cngmCQ9/09.jpg",
"https://i.postimg.cc/8kyGSZJ4/10.jpg",
"https://i.postimg.cc/QxH3xcc3/11.jpg",
"https://i.postimg.cc/NfSwyLxr/12.jpg",
"https://i.postimg.cc/L8PFjRyQ/13.jpg",
"https://i.postimg.cc/q7dVLYSJ/14.jpg",
"https://i.postimg.cc/PqzGFynm/15.jpg",
"https://i.postimg.cc/PxXGGDd0/16.jpg",
"https://i.postimg.cc/85t2TC5c/17.jpg",
"https://i.postimg.cc/Znn1nhBc/18.jpg",
"https://i.postimg.cc/J0FSBdjW/19.jpg",
"https://i.postimg.cc/G3gWN9VS/20.jpg",
"https://i.postimg.cc/28qsfrfj/21.jpg",
"https://i.postimg.cc/9FvvmKWd/22.jpg",
"https://i.postimg.cc/sg7bvmXt/23.jpg",
"https://i.postimg.cc/GpRVYDT9/24.jpg",
"https://i.postimg.cc/6QhShQCc/25.jpg",
"https://i.postimg.cc/0Q24Xqfs/26.jpg",
"https://i.postimg.cc/vBqNpSq6/27.jpg",
"https://i.postimg.cc/kG2p9FzY/28.jpg",
"https://i.postimg.cc/8cxnCfVp/29.jpg",
"https://i.postimg.cc/y6GGjt3M/30.jpg",
"https://i.postimg.cc/8Pr004hj/31.jpg",
"https://i.postimg.cc/CxTQT8NJ/32.jpg",
"https://i.postimg.cc/T3VHRPNx/33.jpg",
"https://i.postimg.cc/Dz7pmKRX/34.jpg",
"https://i.postimg.cc/LsvC1bM0/35.jpg",
"https://i.postimg.cc/HxxS49YW/36.jpg",
"https://i.postimg.cc/rmPfhRs1/37.jpg",
"https://i.postimg.cc/kGRfLMRk/38.jpg",
"https://i.postimg.cc/LhdNSdzh/39.jpg",
"https://i.postimg.cc/44rgymPH/40.jpg",
"https://i.postimg.cc/Gt9zVBKx/0001.jpg",
"https://i.postimg.cc/dQS5dBQH/0002.jpg",
"https://i.postimg.cc/1XTMQ9Yh/0003.jpg",
"https://i.postimg.cc/1tvJv0Gz/0004.jpg",
"https://i.postimg.cc/BQLMCKXq/0005.jpg",
"https://i.postimg.cc/gkC4t2Z3/0006.jpg",
"https://i.postimg.cc/nhq2yf4g/0007.jpg",
"https://i.postimg.cc/7LD9DtX6/0008.jpg",
"https://i.postimg.cc/d0BB0RS9/0009.jpg",
"https://i.postimg.cc/RFpL7Sm6/0010.jpg",
"https://i.postimg.cc/85zbfF2g/0011.jpg",
"https://i.postimg.cc/KjKrQ6c9/0012.jpg",
"https://i.postimg.cc/C5WC2czw/0013.jpg",
"https://i.postimg.cc/WpK7t1Sx/0014.jpg",
"https://i.postimg.cc/SNMf9bvR/0015.jpg",
"https://i.postimg.cc/131cc7kH/0016.jpg",
"https://i.postimg.cc/wj55WcHd/0017.jpg",
"https://i.postimg.cc/pd2f3hX5/0018.jpg",
"https://i.postimg.cc/QM0QD8H4/0019.jpg",
"https://i.postimg.cc/J0BZjjKv/0020.jpg",
"https://i.postimg.cc/rmsSFB48/0021.jpg",
"https://i.postimg.cc/76RSCK1S/0022.jpg",
"https://i.postimg.cc/14h6B4jt/0023.jpg",
"https://i.postimg.cc/BZ8Vmyz9/0024.jpg",
"https://i.postimg.cc/CMW6X7yZ/0025.jpg",
"https://i.postimg.cc/X7dDb53s/0026.jpg",
"https://i.postimg.cc/L8SQ6s82/0027.jpg",
"https://i.postimg.cc/6phj7N8R/0028.jpg",
"https://i.postimg.cc/Gp7XQJJm/0029.jpg",
"https://i.postimg.cc/QMx61n7z/0030.jpg",
"https://i.postimg.cc/W3dXfFX6/0031.jpg",
"https://i.postimg.cc/NMZphsnh/0032.jpg",
"https://i.postimg.cc/QNWfQ7Bj/0033.jpg",
"https://i.postimg.cc/XqFxnMMr/0034.jpg",
"https://i.postimg.cc/VLQDDNMn/0035.jpg",
"https://i.postimg.cc/Yq68VwfV/0036.jpg",
"https://i.postimg.cc/VNVFMsmS/0037.jpg",
"https://i.postimg.cc/RZvGxbg0/0038.jpg",
"https://i.postimg.cc/cLThxMzB/0039.jpg",
"https://i.postimg.cc/jj5XLn00/0040.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);