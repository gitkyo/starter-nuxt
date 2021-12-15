// store/animes.js

export const state = () => ({  
  animes: [],
  // sliderAnime : [] 
})

export const mutations = {

  addAnime(state, res) {  
    
    // console.log(state)
        
    state.animes.push(res)

  }
  
}


/*TODO : Factoriser le code d'appels à l'API */ 
export const actions = {

  async getAnimeList( { commit }  ){

    
    //Champloo
    let res = await this.$http.$get('https://kitsu.io/api/edge/anime/181')
    //Monster
    let res1 = await this.$http.$get('https://kitsu.io/api/edge/anime/10')
    //FMA
    let res2 = await this.$http.$get('https://kitsu.io/api/edge/anime/100')

    // console.log(res) // log "nuxt" 
    
    



    //appel de la mutation addAnime
    commit('addAnime', res.data)
    commit('addAnime', res1.data)
    commit('addAnime', res2.data)


    
    
  }
  
  
}

export const getters = {
  // getApples: (state) => {
  //     return state.animes.filter((fruit) => fruit.type === 'Apple')
  // },
}