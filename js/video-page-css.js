    function loadCSSBasedOnDevice() {
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const head = document.head;
      let linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.type = 'text/css';

      if (isMobile) {
        linkElement.href = '../css/video-page-mobile.css'; // 모바일용 CSS 파일 경로
      } else {
        linkElement.href = '../css/video-page-desktop.css'; // PC용 CSS 파일 경로
      }

      head.appendChild(linkElement);
    }

    // 페이지 로드 시 실행
    document.addEventListener('DOMContentLoaded', loadCSSBasedOnDevice);

    // 창 크기 변경 시 다시 확인하여 적용
    window.addEventListener('resize', loadDeviceCSS);