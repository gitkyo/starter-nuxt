<template>
    <main>
        <NuxtLogo/>
            <Menu/>
        <center>
            <h1>Page trois</h1>

            <ul id="v-for-object" class="demo">
                <li v-for="produit in produits" :key='produit'>
                    {{ produit.nom }} - {{ produit.prix }}
                </li>
            </ul>


        </center>
    </main>
</template>


<script> 
export default {
    data() {       
        return {
            produits: [
                {id : 0, nom : 'pizza', prix : 3.0},
                {id : 2, nom : 'burger', prix : 4.0},
                 {id : 2, nom : 'sandwich', prix : 5.0},
            ],
            
        }
    }    
}
</script>   