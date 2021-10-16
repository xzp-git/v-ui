import { computed, defineComponent, h, provide } from 'vue'

export default defineComponent({
  name: 'VRow',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    gutter: {
      type: Number,
      default: 0
    },
    justify: {
      type: String,
      default: 'start'
    }
  },
  setup (props, { slots }) {
    provide('ZRow', props.gutter)
    const classs = computed(() => {
      return ['v-row', props.justify !== 'start' ? `is-justify-${props.justify}` : '']
    })
    const styles = computed(() => {
      if (props.gutter) {
        return {
          marginLeft: `-${props.gutter / 2}px`,
          marginRight: `-${props.gutter / 2}px`
        }
      }
      return {}
    })
    return () => h(props.tag, { class: classs.value, style: styles.value }, slots.default?.())
  }
})
