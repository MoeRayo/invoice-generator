<template>
  <div>
    <cld-image publicId="Invoices.pdf" ref="ref" >
      <cld-transformation flags="rasterize" />
      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 60, text: userData.invoicefrom,  fontWeight: 'bold'}" color="#023982" gravity="west" x="130" y="-670"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 45, text: userData.invoiceto, textTransform: 'uppercase' }" color="#023982" gravity="west" x="130" y="-480"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: userData.date, textTransform: 'uppercase' }" color="#000" gravity="west" x="560" y="-525"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: userData.invoicenumber, textTransform: 'uppercase' }" color="#000" gravity="west" x="610" y="-465"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 43, text: userData.total, textTransform: 'uppercase' }" color="#023982" gravity="west" x="990" y="-475"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: userData.bankname, textTransform: 'uppercase' }" color="#5b4f47" gravity="west" x="265" y="255"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 20, text: userData.accountnumber, textTransform: 'uppercase' }" color="#5b4f47" gravity="west" x="265" y="285"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 30, text: userData.subtotal, textTransform: 'uppercase' }" color="#000" gravity="west" x="1000" y="180"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 30, text: userData.tax, textTransform: 'uppercase' }" color="#000" gravity="west" x="1000" y="230"/>

      <cld-transformation :overlay="{fontFamily: 'Poppins', fontSize: 43, text: userData.total, textTransform: 'uppercase' }" color="#000" gravity="west" x="1000" y="300"/>

    </cld-image>  
  </div>
</template>

<script>
export default {
  name: "TheResumeTemplate",
  props: {
    userData: {
      type: Object
    }
  }
}
</script>