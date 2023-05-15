<template>
  <div>
    <div class="container">
      <div v-if="!show">
        <div class="center">
          <img
            style="width: 40vh; max-width: 40vh"
            src="@/assets/search.gif"
            alt=""
          />
        </div>
      </div>
      <Transition :duration="{ enter: 500, leave: 800 }" name="nested">
        <div v-if="show" class="row">
          <div class="col-sm-12 col-md-8 text-center" style="margin: 0em auto">
            <br />
            <h1>Nuevas Sedes</h1>
            <hr />
            <h3>
              Procedimiento de Selección de Nuevas Sedes para el Programa de
              Universidades para el Bienestar
            </h3>
            <hr />
          </div>
          <br />
          <!-- table-responsive -->
          <div class="col-sm-12 col-md-8" style="margin: 0em auto">
            <table class="table table-bordered">
              <tbody>
                <tr class="text-center">
                  <th scope="row"><i class="far fa-file-pdf fa-2x"></i></th>
                  <th style="text-align: left; font-size: 20x">
                    Convocatoria Abierta para Nuevas Sedes
                    <a v-bind:href="Convocatoria_2022" target="_blank"
                      ><button class="btn btn-secondary btn-sm">
                        Descargar <i class="fas fa-download"></i></button
                    ></a>
                  </th>
                </tr>
                <tr class="text-center">
                  <th scope="row"><i class="far fa-file-pdf fa-2x"></i></th>
                  <th style="text-align: left">
                    Manual de usuario
                    <a v-bind:href="Manual_2022" target="_blank"
                      ><button class="btn btn-secondary btn-sm">
                        Descargar <i class="fas fa-download"></i></button
                    ></a>
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
                    <button
                      type="button"
                      class="btn btn-success btn-sm"
                      data-toggle="collapse"
                      data-target="#collapseExample"
                      aria-expanded="false"
                      aria-controls="collapseExample"
                    >
                      Ver <i class="fas fa-search"></i>
                    </button>
                    <div class="collapse" id="collapseExample">
                      <hr />
                      <ol class="text-left">
                        <li class="space">
                          Carta de solicitud para la instalación
                        </li>
                        <li class="space">
                          Anuencia para la donación del predio o Acta de
                          Asamblea
                        </li>
                        <li class="space">
                          Acreditación de la propiedad (escritura, certificado
                          parcelario, acta de asamblea u otra)
                        </li>
                        <li class="space">
                          Carta de respaldo del presidente municipal o de la
                          autoridad local, para la instalación de una sede
                          educativa del Programa Universidades para el Bienestar
                          Benito Juárez García
                        </li>
                        <li class="space">
                          Levantamiento topográfico del predio
                        </li>
                        <li class="space">
                          Fotos del predio y del espacio temporal
                        </li>
                      </ol>
                    </div>
                  </th>
                </tr>
                <tr hidden class="text-center">
                  <th scope="row"><i class="fas fa-laptop fa-2x"></i></th>
                  <th style="text-align: left">
                    Publicación de resultados
                    <a v-bind:href="Resultados_2022" target="_blank"
                      ><button class="btn btn-secondary btn-sm">
                        Descargar <i class="fas fa-download"></i></button
                    ></a>
                  </th>
                </tr>
                <tr v-if="status == 'vigente'" class="text-center">
                  <th scope="row"><i class="fas fa-user-check fa-2x"></i></th>
                  <th style="text-align: left">
                    Debes contar con tu usuario y contraseña para
                    <button @click="iniciar()" class="btn btn-default btn-sm">
                      iniciar sesión <i class="far fa-user"></i></button
                    >, para registrarte en la Convocatoria
                  </th>
                </tr>
                <tr class="text-center" style="display: none">
                  <th scope="row"><i class="far fa-edit fa-2x"></i></th>
                  <th style="text-align: left">
                    <a style="display: none" href="/registro_usuarios"
                      ><button type="button" class="btn btn-primary btn-sm">
                        Regístrate a la convocatoria
                        <i class="far fa-edit"></i></button
                    ></a>
                  </th>
                </tr>
                <tr v-if="status == 'vigente'" class="text-center">
                  <th scope="row"><i class="far fa-edit fa-2x"></i></th>
                  <th style="text-align: left">
                    <a href="javascript:void(0);" @click="redirigir()"
                      ><button type="button" class="btn btn-primary btn-sm">
                        Regístrate a la convocatoria
                        <i class="far fa-edit"></i></button
                    ></a>
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
      Convocatoria_2022:
        " https://framework-gb.cdn.gob.mx/applications/ubbj/convocatoriasyeventos/Convocatoriadenuevassedeseducativas.pdf ",
      Manual_2022:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/manuales/Manual_Usuario_Sedes.pdf",
      Resultados_2022: String,
      anio: String,
      periodo: String,
      inicio: String,
      fin: String,
      status: String,
      resultados: String,
    };
  },
  mounted() {
    window.scroll(0, 800);
    this.getConvocatorias();
  },
  methods: {
    iniciar() {
      this.$router.push({
        path: "/login",
        query: { rolUsuario: "aspirante_Sede", id: "7" },
      });
    },

    redirigir() {
      this.$router.push({
        path: "/registro_usuarios",
        query: { rolUsuario: "7" },
      });
    },

    async getConvocatorias(tipo) {
      const resp = await ubbj_api
        .post("listar/convocatorias", {
          id_tipoconv: 7,
        })
        .then((resp) => {
          const filter = resp.data.Convocatorias.reduce(
            (max, item) => (item.inicio > max ? item.inicio : max),
            resp.data.Convocatorias[0].inicio
          );

          let respuesta = resp.data.Convocatorias.find((item) => {
            return item.inicio == filter;
          });

          let str = "" + respuesta.inicio + "";
          let resultados = "" + respuesta.fecha_publicacion_resultados + "";
          let fin = "" + respuesta.fin + "";

          //añio
          this.anio = conversiones.yearConvert(str);
          //resultados
          this.resultados = conversiones.dateConvert(resultados);
          localStorage.setItem(
            "sedes",
            JSON.stringify({
              resultados: this.resultados + " " + this.anio,
            })
          );
          //Inicio
          this.inicio = conversiones.dateConvert(str);
          //Fin
          this.fin = conversiones.dateConvert(fin);

          this.status = respuesta.status;
          setTimeout(() => {
            this.show = true;
          }, 2500);
        });
    },
  },
};
</script>
<style></style>
