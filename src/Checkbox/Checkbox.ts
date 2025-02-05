import { defineComponent, h, mergeProps, VNode } from 'vue'
import { reactiveOmit } from '@vueuse/core'
import { ElCheckboxGroup, ElCheckbox } from 'element-plus'
import { useSelectConfig, useEmitValue } from '../composables/index'
import { modelValueEmit } from '../utils/index'
import props from './props'
import type { ICheckboxProps } from './index'

export function createDefault<T>(
  props: ICheckboxProps,
  component: T,
  className: string
): () => VNode {
  const configKeys = useSelectConfig(props)
  const emitValue = useEmitValue()
  const config = reactiveOmit(props, 'data', 'config')

  return () =>
    h(
      ElCheckboxGroup,
      mergeProps(config, {
        class: className,
        'onUpdate:modelValue': emitValue,
      }),
      () =>
        props.data.map((item) => {
          return h(
            component,
            {
              name: item[configKeys.value.name],
              label: item[configKeys.value.value],
              disabled: item[configKeys.value.disabled],
            },
            () => item[configKeys.value.label]
          )
        })
    )
}

export default defineComponent({
  name: 'ProCheckbox',
  props,
  emits: modelValueEmit,
  setup(props) {
    return createDefault<typeof ElCheckbox>(props, ElCheckbox, 'pro-checkbox')
  },
})
