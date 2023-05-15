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
          <div class="col-sm-12 col-md-8 text-center " style="margin: 0em auto">
            <br />
            <h1>Aspirantes a Estudiantes</h1>
            <hr />
            <h3>
              Procedimiento para la selección de estudiantes para las
              Universidades para el Bienestar
            </h3>
            <hr />
          </div>
          <br />
          <div class="col-sm-12 col-md-8" style="margin: 0em auto">
            <table class="table table-bordered">
              <tbody>
                <tr class="text-center">
                  <th scope="row"><i class="far fa-file-pdf fa-2x"></i></th>
                  <th style="text-align: left; font-size: 20x">
                    Convocatoria para aspirantes a estudiantes
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
                  <th scope="row"><i class="fas fa-book-reader fa-2x"></i></th>
                  <th style="text-align: left">
                    <div class="alert alert-info">
                      Antes de realizar tu registro como aspirante a estudiante
                      del Programa, debes consultar el Reglamento Escolar y el
                      Estatuto Académico en la plataforma del Programa. Todos/as
                      los/las estudiantes inscritos/as en el Programa, se
                      comprometerán a cumplir con su normatividad <br />
                      <br />
                      <button type="button" class="btn btn-info btn-sm" data-toggle="collapse"
                        data-target="#collapseRecomendacion" aria-expanded="false"
                        aria-controls="collapseRecomendacion">
                        Ver más <i class="fas fa-search"></i>
                      </button>
                    </div>

                    <div class="collapse" id="collapseRecomendacion">
                      <hr />
                      <ul class="text-left">
                        <li class="space">
                          Revisa con cuidado que la carrera que se imparte y la
                          sede corresponden con tus intereses y posibilidades
                          antes de concluir tu registro.
                        </li>
                        <li class="space">
                          En caso de que, en el momento de tu registro en la
                          plataforma, no cuentes con el original de certificado de
                          bachillerato, podrás ingresar una constancia de
                          conclusión de tus estudios y presentar el certificado al
                          momento de la inscripción.
                        </li>
                        <li class="space">
                          Recuerda que, para formalizar tu inscripción, el único
                          lugar autorizado por la Coordinación General del
                          Programa para la recepción de documentos es el plantel
                          de tu elección.
                        </li>
                        <li class="space">
                          Anota y guarda el número de folio que se genera a la
                          hora de tu registro
                        </li>
                        <li class="space">
                          Todos tus datos deben ser auténticos para facilitar tu
                          registro para la beca
                        </li>
                        <li class="space">
                          Cuida que tu correo electrónico sea personal, sencillo,
                          lo recuerdes con facilidad y no olvides tu contraseña.
                          De esta forma podrás recibir las notificaciones a
                          tiempo(Evita usar guion bajo en el correo electrónico
                          que emplees para tu registro)
                        </li>
                        <li class="space">
                          El correo electrónico con el que te registres no podrá
                          ser cambiado
                        </li>
                        <li class="space">
                          Cada aspirante cuenta con 72 horas para concluir el
                          registro para ser considerado como aspirante a ingresar
                          a una de las sedes del Programa
                        </li>
                      </ul>
                    </div>
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
                        <li class="space">Acta de nacimiento</li>
                        <li class="space">CURP</li>
                        <li class="space">Identificación oficial</li>
                        <li class="space">
                          Certificado de estudios o constancia de estudios
                        </li>
                        <li class="space">Carta de intención</li>
                        <li class="space">Comprobante de domicilio</li>
                        <li class="space">
                          Fotografía tamaño pasaporte (fondo blanco, de frente,
                          reciente, 45 mm x 35mm)
                        </li>
                      </ol>
                      <div class="alert alert-info">
                        todos los documentos deben presentarse en PDF y la
                        fotografía en extensión .JPG
                      </div>
                    </div>
                  </th>
                </tr>
                <tr class="text-center">
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
                    <a href="javascript:void(0);" @click="redirigir()"><button type="button"
                        class="btn btn-primary btn-sm">
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
      Convocatoria_2021:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/convocatorias/ConvocatoriaAspirantesEstudiantes.pdf",
      Manual_2021:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/manuales/ManualAspirantesEstudiantes.pdf",
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
    this.getConvocatoria_estudiantes();
  },
  methods: {
    iniciar() {
      this.$router.push({
        path: "/login",
        query: { rolUsuario: "aspirante_estudiante", id: "5" },
      });
    },

    redirigir() {
      this.$router.push({
        path: "/registro_usuarios",
        query: { rolUsuario: "5" },
      });
    },

    async getConvocatoria_estudiantes(tipo) {
      const resp = await ubbj_api
        .post("listar/convocatorias", {
          id_tipoconv: 5,
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
