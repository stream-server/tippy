const images = [
'https://lh3.google.com/u/0/d/1UoD_F3--iks9RJpjd4CS3ceXlxJGIviQ',
'https://lh3.google.com/u/0/d/10RzKpP_wvLxXSvVRSXXoswz5P-hJczR1',
'https://lh3.google.com/u/0/d/1txPN3FC_uP3j3kFH52vjDADsmb2JvuAB',
'https://lh3.google.com/u/0/d/1Az53AguA5FZk3wMdA_ylf-E8NcVIEo2v',
'https://lh3.google.com/u/0/d/1xGLMpXWeZ-ou-fGRQM3MaQo6r8cwJ3TC',
'https://lh3.google.com/u/0/d/1rhcq2Aw7L7kDxwWBSA0dYFQlfkCHkKXv',
'https://lh3.google.com/u/0/d/1aA8lY-9eRNDE8OOjPuUw7d671ISWVNRi',
'https://lh3.google.com/u/0/d/18EZ9t0QcyPewsjD-82RRPSrhuOdqyy0V',
'https://lh3.google.com/u/0/d/1W1F2ksiroNUQ6bwPRUIT8jqujUwY0i1H',
'https://lh3.google.com/u/0/d/1cXomApISzfSnWeIoT7ZdicF4AW0lr5ed',
'https://lh3.google.com/u/0/d/1r_-h1yNvfh1evhb5--zHjT4L0lJghcNp',
'https://lh3.google.com/u/0/d/1UOc0b6EGYjkqloQicbLpBMYGzesy4e3_',
'https://lh3.google.com/u/0/d/1JYC5fiTX9HTlLHpX4J5weSmHSMm8U8MS',
'https://lh3.google.com/u/0/d/19xWbZi94j8Pw2iuuolFG13JrOFJTMylc',
'https://lh3.google.com/u/0/d/1_3EKWE-xv-OSKyvPSe7aYxhQp5g_Pb9U',
'https://lh3.google.com/u/0/d/1HsdecDrRwhgBqFHyqZJmIYgpj7DOMdo9',
'https://lh3.google.com/u/0/d/12HoPaHjfK0YXiK1kgDewrhDcQDE4GSe_',
'https://lh3.google.com/u/0/d/1kFxbq66HlnY6kdR6pYxIOB5kjkxFtVCf',
'https://lh3.google.com/u/0/d/1WbxH8aEvS03_QoSQOZ5fvt3I93u_NA8j',
'https://lh3.google.com/u/0/d/1RjyahNDe-woTSRykDEf-lS4zK9LluJvh',
'https://lh3.google.com/u/0/d/1fV5Rm0QWOlt-B3PWscNdqWj2LSkTxXs2',
'https://lh3.google.com/u/0/d/1wh_0gACKBMKRreArHm-4O1lyJs4aPXQO',
'https://lh3.google.com/u/0/d/1ig9zqT1VkhJxyOYXQjs6_S754ZCV48qX',
'https://lh3.google.com/u/0/d/1eSksQHI9LYWsXVz26iNFpp49SFkMNJFx',
'https://lh3.google.com/u/0/d/1XJ7lQvbaC8k8E88ZkW5Wvvwbg5wM8s7h',
'https://lh3.google.com/u/0/d/14RKIZpPf_nt9KeZ6_PlETVQ9SkqAdsdy',
'https://lh3.google.com/u/0/d/1NiU29CsFZPVXRJqbkNrqJkXn-bpl4xyT',
'https://lh3.google.com/u/0/d/1ziHtuXIXdyFFPbCPPqac-ePap3n7PTa6',
'https://lh3.google.com/u/0/d/1ezHGkSRtANc1PrGZO1ZOwr-ltqCTqHOt',
'https://lh3.google.com/u/0/d/1bTLBHwqWTk30NMEreFCLiHB8qar1fxUe',
'https://lh3.google.com/u/0/d/1arz05yK6ViieUyhvgY-j4mwboYN0mDUe',
'https://lh3.google.com/u/0/d/1K8gPDhPqUJZ4sl6uUp8BG6UKJmbSS8tR',
]; 

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const header = document.querySelector('.header');
    header.style.backgroundImage = `url(${randomImage})`;
}

randomImage(); // 페이지 로드 시 한 번 실행