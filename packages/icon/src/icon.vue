<template>
    <i :class="`v-icon-${name}`"></i>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'VIcon',
  props: {
    name: {
      type: String,
      default: ''
    }
  },
  setup () {

  }
})
</script>
