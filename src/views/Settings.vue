<template>
  <div class="score">
    score
  </div>
</template>

<script>
import store from '@/store'
export default {
  name: 'settings',
  beforeRouteEnter(to, from, next) {
    if (store.state.isAdmin) {
        next((vm) => {
          console.log('ok')
        });
    }
    else {
      alert('nie masz uprawnień')
        return {
          path: from.name,
        }
    }
      
    
  },
}
</script>
