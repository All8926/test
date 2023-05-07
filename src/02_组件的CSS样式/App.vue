<template>

  <div id="app">
    <h2>我是app</h2>
     <Hello-world></Hello-world>
  </div>

</template>

<script setup >
import {ref, reactive} from 'vue'
import HelloWorld from './HelloWorld.vue'
</script>

<style scoped>
h2{
  color: red;
}
</style>
