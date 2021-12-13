<template>
    
    <main>
        <p>{{ nom }} - prix : {{ prix }}€</p>
        <br/>
        <!-- on envoi vers le composant parant ici commande un produit avec un nom et un prix -->
        <button v-if="role== 'commander'" @click="$emit('commandes', nom, prix)" class="btn btn-success">Commander !</button>
        <hr/>
    </main>
     
</template>

<script>
export default{
    name : "Produit",
    props : ["nom", "prix", "role"]
}
</script>