<template>
  <div ref="contenedorMapa" class="mapa"></div>
</template>

<script>
import L from "leaflet";
import { ruta } from "../common/Ruta";

export default {
  name: "Leatfletcomponent",
  mounted() {
    //this.init();
  },
  data: () => ({
    mapa: null,
  }),
  methods: {
    async init() {
      await this.obtenerPosicion();
      await this.pintarMap();
      await this.obtenerMarcadores();
      await this.pintarRuta();
    },
    pintarMap() {
      const contenedorMapa = this.$refs.contenedorMapa;
      this.mapa = L.map(contenedorMapa, {
        center: [18.048627, -94.401241],
        zoom: 13,
      });
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
      }).addTo(this.mapa);
    },
    async obtenerMarcadores() {
     
    },
    pintarMarcador(
      coordenadas,
      avatar = "https://firebasestorage.googleapis.com/v0/b/xiinbalkiin-4b927.appspot.com/o/markers%2Fparada-de-autobus.svg?alt=media&token=9142217d-914c-4e55-8206-dceeab2490ba"
    ) {
      let myIcon = L.icon({
        iconUrl: avatar,
        iconSize: [38, 95],
        popupAnchor: [-3, -76],
      });
      L.marker(coordenadas, { icon: myIcon }).addTo(this.mapa);
    },

    pintarRuta() {
      L.geoJSON(ruta, {
        style: {
          color: "#6200EA",
          weight: 12,
        },
      }).addTo(this.mapa);
    },

    obtenerPosicion() {
      //falta precicasar la posicion y actualizar el marcador al cambiar coordenadas
      if (!navigator.geolocation) {
        alert("no tienes gps");
        return true;
        //mejorar la UI del mensaje
      }
      navigator.geolocation.getCurrentPosition((coordenadas) => {
        let latitud = coordenadas.coords.latitude;
        let longitud = coordenadas.coords.longitude;

        this.pintarMarcador(
          [latitud, longitud],
          "https://firebasestorage.googleapis.com/v0/b/xiinbalkiin-4b927.appspot.com/o/markers%2Fpersona.svg?alt=media&token=8e15f569-a31b-409b-95c3-3791824978d4"
        );
      });
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
