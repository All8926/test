

<script>
  import { ref, reactive,h } from 'vue';
  import HelloWorld from './HelloWorld.vue'
  export default {
    render(){
      return h(HelloWorld,null, {
        default: props => h('span',null, `app传入helloWorld中的内容:${props.name}`)
      })
    }
  }
</script>

<style  scoped>
</style>
