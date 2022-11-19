<template>
  <div>
    <cld-image publicId="Invoicing.pdf" ref="ref" >
      <cld-transformation flags="rasterize" />
      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 60, text: basicDataInfo.invoicefrom,  fontWeight: 'bold'}" color="#023982" gravity="west" x="130" y="-670"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 45, text: basicDataInfo.invoiceto}" color="#023982" gravity="west" x="130" y="-480"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: basicDataInfo.date}" color="#000" gravity="west" x="560" y="-525"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: basicDataInfo.invoicenumber}" color="#000" gravity="west" x="610" y="-465"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 43, text: basicDataInfo.total}" color="#023982" gravity="west" x="990" y="-475"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: basicDataInfo.bankname}" color="#5b4f47" gravity="west" x="265" y="255"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: basicDataInfo.accountnumber}" color="#5b4f47" gravity="west" x="265" y="285"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 30, text: basicDataInfo.subtotal}" color="#000" gravity="west" x="1000" y="180"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 30, text: basicDataInfo.tax}" color="#000" gravity="west" x="1000" y="230"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 43, text: basicDataInfo.total}" color="#000" gravity="west" x="1000" y="300"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 35, text: itemInfo.itemone}" color="#000" gravity="west" x="155" y="-248"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 35, text: itemInfo.itemtwo}" color="#000" gravity="west" x="155" y="-180"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 35, text: itemInfo.itemthree}" color="#000" gravity="west" x="155" y="-80"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 35, text: itemInfo.itemfour}" color="#000" gravity="west" x="155" y="-1"/>

    </cld-image>  
  </div>
</template>

<script>
export default {
  name: "TheResumeTemplate",
  props: {
    basicDataInfo: {
      type: Object
    },
    itemInfo: {
      type: Object
    }
  }
}
</script>