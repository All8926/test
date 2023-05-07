<template>
  <div class=''>
    <div class="one">
      <slot :name="title" >
        
      </slot>
    </div>
    <div  class="two">
      <slot name="one">
        
      </slot>
    </div>
    <div class="aaa">
      <slot name="two" >
       
      </slot>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const props = defineProps({

  title: {
    type: String
  }
})
</script>

<style scoped>
.one {
  color: red;
}

.two {
  color: yellow;
}

.aaa {
  color: green;
}
</style>
