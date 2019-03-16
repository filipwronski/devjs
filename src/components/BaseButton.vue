<template>
  <button :disabled="disabled || loading">
    button
    <v-progress-circular
        v-if="loading"
        indeterminate
        color="primary"
    ></v-progress-circular>
  </button>
</template>

<script>
export default {
  name: 'home',
  props: {
    loading: {
        type: Boolean,
        default: false,
    },
    disabled: {
        type: Boolean,
        default: false,
    },
  }
}
</script>
