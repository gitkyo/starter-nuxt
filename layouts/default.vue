<!-- doc des layout : https://nuxtjs.org/docs/directory-structure/layouts/ -->
<template>
    <main>

        <a href="https://pierre-delaunay.fr/">
            <img src="https://avatars.githubusercontent.com/u/1768831?v=4" alt="">
        </a>       

        <!-- appel de Nuxt pour définir le layout -->
        <Nuxt />
    </main>        
</template>

<style scoped>
    a{
        position: relative;
        z-index: 2;
    }
    
    img{
        width: 50px;
        border-radius: 50px;
        position: relative;
        top: 20px;
        left: 20px;
    }
    
</style>