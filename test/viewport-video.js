        const spans = document.querySelectorAll('span');
        const iframeContainer = document.getElementById('iframe-container');
        const resultDiv = document.getElementById('main-video-subtitle');
        let currentIframe;

        spans.forEach(span => {
            span.addEventListener('click', () => {
                const iframeUrl = span.dataset.iframeUrl;
                const text = span.dataset.text;

                // 기존 iframe 제거
                if (currentIframe) {
                    iframeContainer.removeChild(currentIframe);
                }

                // 새로운 iframe 생성 및 추가
                if (iframeUrl) {
                    const newIframe = document.createElement('iframe');
                    newIframe.src = iframeUrl;
                    newIframe.allowFullscreen = true;
                    iframeContainer.classList.add('iframe-container');
                    iframeContainer.appendChild(newIframe);
                    currentIframe = newIframe;
                }

                // 결과 div에 텍스트 출력
                if (text) {
                    resultDiv.textContent = text;
                }
            });
        });