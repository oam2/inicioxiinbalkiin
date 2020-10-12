<template>
<div class="home">
    
    <Mapa />
    <Sesion/>
</div>
</template>

<script>

import Mapa from "../components/Mapa";
import Sesion from "../components/SesionPrincipal";
export default {
    name: 'Home',
    components: {
      
        Mapa,
        Sesion

    }
}
</script>
