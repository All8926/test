<template>

  <div class=''>
     <!-- <h2>{{ message }}</h2> -->
     <h2>{{ state.name }}</h2>
     <h2>{{ age }}</h2>
     <button @click="change">修改</button>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive, defineComponent, toRefs, toRef} from 'vue'
import {demoMixin} from './minxins/demoMixin'
const minix = defineComponent({
  minixs:[demoMixin]
})

const state = reactive({name:'why',age:19})
// let {name,age} = toRefs(state)
let age = toRef(state,'age')

const change = () => {
  // name.value = 'coder'
  age.value = 20
}
</script>

<style scoped>

</style>
