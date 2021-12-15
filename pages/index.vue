<template>
  <main>
    
    <Titre/>
    <Menu/>  
    
    <!-- todo : je veux faire passer des data dans mon composant titre -->
    <!-- <p>Affichage du store : </p> -->
    <!-- <pre>{{animes.animes}}</pre> -->
    <!-- <pre v-if="animes.animes[0] != null">
      {{ animes.animes[0].image_url }}
    </pre> -->

    <!-- <ul>
      <li v-for="(anime, id) in animes.animes" :key="id">
          {{ anime }}
      </li>
    </ul> -->
    
   
  </main>
</template>




<script>

import { mapState } from 'vuex'

  export default {

    
    //ici le ...mapState permet d'avoir en global plus facilement les éléments : https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
    computed: {

      //converti en list d'objet le tableau animes
      ...mapState(['animes']),

    },
    //appele au chargement de la page         
    mounted(){        
        //appel de l'action du store "getAnimeList" de manière async
        this.$store.dispatch("animes/getAnimeList")        
    }
      
  }
</script>  