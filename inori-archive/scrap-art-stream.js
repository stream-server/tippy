var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1u0MZHk9QjDYuYhfINXXREFyXbhC7XhTs=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/18rs2pK8K5MyetCtXZfnzqv8w-4ye5jDl=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1QFLbLu9Iq1mUWuQcaOm0FKlIxbWudZJV=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1xCxZseLPzHKrr68a8HgjXCPeLsW69pPm=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1EOJRIambTyf1nh7tijoHPaswAwF8EdKS=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1bSNuxbF4r8rQvYlUnhRIkwNXaqUn0QMj=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1QEMG7fm7qVsIibQk4JTuHONrB7vwduxt=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1BBpC9hlEiB-2upEFRQGX_hPJ50RtrYA2=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1Meq6Nf002lI5YULS8hWr82e9ky3ZsGBg=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1rfy9bzh32N3rPWvE-tC0YYQPs_zO-LIn=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/110ratS0_KZdvC9fyg-U7Yc-P1nnUphl0=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1x1a0JrX6-ukpDm-i9DAtkzHDdM5ynWb9=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1D1fl5g-Zf-923hRiVBfc2QRTj-lDIUwo=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/14WMHItL8Y9siOZG4wMlhq6BZYhzbm7Wy=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1lPpOghBYepeXH6MMI1ZjbMon_kVkZ9PO=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1tsbZI2Cijb6pzZh-SpBrMIDyevTE9FBx=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1NQm0Lx-f2CQ-s9hiqx8N55p7-EXvE8uG=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1IhZBhylaiFTPnW3BddRHn4Pa2vCfeIuF=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1Ax-0NsbopVj0-gps9GXBnrInu1Kp9EBq=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1ek0IpXX_Lab2EGGViXdhvReln-3dqwwd=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1sWHUVt12g5YoywYNiXwcRpm4l6kSymVM=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/14qFFbfkmuJEf2RoCdBPLXBbLUxn9m5rB=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/1CUyxsIa-TmI3CBCHKnLUt1xRoirKksMF=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1fIAdKuPFlvppzehB6bji7QUPH_FsRZeY=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1SP_6EEOIoOfFcitTahIDGY34lQhhFTEU=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1oJTno0N5qPjPbU5-1M7mL75wqk0wAd0S=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/11XC4PwIM0mafDME8mXtZxRphiUF8JEob=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1i82RsPUc8msZwTqs9UeOnTtExJhqPQNt=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1WDNFaR9UmR5exJ0L1yukbX2BKHdMr4JZ=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/13lGJdj20I-Yh_hGV58xNDzgLZgMxKD1s=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1KOvorgw3JZGbDmS7iRMGnkV75A6rG8zm=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1VdyJByer9LXWuR6aIbHD2_siuwV8CNK2=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1xoNuEIcpSA2rQmyB3rAoUHZPdV3XZOw4=w1920-h1080"

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