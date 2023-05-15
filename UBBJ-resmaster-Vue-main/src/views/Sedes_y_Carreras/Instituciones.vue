<template>
  <div style="margin-top: 30px">
    <div class="w3-content w3-container w3-padding-60">
      <h3 class="w3-center">Universidades para el Bienestar</h3>
      <h4 class="w3-center"><em>Benito Juárez García</em></h4>
      <h3 class="w3-center">
        Instalación/Rehabilitación, Equipamiento y Operación de las Sedes
        Educativas del Programa
      </h3>
    </div>

    <!-- Modal -->
    <div
      id="modal-pdf-intalaciones"
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

    <div class="w3-content w3-container w3-padding-64 mt-5">
      <div class="w3-hide w3-responsive w3-show">
        <table class="w3-table w3-bordered w3-hoverable">
          <thead>
            <tr>
              <th>#</th>
              <th>Estado</th>
              <th>Municipio</th>
              <th>Ficha</th>
            </tr>
          </thead>

          <tbody
            class="w3-text-dark-gray"
            style="text-transform: uppercase"
            :key="instituto.nombre"
            v-for="(instituto, index) of instituciones"
          >
            <tr>
              <td :rowspan="instituto.Municipios.length + 1">
                <strong> {{ index + 1 }} </strong>
              </td>
              <td :rowspan="instituto.Municipios.length + 1">
                {{ instituto.Estado }}
              </td>
            </tr>

            <tr
              :key="instalacion.nombre"
              v-for="instalacion of instituto.Municipios"
            >
              <td>{{ instalacion.nombre }}</td>
              <td style="width: 10%">
                <a
                  v-if="instalacion.pdf != ''"
                  style="float: right"
                  :href="instalacion.pdf"
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
      instituciones: [],
    };
  },
  methods: {
    async getInstituciones() {
      this.instituciones = await menus.getInstalaciones();
    },
  },
  mounted() {
    this.getInstituciones();
  },
};
</script>
<style></style>
