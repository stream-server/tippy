const images = [
'https://lh3.google.com/u/0/d/1nOSIj-IdXtkFJZ_RO_CWvKsybv35GcYY=w1920-h1080',
'https://lh3.google.com/u/0/d/1jRS9n9Subz7YZewtU4EV52wI0MV7VUuY=w1920-h1080',
'https://lh3.google.com/u/0/d/1mFQANibdK5NrLMorzxu6R_YWkQ62twJH=w1920-h1080',
'https://lh3.google.com/u/0/d/1FPkn9kshc47nTLUVWCfgyCTnIsX4OGOE=w1920-h1080',
'https://lh3.google.com/u/0/d/1DvXsegVDhuZNjuKBCUX6BTZEBFczTgAu=w1920-h1080',
'https://lh3.google.com/u/0/d/1bQfX9suuKVRd72Pg2pYQkkBwONtP9ptL=w1920-h1080',
'https://lh3.google.com/u/0/d/1msRc7IuqAeVOkG4aDWj8xuD47r_hnYzr=w1920-h1080',
'https://lh3.google.com/u/0/d/1zOrTd6hZlOMC4R3FRnGO1LqiHmL0dijm=w1920-h1080',
'https://lh3.google.com/u/0/d/1N7lWiznUrBIPXYQCo5HQW56ZfveymFHD=w1920-h1080',
'https://lh3.google.com/u/0/d/1wKQK6BxwTvHhF6Sodbz1ldKLFlh5DDF2=w1920-h1080',
'https://lh3.google.com/u/0/d/1FQVQiKRyellgk6lHSvMJxMBc2mb3woPp=w1920-h1080',
'https://lh3.google.com/u/0/d/1_7PRmiY9RBPGL2zaW-XBOFaTbK9dZMWd=w1920-h1080',
'https://lh3.google.com/u/0/d/1VPyD0NFZARfHlCFahZHyeyLpesxP3Vci=w1920-h1080',
'https://lh3.google.com/u/0/d/1gv1zYF4NSnsOpOR-OvwmDjTbuIdxB9H2=w1920-h1080',
'https://lh3.google.com/u/0/d/1re9xbfmF-Me63oapPD8ZL76FRTY-yAHt=w1920-h1080',
'https://lh3.google.com/u/0/d/1rt3BDZ9L-X50wsW_QI1tRDeq7S3MNuXJ=w1920-h1080',
'https://lh3.google.com/u/0/d/16PQfO2FvkbDs-w1OS5IKF8skZTgOqB7Q=w1920-h1080',
'https://lh3.google.com/u/0/d/1ZKitLrt4f8gLliE0UGDiOE1gYUPXBVqq=w1920-h1080',
'https://lh3.google.com/u/0/d/1NtTfk3r4Qbr7CCirSH0tt5D2ifT228GV=w1920-h1080',
'https://lh3.google.com/u/0/d/1xZm6mVPECeLGGCiWUfUqIn8Bsmcu_TAV=w1920-h1080',
'https://lh3.google.com/u/0/d/1zZUPgMW-qRVgFSwpssj2A52KafaRvi3c=w1920-h1080',
'https://lh3.google.com/u/0/d/1EbXm5zq5z8hFVfQzJARextJXsm_BsNyJ=w1920-h1080',
'https://lh3.google.com/u/0/d/16nnEegZ62JjoRs3jdDBa-iiXYBnTNtp0=w1920-h1080',
'https://lh3.google.com/u/0/d/10yQFsYGTFRpwfmNZ8e6OIGtJ6nVUIWIL=w1920-h1080',
'https://lh3.google.com/u/0/d/1Q2OXETJlhsvLavJgdUR6DOQqFFhn7CqY=w1920-h1080',
'https://lh3.google.com/u/0/d/1HMcAdhNMle24LBcUToqmloh2No-EqWUr=w1920-h1080',
'https://lh3.google.com/u/0/d/1w-E0elVLnY8NY_s_FR8pHGlIip1xF4Us=w1920-h1080',
'https://lh3.google.com/u/0/d/1fgikhEN-DwRSPrq_36oJFyisYi2TsYj9=w1920-h1080',
'https://lh3.google.com/u/0/d/17_HP3RIHU7Bypz9EIL0xmG6idnjcVBP7=w1920-h1080',
'https://lh3.google.com/u/0/d/1Bbrsf4pLT7hoR3ifVcBeEHccAd7kxDXw=w1920-h1080',
'https://lh3.google.com/u/0/d/1QvJjSM8oRzuW1jD56pb72UNBbH446daU=w1920-h1080',
'https://lh3.google.com/u/0/d/1xqAKRs8Hf2k50PplEGCEXA_ghqLMlbJ8=w1920-h1080',
'https://lh3.google.com/u/0/d/1X1KdZjyh_gKko0elLCCKFrrcxmMaAfOj=w1920-h1080',
'https://lh3.google.com/u/0/d/1GisdDZzGZVo6rh6KX8CfSdi_ueD4NgsG=w1920-h1080',
'https://lh3.google.com/u/0/d/1RSn9-XnptVyQATYmJSk0_FVp9S8l7AJg=w1920-h1080',
'https://lh3.google.com/u/0/d/1_lta82gLQPuRVKHN6Y58V6bTnjvtSgXV=w1920-h1080',
'https://lh3.google.com/u/0/d/1Oreyh-iGZEe6ROTcJa8A77c5aHRq82hH=w1920-h1080',
'https://lh3.google.com/u/0/d/1REGu327j75Cd6DrlVsYDqjbpNfzfV675=w1920-h1080',
'https://lh3.google.com/u/0/d/17LyMS-ouuI9NijSPPpkUA9PL3tByG9dw=w1920-h1080',
'https://lh3.google.com/u/0/d/1zmPssepzwA1v7obNaEugW7CweJzbhRqG=w1920-h1080',
'https://lh3.google.com/u/0/d/1LytyyjtDencY0fO_aK1P-Ld04NC6839f=w1920-h1080',
'https://lh3.google.com/u/0/d/1XSXX4FDE3gzCqy1IOB00FWJVetDIRr6D=w1920-h1080',
'https://lh3.google.com/u/0/d/1kNTashCROOmH8t512sLvk8SXDt8Wja-6=w1920-h1080',
'https://lh3.google.com/u/0/d/1tR8YzGiJ4fOEpeo5NQL5j8X0dusXSf1i=w1920-h1080',
'https://lh3.google.com/u/0/d/1ZT26ymIMb2-3fTxDt7MgGgccTYkvBEC6=w1920-h1080',
'https://lh3.google.com/u/0/d/1aSXfNZn2ngk-MNcadGyUhvDgRTpQo3_f=w1920-h1080',
'https://lh3.google.com/u/0/d/1mDa_yulqgjEVY6oUewtqYbwgsmFPakY0=w1920-h1080',
'https://lh3.google.com/u/0/d/1bzEw-p_ToEPSWAwqeL3B3qCIhvK-nhIC=w1920-h1080',
'https://lh3.google.com/u/0/d/1sFiuy0uNvpGLfY9dsX0dKVoms8s2uFlF=w1920-h1080',
'https://lh3.google.com/u/0/d/1Y43_aVDkE3JrmFFt_j0qMP6W06WdREZP=w1920-h1080',
'https://lh3.google.com/u/0/d/1i5LQD-VO2TSIthk4F_5PnxJ9afZ_e-C5=w1920-h1080',
'https://lh3.google.com/u/0/d/1Ma-M01RbkGIyEvXZ_FnNLEKgB1shpnl6=w1920-h1080',
'https://lh3.google.com/u/0/d/1ZuatJAt-z1xd_QzuvZXjxzvCDonpY-0p=w1920-h1080',
'https://lh3.google.com/u/0/d/1XxxMsE_TWCUPnWKCMtw9q6r3ASrupdV3=w1920-h1080',
'https://lh3.google.com/u/0/d/1-VYI1-jwRWsgWq7AT_he_hqLwf3flUJw=w1920-h1080',
'https://lh3.google.com/u/0/d/1748BDVFvaQTQDhmFRj95kRha34G8EUGL=w1920-h1080',
'https://lh3.google.com/u/0/d/1_dESUR5_XCtayRjKgk2kT4i1z-DDYT6D=w1920-h1080',
'https://lh3.google.com/u/0/d/1pt_sn5F5_aYOOCp--uDHmrdFBRbKhF0u=w1920-h1080',
'https://lh3.google.com/u/0/d/1GVG9N51h545U8X8LJSSplceNF9WvgguX=w1920-h1080',
'https://lh3.google.com/u/0/d/1fk6TCi8u42DoEXl23We86zcccfCGyxJ1=w1920-h1080',
'https://lh3.google.com/u/0/d/10CeiI8WAebycgPrgGYdulqN4enfT9k-X=w1920-h1080',
'https://lh3.google.com/u/0/d/1_P2bvaKuteB1sVHYnY3EbN0shq7N5Gco=w1920-h1080',
'https://lh3.google.com/u/0/d/1cczUMSOPb8DcGU982B7jNc79262swjI1=w1920-h1080',
'https://lh3.google.com/u/0/d/1QPc4tQ84aMBcB1LTuV1Yse8MqRVEdFK2=w1920-h1080',
'https://lh3.google.com/u/0/d/1FHyoVEOIrC_HHfnNXwzCWT4fyEwz7GLU=w1920-h1080',
'https://lh3.google.com/u/0/d/1l0lvu-5Kz25dAgINbED_9BZZhcm7KyWP=w1920-h1080',
'https://lh3.google.com/u/0/d/1qkbtCBUk7G3tA3_eGSGJZqVSVfKjiX5C=w1920-h1080',
'https://lh3.google.com/u/0/d/1-j8fA5SaZPpURc4X3YzWpCJAvilZ9OOc=w1920-h1080',
'https://lh3.google.com/u/0/d/1rF_O6VjAEa_-Jch--cgW4HcAeE45uJJA=w1920-h1080',
'https://lh3.google.com/u/0/d/1DrNupqpdCB2IBn-q6fshuMUPaPx4rCd0=w1920-h1080',
'https://lh3.google.com/u/0/d/1A84MHUG8oB-Dt4vDXFbmmTx1WbVEGk37=w1920-h1080',
'https://lh3.google.com/u/0/d/10M8ysHWh83iTx_DyTuHul6Fo2FK19Sku=w1920-h1080',
'https://lh3.google.com/u/0/d/1zmwkQMjKsw5_fJGxiKAy-7-1FYEaCNqY=w1920-h1080',
'https://lh3.google.com/u/0/d/1qPvwGszj8felGiKPddqJhvevepPQipii=w1920-h1080',
'https://lh3.google.com/u/0/d/1HrLg-4yO8db5dsxUEmRMhA9UyuaIE5lT=w1920-h1080',
'https://lh3.google.com/u/0/d/1Y5FhL8otcooJP7sEFZKRt4CDMKUfSxmc=w1920-h1080',
'https://lh3.google.com/u/0/d/1HVqjjtx_ZcgHQdMKbq7uH2CMnuZuJoI4=w1920-h1080',
'https://lh3.google.com/u/0/d/1MKl0Nu5rDAgssnaceSD-FFe2l06ED5LA=w1920-h1080',
'https://lh3.google.com/u/0/d/1YoLPeyekzyy8k_IH8up09J-VyhURE5Md=w1920-h1080',
'https://lh3.google.com/u/0/d/13Sq84jtCrzQ7DEFuflvje6XvGB7G3WP1=w1920-h1080',
'https://lh3.google.com/u/0/d/1h0clV09DHEmGYtET-DjfhdKFg1GXZ4r5=w1920-h1080',
'https://lh3.google.com/u/0/d/1Ztpxt0F8T79kqFs4jjqmCwJuEImCNGDU=w1920-h1080',
'https://lh3.google.com/u/0/d/1snlHVJgIbQENC9jZ0fZpI94eiuemTOHu=w1920-h1080',
'https://lh3.google.com/u/0/d/1IWCFbff3w8-ygyC9xJNMDw78bkZK7muB=w1920-h1080'
]; 

function randomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    const header = document.querySelector('.header');
    header.style.backgroundImage = `url(${randomImage})`;
}

randomImage(); // 페이지 로드 시 한 번 실행