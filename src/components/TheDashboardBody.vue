<template>
  <div class="flex absolute vh-auto top-4 left-2 right-2 w-90 center mw9">
   <div class="mr3 bg-white w-70 br3 pa3">
    <form @submit.prevent="generateInvoice" class="flex justify-between flex-wrap">
      <div v-for="basicinfo in basicData" :key="basicinfo.id" class="w-50-l w-100">
        <TheDashboardInput v-model="basicinfo.inputdata" :formData="basicinfo.formdata" :type="basicinfo.type" :otherData="basicinfo.otherdata"/>
      </div>
      
      <h3 class="dark-blue w-100 f3 underline">ITEMS</h3>
      <div v-for="item in itemsData" :key="item.id" class="w-50-l w-100">
        <TheDashboardInput v-model="item.inputdata" :formData="item.formdata" :type="item.type" :otherData="item.otherdata"/>
      </div>
      
      <div class="dn" v-if="showTemplate">
          <TheInvoiceTemplate :basicDataInfo="basicDataInfo" :itemInfo="itemInfo" ref="ref" />
        </div>

      <div class="w-100">
          <button type="submit" class="f6 ttu tracked black-80 bg-black pa3 br3 white bb link b--black hover-white hover-bg-dark-blue bg-animate pointer">Create Invoice</button>
        </div>
    </form>
    
   </div>

   <div class="bg-white w-30 br3 pa3">
     <iframe :src="iframeSRC ? iframeSRC : initialSRC" width="100%" height="100%" />
   </div>
  </div>
 </template>
 
 <script>
 import TheDashboardInput from "@/components/TheDashboardInput.vue";
 import itemsData from "../../util/items-form-data.json";
 import basicData from "../../util/basic-form-data.json";
 import TheInvoiceTemplate from "@/components/TheInvoiceTemplate.vue";

 export default {
   components: {
    TheDashboardInput,
    TheInvoiceTemplate,
   },
   data: ()=>({
    basicData,
    itemsData,
    basicDataInfo: {},
    itemInfo: {},
    iframeSRC: '',
    initialSRC: 'https://res.cloudinary.com/moerayo/image/upload/v1668849124/invoiced.pdf',
    showTemplate: false,

   }),
   methods: {
    generateInvoice() {
      this.generateBasicDataInfo()
      this.generateItemInfo()
      if(!this.basicDataInfo.invoicefrom){
        this.showTemplate = false
        } else {
         this.showTemplate = true
         this.$nextTick(() => {
          this.iframeSRC = this.$refs.ref.$refs.ref.$el.src
        });
      }
    },
    generateBasicDataInfo() {
      let newBasicData = basicData.map(({otherdata,inputdata })=> ({[otherdata]:inputdata}))
      this.basicDataInfo = Object.assign({}, ...newBasicData)
    },
    generateItemInfo(){
      let newItemData = itemsData.map(({otherdata,inputdata })=> ({[otherdata]:inputdata}))
      this.itemInfo = Object.assign({}, ...newItemData)
    }
  }
 }
 </script>
 
 <style>
   .top-4 {
     top: 6.5rem
   }
 </style>