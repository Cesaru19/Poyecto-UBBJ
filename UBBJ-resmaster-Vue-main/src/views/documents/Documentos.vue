<template>
  <div>
    <div class="w3-content w3-container w3-padding-60 mt-3 mb-3">
      <iframe
        v-if="documento == 'presentacion'"
        :src="presentacion_doc"
        width="100%"
        height="600px"
      ></iframe>
      <iframe
        v-if="documento == 'kaleidoscopio'"
        :src="kaleidoscopio"
        width="100%"
        height="600px"
      ></iframe>
      <iframe
        v-if="documento == 'directorio'"
        :src="directorio_doc"
        width="100%"
        height="600px"
      ></iframe>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    documento: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      docs: ["presentacion", "kaleidoscopio", "directorio"],
      presentacion_doc:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/conocenos/PresentaciondelProgramaUniversidadesparaelBienestaragosto2020Revisado.pdf#toolbar=0&navpanes=0&scrollbar=0&efh=false&a=v&chrome=false&embedded=true",
      directorio_doc:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/sedes/direcciones.pdf#toolbar=0&navpanes=0&scrollbar=0&efh=false&a=v&chrome=false&embedded=true",
      kaleidoscopio:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/documentos/kaleidoscopio.pdf#toolbar=0&navpanes=0&scrollbar=0&efh=false&a=v&chrome=false&embedded=true",
    };
  },
  watch: {
    documento(value) {
      if (!this.docs.includes(value)) {
        this.$router.push({ name: "home", replace: true });
      }
    },
  },
};
</script>
<style></style>
