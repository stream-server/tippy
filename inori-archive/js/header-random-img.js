const images = [
'https://lh3.google.com/u/0/d/1YBDfn4-iPvsrGn0DmQUv2JlnzdvnBYza=w1920-h1080',
'https://lh3.google.com/u/0/d/1zK1GmYbxc9hKzNhL-zi1A9drmeJxNbPY=w1920-h1080',
'https://lh3.google.com/u/0/d/1b1mhulHCBb8Jt_d6GCA6FVUoemXj7CiN=w1920-h1080',
'https://lh3.google.com/u/0/d/1y3PdW2HDONh89l98B9pXPGBtkI8yJtqb=w1920-h1080',
'https://lh3.google.com/u/0/d/1nIFg7Jkvpg1SAPohxYsqo7fxdqd12_dY=w1920-h1080',
'https://lh3.google.com/u/0/d/1qtKI4SBJInz7XhfBNuvqeFpA6MuB7yuK=w1920-h1080',
'https://lh3.google.com/u/0/d/1uCTB-9JejVezsjMgjDIvlCAatUemnr1k=w1920-h1080',
'https://lh3.google.com/u/0/d/1rSEr3BOOMz4JVf7KK1aOcEWQv4nnw6Q_=w1920-h1080',
'https://lh3.google.com/u/0/d/12WCFEYrTTzk_h0U1dGtVnLV6fh9iKsNS=w1920-h1080',
'https://lh3.google.com/u/0/d/1BLlf99ZI4R5zsHA9PZ-9xQ9bioqwGM36=w1920-h1080',
'https://lh3.google.com/u/0/d/1Oo02gqCw5GZ5ltEc0vZGBWN33pyACr8f=w1920-h1080',
'https://lh3.google.com/u/0/d/1wTW_V3IhpMBm7Rk0hQ8iFVYxOeXLPGdf=w1920-h1080',
'https://lh3.google.com/u/0/d/14_FnjoX22XgQu7sLp23c4e0WjFgRomjm=w1920-h1080',
'https://lh3.google.com/u/0/d/1xcGAtcISOuWjg4GLRUOqOY9mu1GEoNRo=w1920-h1080',
'https://lh3.google.com/u/0/d/1GvLVm6KniGmemo0v5m9XrVAa8I-Wm4J7=w1920-h1080',
'https://lh3.google.com/u/0/d/1ljW6i_kAJnZ4RKo1ZR44p6Nz6SvjERvl=w1920-h1080',
'https://lh3.google.com/u/0/d/1EPz579fLFlVAwdYnUFZbfHsoymlFyki7=w1920-h1080',
'https://lh3.google.com/u/0/d/11VSMHblefzddhE1kCUSsoCnQAPGTvjL0=w1920-h1080',
'https://lh3.google.com/u/0/d/1joYLlY-c_9_uzUL5U8cQE0CG8SRc1i7e=w1920-h1080',
'https://lh3.google.com/u/0/d/1fMuJr0bCXvJkb8MCMtTNLJ0lCelaouxG=w1920-h1080',
'https://lh3.google.com/u/0/d/1pqH44paOwjVwkrLhQtd8yfyCexVCyPut=w1920-h1080',
'https://lh3.google.com/u/0/d/1crGiUQKYb1cgfKU7NfqSbVjiL1-EVOiZ=w1920-h1080',
'https://lh3.google.com/u/0/d/1Ola6n21SkzNBJCBCVHL7MZzO-AVGBwC0=w1920-h1080',
'https://lh3.google.com/u/0/d/1DIvMAOLPyR6DGp0iC2FH5sHZn5PXlJKP=w1920-h1080',
'https://lh3.google.com/u/0/d/1a22B-ecG2R2BLqcNDuH5zUX_pidtqrSa=w1920-h1080',
'https://lh3.google.com/u/0/d/1zAoK4kRdlx2FcVgHqwLXA_9ctnxDby24=w1920-h1080',
'https://lh3.google.com/u/0/d/1YEgjYIbmn4KH9xQdCGrLG8QMImOqH22W=w1920-h1080',
'https://lh3.google.com/u/0/d/1a4HO48K8jnGIZBh_mSLEeHfxLKbqjspx=w1920-h1080',
'https://lh3.google.com/u/0/d/1AQkHG1MXeBUKokQbW6TXKZ-tHNt5jjgm=w1920-h1080',
'https://lh3.google.com/u/0/d/18yDQSkA1j4vbG_o8Uzb7SzHbC5eoFAsN=w1920-h1080',
'https://lh3.google.com/u/0/d/1SvCNPoxmNBrJon-mQ0Qemq-eoNzU7S1t=w1920-h1080',
'https://lh3.google.com/u/0/d/145m8HDW6fgkoJNAbpf8zQok-QtG4gard=w1920-h1080',
'https://lh3.google.com/u/0/d/1-zpF61AKzH2c5ePcqaxVTVMzOXighTDs=w1920-h1080',
'https://lh3.google.com/u/0/d/1RDXiFsHKOj_a777_0RUmlXsKV4BCrN1n=w1920-h1080',
'https://lh3.google.com/u/0/d/1Oq3s56G6PLcGUbYWyjyvJhpKQgBFZ6LI=w1920-h1080',
'https://lh3.google.com/u/0/d/1FZUytAPemjSCmRgkaOLxRGeBKgQRAoHp=w1920-h1080',
'https://lh3.google.com/u/0/d/1ghruqfRDnbZ7fcNcgS1F85UOMI8ADDs4=w1920-h1080',
'https://lh3.google.com/u/0/d/1z-xwk-K2UW7tAkycorht8qAV0RFWaS5o=w1920-h1080',
'https://lh3.google.com/u/0/d/1yf6JJ3dwWONbexsXIwKNr1LDSNYZ3yzE=w1920-h1080',
'https://lh3.google.com/u/0/d/1O0E23xjtC6LlI-iqNsWDcDN_XTYZqS5Y=w1920-h1080',
'https://lh3.google.com/u/0/d/1x6U9DC59aT-ekK4QYUcFlCJoKOeFPkVk=w1920-h1080',
'https://lh3.google.com/u/0/d/1CTk-c8e-HgAQ4DjgM25oMixe-ZP_3S7K=w1920-h1080',
'https://lh3.google.com/u/0/d/16cCyVRXlV6p1ayEMvDXUc8uQ1pmpD9ij=w1920-h1080',
'https://lh3.google.com/u/0/d/1QZenrCTagub7-06X9ac8t7ZcY_KzLxE_=w1920-h1080',
'https://lh3.google.com/u/0/d/1hR3uICuTrzj7BqirG9zGRx5k_IOFsAlg=w1920-h1080',
'https://lh3.google.com/u/0/d/1ZGYMsbyQFFlQW5ZBAkYEMiFmwQQiDiw2=w1920-h1080',
'https://lh3.google.com/u/0/d/1cSXmvKQSP2F0ZMOQuXVh0kFATkUqI-rh=w1920-h1080',
'https://lh3.google.com/u/0/d/1jKy2eeX4qgb4oyF2dUcSvrr_0SWpRjbW=w1920-h1080',
'https://lh3.google.com/u/0/d/1GicRBHlBF36G0izIRa5qPFFUBfJxC4V4=w1920-h1080',
'https://lh3.google.com/u/0/d/1ydhLBsEmSpU1-a-w0A7F-TIgngb9FkoC=w1920-h1080',
'https://lh3.google.com/u/0/d/1lDboIWVQSmAPX-6UxTvvvAQ_xLlstyZP=w1920-h1080',
'https://lh3.google.com/u/0/d/1WgMvXAGV_IxaHyTuNsyR_i_9G0bQl9sq=w1920-h1080',
'https://lh3.google.com/u/0/d/1lOeYkw5yB1fxI2LFYfQuGm2ujnA_5Otq=w1920-h1080',
'https://lh3.google.com/u/0/d/1GqCPzOPfag0nyGhsXDKAw-jUCnOuCN2n=w1920-h1080',
'https://lh3.google.com/u/0/d/1a1nV2eizPuMZYS7VpH1IBM4_QsQqSrTB=w1920-h1080',
'https://lh3.google.com/u/0/d/19srOn99SvDBTbVQZL62gOYyAweckw4EZ=w1920-h1080',
'https://lh3.google.com/u/0/d/1qvzokfJSb2iYI27ROiaiZEKsy8Dk6GvL=w1920-h1080',
'https://lh3.google.com/u/0/d/1n7XHhDn0OtxUVaO_HNIAoXCFV96FPgra=w1920-h1080',
'https://lh3.google.com/u/0/d/1FCWu66ghGWODuMBnRFJvfT3wkuTKmSoF=w1920-h1080',
'https://lh3.google.com/u/0/d/1ATJ5RaeudZuBxvBNbT0OwrtYPVK63gGX=w1920-h1080',
'https://lh3.google.com/u/0/d/1H_FKosDMixTzD7aiaY1IQU23eqUA5ZjX=w1920-h1080',
'https://lh3.google.com/u/0/d/106aWou06JQnsz6nuOVJg49peGaUvy9Ya=w1920-h1080',
'https://lh3.google.com/u/0/d/18UeKVPhObA6Sw0RqfICF85lpHDCHRO4v=w1920-h1080',
'https://lh3.google.com/u/0/d/1zYr-FkCDS8o92mu_3_0tQ-rZH9sxgn6j=w1920-h1080',
'https://lh3.google.com/u/0/d/1f9DjykNxS75PoLHMdFYr6ZNTc6uDQMZZ=w1920-h1080',
'https://lh3.google.com/u/0/d/1ahvmBdQVGkW77alf5_HOqM7yJvV5YYda=w1920-h1080',
'https://lh3.google.com/u/0/d/18HlzgJzV48ugw0Q1GohYbPMNWP_OIO4H=w1920-h1080',
'https://lh3.google.com/u/0/d/1tBiU88BOPe0GrSrgbX6hcdQqa-U7hgJm=w1920-h1080'
];

const placeholderImages = [
'https://i.postimg.cc/0yKPZ7Nf/02.jpg',
'https://i.postimg.cc/yYb7FL7x/03.jpg',
'https://i.postimg.cc/VL6YrxQ2/04.jpg',
'https://i.postimg.cc/YS1kBkYL/05.jpg',
'https://i.postimg.cc/85NG13mK/06.jpg',
'https://i.postimg.cc/gJsWrDMY/07.jpg',
'https://i.postimg.cc/8cngmCQ9/09.jpg',
'https://i.postimg.cc/8kyGSZJ4/10.jpg',
'https://i.postimg.cc/QxH3xcc3/11.jpg',
'https://i.postimg.cc/NfSwyLxr/12.jpg',
'https://i.postimg.cc/L8PFjRyQ/13.jpg',
'https://i.postimg.cc/PqzGFynm/15.jpg',
'https://i.postimg.cc/PxXGGDd0/16.jpg',
'https://i.postimg.cc/85t2TC5c/17.jpg',
'https://i.postimg.cc/Znn1nhBc/18.jpg',
'https://i.postimg.cc/J0FSBdjW/19.jpg',
'https://i.postimg.cc/G3gWN9VS/20.jpg',
'https://i.postimg.cc/9FvvmKWd/22.jpg',
'https://i.postimg.cc/sg7bvmXt/23.jpg',
'https://i.postimg.cc/GpRVYDT9/24.jpg',
'https://i.postimg.cc/6QhShQCc/25.jpg',
'https://i.postimg.cc/0Q24Xqfs/26.jpg',
'https://i.postimg.cc/vBqNpSq6/27.jpg',
'https://i.postimg.cc/kG2p9FzY/28.jpg',
'https://i.postimg.cc/8cxnCfVp/29.jpg',
'https://i.postimg.cc/y6GGjt3M/30.jpg',
'https://i.postimg.cc/8Pr004hj/31.jpg',
'https://i.postimg.cc/CxTQT8NJ/32.jpg',
'https://i.postimg.cc/Gt9zVBKx/0001.jpg',
'https://i.postimg.cc/dQS5dBQH/0002.jpg',
'https://i.postimg.cc/1XTMQ9Yh/0003.jpg',
'https://i.postimg.cc/1tvJv0Gz/0004.jpg',
'https://i.postimg.cc/BQLMCKXq/0005.jpg',
'https://i.postimg.cc/gkC4t2Z3/0006.jpg',
'https://i.postimg.cc/nhq2yf4g/0007.jpg',
'https://i.postimg.cc/7LD9DtX6/0008.jpg',
'https://i.postimg.cc/d0BB0RS9/0009.jpg',
'https://i.postimg.cc/RFpL7Sm6/0010.jpg',
'https://i.postimg.cc/85zbfF2g/0011.jpg',
'https://i.postimg.cc/KjKrQ6c9/0012.jpg',
'https://i.postimg.cc/C5WC2czw/0013.jpg',
'https://i.postimg.cc/WpK7t1Sx/0014.jpg',
'https://i.postimg.cc/SNMf9bvR/0015.jpg',
'https://i.postimg.cc/131cc7kH/0016.jpg',
'https://i.postimg.cc/wj55WcHd/0017.jpg',
'https://i.postimg.cc/pd2f3hX5/0018.jpg',
'https://i.postimg.cc/QM0QD8H4/0019.jpg',
'https://i.postimg.cc/J0BZjjKv/0020.jpg',
'https://i.postimg.cc/rmsSFB48/0021.jpg',
'https://i.postimg.cc/76RSCK1S/0022.jpg',
'https://i.postimg.cc/14h6B4jt/0023.jpg',
'https://i.postimg.cc/BZ8Vmyz9/0024.jpg',
'https://i.postimg.cc/CMW6X7yZ/0025.jpg',
'https://i.postimg.cc/X7dDb53s/0026.jpg',
'https://i.postimg.cc/L8SQ6s82/0027.jpg',
'https://i.postimg.cc/6phj7N8R/0028.jpg',
'https://i.postimg.cc/Gp7XQJJm/0029.jpg',
'https://i.postimg.cc/QMx61n7z/0030.jpg',
'https://i.postimg.cc/W3dXfFX6/0031.jpg',
'https://i.postimg.cc/NMZphsnh/0032.jpg',
'https://i.postimg.cc/QNWfQ7Bj/0033.jpg',
'https://i.postimg.cc/XqFxnMMr/0034.jpg',
'https://i.postimg.cc/VLQDDNMn/0035.jpg',
'https://i.postimg.cc/Yq68VwfV/0036.jpg',
'https://i.postimg.cc/VNVFMsmS/0037.jpg',
'https://i.postimg.cc/RZvGxbg0/0038.jpg',
'https://i.postimg.cc/cLThxMzB/0039.jpg',
'https://i.postimg.cc/jj5XLn00/0040.jpg'
];

function randomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImageUrl = images[randomIndex];
  const header = document.querySelector('.header');

  if (randomImageUrl) {
    const img = new Image();
    img.src = randomImageUrl;

    img.onload = function() {
      header.style.backgroundImage = `url(${randomImageUrl})`;
    };

    img.onerror = function() {
      console.error(`Failed to load image: ${randomImageUrl}`);
      const placeholderIndex = Math.floor(Math.random() * placeholderImages.length);
      header.style.backgroundImage = `url(${placeholderImages[placeholderIndex]})`; // 임의의 대체 이미지 선택
    };
  } else {
    console.error("Image URL is empty");
    const placeholderIndex = Math.floor(Math.random() * placeholderImages.length);
    header.style.backgroundImage = `url(${placeholderImages[placeholderIndex]})`;
  }
}

randomImage();