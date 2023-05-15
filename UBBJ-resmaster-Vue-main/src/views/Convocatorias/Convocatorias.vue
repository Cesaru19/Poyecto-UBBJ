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
            <h1 class="mt-5">Nuestras Convocatorias</h1>
          </div>
          <br />
          <div class="col-sm-12">
            <hr />
          </div>
          <div class="col-12 col-md-6 col-lg-4 m-b-30">
            <div class="card text-justify">
              <img
                class="card-img-top"
                style="width: 90%; height: auto"
                src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/Sedes_ubbj.jpg"
                alt="nuevas sedes"
              />
              <div class="card-body">
                <h5 class="card-title">Nuevas sedes</h5>
                <p class="card-text">
                  Las Universidades para el Bienestar Benito Juárez García
                  (UBBJ) se inscribe como programa prioritario del gobierno
                  federal. Su objetivo principal es dar acceso a la educación
                  superior gratuita y pertinente a estudiantes que han
                  suspendido sus estudios o no han podido continuarlos debido a
                  las restricciones impuestas en instituciones públicas y los
                  altos costos de las instituciones privadas, lo mismo que a
                  todos los que hayan acreditado el bachillerato y esta opción
                  sea de su interés. (Artículo 1 del Decreto de Creación,
                  30/06/19)
                </p>
              </div>
              <div class="card-footer">
                <a
                  v-if="status_sed == 'vigente'"
                  @click="redirect('/nuevas_sedes')"
                  role="button"
                  ><button class="btn btn-primary card-link">Ver más</button></a
                >
                <a v-else role="button"
                  ><button disabled class="btn btn card-link">
                    Ver más
                  </button></a
                >
                <p v-if="viewResp">
                  <br />
                  <a v-bind:href="resultados_doc" target="_blank" role="button"
                    ><button class="btn btn-primary card-link">
                      Publicación de resultados
                      <i class="fa fa-download" aria-hidden="true"></i></button
                  ></a>
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 m-b-30">
            <div class="card text-justify">
              <img
                class="card-img-top"
                style="width: 90%; height: auto"
                src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/aspirantes_docentes_ubbj.jpeg"
                alt="aspirante a docente"
              />
              <div class="card-body">
                <h5 class="card-title">Aspirantes a docentes</h5>
                <p class="card-text">
                  Las Universidades para el Bienestar Benito Juárez García
                  (UBBJ) se inscribe como programa prioritario del gobierno
                  federal. Su objetivo principal es dar acceso a la educación
                  superior gratuita y pertinente a estudiantes que han
                  suspendido sus estudios o no han podido continuarlos debido a
                  las restricciones impuestas en instituciones públicas y los
                  altos costos de las instituciones privadas, lo mismo que a
                  todos los que hayan acreditado el bachillerato y esta opción
                  sea de su interés. (Artículo 1 del Decreto de Creación,
                  30/06/19)
                </p>
              </div>
              <div class="card-footer">
                <a
                  v-if="status_doc == 'vigente'"
                  @click="redirect('/aspirante_a_docente')"
                  role="button"
                  ><button class="btn btn-primary card-link">Ver más</button></a
                >

                <a v-else role="button"
                  ><button disabled class="btn btn card-link">
                    Ver más
                  </button></a
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 m-b-30">
            <div class="card text-justify">
              <img
                class="card-img-top"
                style="width: 90%; height: auto"
                src="https://framework-gb.cdn.gob.mx/applications/ubbj/imagenes/aspirantes_estudiantes_ubbj.jpeg"
                alt="aspirante a estudiantes"
              />
              <div class="card-body">
                <h5 class="card-title">Aspirantes a estudiantes</h5>
                <p class="card-text">
                  Nuestro programa busca constituirse como una opción viable
                  para arraigar a sus estudiantes en comunidades en las que
                  puedan convertirse en motor de transformación y superación de
                  la desigualdad, el aislamiento y la falta de condiciones para
                  lograr desarrollo y sustentabilidad en beneficio de la
                  colectividad
                </p>
              </div>
              <div class="card-footer">
                <a
                  v-if="status_est == 'vigente'"
                  @click="redirect('/aspirante_a_estudiante')"
                  role="button"
                  ><button class="btn btn-primary card-link">Ver más</button></a
                >
                <a v-else role="button"
                  ><button disabled class="btn btn card-link">
                    Ver más
                  </button></a
                >
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6 col-lg-4 m-b-30 espacio"></div>
        </div>
      </Transition>
    </div>
  </div>
</template>
<script>
import ubbj_api from "@/services/api/ubbj";
export default {
  data() {
    return {
      show: false,
      status_est: String,
      status_doc: String,
      status_sed: String,
      viewResp: false,
      dataPublicRes: String,
      resultados_doc:
        "https://framework-gb.cdn.gob.mx/applications/ubbj/convocatorias/DictamenConvocatoriaSedes.pdf",
    };
  },
  mounted() {
    this.getConvocatorias(5);
    this.getConvocatorias(6);
    this.getConvocatorias(7);
  },
  methods: {
    redirect(link) {
      this.$router.push({ path: link });
    },
    async getConvocatorias(tipo) {
      const resp = await ubbj_api
        .post("listar/convocatorias", {
          id_tipoconv: tipo,
        })
        .then((resp) => {
          switch (tipo) {
            case 5:
              const filterEs = resp.data.Convocatorias.reduce(
                (max, item) => (item.inicio > max ? item.inicio : max),
                resp.data.Convocatorias[0].inicio
              );

              let respuestaEs = resp.data.Convocatorias.find((item) => {
                return item.inicio == filterEs;
              });
              this.status_est = respuestaEs.status;
              break;

            case 6:
              const filterDoc = resp.data.Convocatorias.reduce(
                (max, item) => (item.inicio > max ? item.inicio : max),
                resp.data.Convocatorias[0].inicio
              );

              let respuestaDoc = resp.data.Convocatorias.find((item) => {
                return item.inicio == filterDoc;
              });

              this.status_doc = respuestaDoc.status;
              this.dataPublicRes = respuestaDoc.fecha_publicacion_resultados;

              break;

            case 7:
              const filter = resp.data.Convocatorias.reduce(
                (max, item) => (item.inicio > max ? item.inicio : max),
                resp.data.Convocatorias[0].inicio
              );

              let respuesta = resp.data.Convocatorias.find((item) => {
                return item.inicio == filter;
              });
              this.status_sed = respuesta.status;
              this.dataPublicRes = respuesta.fecha_publicacion_resultados;

              let fecha = new Date();

              /**resultados */
              if (fecha.toISOString().split("T")[0] === this.dataPublicRes) {
                this.viewResp = true;
              } else if (
                this.dataPublicRes < fecha.toISOString().split("T")[0]
              ) {
                this.viewResp = true;
              }

              setTimeout(() => {
                this.show = true;
              }, 2500);
              break;
          }
        });
    },
  },
};
</script>
<style></style>
