<template>
  <div>
    
    <div class="mb-5 mt-5">
      <CarruselConvocatorias />
    </div>
    <div class="mb-5">
      <MapSedes msg="Welcome to Your Vue.js App" />
    </div>
  

  </div>
</template>

<script>
import MapSedes from "@/components/shared/MapSedes.vue";
import CarruselConvocatorias from "@/components/shared/Carrusel";
export default {
  name: "HomeView",
  components: {
    MapSedes,
    CarruselConvocatorias,
  },
};
</script>
