<script>
import axios from 'axios';
import {store} from './data/store'

  export default {
    data(){
      return{
        beers: [],
      }
    },

    methods:{
      getApi(){
        axios.get(store.apiUrl)
          .then(result =>{
            console.log(result.data);
            this.beers = result.data
          })
          .catch(error =>{
            console.log(error.message);
          })
      }
    },

    mounted(){
        this.getApi();
    }
  }
</script>

<template>
  <div>
    <h2>Lista birre</h2>
      <ul>
        <li v-for="beer in beers" :key="beer.id">{{beer.id}} - {{beer.name}}</li>
      </ul>
  </div>
</template>


<style lang="scss" scoped>

</style>