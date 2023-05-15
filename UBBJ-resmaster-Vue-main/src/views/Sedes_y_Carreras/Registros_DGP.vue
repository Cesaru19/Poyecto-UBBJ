<template>
  <div style="margin-top: 30px">
    <div class="w3-content w3-container w3-padding-60">
      <h2 class="w3-center">Universidades para el Bienestar</h2>
      <h3 class="w3-center"><em>Benito Juárez García</em></h3>
      <h3 class="w3-center">Sedes</h3>
      <hr />
    </div>

    <!-- Modal -->
    <div id="modal-pdf-sedes" class="modal fade responsive" tabindex="-1" role="dialog" aria-hidden="false"
      data-keyboard="false" data-backdrop="static">
      <div class="modal-dialog modal-dialog-centered modal-lg modal-sm" role="document">
        <div class="modal-content" style="margin: 0">
          <div class="modal-header customer">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
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
      <div class="w3-hide w3-responsive w3-show">
        <table class="w3-table w3-bordered w3-hoverable">
          <thead>
            <tr>
              <th>Estado</th>
              <th>Sede</th>
              <th>Carrera</th>
              <th>Clave Dirección General de Profesiones</th>
              <th>Clave de la Institución</th>
            </tr>
          </thead>
          <tbody class="w3-text-dark-gray" style="text-transform: uppercase" :key="sede.id" v-for="sede of sedes_DGP">
            <tr>
              <td :rowspan="sede.Sede.length + 1">{{ sede.Estado }}</td>
            </tr>

            <tr :key="item.carrera" v-for="item of sede.Sede">
              <td>{{ item.Sede }}</td>
              <td>{{ item.Carrera }}</td>
              <td>{{ item.Calve_direccion_general_de_profesiones }}</td>
              <td>{{ item.Clave_institucion }}</td>
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
      sedes_DGP: []
    };
  },
  methods: {
    async getSedesDGP() {
      this.sedes_DGP = await menus.getSedesDGPMenu();
    },
  },
  mounted() {
    this.getSedesDGP();
  },
};
</script>
<style scoped>
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  margin-bottom: 0.5rem;
  font-family: inherit;
  font-weight: 500;
  line-height: 1.2;
  color: inherit;
}
</style>
