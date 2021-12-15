// store/animes.js

export const state = () => ({  
  animes: []
})

export const mutations = {

  addAnime(state, res) {        
        
    state.animes = res

  }
  
}


export const actions = {

  async getAnimeList( { commit }  ){

    let res = await this.$http.$get('https://api.jikan.moe/v3/anime/205')
    console.log(res) // log "nuxt"    

    //appel de la mutation addAnime
    commit('addAnime', res)
    
  }
  
  
}

export const getters = {
  // getApples: (state) => {
  //     return state.animes.filter((fruit) => fruit.type === 'Apple')
  // },
}