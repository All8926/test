<template>

 <!-- v-slot用[]代表值是动态的  'v-slot:'可以用'#'代替 -->
     <nav-bar  :title='name'>  
      <template v-slot:[name]>
        <h2>
          还好哈哈哈
        </h2>
      </template>
     </nav-bar>
  

</template>

<script setup lang='ts'>
import {ref, reactive} from 'vue'
import NavBar from './NavBar.vue';
const name = ref('two')
</script>

<style scoped>

</style>
