const images = [
'https://lh3.google.com/u/0/d/1-WPEtAZoEFocK10d8nF5wNhi_8shVxx-=w1920-h1080',
'https://lh3.google.com/u/0/d/1GiCyqPfiGhuem-XNboPyLRduzkfRUQMh=w1920-h1080',
'https://lh3.google.com/u/0/d/1i8SnfLtWwPiEHIXW5cFNJbDwMMtIXAQv=w1920-h1080',
'https://lh3.google.com/u/0/d/1zKnwJyJUv_4Yw5A031dGH_QYH4PXQ8RX=w1920-h1080',
'https://lh3.google.com/u/0/d/1mhrhIVNed4OkH2tyIMzKGt5p70riBORL=w1920-h1080',
'https://lh3.google.com/u/0/d/1P2sBQOwQtRexPQ1NL3Y6hMRjf5MusN99=w1920-h1080',
'https://lh3.google.com/u/0/d/1m1tD5zYlyGu4YXdZIkB6_ilpIZTAsVHX=w1920-h1080',
'https://lh3.google.com/u/0/d/1hvgcl2LsIe54pLA3jW99ECQeJolia9pC=w1920-h1080',
'https://lh3.google.com/u/0/d/1_ULk1sD-SinmnKNQVHC9KcvbnPJlcpyl=w1920-h1080',
'https://lh3.google.com/u/0/d/1DEfXFRxXbEW--bTDGp9vP9MEQKAxtJVo=w1920-h1080',
'https://lh3.google.com/u/0/d/19REvmp6r3EX1c_Khp3WgXeF9xMJVP5Km=w1920-h1080',
'https://lh3.google.com/u/0/d/1DEOAqesdeSp_wUAkQLRc4KnT-eV3ewR8=w1920-h1080',
'https://lh3.google.com/u/0/d/17E9jHKBZuSdYksq0AyI3XKKWqD7F7khv=w1920-h1080',
'https://lh3.google.com/u/0/d/1jGRotx019d_inWmk8Xnxr0mYDT5M2oxe=w1920-h1080',
'https://lh3.google.com/u/0/d/1wdRYe2XOUPdVb0kj05y14sypb5d_0HIF=w1920-h1080',
'https://lh3.google.com/u/0/d/1gTQqUVYWIGSY6JzqHj9MP_3RI2l3qax7=w1920-h1080',
'https://lh3.google.com/u/0/d/15ObEV_NSRP_Cs5_D94Lxkol3xL8nkr5o=w1920-h1080',
'https://lh3.google.com/u/0/d/1T1RZH6LBtOO63F8Lju-iuYRCoPZa9ZAJ=w1920-h1080',
'https://lh3.google.com/u/0/d/1Z6Wc3UTiA2qQFTicWhWxu637dZOclowL=w1920-h1080',
'https://lh3.google.com/u/0/d/1opAnl7UoY8eMGNjFzmPyL4t4P-K8cbxW=w1920-h1080',
'https://lh3.google.com/u/0/d/1rDAkUeO0GVN7Zl3tEjgIDT5lIP6oxm_y=w1920-h1080',
'https://lh3.google.com/u/0/d/1VIqpePv7OfVfreljInL3aURtxXJQXb3b=w1920-h1080',
'https://lh3.google.com/u/0/d/160RTdrFsUxXiLO6-z1eCB3sz_IxuTBnp=w1920-h1080',
'https://lh3.google.com/u/0/d/18mJTHUVw6uH2xZlGqhYpDOSHAfjSqMp0=w1920-h1080',
'https://lh3.google.com/u/0/d/1spZ3sMAUuwNyGdV9KemJluCJAhQW-rBX=w1920-h1080',
'https://lh3.google.com/u/0/d/1Zvd2L0LftsTyUtg6_Ek30UlfCK3t3q99=w1920-h1080',
'https://lh3.google.com/u/0/d/1Jr6bVMUcCa-2dRRDAnsRaxUox3rtRb8T=w1920-h1080',
'https://lh3.google.com/u/0/d/1b26ytD7Qc1bcnuLAjwKQr2T-i1cMQZV5=w1920-h1080',
'https://lh3.google.com/u/0/d/15n0y_VgPgTm6Cs2x3E3BfgEdorFaRqhX=w1920-h1080',
'https://lh3.google.com/u/0/d/1uYHc7znXRwKGuAAFbMbzzaX3_lNpJaZS=w1920-h1080',
'https://lh3.google.com/u/0/d/1bFdDl8jVc73HYN4yVNxZ3gzPxmdhmZ5-=w1920-h1080',
'https://lh3.google.com/u/0/d/1Jyaw1RWMzR7lq00NqIFJAMbfclSpcESV=w1920-h1080',
'https://lh3.google.com/u/0/d/1n-37LXUVelkYZFczZa4viXKGzlg3EaxN=w1920-h1080',
'https://lh3.google.com/u/0/d/1JCSKJVyXQPqSNNneGx__Cmf6_-kxMhbJ=w1920-h1080',
'https://lh3.google.com/u/0/d/1kxUG4JteT8xRAVTJUO8MpOe2Ru62uASB=w1920-h1080',
'https://lh3.google.com/u/0/d/1guCH53nEBtDtYCfvnCCADkBLd9NUzJ2X=w1920-h1080',
'https://lh3.google.com/u/0/d/1m9C_BWCq8iD2-MMOkEfktqSETLr_fqUI=w1920-h1080',
'https://lh3.google.com/u/0/d/1bLBkUb2KWNWBTZw2IwmwjsQ33RlMQ3ex=w1920-h1080',
'https://lh3.google.com/u/0/d/1FUmqT-MF5IKXYd99_hzyeaF4vwerq8gp=w1920-h1080',
'https://lh3.google.com/u/0/d/1DgFlsVeYxo99N52uBEd5KVUISK8y-Pau=w1920-h1080',
'https://lh3.google.com/u/0/d/1XCB7MGq6w7zHbcXEuD2y0GiTQ7Q33bYg=w1920-h1080',
'https://lh3.google.com/u/0/d/1EWzoP7unl0sPEAluqwvsc7npVpYrKYkC=w1920-h1080',
'https://lh3.google.com/u/0/d/1PKpUDR0PVV0SwXEdOffP5tlmFKRVkGaE=w1920-h1080',
'https://lh3.google.com/u/0/d/1IZqSyaWe4s4baON1QWhqMDPaDzWKqFMT=w1920-h1080',
'https://lh3.google.com/u/0/d/1ZqTe9OGsSwwNH38Nv6fml2pTOcEfT4FV=w1920-h1080',
'https://lh3.google.com/u/0/d/15UFGCIj0SRdB072V3fJ-Si_7qajxStaS=w1920-h1080',
'https://lh3.google.com/u/0/d/1RQQP6icG0JfphoLABerQ-7Bi5SMtLTii=w1920-h1080',
'https://lh3.google.com/u/0/d/15n5G7855nSCYvXiV4kFjap1zJUayS6vh=w1920-h1080',
'https://lh3.google.com/u/0/d/1kc318NRw0LXjwUCp4T44QNTk2tHFyH2N=w1920-h1080',
'https://lh3.google.com/u/0/d/1A0y2vUuMrkvJ4kGWAqNhAnHjkRxFA6XI=w1920-h1080',
'https://lh3.google.com/u/0/d/1cbek4qzI0t2H5Djs-eab1-G315p-K_m2=w1920-h1080',
'https://lh3.google.com/u/0/d/10ooKG97IFnZbDNcJPCsKBJlmxaaIt-en=w1920-h1080',
'https://lh3.google.com/u/0/d/109O6TP6HnKNHkC6TlCFvRrhhVYFlgeLX=w1920-h1080',
'https://lh3.google.com/u/0/d/1s07EnZo3M-dnVyUjyUSak3-oToxpgz9g=w1920-h1080',
'https://lh3.google.com/u/0/d/1bs8oKzMeiYkEYRIpetFSNkzDFnmQJ5pD=w1920-h1080',
'https://lh3.google.com/u/0/d/1E77fc8z_Kl3pp1md96vUzYPlnPT4AX8v=w1920-h1080',
'https://lh3.google.com/u/0/d/1GFq5sI1vbZNoAHYk7Ei111wigyCAxWbs=w1920-h1080',
'https://lh3.google.com/u/0/d/1ATW8lg9l7PrxXPJmXjnobORglA8r_BCT=w1920-h1080',
'https://lh3.google.com/u/0/d/18VPptIwmPqCXXSNHxHRyJDIiE6nZpIlQ=w1920-h1080',
'https://lh3.google.com/u/0/d/14FsOFCStK5R7W0UFk5B_BR6KG_8ubDD0=w1920-h1080',
'https://lh3.google.com/u/0/d/1cb_KsFGS4T5r6N7BcC1PK9Pg3OjtYOWa=w1920-h1080',
'https://lh3.google.com/u/0/d/1WkLp2k9zJvAog8XW7g-CHNfXF4hbuy_W=w1920-h1080',
]; 

const placeholderImages = [

];

function randomImage() {
  const randomIndex = Math.floor(Math.random() * images.length);
  const randomImageUrl = images[randomIndex];
  const header = document.querySelector('.header');

  if (randomImageUrl) {
    const img = new Image();
    img.src = randomImageUrl;

    img.onload = function() {
      header.style.backgroundImage = `url(${randomImageUrl})`;
    };

    img.onerror = function() {
      console.error(`Failed to load image: ${randomImageUrl}`);
      const placeholderIndex = Math.floor(Math.random() * placeholderImages.length);
      header.style.backgroundImage = `url(${placeholderImages[placeholderIndex]})`; // 임의의 대체 이미지 선택
    };
  } else {
    console.error("Image URL is empty");
    const placeholderIndex = Math.floor(Math.random() * placeholderImages.length);
    header.style.backgroundImage = `url(${placeholderImages[placeholderIndex]})`;
  }
}

randomImage();