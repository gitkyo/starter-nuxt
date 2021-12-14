<template>
  <main>
    
    <Titre/>
    <Menu/>  
    
    <!-- todo : je veux faire passer des data dans mon composant titre -->
    <p>{{responseObj.title_synonyms}}</p>
    
   
  </main>
</template>




<script>

import store from '../store/index.js'


  export default {

    

    
    async asyncData({ $http }) {
      
      

        //doc usage http : https://http.nuxtjs.org/getting-started/usage        
        const res = await $http.$get('https://api.jikan.moe/v3/anime/205')

        console.log(res) // log "nuxt"     
        
        // store.commit('increment')

        // console.log(store.state.count) // -> 

        return {
            responseObj: res,
            
        }
    }

    
  }
</script>  