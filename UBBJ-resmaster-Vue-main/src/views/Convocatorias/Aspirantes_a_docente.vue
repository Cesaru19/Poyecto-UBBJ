<template>
  <div>
    <div class="container">
      <div v-if="!show">
        <div class="center">
          <img style="width: 40vh; max-width: 40vh;" src="@/assets/search.gif" alt="">
        </div>
      </div>
      <Transition :duration="{ enter: 500, leave: 800 }" name="nested">
        <div v-if="show" class="row">
          <div class="col-sm-12 col-md-8 text-center" style="margin: 0em auto">
            <br />
            <h1>Aspirantes a Docentes</h1>
            <hr />
            <h3>
              Procedimiento para la selección de docentes para las Universidades
              para el Bienestar
            </h3>
            <hr />
          </div>
          <br />
          <div class="col-sm-12 col-md-8 " style="margin: 0em auto">
            <table class="table table-bordered">
              <tbody>
                <tr class="text-center">
                  <th scope="row"><i class="far fa-file-pdf fa-2x"></i></th>
                  <th style="text-align: left; font-size: 20x">
                    Convocatoria para aspirantes a docentes
                    <a v-bind:href="Convocatoria_2021" target="_blank"><button class="btn btn-secondary btn-sm">
                        Descargar <i class="fas fa-download"></i></button></a>
                  </th>
                </tr>
                <tr class="text-center">
                  <th scope="row"><i class="far fa-file-pdf fa-2x"></i></th>
                  <th style="text-align: left">
                    Manual de usuario
                    <a v-bind:href="Manual_2021" target="_blank"><button class="btn btn-secondary btn-sm">
                        Descargar <i class="fas fa-download"></i></button></a>
                  </th>
                </tr>
                <tr class="text-center">
                  <th scope="row"><i class="far fa-calendar-alt fa-2x"></i></th>
                  <th style="text-align: left">
                    Fecha de apertura de la Convocatoria {{ anio }}:
                    {{ inicio }} / Fecha de cierre: {{ fin }}
                  </th>
                </tr>
                <tr class="text-center">
                  <th scope="row"><i class="fas fa-list-ul fa-2x"></i></th>
                  <th style="text-align: left">
                    Lista de requisitos a presentar en su registro:
                    <button type="button" class="btn btn-success btn-sm" data-toggle="collapse"
                      data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                      Ver <i class="fas fa-search"></i>
                    </button>
                    <div class="collapse" id="collapseExample">
                      <hr />
                      <ol class="text-left">
                        <li class="space">
                          Título universitario de preferencia maestría, doctorado
                          y especialidades y en el caso de nivel licenciatura
                          contar con amplia experiencia profesional mayor a 5 años
                        </li>
                        <li class="space">Cédula Profesional</li>
                        <li class="space">CURP</li>
                        <li class="space">
                          Credencial de elector o identificación oficial
                        </li>
                        <li class="space">
                          Currículum vitae (10 páginas máximo, con correo
                          electrónico y teléfonos de contacto)
                        </li>
                        <li class="space">
                          Evidencias de su práctica académica o profesional
                          (máximo 30 páginas integradas en un archivo PDF)
                        </li>
                        <li class="space">
                          Carta de exposición de motivos Todos los documentos
                          deben presentarse en formato PDF
                        </li>
                      </ol>
                    </div>
                  </th>
                </tr>
                <tr v-if="false" class="text-center">
                  <th scope="row"><i class="fas fa-laptop fa-2x"></i></th>
                  <th style="text-align: left">
                    Publicación de resultados ({{ Resultados_2021 }})
                  </th>
                </tr>
                <tr v-if="status == 'vigente'" class="text-center">
                  <th scope="row"><i class="fas fa-user-check fa-2x"></i></th>
                  <th style="text-align: left">
                    Debes contar con tu usuario y contraseña para
                    <button @click="iniciar()" class="btn btn-default btn-sm">
                      iniciar sesión <i class="far fa-user"></i></button>, para registrarte en la Convocatoria
                  </th>
                </tr>
                <tr v-if="status == 'vigente'" class="text-center">
                  <th scope="row"><i class="far fa-edit fa-2x"></i></th>
                  <th style="text-align: left">
                    <a><button @click="redirigir()" type="button" class="btn btn-primary btn-sm">
                        Regístrate a la convocatoria
                        <i class="far fa-edit"></i></button></a>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
import conversiones from "@/helpers/converDate";
import ubbj_api from "@/services/api/ubbj";

export default {
  data: function () {
    return {
      show: false,
      Convocatoria_2021: "https://framework-gb.cdn.gob.mx/applications/ubbj/convocatorias/ConvocatoriaAspirantesDocentes.pdf",
      Manual_2021:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/manuales/ManualAspirantesDocentes.pdf",
      Resultados_2021: String,
      anio: String,
      periodo: String,
      inicio: String,
      fin: String,
      status: String,
    };
  },
  mounted() {
    window.scroll(0, 650);
    this.getconvocatoriaAspitante();
  },
  methods: {
    iniciar() {
      this.$router.push({
        path: "/login",
        query: { rolUsuario: "aspirante_Docente", id: "6" },
      });
    },

    redirigir() {
      this.$router.push({
        path: "/registro_usuarios",
        query: { rolUsuario: "6" },
      });
    },

    async getconvocatoriaAspitante(tipo) {
      const resp = await ubbj_api
        .post("listar/convocatorias", {
          id_tipoconv: 6,
        })
        .then((resp) => {

          const filter = resp.data.Convocatorias.reduce(
            (max, item) => (item.inicio > max ? item.inicio : max),
            resp.data.Convocatorias[0].inicio
          );

          let respuesta = resp.data.Convocatorias.find((item) => {
            return item.inicio == filter;
          });

          /** */

          let str = "" + respuesta.inicio + "";
          let mes = conversiones.montConvert(str.substring(5, 7));
          this.inicio = str.substring(8, 10) + " de " + mes;

          let fin = "" + respuesta.fin + "";
          let mes_fin = conversiones.montConvert(fin.substring(5, 7));
          this.fin = fin.substring(8, 10) + " de " + mes_fin;

          let resultado = "" + respuesta.fecha_publicacion_resultados + "";
          let mes_resultado = conversiones.montConvert(fin.substring(5, 7));
          this.Resultados_2021 =
            resultado.substring(8, 10) + " de " + mes_resultado;

          this.anio = str.substring(0, 4);
          this.status = respuesta.status;
          setTimeout(() => {
                this.show = true;
              }, 2500);;
        });
    },
  },
};
</script>
<style>

</style>
