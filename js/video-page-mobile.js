    function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function loadDeviceCSS() {
      const head = document.head;
      let cssFile = '';

      if (isMobile()) {
        cssFile = '../css/video-page-mobile.css';
      } else {
        cssFile = 'desktop.css';
      }

      // 기존에 로드된 장치별 CSS가 있다면 제거
      const existingLink = document.querySelector('link[href="' + cssFile + '"]');
      if (!existingLink && cssFile) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.type = 'text/css';
        link.href = cssFile;
        head.appendChild(link);
      }
    }

    // 페이지 로드 시 실행
    loadDeviceCSS();

    // (선택 사항) 창 크기 변경 시 다시 확인하여 적용할 수도 있습니다.
    window.addEventListener('resize', loadDeviceCSS);