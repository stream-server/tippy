var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1u0MZHk9QjDYuYhfINXXREFyXbhC7XhTs"
randomimages[1] = "https://lh3.google.com/u/0/d/18rs2pK8K5MyetCtXZfnzqv8w-4ye5jDl"
randomimages[2] = "https://lh3.google.com/u/0/d/1QFLbLu9Iq1mUWuQcaOm0FKlIxbWudZJV"
randomimages[3] = "https://lh3.google.com/u/0/d/1xCxZseLPzHKrr68a8HgjXCPeLsW69pPm"
randomimages[4] = "https://lh3.google.com/u/0/d/1EOJRIambTyf1nh7tijoHPaswAwF8EdKS"
randomimages[5] = "https://lh3.google.com/u/0/d/1bSNuxbF4r8rQvYlUnhRIkwNXaqUn0QMj"
randomimages[6] = "https://lh3.google.com/u/0/d/1QEMG7fm7qVsIibQk4JTuHONrB7vwduxt"
randomimages[7] = "https://lh3.google.com/u/0/d/1BBpC9hlEiB-2upEFRQGX_hPJ50RtrYA2"
randomimages[8] = "https://lh3.google.com/u/0/d/1Meq6Nf002lI5YULS8hWr82e9ky3ZsGBg"
randomimages[9] = "https://lh3.google.com/u/0/d/1rfy9bzh32N3rPWvE-tC0YYQPs_zO-LIn"
randomimages[10] = "https://lh3.google.com/u/0/d/110ratS0_KZdvC9fyg-U7Yc-P1nnUphl0"
randomimages[11] = "https://lh3.google.com/u/0/d/1x1a0JrX6-ukpDm-i9DAtkzHDdM5ynWb9"
randomimages[12] = "https://lh3.google.com/u/0/d/1D1fl5g-Zf-923hRiVBfc2QRTj-lDIUwo"
randomimages[13] = "https://lh3.google.com/u/0/d/14WMHItL8Y9siOZG4wMlhq6BZYhzbm7Wy"
randomimages[14] = "https://lh3.google.com/u/0/d/1lPpOghBYepeXH6MMI1ZjbMon_kVkZ9PO"
randomimages[15] = "https://lh3.google.com/u/0/d/1tsbZI2Cijb6pzZh-SpBrMIDyevTE9FBx"
randomimages[16] = "https://lh3.google.com/u/0/d/1NQm0Lx-f2CQ-s9hiqx8N55p7-EXvE8uG"
randomimages[17] = "https://lh3.google.com/u/0/d/1IhZBhylaiFTPnW3BddRHn4Pa2vCfeIuF"
randomimages[18] = "https://lh3.google.com/u/0/d/1Ax-0NsbopVj0-gps9GXBnrInu1Kp9EBq"
randomimages[19] = "https://lh3.google.com/u/0/d/1ek0IpXX_Lab2EGGViXdhvReln-3dqwwd"
randomimages[20] = "https://lh3.google.com/u/0/d/1sWHUVt12g5YoywYNiXwcRpm4l6kSymVM"
randomimages[21] = "https://lh3.google.com/u/0/d/14qFFbfkmuJEf2RoCdBPLXBbLUxn9m5rB"
randomimages[22] = "https://lh3.google.com/u/0/d/1CUyxsIa-TmI3CBCHKnLUt1xRoirKksMF"
randomimages[23] = "https://lh3.google.com/u/0/d/1fIAdKuPFlvppzehB6bji7QUPH_FsRZeY"
randomimages[24] = "https://lh3.google.com/u/0/d/1SP_6EEOIoOfFcitTahIDGY34lQhhFTEU"
randomimages[25] = "https://lh3.google.com/u/0/d/1oJTno0N5qPjPbU5-1M7mL75wqk0wAd0S"
randomimages[26] = "https://lh3.google.com/u/0/d/11XC4PwIM0mafDME8mXtZxRphiUF8JEob"
randomimages[27] = "https://lh3.google.com/u/0/d/1i82RsPUc8msZwTqs9UeOnTtExJhqPQNt"
randomimages[28] = "https://lh3.google.com/u/0/d/1WDNFaR9UmR5exJ0L1yukbX2BKHdMr4JZ"
randomimages[29] = "https://lh3.google.com/u/0/d/13lGJdj20I-Yh_hGV58xNDzgLZgMxKD1s"
randomimages[30] = "https://lh3.google.com/u/0/d/1KOvorgw3JZGbDmS7iRMGnkV75A6rG8zm"
randomimages[31] = "https://lh3.google.com/u/0/d/1VdyJByer9LXWuR6aIbHD2_siuwV8CNK2"
randomimages[32] = "https://lh3.google.com/u/0/d/1xoNuEIcpSA2rQmyB3rAoUHZPdV3XZOw4"

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
"https://i.postimg.cc/qqcCNWPN/01.jpg",
"https://i.postimg.cc/L6R1c6PL/02.jpg",
"https://i.postimg.cc/9Xy9gqDc/03.jpg",
"https://i.postimg.cc/fTK9Dn7F/04.jpg",
"https://i.postimg.cc/wjjsBf0B/05.jpg",
"https://i.postimg.cc/0yXKKYB0/06.jpg",
"https://i.postimg.cc/wBtyXtK8/07.jpg",
"https://i.postimg.cc/YSJ4bpk4/08.jpg",
"https://i.postimg.cc/zBKyQ9Xx/09.jpg",
"https://i.postimg.cc/gjpxbNxm/10.jpg",
"https://i.postimg.cc/Fzx7r3Sc/11.jpg",
"https://i.postimg.cc/XNKZkSPJ/12.jpg",
"https://i.postimg.cc/7Yx5BtvN/13.jpg",
"https://i.postimg.cc/FHz7vfHd/14.jpg",
"https://i.postimg.cc/fTBJ17DQ/15.jpg",
"https://i.postimg.cc/W1yt12d9/16.jpg",
"https://i.postimg.cc/k5tGVk87/17.jpg",
"https://i.postimg.cc/RF5FwXQK/18.jpg",
"https://i.postimg.cc/26Q5Gh2J/19.jpg",
"https://i.postimg.cc/vTGZNTKm/20.jpg",
"https://i.postimg.cc/vTXZFMRt/21.jpg",
"https://i.postimg.cc/DfcZbQW4/22.jpg",
"https://i.postimg.cc/0yz23LV7/23.jpg",
"https://i.postimg.cc/bNNv0GbC/24.jpg",
"https://i.postimg.cc/VLGkKYWY/25.jpg",
"https://i.postimg.cc/P50rk279/26.jpg",
"https://i.postimg.cc/j5bxDCth/27.jpg",
"https://i.postimg.cc/0Q08DxN1/28.jpg",
"https://i.postimg.cc/k58MMW34/29.jpg",
"https://i.postimg.cc/D0f7cDWJ/30.jpg",
"https://i.postimg.cc/vBVns4XL/31.jpg",
"https://i.postimg.cc/cJj32R7L/32.jpg",
"https://i.postimg.cc/MHJQKzFk/33.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);