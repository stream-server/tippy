const spans = document.querySelectorAll('span');
const VideoMain = document.getElementById('video-main');
const MainVideoTitle = document.getElementById('main-video-title');
const MainVideoSubtitle = document.getElementById('main-video-subtitle');

for (const span of spans) {
  span.addEventListener('click', () => {
    const iframeUrl = span.dataset.iframeUrl;
    const title = span.dataset.title;
    const subtitle = span.dataset.subtitle;

    // 기존 iframe 제거
    if (VideoMain.firstChild) {
      VideoMain.removeChild(VideoMain.firstChild);
    }

    if (iframeUrl) {
      // 새 iframe 생성
      const newIframe = document.createElement('iframe');
      newIframe.src = iframeUrl;
      newIframe.allowFullscreen = true;

      // iframe에 전체 화면 이벤트 리스너 추가
      newIframe.addEventListener('click', function() {
        (newIframe.requestFullscreen || newIframe.mozRequestFullScreen || newIframe.webkitRequestFullscreen || newIframe.msRequestFullscreen).call(newIframe);

        screen.orientation.lock('landscape').then(function() {
          console.log('화면이 가로 방향으로 고정되었습니다.');
        }).catch(function(error) {
          console.log('화면 고정에 실패했습니다.: ', error);
        });
      });

      newIframe.addEventListener('fullscreenchange', function() {
        if (!document.fullscreenElement) {
          (document.exitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.msExitFullscreen).call(document);

          screen.orientation.unlock();
          console.log('화면 회전이 해제되었습니다.');
        }
      });

      VideoMain.classList.add('video-main');
      VideoMain.appendChild(newIframe);
    }

    // 결과 div에 텍스트 출력
    MainVideoTitle.textContent = title;
    MainVideoSubtitle.textContent = subtitle;
  });
}