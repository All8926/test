<template>

  <div class='box'>
     <h2>当前计数：{{ counter }}</h2>
     <h2>当前计数*2: {{ doubleCounter }}</h2>
     <button @click="increment">+1</button>
      <h2>localStorage的值: {{ data }}</h2>
    <button @click="changeData">修改localStorage的值</button>
      <div class="scroll">
        <p>scrollX: {{ scrollX }} px</p>
        <p>scrollY: {{ scrollY }} px</p>
        <p>mouseX: {{ mouseX }} px</p>
        <p>mouseY: {{ mouseY }} px</p>
      </div>
  </div>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import { useCounter,
  useTitle,
  useScrollPosition,
  useMousePosition,
  useLocalStorage,} from './hooks/index'

const {counter, doubleCounter,increment} = useCounter()

const title = useTitle('why')
setTimeout(() => {
  title.value = 'aaa'
}, 2000);

const {scrollX, scrollY}  = useScrollPosition()
const {mouseX, mouseY}  = useMousePosition()

const data = useLocalStorage('info',{name:'lisi',age:99})
const changeData = () => {
  data.value = '哈哈哈哈'
}
</script>

<style scoped>
.box{
  width: 3000px;
  height: 3000px;
}
.scroll{ 
  position: fixed;
  bottom: 20px;
  right: 20px;
}
</style>
