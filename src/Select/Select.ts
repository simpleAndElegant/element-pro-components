import { defineComponent, h, mergeProps, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElSelect, ElOptionGroup, ElOption } from 'element-plus'
import { useSelectConfig, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'
import type { SelectDataItem } from './index'

export default defineComponent({
  name: 'ProSelect',
  props,
  emits: modelValueEmit,
  setup(props, { slots }) {
    const configKeys = useSelectConfig(props)
    const emitValue = useEmitValue()
    const config = reactiveOmit(props, 'data', 'config')

    function createOption(item: SelectDataItem): VNode {
      return h(
        ElOption,
        {
          value: item[configKeys.value.value],
          label: item[configKeys.value.label],
          disabled: item[configKeys.value.disabled],
        },
        () => slots.default && slots.default({ item })
      )
    }

    function createDefault() {
      return props.data.map((item) => {
        if (item[configKeys.value.children]?.length) {
          return h(ElOptionGroup, { label: item[configKeys.value.label] }, () =>
            item[configKeys.value.children]?.map((child: SelectDataItem[]) => {
              return createOption(child)
            })
          )
        } else {
          return createOption(item)
        }
      })
    }

    return () =>
      h(
        ElSelect,
        mergeProps(config, {
          class: 'pro-select',
          'onUpdate:modelValue': emitValue,
        }),
        () => createDefault()
      )
  },
})
