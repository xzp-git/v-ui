<template>
    <button :class="classs" @click="handleClick">
      <i v-if="loading" class="v-icon-loading"></i>
      <i v-if="icon && !loading" :class="`v-icon-${icon}`"></i>
      <span v-if="$slots.default"><slot></slot></span>
    </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'
type IButtonType = 'primary'|'warning'|'danger'|'default'|'info'|'success'
export default defineComponent({
  name: 'VButton',
  props: {
    type: {
      type: String as PropType<IButtonType>,
      default: 'primary',
      vaildator: (val:string) => {
        return ['primary', 'warning', 'danger', 'default', 'info', 'success'].includes(val)
      }
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: Boolean,
    loading: Boolean,
    round: Boolean
  },
  emits: ['click'],
  setup (props, ctx) {
    const classs = computed(() => [
      'v-button',
      'v-button--' + props.type,
      {
        'is-disabled': props.disabled,
        'is-loading': props.loading,
        'is-round': props.round
      }
    ])

    const handleClick = (e) => {
      ctx.emit('click', e)
    }
    return {
      classs,
      handleClick
    }
  }
})
</script>
