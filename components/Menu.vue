<template>
    <ul class="nav justify-content-center">
        <li class="nav-item">
            <NuxtLink to="/">
                <a class="nav-link" href="#">Accueil</a>
            </NuxtLink>
        </li>
        <li class="nav-item">
            <NuxtLink to="/fun">
                <a class="nav-link" href="#">Page deux</a>
            </NuxtLink>
        </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Page trois</a>
    </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Page quatre</a>
    </li>
    </ul>
</template>


<style>
ul.nav{
        margin: 40px 0px;
}
li.nav-item{
    border: 1px solid black;
}
</style>