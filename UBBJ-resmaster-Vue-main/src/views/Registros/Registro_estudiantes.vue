<script>
import $ from "jquery";
import toastr from "toastr/toastr";
import ubbj_api from "@/services/api/ubbj";
import DocumentChargePreview from "@/components/shared/DocumentsChargePreview.vue";

export default {
  components: {
    DocumentChargePreview,
  },
  data() {
    return {
      animate_conf: { enter: 550, leave: 50 },
      viewSteper: 0,
      data: null,
      secret: "стон",
      encrypt: null,
      desencriptado: null,
      search: false,
      max_num_alter: 10,
      max_cp: 5,
      max_nums: 10,
      max_estandar: 50,
      max_referencia: 100,
      check_manifiesto: false,
      Localidad: [],
      Estados: [],
      Sedes_Estudiantes: [],
      Area_conocimiento: [],
      Carreras_Estudiantes: [],
      Municipio: [],
      status_est: "",

      search2: false,
      id_localidad: "",
      id_municipio: "",

      id_area: null,
      id_carrera: null,

      pdf_view: [
        { view: false },
        { view: false },
        { view: false },
        { view: false },
        { view: false },
        { view: false },
        { view: false },
      ],

      inputs: [
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          //libre 11
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "custom-control-input",
          text_error: "",
        },
      ],

      pasos: [
        {
          class_pasos: "",
          stepper: "",
          style_paso: "",
        },
        {
          class_pasos: "",
          stepper: "",
          style_paso: "",
        },
        {
          class_pasos: "",
          stepper: "",
          style_paso: "",
        },
        {
          class_pasos: "",
          stepper: "",
          style_paso: "",
        },
        {
          class_pasos: "",
        },
      ],

      docs: [
        { viewDoc: false },
        { viewDoc: false },
        { viewDoc: false },
        { viewDoc: false },
        { viewDoc: false },
        { viewDoc: false },
        { viewDoc: false },
      ],
    };
  },

  mounted() {
    window.scroll(0, 800);
    this.data = JSON.parse(sessionStorage.data);
    this.stteper();
    this.obtener_estados();
    this.carga_status();
    this.Convocatoria();
  },

  methods: {
    stteper() {
      this.viewSteper = this.data.id_status;
      console.log();
    },

    activate_sttepers(stteper) {
      if (stteper <= this.data.id_status) {
        this.viewSteper = stteper;
      }
    },

    checks_activate(dato) {
      switch (dato.tipo) {
        case "doc_actaNacimiento":
          this.docs[0].viewDoc = dato.active;
          break;
        case "doc_curp":
          this.docs[1].viewDoc = dato.active;
          break;

        case "doc_identificacionOficial":
          this.docs[2].viewDoc = dato.active;
          break;
        case "doc_Certificado":
          this.docs[3].viewDoc = dato.active;
          break;
        case "doc_CartaIntencion":
          this.docs[4].viewDoc = dato.active;
          break;
        case "doc_comprobante":
          this.docs[5].viewDoc = dato.active;
          break;
        case "fotografia":
          this.docs[6].viewDoc = dato.active;
          break;
      }
    },

    showToast(texto, title, time, status) {
      toastr.options.progressBar = true;
      toastr.options.closeButton = true;
      switch (status) {
        case "warning":
          toastr.warning(texto, title, { timeOut: time });
          break;

        case "success":
          toastr.success(texto, title, { timeOut: time });
          break;
      }
    },

    Convocatoria(convocatoria) {
      ubbj_api
        .post("listar/convocatorias", { id_tipoconv: 5 })
        .then((respuesta) => {
          const filter = respuesta.data.Convocatorias.reduce(
            (max, item) => (item.inicio > max ? item.inicio : max),
            respuesta.data.Convocatorias[0].inicio
          );

          let resp = respuesta.data.Convocatorias.find((item) => {
            return item.inicio == filter;
          });

          this.id_convocatoria = resp.id_convocatoria;
        });
    },

    keyNum(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },

    keyCalle(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ/#0,. ]+$/.test(char)) return true;
      else e.preventDefault();
    },

    validacion_input(input) {
      if (input == "tel_alt") {
        if (this.data.telfono_alt.length < 10) {
          if (this.data.telfono_alt.length == 0) {
            this.inputs[0].class_input = "form-control";
            this.inputs[0].text_error = "";
          } else {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error =
              "El número telefónico debe ser de 10 dígitos";
          }
        } else if (this.data.telefono == this.data.telfono_alt) {
          this.inputs[0].class_input = "form-control is-invalid";
          this.inputs[0].text_error =
            "El teléfono de contacto alterno y principal iguales";
        } else {
          this.inputs[0].class_input = "form-control is-valid";
          this.inputs[0].text_error = "";
        }
      }
      if (input == "cp") {
        if (this.data.codigo_postal.length < 5) {
          this.inputs[2].class_input = "form-control is-invalid";
          this.inputs[2].text_error =
            "El formato del codigo postal es inválido";
          this.inputs[3].class_input = "form-control";
          this.inputs[4].class_input = "form-control";
          this.inputs[5].class_input = "form-control";
          this.Estados = [];
          this.Municipio = [];
          this.Localidad = [];
          $("#localidad_domicilio").attr("disabled", true);
        } else {
          this.inputs[2].class_input = "form-control is-valid";
          this.inputs[2].text_error = "";
        }
      }
      if (input == "localidad") {
        if (
          $("#localidad_domicilio").val() == "" ||
          $("#localidad_domicilio").val() == null ||
          $("#localidad_domicilio").val() == 0
        ) {
          this.inputs[5].class_input = "form-control is-invalid";
          this.inputs[5].text_error = "Debe seleccionar una localidad";
        } else {
          this.inputs[5].class_input = "form-control is-valid";
          this.inputs[5].text_error = "";
        }
      }
      if (input == "calle") {
        if (this.data.calle.length == 0) {
          this.inputs[6].class_input = "form-control is-invalid";
          this.inputs[6].text_error = "Debe escribir una calle";
        } else {
          this.inputs[6].class_input = "form-control is-valid";
          this.inputs[6].text_error = "";
        }
      }
      if (input == "num_ext") {
        if (this.data.num_ext.length == 0) {
          this.inputs[7].class_input = "form-control is-invalid";
          this.inputs[7].text_error = "Debe escribir el numero exterior";
        } else {
          this.inputs[7].class_input = "form-control is-valid";
          this.inputs[7].text_error = "";
        }
      }
      if (input == "referencias") {
        if (this.data.referencias.length == 0) {
          this.inputs[10].class_input = "form-control is-invalid";
          this.inputs[10].text_error = "Debe escribir una referencia";
        } else {
          this.inputs[10].class_input = "form-control is-valid";
          this.inputs[10].text_error = "";
        }
      }
      if (input == "sede_estado") {
        if (this.data.id_estado_pre === null) {
          this.inputs[11].class_input = "form-control is-invalid";
          this.inputs[11].text_error = "Selecciona el estado";
        } else {
          this.inputs[11].class_input = "form-control is-valid";
          this.inputs[11].text_error = "";
        }
      }
      if (input == "sede") {
        if (this.data.id_sede_pre === null) {
          this.inputs[12].class_input = "form-control is-invalid";
          this.inputs[12].text_error = "Selecciona la sede";
        } else {
          this.inputs[12].class_input = "form-control is-valid";
          this.inputs[12].text_error = "";
        }
      }
      if (input == "sede_area") {
        if (this.id_area === null) {
          this.inputs[13].class_input = "form-control is-invalid";
          this.inputs[13].text_error = "Selecciona la sede";
        } else {
          this.inputs[13].class_input = "form-control is-valid";
          this.inputs[13].text_error = "";
        }
      }
      if (input == "sede_carrera") {
        if (this.id_carrera === null) {
          this.inputs[14].class_input = "form-control is-invalid";
          this.inputs[14].text_error = "Selecciona la sede";
        } else {
          this.inputs[14].class_input = "form-control is-valid";
          this.inputs[14].text_error = "";
        }
      }
      if (input == "check") {
        if (this.check_manifiesto == false) {
          this.inputs[15].class_input = "custom-control-input is-valid";
        } else {
          this.inputs[15].class_input = "custom-control-input is-invalid";
        }
      }
      if (input == "edo_manual") {
        if (
          $("#estadoManual").val() == 0 ||
          $("#estadoManual").val() == undefined
        ) {
          this.inputs[3].class_input = "form-control is-invalid";
          this.inputs[3].text_error = "Debe seleccionar un estado";
          this.inputs[4].class_input = "form-control";
          this.inputs[4].text_error = "";
          this.inputs[5].class_input = "form-control";
          this.inputs[5].text_error = "";
        } else {
          this.inputs[3].class_input = "form-control is-valid";
          this.inputs[3].text_error = "";
        }
      }
      if (input == "mun_manual") {
        if (
          $("#municipioManual").val() == 0 ||
          $("#municipioManual").val() == ""
        ) {
          this.inputs[4].class_input = "form-control is-invalid";
          this.inputs[4].text_error = "Debe seleccionar un municipio";
          this.inputs[5].class_input = "form-control";
          this.inputs[5].text_error = "";
        } else {
          this.inputs[4].class_input = "form-control is-valid";
          this.inputs[4].text_error = "";
        }
      }
      if (input == "loc_manual") {
        if (
          $("#localidadManual").val() == 0 ||
          $("#localidadManual").val() == ""
        ) {
          this.inputs[5].class_input = "form-control is-invalid";
          this.inputs[5].text_error = "Debe seleccionar una localidad";
        } else {
          this.inputs[5].class_input = "form-control is-valid";
          this.inputs[5].text_error = "";
        }
      }
    },

    cerrar_sesion() {
      toastr.remove();
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },

    send_datos_personales(e) {
      e.preventDefault();
      if (this.data.telfono_alt == "") {
        this.inputs[0].class_input = "form-control is-invalid";
        this.inputs[0].text_error = "Escriba su teléfono ";
        this.showToast(
          "¡Falta información!  <br> Revisa que todos los campos estén completos",
          "Advertencia",
          8000,
          "warning"
        );
      }
      if (this.inputs[0].class_input == "form-control is-valid") {
        ubbj_api
          .post("registro/estudiante/1", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
            id_usuario: this.data.id_usuario,
            telefono_alt: this.data.telfono_alt,
          })
          .then((response) => {
            this.showToast(
              response.data.message,
              "Datos personales",
              8000,
              "success"
            );

            this.data.id_status = 4;
            sessionStorage.data = JSON.stringify(this.data);
            this.pasos[1].style_paso = "cursor:pointer;";
            this.pasos[1].class_pasos = "completed";
            this.pasos[1].stepper = "#paso2";
            setTimeout(() => {
              document.getElementById("btn_paso2").click();
              window.scroll(0, 830);
            }, 100);
          })
          .catch((e) => {
            this.showToast(
              e.response.data.message,
              "Advertencia",
              8000,
              "warning"
            );
          });
      }
    },

    obtener_cp: function (tipo) {
      if (
        tipo == "manual" ||
        (tipo == "normal" &&
          this.inputs[2].text_error ==
            "No se encontró ningun resultado para el código postal proporcionado.")
      ) {
        this.search = false;
        this.search2 = false;
        this.inputs[2].text_error = "";
        this.inputs[2].class_input = "form-control";
        this.inputs[3].text_error = "";
        this.inputs[4].text_error = "";
        this.inputs[5].text_error = "";
        this.inputs[3].class_input = "form-control";
        this.inputs[4].class_input = "form-control";
        this.inputs[5].class_input = "form-control";
        this.data.codigo_postal = "";
      } else {
        if (this.search2 == true) {
          this.search2 = false;
          this.search = false;
          this.inputs[2].class_input = "form-control";
          this.inputs[2].text_error = "";
          this.inputs[3].class_input = "form-control";
          this.inputs[4].class_input = "form-control";
          this.data.codigo_postal = "";
          this.data.estado = "";
          this.data.municipio = "";
          this.inputs[5].class_input = "form-control";
          $("#localidad_domicilio").attr("disabled", true);
        }
        if (this.search == false) {
          if (this.data.codigo_postal == "") {
            this.data.estado = "";
            this.data.id_estado = "";
            this.data.municipio = "";
            this.data.id_municipio = "";
            this.inputs[2].class_input = "form-control is-invalid";
            this.inputs[2].text_error =
              "No se encontró ningun resultado para el código postal proporcionado.";
            this.obtener_estados_manual();
            this.search2 = true;
          } else {
            ubbj_api
              .post("cp", {
                cp: this.data.codigo_postal,
              })
              .then((response) => {
                console.log(response.data.message);
                if (response.data.message != undefined) {
                  this.search2 = true;
                  this.data.estado = "";
                  this.data.id_estado = "";
                  this.data.municipio = "";
                  this.data.id_municipio = "";
                  this.inputs[2].class_input = "form-control is-invalid";
                  this.inputs[2].text_error = response.data.message;
                  this.obtener_estados_manual();
                } else {
                  this.search = true;
                  const cantidad = response.data.Localidades.length;

                  if (response.data.Localidades.length > 1) {
                    this.Localidad.push({
                      id: 0,
                      localidad: "Selecciona una opción",
                    });
                    this.data.id_localidad = 0;
                  }

                  for (var i = 0; i < cantidad; i++) {
                    this.Localidad.push({
                      id: response.data.Localidades[i].id_localidad,
                      localidad: response.data.Localidades[i].localidad,
                    });
                    if (response.data.Localidades.length == 1) {
                      this.data.id_localidad =
                        response.data.Localidades[i].id_localidad;
                      this.inputs[5].class_input = "form-control is-valid";
                      this.inputs[5].text_error = "";
                    }
                  }
                  if (response.data.message != undefined) {
                    this.inputs[2].class_input = "form-control is-invalid";
                    this.inputs[2].text_error =
                      "No se encontro ningun resultado con el cp proporcionado";
                  }
                  this.data.estado = response.data.Localidades[0].estado;
                  this.data.id_estado = response.data.Localidades[0].id_estado;
                  this.data.municipio = response.data.Localidades[0].municipio;
                  this.data.id_municipio =
                    response.data.Localidades[0].id_municipio;
                  this.inputs[2].class_input = "form-control is-valid";
                  this.inputs[3].class_input = "form-control is-valid";
                  this.inputs[4].class_input = "form-control is-valid";
                  $("#localidad_domicilio").attr("disabled", false);
                  this.inputs[2].text_error = "";

                  $("#localidad_domicilio").attr("disabled", false);
                }
              })
              .catch((e) => {
                //
              });
          }
        } else {
          this.search = false;
          this.inputs[2].class_input = "form-control";
          this.inputs[3].class_input = "form-control";
          this.inputs[4].class_input = "form-control";
          this.inputs[2].text_error = "";
          this.data.codigo_postal = "";
          this.data.estado = "";
          this.data.municipio = "";
          this.inputs[5].class_input = "form-control";
          $("#localidad_domicilio").attr("disabled", true);
        }
      }
    },

    async obtener_estados_manual() {
      this.Estados = [];
      this.data.id_estado = 0;

      ubbj_api
        .post("estados")
        .then((response) => {
          this.id_estado = 0;
          this.id_municipio = 0;
          this.id_localidad = 0;

          var ccontado = response.data.Estados.length;
          for (var i = 1; i < ccontado; i++) {
            this.Estados.push({
              id_estado: response.data.Estados[i].id_estado,
              estado: response.data.Estados[i].estado,
            });
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },

    obtener_municipio: function () {
      this.id_municipio = 0;
      this.id_localidad = 0;
      this.inputs[4].class_input = "form-control";
      this.inputs[4].text_error = "";
      this.inputs[5].class_input = "form-control";
      this.inputs[5].text_error = "";
      this.Municipio = [];

      if (this.data.id_estado != 0) {
        ubbj_api
          .post("municipios", {
            id_estado: this.data.id_estado,
          })
          .then((response) => {
            const cantidad2 = response.data.Municipios.length;

            for (var i = 1; i < cantidad2; i++) {
              this.Municipio.push({
                id_municipio: response.data.Municipios[i].id_municipio,
                municipio: response.data.Municipios[i].municipio,
              });
            }
            //FIN CICLO PARA ASIGNACIÓN DE HA ARRAY
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.id_municipio = 0;
        this.id_localidad = 0;
      }
    },

    obtener_localidad: function () {
      this.id_localidad = 0;
      this.Localidad = [];
      if (this.id_municipio != 0) {
        ubbj_api
          .post("localidades", { id_municipio: this.id_municipio })
          .then((response) => {
            const cantidad2 = response.data.Localidades.length;

            for (var i = 1; i < cantidad2; i++) {
              this.Localidad.push({
                id_localidad: response.data.Localidades[i].id_localidad,
                localidad: response.data.Localidades[i].localidad,
              });
            }
          })
          .catch((e) => {
            console.log(e);
          });
      } else {
        this.id_localidad = 0;
      }
    },

    send_domicilio_actual: function (e) {
      e.preventDefault();
      toastr.remove();
      let id_localidad = $("#localidad_domicilio").val();

      if (this.search2 == false) {
        if (
          this.data.codigo_postal == "" &&
          this.data.id_localidad == "" &&
          this.data.calle == "" &&
          this.data.num_ext == "" &&
          this.data.referencias == ""
        ) {
          this.inputs[2].class_input = "form-control is-invalid";
          this.inputs[2].text_error = "Escribe tu código postal";
          this.inputs[6].class_input = "form-control is-invalid";
          this.inputs[6].text_error = "Escribe tu calle";
          this.inputs[7].class_input = "form-control is-invalid";
          this.inputs[7].text_error = "Escribe tu número exterior";
          this.inputs[10].class_input = "form-control is-invalid";
          this.inputs[10].text_error = "Escribe tu referencia";
          this.showToast(
            "¡Falta información!  <br> Revisa que todos los campos estén completos",
            "Advertencia",
            13000,
            "warning"
          );
        } else {
          if (this.data.codigo_postal == "") {
            this.inputs[2].class_input = "form-control is-invalid";
            this.inputs[2].text_error = "Escribe tu código postal";
          }
          if (this.data.id_localidad == "") {
            this.inputs[5].class_input = "form-control is-invalid";
            this.inputs[5].text_error =
              "Selecciona tu Colonia, barrio o tenencia";
          }
          if (this.data.calle == "") {
            this.inputs[6].class_input = "form-control is-invalid";
            this.inputs[6].text_error = "Escribe tu calle";
          }
          if (this.data.num_ext == "") {
            this.inputs[7].class_input = "form-control is-invalid";
            this.inputs[7].text_error = "Escribe tu número exterior";
          }
          if (this.data.referencias == "") {
            this.inputs[10].class_input = "form-control is-invalid";
            this.inputs[10].text_error = "Escribe tu referencia";
          }
          if (
            this.inputs[2].class_input == "form-control is-valid" &&
            this.inputs[3].class_input == "form-control is-valid" &&
            this.inputs[4].class_input == "form-control is-valid" &&
            this.inputs[5].class_input == "form-control is-valid" &&
            this.inputs[6].class_input == "form-control is-valid" &&
            this.inputs[7].class_input == "form-control is-valid" &&
            this.inputs[10].class_input == "form-control is-valid"
          ) {
          } else {
            let errores = "";
            for (let i = 0; i < this.inputs.length; i++) {
              if (this.inputs[i].text_error != "") {
                errores =
                  errores + "* " + this.inputs[i].text_error + "<br><br>";
              }
            }
            this.showToast(
              "<br>" + errores,
              "¡Falta información!",
              13000,
              "warning"
            );
          }
        }

        if (
          this.inputs[2].class_input == "form-control is-valid" &&
          this.inputs[3].class_input == "form-control is-valid" &&
          this.inputs[4].class_input == "form-control is-valid" &&
          this.inputs[5].class_input == "form-control is-valid" &&
          this.inputs[6].class_input == "form-control is-valid" &&
          this.inputs[7].class_input == "form-control is-valid" &&
          this.inputs[10].class_input == "form-control is-valid"
        ) {
          ubbj_api
            .post("registro/estudiante/2", {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers":
                  "Origin, Content-Type, X-Auth-Token",
              },
              id_usuario: this.data.id_usuario,
              cp: this.data.codigo_postal,
              id_estado: this.data.id_estado,
              id_municipio: this.data.id_municipio,
              id_localidad: id_localidad,
              calle: this.data.calle,
              num_ext: this.data.num_ext,
              num_int: this.data.num_int,
              referencias: this.data.referencias,
            })
            .then((response) => {
              this.showToast(
                response.data.message,
                "Domicilio actual",
                8000,
                "success"
              );

              this.data.id_status = 5;
              this.data.localidad = $(
                'select[name="localidad"] option:selected'
              )
                .text()
                .trim();
              sessionStorage.data = JSON.stringify(this.data);
              this.pasos[2].style_paso = "cursor:pointer;";
              this.pasos[2].class_pasos = "completed";
              this.pasos[2].stepper = "#paso3";
            });
        }
      } else {
        this.inputs[2].class_input = "form-control";
        this.inputs[2].text_error = "";
        if (
          $("#estadoManual").val() == 0 &&
          $("#municipioManual").val() &&
          this.data.id_localidad == "" &&
          this.data.calle == "" &&
          this.data.num_ext == "" &&
          this.data.referencias == ""
        ) {
          this.inputs[3].class_input = "form-control is-invalid";
          this.inputs[3].text_error = "Selecciona un estado";
          this.inputs[4].class_input = "form-control is-invalid";
          this.inputs[4].text_error = "Selecciona un municipio";
          this.inputs[5].class_input = "form-control is-invalid";
          this.inputs[5].text_error = "Selecciona una localidad";
          this.inputs[6].class_input = "form-control is-invalid";
          this.inputs[6].text_error = "Escribe tu calle";
          this.inputs[7].class_input = "form-control is-invalid";
          this.inputs[7].text_error = "Escribe tu número exterior";
          this.inputs[10].class_input = "form-control is-invalid";
          this.inputs[10].text_error = "Escribe tu referencia";

          this.showToast(
            "¡Falta información!  <br> Revisa que todos los campos estén completos",
            "Advertencia",
            13000,
            "warning"
          );
        } else {
          if (
            $("#estadoManual").val() == 0 ||
            $("#estadoManual").val() == undefined
          ) {
            this.inputs[3].class_input = "form-control is-invalid";
            this.inputs[3].text_error = "Debe seleccionar un estado";
          } else {
            this.inputs[3].class_input = "form-control is-valid";
            this.inputs[3].text_error = "";
          }
          if (
            $("#municipioManual").val() == 0 ||
            $("#municipioManual").val() == ""
          ) {
            this.inputs[4].class_input = "form-control is-invalid";
            this.inputs[4].text_error = "Debe seleccionar un municipio";
          } else {
            this.inputs[4].class_input = "form-control is-valid";
            this.inputs[4].text_error = "";
          }
          if (
            $("#localidadManual").val() == 0 ||
            $("#localidadManual").val() == ""
          ) {
            this.inputs[5].class_input = "form-control is-invalid";
            this.inputs[5].text_error = "Debe seleccionar una localidad";
          } else {
            this.inputs[5].class_input = "form-control is-valid";
            this.inputs[5].text_error = "";
          }
          if (this.data.calle == "") {
            this.inputs[6].class_input = "form-control is-invalid";
            this.inputs[6].text_error = "Escribe tu calle";
          }
          if (this.data.num_ext == "") {
            this.inputs[7].class_input = "form-control is-invalid";
            this.inputs[7].text_error = "Escribe tu número exterior";
          }
          if (this.data.referencias == "") {
            this.inputs[10].class_input = "form-control is-invalid";
            this.inputs[10].text_error = "Escribe tu referencia";
          }
          if (
            this.inputs[3].class_input == "form-control is-valid" &&
            this.inputs[3].class_input == "form-control is-valid" &&
            this.inputs[4].class_input == "form-control is-valid" &&
            this.inputs[5].class_input == "form-control is-valid" &&
            this.inputs[6].class_input == "form-control is-valid" &&
            this.inputs[7].class_input == "form-control is-valid" &&
            this.inputs[10].class_input == "form-control is-valid"
          ) {
          } else {
            let errores = "";
            for (let i = 0; i < this.inputs.length; i++) {
              if (this.inputs[i].text_error != "") {
                errores =
                  errores + "* " + this.inputs[i].text_error + "<br><br>";
              }
            }
            this.showToast(
              "<br>" + errores,
              "¡Falta información!",
              13000,
              "success"
            );
          }
        }
        if (
          this.inputs[3].class_input == "form-control is-valid" &&
          this.inputs[4].class_input == "form-control is-valid" &&
          this.inputs[5].class_input == "form-control is-valid" &&
          this.inputs[6].class_input == "form-control is-valid" &&
          this.inputs[7].class_input == "form-control is-valid" &&
          this.inputs[10].class_input == "form-control is-valid"
        ) {
          ubbj_api
            .post("registro/estudiante/2", {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers":
                  "Origin, Content-Type, X-Auth-Token",
              },
              id_usuario: this.data.id_usuario,
              id_estado: this.data.id_estado,
              id_municipio: this.id_municipio,
              id_localidad: this.id_localidad,
              calle: this.data.calle,
              num_ext: this.data.num_ext,
              num_int: this.data.num_int,
              referencias: this.data.referencias,
            })
            .then((response) => {
              this.search2 = false;

              this.showToast(
                response.data.message,
                "Domicilio actual",
                8000,
                "success"
              );

              this.data.id_status = 5;
              this.data.localidad = $(
                'select[name="localidad"] option:selected'
              )
                .text()
                .trim();
              sessionStorage.data = JSON.stringify(this.data);
              this.pasos[2].style_paso = "cursor:pointer;";
              this.pasos[2].class_pasos = "completed";
              this.pasos[2].stepper = "#paso3";

              this.data.codigo_postal = "Sin número";
              this.data.estado = $(
                'select[name="estadoManual"] option:selected'
              )
                .text()
                .trim();
              this.data.municipio = $(
                'select[name="municipioManual"] option:selected'
              )
                .text()
                .trim();
              this.data.localidad = $(
                'select[name="localidadManual"] option:selected'
              )
                .text()
                .trim();
            });
        }
      }
    },

    obtener_estados() {
      ubbj_api
        .post("estados", {})
        .then((response) => {
          this.data.id_sede_pre = 0;
          this.id_area = 0;
          this.id_carrera = 0;

          var ccontado = response.data.Estados.length;

          for (var i = 0; i < ccontado; i++) {
            this.Estados.push({
              id_estado: response.data.Estados[i].id_estado,
              estado: response.data.Estados[i].estado,
            });
          }
        })
        .catch((e) => {});
    },

    obtener_sede() {
      this.inputs[12].class_input = "form-control";
      this.inputs[13].class_input = "form-control";
      this.inputs[14].class_input = "form-control";

      if (this.data.id_estado_pre == null) {
        this.data.id_sede_pre = null;
        this.id_area = null;
      } else {
        this.data.id_sede_pre = 0;
        this.id_area = 0;
        this.id_carrera = 0;
        this.Sedes_Estudiantes = [];

        ubbj_api
          .post("mostrar/sedesest", { id_estado: this.data.id_estado_pre })
          .then((response) => {
            var ccontado = response.data.Sedes_Estudiantes.length;

            this.data.id_sede_pre = 0;

            for (var i = 0; i < ccontado; i++) {
              this.Sedes_Estudiantes.push({
                id_sede: response.data.Sedes_Estudiantes[i].id_sede,
                sede: response.data.Sedes_Estudiantes[i].sede,
              });
            }
          })
          .catch((e) => {});
      }
    },

    obtener_area: function () {
      this.inputs[13].class_input = "form-control";
      this.inputs[14].class_input = "form-control";
      if (this.data.id_sede_pre == null) {
        this.id_area = null;
      } else {
        this.id_area = 0;
        this.id_carrera = 0;
        this.Area_conocimiento = [];
        ubbj_api
          .post("mostrar/area", { id_sede: this.data.id_sede_pre })
          .then((response) => {
            var ccontado = response.data.Area_conocimiento.length;

            for (var i = 0; i < ccontado; i++) {
              this.Area_conocimiento.push({
                id_area_conocimiento:
                  response.data.Area_conocimiento[i].id_area_conocimiento,
                area: response.data.Area_conocimiento[i].area,
              });
            }
          })
          .catch((e) => {});
      }
    },

    obtener_carrera: function () {
      this.inputs[14].class_input = "form-control";
      if (this.id_area == null) {
        this.id_carrera = null;
      } else {
        this.id_carrera = 0;
        this.Carreras_Estudiantes = [];
        ubbj_api
          .post("mostrar/carreraest", {
            id_area_conocimiento: this.id_area,
            id_sede: this.data.id_sede_pre,
          })
          .then((response) => {
            var contador = response.data.Carreras_Estudiantes.length;

            for (var i = 0; i < contador; i++) {
              this.Carreras_Estudiantes.push({
                id_carrera: response.data.Carreras_Estudiantes[i].id_carrera,
                carrera: response.data.Carreras_Estudiantes[i].carrera,
              });
            }
          })
          .catch((e) => {});
      }
    },

    send_sedeYcarrera: function (e) {
      e.preventDefault();
      toastr.remove();
      if (
        this.data.id_estado_pre == null &&
        this.data.id_sede_pre == null &&
        this.id_carrera == null &&
        this.id_area == null
      ) {
        this.inputs[11].class_input = "form-control is-invalid";
        this.inputs[11].text_error = "Selecciona el estado";
        this.inputs[12].class_input = "form-control is-invalid";
        this.inputs[12].text_error = "Selecciona la sede";
        this.inputs[13].class_input = "form-control is-invalid";
        this.inputs[13].text_error = "Selecciona el área de conocimiento";
        this.inputs[14].class_input = "form-control is-invalid";
        this.inputs[14].text_error = "Selecciona la carrera de interés";

        this.showToast(
          "¡Falta información!  <br> Revisa que todos los campos estén seleccionados",
          "Advertencia",
          8000,
          "success"
        );
      } else {
        if (this.data.id_estado_pre == null) {
          this.inputs[11].class_input = "form-control is-invalid";
          this.inputs[11].text_error = "Selecciona el estado";
        }
        if (this.data.id_sede_pre == null) {
          this.inputs[12].class_input = "form-control is-invalid";
          this.inputs[12].text_error = "Selecciona la sede";
        }
        if (this.id_area == null) {
          this.inputs[13].class_input = "form-control is-invalid";
          this.inputs[13].text_error = "Selecciona área de conocimiento";
        }
        if (this.id_carrera == null) {
          this.inputs[14].class_input = "form-control is-invalid";
          this.inputs[14].text_error = "Selecciona la carrera de interés";
        }
        if (
          this.inputs[11].class_input == "form-control is-valid" &&
          this.inputs[12].class_input == "form-control is-valid" &&
          this.inputs[13].class_input == "form-control is-valid" &&
          this.inputs[14].class_input == "form-control is-valid"
        ) {
        } else {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          let errores = "";
          for (i = 0; i < this.inputs.length; i++) {
            if (this.inputs[i].text_error != "") {
              errores = errores + "* " + this.inputs[i].text_error + "<br><br>";
            }
          }
          toastr.warning("<br>" + errores, "¡Falta información!", {
            timeOut: 13000,
          });
        }
      }
      if (
        this.inputs[11].class_input == "form-control is-valid" &&
        this.inputs[12].class_input == "form-control is-valid" &&
        this.inputs[13].class_input == "form-control is-valid" &&
        this.inputs[14].class_input == "form-control is-valid"
      ) {
        ubbj_api
          .post("registro/estudiante/3", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
            id_convocatoria: this.id_convocatoria,
            id_usuario: this.data.id_usuario,
            id_estado: this.data.id_estado_pre,
            id_sede: this.data.id_sede_pre,
            id_carrera: this.id_carrera,
            id_area_conocimiento: this.id_area,
          })
          .then((response) => {
            this.showToast(
              response.data.message,
              "Sede y carrera",
              8000,
              "success"
            );

            this.data.id_status = 6;
            sessionStorage.data = JSON.stringify(this.data);
            this.pasos[3].style_paso = "cursor:pointer;";
            this.pasos[3].class_pasos = "completed";
            this.pasos[3].stepper = "#paso4";
            this.data.Estadosede = $(
              'select[name="estado_sede"] option:selected'
            )
              .text()
              .trim();
            this.data.Sedeestudiante = $('select[name="sede"] option:selected')
              .text()
              .trim();
            this.data.AreaConocimientoEstudiante = $(
              'select[name="area"] option:selected'
            )
              .text()
              .trim();
            this.data.Carreraestudiante = $(
              'select[name="carrera"] option:selected'
            )
              .text()
              .trim();
            setTimeout(() => {
              document.getElementById("btn_paso4").click();
              window.scroll(0, 830);
            }, 100);
          })
          .catch((e) => {
            this.showToast(
              e.response.data.message,
              "Sede y carrera",
              8000,
              "warning"
            );
          });
      }
    },

    carga_status() {
      if (this.data.doc_actadeNacimiento != "") {
        $("#success_acta_nacimiento").show();
      }
      if (this.data.doc_curp != "") {
        $("#success_CURP").show();
      }
      if (this.data.doc_identificacionOficial != "") {
        $("#success_Identificación").show();
      }
      if (this.data.doc_Certificado != "") {
        $("#success_Certificado").show();
      }
      if (this.data.doc_CartaIntencion != "") {
        $("#success_carta_intencion").show();
      }
      if (this.data.fotografia != "") {
        $("#success_foto").show();
      }
      if (this.data.doc_comprobante != "") {
        $("#success_comprobante_domicilio").show();
      }
    },

    enviar_solicitud: function (e) {
      toastr.remove();
      e.preventDefault();

      if (
        this.check_manifiesto &&
        (this.data.doc_comprobante != "" ||
          this.data.doc_actadeNacimiento != "" ||
          this.data.doc_curp != "" ||
          this.data.doc_identificacionOficial != "" ||
          this.data.doc_Certificado != "" ||
          this.data.doc_CartaIntencion != "" ||
          this.data.fotografia != "")
      ) {
        ubbj_api
          .post("registro/estudiante/5", { id_usuario: this.data.id_usuario })
          .then((respuesta) => {
            (toastr.options.showDuration = "300"),
              (toastr.options.hideDuration = "1000"),
              (toastr.options.timeOut = 0),
              (toastr.options.positionClass = "toast-top-full-width"),
              toastr.success(
                '<p style="text-align: justify;text-justify: inter-word"><br>Gracias, haz concluido con tu pre-registro con folio ' +
                  this.data.folio +
                  ', te contactaremos por correo electrónico para continuar con tu trámite.</p> <button style="float:right;color:black" type="button" class="btn  clear">Aceptar</button> ',
                "<h5>Registro completado</h5>"
              );
            this.data.id_status = 8;
            sessionStorage.data = JSON.stringify(this.data);
            this.pasos[4].class_pasos = "success";
            this.check_manifiesto = true;
          })
          .catch((e) => {
            this.showToast(
              e.response.data.message,
              "Advertencia",
              8000,
              "warning"
            );
          });
      } else {
        if (
          this.check_manifiesto == false &&
          this.data.doc_comprobante == "" &&
          this.data.doc_actadeNacimiento == "" &&
          this.data.doc_curp == "" &&
          this.data.doc_identificacionOficial == "" &&
          this.data.doc_Certificado == "" &&
          this.data.doc_CartaIntencion == "" &&
          this.data.fotografia == ""
        ) {
          this.showToast(
            "¡Falta información!  <br> Revise su información",
            "Advertencia",
            8000,
            "warning"
          );
          this.inputs[15].class_input = "custom-control-input is-invalid";
        } else {
          if (this.check_manifiesto == false) {
            this.showToast(
              "Confirma que esta información es verdadera y exacta",
              "Advertencia",
              8000,
              "warning"
            );
            this.inputs[15].class_input = "custom-control-input is-invalid";
          }
          if (
            this.data.doc_comprobante == "" &&
            this.data.doc_actadeNacimiento == "" &&
            this.data.doc_curp == "" &&
            this.data.doc_identificacionOficial == "" &&
            this.data.doc_Certificado == "" &&
            this.data.doc_CartaIntencion == "" &&
            this.data.fotografia == ""
          ) {
            this.showToast(
              "Debe cargar por lo menos un documento para el expediente",
              "Advertencia",
              8000,
              "warning"
            );
          }
        }
      }
    },
  },
};
</script>

<template>
  <div class="row mt-5" style="margin: 0px; padding: 0px">
    <div class="col-md-11 offset-md-1">
      <div class="opciones mb-3 text-left">
        <a @click="redirigir('/')"><i class="fas fa-home"></i> Inicio</a>
        <i class="ml-1 fas fa-chevron-right"></i>
        <a @click="redirigir('/')" class="ml-1"
          ><i class="ml-1 fas fa-calendar-alt"></i> Registro de convocatoria</a
        >
        <i class="ml-1 fas fa-chevron-right"></i>
        <a class="ml-1"
          ><i class="fas fa-address-card"></i> Registro de solicitud para
          aspirante a estudiante
        </a>
      </div>
      <div style="width: 91%" class="leyendaprincipal">
        <h1 class="txt-md-x1 text-left">
          Registro de solicitud para aspirante a estudiante
        </h1>
        <hr class="red" />
        <div class="alert alert-info">
          <strong>
            Completa los siguientes formularios para la creación de la solicitud
            de candidato a estudiante
          </strong>
        </div>
      </div>

      <div style="width: 91%">
        <h3 v-if="data" class="titulos_estudiantes txt-md-x">
          Folio: {{ data.folio }}
        </h3>
      </div>
    </div>

    <div class="col-md-11 offset-md-1 mt-5 text-left" v-if="data">
      <ul style="float: left !important" class="wizard-steps responsiveTap">
        <li
          id="btn_paso1"
          :class="{ 'hand completed': data.id_status >= 1 }"
          data-toggle="collapse"
          data-target="pasos1"
          @click="activate_sttepers(1)"
        >
          <h5>Paso 1</h5>
          <span>Datos personales</span>
        </li>
        <li
          id="btn_paso2"
          :class="{ 'hand completed': data.id_status >= 4 }"
          data-toggle="collapse"
          data-target="pasos2"
          @click="activate_sttepers(4)"
        >
          <h5>Paso 2</h5>
          <span>Domicilio actual</span>
        </li>
        <li
          id="btn_paso3"
          :class="{ 'hand completed': data.id_status >= 5 }"
          data-toggle="collapse"
          data-target="pasos3"
          @click="activate_sttepers(5)"
        >
          <h5>Paso 3</h5>
          <span>Sede y carrera a elegir</span>
        </li>
        <li
          id="btn_paso4"
          :class="{ 'hand completed': data.id_status >= 4 }"
          data-toggle="collapse"
          data-target="pasos4"
          @click="activate_sttepers(6)"
        >
          <h5>Paso 4</h5>
          <span>Documentos del expediente</span>
        </li>
        <li aria-expanded="false" :class="{ success: data.id_status == 8 }">
          <h5>Completado</h5>
          <span>&nbsp</span>
        </li>
      </ul>
    </div>

    <div class="col-md-11 offset-md-1" v-if="data">
      <div id="accordion" style="width: 91%">
        <div class="card">
          <div class="card card_space text-left">
            <transition :duration="animate_conf" name="nested">
              <div
                v-if="viewSteper == 1"
                id="paso1"
                class="collapse"
                :class="{ show: viewSteper == 1 }"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <div>
                    <form @submit="send_datos_personales($event)" role="form">
                      <div class="form-group">
                        <div class="row" style="margin-top: 20px">
                          <div class="col-md-12">
                            <h4>Datos personales</h4>
                            <br />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="folio"
                              >Folio:</label
                            >
                            <input
                              disabled
                              class="form-control"
                              id="folio"
                              type="text"
                              v-model="data.folio"
                            />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="curp"
                              >CURP:</label
                            >
                            <input
                              disabled
                              class="form-control"
                              id="curp"
                              type="text"
                              v-model="data.CURP"
                            />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="nombre"
                              >Nombre(s):</label
                            >
                            <input
                              disabled
                              class="form-control"
                              id="nombre"
                              type="text"
                              v-model="data.nombre"
                            />
                          </div>
                        </div>

                        <div class="row" style="margin-top: 20px">
                          <div class="col-md-4">
                            <label class="control-label" for="primer_a"
                              >Primer apellido:</label
                            >
                            <input
                              disabled
                              class="form-control"
                              id="primer_a"
                              type="text"
                              v-model="data.apaterno"
                            />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="segundo_a"
                              >Segundo apellido:</label
                            >
                            <input
                              disabled
                              class="form-control"
                              id="segundo_a"
                              type="text"
                              v-model="data.amaterno"
                            />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="email"
                              >Correo eletrónico:</label
                            >
                            <input
                              disabled
                              class="form-control"
                              id="email"
                              type="text"
                              v-model="data.email"
                            />
                          </div>
                        </div>
                      </div>
                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-4">
                          <label class="control-label" for="telefono_contacto"
                            >Teléfono de contacto:</label
                          >
                          <input
                            disabled
                            class="form-control"
                            id="telefono_contacto"
                            type="text"
                            v-model="data.telefono"
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            class="control-label"
                            for="telefono_contacto_alterno"
                            >Teléfono de contacto alterno
                            <span
                              v-if="
                                inputs[0].class_input ==
                                'form-control is-invalid'
                              "
                              class="red"
                              >*</span
                            >
                            :</label
                          >
                          <input
                            :disabled="data.id_status > 1"
                            :maxlength="max_num_alter"
                            :class="inputs[0].class_input"
                            id="telefono_contacto_alterno"
                            type="text"
                            placeholder="Escribe el teléfono"
                            v-model="data.telfono_alt"
                            @keyup="validacion_input('tel_alt')"
                            v-on:keypress="keyNum($event)"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[0].text_error }}
                          </div>
                        </div>
                      </div>

                      <div
                        style="
                          margin-top: 20px;
                          margin-bottom: 20px;
                          float: right;
                        "
                      >
                        <div :hidden="data.id_status > 1">
                          <button
                            :hidden="data.id_status > 1"
                            class="btn btn-primary pull-right"
                            type="submit"
                          >
                            Guardar y continuar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <div class="card card_space text-left">
            <transition :duration="animate_conf" name="nested">
              <div
                v-if="viewSteper == 4"
                id="paso2"
                class="collapse"
                :class="{ show: viewSteper == 4 }"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <div>
                    <form
                      class="text-left"
                      @submit="send_domicilio_actual($event)"
                      role="form"
                    >
                      <div class="form-group">
                        <div class="row" style="margin-top: 20px">
                          <div class="col-md-12">
                            <h4>Domicilio actual</h4>
                            <br />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="cp"
                              >Código postal
                              <span
                                v-if="
                                  inputs[2].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :</label
                            >
                            <div class="input-group">
                              <input
                                placeholder="Ingresa tu código postal"
                                :disabled="
                                  data.id_status > 4 ||
                                  search == true ||
                                  search2 == true
                                "
                                :maxlength="max_cp"
                                :class="inputs[2].class_input"
                                id="cp"
                                type="text"
                                v-model="data.codigo_postal"
                                @keyup="validacion_input('cp')"
                                v-on:keypress="keyNum($event)"
                              />
                              <div
                                :hidden="data.id_status > 4"
                                class="input-group-append"
                              >
                                <span
                                  v-if="!search2"
                                  style="cursor: pointer"
                                  class="input-group-text"
                                  @click="obtener_cp('normal')"
                                >
                                  <i
                                    :class="[
                                      search
                                        ? 'fa fa-undo-alt'
                                        : 'fa fa-search',
                                    ]"
                                    aria-hidden="true"
                                  ></i
                                ></span>
                                <span
                                  v-if="search2"
                                  style="cursor: pointer"
                                  class="input-group-text"
                                  @click="obtener_cp('manual')"
                                >
                                  <i
                                    :class="[
                                      search2
                                        ? 'fa fa-undo-alt'
                                        : 'fa fa-search',
                                    ]"
                                    aria-hidden="true"
                                  ></i
                                ></span>
                              </div>
                              <div class="invalid-feedback">
                                {{ inputs[2].text_error }}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="curp"
                              >Estado :</label
                            >
                            <input
                              v-if="!search2"
                              disabled
                              :class="inputs[3].class_input"
                              type="text"
                              v-model="data.estado"
                            />
                            <select
                              :disabled="data.id_status > 4"
                              v-if="search2"
                              :class="inputs[3].class_input"
                              v-model="data.id_estado"
                              id="estadoManual"
                              name="estadoManual"
                              @change="
                                validacion_input('edo_manual');
                                obtener_municipio();
                              "
                            >
                              <option value="0">Seleccione una opción</option>
                              <option
                                v-for="(item, index) of Estados"
                                :value="item.id_estado"
                              >
                                {{ item.estado }}
                              </option>
                            </select>
                            <div class="invalid-feedback">
                              {{ inputs[3].text_error }}
                            </div>
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="nombre"
                              >Municipio :</label
                            >
                            <input
                              v-if="!search2"
                              disabled
                              :class="inputs[4].class_input"
                              type="text"
                              v-model="data.municipio"
                            />
                            <select
                              :disabled="data.id_status > 4"
                              v-if="search2"
                              :class="inputs[4].class_input"
                              v-model="id_municipio"
                              id="municipioManual"
                              name="municipioManual"
                              @change="
                                validacion_input('mun_manual');
                                obtener_localidad();
                              "
                            >
                              <option value="0">Seleccione una opción</option>
                              <option
                                v-for="(item, index) of Municipio"
                                :value="item.id_municipio"
                              >
                                {{ item.municipio }}
                              </option>
                            </select>
                            <div class="invalid-feedback">
                              {{ inputs[4].text_error }}
                            </div>
                          </div>
                        </div>

                        <div class="row espacio">
                          <div class="col-md-4">
                            <label class="control-label" for="cp"
                              >Colonia, barrio, tenencia
                              <span
                                v-if="
                                  inputs[5].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :</label
                            >
                            <input
                              disabled
                              v-show="data.id_status > 4"
                              :class="inputs[5].class_input"
                              type="text"
                              v-model="data.localidad"
                            />
                            <select
                              v-if="!search2"
                              name="localidad"
                              :hidden="data.id_status > 4"
                              disabled
                              :class="inputs[5].class_input"
                              id="localidad_domicilio"
                              @click="validacion_input('localidad')"
                              v-model="data.id_localidad"
                            >
                              <option
                                v-for="(item, index) of Localidad"
                                :value="item.id"
                              >
                                {{ item.localidad }}
                              </option>
                            </select>
                            <select
                              :disabled="data.id_status > 4"
                              v-if="search2"
                              :class="inputs[5].class_input"
                              v-model="id_localidad"
                              id="localidadManual"
                              name="localidadManual"
                              @change="validacion_input('loc_manual')"
                            >
                              <option value="0">Seleccione una opción</option>
                              <option
                                v-for="(item, index) of Localidad"
                                :value="item.id_localidad"
                              >
                                {{ item.localidad }}
                              </option>
                            </select>

                            <div class="invalid-feedback">
                              {{ inputs[5].text_error }}
                            </div>
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="curp"
                              >Calle
                              <span
                                v-if="
                                  inputs[6].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :</label
                            >
                            <input
                              placeholder="Ingresa la calle"
                              :disabled="data.id_status > 4"
                              :class="inputs[6].class_input"
                              :maxlength="max_estandar"
                              id="calle"
                              type="text"
                              v-model="data.calle"
                              @keyup="validacion_input('calle')"
                              v-on:keypress="keyCalle($event)"
                            />
                            <div class="invalid-feedback">
                              {{ inputs[6].text_error }}
                            </div>
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="nombre"
                              >Número exterior
                              <span
                                v-if="
                                  inputs[7].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :</label
                            >
                            <input
                              placeholder="Ingresa el número exterior"
                              :disabled="data.id_status > 4"
                              :class="inputs[7].class_input"
                              :maxlength="max_nums"
                              id="numInt"
                              type="text"
                              v-model="data.num_ext"
                              @keyup="validacion_input('num_ext')"
                              v-on:keypress="keyCalle($event)"
                            />
                            <div class="invalid-feedback">
                              {{ inputs[7].text_error }}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-4">
                          <label class="control-label" for="cp"
                            >Número interior:</label
                          >
                          <input
                            placeholder="Ingresa el número interior"
                            :disabled="data.id_status > 4"
                            :class="inputs[8].class_input"
                            :maxlength="max_nums"
                            id="numExt"
                            type="text"
                            v-model="data.num_int"
                            v-on:keypress="keyCalle($event)"
                          />
                        </div>
                        <div class="col-md-8">
                          <label class="control-label" for="nombre"
                            >Referencias
                            <span
                              v-if="
                                inputs[10].class_input ==
                                'form-control is-invalid'
                              "
                              class="red"
                              >*</span
                            >
                            :</label
                          >
                          <input
                            placeholder="Ingresa las referencias"
                            :disabled="data.id_status > 4"
                            :class="inputs[10].class_input"
                            :maxlength="max_referencia"
                            id="referencia"
                            type="text"
                            v-model="data.referencias"
                            @keyup="validacion_input('referencias')"
                            v-on:keypress="keyCalle($event)"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[10].text_error }}
                          </div>
                        </div>
                      </div>

                      <div
                        style="
                          margin-top: 20px;
                          margin-bottom: 20px;
                          float: right;
                        "
                      >
                        <div :hidden="data.id_status >= 5">
                          <button
                            id="send_domicilio"
                            class="btn btn-primary pull-right"
                            type="submit"
                          >
                            Guardar y continuar
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div class="card card_space text-left">
            <transition :duration="animate_conf" name="nested">
              <div
                v-if="viewSteper == 5"
                id="paso3"
                class="collapse"
                :class="{ show: viewSteper == 5 }"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <div>
                    <form @submit="send_sedeYcarrera" role="form">
                      <div class="espacio">
                        <div class="col-md-12 espacio">
                          <h4>Sede y carrera a elegir</h4>
                          <br />
                        </div>
                        <div class="text-left">
                          <div class="col-md-12 espacio">
                            <label class="control-label" for="folio"
                              >1.- Selecciona el estado donde desea estudiar
                              <span
                                v-if="
                                  inputs[11].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :
                            </label>

                            <select
                              :hidden="data.id_status > 5"
                              :class="inputs[11].class_input"
                              name="estado_sede"
                              id="estado_sede"
                              @change="
                                obtener_sede();
                                validacion_input('sede_estado');
                              "
                              v-model="data.id_estado_pre"
                            >
                              <option value="0" selected>
                                Seleccione una opción
                              </option>
                              <option
                                v-for="(item, key) in Estados"
                                :value="item.id_estado"
                              >
                                {{ item.estado }}
                              </option>
                            </select>
                            <select
                              v-show="data.id_status > 5"
                              :class="inputs[11].class_input"
                              :disabled="data.id_status > 5"
                            >
                              <option disabled selected>
                                {{ data.Estadosede }}
                              </option>
                            </select>
                            <div class="invalid-feedback">
                              {{ inputs[11].text_error }}
                            </div>
                          </div>
                        </div>
                        <div class="text-left">
                          <div class="col-md-12 espacio">
                            <label class="control-label" for="folio"
                              >2.-Selecciona la sede
                              <span
                                v-if="
                                  inputs[12].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :
                            </label>
                            <select
                              :hidden="data.id_status > 5"
                              :disabled="data.id_status > 5"
                              :class="inputs[12].class_input"
                              name="sede"
                              id="sede"
                              v-model="data.id_sede_pre"
                              @change="
                                obtener_area();
                                validacion_input('sede');
                              "
                            >
                              <option value="0">Seleccione una sede</option>
                              <option
                                v-for="(item, key) in Sedes_Estudiantes"
                                :value="item.id_sede"
                              >
                                {{ item.sede }}
                              </option>
                            </select>
                            <select
                              v-show="data.id_status > 5"
                              :class="inputs[12].class_input"
                              :disabled="data.id_status > 5"
                            >
                              <option disabled selected>
                                {{ data.Sedeestudiante }}
                              </option>
                            </select>
                            <div class="invalid-feedback">
                              {{ inputs[12].text_error }}
                            </div>
                          </div>
                        </div>
                        <div class="text-left">
                          <div class="col-md-12 espacio">
                            <label class="control-label" for="folio"
                              >3.- Selecciona el área de conocimiento
                              <span
                                v-if="
                                  inputs[13].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :
                            </label>
                            <select
                              :hidden="data.id_status > 5"
                              :disabled="data.id_status > 5"
                              :class="inputs[13].class_input"
                              name="area"
                              id="area"
                              v-model="id_area"
                              @change="
                                obtener_carrera();
                                validacion_input('sede_area');
                              "
                            >
                              <option value="0">Seleccione una área</option>
                              <option
                                v-for="(item, key) in Area_conocimiento"
                                :value="item.id_area_conocimiento"
                              >
                                {{ item.area }}
                              </option>
                            </select>
                            <select
                              v-show="data.id_status > 5"
                              :class="inputs[13].class_input"
                              :disabled="data.id_status > 5"
                            >
                              <option disabled selected>
                                {{ data.AreaConocimientoEstudiante }}
                              </option>
                            </select>
                            <div class="invalid-feedback">
                              {{ inputs[13].text_error }}
                            </div>
                          </div>
                        </div>
                        <div class="text-left">
                          <div class="col-md-12 espacio">
                            <label class="control-label" for="folio"
                              >4.- Selecciona la carrera de interés
                              <span
                                v-if="
                                  inputs[14].class_input ==
                                  'form-control is-invalid'
                                "
                                class="red"
                                >*</span
                              >
                              :
                            </label>
                            <select
                              :hidden="data.id_status > 5"
                              :class="inputs[14].class_input"
                              name="carrera"
                              id="carrera"
                              v-model="id_carrera"
                              @change="validacion_input('sede_carrera')"
                            >
                              <option value="0">Seleccione una carrera</option>
                              <option
                                v-for="(item, key) in Carreras_Estudiantes"
                                :value="item.id_carrera"
                              >
                                {{ item.carrera }}
                              </option>
                            </select>
                            <select
                              v-show="data.id_status > 5"
                              :class="inputs[14].class_input"
                              :disabled="data.id_status > 5"
                            >
                              <option disabled selected>
                                {{ data.Carreraestudiante }}
                              </option>
                            </select>
                            <div class="invalid-feedback">
                              {{ inputs[14].text_error }}
                            </div>
                          </div>
                        </div>
                        <div
                          :hidden="data.id_status > 5"
                          class="col-md-12 espacio"
                        >
                          <button
                            style="float: right"
                            id="send_sedeYcarrera"
                            class="btn btn-primary pull-right"
                            type="submit"
                          >
                            Guardar y continuar
                          </button>
                        </div>
                        <br />
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </transition>
          </div>
          <div class="card card_space text-left">
            <transition :duration="animate_conf" name="nested">
              <div
                v-if="viewSteper == 6 || viewSteper == 7 || viewSteper == 8"
                id="paso4"
                class="collapse"
                :class="{
                  show: viewSteper == 6 || viewSteper == 7 || viewSteper == 8,
                }"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body">
                  <form role="form" class="espacio">
                    <div class="espacio text-alert alert alert-info">
                      <strong>
                        Adjunta un archivo .pdf para cada documento, para la
                        fotografía solo se aceptan archivos en formato .jpg,
                        .jpeg, .png o .bmp</strong
                      >
                    </div>
                    <div class="row espacio">
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 mg-3 margen">
                          <div class="flex">
                            <h4><strong>1.- Acta de nacimiento</strong></h4>
                            <img
                              v-if="docs[0].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="Acta_nacimiento"
                            collapse="collapseActa_nacimiento"
                            tipo="acta_nacimiento"
                            gif="Acta_nacimientoCharge"
                            embed="vistaPrevia_Acta_nacimiento"
                            title_doc_msg="Acta de nacimiento"
                            target="#collapseActa_nacimiento"
                            tipo_doc="6"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>2.- CURP</strong></h4>
                            <img
                              v-if="docs[1].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="CURP"
                            collapse="collapseCURP"
                            tipo="curp"
                            gif="CURPCharge"
                            embed="vistaPrevia_CURP"
                            title_doc_msg="CURP"
                            target="#collapseCURP"
                            tipo_doc="7"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />

                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>3.- Identificación oficial</strong></h4>
                            <img
                              v-if="docs[2].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="Identificación"
                            collapse="collapseIdentificación"
                            tipo="identificación"
                            gif="IdentificaciónCharge"
                            embed="vistaPrevia_Identificación"
                            title_doc_msg="Identificación"
                            target="#collapseIdentificación"
                            tipo_doc="8"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />

                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4>
                              <strong
                                >4.- Certificado de bachillerato o constancia de
                                estudios concluidos</strong
                              >
                            </h4>
                            <img
                              v-if="docs[3].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="Certificado"
                            collapse="collapseCertificado"
                            tipo="certificado"
                            gif="CertificadoCharge"
                            embed="vistaPrevia_Certificado"
                            title_doc_msg="Certificado"
                            target="#collapseCertificado"
                            tipo_doc="9"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>5.- Carta de intención</strong></h4>
                            <img
                              v-if="docs[4].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="Carta_intencion"
                            collapse="collapsecarta_intencion"
                            tipo="carta_intencion"
                            gif="carta_intencionCharge"
                            embed="vistaPrevia_carta_intencion"
                            title_doc_msg="carta_intencion"
                            target="#collapsecarta_intencion"
                            tipo_doc="10"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4>
                              <strong>6.- Comprobante de domicilio</strong>
                            </h4>
                            <img
                              v-if="docs[5].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="Comprobante_domicilio"
                            collapse="collapsecomprobante_domicilio"
                            tipo="comprobante_domicilio"
                            gif="comprobante_domicilioCharge"
                            embed="vistaPrevia_comprobante_domicilio"
                            title_doc_msg="comprobante_domicilio"
                            target="#collapsecomprobante_domicilio"
                            tipo_doc="17"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4>
                              <strong
                                >7.- Fotografía tipo pasaporte (formato blanco,
                                de frente, 43 mm x 35 mm)</strong
                              >
                            </h4>
                            <img
                              v-if="docs[6].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview
                            v-on:activeIcon="checks_activate"
                            id="Fotografia"
                            collapse="collapseFotografia"
                            tipo="fotografia"
                            gif="FotografiaCharge"
                            embed="vistaPrevia_Fotografia"
                            title_doc_msg="Fotografia"
                            target="#collapseFotografia"
                            tipo_doc="11"
                            convocatoria="estudiante"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>

                      <div class="row container">
                        <div class="col-md-1"></div>
                        <div
                          style="text-align: center"
                          :hidden="data.id_status == 8"
                          class="custom-control custom-checkbox col-md-9 ml-5 card_space"
                        >
                          <input
                            :disabled="data.id_status == 8"
                            style="margin-left: 10%"
                            type="checkbox"
                            :class="inputs[15].class_input"
                            id="customControlValidation1"
                            required
                            v-model="check_manifiesto"
                            @click="validacion_input('check')"
                          />
                          <label
                            class="custom-control-label ml-4"
                            for="customControlValidation1"
                            >Manifiesto bajo protesta de decir verdad que la
                            información contenida en este documento es verdadera
                            y exacta.
                          </label>
                          <div class="invalid-feedback ml-4">
                            Confirma que esta información es verdadera y exacta
                          </div>
                        </div>
                        <div class="col-md-2 card_space">
                          <form @submit="enviar_solicitud" role="form">
                            <button
                              :hidden="data.id_status == 8"
                              style="float: right"
                              type="submit"
                              class="btn btn-primary"
                            >
                              &nbsp&nbsp&nbsp Enviar solicitud &nbsp&nbsp&nbsp
                            </button>
                          </form>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <button
          id="envio_solicitud"
          style="float: right"
          class="btn btn-primary pull-right"
          @click="cerrar_sesion()"
        >
          <i class="fas fa-sign-in-alt"></i> Cerrar sesión</button
        ><br /><br />
      </div>
    </div>
  </div>
</template>

<style scoped>
.margen {
  margin: 10px;
}

.center {
  text-align: center;
}
</style>
