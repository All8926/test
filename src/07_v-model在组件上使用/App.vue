<template>

<Hyinput v-model="message"></Hyinput>
<!-- 组件上使用 v-model 相当于这样 -->
<!-- <Hyinput :modelValue="message" @update:model-value="message = $event"></Hyinput> -->
<h2>{{ message }}</h2>
</template>

<script setup >
import {ref, reactive,toRef} from 'vue'
import Hyinput from './Hyinput.vue';
let message  = ref('helo world')


</script>

<style scoped>

</style>
