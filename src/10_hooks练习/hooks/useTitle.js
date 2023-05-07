import {ref, watch} from 'vue'

export default function (title = '默认title'){
  const refTitle = ref(title)
  watch(refTitle,(newValue) => {
    document.title = newValue
  },{
    immediate:true
  })

  return refTitle
}