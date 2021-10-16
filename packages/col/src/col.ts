import { computed, defineComponent, h, inject } from 'vue'

export default defineComponent({
  name: 'VCol',
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    span: {
      type: Number,
      default: 24
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  setup (props, { slots }) {
    const gutter = inject('ZRow', 0)
    const classs = computed(() => {
      const pos = ['span', 'offset'] as const
      const ret = []
      pos.forEach(item => {
        const size = props[item]
        if (typeof size === 'number' && size > 0) {
          ret.push(`v-col-${item}-${props[item]}`)
        }
      })
      return [
        'v-col',
        ...ret
      ]
    })
    const styles = computed(() => {
      if (gutter !== 0) {
        return {
          paddingLeft: gutter / 2 + 'px',
          paddingRight: gutter / 2 + 'px'
        }
      }
      return {}
    })

    return () => h(props.tag, { class: classs.value, style: styles.value }, slots.default?.())
  }
})
