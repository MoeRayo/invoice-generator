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

      <label for="notes" class="db mv3 dark-blue w-100 f3 underline fw7 ttu">NOTES</label>
      <div class="w-50-l w-100">
        <textarea name="notes" id="notes" class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"></textarea>
      </div>
      
      <div class="w-100">
          <button type="submit" class="f6 ttu tracked black-80 bg-black pa3 br3 white bb link b--black hover-black hover-bg-gold bg-animate pointer">Create Resume</button>
        </div>
    </form>
    
    
   </div>
  </div>
 </template>
 
 <script>
 import TheDashboardInput from "@/components/TheDashboardInput.vue";
 import itemsData from "../../util/items-form-data.json";
 import basicData from "../../util/basic-form-data.json";

 export default {
   components: {
     TheDashboardInput,
   },
   data: ()=>({
    basicData,
    itemsData,
    basicDataInfo: {},
    itemInfo: {}
   }),
   methods: {
    generateInvoice() {
      this.generateBasicDataInfo()
      this.generateItemInfo()
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