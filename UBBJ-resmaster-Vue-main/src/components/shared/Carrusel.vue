<template>
  <div class="container">
    <div class="center">
      <div
        id="carouselExampleDark"
        class="carousel carousel-dark slide"
        data-bs-ride="carousel"
      >
        <div
          class="carousel-indicators"
          style="margin: 0 auto; margin-bottom: 20px"
        >
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
         <center>
          <div class="carousel-item active" data-bs-interval="10000">
            <img @click="redireccion_registro('/aspirante_a_docente')"
              src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/Banner_Convocatoria_Docentes_2022.jpg"
              class="d-block"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img @click="redireccion_registro('/aspirante_a_estudiante')"
              src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/Banner_Convocatoria_ESTUDIANTES_2022.jpg"
              class="d-block"
            />
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <img @click="redireccion_registro('/nuevas_sedes')"
              src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/Banner_Convocatoria_nueva_sedes_2022.jpg"
              class="d-block"
            />
          </div>
         </center>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div >
  </div>
</template>

<script>
export default {
  name: "CarruselConvocatorias",
  data: function () {
    return {
      convocatorias_pdf: [
        {
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/convocatorias/ConvocatoriaAspirantesInformaticaBiblioteca.pdf",
        },
        {
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/convocatorias/ConvocatoriaAspirantesAsistentesAdministrativos.pdf",
        },
        {
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/convocatoriasyeventos/convocatoria_seleccion_de_residentes.pdf",
        },
      ],
    };
  },
  mounted() {
    //sessionStorage.clear();
  },

  methods: {
    redireccion_registro(tipo) {
      this.$router.push({ path: tipo });
    },
  },
};
</script>

<style>
img {
  width: 80% !important;
}

img{
  cursor: pointer;
}
</style>
