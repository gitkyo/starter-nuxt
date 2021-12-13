<template>
    <div class="sectionMenu">
        <ul class="nav justify-content-center">
            <li class="nav-item">
                <NuxtLink to="/">
                    <a class="nav-link" href="#">Accueil</a>
                </NuxtLink>
            </li>
            <li class="nav-item">
                <NuxtLink to="/pagedeux">
                    <a class="nav-link" href="#">Page deux</a>
                </NuxtLink>
            </li>
        <li class="nav-item">
            <NuxtLink to="/pagetrois">
                <a class="nav-link" href="#">Page trois</a>
            </NuxtLink>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="#">Page quatre</a>
        </li>
        </ul>
    </div>
    
</template>


<style>
    ul.nav{
        margin: 30px 0 0 0px;
    }
    li.nav-item{
        border: 1px solid black;
         background-color:rgba(255, 255, 255, 0.6);
    }
    .sectionMenu{
        position: relative;
        z-index: 2;
        top: 105px;  
       
    }
</style>