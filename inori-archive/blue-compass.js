var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ttr1H0PXPhdAQmlweZtgnYye46C6QdaQ"
randomimages[1] = "https://lh3.google.com/u/0/d/1XiTZ4I5wi3nEDF-xa-vt90PKKz9HGx1K"
randomimages[2] = "https://lh3.google.com/u/0/d/1O-0DGmkK7NVBmxfDFNN3ETQm8p9ICHjC"
randomimages[3] = "https://lh3.google.com/u/0/d/1n7xxCDAYPyewHDd-R38cSRKtrlppK2LT"
randomimages[4] = "https://lh3.google.com/u/0/d/1hCC1rUKTRwBXK_4GrJUWOegyFH6iIIYy"
randomimages[5] = "https://lh3.google.com/u/0/d/1IsVN0xTQiDzLfI85rvfee-LbixmduHip"
randomimages[6] = "https://lh3.google.com/u/0/d/1_wT6d3QjO_WefQDs1q2oZLD3UGsSH7JO"
randomimages[7] = "https://lh3.google.com/u/0/d/1SLb9CUeNMgOK0bMfeAlsxlCn3MSUJtGQ"
randomimages[8] = "https://lh3.google.com/u/0/d/1fkJa6Od-IVBB7Ho70j_slXNFu6q1esTx"
randomimages[9] = "https://lh3.google.com/u/0/d/1oIULYtP5uY7G8-wE8FGFkaperfWHtl5y"
randomimages[10] = "https://lh3.google.com/u/0/d/1Urpm_AsN_zYiXZBNxOGocgvoGGldJhee"
randomimages[11] = "https://lh3.google.com/u/0/d/1hpCp8i0Ax49k9PfJ8f6QKc5Oo9YcmOnw"
randomimages[12] = "https://lh3.google.com/u/0/d/1IkRdCmV6O3BCd01kXnEak53eq9et3fgU"
randomimages[13] = "https://lh3.google.com/u/0/d/1vImSsKiAjowjgmgJ2k6G5ot41BYtFUdm"
randomimages[14] = "https://lh3.google.com/u/0/d/1dI3eHw5_EFxsoqnsA5ZuHcxVR5dL4r_r"
randomimages[15] = "https://lh3.google.com/u/0/d/1b65RBDt9JJtNk7YzKHG559LVAPf2jcR7"
randomimages[16] = "https://lh3.google.com/u/0/d/1UoNwGhfqLgZddMRsBo74lZTqzSKgAXlN"
randomimages[17] = "https://lh3.google.com/u/0/d/1W471PhC9xYYopnYVOOQFE5v_mCRhUoW_"
randomimages[18] = "https://lh3.google.com/u/0/d/107CX0Ehwx3nkOcZLCesvwJDcJxU7c9tW"
randomimages[19] = "https://lh3.google.com/u/0/d/1CNalSS4BUc-Kwz48cWE7y2kedX8IdoQd"
randomimages[20] = "https://lh3.google.com/u/0/d/1FUwd-pXPA7gJkE8alAdTK89mV5092DVi"
randomimages[21] = "https://lh3.google.com/u/0/d/1aT-2mpsxhKgAGrDlreBW4htSUacTR2RM"
randomimages[22] = "https://lh3.google.com/u/0/d/133wJg_KRUYbfvKt828To1FbGPjkAeHz5"
randomimages[23] = "https://lh3.google.com/u/0/d/11FlOWoScFnU3Op6FYfi4Ma4ckJP7JQf5"
randomimages[24] = "https://lh3.google.com/u/0/d/1cJsg4QMPc9f-IPGKt6Ra3yzEtoEUHyyr"
randomimages[25] = "https://lh3.google.com/u/0/d/1FGdhxAjw6NZ5dwbP0MFHYXuHj6dm8dmj"
randomimages[26] = "https://lh3.google.com/u/0/d/1adnd9Ldisjknja_pq6DxEogj2TPVTP3x"
randomimages[27] = "https://lh3.google.com/u/0/d/1QJX-EnpRpXZJOmjKnYh5g79Atkf7OknL"
randomimages[28] = "https://lh3.google.com/u/0/d/1KJcXlakLjh9QhQkGpREEhPRPh93bpBjA"
randomimages[29] = "https://lh3.google.com/u/0/d/1oQ1wNKshdfnmwfkj3tk8NGILgoH8ezGJ"
randomimages[30] = "https://lh3.google.com/u/0/d/1L0UOi0asHjXVQ0rtM3H8K56rfPi4W038"
randomimages[31] = "https://lh3.google.com/u/0/d/1M7icCfDG_BZED7gYf5UUFr_lWaNP54KE"
randomimages[32] = "https://lh3.google.com/u/0/d/1aBMQ5XucC0ut6vY16FCZhMK8rvO-8A7S"
randomimages[33] = "https://lh3.google.com/u/0/d/1WR4Fv7uScOwHZGpit3cSlveahzoJQBUL"
randomimages[34] = "https://lh3.google.com/u/0/d/1GCk6hA5r1x_8ODAOBdUAQaXv6HRvQZwb"
randomimages[35] = "https://lh3.google.com/u/0/d/19p3tDvlbhmujoJzqq9tQRbCV-tw_fozr"
randomimages[36] = "https://lh3.google.com/u/0/d/11u7vQM6ZFOt5rxbW9Zr_OuvqYPKktO9X"
randomimages[37] = "https://lh3.google.com/u/0/d/16na9w0-mAL5_w2jH2zO0CSVuIb212vLq"
randomimages[38] = "https://lh3.google.com/u/0/d/124YT2uDc_yblbFGeXb3LMPS9KyoRMIaJ"
randomimages[39] = "https://lh3.google.com/u/0/d/1ENl1m4bgSha9MGxKt6si_IuJwGvILTtI"
randomimages[40] = "https://lh3.google.com/u/0/d/14TCuOFdWRMGYD6iToSLeSmR_zTfimepG"
randomimages[41] = "https://lh3.google.com/u/0/d/1FnYlqJvseMeXZP3bqDEoHwWR20U-qfVQ"
randomimages[42] = "https://lh3.google.com/u/0/d/1i1Yb69ZcBvrsVj5lhyM-oHQBMpoqxxuY"
randomimages[43] = "https://lh3.google.com/u/0/d/1gxHEMxA8xEX3Tc9JDUce-IMJdjdTfcsa"
randomimages[44] = "https://lh3.google.com/u/0/d/1FSD_syBOKf2Iz4Wmm6JxY-EirKkcpvYm"
randomimages[45] = "https://lh3.google.com/u/0/d/1wUgqyfTat-XS8TqXbOQL5c7vEec8s7_X"
randomimages[46] = "https://lh3.google.com/u/0/d/1nOTJ_1V-O0QcuEtRAwKZmpi8IsVViRUf"
randomimages[47] = "https://lh3.google.com/u/0/d/1X2Pz_qxq43JMJEEIoKW02n-xoeszr1WD"
randomimages[48] = "https://lh3.google.com/u/0/d/1qSOeKbjfnTyRNPsMBipvg5c-5hmuPF58"
randomimages[49] = "https://lh3.google.com/u/0/d/13MwjsK3clU0yrj7njWaV2NWke6BM6pCV"
randomimages[50] = "https://lh3.google.com/u/0/d/1DpAOQBllEdHRaMMwXxGz2XTJ7X0fB6AI"
randomimages[51] = "https://lh3.google.com/u/0/d/1POTv4Nq4KCAOQi6qCriYzd6TR383hbve"
randomimages[52] = "https://lh3.google.com/u/0/d/1mU2igABrCUjEwSdOzeo1ZsUlyhnJ_16X"
randomimages[53] = "https://lh3.google.com/u/0/d/1BzFkF65s4WZBUMfdfhBF8GUIX2nE25mV"
randomimages[54] = "https://lh3.google.com/u/0/d/1AiMPOolL2Nf1AjUd0O7qqfz0WF940_Ep"
randomimages[55] = "https://lh3.google.com/u/0/d/15UxmKF8q4xtfUbAUAgxebEEm0xbV3RFW"
randomimages[56] = "https://lh3.google.com/u/0/d/1LJGoMppLXC2-HbphbE8cqfIWjWYzs5Nv"
randomimages[57] = "https://lh3.google.com/u/0/d/1M48wpwcEImKZLE4UYt5temJ5kHNyiRzG"
randomimages[58] = "https://lh3.google.com/u/0/d/1b2LczfuASa5dyh-qoQ7aaS5xg_-r_mev"
randomimages[59] = "https://lh3.google.com/u/0/d/11zKISWSzeLN6izmYL90SfAqOBXqOG156"
randomimages[60] = "https://lh3.google.com/u/0/d/1lS-CB7f80hHqBO1gSK69GG5Raw5F2U3h"
randomimages[61] = "https://lh3.google.com/u/0/d/1l3lM_POUI_tLw5_DU9CtV0zJFGan8A_f"
randomimages[62] = "https://lh3.google.com/u/0/d/1FRGfilGyBlSxZuKWmK1nPjWmv2H59ZEz"
randomimages[63] = "https://lh3.google.com/u/0/d/1kTHSCtoAFGbRAHHhO96SmLEzFLFYYG3C"
randomimages[64] = "https://lh3.google.com/u/0/d/1MJJ-_1z_g8GuwhrC_bo5-SigCwqWQ01S"
randomimages[65] = "https://lh3.google.com/u/0/d/1So23uEEtE4jw9s15cxFqk2BRaQuGezcx"
randomimages[66] = "https://lh3.google.com/u/0/d/1yvau_Q0CEdBkvvMjjV-copCDYQG6WKl5"
randomimages[67] = "https://lh3.google.com/u/0/d/1B0T7J5C9qJWOk4BoVMzpcU8xioJ5g960"
randomimages[68] = "https://lh3.google.com/u/0/d/1tIAS7W00IEHvv6mH5LOGMHEP7s3UurKF"
randomimages[69] = "https://lh3.google.com/u/0/d/1Tlk5hpM4fZD5BbCdtRxi8L3b7zzNJghZ"
randomimages[70] = "https://lh3.google.com/u/0/d/1s81x8tyk-4W-afR_PmLcEzi23sqxjIqY"

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
"https://i.postimg.cc/28rFPrRg/01.jpg",
"https://i.postimg.cc/MK5bwNzH/02.jpg",
"https://i.postimg.cc/YCSNCRS3/03.jpg",
"https://i.postimg.cc/h491yhw9/04.jpg",
"https://i.postimg.cc/9fRGGfZw/05.jpg",
"https://i.postimg.cc/bwFxDnDj/06.jpg",
"https://i.postimg.cc/vmJ5Xdtq/07.jpg",
"https://i.postimg.cc/Y9QYsyXp/08.jpg",
"https://i.postimg.cc/NFYmq7VR/09.jpg",
"https://i.postimg.cc/wMVJ6R8Z/10.jpg",
"https://i.postimg.cc/NG7R8S9D/11.jpg",
"https://i.postimg.cc/Qx81fmc3/12.jpg",
"https://i.postimg.cc/pXs84jBn/13.jpg",
"https://i.postimg.cc/t4f6CHwq/14.jpg",
"https://i.postimg.cc/JztJLhTY/15.jpg",
"https://i.postimg.cc/VNCCJVPj/16.jpg",
"https://i.postimg.cc/rm2txNq7/17.jpg",
"https://i.postimg.cc/63V4043q/18.jpg",
"https://i.postimg.cc/kGn6hM6c/19.jpg",
"https://i.postimg.cc/cCXgqqfN/20.jpg",
"https://i.postimg.cc/3rBD0GVb/21.jpg",
"https://i.postimg.cc/YqCL69w2/22.jpg",
"https://i.postimg.cc/bNVD3hzx/23.jpg",
"https://i.postimg.cc/vZ11KNBp/24.jpg",
"https://i.postimg.cc/4xrKRQHn/25.jpg",
"https://i.postimg.cc/d1FLLQBY/26.jpg",
"https://i.postimg.cc/yNcD130j/27.jpg",
"https://i.postimg.cc/3RZWpMSD/28.jpg",
"https://i.postimg.cc/T1Y1JkFN/29.jpg",
"https://i.postimg.cc/0jWQWYqk/30.jpg",
"https://i.postimg.cc/3rndxT0s/31.jpg",
"https://i.postimg.cc/jd2CWFzL/32.jpg",
"https://i.postimg.cc/024j70fZ/33.jpg",
"https://i.postimg.cc/dVT16ZNF/34.jpg",
"https://i.postimg.cc/nz3HF5JG/0001.jpg",
"https://i.postimg.cc/rmVVLTvp/0002.jpg",
"https://i.postimg.cc/j29tN7CW/0003.jpg",
"https://i.postimg.cc/L5hmnT4K/0004.jpg",
"https://i.postimg.cc/3rbKzP9K/0005.jpg",
"https://i.postimg.cc/ZKBTmVD6/0006.jpg",
"https://i.postimg.cc/t4FpZ7bT/0007.jpg",
"https://i.postimg.cc/65kBpnDg/0008.jpg",
"https://i.postimg.cc/R099c9CT/0009.jpg",
"https://i.postimg.cc/d0BF6XLc/0010.jpg",
"https://i.postimg.cc/RFZBDRH6/0011.jpg",
"https://i.postimg.cc/76tk823B/0012.jpg",
"https://i.postimg.cc/D0WK2w57/0013.jpg",
"https://i.postimg.cc/L47pxj65/0014.jpg",
"https://i.postimg.cc/C5Wpdp6k/0015.jpg",
"https://i.postimg.cc/KvMyw4RN/0016.jpg",
"https://i.postimg.cc/Gmn1CrD1/0017.jpg",
"https://i.postimg.cc/vZ7w8j7x/0018.jpg",
"https://i.postimg.cc/R0M5WRGs/0019.jpg",
"https://i.postimg.cc/HLBGXyhp/0020.jpg",
"https://i.postimg.cc/d11bBVbG/0021.jpg",
"https://i.postimg.cc/j5FGkrTm/0022.jpg",
"https://i.postimg.cc/yx32MrYd/0023.jpg",
"https://i.postimg.cc/kDrLqFBy/0024.jpg",
"https://i.postimg.cc/WpD3pNdD/0025.jpg",
"https://i.postimg.cc/59Zt6hzs/0026.jpg",
"https://i.postimg.cc/15w36vcs/0027.jpg",
"https://i.postimg.cc/fRsTvYBX/0028.jpg",
"https://i.postimg.cc/Cx4MrdQ2/0029.jpg",
"https://i.postimg.cc/wBTqCgKj/0030.jpg",
"https://i.postimg.cc/tgSqywyt/0031.jpg",
"https://i.postimg.cc/MTnWG5pk/0032.jpg",
"https://i.postimg.cc/HxFT8Mrr/0033.jpg",
"https://i.postimg.cc/rsWM1p4Q/0034.jpg",
"https://i.postimg.cc/BZ1S9mzH/0035.jpg",
"https://i.postimg.cc/PrsttmGc/0036.jpg",
"https://i.postimg.cc/4N6Xnms3/0037.jpg"
];
    var randomIndex = Math.floor(Math.random() * placeholderImages.length);
    document.images.defaultimage.src = placeholderImages[randomIndex];
  };
}

setInterval("rotateimage()", delay);