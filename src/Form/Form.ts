import { computed, defineComponent, h, mergeProps, toRefs, VNode } from 'vue'
import { reactivePick } from '@vueuse/core'
import { ElForm, ElFormItem, ElButton } from 'element-plus'
import {
  useFormMethods,
  useScreenSize,
  useFormMenu,
  useRow,
} from '../composables/index'
import props, { formKeys } from './props'
import emits from './emits'
import ProFormItem from './FormItem'

export default defineComponent({
  name: 'ProForm',
  props,
  emits,
  setup(props, { slots, emit, expose }) {
    const { columns, modelValue, inline } = toRefs(props)
    const {
      form,
      loading,
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
      upFormData,
      submitForm,
      resetForm,
    } = useFormMethods(emit)
    const menu = useFormMenu(props)
    const { rowStyle, rowClass } = useRow(props)
    const screenSize = useScreenSize()
    const labelPosition = computed(() => {
      return screenSize.value === 'xs' && !inline?.value
        ? 'top'
        : props.labelPosition
    })
    const config = reactivePick(props, ...formKeys)

    expose({
      validate,
      resetFields,
      scrollToField,
      clearValidate,
      validateField,
    })

    function createColumn() {
      return (
        columns.value?.map((item) => {
          return h(
            ProFormItem,
            {
              modelValue: modelValue.value,
              item,
              prop: item.prop,
              inline: inline.value,
              'onUpdate:modelValue': upFormData,
            },
            slots
          )
        }) || null
      )
    }

    function createMenu() {
      let list: VNode[] = []

      if (slots['menu-left']) {
        list = list.concat(slots['menu-left']({ loading: loading.value }))
      }
      if (menu.value.submit) {
        list.push(
          h(
            ElButton,
            mergeProps(menu.value.submitProps || {}, {
              loading: loading.value,
              onClick: submitForm,
            }),
            () => menu.value.submitText
          )
        )
      }
      if (menu.value.reset) {
        list.push(
          h(
            ElButton,
            mergeProps(menu.value.resetProps || {}, {
              loading: loading.value,
              onClick: () => resetForm(),
            }),
            () => menu.value.resetText
          )
        )
      }
      if (slots['menu-right']) {
        list = list.concat(slots['menu-right']({ loading: loading.value }))
      }

      return h(ElFormItem, { class: 'pro-form-menu' }, () => list)
    }

    return () =>
      h(
        ElForm,
        mergeProps(config, {
          ref: form,
          model: modelValue.value,
          inline: inline.value,
          labelPosition: labelPosition.value,
          style: !inline.value ? rowStyle.value : undefined,
          class: ['pro-form', !inline.value ? rowClass.value : ''],
        }),
        () => [createColumn(), slots.default && slots.default(), createMenu()]
      )
  },
})
