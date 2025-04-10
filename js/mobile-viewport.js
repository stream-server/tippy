function isMobile() {
      return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }

    function loadCSS() {
      if (isMobile()) {
        const head = document.head;
        const landscapeCSS = 'mobile_landscape.css';
        const portraitCSS = 'mobile_portrait.css';

        // 기존에 추가된 방향별 CSS 제거
        const existingLandscape = document.querySelector(`link[href="${landscapeCSS}"]`);
        if (existingLandscape) {
          head.removeChild(existingLandscape);
        }
        const existingPortrait = document.querySelector(`link[href="${portraitCSS}"]`);
        if (existingPortrait) {
          head.removeChild(existingPortrait);
        }

        if (window.matchMedia('(orientation: landscape)').matches) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = landscapeCSS;
          head.appendChild(link);
        } else {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = portraitCSS;
          head.appendChild(link);
        }
      } else {
        // 모바일이 아닌 경우 (선택 사항: 데스크탑 기본 CSS 로드 등)
        const head = document.head;
        const desktopCSS = 'desktop.css';
        const existingDesktop = document.querySelector(`link[href="${desktopCSS}"]`);
        if (!existingDesktop) {
          const link = document.createElement('link');
          link.rel = 'stylesheet';
          link.href = desktopCSS;
          head.appendChild(link);
        }
      }
    }

    // 초기 로딩 시 및 화면 방향 변경 시 실행
    loadCSS();
    window.addEventListener('resize', loadCSS);