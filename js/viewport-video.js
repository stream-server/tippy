const spans = document.querySelectorAll('span');
const VideoMain = document.getElementById('video-main');
const MainVideoTitle = document.getElementById('main-video-title');
const MainVideoSubtitle = document.getElementById('main-video-subtitle');
let currentIframe;

spans.forEach(span => {
    span.addEventListener('click', () => {
        const iframeUrl = span.dataset.iframeUrl;
        const title = span.dataset.title;
        const subtitle = span.dataset.subtitle;

        // 기존 iframe 제거
        if (currentIframe) {
            VideoMain.removeChild(currentIframe);
        }

        // 새로운 iframe 생성 및 추가
        if (iframeUrl) {
            const newIframe = document.createElement('iframe');
            newIframe.src = iframeUrl;
            newIframe.allowFullscreen = true;
			iframe.style.webkitTransform = 'rotate(90deg)';
            VideoMain.classList.add('video-main');
            VideoMain.appendChild(newIframe);
            currentIframe = newIframe;
        }

        // 결과 div에 텍스트 출력
        if (title) {
            MainVideoTitle.textContent = title;
        }
		
        if (subtitle) {
            MainVideoSubtitle.textContent = subtitle;
        }
    });
});