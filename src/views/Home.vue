<template>
  <div class="home">
    <base-button :loading="true" /><br>
    <base-button/><br>
    <base-input v-model="data"/>
  </div>
</template>

<script>
import BaseButton from '@/components/BaseButton.vue'
import BaseInput from '@/components/BaseInput.vue'

export default {
  name: 'home',
  components: {
    BaseButton,
    BaseInput,
  },
  data: function() {
    return {
      data: 'test'
    }
  }
}
  
</script>
