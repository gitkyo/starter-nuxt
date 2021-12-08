<template>
    
    <main>
        {{ nom }} - {{ prix }}
    </main>
     
</template>

<script>
export default{
    name : "Produit",
    props : ["nom", "prix"]
}
</script>