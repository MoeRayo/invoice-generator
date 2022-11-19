<template>
  <div>
    <label for="otherData" class="db mb3 black-70 ttu fw7">{{formData}}</label>
    <input
      :value="inputData"
      :type="type"
      id="otherData"
      name="otherData"
      class="db mb3 w-90 br2 pa2 ba bw1 b--black bg-black-05"
      :placeholder="formData"
      @input="$emit('input', $event.target.value)"
    >
  </div>
 </template>
 
<script>
export default {
  props: ["inputData", "formData", "type", "otherData"]
}
</script>