const images = [
'https://lh3.google.com/u/0/d/1UoD_F3--iks9RJpjd4CS3ceXlxJGIviQ=w1920-h1080',
'https://lh3.google.com/u/0/d/10RzKpP_wvLxXSvVRSXXoswz5P-hJczR1=w1920-h1080',
'https://lh3.google.com/u/0/d/1txPN3FC_uP3j3kFH52vjDADsmb2JvuAB=w1920-h1080',
'https://lh3.google.com/u/0/d/1Az53AguA5FZk3wMdA_ylf-E8NcVIEo2v=w1920-h1080',
'https://lh3.google.com/u/0/d/1xGLMpXWeZ-ou-fGRQM3MaQo6r8cwJ3TC=w1920-h1080',
'https://lh3.google.com/u/0/d/1rhcq2Aw7L7kDxwWBSA0dYFQlfkCHkKXv=w1920-h1080',
'https://lh3.google.com/u/0/d/1aA8lY-9eRNDE8OOjPuUw7d671ISWVNRi=w1920-h1080',
'https://lh3.google.com/u/0/d/18EZ9t0QcyPewsjD-82RRPSrhuOdqyy0V=w1920-h1080',
'https://lh3.google.com/u/0/d/1W1F2ksiroNUQ6bwPRUIT8jqujUwY0i1H=w1920-h1080',
'https://lh3.google.com/u/0/d/1cXomApISzfSnWeIoT7ZdicF4AW0lr5ed=w1920-h1080',
'https://lh3.google.com/u/0/d/1r_-h1yNvfh1evhb5--zHjT4L0lJghcNp=w1920-h1080',
'https://lh3.google.com/u/0/d/1UOc0b6EGYjkqloQicbLpBMYGzesy4e3_=w1920-h1080',
'https://lh3.google.com/u/0/d/1JYC5fiTX9HTlLHpX4J5weSmHSMm8U8MS=w1920-h1080',
'https://lh3.google.com/u/0/d/19xWbZi94j8Pw2iuuolFG13JrOFJTMylc=w1920-h1080',
'https://lh3.google.com/u/0/d/1_3EKWE-xv-OSKyvPSe7aYxhQp5g_Pb9U=w1920-h1080',
'https://lh3.google.com/u/0/d/1HsdecDrRwhgBqFHyqZJmIYgpj7DOMdo9=w1920-h1080',
'https://lh3.google.com/u/0/d/12HoPaHjfK0YXiK1kgDewrhDcQDE4GSe_=w1920-h1080',
'https://lh3.google.com/u/0/d/1kFxbq66HlnY6kdR6pYxIOB5kjkxFtVCf=w1920-h1080',
'https://lh3.google.com/u/0/d/1WbxH8aEvS03_QoSQOZ5fvt3I93u_NA8j=w1920-h1080',
'https://lh3.google.com/u/0/d/1RjyahNDe-woTSRykDEf-lS4zK9LluJvh=w1920-h1080',
'https://lh3.google.com/u/0/d/1fV5Rm0QWOlt-B3PWscNdqWj2LSkTxXs2=w1920-h1080',
'https://lh3.google.com/u/0/d/1wh_0gACKBMKRreArHm-4O1lyJs4aPXQO=w1920-h1080',
'https://lh3.google.com/u/0/d/1ig9zqT1VkhJxyOYXQjs6_S754ZCV48qX=w1920-h1080',
'https://lh3.google.com/u/0/d/1eSksQHI9LYWsXVz26iNFpp49SFkMNJFx=w1920-h1080',
'https://lh3.google.com/u/0/d/1XJ7lQvbaC8k8E88ZkW5Wvvwbg5wM8s7h=w1920-h1080',
'https://lh3.google.com/u/0/d/14RKIZpPf_nt9KeZ6_PlETVQ9SkqAdsdy=w1920-h1080',
'https://lh3.google.com/u/0/d/1NiU29CsFZPVXRJqbkNrqJkXn-bpl4xyT=w1920-h1080',
'https://lh3.google.com/u/0/d/1ziHtuXIXdyFFPbCPPqac-ePap3n7PTa6=w1920-h1080',
'https://lh3.google.com/u/0/d/1ezHGkSRtANc1PrGZO1ZOwr-ltqCTqHOt=w1920-h1080',
'https://lh3.google.com/u/0/d/1bTLBHwqWTk30NMEreFCLiHB8qar1fxUe=w1920-h1080',
'https://lh3.google.com/u/0/d/1arz05yK6ViieUyhvgY-j4mwboYN0mDUe=w1920-h1080',
'https://lh3.google.com/u/0/d/1K8gPDhPqUJZ4sl6uUp8BG6UKJmbSS8tR=w1920-h1080',
]; 

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const header = document.querySelector('.header');
    header.style.backgroundImage = `url(${randomImage})`;
}

randomImage(); // 페이지 로드 시 한 번 실행