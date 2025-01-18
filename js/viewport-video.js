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

        if (iframeUrl) {
            // Create a new iframe element
            const newIframe = document.createElement('iframe');

            // Set the src attribute to the iframe URL
            newIframe.src = iframeUrl;

            // Allow fullscreen for the iframe
            newIframe.allowFullscreen = true;

            // Append the new iframe to the VideoMain element
            VideoMain.classList.add('video-main');
            VideoMain.appendChild(newIframe);

            // Set the currentIframe variable to the new iframe
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

// 화면 방향 변화 감지
window.addEventListener("orientationchange", function() {
  // video-main 내부의 iframe 요소 가져오기
  var iframe = document.querySelector("#video-main iframe"); 

  // 화면 방향에 따라 iframe 회전
  if (window.orientation == 90 || window.orientation == -90) {
    iframe.style.transform = "rotate(90deg)"; 
  } else {
    iframe.style.transform = "rotate(0deg)"; 
  }
});