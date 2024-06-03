<script>
import Header from './components/partials/Header.vue'

  export default {
    data(){
      return{
      }
    },
    components:{
      Header
    },

    methods:{
      
    },

    mounted(){
    }
  }
</script>

<template>
  <div>
    <Header />
    
    <router-view></router-view>
  </div>
</template>


<style lang="scss" scoped>

</style>