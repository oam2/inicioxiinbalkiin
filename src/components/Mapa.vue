<template>
<div ref="contenedorMapa" class="mapa">
</div>
</template>

<script>
import L from "leaflet";
export default {
    name: "Leatfletcomponent",
    mounted() {
        this.init();
    },
    data: () => ({

        mapa: null

    }),
    methods: {
        async init() {
            await this.pintarMap();
        },
        pintarMap() {
            const contenedorMapa = this.$refs.contenedorMapa;
            this.mapa = L.map(contenedorMapa, {
                center: [51.505, -0.09],
                zoom: 13
            })
            L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
                maxZoom: 18,
            }).addTo(this.mapa);

        },
    },

};
</script>

<style lang="scss" scoped>
.mapa {
    width: 100%;
    height: 70vh;
    z-index: 1;
}
</style>
