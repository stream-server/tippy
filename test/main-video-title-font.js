const mediaQuery = window.matchMedia('(min-width: 1280px)');

if (mediaQuery.matches) {
    // 화면 크기가 1280px 이상일 때 실행할 코드
        resultDiv.style.fontSize = '1.2rem';
} else {
    // 화면 크기가 1280px 미만일 때 실행할 코드
        resultDiv.style.fontSize = '0.8rem';
}
      resultDiv.style.fontWeight = 'bold';