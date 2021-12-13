<template>
    <main>
        <NuxtLogo/>
            <Menu/>

            <!-- todo : 23:42 : https://youtu.be/dY85oo6-9K0 -->
        <center>
            <h1>Page trois</h1>

            <!-- liste de prodtuis depuis le tableau d'objet ci dessous  -->
            <h2>liste de produits depuis le tableau d'objet</h2>
            <ul id="v-for-object" class="demo">
                <li v-for="(produit, id) in produits" :key="'A'+ id">
                    {{ produit.nom }} - {{ produit.prix }}
                </li>
            </ul>

            <!-- ici j'appelle des composants produit que je définit à la vole -->
            <h2>liste de produits de type composants définit à la vole</h2>
            <Produit nom="salade" prix="2" />
            <Produit nom="tarte" prix="5" />


            <h2>liste de produits de type composant définit au travers de la liste d'objets</h2>
            <Produit v-for="(produit, id)  in produits" :key="'B'+ id" :nom="produit.nom" :prix="produit.prix" />


            <h2>Liste de produits dispo </h2>
            <!-- de type composant appartenant à un autre obj avec écouteur sur le composant produit -->
            <Produit v-for="(produit, id) in produits" :key="'C'+ id" :nom="produit.nom" :prix="produit.prix" v-on:commandes="ajouterProduit" role="commander"/>

            <h2>Liste de produits commandés</h2>
            <Produit v-for="(produit, id) in commandes" :key="'D'+ id" :nom="produit.nom" :prix="produit.prix" role="affichage"/>



        </center>
    </main>
</template>


<script> 
import Produit from '@/components/Produit.vue'

export default {
    components:{
        Produit
    },
    data() {       
        return {
            produits: [
                {id : 0, nom : 'pizza', prix : 3.0},
                {id : 2, nom : 'burger', prix : 4.0},
                 {id : 3, nom : 'sandwich', prix : 5.0},
            ],
            commandes:[
                { id : 0, nom : 'pizza', prix : 3.0  },
                
            ]
            
        }
    },
    methods:{
        ajouterProduit(nom, prix){
            this.commandes.push({nom:nom, prix:prix})
        }
    }    
}
</script>   