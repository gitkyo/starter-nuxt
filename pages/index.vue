<template>
  <main>
    
    <!-- <Titre/> -->
    <Menu/>  
    
    <!-- todo : je veux faire passer des data dans mon composant titre -->
    <p>Affichage du store : {{ $store.state }}</p>
    <!-- <p>Affichage depuis un fetch json {{ responseObj.title_synonyms }}</p> -->
    

    <ul>
    <li v-for="todo in todos" :key="todo.text">
      <input :checked="todo.done" @change="toggle(todo)" type="checkbox">
      <span :class="{ done: todo.done }">{{ todo.text }}</span>
    </li>
    <li><input @keyup.enter="addTodo" placeholder="What needs to be done?"></li>
  </ul>
   
  </main>
</template>




<script>
import { mapMutations } from 'vuex'
  export default {
    
    async asyncData({ $http }) {

      // getIP();
      
        //doc usage http : https://http.nuxtjs.org/getting-started/usage        
        // const res = await $http.$get('https://api.jikan.moe/v3/anime/205')

        // console.log(res) // log "nuxt"     

        // return {
            
        //   responseObj: res,

        // }
    }
    ,
    computed: {
      todos () {
        return this.$store.state.todos.list
      }
    },
    methods: {
      addTodo (e) {
        this.$store.commit('todos/add', responseObj.title_synonyms)
        e.target.value = ''
      },
      ...mapMutations({
        toggle: 'todos/toggle'
      }),

      
    }

    
  }
</script>  