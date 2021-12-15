<template>

    <div class="sectionTitre">

        <div class="titlezone">
            <h1 class="montitle">Mon starter Nuxt</h1> <!-- Generateur de liste d'animées préférés -->
            <!-- <h1>Home page</h1> -->
            <a class='btn btn-primary' href="https://github.com/gitkyo/starter-nuxt">Dépot Github</a>
        </div>
        
        
        <div class="monKarousel ">
        <!-- composant bootstrap vue : https://bootstrap-vue.org/docs -->

            <b-carousel 
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators        
            >
                <b-carousel-slide v-for="(anime, id) in animes.animes" :key="id"
                    caption="First slide"                    
                    :img-src="anime.image_url"
                >
                </b-carousel-slide>
            </b-carousel>

        </div>     
         
    </div>
    
   
   
    
</template>

<style scopped >
    h1 {
        color:rgb(98, 36, 197);
    
    }
    .sectionTitre{
        position: absolute;
        width: 100%;
        top: 0;
    }
    .titlezone{
        text-align: center;
        top: 40px;
        z-index: 2;
        position: absolute;
        width: 100%;
    }
</style>



<script> 
import { mapState } from 'vuex'
export default {
  
 
    computed: {

      //converti en list d'objet le tableau animes
      ...mapState(['animes']),

    }
      
}
</script>   