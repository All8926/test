

<script>
  import { ref, reactive,h } from 'vue';
  export default {
    // 方式一
    // data() {
    //   return {
    //     count:0
    //   }
    // },
    // render(){
    //   return h('div',{class:'app'}, [
    //     h('h2',null,`count: ${this.count}`),
    //     h('button',{onClick: () => this.count++}, '+1'),
    //     h('button',{onClick: () => this.count--}, '-1'),
    //   ])
    // }

    // 方式二
    setup(){
      const count = ref(0)
      return () => {
        return h('div',{class:'app'}, [
        h('h2',null,`count: ${count.value}`),
        h('button',{onClick: () => count.value++}, '+1'),
        h('button',{onClick: () => count.value--}, '-1'),
      ])
      }
    }
  }
</script>

<style  scoped>
</style>
