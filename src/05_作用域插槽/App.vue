<template>
  <show-name :list="list">
    <!-- 用 slotProps  取值，slotProps这个名字是自己定义的 -->
    <template v-slot:why="slotProps">
      <button>
        {{ slotProps.item }} - {{ slotProps.index }}
      </button>
    </template>
  </show-name>

  <show-name :list="list">
  <!-- why是具名插槽的名字 -->
    <template v-slot:why="slotProps">
      <strong>
        {{ slotProps.item }} - {{ slotProps.index }}
      </strong>
    </template>
  </show-name>

  <!-- 当使用默认插槽不是具名插槽的时 可以简写 不用template标签 -->
  <!-- <show-name :list="list" v-slot="slotProps">
      <button>
        {{ slotProps.item }} - {{ slotProps.index }}
      </button>
      <template v-slot:why="slotProps">
      <strong>
        {{ slotProps.item }} - {{ slotProps.index }}
      </strong>
    </template>
  </show-name> -->
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
import ShowName from './ShowName.vue';
const list = reactive(['衣服', '裤子', '鞋子'])
</script>

<style scoped></style>
