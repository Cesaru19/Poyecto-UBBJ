<script>
import $ from "jquery";
import toastr from "toastr/toastr";
import ubbj_api from "@/services/api/ubbj";
import DocumentsChargePreviewSedes from "@/components/shared/DocumentsChargePreviewSedes.vue";
export default {
  components: {
    DocumentsChargePreviewSedes,
  },

  mounted() {
    if (sessionStorage.data == null) {
      window.scroll(0, 800);
      this.$router.push({ path: "/", replace: true });
    }
    window.scroll(0, 800);
    this.data = JSON.parse(sessionStorage.data);
    this.convocatoria();
    this.stteper();
    this.recovery();
    this.getResultados();
  },
  data() {
    return {
      animate_conf: { enter: 550, leave: 50 },

      viewSteper: 0,
      data: [],
      resultados: "",
      Estados: [],
      Municipio: [],
      Localidad: [],
      id_localidad: 0,
      search: false,
      search2: false,

      max_calle: 50,
      max_caracteristicas: 200,
      max_estandar: 5,
      max_estandar_medidas: 8,
      max_georreferencia: 20,

      codigo_cp: "",
      estado: "",
      id_estado: 0,
      municipio: "",
      id_municipio: 0,
      search: false,
      cp_disable: false,
      localidad_disable: true,

      representaciones: [
        { value: 1, name: "Comisariado Ejidal" },
        { value: 2, name: "Comisariado Bienes" },
        { value: 3, name: "Autoridad Municipal" },
        { value: 4, name: "Particular" },
      ],

      uso_previo: [
        { value: "Pastoreo" },
        { value: "Urbano" },
        { value: "Agrícola" },
        { value: "Otros" },
      ],

      checkbox: [
        { value: "", texto: "Ninguna" },
        { value: "", texto: "-" },
        { value: "", texto: "-" },
        { value: "", texto: "-" },
        { value: "", texto: "-" },
        { value: "", texto: "-" },
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
        },
      ],

      inputs: [
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
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
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],

      docs: [
        { viewDoc: false },
        { viewDoc: false },
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

  methods: {
    checks_activate(dato) {
      setTimeout(() => {
        switch (dato.tipo) {
          case "acreditacion_propiedad":
            this.docs[0].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "carta_solicitud":
            this.docs[1].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "levantamiento_terreno":
            this.docs[2].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "carta_respaldo":
            this.docs[3].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "acta_asamblea":
            this.docs[4].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "identificacion":
            this.docs[5].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "imagenTerreno1":
            this.docs[6].viewDoc = dato.active;

            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "imagenTerreno2":
            this.docs[7].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
          case "imagenTerreno3":
            this.docs[8].viewDoc = dato.active;
            setTimeout(() => {
              this.data = JSON.parse(sessionStorage.data);
            }, 1000);

            break;
        }
      }, 500);
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

    convocatoria(convocatoria) {
      ubbj_api
        .post("listar/convocatorias", { id_tipoconv: 7 })
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

    getResultados() {
      if (localStorage.getItem("sedes")) {
        let data = JSON.parse(localStorage.getItem("sedes"));
        this.resultados = data.resultados;
      } else {
        this.convocatoria_sede();
      }
    },

    convocatoria_sede() {
      ubbj_api
        .post("listar/convocatorias", { id_tipoconv: 7 })
        .then((respuesta) => {
          var iteracionesSedes = respuesta.data.Convocatorias.length;
          str =
            "" + respuesta.data.Convocatorias[iteracionesSedes - 1].inicio + "";
          resultados =
            "" +
            respuesta.data.Convocatorias[iteracionesSedes - 1]
              .fecha_publicacion_resultados +
            "";

          //anio
          let anio = yearConvert(str);
          //resultados
          let resultado = dateConvert(resultados);

          this.resultados = resultado + " " + anio;
        });
    },

    obtener_estados_manual() {
      this.Estados = [];
      this.Municipio = [];
      this.Localidad = [];

      this.id_municipio = 0;
      this.id_estado = 0;
      this.id_localidad = 0;

      ubbj_api
        .post("estados")
        .then((response) => {
          this.id_estado = 0;
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

    obtener_municipio() {
      this.id_municipio = 0;
      this.id_localidad = 0;
      this.inputs[15].class_input = "form-control";
      this.inputs[16].class_input = "form-control";

      this.Municipio = [];
      if (this.data.id_estado != 0) {
        ubbj_api
          .post("municipios", {
            id_estado: this.id_estado,
          })
          .then((response) => {
            const cantidad2 = response.data.Municipios.length;
            for (var i = 1; i < cantidad2; i++) {
              this.Municipio.push({
                id_municipio: response.data.Municipios[i].id_municipio,
                municipio: response.data.Municipios[i].municipio,
              });
            }
          })
          .catch((e) => {});
      } else {
        this.Municipio = [];
        this.Localidad = [];
        this.id_municipio = 0;
        this.id_localidad = 0;
      }
    },

    obtener_localidad() {
      this.inputs[16].class_input = "form-control";
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
          .catch((e) => {});
      } else {
        this.Localidad = [];
        this.id_localidad = 0;
      }
    },

    cerrar_sesion() {
      toastr.remove();
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },

    redirigir(ruta) {
      if (ruta != "/") {
        this.$router.push({ path: ruta });
      } else {
        sessionStorage.clear();
        location.href = "/";
      }
    },

    keyNum(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },

    keyGeo(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9.-]+$/.test(char)) return true;
      else e.preventDefault();
    },

    keyEstandar(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ/#0,. ]+$/.test(char)) return true;
      else e.preventDefault();
    },

    recovery() {
      if (this.data.servicios != "") {
        let cadena = this.data.servicios;
        let Ninguna = cadena.indexOf("ninguna");
        let Transporte = cadena.indexOf("transporte");
        let Agua = cadena.indexOf("agua");
        let Electricidad = cadena.indexOf("electricidad");
        let Drenaje = cadena.indexOf("drenaje");
        let Accesibilidad = cadena.indexOf("accesibilidad");

        if (Ninguna != -1) {
          this.checkbox[0].value = true;
        }
        if (Transporte != -1) {
          this.checkbox[1].value = true;
        }
        if (Agua != -1) {
          this.checkbox[2].value = true;
        }
        if (Electricidad != -1) {
          this.checkbox[3].value = true;
        }
        if (Drenaje != -1) {
          this.checkbox[4].value = true;
        }
        if (Accesibilidad != -1) {
          this.checkbox[5].value = true;
        }
      }
    },

    stteper() {
      this.viewSteper = this.data.id_status;
      console.log(this.viewSteper);
    },

    activate_sttepers(stteper) {
      if (stteper <= this.data.id_status) {
        this.viewSteper = stteper;
      }
    },

    //servicios
    servicios_sede(opcion) {
      this.data.servicios = "";
      if (opcion == "ninguno") {
        this.data.servicios = "ninguna";
        this.checkbox[0].value = "true";
        this.checkbox[1].value = "";
        this.checkbox[1].texto = "-";
        this.checkbox[2].value = "";
        this.checkbox[2].texto = "-";
        this.checkbox[3].value = "";
        this.checkbox[3].texto = "-";
        this.checkbox[4].value = "";
        this.checkbox[4].texto = "-";
        this.checkbox[5].value = "";
        this.checkbox[5].texto = "-";
      }
      if (opcion == "transporte") {
        if (this.checkbox[1].value) {
          this.checkbox[1].value = "";
          this.checkbox[1].texto = "-";
        } else {
          this.checkbox[1].texto = "- transporte -";
          this.data.servicios =
            this.checkbox[1].texto +
            this.checkbox[2].texto +
            this.checkbox[3].texto +
            this.checkbox[4].texto +
            this.checkbox[5].texto;
          this.checkbox[0].value = "";
          this.checkbox[1].value = "true";
        }
      }
      if (opcion == "agua") {
        if (this.checkbox[2].value) {
          this.checkbox[2].value = "";
          this.checkbox[2].texto = "-";
        } else {
          this.checkbox[2].texto = "- agua -";
          this.data.servicios =
            this.checkbox[1].texto +
            this.checkbox[2].texto +
            this.checkbox[3].texto +
            this.checkbox[4].texto +
            this.checkbox[5].texto;
          this.checkbox[0].value = "";
          this.checkbox[2].value = "true";
        }
      }
      if (opcion == "electricidad") {
        if (this.checkbox[3].value) {
          this.checkbox[3].value = "";
          this.checkbox[3].texto = "-";
        } else {
          this.checkbox[3].texto = "- electricidad -";
          this.data.servicios =
            this.checkbox[1].texto +
            this.checkbox[2].texto +
            this.checkbox[3].texto +
            this.checkbox[4].texto +
            this.checkbox[5].texto;
          this.checkbox[0].value = "";
          this.checkbox[3].value = "true";
        }
      }
      if (opcion == "drenaje") {
        if (this.checkbox[4].value) {
          this.checkbox[4].value = "";
          this.checkbox[4].texto = "-";
        } else {
          this.checkbox[4].texto = "- drenaje -";
          this.data.servicios =
            this.checkbox[1].texto +
            this.checkbox[2].texto +
            this.checkbox[3].texto +
            this.checkbox[4].texto +
            this.checkbox[5].texto;
          this.checkbox[0].value = "";
          this.checkbox[4].value = "true";
        }
      }
      if (opcion == "accesibilidad") {
        if (this.checkbox[5].value) {
          this.checkbox[5].value = "";
          this.checkbox[5].texto = "-";
        } else {
          this.checkbox[5].texto = "- accesibilidad -";
          this.data.servicios =
            this.checkbox[1].texto +
            this.checkbox[2].texto +
            this.checkbox[3].texto +
            this.checkbox[4].texto +
            this.checkbox[5].texto;
          this.checkbox[0].value = "";
          this.checkbox[5].value = "true";
        }
      }

      if (
        this.checkbox[0].value != "true" &&
        this.checkbox[1].value != "true" &&
        this.checkbox[2].value != "true" &&
        this.checkbox[3].value != "true" &&
        this.checkbox[4].value != "true" &&
        this.checkbox[5].value != "true" &&
        this.checkbox[0].value != true &&
        this.checkbox[1].value != true &&
        this.checkbox[2].value != true &&
        this.checkbox[3].value != true &&
        this.checkbox[4].value != true &&
        this.checkbox[5].value != true
      ) {
        $("#servicios-list").show();
        this.inputs[17].text_error = "error";
      } else {
        $("#servicios-list").hide();
        this.inputs[17].text_error = "";
      }
    },

    alert_toastr(tipo, data, title, time) {
      toastr.remove();
      if (tipo == "warning") {
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        toastr.warning(data, title, { timeOut: time });
      } else {
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        toastr.success(data, title, { timeOut: time });
      }
    },

    send_datos_contacto: function (e) {
      e.preventDefault();
      ubbj_api
        .post("registro/sedes/1", {
          id_usuario: this.data.id_usuario,
          representacion: this.data.representacion,
        })
        .then((response) => {
          this.alert_toastr(
            "success",
            "Se han guardado los datos con representación: " +
              this.data.representacion,
            "Datos personales",
            8000
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
        .catch((e) => {});
    },

    send_datos_terreno: function (e) {
      e.preventDefault();

      let colonia_pack = "";

      if (!this.search2) {
        colonia_pack =
          this.data.colonia +
          ", " +
          $('select[name="localidad"] option:selected').text().trim() +
          ", " +
          this.municipio +
          ", " +
          this.estado +
          ", C.P.: " +
          this.codigo_cp;
      } else {
        colonia_pack =
          this.data.colonia +
          ", " +
          $('select[name="localidadManual"] option:selected').text().trim() +
          ", " +
          $('select[name="municipioManual"] option:selected').text().trim() +
          ", " +
          $('select[name="estadoManual"] option:selected').text().trim() +
          ", C.P.: " +
          this.codigo_cp;
      }

      const payload = {
        id_usuario: this.data.id_usuario,
        id_localidad: this.data.id_localidad,
        colonia: colonia_pack,
        superficie_terreno: this.data.superficie_terreno,
        latitud: this.data.latitud,
        longitud: this.data.longitud,
        medida_noreste: this.data.medidas_noreste,
        medida_sureste: this.data.medidas_sureste,
        medida_suroeste: this.data.medida_suroeste,
        medida_noroeste: this.data.medida_noroeste,
        espacio_libre: this.data.espacio_libre,
        servicios: this.data.servicios,
        usoPrevio_terreno: this.data.usoPrevio_terreno,
        levantamiento_topografico: this.data.levantamiento_topografico,
      };



      ubbj_api
        .post("registro/sedes/2", payload)
        .then((respuesta) => {
          this.alert_toastr(
            "success",
            "Datos enviados correctamente",
            "Datos del terreno de donación",
            8000
          );
          this.data.colonia = colonia_pack;
          this.data.id_status = 5;
          sessionStorage.data = JSON.stringify(this.data);
          this.pasos[2].style_paso = "cursor:pointer;";
          this.pasos[2].class_pasos = "completed";
          this.pasos[2].stepper = "#paso3";
          setTimeout(() => {
            document.getElementById("btn_paso3").click();
            window.scroll(0, 830);
          }, 100);
        })
        .catch((e) => {
          this.alert_toastr(
            "warning",
            "Ocurrió un problema, por el momento no es posible guardar su información",
            "Advertencia",
            8000
          );
        });
    },

    validacion_inputs(input) {
      switch (input) {
        case "calleyNumero":
          this.data.colonia == ""
            ? (this.inputs[4].text_error = "Campo requerido")
            : (this.inputs[4].text_error = "");

          break;

        case "superficie":
          
          break;
        case "georeferencia_latitud":
          break;
        case "georeferencia_longitud":
          break;
      }
    },

    consulta_cp() {
      ubbj_api
        .post("cp", {
          cp: this.codigo_cp,
        })
        .then((response) => {
          if (this.codigo_cp.length < 5) {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error =
              "El formato del codigo postal es inválido";
            this.inputs[1].class_input = "form-control";
            this.inputs[2].class_input = "form-control";
            this.inputs[3].class_input = "form-control";
            this.inputs[14].class_input = "form-control";
            this.inputs[15].class_input = "form-control";
            this.inputs[16].class_input = "form-control";
            this.Estados = [];
            this.Municipio = [];
            this.Localidad = [];
            $("#localidad_domicilio").attr("disabled", true);
          } else {
            if (
              response.data.message ==
              "No se encontró ningun resultado para el Código postal proporcionado."
            ) {
              this.inputs[1].class_input = "form-control is-valid";
              this.inputs[2].class_input = "form-control is-valid";
              this.inputs[3].class_input = "form-control is-valid";

              this.inputs[14].class_input = "form-control";
              this.inputs[15].class_input = "form-control";
              this.inputs[16].class_input = "form-control";
              this.search2 = true;
              this.search = true;
              this.obtener_estados_manual();
              this.data.estado = "";
              this.data.municipio = "";
              this.inputs[0].class_input = "form-control is-invalid";
              this.inputs[0].text_error = response.data.message;
              this.localidad_disable = true;
            } else {
              this.data.id_localidad = 0;
              this.search = true;
              this.cp_disable = true;
              const cantidad = response.data.Localidades.length;

              for (var i = 0; i < cantidad; i++) {
                this.Localidad.push({
                  id: response.data.Localidades[i].id_localidad,
                  localidad: response.data.Localidades[i].localidad,
                });
              }
              if (response.data.message != undefined) {
                this.inputs[0].class_input = "form-control is-invalid";
                this.inputs[0].text_error =
                  "No se encontro ningun resultado con el cp proporcionado";
              }
              sessionStorage.estado = response.data.Localidades[0].estado;
              sessionStorage.municipio = response.data.Localidades[0].municipio;
              this.estado = response.data.Localidades[0].estado;
              this.municipio = response.data.Localidades[0].municipio;
              this.inputs[0].class_input = "form-control is-valid";
              this.inputs[1].class_input = "form-control is-valid";
              this.inputs[2].class_input = "form-control is-valid";
              this.localidad_disable = false;
              this.inputs[0].text_error = "";
            }
          }
        });
    },

    obtener_cp(opcion) {
      if (this.codigo_cp.length == 0) {
        this.inputs[0].class_input = "form-control is-invalid";
        this.inputs[0].text_error =
          "No se encontró ningun resultado para el Código postal proporcionado.";
        this.search = true;
        this.search2 = true;
        this.obtener_estados_manual();

        this.codigo_cp = "";
        this.inputs[1].class_input = "form-control ";
        this.inputs[2].class_input = "form-control ";
        this.inputs[14].class_input = "form-control";
        this.inputs[15].class_input = "form-control";
        this.inputs[16].class_input = "form-control";

        if (this.search2) {
          this.inputs[1].class_input = "form-control is-valid";
          this.inputs[2].class_input = "form-control is-valid";
          this.inputs[3].class_input = "form-control is-valid";
        }
      } else {
        if (!this.search2) {
          this.inputs[14].class_input = "form-control is-valid";
          this.inputs[15].class_input = "form-control is-valid";
          this.inputs[16].class_input = "form-control is-valid";
        }
        this.search2 = false;
      }

      if (opcion == "manual") {
        this.search = false;

        this.obtener_estados_manual();
        this.inputs[0].class_input = "form-control";
        this.inputs[0].text_error = "";
        this.codigo_cp = "";
        this.inputs[1].class_input = "form-control ";
        this.inputs[2].class_input = "form-control ";
        this.inputs[14].class_input = "form-control";
        this.inputs[15].class_input = "form-control";
        this.inputs[16].class_input = "form-control";

        if (this.search2) {
          this.inputs[1].class_input = "form-control is-valid";
          this.inputs[2].class_input = "form-control is-valid";
          this.inputs[3].class_input = "form-control is-valid";
        }
      } else {
        if (!this.search2) {
          this.inputs[14].class_input = "form-control is-valid";
          this.inputs[15].class_input = "form-control is-valid";
          this.inputs[16].class_input = "form-control is-valid";
        }
      }

      if (this.codigo_cp.length == 5) {
        this.consulta_cp();
      }
    },

    enviar_solicitud: function (e) {
      toastr.remove();
      e.preventDefault();
      ubbj_api
        .post("registro/sedes/3", { id_usuario: this.data.id_usuario })
        .then((respuesta) => {
          (toastr.options.showDuration = "300"),
            (toastr.options.hideDuration = "1000"),
            (toastr.options.timeOut = 0),
            (toastr.options.positionClass = "toast-top-full-width"),
            toastr.success(
              '<p style="text-align: justify;text-justify: inter-word">Usted ha concluido su solicitud de registro para la instalación de nueva sede educativa de Universidades para el Bienestar Benito Juárez García con el folio ' +
                this.data.folio +
                ". Sus datos han sido enviados a la Comisión Interna para su evaluación. Los resultados de la Convocatoria serán dados a conocer el " +
                this.resultados +
                '. Muchas gracias por participar.</p> <button style="float:right;color:black" type="button" class="btn clear">Aceptar</button> ',
              "<h5>Registro completado</h5>"
            );
          this.data.id_status = 6;
          sessionStorage.data = JSON.stringify(this.data);
          this.pasos[3].class_pasos = "success";
        })
        .catch((e) => {
          this.alert_toastr(
            "warning",
            "Ocurrió un problema, por el momento no es posible guardar su información",
            "Advertencia",
            8000
          );
        });
    },
  },
};
</script>

<template>
  <div class="row mt-5" style="margin: 0px; padding: 0px">
    <div class="col-md-11 offset-md-1 text-left">
      <div class="opciones mb-3">
        <a @click="redirigir('/')"><i class="fas fa-home"></i> Inicio</a>
        <i class="ml-1 fas fa-chevron-right"></i>
        <a @click="redirigir('/')" class="ml-1"
          ><i class="ml-1 fas fa-calendar-alt"></i> Registro de convocatoria</a
        >
        <i class="ml-1 fas fa-chevron-right"></i>
        <a class="ml-1"
          ><i class="fas fa-address-card"></i> Registrar información general</a
        >
      </div>
      <div style="width: 91%" class="leyendaprincipal">
        <h1 class="txt-md-x1">Registro de solicitud para donador de sede</h1>
        <hr class="red" />
        <div class="alert alert-info">
          <strong>
            Completa los siguientes formularios para la creación de la solicitud
            de candidato a donador de sede</strong
          >
        </div>
      </div>
      <div style="width: 91%">
        <h3 class="titulos_estudiantes txt-md-x">Folio: {{ data.folio }}</h3>
      </div>
    </div>

    <div class="col-md-11 offset-md-1 mt-5">
      <ul style="width: 92%" class="wizard-steps text-left">
        <li
          id="btn_paso1"
          class="hand completed"
          data-toggle="collapse"
          data-target="pasos1"
          @click="activate_sttepers(1)"
        >
          <h5>Paso 1</h5>
          <span>Datos de contacto</span>
        </li>
        <li
          id="btn_paso2"
          :class="{ 'hand completed': data.id_status >= 4 }"
          data-toggle="collapse"
          data-target="pasos2"
          @click="activate_sttepers(4)"
        >
          <h5>Paso 2</h5>
          <span>Datos terreno en donación</span>
        </li>
        <li
          id="btn_paso3"
          :class="{ 'hand completed': data.id_status >= 5 }"
          data-toggle="collapse"
          data-target="pasos3"
          @click="activate_sttepers(5)"
        >
          <h5>Paso 3</h5>
          <span>Documentos del terreno</span>
        </li>
        <li aria-expanded="false" :class="{ success: data.id_status == 6 }">
          <h5>Completado</h5>
          <span>&nbsp</span>
        </li>
      </ul>
    </div>

    <div class="col-md-11 offset-md-1">
      <!-- CONTENEDORES -->
      <div id="accordion" style="width: 91%">
        <div class="card">
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div
                v-if="viewSteper == 1 || viewSteper == null"
                id="paso1"
                class="collapse"
                :class="{ show: viewSteper == 1 || viewSteper == null }"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body text-left">
                  <form @submit="send_datos_contacto" role="form">
                    <div class="form-group">
                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-12">
                          <h4><strong>Datos de contacto</strong></h4>
                        </div>
                        <div class="col-md-12 espacio"></div>
                        <div class="col-md-4">
                          <label class="control-label espacio" for="curp"
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
                          <label class="control-label espacio" for="nombre"
                            >Nombre completo:</label
                          >
                          <input
                            disabled
                            class="form-control"
                            id="nombre"
                            type="text"
                            v-model="data.nombre"
                          />
                        </div>
                        <div class="col-md-4">
                          <label class="control-label espacio" for="telefono"
                            >Teléfono celular:</label
                          >
                          <input
                            disabled
                            class="form-control"
                            id="telefono"
                            type="text"
                            v-model="data.telefono"
                          />
                        </div>
                      </div>

                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-4">
                          <label class="control-label espacio" for="email"
                            >Correo electrónico:</label
                          >
                          <input
                            disabled
                            class="form-control"
                            id="email"
                            type="text"
                            v-model="data.email"
                          />
                        </div>
                        <div class="col-md-4">
                          <label
                            class="control-label espacio"
                            for="representacion"
                            >Representación
                            <span class="black"> *</span> :</label
                          >
                          <input
                            disabled
                            v-show="
                              data.representacion == 1 && data.id_status != null
                            "
                            class="form-control"
                            type="text"
                            value="Comisariado Ejidal"
                          />
                          <input
                            disabled
                            v-show="
                              data.representacion == 2 && data.id_status != null
                            "
                            class="form-control"
                            type="text"
                            value="Comisariado Bienes"
                          />
                          <input
                            disabled
                            v-show="
                              data.representacion == 3 && data.id_status != null
                            "
                            class="form-control"
                            type="text"
                            value="Autoridad Municipal"
                          />
                          <input
                            disabled
                            v-show="
                              data.representacion == 4 && data.id_status != null
                            "
                            class="form-control"
                            type="text"
                            value="Particular"
                          />

                          <select
                            :hidden="data.id_status != null"
                            class="form-control"
                            :disabled="data.id_status != null"
                            v-model="data.representacion"
                            id="representacion"
                          >
                            <option disabled selected value="">
                              Seleccione una opción
                            </option>
                            <option
                              v-for="item of representaciones"
                              :value="item.value"
                            >
                              {{ item.name }}
                            </option>
                          </select>
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
                      <button
                        :disabled="data.representacion == ''"
                        :hidden="data.id_status != null"
                        style="float: right"
                        type="submit"
                        class="btn btn-primary pull-right"
                      >
                        &nbsp&nbsp&nbsp Guardar y continuar &nbsp&nbsp&nbsp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </transition>
          </div>

          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div
                v-if="viewSteper == 4"
                id="paso2"
                class="collapse"
                :class="{ show: viewSteper == 4 }"
                aria-labelledby="headingOne"
                data-parent="#accordion"
              >
                <div class="card-body text-left">
                  <form @submit="send_datos_terreno" role="form">
                    <div class="form-group">
                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-12">
                          <h4>
                            <strong>Datos del terreno de donación</strong>
                          </h4>
                        </div>
                        <div class="col-md-12 espacio"></div>
                        <div v-show="data.id_status > 4" class="col-md-8">
                          <label class="control-label espacio" for="cp"
                            >Direccion * :</label
                          >
                          <div class="input-group">
                            <input
                              disabled
                              class="form-control"
                              v-model="data.colonia"
                            />
                          </div>
                        </div>
                        <div :hidden="data.id_status > 4" class="col-md-4">
                          <label class="control-label" for="cp"
                            >Código postal
                            <span
                              :class="[
                                inputs[0].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >
                          <div class="input-group">
                            <input
                              :disabled="search == true"
                              :maxlength="max_estandar"
                              :class="{
                                'form-control': inputs[0].text_error == '',
                                'form-control is-invalid':
                                  inputs[0].text_error != '',
                              }"
                              id="cp"
                              placeholder="Ingresa el código postal"
                              v-model="codigo_cp"
                              @keyup="validacion_inputs('cp')"
                              v-on:keypress="keyNum($event)"
                            />
                            <div class="input-group-append">
                              <span
                                v-show="!search"
                                style="cursor: pointer"
                                class="input-group-text"
                                @click="obtener_cp('auto')"
                              >
                                <i class="fa fa-search" aria-hidden="true"></i
                              ></span>

                              <span
                                v-show="search"
                                style="cursor: pointer"
                                class="input-group-text"
                                @click="obtener_cp('manual')"
                              >
                                <i class="fa fa-undo-alt" aria-hidden="true"></i
                              ></span>
                            </div>
                            <div class="invalid-feedback">
                              {{ inputs[0].text_error }}
                            </div>
                          </div>
                        </div>

                        <div :hidden="data.id_status > 4" class="col-md-4">
                          <label class="control-label" for="cp"
                            >Estado
                            <span
                              :class="[
                                inputs[1].text_error != '' ? 'red' : 'black',
                              ]"
                            >
                              *</span
                            >
                            :</label
                          >

                          <input
                            v-if="!search2"
                            disabled
                            :class="{
                              'form-control': inputs[1].text_error == '',
                              'form-control is-invalid':
                                inputs[1].text_error != '',
                            }"
                            id="estado"
                            type="text"
                            v-model="estado"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[1].text_error }}
                          </div>

                          <select
                            v-if="search2"
                            :class="{
                              'form-control': inputs[14].text_error == '',
                              'form-control is-invalid':
                                inputs[14].text_error != '',
                            }"
                            v-model="id_estado"
                            id="estadoManual"
                            name="estadoManual"
                            @change="
                              obtener_municipio();
                              validacion_inputs('estadoManual');
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
                            {{ inputs[14].text_error }}
                          </div>
                        </div>
                        <div :hidden="data.id_status > 4" class="col-md-4">
                          <label class="control-label" for="cp"
                            >Municipio
                            <span
                              :class="[
                                inputs[2].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >

                          <input
                            v-if="!search2"
                            disabled
                            :class="{
                              'form-control': inputs[2].text_error == '',
                              'form-control is-invalid':
                                inputs[2].text_error != '',
                            }"
                            id="municipio"
                            type="text"
                            v-model="municipio"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[2].text_error }}
                          </div>

                          <select
                            v-if="search2"
                            :class="{
                              'form-control': inputs[15].text_error == '',
                              'form-control is-invalid':
                                inputs[15].text_error != '',
                            }"
                            v-model="id_municipio"
                            id="municipioManual"
                            name="municipioManual"
                            @change="
                              obtener_localidad();
                              validacion_inputs('municipioManual');
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
                            {{ inputs[15].text_error }}
                          </div>
                        </div>

                        <div :hidden="data.id_status > 4" class="col-md-4">
                          <label class="control-label espacio" for="cp"
                            >Localidad
                            <span
                              :class="[
                                inputs[3].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >

                          <select
                            v-if="!search2"
                            :disabled="localidad_disable == true"
                            :class="{
                              'form-control': inputs[3].text_error == '',
                              'form-control is-invalid':
                                inputs[3].text_error != '',
                            }"
                            id="localidad"
                            name="localidad"
                            @change="validacion_inputs('localidad')"
                            v-model="data.id_localidad"
                          >
                            <option value="0">Seleccione una opción</option>
                            <option
                              v-for="(item, index) of Localidad"
                              :value="item.id"
                            >
                              {{ item.localidad }}
                            </option>
                          </select>
                          <div class="invalid-feedback">
                            {{ inputs[3].text_error }}
                          </div>

                          <select
                            v-if="search2"
                            :class="{
                              'form-control': inputs[16].text_error == '',
                              'form-control is-invalid':
                                inputs[16].text_error != '',
                            }"
                            v-model="id_localidad"
                            id="localidadManual"
                            name="localidadManual"
                            @change="validacion_inputs('localidadManual')"
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
                            {{ inputs[16].text_error }}
                          </div>
                        </div>

                        <div :hidden="data.id_status > 4" class="col-md-4">
                          <label class="control-label espacio" for="cp"
                            >Calle y número
                            <span
                              :class="[
                                inputs[4].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >
                          <input
                            :class="{
                              'form-control': inputs[4].text_error == '',
                              'form-control is-invalid':
                                inputs[4].text_error != '',
                            }"
                            id="calle_numero"
                            type="text"
                            :maxlength="max_calle"
                            :disabled="data.id_status > 4"
                            placeholder="Ingresa la calle y número"
                            v-model="data.colonia"
                            v-on:keypress="keyEstandar($event)"
                            @keyup="validacion_inputs('calleyNumero')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[4].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label espacio" for="cp"
                            >Superficie del terreno<span
                              :class="[
                                inputs[5].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >

                          <input
                            :class="{
                              'form-control': inputs[5].text_error == '',
                              'form-control is-invalid':
                                inputs[5].text_error != '',
                            }"
                            id="superficie"
                            type="text"
                            :maxlength="max_georreferencia"
                            :disabled="data.id_status > 4"
                            placeholder="Ingresa la superficie del terreno"
                            v-model="data.superficie_terreno"
                            v-on:keypress="keyNum($event)"
                            @keyup="validacion_inputs('superficie')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[5].text_error }}
                          </div>
                        </div>

                        <div class="col-md-4">
                          <label class="control-label espacio" for="cp"
                            >Georreferencias<span
                              :class="[
                                inputs[6].text_error != '' ? 'red' : 'black',
                              ]"
                            >
                              *</span
                            >
                            :</label
                          >

                          <input
                            :class="{
                              'form-control': inputs[6].text_error == '',
                              'form-control is-invalid':
                                inputs[6].text_error != '',
                            }"
                            type="text"
                            placeholder="Ingresa la latitud"
                            :disabled="data.id_status > 4"
                            :maxlength="max_georreferencia"
                            v-model="data.latitud"
                            v-on:keypress="keyGeo($event)"
                            @keyup="validacion_inputs('georeferencia_latitud')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[6].text_error }}
                          </div>
                          <br />
                          <input
                            :class="{
                              'form-control': inputs[7].text_error == '',
                              'form-control is-invalid':
                                inputs[7].text_error != '',
                            }"
                            type="text"
                            placeholder="Ingresa la longitud"
                            :disabled="data.id_status > 4"
                            :maxlength="max_georreferencia"
                            v-model="data.longitud"
                            v-on:keypress="keyGeo($event)"
                            @keyup="validacion_inputs('georeferencia_longitud')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[7].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label espacio" for="cp"
                            >Medidas y colindancia<span
                              :class="[
                                inputs[8].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >
                          <input
                            :class="{
                              'form-control': inputs[8].text_error == '',
                              'form-control is-invalid':
                                inputs[8].text_error != '',
                            }"
                            type="text"
                            placeholder="Ingresa la medida noreste"
                            :disabled="data.id_status > 4"
                            :maxlength="max_estandar_medidas"
                            v-model="data.medidas_noreste"
                            v-on:keypress="keyGeo($event)"
                            @keyup="validacion_inputs('medidas_noroste')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[8].text_error }}
                          </div>
                          <br />
                          <input
                            :class="{
                              'form-control': inputs[9].text_error == '',
                              'form-control is-invalid':
                                inputs[9].text_error != '',
                            }"
                            type="text"
                            placeholder="Ingresa la medida sureste"
                            :disabled="data.id_status > 4"
                            :maxlength="max_estandar_medidas"
                            v-model="data.medidas_sureste"
                            v-on:keypress="keyGeo($event)"
                            @keyup="validacion_inputs('medidas_sureste')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[9].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label espacio">&nbsp</label>
                          <input
                            :class="{
                              'form-control': inputs[10].text_error == '',
                              'form-control is-invalid':
                                inputs[10].text_error != '',
                            }"
                            type="text"
                            placeholder="Ingresa la medida suroeste"
                            :disabled="data.id_status > 4"
                            :maxlength="max_estandar_medidas"
                            v-model="data.medida_suroeste"
                            v-on:keypress="keyGeo($event)"
                            @keyup="validacion_inputs('medida_suroeste')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[10].text_error }}
                          </div>
                          <br />
                          <input
                            :class="{
                              'form-control': inputs[11].text_error == '',
                              'form-control is-invalid':
                                inputs[11].text_error != '',
                            }"
                            type="text"
                            placeholder="Ingresa la medida noroeste"
                            :disabled="data.id_status > 4"
                            :maxlength="max_estandar_medidas"
                            v-model="data.medida_noroeste"
                            v-on:keypress="keyGeo($event)"
                            @keyup="validacion_inputs('medida_noroeste')"
                          />
                          <div class="invalid-feedback">
                            {{ inputs[11].text_error }}
                          </div>
                          <br />
                        </div>

                        <div class="col-md-4">
                          <label class="control-label espacio" for="cp"
                            >Características del terreno<span
                              :class="[
                                inputs[12].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >
                          <textarea
                            :disabled="data.id_status > 4"
                            :maxlength="max_caracteristicas"
                            :class="{
                              'form-control': inputs[12].text_error == '',
                              'form-control is-invalid':
                                inputs[12].text_error != '',
                            }"
                            rows="3"
                            placeholder="Ingrese las características del terreno"
                            v-on:keypress="keyEstandar($event)"
                            v-model="data.espacio_libre"
                            @keyup="validacion_inputs('caracteristicas')"
                          ></textarea>

                          <div class="row">
                            <div class="col-md-6">
                              <div class="invalid-feedback">
                                {{ inputs[12].text_error }}
                              </div>
                            </div>
                            <div class="col-md-3 offset-3">
                              <small v-if="data.espacio_libre">
                                {{ data.espacio_libre.length }} /
                                {{ max_caracteristicas }}</small
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <div>
                            <label class="control-label espacio"
                              >Servicios<span
                                :class="[
                                  inputs[17].text_error != '' ? 'red' : 'black',
                                ]"
                              >
                                *</span
                              >
                              :</label
                            >
                            <div
                              id="servicios-list"
                              class="required"
                              style="display: none"
                            >
                              Seleccione una opción
                            </div>
                          </div>
                          <div class="flex">
                            <div class="col-md-6">
                              <label>
                                <input
                                  :disabled="data.id_status > 4"
                                  type="checkbox"
                                  v-model="checkbox[0].value"
                                  :chekked="checkbox[0].value == true"
                                  @click="servicios_sede('ninguno')"
                                />
                                Ninguno
                              </label>
                              <br />
                              <label>
                                <input
                                  :disabled="data.id_status > 4"
                                  type="checkbox"
                                  v-model="checkbox[1].value"
                                  :chekked="checkbox[1].value == true"
                                  @click="servicios_sede('transporte')"
                                />
                                Transporte </label
                              ><br />
                              <label>
                                <input
                                  :disabled="data.id_status > 4"
                                  type="checkbox"
                                  v-model="checkbox[2].value"
                                  :chekked="checkbox[2].value == true"
                                  @click="servicios_sede('agua')"
                                />
                                Agua
                              </label>
                            </div>
                            <div class="col-md-6 checkbox">
                              <label>
                                <input
                                  :disabled="data.id_status > 4"
                                  type="checkbox"
                                  v-model="checkbox[3].value"
                                  :chekked="checkbox[3].value == true"
                                  @click="servicios_sede('electricidad')"
                                />
                                <strong>Electricidad</strong> </label
                              ><br />
                              <label>
                                <input
                                  :disabled="data.id_status > 4"
                                  type="checkbox"
                                  v-model="checkbox[4].value"
                                  :chekked="checkbox[4].value == true"
                                  @click="servicios_sede('drenaje')"
                                />
                                <strong>Drenaje</strong></label
                              ><br />
                              <label>
                                <input
                                  :disabled="data.id_status > 4"
                                  type="checkbox"
                                  v-model="checkbox[5].value"
                                  :chekked="checkbox[5].value == true"
                                  @click="servicios_sede('accesibilidad')"
                                />
                                <strong>Accesibilidad</strong></label
                              >
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label espacio"
                            >Uso previo del terreno<span
                              :class="[
                                inputs[13].text_error != '' ? 'red' : 'black',
                              ]"
                            >
                              *</span
                            >
                            :</label
                          >
                          <select
                            id="representacion"
                            :class="{
                              'form-control': inputs[13].text_error == '',
                              'form-control is-invalid':
                                inputs[13].text_error != '',
                            }"
                            :disabled="data.id_status > 4"
                            @click="validacion_inputs('representacion')"
                            v-model="data.usoPrevio_terreno"
                          >
                            <option selected value="">
                              Seleccione una opción
                            </option>
                            <option
                              v-for="item of uso_previo"
                              :value="item.value"
                            >
                              {{ item.value }}
                            </option>
                          </select>
                          <div class="invalid-feedback">
                            {{ inputs[13].text_error }}
                          </div>

                          <label class="control-label espacio"
                            >¿Cuenta con levantamiento topográfico?
                            <span
                              :class="[
                                inputs[17].text_error != '' ? 'red' : 'black',
                              ]"
                              >*</span
                            >
                            :</label
                          >

                          <div v-show="data.id_status > 4" class="radio">
                            <label>
                              <input
                                :disabled="data.id_status > 4"
                                type="radio"
                                value="Si"
                                :checked="
                                  data.levantamiento_topografico == 'Si'
                                "
                              />
                              Sí
                            </label>
                            <label>
                              <input
                                :disabled="data.id_status > 4"
                                type="radio"
                                value="No"
                                :checked="
                                  data.levantamiento_topografico == 'No'
                                "
                              />
                              No
                            </label>
                          </div>
                          <div :hidden="data.id_status > 4" class="radio">
                            <label>
                              <input
                                :disabled="data.id_status > 4"
                                type="radio"
                                name="levantamiento"
                                value="Si"
                                v-model="data.levantamiento_topografico"
                              />
                              Sí
                            </label>
                            <label>
                              <input
                                :disabled="data.id_status > 4"
                                type="radio"
                                name="levantamiento"
                                value="No"
                                v-model="data.levantamiento_topografico"
                              />
                              No
                            </label>
                          </div>
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
                      <button
                        :hidden="data.id_status > 4"
                        style="float: right"
                        type="submit"
                        class="btn btn-primary pull-right"
                      >
                        &nbsp&nbsp&nbsp Guardar y continuar &nbsp&nbsp&nbsp
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </transition>
          </div>

          <div class="card card_space">
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
                  <form role="form">
                    <br />
                    <h4 class="text-left mb-4">
                      <strong>Documentos del terreno</strong>
                    </h4>
                    <div class="espacio text-alert alert alert-info mb-4">
                      Adjunta un archivo .pdf para cada documento, para la
                      fotografía solo se aceptan archivos en formato .jpg,
                      .jpeg, .png o .bmp
                    </div>
                    <div class="row espacio">
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 mg-3 margen">
                          <div class="flex">
                            <h4><strong>Acreditación de propiedad</strong></h4>
                            <img
                              v-if="docs[0].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Acreditacion_Terreno"
                            collapse="collapseAcreditacion_Terreno"
                            tipo="acreditacion_Terreno"
                            gif="Acreditacion_TerrenoCharge"
                            embed="vistaPrevia_Acreditacion_Terreno"
                            title_doc_msg="Acreditación de propiedad"
                            target="#collapseAcreditacion_Terreno"
                            tipo_doc="11"
                            rs="16"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Carta de solicitud</strong></h4>
                            <img
                              v-if="docs[1].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Carta_Solicitud"
                            collapse="collapseCarta_Solicitud"
                            tipo="carta_Solicitud"
                            gif="Carta_SolicitudCharge"
                            embed="vistaPrevia_Carta_Solicitud"
                            title_doc_msg="Carta solicitud"
                            target="#collapseCarta_Solicitud"
                            tipo_doc="12"
                            rs="17"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Levantamiento topográfico</strong></h4>
                            <img
                              v-if="docs[2].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Levantamiento_Terreno"
                            collapse="collapseLevantamiento_Terreno"
                            tipo="levantamiento_Terreno"
                            gif="Levantamiento_TerrenoCharge"
                            embed="vistaPrevia_Levantamiento_Terreno"
                            title_doc_msg="Carta solicitud"
                            target="#collapseLevantamiento_Terreno"
                            tipo_doc="13"
                            rs="18"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Carta respaldo municipal</strong></h4>
                            <img
                              v-if="docs[3].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Carta_Respaldo"
                            collapse="collapseCarta_Respaldo"
                            tipo="carta_Respaldo"
                            gif="Carta_RespaldoCharge"
                            embed="vistaPrevia_Carta_Respaldo"
                            title_doc_msg="Carta solicitud"
                            target="#collapseCarta_Respaldo"
                            tipo_doc="14"
                            rs="19"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Acta asamblea</strong></h4>
                            <img
                              v-if="docs[4].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Acta_Asamblea"
                            collapse="collapseActa_Asamblea"
                            tipo="acta_Asamblea"
                            gif="Acta_AsambleaCharge"
                            embed="vistaPrevia_Acta_Asamblea"
                            title_doc_msg="Carta solicitud"
                            target="#collapseActa_Asamblea"
                            tipo_doc="15"
                            rs="20"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                  </form>
                  <form role="form">
                    <br />
                    <h2>Documentos del representante</h2>
                    <div class="row espacio">
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Identificación</strong></h4>
                            <img
                              v-if="docs[5].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Identificacion"
                            collapse="collapseIdentificacion"
                            tipo="identificacion"
                            gif="IdentificacionCharge"
                            embed="vistaPrevia_Identificacion"
                            title_doc_msg="Carta solicitud"
                            target="#collapseIdentificacion"
                            tipo_doc="16"
                            rs="20"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                    </div>
                  </form>
                  <form role="form" class="text-left">
                    <br />
                    <h2>Fotografías del terreno</h2>
                    <div class="row espacio">
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Foto 1</strong></h4>
                            <img
                              v-if="docs[6].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6">
                            <label class="control-label">Cargar imagen:</label>
                          </div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Imagen_Terreno1"
                            collapse="collapseImagen_Terreno1"
                            tipo="imagenTerreno1"
                            gif="Imagen_Terreno1Charge"
                            embed="vistaPrevia_Imagen_Terreno1"
                            title_doc_msg="Fotografía"
                            target="#collapseImagen_Terreno1"
                            tipo_doc="0"
                            rs="11"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Foto 2</strong></h4>

                            <img
                              v-if="docs[7].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6">
                            <label class="control-label">Cargar imagen:</label>
                          </div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Imagen_Terreno2"
                            collapse="collapseImagen_Terreno2"
                            tipo="imagenTerreno2"
                            gif="Imagen_Terreno2Charge"
                            embed="vistaPrevia_Imagen_Terreno2"
                            title_doc_msg="Fotografía"
                            target="#collapseImagen_Terreno2"
                            tipo_doc="0"
                            rs="12"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                        </div>
                      </div>
                      <div class="card col-md-11 ml-md-5 mg-md-3">
                        <div class="mt-3 ml-3 margen">
                          <div class="flex">
                            <h4><strong>Foto 3</strong></h4>
                            <img
                              v-if="docs[8].viewDoc"
                              class="icon_position_success"
                              src="@/assets/complete.png"
                              style="width: 2% !important;" 
                            />
                          </div>
                          <div class="col-md-6">
                            <label class="control-label">Cargar imagen:</label>
                          </div>
                          <DocumentsChargePreviewSedes
                            v-on:activeIcon="checks_activate"
                            id="Imagen_Terreno3"
                            collapse="collapseImagen_Terreno3"
                            tipo="imagenTerreno3"
                            gif="Imagen_Terreno3Charge"
                            embed="vistaPrevia_Imagen_Terreno3"
                            title_doc_msg="Fotografía"
                            target="#collapseImagen_Terreno3"
                            tipo_doc="0"
                            rs="13"
                            :id_usuario="data.id_usuario"
                            :id_status="data.id_status"
                          />
                          <br />
                        </div>
                      </div>
                      <div class="col-md-11 ml-5 card_space">
                        <div>
                          <form @submit="enviar_solicitud" role="form">
                            <button
                              :hidden="data.id_status == 6"
                              :disabled="
                                data.acreditacion_propiedad == '' ||
                                data.acta_asamblea == '' ||
                                data.carta_respaldo == '' ||
                                data.carta_solicitud == '' ||
                                data.levantamiento_terreno == '' ||
                                data.identificacion == '' ||
                                data.imagenTerreno1 == '' ||
                                data.imagenTerreno2 == '' ||
                                data.imagenTerreno3 == ''
                              "
                              style="float: right"
                              type="submit"
                              class="btn btn-primary pull-right"
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
        <div class="col-md-12 espacio card_space">
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
      <!--FIN CONTENEDORES-->
    </div>
  </div>
</template>

<style scoped>
.margen {
  margin: 10px;
}

.hand {
  cursor: pointer;
}
</style>
