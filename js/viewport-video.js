const spans = document.querySelectorAll('span');
const VideoMain = document.getElementById('video-main');
const MainVideoTitle = document.getElementById('main-video-title');
const MainVideoSubtitle = document.getElementById('main-video-subtitle');
const iframe = document.getElementById('fullscreenIframe');
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
            newIframe.webkitallowfullscreen = true;
            newIframe.mozallowfullscreen = true;

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

function requestFullscreen(element) {
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.mozRequestFullScreen) { /* Firefox */
      element.mozRequestFullScreen();
    } else if (element.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
      element.webkitRequestFullscreen();
    } else if (element.msRequestFullscreen) { /* IE/Edge */
      element.msRequestFullscreen();
    }
  }

  function setLandscapeOrientation() {
    if (screen.orientation && screen.orientation.lock) {
      screen.orientation.lock('landscape');
    } else if (screen.orientation && screen.orientation.unlock) {
      screen.orientation.unlock(); // 혹시 다른 방향으로 잠겨있을 경우 해제
      screen.orientation.lock('landscape');
    } else {
      // screen.orientation API를 지원하지 않는 경우 (구형 브라우저)
      // CSS transform 등을 사용하여 가로로 보이게 하는 방법을 고려해야 합니다.
      console.warn("Screen orientation API is not supported.");
    }
  }