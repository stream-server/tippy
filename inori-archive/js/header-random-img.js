const images = [

]; 

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const header = document.querySelector('.header');
    header.style.backgroundImage = `url(${randomImage})`;
}

randomImage(); // 페이지 로드 시 한 번 실행