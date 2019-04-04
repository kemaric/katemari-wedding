<template>
  <div class='hello'>
    <h1 class='view-header'>{{ msg }}</h1>
    <!-- <h2>Latest announcements</h2> -->
    <div
      class='pa-carousel-widget photos center'
      data-link='https://photos.app.goo.gl/uChMgVnHRHjmWeYv2'
      data-title='Katherine and Kemari Engagement'
      data-description='35 new photos added to shared album'>
        <img v-for='pic in engagement.original' v-bind:key='pic' v-bind:data-src='pic' src='' alt=''>
    </div>

  </div>
</template>


<script>
export default {
  name: 'photos',
  data() {
    return {
      msg: 'Engagement Pictures',
      engagement: {
        original: [
          'https://lh3.googleusercontent.com/eq1qmtYr5-Av2CBAiOmwZy474LIl_RYmgotSPSz1BY20EEHsU3Z7NV0YVJFEJ0DlH3KMkx4VR2JXAq4KkqBLRrypuStY9fGQCh8TKjVSeQUDw4gMvioeyR5PF8Z50AzaSS2rrizWdzI=w1920-h1080',
          'https://lh3.googleusercontent.com/VlJyQ8ynwsJXgC8RlffgShgqRLECuyo_yzR_ReSbRRVmNpgtJTHdPQOVQ-27zQc2A9XC5rf1lCa_Qxf_v7TnehQHdJ_hJmfOekgerTyHBBeWgLDnWqwgiE78Dc_w27sC5z6ciD48qNc=w1920-h1080',
          'https://lh3.googleusercontent.com/Yp3O9cAFt8j_3SZgAaBeAPN3UULOXrxzhqJai_hJUTn5yB9aJuxwLN6pOcwYGaM8_5uL4prkq1Tfq80HD9tr0hocWI1sVOS2dSk4mVauY25UJsX6WGTz1lxnR-y2KK0VgMnD9SJGkDI=w1920-h1080',
          'https://lh3.googleusercontent.com/QaKT5p6h0rTZ4RgSio9L7D37JDRmXe-aXDhxJWa6huGAF8vHnIIFvmaTY2SSC9bbXkPul1TkWm-40jeo4ss9YIRoYcdvlppaxC7gjc3lAQX6sYch2Va0ivguK29MnwSSxs80d7HGXnI=w1920-h1080',
          'https://lh3.googleusercontent.com/FL-QIaOPguXKgo2-cX9nuGBVB-2nV9WpmJ_lBp7FCtyxR9LoyE2qUavO7j_j6V_4ygmsqTVJ_1BJXADR-18w1mYx6ASw0rMuQ7cjAqj0yvHvyCLfkF78rUnyyLtAX8Nsu70TGwU4GiA=w1920-h1080',
          'https://lh3.googleusercontent.com/L48IEHrPuWLTpVu7WzZ40eMsp7rgTfLvgRbGJ5c-2SsjHYofU6gUx2v02awth6WbEDxiKltvI9odLODzrvpaeelOAY4D6YfwbpTgKofWU0Akdo0OjFLkMBJCgeDeggDau5P15Ut58nQ=w1920-h1080',
          'https://lh3.googleusercontent.com/hcnHxyp_PV4zZhjrCIEa0OSJm53rii0Grh4qplBm3R3s0bsdE3FeBo4XCPKSNMtAJfkO-2VMuFq0V-A9_c2gshhgydfazSFseuCgN0eRpitAGHO_WneU0338wRyyQEaqSsbd6kso6u8=w1920-h1080',
          'https://lh3.googleusercontent.com/q9hbmPQgEbWHFLvi_4vFJ9_GjZbVoY5Vz_YDHRb812Dz4zkbV2oc3OWDGFlIMHD6e5NH2PJa8EfhZPHYc-Bdn9XgaCW4pJVwq38-P7DaanBx77SSlJNpUEvy8HalnwrsGyxTwM0WPe4=w1920-h1080',
          'https://lh3.googleusercontent.com/i3knZDGkQFiBoCs2vKeRuX9daPryUOICaBj1MfExbecEVxK3fsRH1qd-VjeBx-C-drTSYAdZ0iVaEq5IVhe2n0PNzzRGdy4J9NDi4SM_TiefQzTZUKynu1EXIZXBJ32-PyXncVzOdgg=w1920-h1080',
          'https://lh3.googleusercontent.com/n_Y-t5D0Wr9aDB9Q5A5lZpzcnZsQP4UhwS66ZmIyicy9g6P9uripQLCpYpptCUyjoSQ4GhjY75J4kmWV-qDFqx8Ecd4ox4RuG3HGNJZoI7ZToi_8pbYIOWALfJeKwAZRGwn3__WKkhM=w1920-h1080',
          'https://lh3.googleusercontent.com/lUTnIxqBA6aSsiQ48EGS5MHSjGHprCf2fj-ijINMHyMEX1FrT1vA0OppEfQ9DNY-qpMWE3-flZsfMxMpoG7Iujr7tJdCY9cZJrrW7J67UF3Sy_oQ2Y8HdAK82fkVpkoT5VdmJflcMNw=w1920-h1080',
          'https://lh3.googleusercontent.com/Qmj2_ERltpLhJApNULKk24uPaIPU3CjRezcxR6_kk5dmvTa1Y8un5EDakOqrfsoDIsgM5IoBDUAKkmDCR3f-m_X-jqQoO2DqLwko3m0CjL0ie8JgrdCEwhBJBp6F8zfglb-mhpQiQWc=w1920-h1080',
          'https://lh3.googleusercontent.com/fkvyAA33YGfWedO6F28PcmN7yrcZgMrawnQGQxWQ7Lxds0C56pilcVXl_JQYK70W9chE8wfQSj-iUIZkibYfu6nFOmiFpSJYxAy8yGkGfExTGB0MvS2w7cHlqSySAlhh18ZX9ZCn1j0=w1920-h1080',
          'https://lh3.googleusercontent.com/TdbX8TrAnYP-ySy9jDlI81Rq7dBnfCchwQ7mUPOvbuBJdtkIRz35bbIk8nzgQ134XQLqGtfp-y9JyEqGPnMhsEx3qqgxnze0q75Nk8ITMJc22lQxfHcugfqdkxSxEzDcDB-thT_izhU=w1920-h1080',
          'https://lh3.googleusercontent.com/SrMUsnbbIPmkXOyQvwF1Hcu5ac7rMBsBHEp2YL1gI9PwybFNbBuu-tPoDcHXKxOF8KLwyQmOBhTMfivKygCqSy2YYXn0O6wMm9wgDdkiyvPWCarTaRUh252aQ0GG0_c8tzMMLDCB8J4=w1920-h1080',
          'https://lh3.googleusercontent.com/tzwz4xzHz0_Z9qZEUtccojGBc-hLVUYO-DUrYNj7ceEQ1fYtxBBoa8RduZ9yfd1bG8Mwu5F0n2ejfF16Drk2GVL51y68ME2CnKuydkaho2xIHUAjxJcWsy7e8P7Q2BPtFu0heKzr25g=w1920-h1080',
          'https://lh3.googleusercontent.com/yWMsF8VeJeBLafDp0ovhV3gAtwmz08hi7tOIY1wc8li6fNA5CfPS4EH2Ml9ihAqnlFbg-MA9-5Lwtx2BSqcKOXoRPGL-vMj6abs-6WnM0mbTvIswICAwTtyD3iQYJECNiUG01BhWR5g=w1920-h1080',
          'https://lh3.googleusercontent.com/RlrWmnNmpjeqekkZXJNAAavZX4TmASS1ZikmAjQ_2V23OJYl34LSkwLWnj_QZT6zE6_Isjt7_eT3uRIzKqZeVsRULciTVVDGrOPQAwAXxjgGJ6IX62NnwCO6WvdhP0sDdHbC4lZjYZY=w1920-h1080',
          'https://lh3.googleusercontent.com/aWf0Z1RRspM4cjz9wo3CyiQ58O2hvSy-R8rtk73qRaYnT5fHOOrRVWUoSZF4cK3XGy_beJdansQGtrmgZkmT5v3X_yZlzFmvZsTnJkS0TS4ocnMgQBJaVeYLeLwEeiDFT8j9hE5smXs=w1920-h1080',
          'https://lh3.googleusercontent.com/thnH_va1RMS5CKJaW0bZa6z_iNR4fQSCISP-QZ5lSugnptYu2LyARz7XVlBTK6ItgYtVQ0ZL3CMwe5yTR7GaUIHjj2zYvW4bfwArUa7rxwsbmNRltD1VMxW8Lwpszu_Nog_1NBY9gOU=w1920-h1080',
          'https://lh3.googleusercontent.com/IrNAHNmUe7hec0_77T0LtEgxc3h3Qd2fgTw97Bsbv9gir-LXVWAn9DXNE9djc58mF-fxEa1teWost0jOwlnWUiC26ZN0_Sh3nlHk2PTopVU10sNUHRgvY1DR0JC4YVXdlOHz4NOUD5k=w1920-h1080',
          'https://lh3.googleusercontent.com/aoBlAk0PnHgxUjLKkgpyf4WTmgt85FKevN7FvP7FM9EsxdSuewUbeFihICizlM7MAIk_70LWTQWCNxA5ZvFjf1Uc8e7dPIOvpF8ML7RONC4VwxWwrPnFNfJrLCktE-d2MDeROujzxHg=w1920-h1080',
          'https://lh3.googleusercontent.com/ec3J6zGv1x8U5gz2-RWJmOTrbHwd6pPFkDqePRh6s56DfDYG28PS1PndpTAHkdSRldL7e9T49r-0GZWxX96PYB-26ivneXg86o5gnr3x4ml0ey8d3tM_29JP1O8YJc29RONZNYoQBlU=w1920-h1080',
          'https://lh3.googleusercontent.com/BhDK9qv9Zyy87t3OLRCiVmFGK9scvUXOOZZchmdTS4Hg_cJ-xu85dtOAHXuiUtfHEka0BKCRfASiLNWnVezYHudl6PHeag2AdOhqMTPC_tl_wytGDAv3mkC4nltv1FXP8kqL9RmTzh8=w1920-h1080',
          'https://lh3.googleusercontent.com/H_gcBRlJWwwEOUsqPrNCE38W0viRqWL20-qbKkweU0txjNEtuTq9WCk7pqrTr7ghtHomkMGjOWDKzD9bOGnrbXodJ4tEUMb5wceBGY7z3mRj4KhwEWs9jw4Er8mYAyPTJWfGQDaFYF8=w1920-h1080',
          'https://lh3.googleusercontent.com/Vp_Ql7sQUfagy3uIyPFsRG1keMp6lsaJcrY2zCakr0BHf1UMPcJY9YqhLh7ZEu9XbweY4t8S6YRdjDYTJ3QiPdcWI6VT-9frODIoT7Qp-P9MSf0rAfuwM9RmRJ21SrfUcUOsLuIJbu4=w1920-h1080',
          'https://lh3.googleusercontent.com/-Y6nR8HeoyE1v0ZAylQ-uT4hQFH_jTyhPkpuzDxRlnNzqdnz1llj8p7kqywaT3P2-ikHfhfz3gPKWUQ0zY2_EuolSlzr-n2u93IMVMS_wWgynGBy7QOTeIqEooerZ1rMKGkNaHHA6DM=w1920-h1080',
          'https://lh3.googleusercontent.com/o4HJBUtrgo0k87S1TDCyjEHb6v7Glw0zwSKlp4QXl_rNKi1rs1nx4zURhCkWIt-JrVfG6cJhTxUWHBuqSoxmdUBWB4L6iEHV_aPxKSd9VjchOPtLAr0z8Jfj9UThMYZ-t2CcykxHlro=w1920-h1080',
          'https://lh3.googleusercontent.com/3w1_sizteQFuTTstJae6TmavttdcKsoiN4d0HN6B71JDJW06GzMz308nXZcjAD6g85xLQ3LblEld2UzdkpLBJjvvrfAt4YcqL_6zXqGxznjJTwhLeWpF174SnkpYafCSEwdKljJ8vWE=w1920-h1080',
          'https://lh3.googleusercontent.com/QcDmj068HlXHB6FOxI5c_w6XdBZIOXLG7F4XYf-TPdj3BM6pmh5A1JGwfI15WBVkt9dw5UuUlihPodigV8URZTbhPjnj55rG21D04N2S5RRn6v1-nGaRkDVPTnJC-UGZzg6y9eIATQc=w1920-h1080',
          'https://lh3.googleusercontent.com/ss3Sk9BKC_1NXaFPhdBwzm0tC2rc4_10Zu1hLps4E0G79Ij7uvt6268CdC-CexXpoD2wuagbd4jZGCwfTci6hcDNGxUbeDyfJyXEP6UUsGdzDlMA8oCa2LYFK1AC0XO47UPGrzayehY=w1920-h1080',
          'https://lh3.googleusercontent.com/xHICv-oPR0SuozWBwFY3OflSVyYv1wthOfmnlCS7CZFSrRGpEJZ-aturxOy_piGFP3BSprkggbUYPrGETICU2I3p1JN1OvdLbXYSBvjclTRSp3PpNmlzLbPNIjzhzKi9J1hEK-3tjzA=w1920-h1080',
          'https://lh3.googleusercontent.com/Htx3KP9fx2M15cnLPInnhq-zwLsnQkKUYbt9H6VH-Vs2w5wVHN8mxtL21v9-znZ7Ob4icl-Gd216_3HzJBgUKO4rq-_NBkfMPoAMALrBcWII0LyYansogQFJGgMysoxJUxuIwasuOUk=w1920-h1080',
          'https://lh3.googleusercontent.com/VJq2FtegAJGYDRoVvgx2_1UgkNby7QIzKYr7mAV4fX4nqi-_OM7688nXSra7bIJeNtb9q3RLGAxzs0XaSRxH1GIozwB4gqfpC5RBWT4tb-5yxiNjxWOtE-Zcm0kY_JYbXIIjZv2L_xc=w1920-h1080',
          'https://lh3.googleusercontent.com/p1acjjI78O5yWJtRKf-VQGiQ8MDWHH-y3n1IiFzFf3Y_0Gk33rKzSbmsboglEfaF5enhkrubYzUencXF9ibMQ8PcxYIRj27jKFt9C49xsT22IbzNvvopQwxIrwaTpAyK7xkQdmXpNiQ=w1920-h1080',
        ],
        official: [],
      },
    };
  },
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style>
h1,
h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495e;
}

.photos {
  height: 25rem;
  width:100%; 
  display:none;
}
</style>
