<template>
 <main>
  <Menu/>
    <center>


        <h1>page quatre</h1>

        <p>todo list page</p>

        <ul>
            <li v-for="todo in todos" :key="todo.text">
            <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            </li>
            <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
        </ul>

    </center>

 </main>
</template>

<script>
import { mapMutations } from 'vuex'

export default {

    // async asyncData({ $http }) {

    // //   getIP();
      
    //     // doc usage http : https://http.nuxtjs.org/getting-started/usage        
    //     const res = await $http.$get('https://api.jikan.moe/v3/anime/205')

    //     console.log(res) // log "nuxt"     

    //     return {
            
    //       responseObj: res,

    //     }
    // }

    /*
    async getIP ({ commit }) {
      const ip = await this.$http.$get('https://icanhazip.com')

      commit('SET_IP', ip)
    }
    */ 
      async asyncData({$http}) {
      const res = await $http.$get('https://api.jikan.moe/v3/anime/205')

      console.log('res', res) // log "nuxt" 
      

    //    commit('title_synonyms', res.title_synonyms)
    //    return { obj : res };
    }
    ,
  computed: {
    todos () {
      return this.$store.state.todos.list
    }
  },
  methods: {
    //   la méthode addtodo va lancer la fonction todos/add avec la target comme param
    addTodo (e) {
      this.$store.commit('todos/add', e.target.value)
      e.target.value = ''
    },
    ...mapMutations({
      toggle: 'todos/toggle'
    })
  }
}
</script>

<style>
.done {
  text-decoration: line-through;
}
</style>