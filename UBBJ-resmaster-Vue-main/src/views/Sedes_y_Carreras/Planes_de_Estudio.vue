<template>
  <div style="margin-top: 30px">
    <div class="w3-content w3-container w3-padding-60">
      <h3 class="w3-center">Universidades para el Bienestar</h3>
      <h4 class="w3-center"><em>Benito Juárez García</em></h4>
      <h1 class="w3-center">Planes de Estudio</h1>
    </div>

    <!-- Modal -->
    <div
      id="modal-pdf"
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
              <object
                :data="pdfAtive"
                width="100%"
                height="500px"
                type="application/pdf"
              >
                <iframe :src="pdfAtive" width="100%" height="500px"></iframe>
              </object>
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
              <th>Área de Conocimiento</th>
              <th>Carrera</th>
              <th></th>
            </tr>
          </thead>
          <tbody
            class="w3-text-dark-gray"
            style="text-transform: uppercase"
            :key="planes_estudio.nombre"
            v-for="planes_estudio of planes_estudio"
          >
            <tr>
              <td :rowspan="planes_estudio.carreras.length + 1">
                {{ planes_estudio.area }}
              </td>
            </tr>
            <tr
              :key="carrera.nombre"
              v-for="carrera of planes_estudio.carreras"
            >
              <td>
                {{ carrera.carrera }}
              </td>

              <td>
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
      planes_estudio: [],
    };
  },
  methods: {
    async getPlanes() {
      this.planes_estudio = await menus.getPlanesDeEstudio();
    },
  },
  mounted() {
    this.getPlanes();
  },
};
</script>
<style></style>
