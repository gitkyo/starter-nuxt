// store/animes.js

export const state = () => ({  
  animes: [],
  // sliderAnime : [] 
})

export const mutations = {

  addAnime(state, res) {  
    
    console.log(state)
        
    state.animes.push(res)

  }
  
}


/*TODO : Factoriser le code d'appels à l'API */ 
export const actions = {

  async getAnimeList( { commit }  ){

    let res = await this.$http.$get('https://api.jikan.moe/v3/anime/205')
    let res1 = await this.$http.$get('https://api.jikan.moe/v3/anime/43')
    let res2 = await this.$http.$get('https://api.jikan.moe/v3/anime/4672')

    // console.log(res) // log "nuxt" 
    
    



    //appel de la mutation addAnime
    commit('addAnime', res)
    commit('addAnime', res1)
    commit('addAnime', res2)


    
    
  }
  
  
}

export const getters = {
  // getApples: (state) => {
  //     return state.animes.filter((fruit) => fruit.type === 'Apple')
  // },
}