const images = [
'https://lh3.google.com/u/0/d/1pH7sq6T3_sIfWpXoOf3kG3jJt_oK7srY=w1920-h1080',
'https://lh3.google.com/u/0/d/1V4hhgW1aa7MK13bQL2K8f4C3_LuUj8NJ=w1920-h1080',
'https://lh3.google.com/u/0/d/1Dp_x8sVWZUP2SCmuT4Mh-EQR3yCPxp2w=w1920-h1080',
'https://lh3.google.com/u/0/d/1Az6xB2rHOEsVOf3JKhg9m30ngPn5NPkJ=w1920-h1080',
'https://lh3.google.com/u/0/d/1yuerkKQIBcw-wGzbyqicajccDiYo83QF=w1920-h1080',
'https://lh3.google.com/u/0/d/11O7DK0NUiyyPK4qXSzXnTQU4eKmzsz4U=w1920-h1080',
'https://lh3.google.com/u/0/d/1P6kTLkUo_z_-qkG7BX8psMebJGFfZt5E=w1920-h1080',
'https://lh3.google.com/u/0/d/1_O2NUQUV0V6MSQ-d1T4PYRMUd02niOca=w1920-h1080',
'https://lh3.google.com/u/0/d/19QHkhrkWF5TV5o3MhON0aa3JoyFoNoVt=w1920-h1080',
'https://lh3.google.com/u/0/d/188Ty9tyY63eIsJhLaxUwzqvGFnRuMv17=w1920-h1080',
'https://lh3.google.com/u/0/d/1IqWcL-Lfow6UFAi3gy4agRQ-V8L69QeH=w1920-h1080',
'https://lh3.google.com/u/0/d/1_0JV4at9cht3OxRQ4CPuRH7hLEawjYvt=w1920-h1080',
'https://lh3.google.com/u/0/d/1-cbYtfOSiKjqHkpGEl9E8yFGd7hOYuRU=w1920-h1080',
'https://lh3.google.com/u/0/d/14GWVcLEryC48C0qmZKy111o19ZUz9Odl=w1920-h1080',
'https://lh3.google.com/u/0/d/1rhla6FYvZRXg40fJnzWy1Ej0ndTB9h6a=w1920-h1080',
'https://lh3.google.com/u/0/d/12v5UYLRODJHh3moApfSBpsoIdM0JMHnD=w1920-h1080',
'https://lh3.google.com/u/0/d/1O6Nazr4l34YukvFvpcC82kDmWW-sh5Ub=w1920-h1080',
'https://lh3.google.com/u/0/d/1b6rkLZpjYgLFjpo-Cdyi63z3qTkYpfTj=w1920-h1080',
'https://lh3.google.com/u/0/d/1MtX-e7AVph5Lwm2rc-UIDDlsY2-f9ie_=w1920-h1080',
'https://lh3.google.com/u/0/d/1f7m4NDSIvMaZYJPRD0_eRBUqm3UUAiY2=w1920-h1080',
'https://lh3.google.com/u/0/d/1_XOnIJewREd4bTlVmIbxdEPnBIEDjl6M=w1920-h1080',
'https://lh3.google.com/u/0/d/1T4P4Kgv9iLJDuU7eoK8Y4k5CFC8Wi9py=w1920-h1080',
'https://lh3.google.com/u/0/d/1_VaEgEhjFoQaY7whjSCeNpFp8dzkbiXr=w1920-h1080',
'https://lh3.google.com/u/0/d/1eePC1zURYCHcZQPn_ybC3f89mVcobx_b=w1920-h1080',
'https://lh3.google.com/u/0/d/1TGxkyyWIxojmMmaab3icCD0QazxiwOrL=w1920-h1080',
'https://lh3.google.com/u/0/d/1sKB0EsgqdSA5LprJHYOWg5CmfoCJf87K=w1920-h1080',
'https://lh3.google.com/u/0/d/1QKbIfAZ4oV7v-MnEJNTgE_sqVHg6eHx4=w1920-h1080',
'https://lh3.google.com/u/0/d/1Ap891UOu1QY37_jlSx2dtgZsio7YeS-q=w1920-h1080',
'https://lh3.google.com/u/0/d/1VzbFra1nRuqNXJtEaapRSo11fePBUKAD=w1920-h1080',
'https://lh3.google.com/u/0/d/113sn3m6htlDaGxZrvWzNCcsfZwq51SbR=w1920-h1080',
'https://lh3.google.com/u/0/d/1bbR88keMqjya7WdBFXW0SeEsiLJog0KB=w1920-h1080',
'https://lh3.google.com/u/0/d/1DLubQObX5Kvw9arnTaUpAWivIhMaf7f_=w1920-h1080',
'https://lh3.google.com/u/0/d/1WRwnuNm3H6L4UYLYMPfFYF855q_o89MS=w1920-h1080',
'https://lh3.google.com/u/0/d/1uJ6bCbnpsmSHgMucPEEq1leCKPTNyEL-=w1920-h1080',
'https://lh3.google.com/u/0/d/1Fl88KxSGb-uZwHQ1SjGo9hTgVuJuVoZ3=w1920-h1080',
'https://lh3.google.com/u/0/d/1iCFrtJ-iWPFCVt75kibQxPOO1kA8K4c_=w1920-h1080',
'https://lh3.google.com/u/0/d/1YRrE_bJBr96r0yl89ZCUHVyair74GXg1=w1920-h1080',
'https://lh3.google.com/u/0/d/1SRvjDe-6TgX0FHGYTDJgOoUABkEg_WKO=w1920-h1080',
'https://lh3.google.com/u/0/d/1fXwXDYeWrtvoynHQ0c0QH0QKXbULNkxz=w1920-h1080',
'https://lh3.google.com/u/0/d/1LfQSnSpk9Qvn7GdPY3xOpWmRsJrcynh4=w1920-h1080',
'https://lh3.google.com/u/0/d/1-CSOn8rMYSNjFV_I1eNJxalhWw1qqGMj=w1920-h1080',
'https://lh3.google.com/u/0/d/1ZqhhU4RnI9tr28jo-PzaRI6_V5btMC6U=w1920-h1080',
'https://lh3.google.com/u/0/d/1bZuLCS_2T_4oYO6167xv0UKceIHWKARA=w1920-h1080',
'https://lh3.google.com/u/0/d/1xXDvLCEOtLo4YUgVVPqe-ctIIYXlvA6f=w1920-h1080',
'https://lh3.google.com/u/0/d/1Zd18gcEJ8gP1UWOAlzx9d5EsWcbfZIAc=w1920-h1080',
'https://lh3.google.com/u/0/d/1C2CmN6o7GeMfVo5VAdHM4liYDUh2F4Hh=w1920-h1080',
'https://lh3.google.com/u/0/d/1xzVxb429XUqQCY8Hw_IG2BGdGWuzNj9C=w1920-h1080',
'https://lh3.google.com/u/0/d/1sgk1-uPBpf9QpRND_AWWrTkUb0o6rfxK=w1920-h1080',
'https://lh3.google.com/u/0/d/1vIUtBxQJrPQsutQfyizWA4e7Bc8xnYRz=w1920-h1080',
'https://lh3.google.com/u/0/d/129ChabKfU6fWTjtTgxuLuRUwRKoBBgQl=w1920-h1080',
'https://lh3.google.com/u/0/d/19M42X6AWatSD6-SaqAzaH0xYk1iCiR_v=w1920-h1080',
'https://lh3.google.com/u/0/d/1RRN5OPNf8apt6BxPOWJT9w2oylpguJz-=w1920-h1080',
'https://lh3.google.com/u/0/d/1LoFtexeWEtSx-B7rQZ8T0j_zPTRDri8R=w1920-h1080'
]; 

// 임의의 대체 이미지 주소
const placeholderImages = [
'https://i.postimg.cc/yNfzXg8y/0001.jpg',
'https://i.postimg.cc/KzwSw6LK/0002.jpg',
'https://i.postimg.cc/YS2HWfMS/0003.jpg',
'https://i.postimg.cc/PxPn6XLs/0004.jpg',
'https://i.postimg.cc/4yckgWbW/0005.jpg',
'https://i.postimg.cc/pV5tzdbK/0006.jpg',
'https://i.postimg.cc/65sx0Ntg/0007.jpg',
'https://i.postimg.cc/VLjQZHN6/0008.jpg',
'https://i.postimg.cc/FHNtMgfx/0009.jpg',
'https://i.postimg.cc/HLkqxY9c/0010.jpg',
'https://i.postimg.cc/L8Dd2YLF/0011.jpg',
'https://i.postimg.cc/xdpWNw6s/0012.jpg',
'https://i.postimg.cc/bw35KXfz/0013.jpg',
'https://i.postimg.cc/brcVQpkR/0014.jpg',
'https://i.postimg.cc/k4th6B64/0015.jpg',
'https://i.postimg.cc/xTPpzrCK/0016.jpg',
'https://i.postimg.cc/mksVPVWX/0017.jpg',
'https://i.postimg.cc/wxX0CKDS/0018.jpg',
'https://i.postimg.cc/gjHs8RYY/0019.jpg',
'https://i.postimg.cc/rFqQchJz/0020.jpg',
'https://i.postimg.cc/xTggdKx5/0021.jpg',
'https://i.postimg.cc/sgXmGvbr/0022.jpg',
'https://i.postimg.cc/0yBfY9qJ/0023.jpg',
'https://i.postimg.cc/jjnhvBs3/0024.jpg',
'https://i.postimg.cc/j5V41v2x/0025.jpg',
'https://i.postimg.cc/ydFyC93F/0026.jpg',
'https://i.postimg.cc/brpHyJ14/0027.jpg',
'https://i.postimg.cc/x85Gc2R8/0028.jpg',
'https://i.postimg.cc/7PnnB3k4/0029.jpg',
'https://i.postimg.cc/VLsB2JfC/0030.jpg',
'https://i.postimg.cc/3JLCh3Nb/0031.jpg',
'https://i.postimg.cc/9QrPFsqX/0032.jpg',
'https://i.postimg.cc/QdwQBSpQ/0033.jpg',
'https://i.postimg.cc/ZRh6HRs0/0034.jpg',
'https://i.postimg.cc/nLmvq7k6/0035.jpg',
'https://i.postimg.cc/DZdLMTR6/0036.jpg',
'https://i.postimg.cc/XqjdMPbb/0037.jpg',
'https://i.postimg.cc/mZj73TY2/0038.jpg',
'https://i.postimg.cc/7hK7qNHT/0039.jpg',
'https://i.postimg.cc/CLKkm97C/0040.jpg',
'https://i.postimg.cc/GhSYNzgW/0041.jpg',
'https://i.postimg.cc/vZg9d9pc/0042.jpg',
'https://i.postimg.cc/fRGdWyN5/0043.jpg',
'https://i.postimg.cc/9fy7D2X2/0044.jpg',
'https://i.postimg.cc/k49t8HDb/0045.jpg',
'https://i.postimg.cc/NM42xxrP/0046.jpg',
'https://i.postimg.cc/Y0CGDm62/0047.jpg',
'https://i.postimg.cc/j23WpdcH/0048.jpg',
'https://i.postimg.cc/05VJMcvz/0049.jpg',
'https://i.postimg.cc/rFzRSxyQ/0050.jpg',
'https://i.postimg.cc/CLtBJ5zY/0051.jpg',
'https://i.postimg.cc/rwrdHTr4/0052.jpg',
'https://i.postimg.cc/nLfsbW4P/0053.jpg'
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