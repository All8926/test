<template>

     <button v-for="(item,index) in btnList" :key="index" @click="changeBtn(item)" :class="{active: item == activeNav}">{{item}}</button>

     <!-- 使用v-if的写法 -->
  <!-- <template v-if="currentTab === 'home'">
    <Home></Home>
  </template>
  <template v-else-if="currentTab === 'category'">
    <Category></Category>
  </template>
  <template v-else>
    <About></About>
  </template> -->

  <!-- 使用动态组件的写法, 传值跟之前是一样的 -->
<component :is="currentTab[activeNav]" ></component>

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import Home from './pages/Home.vue';
import Category from './pages/Category.vue';
import About from './pages/About.vue';
const btnList = reactive(['home','about','category'])

let activeNav = ref('home')

let currentTab = ref({
  'home':Home,
  'about':About,
  'category':Category
})

const changeBtn = (item) => {
  activeNav.value = item
}
</script>

<style scoped>
.active{
  color: red;
}
</style>
