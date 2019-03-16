<template>
    <label>
        {{ label }}
        <input :value="value" type="text" v-on="listeners" @input="customInput"/>
    </label>
</template>
<script>
    export default {
 
      name: 'baseInput',
      props: {
        label: {
          type: String,
          default: '',
        },
        value: {
          type: String,
          default: '',
        }
      },
      computed: {
        listeners() {
          const { input, ...listeners } = this.$listeners;
          return listeners;
        },
      },
      methods: {
        customInput(event) {
          this.$emit('input', event.target.value);
        },
      }
    }
</script>