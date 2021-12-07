<template>
 <main>
    <NuxtLogo/>
    <Menu/>
    <center>


        <h1>page deux</h1>

        <p>Voici une liste d'anime</p>


        <!-- Pour faire une boucle  -->
        <!-- https://fr.vuejs.org/v2/guide/list.html -->
        <li v-for="anime in responseObj.data" :key="anime.attributes.titles.en">
            {{ anime.attributes.titles.en }}
        </li>
       
        
    </center>
    
     
    
    
    <pre>{{ responseObj }}</pre>
    
    
 </main>
</template>

<script>



  export default {
    async asyncData({ $http }) {

        //doc usage http : https://http.nuxtjs.org/getting-started/usage
        
        // ex api : https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop&page[limit]=5&page[offset]=0

        

        const res = await $http.$get('https://kitsu.io/api/edge/anime?filter[text]=cowboy%20bebop&page[limit]=5&page[offset]=0')

        console.log(res.data) // log "nuxt"

        

        return {
            responseObj: res,
            
        }
    }
  }
</script>