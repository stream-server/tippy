var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1VQrulA64MaI7pqtweFNrSkHYTwNPtvTI=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1LR7rFolx-XDlaVmDQFPDQLzBe3xzvefq=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1TcoMQ66stphsk3nz4H5PotK21OKkz3Cl=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1z1hzY-Gr0nEUXv72dt0zwiABAflI4MAP=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/11k67J6I2-KG9NtQqCG0dkVYkCG5AG3uB=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/14gXWv28jO7PRtwGWg5qvDQp3RoI_1Jmw=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1C5Mq5ESuRPt9ZmvYIUUpA-ll83-YbETe=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1l8lk9Dq1uIaecqXwduLoyJ5uM5IzqzTg=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1eRUfRQvTD0p9GUbcrMwPRazIMYj6eBDS=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1ZV2VhsQowuweKJ02kFQ5PIMgffuNlDNv=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1RhfTXpQoQ7WXmvWQ1O1p3tC8iW6ejcg-=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1OuXImyHMvw--iiU5sYhKh61-zZLdZCUp=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1QN2afpddEtoqkXb5yOvTJqTeC-YbTncZ=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/14qdJI1rhlgGu_J-sjglPkT3LYVDo2u8P=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1fbv3wXulx4o53z7VTLJVsvck0lUBDKr1=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/175mBnPmOHt9ssQrO4oCz84lRpWgH7Mcf=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1NnD535ATBgRHhcWRaCQKdv2ER6xZtAhy=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1rLdYPZ6lgzjPE_c1bKzNcWs8j_5IWm-Y=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/1EE7AlX_blsFW3jbJM08T5apLypeFICGj=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1fEXiTyBAgne7zxelHM1eB4auiPC98nGG=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1RToPhwKw8d3ZEW5xSwZ_-g-uu2EJWAr2=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1leT8iPmLumoLjMwkmnXaF1OxP5Yl-yiD=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/15glknDLlpOrOjxD9ISYqOuc2Goe8kDsw=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/1rkQKoT66cjzZdDO-PAPmQEK9l7lJzGWu=w1920-h1080"

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
"https://i.postimg.cc/NFcfyDvF/01.jpg",
"https://i.postimg.cc/j24qyfRX/02.jpg",
"https://i.postimg.cc/xjv1wwLz/03.jpg",
"https://i.postimg.cc/9FcQCLBN/04.jpg",
"https://i.postimg.cc/kXwX4W1M/05.jpg",
"https://i.postimg.cc/KY3ZJwZ4/06.jpg",
"https://i.postimg.cc/XYJNyXmf/07.jpg",
"https://i.postimg.cc/Jz2r3MC9/08.jpg",
"https://i.postimg.cc/FRthqpRp/09.jpg",
"https://i.postimg.cc/MTyz8BfS/10.jpg",
"https://i.postimg.cc/prRRVdKn/11.jpg",
"https://i.postimg.cc/x85YXSPp/12.jpg",
"https://i.postimg.cc/ryNqnSLG/13.jpg",
"https://i.postimg.cc/Pr6ThTJP/14.jpg",
"https://i.postimg.cc/XYmWGLwW/15.jpg",
"https://i.postimg.cc/JzGmzvHK/16.jpg",
"https://i.postimg.cc/63NNzQj1/17.jpg",
"https://i.postimg.cc/1zFQpFHq/18.jpg",
"https://i.postimg.cc/76MrRyjP/19.jpg",
"https://i.postimg.cc/bryfcBjx/20.jpg",
"https://i.postimg.cc/3Nt5KFKP/21.jpg",
"https://i.postimg.cc/VsgcBmjD/22.jpg",
"https://i.postimg.cc/YqSBdZRk/23.jpg",
"https://i.postimg.cc/ncwbg2Sm/24.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);