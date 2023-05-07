<template>

  <div class=''>
    <template v-for="(item,index) in list" :key="index">
      <!-- 传值 -->
      <slot name="why" :item="item" :index="index" >
        
      </slot>
      <!-- <slot  :item="item" :index="index" >
        
      </slot> -->
    </template>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
const props = defineProps({
  list:{
    type:Array
  }
})
</script>

<style scoped>

</style>
