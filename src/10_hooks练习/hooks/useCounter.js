import {ref,computed} from 'vue'

export default function(){
  const counter = ref(0)
  const doubleCounter = computed(()=> {
    return counter.value *2
  })
  const increment = () => {
    counter.value ++
  }

  return {
    counter,doubleCounter,increment
  }
}