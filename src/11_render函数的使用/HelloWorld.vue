

<script>
  import { ref, reactive,h } from 'vue';
  export default {
    render(){
      return h('div', null, [
        h('h2', null, 'HelloWorld'),
        this.$slots.default ? this.$slots.default({name:'呵呵呵'}) : h('span',null, '我是HelloWorld')
      ])
    }
  }
</script>

<style  scoped>
</style>
