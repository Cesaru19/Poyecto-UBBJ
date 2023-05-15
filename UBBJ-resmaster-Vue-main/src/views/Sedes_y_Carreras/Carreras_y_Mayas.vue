<template>
  <div style="margin-top: 30px">
    <div class="w3-content w3-container w3-padding-60">
      <h3 class="w3-center">Universidades para el Bienestar</h3>
      <h4 class="w3-center"><em>Benito Juárez García</em></h4>
      <h1 class="w3-center">Carreras y Mallas</h1>
    </div>

    <!-- Modal video emergente -->
    <div
      id="modal-pdf-carreras"
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
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div style="text-align: center; padding: 10px">
              <iframe :src="pdfAtive" width="100%" height="600px"></iframe>
            </div>
          </div>
          <div class="modal-footer-customer">
            <button type="button" class="btn btn-primary" data-dismiss="modal">
              Cerrar
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="w3-content w3-container w3-padding-64">
      <div class="w3-hide w3-responsive w3-show" id="lista_tabla">
        <table class="w3-table w3-bordered w3-hoverable">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Municipio</th>
              <th>Carrera</th>
              <th></th>
            </tr>
          </thead>

          <tbody
            class="w3-text-dark-gray"
            style="text-transform: uppercase"
            :key="carreras.nombre"
            v-for="carreras of carreras"
          >
            <tr>
              <td :rowspan="carreras.Municipios.length + 1">
                {{ carreras.Estado }}
              </td>
            </tr>

            <tr :key="carrera.nombre" v-for="carrera of carreras.Municipios">
              <td>
                {{ carrera.nombre }}
              </td>
              <td>
                {{ carrera.carrera }}
              </td>
              <td style="width: 10%">
                <a
                  v-if="carrera.pdf != ''"
                  style="float: right"
                  :href="carrera.pdf"
                  target="_blank"
                >
                  <i class="material-icons pdfIcon">open_in_new</i>
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
import menus from "@/services/menus";

export default {
  data: function () {
    return {
      pdfAtive: "",
      carreras: [],
    };
  },
  methods: {
    async getCarreras() {
      this.carreras = await menus.getCarrerasMenu();
    },
  },
  mounted() {
    this.getCarreras();
  },
};
</script>
<style scoped></style>
