export const demoMixin = {
  data() {
    return {
      message:"Mixin"
    }
  },
  created() {
    console.log('我是混入中打印的');
  },
}