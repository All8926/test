<template>

  <div class='' v-for="(item,index) in list" :key="index" @click="showTitle(index)">
     {{ item}}
  </div>
 
</template>

<script setup>
import {ref, reactive} from 'vue'
const title = ref('h哈哈哈哈')
const props = defineProps({
  list:{
    typeof:Array
  }
})
const emit = defineEmits(['exposeData'])

const showTitle = (index) => {
emit('exposeData',index)
}
</script>

<style scoped>

</style>
