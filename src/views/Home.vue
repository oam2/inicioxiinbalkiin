<template>
<div class="home">
    <BarraNavegacion />
    <Mapa />
    <Sesion/>
</div>
</template>

<script>
import BarraNavegacion from "../components/BarraNavegacion";
import Mapa from "../components/Mapa";
import Sesion from "../components/SesionPrincipal";
export default {
    name: 'Home',
    components: {
        BarraNavegacion,
        Mapa,
        Sesion

    }
}
</script>
