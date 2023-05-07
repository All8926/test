<template>


  <show-message :list="list" @exposeData="exposeData"></show-message>
  <h2>{{list[count]}}</h2>
</template>

<script setup lang='ts'>
import {ref, reactive,toRef, nextTick } from 'vue'
import ShowMessage from './ShowMessage.vue';
const list = reactive(['衣服', '空值', '鞋子'])
let count = ref(0)
const exposeData = (index) => {
  count.value = index



}
</script>

<style scoped>

</style>
