<template>
  <div class="navbar-dark bg-dark subnavbar" style="margin-top: 50px">
    <div class="container">
      <div class="row">
        <div class="col-4 ubbj-brand">
          <a class="navbar-brand custom mt-1" href="/">
            <img
              style="width: 30px !important"
              id="universidad_logo"
              alt="universidad_logo"
              src="@/assets/universidad.jpeg"
              width="30"
              height="30"
              class="d-inline-block align-top"
            />
            <span style="line-height: 30px"> UBBJ </span>
          </a>
        </div>

        <div class="col-4 ubbj-brand text-center mt-1">
          <img
            id="svg"
            alt="svg"
            src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/educacion-logo-white_gold.svg"
            style="height: 30px; margin: 10px 0 15px 0"
          />
        </div>
      </div>
    </div>
  </div>

  <div class="home-teaser">
    <div class="teaser-inner d-flex align-items-center text-center">
      <div class="h1-container">
        <h1 class="txt-lg">
          <strong style="color: white"
            >Universidades para el Bienestar <br />"Benito Juárez
            García"</strong
          >
        </h1>
      </div>
    </div>

    <div
      class="teaser-inner float-right d-flex align-items-end"
      id="collapseMenu"
    >
      <nav
        style="padding: 0px"
        class="navbarMenu navbarMenu-dark navbarMenu-expand-lg"
      >
        <button
          data-parent="#collapseMenu"
          id="menuLateral"
          class="navbarMenu-toggler toggler-ubbj"
          type="button"
          data-toggle="collapse"
          data-target="#navbarMenuTogglerDemo01"
          aria-controls="navbarMenuTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbarMenu-toggler-icon btnClass"></span>
        </button>
        <div
          style="margin: 0px; padding: 0px"
          class="collapse navbarMenu-collapse"
          id="navbarMenuTogglerDemo01"
        >
          <ul class="navbarMenu-nav mr-auto mt-2 mt-lg-0">
            <li
              class="nav-item dropdown subbottom-menu conocenos"
              style="
                border-top-left-radius: 30px;
                padding-left: 30px;
                text-decoration: none !important;
              "
            >
              <span
                style="color: white"
                class="nav-link2 dropdown-toggle"
                href="#"
                id="navbarMenuDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b> Conócenos</b>
              </span>
              <div
                class="dropdown-menu conocenos"
                aria-labelledby="navbarMenuDropdown"
              >
                <a
                  style="color: #ffffff; cursor: pointer"
                  class="dropdown-item"
                  @click="handelClick()
                    if (Conocenos.link != 'video') {
                      redirect(Conocenos.link);
                    } else {
                      playvideo();
                    }
                  "
                  :key="Conocenos.id"
                  v-for="Conocenos in Conocenos"
                  :id="Conocenos.id"
                >
                  <b>{{ Conocenos.nombre }}</b>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown subbottom-menu basicos">
              <a
                class="nav-link2 dropdown-toggle"
                href="#"
                id="navbarMenuDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b> Documentos básicos</b>
              </a>
              <div
                class="dropdown-menu basicos"
                aria-labelledby="navbarMenuDropdown"
              >
                <!-- Itera -->
                <a
                  data-toggle="collapse"
                  data-target="#keys"
                  class="dropdown-item"
                  :key="documentos.nombre"
                  v-for="documentos of documentos"
                  :href="documentos.link"
                  target="_blank"
                >
                  <b>{{ documentos.nombre }}</b>
                </a>
              </div>
            </li>
            <li class="nav-item dropdown subbottom-menu estudiantes">
              <a
                class="nav-link2 dropdown-toggle"
                href="#"
                id="navbarMenuDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b>Estudiantes y Docentes</b>
              </a>
              <div
                class="dropdown-menu estudiantes"
                aria-labelledby="navbarMenuDropdown"
              >
                <!-- Itera -->
                <a
                  class="dropdown-item"
                  :key="Estudios.nombre"
                  v-for="Estudios of ED"
                  :href="Estudios.link"
                  target="_blank"
                  ><b>{{ Estudios.nombre }}</b></a
                >
              </div>
            </li>
            <li class="nav-item dropdown subbottom-menu sedes">
              <a
                class="nav-link2 dropdown-toggle"
                href="#"
                id="navbarMenuDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b>Sedes y Carreras</b>
              </a>
              <div
                class="dropdown-menu sedes"
                aria-labelledby="navbarMenuDropdown"
              >
                <!-- Itera -->
                <a
                  @click="redirect(sedes_carreras.link),handelClick()"
                  class="dropdown-item text-white"
                  :key="sedes_carreras.id"
                  v-for="sedes_carreras in sedes_carreras"
                  :id="sedes_carreras.id"
                >
                  <b>{{ sedes_carreras.nombre }}</b>
                </a>
              </div>
            </li>

            <li class="nav-item dropdown subbottom-menu convocatorias">
              <a
                class="nav-link2 dropdown-toggle"
                href="#"
                id="navbarMenuDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <b>Convocatorias y Eventos</b>
              </a>
              <div
                class="dropdown-menu convocatorias"
                aria-labelledby="navbarMenuDropdown"
              >
                <!-- Itera -->
                <a
                
                  class="dropdown-item text-white"
                  :key="Convocatorias.nombre"
                  v-for="Convocatorias of Convocatorias_Eventos"
                  @click="redirect(Convocatorias.link), handelClick()"
                  ><b>{{ Convocatorias.nombre }}</b></a
                >
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
  <!-- Modal -->
  <div
    style="padding-top: 145px"
    id="modal-presentation"
    class="modal fade responsive"
    tabindex="-1"
    role="dialog"
    aria-hidden="false"
    data-keyboard="false"
    data-backdrop="static"
  >
    <div
      class="modal-dialog modal-dialog-centered modal-lg modal-sm"
      role="document"
    >
      <div class="modal-content" style="margin: 0">
        <div class="modal-header customer">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
            @click="stopVideo()"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <div style="text-align: center">
            <video
              class="video"
              id="videoUBBJ"
              style="border-radius: 5px"
              controls
            >
              <source
                src="https://framework-gb.cdn.gob.mx/applications/ubbj/videos/resum_confer_academico_28julio2021.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </div>
        <div class="modal-footer-customer">
          <button
            type="button"
            class="btn btn-primary"
            data-dismiss="modal"
            @click="stopVideo()"
          >
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "navbarMenu",
  data() {
    return {
      window: {
        width: 0,
        height: 0,
      },
      Conocenos: [
        {
          nombre: "Presentación",
          link: "/Documentos/presentacion",
          id: "presentacion",
        },
        { nombre: "Directorio", link: "directorio", id: "directorio" },
        { nombre: "Video", link: "video", id: "video" },
      ],

      documentos: [
        {
          nombre: "Aviso de privacidad",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/avisoPrivacidad/AvisodeprivacidadOCUBBJG.pdf",
        },
        {
          nombre: "Estatuto Orgánico",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/Estatuto_organico.pdf",
        },
        {
          nombre: "Estatuto Académico",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/Estatuto_academico.pdf",
        },
        {
          nombre: "Decreto de Creación",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/Decreto_de_creacion.pdf",
        },
        {
          nombre: "Lineamientos de Sedes",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/Lineamientos_de_sedes.pdf",
        },
        {
          nombre: "Órgano de Gobierno 2020",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/organo_de_Gobierno_2020.pdf",
        },
        {
          nombre: "Diagnóstico del Programa",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/Diagnostico_Programa.pdf",
        },
        {
          nombre: "MIR",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/MIR.pdf",
        },
      ],

      ED: [
        {
          nombre: "Estudiantes y Docentes por Sede",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/estudiosydocentes/Estudiantes_docentes_por_Sede_2020.pdf ",
        },
        {
          nombre: "Reglamento Escolar",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/estudiosydocentes/reglamento_escolar.pdf",
        },
        {
          nombre: "Medidas de sanidad e higiene",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/medidas/MedidasSanidadHigiene.pdf",
        },
        {
          nombre: "Medidas de sanidad e higiene (Maya)",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/estudiosydocentes/Cartel_10_Medidas_maya_26%20nov.pdf",
        },
        {
          nombre: "Variante Ómicron",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/medidas/omicron_ubbj.pdf",
        },
        {
          nombre: "Infografía Ómicron",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/medidas/omicron_Infografia.pdf",
        },
        {
          nombre: "Principios, valores y responsabilidades",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/estudiosydocentes/Principios_valores_y_responsabilidades_UBBJG.pdf",
        },
        {
          nombre: "Protocolo de atención y prevención",
          link: "https://framework-gb.cdn.gob.mx/applications/ubbj/estudiosydocentes/protocolo_de_atencion_y_prevencion_del_hostigamiento_y_acoso_sexual_nov2020.pdf",
        },
      ],

      sedes_carreras: [
        { nombre: "Registro de Sedes ante la DGP", link: "/sedes", id: "DGP" },
        { nombre: "Carreras y Mallas", link: "/carreras", id: "CM" },
        {
          nombre: "Áreas de Conocimiento",
          link: "/areas_de_conocimiento",
          id: "AC",
        },
        { nombre: "Planes de Estudio", link: "/planes_de_estudio", id: "PE" },
        {
          nombre: "Kaleidoscopio",
          link: "/Documentos/kaleidoscopio",
          id: "Kaleidoscopio",
        },
        { nombre: "Instalaciones", link: "/Instalaciones", id: "Instal" },
        {
          nombre: "Directorio de las sedes",
          link: "/Documentos/directorio",
          id: "directorio",
        },
      ],

      Convocatorias_Eventos: [
        { nombre: "Convocatorias", link: "/Convocatorias" },
      ],
    };
  },
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    handelClick() {
      if (this.window.width < 950) {
        document.getElementById("menuLateral").click();
      }
    },
    handleResize() {
      this.window.width = window.innerWidth;
      this.window.height = window.innerHeight;
    },
    redirect(link) {
      this.$router.push({ path: link, replace: true });
    },
    playvideo() {
      let vid = document.getElementById("videoUBBJ");
      $("#modal-presentation").modal({ show: true });
      setTimeout(() => {
        vid.play();
      }, 1000);
    },
    stopVideo() {
      console.log("estop");
      let vid = document.getElementById("videoUBBJ");
      vid.load();
    },
  },
};
</script>

<style scoped>
.text-white {
  color: white;
  cursor: pointer;
}

.custom {
  text-align: left;
  padding-left: 0px;
}
</style>
