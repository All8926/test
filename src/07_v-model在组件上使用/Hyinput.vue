<template>

  <div class=''>
     <input type="text" v-model="why">
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive,computed } from 'vue'
const props = defineProps({
  modelValue:{
    type:String
  }
})

const emit = defineEmits(['updete:modelValue'])



const why = computed({
  set(value){
    console.log(value);
    
    emit('updete:modelValue',value)
  },
  get(){
    
    return props.modelValue
  }
})


</script>

<style scoped>

</style>
