var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1XMqkDT5BjcqMKmsGgwy1-n6X9XpoXEpl"
randomimages[1] = "https://lh3.google.com/u/0/d/1Ax9DfvEv2-yvW4fzmaGKqgm63iHPZ8YT"
randomimages[2] = "https://lh3.google.com/u/0/d/1QdXbHjrtB_YJ97Blx_MxgW5Go6-NciTP"
randomimages[3] = "https://lh3.google.com/u/0/d/1VA4exaD6dqwnyf338bArsNXdi3eoTKBr"
randomimages[4] = "https://lh3.google.com/u/0/d/11pE-3AbB0M5HbXXgxxCG1gmoMcEYMcT6"
randomimages[5] = "https://lh3.google.com/u/0/d/1kleLzLAxQmXHvRQQF9VmC3OM6er3OhbU"
randomimages[6] = "https://lh3.google.com/u/0/d/1S_cFxNJL4sQuBqZzphNovAcQuf1ZKxAC"
randomimages[7] = "https://lh3.google.com/u/0/d/16y_iAsymdHW00a39ikJ3z8AFoIMrMBDu"
randomimages[8] = "https://lh3.google.com/u/0/d/15L0FEe8xFEu025u11l_KVM3kX70nlOTE"
randomimages[9] = "https://lh3.google.com/u/0/d/1_AmPfhVItrJkq2plEVtifx1K6vHBet11"
randomimages[10] = "https://lh3.google.com/u/0/d/1fjOxIPO77KZeDbvoF4tqRzrd2mX1IAXD"
randomimages[11] = "https://lh3.google.com/u/0/d/1CNk_b_EPBFUic7pjZfNLfPQRtyD8ZBxA"
randomimages[12] = "https://lh3.google.com/u/0/d/1XhOv3LjhFNDPgfxVzNQ1TVklCVjkeT3z"
randomimages[13] = "https://lh3.google.com/u/0/d/1io1g8FUvTYjQcHUMfiKtMLqxwvDlqRew"
randomimages[14] = "https://lh3.google.com/u/0/d/1qj-w73NqYJILqgZLOyRUVmJCphavDEP1"
randomimages[15] = "https://lh3.google.com/u/0/d/1cjk2cV6vKjbKTrP4zRJfUBkLDJ0rWmTX"
randomimages[16] = "https://lh3.google.com/u/0/d/1eyZLONu133js0MRCKblMV59UDX9A9Kt3"
randomimages[17] = "https://lh3.google.com/u/0/d/14AUgoxhfUoUVMTlqF_s6E42qXfvFgy2C"
randomimages[18] = "https://lh3.google.com/u/0/d/1uY7aQfoM38Ux-8FbKppTS4n0RN84HtmD"
randomimages[19] = "https://lh3.google.com/u/0/d/1bgFLmCNTVHkRCHuB5nNGB2IJaPa92ttG"
randomimages[20] = "https://lh3.google.com/u/0/d/1ahK5sImOMmILiXEJCJEv1u_MwKljNlQJ"
randomimages[21] = "https://lh3.google.com/u/0/d/1xT4DngHvqPK4LUWjjSO0MO13nbJ-Ocfu"
randomimages[22] = "https://lh3.google.com/u/0/d/1lcKu1WZl9pZR5XLvHpsJtnXxNH0dxK5i"
randomimages[23] = "https://lh3.google.com/u/0/d/16CaHDyexsHQD0x9AJ4NEOvun3FJ292Tj"
randomimages[24] = "https://lh3.google.com/u/0/d/1GEdWSCN85dtG5jMnhETesZP8QjIkemSu"
randomimages[25] = "https://lh3.google.com/u/0/d/1aXn3_hLbX561Dx2k7srP7yqGIQR2-Kfd"
randomimages[26] = "https://lh3.google.com/u/0/d/1H03hrpf2xbXIewoC40Brnx4Il6yd9i3P"
randomimages[27] = "https://lh3.google.com/u/0/d/15QWf3xs253YtFjzLxXHaKwXaLx_lzweW"
randomimages[28] = "https://lh3.google.com/u/0/d/1dH8Y97x6ONYKZpu--ZhYjtaQivruX_qs"
randomimages[29] = "https://lh3.google.com/u/0/d/1cpilaQVXDmHNmextFCNb9G7NIMcTn2K5"
randomimages[30] = "https://lh3.google.com/u/0/d/1plB_mSMjvkvNr9sqcoK2GJCbW_E6ULOf"
randomimages[31] = "https://lh3.google.com/u/0/d/1bkwHlxgxs7tVPgZ3ezqPo2HhybcS9Mp5"
randomimages[32] = "https://lh3.google.com/u/0/d/1abDpzbhO02nAVqaqVTtEslE-tN7Ry5FQ"
randomimages[33] = "https://lh3.google.com/u/0/d/1eGwwvru_ef9UDLMojdQAy0-e0aS2F0ds"
randomimages[34] = "https://lh3.google.com/u/0/d/1FAwwjg8TG616pZ7oOXX737igdWoJb23K"
randomimages[35] = "https://lh3.google.com/u/0/d/1VZ9mmtbelavZOFQUECh91oAxPuUYv3bt"
randomimages[36] = "https://lh3.google.com/u/0/d/1CAA2sKLTr42FzwX6vP0kHYLdgBLdfKe9"
randomimages[37] = "https://lh3.google.com/u/0/d/1S2Fd_QtYrqxxsJOqftX6g6sf5dKtx9rG"
randomimages[38] = "https://lh3.google.com/u/0/d/1Uf503fy8om8Rijbn6rxugainBDZfAO52"
randomimages[39] = "https://lh3.google.com/u/0/d/1tCJUQXQrX4Mw7tAQj7yKROYxpoxYMhyP"
randomimages[40] = "https://lh3.google.com/u/0/d/14nlpMsJ9K-PVxbVDNOLkO6geGOdivupT"
randomimages[41] = "https://lh3.google.com/u/0/d/1GjIY72GEWJgWuQtFkQwp5AzHvHn5xbdY"
randomimages[42] = "https://lh3.google.com/u/0/d/1cg8XZO28Gie3L-wbD5Z-UIi_630FJFPE"
randomimages[43] = "https://lh3.google.com/u/0/d/1eDdHKWaVbnyu9d5eihuGykdl7hO25Ra6"
randomimages[44] = "https://lh3.google.com/u/0/d/1Warz2H9fEvk_95VykLCjNFrahEChtzDc"
randomimages[45] = "https://lh3.google.com/u/0/d/1N_06U1bLudt_R4g4Bp97i1DXuHe-3gvK"
randomimages[46] = "https://lh3.google.com/u/0/d/1y07L0yNHpmAdBTUGG6kV7OQQZ9-_JZvw"
randomimages[47] = "https://lh3.google.com/u/0/d/1M_tzG1OURo1Ezk1wyW7v-Ih7l7z5_0ra"
randomimages[48] = "https://lh3.google.com/u/0/d/12Zc4VAS1fOR7YhsCVKjzK_zi5m1K8MvM"
randomimages[49] = "https://lh3.google.com/u/0/d/1HLJCDKoSkz-xoMx92ILGEFGXmIZyZy_T"
randomimages[50] = "https://lh3.google.com/u/0/d/1ile-tDwr7omZLoldJMqwbkF6FEJyVQTk"
randomimages[51] = "https://lh3.google.com/u/0/d/1au6y_6pidziaFbY6_9_Dmo3zKLwoY4UT"
randomimages[52] = "https://lh3.google.com/u/0/d/1Re4l_zjRJm7V_7DwFS52TZFxTb5URbtx"
randomimages[53] = "https://lh3.google.com/u/0/d/1f60uDJXgxTYqVBrzT54x4pGQw9OFuC9E"
randomimages[54] = "https://lh3.google.com/u/0/d/1TxdbMZTejibnzXAALxqNyWD1mJ_vjuqK"
randomimages[55] = "https://lh3.google.com/u/0/d/1u8_LWur2NemR1jW46aQJZTCf-WZKAMJp"
randomimages[56] = "https://lh3.google.com/u/0/d/15DEw-C8njWlb8rT0pzXOYhz_HPnGXaZR"
randomimages[57] = "https://lh3.google.com/u/0/d/1XnEIkBAZMVBtx3QYWLzAeNSoGXbyvfNq"
randomimages[58] = "https://lh3.google.com/u/0/d/1Tr1t3bir9ZsdfhBmzzpZN_DZxx69Iir6"
randomimages[59] = "https://lh3.google.com/u/0/d/1Iqw1H0uuZ5zmRbnk_KbqZe6k30Hz8vQO"
randomimages[60] = "https://lh3.google.com/u/0/d/1Ihh4GQg9KYdgclyvicX6JkNFJpzhghBL"
randomimages[61] = "https://lh3.google.com/u/0/d/1abZhp0yxrZXhbuGZ6oJqu36cIz2O_L4i"
randomimages[62] = "https://lh3.google.com/u/0/d/1JEHMTb8OxHAqVNq84QYIdnT38MO1R0G9"
randomimages[63] = "https://lh3.google.com/u/0/d/1ca43-bnuoweG99FxOk_GY1NOSDYQfkwO"
randomimages[64] = "https://lh3.google.com/u/0/d/1ji3WcvHh0iiigHBcV3dh8CW4aQ5jOJ4G"
randomimages[65] = "https://lh3.google.com/u/0/d/18cqSjeheYAKAqnBR_k5lH9L-Ar0fuUuh"
randomimages[66] = "https://lh3.google.com/u/0/d/122TOZ1Ns6d_hDB0w8tSdMyFVdN0hkw7e"
randomimages[67] = "https://lh3.google.com/u/0/d/1LVx7JSHJ6PKMdENCJfQrsSxI53rRlgS-"
randomimages[68] = "https://lh3.google.com/u/0/d/1UGfrnvtdv68eQIDyTiLBU_-CMHfoQVW3"
randomimages[69] = "https://lh3.google.com/u/0/d/1GEDH55K2GJ_PQk091rrkYV_jcR9PBUfR"
randomimages[70] = "https://lh3.google.com/u/0/d/1tNYqrg3k0WblVT56jGyq7aLXgZvLXt_b"
randomimages[71] = "https://lh3.google.com/u/0/d/1mwisBHq4Dzc2_ANJOkthQC8_BETv8mrO"
randomimages[72] = "https://lh3.google.com/u/0/d/1PLMPNfmopyQEuaagn09bAqI9b7DZehkh"
randomimages[73] = "https://lh3.google.com/u/0/d/1KMogBgOrzgkeHzCtth7Dk_LWlJ37otL-"
randomimages[74] = "https://lh3.google.com/u/0/d/18CTeoopOR03Ybu-Gbexr4JaCQMSLYu0q"
randomimages[75] = "https://lh3.google.com/u/0/d/1KpUIpRGeWez27sHXOyiuL75TjQHjE5k5"
randomimages[76] = "https://lh3.google.com/u/0/d/17mTvAEkkicPvJPa3qDs_2bvXwGXN3ZAk"
randomimages[77] = "https://lh3.google.com/u/0/d/1NvgIlOF5J1ojSm9rjxHxHOKBEpWkdHXJ"
randomimages[78] = "https://lh3.google.com/u/0/d/1hdrI804A8nI7MHI4CR-poV2FVpOtTdjW"
randomimages[79] = "https://lh3.google.com/u/0/d/1ZfvUCM-nk_2z1gPragzmKp3V5MNBfNa1"
randomimages[80] = "https://lh3.google.com/u/0/d/1YO6gRuxNMf0Nx8HLdo3o9r5vFUd6t8g3"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {
  var tempindex = Math.floor(Math.random() * randomimages.length);

  if (curindex === tempindex) {
    curindex = curindex === 0 ? 1 : curindex - 1;
  } else {
    curindex = tempindex;
  }

  var img = new Image();
  img.src = randomimages[curindex];

  img.onload = function() {
    document.images.defaultimage.src = randomimages[curindex];
  };

  img.onerror = function() {
    console.error(`Failed to load image: ${randomimages[curindex]}`);

    // 대체 이미지 배열
    var placeholderImages = [
"https://i.postimg.cc/QdPggNLT/01.jpg",
"https://i.postimg.cc/Z5kK6X7q/02.jpg",
"https://i.postimg.cc/fLbwwsL8/03.jpg",
"https://i.postimg.cc/KzsmjW3x/04.jpg",
"https://i.postimg.cc/BvKTmWsw/05.jpg",
"https://i.postimg.cc/3RQg6Lxr/06.jpg",
"https://i.postimg.cc/cCg0ncfY/07.jpg",
"https://i.postimg.cc/qRc8d8Ns/08.jpg",
"https://i.postimg.cc/7hxSPfzp/09.jpg",
"https://i.postimg.cc/4yBVYsbn/10.jpg",
"https://i.postimg.cc/1RHpCrhP/11.jpg",
"https://i.postimg.cc/HkQWz3R9/12.jpg",
"https://i.postimg.cc/fTRY6SDd/13.jpg",
"https://i.postimg.cc/rFZ5cywP/14.jpg",
"https://i.postimg.cc/dV7r0M7t/15.jpg",
"https://i.postimg.cc/2SPvbHvd/16.jpg",
"https://i.postimg.cc/kG09FtyH/17.jpg",
"https://i.postimg.cc/yNcRFFXM/18.jpg",
"https://i.postimg.cc/DZhX58x8/19.jpg",
"https://i.postimg.cc/63hGPtPz/20.jpg",
"https://i.postimg.cc/sxDZdbdz/21.jpg",
"https://i.postimg.cc/Gt7Tczdy/22.jpg",
"https://i.postimg.cc/Y2bWf2YC/23.jpg",
"https://i.postimg.cc/15XNWxrc/24.jpg",
"https://i.postimg.cc/jd1nm88V/25.jpg",
"https://i.postimg.cc/QdWK3pPF/26.jpg",
"https://i.postimg.cc/k536X23f/27.jpg",
"https://i.postimg.cc/s2YBB33y/28.jpg",
"https://i.postimg.cc/3R3kmzwG/29.jpg",
"https://i.postimg.cc/4ydnFtVN/30.jpg",
"https://i.postimg.cc/mDVtwVc5/31.jpg",
"https://i.postimg.cc/QCyVLtJg/32.jpg",
"https://i.postimg.cc/3rSk0SQy/33.jpg",
"https://i.postimg.cc/VL25DJ6m/34.jpg",
"https://i.postimg.cc/658yrrBM/35.jpg",
"https://i.postimg.cc/mgMkqTzM/36.jpg",
"https://i.postimg.cc/7Lkhrj0R/37.jpg",
"https://i.postimg.cc/ZRYqC3fF/38.jpg",
"https://i.postimg.cc/R0LFSGTZ/39.jpg",
"https://i.postimg.cc/wvWjJvZK/40.jpg",
"https://i.postimg.cc/1Xf5KS18/41.jpg",
"https://i.postimg.cc/W31yDb0J/0001.jpg",
"https://i.postimg.cc/CMD2ztq7/0002.jpg",
"https://i.postimg.cc/CMHNyV83/0003.jpg",
"https://i.postimg.cc/fT8fLjB5/0004.jpg",
"https://i.postimg.cc/k4YpW3yY/0005.jpg",
"https://i.postimg.cc/7ZPttZQt/0006.jpg",
"https://i.postimg.cc/Hs9Pty37/0007.jpg",
"https://i.postimg.cc/zBTkXscR/0008.jpg",
"https://i.postimg.cc/Y04y3nnr/0009.jpg",
"https://i.postimg.cc/6qDb1rgd/0010.jpg",
"https://i.postimg.cc/y65GdKxk/0011.jpg",
"https://i.postimg.cc/L8F0tVzS/0012.jpg",
"https://i.postimg.cc/rsLQ1VrJ/0013.jpg",
"https://i.postimg.cc/sgPHwZch/0014.jpg",
"https://i.postimg.cc/q7kbYMbZ/0015.jpg",
"https://i.postimg.cc/XvQH0StN/0016.jpg",
"https://i.postimg.cc/Y90XrDw6/0017.jpg",
"https://i.postimg.cc/Y9PdhNpJ/0018.jpg",
"https://i.postimg.cc/5yFnvHyj/0019.jpg",
"https://i.postimg.cc/4nkw1JHP/0020.jpg",
"https://i.postimg.cc/HWcg3B78/0021.jpg",
"https://i.postimg.cc/dQbKfr8H/0022.jpg",
"https://i.postimg.cc/HsbC1nzp/0023.jpg",
"https://i.postimg.cc/4xZRfG2p/0024.jpg",
"https://i.postimg.cc/6p0JTPFg/0025.jpg",
"https://i.postimg.cc/tg4065jT/0026.jpg",
"https://i.postimg.cc/hGyk1dD0/0027.jpg",
"https://i.postimg.cc/TwKZ73hv/0028.jpg",
"https://i.postimg.cc/ZRXX1zyB/0029.jpg",
"https://i.postimg.cc/BbDR37xh/0030.jpg",
"https://i.postimg.cc/ZYyG6n1r/0031.jpg",
"https://i.postimg.cc/PrsByhj0/0032.jpg",
"https://i.postimg.cc/Cx67vH8d/0033.jpg",
"https://i.postimg.cc/zXC4PMDv/0034.jpg",
"https://i.postimg.cc/Dwz5dY8t/0035.jpg",
"https://i.postimg.cc/htKNFrhr/0036.jpg",
"https://i.postimg.cc/tgTfJ43n/0037.jpg",
"https://i.postimg.cc/tgMcxGkS/0038.jpg",
"https://i.postimg.cc/1XcMMk0Z/0039.jpg",
"https://i.postimg.cc/ZK4w0qZY/0040.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);