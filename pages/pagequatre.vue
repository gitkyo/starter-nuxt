<template>
 <main>
  <Menu/>
    <center>

        
        <h1>page quatre</h1>

        <p>list d'anime enregistré dans store</p>
        
       
        <ul>
            <!-- <li v-for="anime in animes" :key="anime.id">
                {{ anime.name }} - {{ anime.type }}
            </li> -->
        </ul>

    </center>

 </main>
</template>

<script>
/* TODO essayer d'initaliser le store avec un cacth JSON 
ressources : 
https://langvad.dev/blog/working-with-nuxt-and-vuex/
https://vuex.vuejs.org/fr/guide/actions.html
https://nuxtjs.org/docs/directory-structure/store/
https://www.youtube.com/watch?v=R_ShKJ7PJ3U&ab_channel=ParisNakitaKejser
*/ 
export default {
    data(){
        return{
            
        }
    },
    //appele au chargement de la page         
    mounted(){        
        //appel de l'action du store "getAnimeList" de manière async
        this.$store.dispatch("getAnimeList")        
    }
}
</script>

