<template>

  <div class=''>
     <h2>{{ name }} -- {{ age }}</h2>
     <button @click="changeName">修改name</button>
     <button @click="changeAge">修改age</button>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive, watchEffect, watch} from 'vue'

const name = ref('why')
const age = ref(20)
const info = reactive({name:'kobe',age:90})
const stop = watchEffect(() => {
  // console.log('name',name.value);
  // console.log('age',age.value);
  
})

// watch(() => info.age, (newvalue, oldvalue) => {
//   console.log(newvalue, oldvalue);
// })

// 传入一个可响应式对象(reactive对象/ref对象）时，获取到的是 refactive响应式对象
// watch(info, (newvalue, oldvalue) => {
//   console.log(newvalue, oldvalue);
// })

// 如果希望 newvalue 和 oldvalue 是一个普通对象
// watch(() => {
//   return {...info}
// }, (newvalue, oldvalue) => {
//   console.log(newvalue, oldvalue);
// })

// ref对象获取newvalue 和 oldvalue 是value值的本身
watch(name, (newvalue, oldvalue) => {
  console.log(newvalue, oldvalue);
  
})



const changeName = () => {
  // info.name = 'coder'
  name.value = 'aaaaaa'
}
const changeAge = () => {
  info.age++
  // 停止监听
  if(age.value > 25){
    stop()
  }
  
}
</script>

<style scoped>

</style>
