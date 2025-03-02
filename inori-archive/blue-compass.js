var delay = 5000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1ttr1H0PXPhdAQmlweZtgnYye46C6QdaQ=w1920-h1080"
randomimages[1] = "https://lh3.google.com/u/0/d/1XiTZ4I5wi3nEDF-xa-vt90PKKz9HGx1K=w1920-h1080"
randomimages[2] = "https://lh3.google.com/u/0/d/1O-0DGmkK7NVBmxfDFNN3ETQm8p9ICHjC=w1920-h1080"
randomimages[3] = "https://lh3.google.com/u/0/d/1n7xxCDAYPyewHDd-R38cSRKtrlppK2LT=w1920-h1080"
randomimages[4] = "https://lh3.google.com/u/0/d/1hCC1rUKTRwBXK_4GrJUWOegyFH6iIIYy=w1920-h1080"
randomimages[5] = "https://lh3.google.com/u/0/d/1IsVN0xTQiDzLfI85rvfee-LbixmduHip=w1920-h1080"
randomimages[6] = "https://lh3.google.com/u/0/d/1_wT6d3QjO_WefQDs1q2oZLD3UGsSH7JO=w1920-h1080"
randomimages[7] = "https://lh3.google.com/u/0/d/1SLb9CUeNMgOK0bMfeAlsxlCn3MSUJtGQ=w1920-h1080"
randomimages[8] = "https://lh3.google.com/u/0/d/1fkJa6Od-IVBB7Ho70j_slXNFu6q1esTx=w1920-h1080"
randomimages[9] = "https://lh3.google.com/u/0/d/1oIULYtP5uY7G8-wE8FGFkaperfWHtl5y=w1920-h1080"
randomimages[10] = "https://lh3.google.com/u/0/d/1Urpm_AsN_zYiXZBNxOGocgvoGGldJhee=w1920-h1080"
randomimages[11] = "https://lh3.google.com/u/0/d/1hpCp8i0Ax49k9PfJ8f6QKc5Oo9YcmOnw=w1920-h1080"
randomimages[12] = "https://lh3.google.com/u/0/d/1IkRdCmV6O3BCd01kXnEak53eq9et3fgU=w1920-h1080"
randomimages[13] = "https://lh3.google.com/u/0/d/1vImSsKiAjowjgmgJ2k6G5ot41BYtFUdm=w1920-h1080"
randomimages[14] = "https://lh3.google.com/u/0/d/1dI3eHw5_EFxsoqnsA5ZuHcxVR5dL4r_r=w1920-h1080"
randomimages[15] = "https://lh3.google.com/u/0/d/1b65RBDt9JJtNk7YzKHG559LVAPf2jcR7=w1920-h1080"
randomimages[16] = "https://lh3.google.com/u/0/d/1UoNwGhfqLgZddMRsBo74lZTqzSKgAXlN=w1920-h1080"
randomimages[17] = "https://lh3.google.com/u/0/d/1W471PhC9xYYopnYVOOQFE5v_mCRhUoW_=w1920-h1080"
randomimages[18] = "https://lh3.google.com/u/0/d/107CX0Ehwx3nkOcZLCesvwJDcJxU7c9tW=w1920-h1080"
randomimages[19] = "https://lh3.google.com/u/0/d/1CNalSS4BUc-Kwz48cWE7y2kedX8IdoQd=w1920-h1080"
randomimages[20] = "https://lh3.google.com/u/0/d/1FUwd-pXPA7gJkE8alAdTK89mV5092DVi=w1920-h1080"
randomimages[21] = "https://lh3.google.com/u/0/d/1aT-2mpsxhKgAGrDlreBW4htSUacTR2RM=w1920-h1080"
randomimages[22] = "https://lh3.google.com/u/0/d/133wJg_KRUYbfvKt828To1FbGPjkAeHz5=w1920-h1080"
randomimages[23] = "https://lh3.google.com/u/0/d/11FlOWoScFnU3Op6FYfi4Ma4ckJP7JQf5=w1920-h1080"
randomimages[24] = "https://lh3.google.com/u/0/d/1cJsg4QMPc9f-IPGKt6Ra3yzEtoEUHyyr=w1920-h1080"
randomimages[25] = "https://lh3.google.com/u/0/d/1FGdhxAjw6NZ5dwbP0MFHYXuHj6dm8dmj=w1920-h1080"
randomimages[26] = "https://lh3.google.com/u/0/d/1adnd9Ldisjknja_pq6DxEogj2TPVTP3x=w1920-h1080"
randomimages[27] = "https://lh3.google.com/u/0/d/1QJX-EnpRpXZJOmjKnYh5g79Atkf7OknL=w1920-h1080"
randomimages[28] = "https://lh3.google.com/u/0/d/1KJcXlakLjh9QhQkGpREEhPRPh93bpBjA=w1920-h1080"
randomimages[29] = "https://lh3.google.com/u/0/d/1oQ1wNKshdfnmwfkj3tk8NGILgoH8ezGJ=w1920-h1080"
randomimages[30] = "https://lh3.google.com/u/0/d/1L0UOi0asHjXVQ0rtM3H8K56rfPi4W038=w1920-h1080"
randomimages[31] = "https://lh3.google.com/u/0/d/1M7icCfDG_BZED7gYf5UUFr_lWaNP54KE=w1920-h1080"
randomimages[32] = "https://lh3.google.com/u/0/d/1aBMQ5XucC0ut6vY16FCZhMK8rvO-8A7S=w1920-h1080"
randomimages[33] = "https://lh3.google.com/u/0/d/1WR4Fv7uScOwHZGpit3cSlveahzoJQBUL=w1920-h1080"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="random-img">')

function rotateimage() {

    if (curindex == (tempindex = Math.floor(Math.random() * (randomimages.length)))) {
        curindex = curindex == 0 ? 1 : curindex - 1
    } else
        curindex = tempindex

    document.images.defaultimage.src = randomimages[curindex]
}

setInterval("rotateimage()", delay)