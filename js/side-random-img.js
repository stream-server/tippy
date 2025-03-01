var delay = 4000
var curindex = 0

var randomimages = new Array()

randomimages[0] = "https://lh3.google.com/u/0/d/1-WPEtAZoEFocK10d8nF5wNhi_8shVxx-"
randomimages[1] = "https://lh3.google.com/u/0/d/1GiCyqPfiGhuem-XNboPyLRduzkfRUQMh"
randomimages[2] = "https://lh3.google.com/u/0/d/1i8SnfLtWwPiEHIXW5cFNJbDwMMtIXAQv"
randomimages[3] = "https://lh3.google.com/u/0/d/1zKnwJyJUv_4Yw5A031dGH_QYH4PXQ8RX"
randomimages[4] = "https://lh3.google.com/u/0/d/1mhrhIVNed4OkH2tyIMzKGt5p70riBORL"
randomimages[5] = "https://lh3.google.com/u/0/d/1P2sBQOwQtRexPQ1NL3Y6hMRjf5MusN99"
randomimages[6] = "https://lh3.google.com/u/0/d/1m1tD5zYlyGu4YXdZIkB6_ilpIZTAsVHX"
randomimages[7] = "https://lh3.google.com/u/0/d/1hvgcl2LsIe54pLA3jW99ECQeJolia9pC"
randomimages[8] = "https://lh3.google.com/u/0/d/1_ULk1sD-SinmnKNQVHC9KcvbnPJlcpyl"
randomimages[9] = "https://lh3.google.com/u/0/d/1DEfXFRxXbEW--bTDGp9vP9MEQKAxtJVo"
randomimages[10] = "https://lh3.google.com/u/0/d/19REvmp6r3EX1c_Khp3WgXeF9xMJVP5Km"
randomimages[11] = "https://lh3.google.com/u/0/d/1DEOAqesdeSp_wUAkQLRc4KnT-eV3ewR8"
randomimages[12] = "https://lh3.google.com/u/0/d/17E9jHKBZuSdYksq0AyI3XKKWqD7F7khv"
randomimages[13] = "https://lh3.google.com/u/0/d/1jGRotx019d_inWmk8Xnxr0mYDT5M2oxe"
randomimages[14] = "https://lh3.google.com/u/0/d/1wdRYe2XOUPdVb0kj05y14sypb5d_0HIF"
randomimages[15] = "https://lh3.google.com/u/0/d/1gTQqUVYWIGSY6JzqHj9MP_3RI2l3qax7"
randomimages[16] = "https://lh3.google.com/u/0/d/15ObEV_NSRP_Cs5_D94Lxkol3xL8nkr5o"
randomimages[17] = "https://lh3.google.com/u/0/d/1T1RZH6LBtOO63F8Lju-iuYRCoPZa9ZAJ"
randomimages[18] = "https://lh3.google.com/u/0/d/1Z6Wc3UTiA2qQFTicWhWxu637dZOclowL"
randomimages[19] = "https://lh3.google.com/u/0/d/1opAnl7UoY8eMGNjFzmPyL4t4P-K8cbxW"
randomimages[20] = "https://lh3.google.com/u/0/d/1rDAkUeO0GVN7Zl3tEjgIDT5lIP6oxm_y"
randomimages[21] = "https://lh3.google.com/u/0/d/1VIqpePv7OfVfreljInL3aURtxXJQXb3b"
randomimages[22] = "https://lh3.google.com/u/0/d/160RTdrFsUxXiLO6-z1eCB3sz_IxuTBnp"
randomimages[23] = "https://lh3.google.com/u/0/d/18mJTHUVw6uH2xZlGqhYpDOSHAfjSqMp0"
randomimages[24] = "https://lh3.google.com/u/0/d/1spZ3sMAUuwNyGdV9KemJluCJAhQW-rBX"
randomimages[25] = "https://lh3.google.com/u/0/d/1Zvd2L0LftsTyUtg6_Ek30UlfCK3t3q99"
randomimages[26] = "https://lh3.google.com/u/0/d/1Jr6bVMUcCa-2dRRDAnsRaxUox3rtRb8T"
randomimages[27] = "https://lh3.google.com/u/0/d/1b26ytD7Qc1bcnuLAjwKQr2T-i1cMQZV5"
randomimages[28] = "https://lh3.google.com/u/0/d/15n0y_VgPgTm6Cs2x3E3BfgEdorFaRqhX"
randomimages[29] = "https://lh3.google.com/u/0/d/1uYHc7znXRwKGuAAFbMbzzaX3_lNpJaZS"
randomimages[30] = "https://lh3.google.com/u/0/d/1bFdDl8jVc73HYN4yVNxZ3gzPxmdhmZ5-"
randomimages[31] = "https://lh3.google.com/u/0/d/1Jyaw1RWMzR7lq00NqIFJAMbfclSpcESV"
randomimages[32] = "https://lh3.google.com/u/0/d/1n-37LXUVelkYZFczZa4viXKGzlg3EaxN"
randomimages[33] = "https://lh3.google.com/u/0/d/1JCSKJVyXQPqSNNneGx__Cmf6_-kxMhbJ"
randomimages[34] = "https://lh3.google.com/u/0/d/1kxUG4JteT8xRAVTJUO8MpOe2Ru62uASB"
randomimages[35] = "https://lh3.google.com/u/0/d/1guCH53nEBtDtYCfvnCCADkBLd9NUzJ2X"
randomimages[36] = "https://lh3.google.com/u/0/d/1m9C_BWCq8iD2-MMOkEfktqSETLr_fqUI"
randomimages[37] = "https://lh3.google.com/u/0/d/1bLBkUb2KWNWBTZw2IwmwjsQ33RlMQ3ex"
randomimages[38] = "https://lh3.google.com/u/0/d/1FUmqT-MF5IKXYd99_hzyeaF4vwerq8gp"
randomimages[39] = "https://lh3.google.com/u/0/d/1DgFlsVeYxo99N52uBEd5KVUISK8y-Pau"
randomimages[40] = "https://lh3.google.com/u/0/d/1XCB7MGq6w7zHbcXEuD2y0GiTQ7Q33bYg"
randomimages[41] = "https://lh3.google.com/u/0/d/1EWzoP7unl0sPEAluqwvsc7npVpYrKYkC"
randomimages[42] = "https://lh3.google.com/u/0/d/1PKpUDR0PVV0SwXEdOffP5tlmFKRVkGaE"
randomimages[43] = "https://lh3.google.com/u/0/d/1IZqSyaWe4s4baON1QWhqMDPaDzWKqFMT"
randomimages[44] = "https://lh3.google.com/u/0/d/1ZqTe9OGsSwwNH38Nv6fml2pTOcEfT4FV"
randomimages[45] = "https://lh3.google.com/u/0/d/15UFGCIj0SRdB072V3fJ-Si_7qajxStaS"
randomimages[46] = "https://lh3.google.com/u/0/d/1RQQP6icG0JfphoLABerQ-7Bi5SMtLTii"
randomimages[47] = "https://lh3.google.com/u/0/d/15n5G7855nSCYvXiV4kFjap1zJUayS6vh"
randomimages[48] = "https://lh3.google.com/u/0/d/1kc318NRw0LXjwUCp4T44QNTk2tHFyH2N"
randomimages[49] = "https://lh3.google.com/u/0/d/1A0y2vUuMrkvJ4kGWAqNhAnHjkRxFA6XI"
randomimages[50] = "https://lh3.google.com/u/0/d/1cbek4qzI0t2H5Djs-eab1-G315p-K_m2"
randomimages[51] = "https://lh3.google.com/u/0/d/10ooKG97IFnZbDNcJPCsKBJlmxaaIt-en"
randomimages[52] = "https://lh3.google.com/u/0/d/109O6TP6HnKNHkC6TlCFvRrhhVYFlgeLX"
randomimages[53] = "https://lh3.google.com/u/0/d/1s07EnZo3M-dnVyUjyUSak3-oToxpgz9g"
randomimages[54] = "https://lh3.google.com/u/0/d/1bs8oKzMeiYkEYRIpetFSNkzDFnmQJ5pD"
randomimages[55] = "https://lh3.google.com/u/0/d/1E77fc8z_Kl3pp1md96vUzYPlnPT4AX8v"
randomimages[56] = "https://lh3.google.com/u/0/d/1GFq5sI1vbZNoAHYk7Ei111wigyCAxWbs"
randomimages[57] = "https://lh3.google.com/u/0/d/1ATW8lg9l7PrxXPJmXjnobORglA8r_BCT"
randomimages[58] = "https://lh3.google.com/u/0/d/18VPptIwmPqCXXSNHxHRyJDIiE6nZpIlQ"
randomimages[59] = "https://lh3.google.com/u/0/d/14FsOFCStK5R7W0UFk5B_BR6KG_8ubDD0"
randomimages[60] = "https://lh3.google.com/u/0/d/1cb_KsFGS4T5r6N7BcC1PK9Pg3OjtYOWa"
randomimages[61] = "https://lh3.google.com/u/0/d/1WkLp2k9zJvAog8XW7g-CHNfXF4hbuy_W"

var preload = new Array()

for (n = 0; n < randomimages.length; n++) {
    preload[n] = new Image()
    preload[n].src = randomimages[n]
}

document.write('<img name="defaultimage" src="' + randomimages[Math.floor(Math.random() * (randomimages.length))] + '"  class="side-random-img">')

function rotateimage() {

    if (curindex == (tempindex = Math.floor(Math.random() * (randomimages.length)))) {
        curindex = curindex == 0 ? 1 : curindex - 1
    } else
        curindex = tempindex

    document.images.defaultimage.src = randomimages[curindex]
}

setInterval("rotateimage()", delay)