<script>
import $ from "jquery";
import toastr from "toastr/toastr";
import ubbj_api from "@/services/api/ubbj";
import ModalAction from "@/components/shared/ModalAction.vue";
import DocumentChargePreview from "@/components/shared/DocumentsChargePreview.vue";

export default {
  created() {
    this.data_convocatoria = sessionStorage.idConvocatoria;

    if (sessionStorage.data == null) {
      window.scroll(0, 800);
      window.location.href = "/";
    }

    this.data = JSON.parse(sessionStorage.data);
    this.stteper();
    sessionStorage.id_usuario = this.data.id_usuario;
    this.nuevo_formacion_profesional.grado_academico = "Licenciatura";

    //paso 2
    this.get_cargos_academicos();
    //paso 3
    this.get_profesion();
    //paso 4
    this.get_experiencia();
    //Paso 5
    this.get_comunidad();
    //Paso 6
    this.get_academica();
    //Paso 7
    this.get_investigacion();

    if (this.data.id_status > 5) {
      if (this.data.area_seleccionada.length === 0) {
        this.areaDeConocimiento = "";
      } else {
        this.areaDeConocimiento =
          this.data.area_seleccionada[0].area_conocimiento;
      }
    }

    if (this.data.doc_expProfesional != "") {
      this.experiencia_profesional_radio = 1;
    }
  },
  components: {
    ModalAction,
    DocumentChargePreview,
  },
  data: function () {
    return {
      animate_conf: { enter: 550, leave: 50 },
      viewSteper: 0,
      data_convocatoria: null,
      data: [],
      max_date: 4,
      max_num_alter: 10,
      max_estandar: 50,
      max_cp: 5,
      max_nums: 10,
      max_referencia: 100,
      max_textarea: 250,
      max_cedula: 8,
      search: false,
      search2: false,
      id_localidad: "",
      id_municipio: "",

      Estados: [],
      Municipio: [],
      Localidad: [],

      opciones_formacion: [
        {
          value: undefined,
          text: "Selecciona una opción",
        },
      ],

      block: [
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
        { paso: false },
      ],

      nuevo_formacion_profesional: [
        {
          id_grado_academico: "",
          grado_academico: "",
          periodo_salida: "",
          carrera: "",
          institucion: "",
          titulado: Boolean,
          cedula_bool: Boolean,
          cedula: "",
        },
      ],
      add_formacion: false,
      tipo_accion_formacion_profesional: "Agregar",
      index_exp_pro: "",
      inputs_paso2: [
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],
      ejecutando: false,
      ejecutando1: false,
      ejecutando2: false,

      area_conocimiento: [],
      areaDeConocimiento: undefined,
      inputs_paso3: [{ class_input: "form-control", text_error: "" }],

      experiencia_laboral: [
        {
          id_experiencia: "",
          institucion: "",
          cargo: "",
          fecha_ingreso: "",
          fecha_salida: "",
          actividades_laborales: "",
          status_empleado: "",
        },
      ],
      tipo_accion_experiencia_laboral: "Agregar",
      index_experiencia_laboral: "",
      add_experiencia_laboral: false,

      inputs_paso4: [
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],
      reg_id_porf: "",

      nuevo_trabajo_comunidad: [
        {
          id_trabajo_comunidad: "",
          institucion: "",
          lugar: "",
          fecha: "",
          actividad: "",
        },
      ],
      tipo_accion_trabajo_comunidad: "Agregar",
      add_comunidad: false,
      index_trabajo_comunidad: "",
      inputs_paso5: [
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],
      reg_id_comunidad: "",

      nuevo_experiencia_academica: [
        {
          id_experiencia_academica: "",
          cursos: "",
          institucion: "",
          fecha_inicio: "",
          fecha_fin: "",
        },
      ],
      tipo_accion_experiencia_academica: "Agregar",
      add_academica: false,
      index_experiencia_academica: "",
      inputs_paso6: [
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],

      nuevo_trabajos_investigacion: [
        {
          id_investigacion_docente: "",
          nombre_proyecto: "",
          resultados: "",
          institucion: "",
          fecha_inicio: "",
          fecha_fin: "",
        },
      ],
      tipo_accion_trabajo_investigacion: "Agregar",
      add_investigacion: false,
      index_trabajo_investigacion: "",
      inputs_paso7: [
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],
      reg_id_Investigacion: "",

      arra_perfil: [],
      option_empleo_actual: "true",

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
        { class_input: "form-control", text_error: "" },
        { class_input: "form-control", text_error: "" },
      ],

      option_lengua_originaria: "false",
      experiencia_profesional_radio: 0,
      paso2: [
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
        { error: "black", textto: "" },
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
      ],
    };
  },

  methods: {
    cerrar_sesion() {
      toastr.remove();
      sessionStorage.clear();
      this.$router.push({ path: "/login" });
    },

    checks_activate(dato) {

      switch (dato.tipo) {
        case "doc_actaNacimiento":
          this.docs[0].viewDoc = dato.active;
          break;
        case "doc_curp":
          this.docs[1].viewDoc = dato.active;
          break;
        case "doc_rfc":
          this.docs[2].viewDoc = dato.active;
          break;
        case "doc_identificacion":
          this.docs[3].viewDoc = dato.active;
          break;
        case "doc_comprobanteDomicilio":
          this.docs[4].viewDoc = dato.active;
          break;
        case "doc_CartaMotivos":
          this.docs[5].viewDoc = dato.active;
          break;
        case "Fotografia":
          this.docs[6].viewDoc = dato.active;
          break;
        case "doc_expProfesional":
          this.docs[7].viewDoc = dato.active;
          break;
      }
    },

    validacion_input(input) {
      if (input == "tel_alt") {
        if (this.data.telfono_alt.length < 10) {
          this.inputs[0].class_input = "form-control is-invalid";
          this.inputs[0].text_error =
            "El número telefónico debe ser de 10 dígitos";
        } else if (this.data.telefono == this.data.telfono_alt) {
          this.inputs[0].class_input = "form-control is-invalid";
          this.inputs[0].text_error =
            "El teléfono de contacto alterno y principal no pueden ser iguales";
        } else {
          this.inputs[0].class_input = "form-control is-valid";
          this.inputs[0].text_error = "";
        }
      }
      if (input == "email_alt") {
        if (this.validarCorreo() == false || this.data.email_alt == "") {
          this.inputs[1].class_input = "form-control is-invalid";
          this.inputs[1].text_error = "El formato del correo es inválido";
        } else if (this.data.email === this.data.email_alt) {
          this.inputs[1].class_input = "form-control is-invalid";
          this.inputs[1].text_error =
            "El correo alterno y el principal no pueden ser iguales";
        } else {
          this.inputs[1].class_input = "form-control is-valid";
          this.inputs[1].text_error = "";
        }
      }
      if (input == "cp") {
        if (this.data.codigo_postal.length < 4) {
          this.inputs[2].class_input = "form-control is-invalid";
          this.inputs[2].text_error =
            "El formato del código postal es inválido";
          this.inputs[3].class_input = "form-control";
          this.inputs[4].class_input = "form-control";
          this.inputs[5].class_input = "form-control";
          this.Estados = [];
          this.Municipio = [];
          this.Localidad = [];
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
          this.inputs[5].text_error = "Debes seleccionar una localidad";
        } else {
          this.inputs[5].class_input = "form-control is-valid";
          this.inputs[5].text_error = "";
        }
      }
      if (input == "calle") {
        if (this.data.calle.length == 0) {
          this.inputs[6].class_input = "form-control is-invalid";
          this.inputs[6].text_error = "Debes escribir una Calle";
        } else {
          this.inputs[6].class_input = "form-control is-valid";
          this.inputs[6].text_error = "";
        }
      }
      if (input == "num_ext") {
        if (this.data.num_ext.length == 0) {
          this.inputs[7].class_input = "form-control is-invalid";
          this.inputs[7].text_error = "Debes escribir el número exterior";
        } else {
          this.inputs[7].class_input = "form-control is-valid";
          this.inputs[7].text_error = "";
        }
      }
      if (input == "referencias") {
        if (this.data.referencias.length == 0) {
          this.inputs[10].class_input = "form-control is-invalid";
          this.inputs[10].text_error = "Debes escribir una referencia";
        } else {
          this.inputs[10].class_input = "form-control is-valid";
          this.inputs[10].text_error = "";
        }
      }

      if (input == "edo_manual") {
        if (
          $("#estadoManual").val() == 0 ||
          $("#estadoManual").val() == undefined
        ) {
          this.inputs[3].class_input = "form-control is-invalid";
          this.inputs[3].text_error = "Debes seleccionar un estado";
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
          this.inputs[4].text_error = "Debes seleccionar un municipio";
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
          this.inputs[5].text_error = "Debes seleccionar una localidad";
        } else {
          this.inputs[5].class_input = "form-control is-valid";
          this.inputs[5].text_error = "";
        }
      }

      if (input == "paso2_grado") {
        if (
          this.nuevo_formacion_profesional.grado_academico == undefined ||
          this.nuevo_formacion_profesional.grado_academico == ""
        ) {
          this.inputs_paso2[0].text_error = "Ingresa el grado académico";
        } else {
          this.inputs_paso2[0].text_error = "";
        }
      }
      if (input == "paso2_fechafin") {
        if (
          this.nuevo_formacion_profesional.periodo_salida == undefined ||
          this.nuevo_formacion_profesional.periodo_salida == ""
        ) {
          this.inputs_paso2[2].text_error = "Selecciona la fecha de titulación";
        } else {
          this.inputs_paso2[2].text_error = "";
        }
      }
      if (input == "paso2_carrera") {
        if (
          this.nuevo_formacion_profesional.carrera == undefined ||
          this.nuevo_formacion_profesional.carrera == ""
        ) {
          this.inputs_paso2[3].text_error = "Ingresa la carrera";
        } else {
          this.inputs_paso2[3].text_error = "";
        }
      }
      if (input == "paso2_institucion") {
        if (
          this.nuevo_formacion_profesional.institucion == undefined ||
          this.nuevo_formacion_profesional.institucion == ""
        ) {
          this.inputs_paso2[4].class_input = "form-control is-invalid";
          this.inputs_paso2[4].text_error = "Ingresa la institución";
        } else {
          this.inputs_paso2[4].class_input = "form-control";
          this.inputs_paso2[4].text_error = "";
        }
      }
      if (input == "paso2_cedula") {
        if (
          this.nuevo_formacion_profesional.cedula == undefined ||
          this.nuevo_formacion_profesional.cedula == ""
        ) {
          this.inputs_paso2[5].class_input = "form-control is-invalid";
          this.inputs_paso2[5].text_error = "Ingresa la cédula profesional";
        } else if (
          this.nuevo_formacion_profesional.cedula != "" &&
          this.nuevo_formacion_profesional.cedula.length > 6
        ) {
          this.inputs_paso2[5].class_input = "form-control";
          this.inputs_paso2[5].text_error = "";
        } else {
          this.inputs_paso2[5].class_input = "form-control is-invalid";
          this.inputs_paso2[5].text_error = "Formato inválido";
        }
      }

      if (input == "areaDeInteres") {
        if (this.areaDeConocimiento == undefined) {
          this.inputs_paso3[0].class_input = "form-control is-invalid";
          this.inputs_paso3[0].text_error = "Selecciona una opción";
        } else {
          this.inputs_paso3[0].class_input = "form-control is-valid";
          this.inputs_paso3[0].text_error = "";
        }
      }

      if (input == "paso4_actividad") {
        if (
          this.experiencia_laboral.actividades_laborales == "" ||
          this.experiencia_laboral.actividades_laborales == undefined
        ) {
          this.inputs_paso4[0].class_input = "form-control is-invalid";
          this.inputs_paso4[0].text_error =
            "Ingresa las actividades desempeñadas";
        } else {
          this.inputs_paso4[0].class_input = "form-control is-valid";
          this.inputs_paso4[0].text_error = "";
        }
      }
      if (input == "paso4_cargo") {
        if (
          this.experiencia_laboral.cargo == "" ||
          this.experiencia_laboral.cargo == undefined
        ) {
          this.inputs_paso4[1].class_input = "form-control is-invalid";
          this.inputs_paso4[1].text_error = "Ingresa el cargo";
        } else {
          this.inputs_paso4[1].class_input = "form-control is-valid";
          this.inputs_paso4[1].text_error = "";
        }
      }
      if (input == "paso4_institucion") {
        if (
          this.experiencia_laboral.institucion == "" ||
          this.experiencia_laboral.institucion == undefined
        ) {
          this.inputs_paso4[2].class_input = "form-control is-invalid";
          this.inputs_paso4[2].text_error = "Ingresa la institución";
        } else {
          this.inputs_paso4[2].class_input = "form-control is-valid";
          this.inputs_paso4[2].text_error = "";
        }
      }
      if (input == "paso4_periodoIni") {
        if (
          this.experiencia_laboral.fecha_ingreso == undefined ||
          this.experiencia_laboral.fecha_ingreso == ""
        ) {
          this.inputs_paso4[3].class_input = "form-control is-invalid";
          this.inputs_paso4[3].text_error =
            "Ingresa el año inicial del periodo";
        } else {
          this.inputs_paso4[3].class_input = "form-control is-valid";
          this.inputs_paso4[3].text_error = "";
        }
      }
      if (input == "paso4_periodoFin") {
        if (
          this.experiencia_laboral.fecha_salida == undefined ||
          this.experiencia_laboral.fecha_salida == ""
        ) {
          this.inputs_paso4[4].class_input = "form-control is-invalid";
          this.inputs_paso4[4].text_error = "Ingresa el año final del periodo";
        } else {
          this.inputs_paso4[4].class_input = "form-control is-valid";
          this.inputs_paso4[4].text_error = "";
        }
      }

      if (input == "paso5_actividad") {
        if (
          this.nuevo_trabajo_comunidad.actividad == undefined ||
          this.nuevo_trabajo_comunidad.actividad == ""
        ) {
          this.inputs_paso5[0].class_input = "form-control is-invalid";
          this.inputs_paso5[0].text_error = "Ingresa las actividades";
        } else {
          this.inputs_paso5[0].class_input = "form-control";
          this.inputs_paso5[0].text_error = "";
        }
      }
      if (input == "paso5_lugar") {
        if (
          this.nuevo_trabajo_comunidad.lugar == undefined ||
          this.nuevo_trabajo_comunidad.lugar == ""
        ) {
          this.inputs_paso5[1].class_input = "form-control is-invalid";
          this.inputs_paso5[1].text_error = "Ingresa el lugar";
        } else {
          this.inputs_paso5[1].class_input = "form-control";
          this.inputs_paso5[1].text_error = "";
        }
      }
      if (input == "paso5_organizacion") {
        if (
          this.nuevo_trabajo_comunidad.institucion == undefined ||
          this.nuevo_trabajo_comunidad.institucion == ""
        ) {
          this.inputs_paso5[2].class_input = "form-control is-invalid";
          this.inputs_paso5[2].text_error =
            "Ingresa la organización / institución";
        } else {
          this.inputs_paso5[2].class_input = "form-control";
          this.inputs_paso5[2].text_error = "";
        }
      }
      if (input == "paso5_fecha") {
        if (this.nuevo_trabajo_comunidad.fecha == undefined) {
          this.inputs_paso5[3].class_input = "form-control is-invalid";
          this.inputs_paso5[3].text_error = "Ingresa la fecha";
        } else {
          this.inputs_paso5[3].class_input = "form-control";
          this.inputs_paso5[3].text_error = "";
        }
      }

      if (input == "paso6_cursos") {
        if (
          this.nuevo_experiencia_academica.cursos == undefined ||
          this.nuevo_experiencia_academica.cursos == ""
        ) {
          this.inputs_paso6[0].class_input = "form-control is-invalid";
          this.inputs_paso6[0].text_error = "Ingresa el curso";
        } else {
          this.inputs_paso6[0].class_input = "form-control";
          this.inputs_paso6[0].text_error = "";
        }
      }
      if (input == "paso6_institucion") {
        if (
          this.nuevo_experiencia_academica.institucion == undefined ||
          this.nuevo_experiencia_academica.institucion == ""
        ) {
          this.inputs_paso6[1].class_input = "form-control is-invalid";
          this.inputs_paso6[1].text_error = "Ingresa la institución";
        } else {
          this.inputs_paso6[1].class_input = "form-control";
          this.inputs_paso6[1].text_error = "";
        }
      }
      if (input == "paso6_periodo_fin") {
        if (
          this.nuevo_experiencia_academica.fecha_fin == undefined ||
          this.nuevo_experiencia_academica.fecha_fin == ""
        ) {
          this.inputs_paso6[3].class_input = "form-control is-invalid";
          this.inputs_paso6[3].text_error = "Ingresa el año final del periodo";
        } else {
          this.inputs_paso6[3].class_input = "form-control";
          this.inputs_paso6[3].text_error = "";
        }
      }

      if (input == "paso7_proyectos") {
        if (
          this.nuevo_trabajos_investigacion.nombre_proyecto == undefined ||
          this.nuevo_trabajos_investigacion.nombre_proyecto == ""
        ) {
          this.inputs_paso7[0].class_input = "form-control is-invalid";
          this.inputs_paso7[0].text_error = "Ingresa el proyecto";
        } else {
          this.inputs_paso7[0].class_input = "form-control";
          this.inputs_paso7[0].text_error = "";
        }
      }
      if (input == "paso7_resultados") {
        if (
          this.nuevo_trabajos_investigacion.resultados == undefined ||
          this.nuevo_trabajos_investigacion.resultados == ""
        ) {
          this.inputs_paso7[1].class_input = "form-control is-invalid";
          this.inputs_paso7[1].text_error = "Ingresa el resultado";
        } else {
          this.inputs_paso7[1].class_input = "form-control";
          this.inputs_paso7[1].text_error = "";
        }
      }
      if (input == "paso7_institucion") {
        if (
          this.nuevo_trabajos_investigacion.institucion == undefined ||
          this.nuevo_trabajos_investigacion.institucion == ""
        ) {
          this.inputs_paso7[2].class_input = "form-control is-invalid";
          this.inputs_paso7[2].text_error = "Ingresa la institución";
        } else {
          this.inputs_paso7[2].class_input = "form-control";
          this.inputs_paso7[2].text_error = "";
        }
      }
      if (input == "paso7_fecha_ini") {
        if (
          this.nuevo_trabajos_investigacion.fecha_inicio == undefined ||
          this.nuevo_trabajos_investigacion.fecha_inicio == ""
        ) {
          this.inputs_paso7[3].class_input = "form-control is-invalid";
          this.inputs_paso7[3].text_error =
            "Ingresa el año inicial del periodo";
        } else {
          this.inputs_paso7[3].class_input = "form-control";
          this.inputs_paso7[3].text_error = "";
        }
      }
      if (input == "paso7_fecha_fini") {
        if (
          this.nuevo_trabajos_investigacion.fecha_fin == undefined ||
          this.nuevo_trabajos_investigacion.fecha_fin == ""
        ) {
          this.inputs_paso7[4].class_input = "form-control is-invalid";
          this.inputs_paso7[4].text_error = "Ingresa el año final del periodo";
        } else {
          this.inputs_paso7[4].class_input = "form-control";
          this.inputs_paso7[4].text_error = "";
        }
      }

      if (input == "grado_estudio") {
        this.paso2[0].error = "black";
        this.paso2[0].textto = "";
      }
      if (input == "anios_exp") {
        this.paso2[2].error = "black";
        this.paso2[2].textto = "";
      }
      if (input == "disponibilidad") {
        this.paso2[5].error = "black";
        this.paso2[5].textto = "";
      }
      if (input == "disposicion") {
        this.paso2[6].error = "black";
        this.paso2[6].textto = "";
      }
      if (input == "lengua_originaria") {
        this.paso2[7].error = "black";
        this.paso2[7].textto = "";
      }
      if (input == "trabajo_extra") {
        this.paso2[9].error = "black";
        this.paso2[9].textto = "";
      }
      if (input == "lengua_desc") {
        if (this.data.lengua_desc.length < 1) {
          this.paso2[8].error = "red";
          this.paso2[8].textto = "";
          this.inputs[15].class_input = "form-control is-invalid";
          this.inputs[15].text_error = "Campo requerido";
        } else {
          this.paso2[8].error = "black";
          this.paso2[8].textto = "";
          this.inputs[15].class_input = "form-control is-valid";
          this.inputs[15].text_error = "";
        }
      }
    },

    validarCorreo() {
      var email = this.data.email_alt;
      var con = email.length;
      if (con == 0) {
        return true;
      } else {
        var re = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}/;
        return re.test(email);
      }
    },

    establecer_fecha(opc) {
      var today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth() + 1;
      var yyyy = today.getFullYear();
      if (dd < 10) {
        dd = "0" + dd;
      }
      if (mm < 10) {
        mm = "0" + mm;
      }
      var minuscula = yyyy + "-" + mm + "-" + dd;

      if (opc == "f10") {
        document
          .getElementById("paso2_fechaIngreso_new")
          .setAttribute("max", minuscula);
      }
      if (opc == "f20") {
        document
          .getElementById("paso2_fechaEgreso_new")
          .setAttribute("max", minuscula);
      }
      if (opc == "f3") {
        document
          .getElementById("periodo_inicio_paso4")
          .setAttribute("max", minuscula);
      }
      if (opc == "f4") {
        document
          .getElementById("periodo_fin_paso4")
          .setAttribute("max", minuscula);
      }
      if (opc == "fpaso4") {
        document.getElementById("fecha_paso4").setAttribute("max", minuscula);
      }
      if (opc == "f0paso7") {
        document
          .getElementById("paso7_periodo_inicio")
          .setAttribute("max", minuscula);
      }
      if (opc == "f1paso7") {
        document
          .getElementById("paso7_periodo_fin")
          .setAttribute("max", minuscula);
      }
      if (opc == "f0paso6") {
        document
          .getElementById("fecha_inicio_paso6")
          .setAttribute("max", minuscula);
      }
      if (opc == "f1paso6") {
        document
          .getElementById("fecha_fin_paso6")
          .setAttribute("max", minuscula);
      }
    },

    redirigir(ruta) {
      if (ruta != "/") {
        this.$router.push({ path: ruta });
      } else {
        location.href = "/";
        sessionStorage.clear();
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

    acciones(tipo, accion) {
      toastr.remove();
      if (tipo == "formacion") {
        if (accion == "Agregar") {
          let datos = this.nuevo_formacion_profesional;

          if (
            datos.grado_academico == undefined ||
            datos.grado_academico == ""
          ) {
            this.inputs_paso2[0].text_error = "Selecciona el grado académico";
          } else {
            this.inputs_paso2[0].text_error = "";
          }

          if (datos.periodo_salida == undefined || datos.periodo_salida == "") {
            this.inputs_paso2[2].text_error =
              "Selecciona la fecha de titulación";
          } else {
            this.inputs_paso2[2].text_error = "";
          }

          if (datos.carrera == undefined || datos.carrera == "") {
            this.inputs_paso2[3].text_error = "Ingresa la carrera";
          } else {
            this.inputs_paso2[3].text_error = "";
          }
          if (datos.institucion == undefined || datos.institucion == "") {
            this.inputs_paso2[4].class_input = "form-control is-invalid";
            this.inputs_paso2[4].text_error = "Ingresa la institución";
          } else {
            this.inputs_paso2[4].class_input = "form-control";
            this.inputs_paso2[4].text_error = "";
          }

          if (datos.cedula == undefined || datos.cedula == "") {
            this.inputs_paso2[5].class_input = "form-control is-invalid";
            this.inputs_paso2[5].text_error = "Ingresa la cédula profesional";
          } else if (datos.cedula != "" && datos.cedula.length > 6) {
            this.inputs_paso2[5].class_input = "form-control";
            this.inputs_paso2[5].text_error = "";
          } else {
            this.inputs_paso2[5].class_input = "form-control is-invalid";
            this.inputs_paso2[5].text_error = "Formato inválido";
          }
          if (
            document.getElementById("paso2_titulo_file").files[0] == undefined
          ) {
            this.inputs_paso2[6].class_input = "form-control is-invalid";
          } else {
            this.inputs_paso2[6].class_input = "form-control";
          }
          if (
            document.getElementById("paso2_cedula_file").files[0] == undefined
          ) {
            this.inputs_paso2[7].class_input = "form-control is-invalid";
          } else {
            this.inputs_paso2[7].class_input = "form-control";
          }

          let titulo = document.getElementById("paso2_titulo_file");
          let cedula_file = document.getElementById("paso2_cedula_file");

          if (
            datos.grado_academico != undefined &&
            datos.carrera != undefined &&
            datos.institucion != undefined &&
            datos.periodo_salida != undefined &&
            datos.cedula.length > 6
          ) {
            if (
              titulo.files[0] == undefined ||
              cedula_file.files[0] == undefined
            ) {
              toastr.warning(
                "Debes ingresar los documentos de título y cédula",
                "Advertencia",
                { timeOut: 10000 }
              );
            } else {
              this.data_and_doc_paso2();
            }
          } else {
            toastr.warning(
              "Debes completar los campos, por favor verifica la información",
              "¡Falta información!",
              { timeOut: 13000 }
            );
          }
        } else {
          if (
            this.nuevo_formacion_profesional.grado_academico == "" ||
            this.nuevo_formacion_profesional.grado_academico == ""
          ) {
            this.inputs_paso2[0].text_error = "Selecciona el grado académico";
          } else {
            this.inputs_paso2[0].text_error = "";
          }

          if (
            this.nuevo_formacion_profesional.periodo_salida == "" ||
            this.nuevo_formacion_profesional.periodo_salida == ""
          ) {
            this.inputs_paso2[2].text_error =
              "Selecciona la fecha de titulación";
          } else {
            this.inputs_paso2[2].text_error = "";
          }

          if (
            this.nuevo_formacion_profesional.carrera == "" ||
            this.nuevo_formacion_profesional.carrera == ""
          ) {
            this.inputs_paso2[3].text_error = "Ingresa la carrera";
          } else {
            this.inputs_paso2[3].text_error = "";
          }
          if (
            this.nuevo_formacion_profesional.institucion == "" ||
            this.nuevo_formacion_profesional.institucion == ""
          ) {
            this.inputs_paso2[4].class_input = "form-control is-invalid";
            this.inputs_paso2[4].text_error = "Ingresa la institución";
          } else {
            this.inputs_paso2[4].class_input = "form-control";
            this.inputs_paso2[4].text_error = "";
          }

          if (
            this.nuevo_formacion_profesional.cedula == "" ||
            this.nuevo_formacion_profesional.cedula == ""
          ) {
            this.inputs_paso2[5].class_input = "form-control is-invalid";
            this.inputs_paso2[5].text_error = "Ingresa la cédula profesional";
          } else if (
            this.nuevo_formacion_profesional.cedula != "" &&
            this.nuevo_formacion_profesional.cedula.length > 6
          ) {
            this.inputs_paso2[5].class_input = "form-control";
            this.inputs_paso2[5].text_error = "";
          } else {
            this.inputs_paso2[5].class_input = "form-control is-invalid";
            this.inputs_paso2[5].text_error = "Formato inválido";
          }

          let titulo = document.getElementById("paso2_titulo_file");
          let cedula_file = document.getElementById("paso2_cedula_file");

          if (
            this.nuevo_formacion_profesional.grado_academico != "" &&
            this.nuevo_formacion_profesional.carrera != "" &&
            this.nuevo_formacion_profesional.institucion != "" &&
            this.nuevo_formacion_profesional.periodo_salida != "" &&
            this.nuevo_formacion_profesional.cedula.length > 6
          ) {
            if (titulo.files[0] == "" || cedula_file.files[0] == "") {
              toastr.warning(
                "Debes ingresar los documentos de título y cédula",
                "Advertencia",
                { timeOut: 10000 }
              );
            } else {
              this.update_cargos_academicos();

              this.tipo_accion_formacion_profesional = "Agregar";
              this.nuevo_formacion_profesional.id_grado_academico = "";
              this.nuevo_formacion_profesional.grado_academico = "";
              this.nuevo_formacion_profesional.periodo_salida = "";
              this.nuevo_formacion_profesional.carrera = "";
              this.nuevo_formacion_profesional.institucion = "";
              this.nuevo_formacion_profesional.titulado = "";
              this.nuevo_formacion_profesional.cedula_bool = "";
              this.nuevo_formacion_profesional.cedula = "";
            }
          } else {
            toastr.warning(
              "Debes completar los campos, por favor verifica la información",
              "¡Falta información!",
              { timeOut: 13000 }
            );
          }
        }
      }

      if (tipo == "experiencia_profesional") {
        if (accion == "Agregar") {
          let datos = this.experiencia_laboral;

          if (
            (datos.actividades_laborales == undefined &&
              datos.cargo == undefined &&
              datos.institucion == undefined &&
              datos.fecha_ingreso == undefined &&
              datos.fecha_salida == undefined &&
              Number(this.experiencia_laboral.fecha_salida) <
              Number(this.experiencia_laboral.fecha_ingreso)) ||
            (datos.actividades_laborales == "" &&
              datos.cargo == "" &&
              datos.institucion == "" &&
              datos.fecha_ingreso == "" &&
              datos.fecha_salida == "" &&
              Number(this.experiencia_laboral.fecha_salida) <
              Number(this.experiencia_laboral.fecha_ingreso)) ||
            (datos.status_empleado == true &&
              datos.actividades_laborales == undefined &&
              datos.cargo == undefined &&
              datos.institucion == undefined &&
              datos.fecha_ingreso == undefined &&
              datos.fecha_salida == undefined) ||
            (datos.status_empleado == true &&
              datos.actividades_laborales == "" &&
              datos.cargo == "" &&
              datos.institucion == "" &&
              datos.fecha_ingreso == "" &&
              datos.fecha_salida == "")
          ) {
            this.alert_toastr(
              "warning",
              "¡Falta información! <br>  completar los campos, por favor verifica la información",
              "Advertencia",
              8000
            );
            this.inputs_paso4[0].class_input = "form-control is-invalid";
            this.inputs_paso4[0].text_error =
              "Ingresa las actividades desempeñadas";
            this.inputs_paso4[1].class_input = "form-control is-invalid";
            this.inputs_paso4[1].text_error = "Ingresa el cargo";
            this.inputs_paso4[2].class_input = "form-control is-invalid";
            this.inputs_paso4[2].text_error = "Ingresa la institución";
            this.inputs_paso4[3].class_input = "form-control is-invalid";
            this.inputs_paso4[3].text_error =
              "Ingresa el año inicial del periodo";
            this.inputs_paso4[4].class_input = "form-control is-invalid";
            this.inputs_paso4[4].text_error =
              "Ingresa el año final del periodo";
          } else {
            if (
              datos.actividades_laborales == undefined ||
              datos.actividades_laborales == ""
            ) {
              this.inputs_paso4[0].class_input = "form-control is-invalid";
              this.inputs_paso4[0].text_error =
                "Ingresa las actividades desempeñadas";
            } else {
              this.inputs_paso4[0].class_input = "form-control";
              this.inputs_paso4[0].text_error = "";
            }

            if (datos.cargo == undefined || datos.cargo == "") {
              this.inputs_paso4[1].class_input = "form-control is-invalid";
              this.inputs_paso4[1].text_error = "Ingresa el cargo";
            } else {
              this.inputs_paso4[1].class_input = "form-control";
              this.inputs_paso4[1].text_error = "";
            }

            if (datos.institucion == undefined || datos.institucion == "") {
              this.inputs_paso4[2].class_input = "form-control is-invalid";
              this.inputs_paso4[2].text_error = "Ingresa la institución";
            } else {
              this.inputs_paso4[2].class_input = "form-control";
              this.inputs_paso4[2].text_error = "";
            }

            if (datos.fecha_ingreso == undefined || datos.fecha_ingreso == "") {
              this.inputs_paso4[3].class_input = "form-control is-invalid";
              this.inputs_paso4[3].text_error =
                "Ingresa el año inicial del periodo";
            } else {
              this.inputs_paso4[3].class_input = "form-control";
              this.inputs_paso4[3].text_error = "";
            }

            if (
              (datos.status_empleado != true &&
                datos.fecha_salida == undefined) ||
              datos.fecha_salida == ""
            ) {
              this.inputs_paso4[4].class_input = "form-control is-invalid";
              this.inputs_paso4[4].text_error =
                "Ingresa el año final del periodo";
            } else {
              this.inputs_paso4[4].class_input = "form-control";
              this.inputs_paso4[4].text_error = "";
            }

            if (
              (this.inputs_paso4[0].class_input == "form-control" &&
                this.inputs_paso4[1].class_input == "form-control" &&
                this.inputs_paso4[2].class_input == "form-control" &&
                this.inputs_paso4[3].class_input == "form-control" &&
                this.inputs_paso4[4].class_input == "form-control") ||
              (datos.status_empleado == true &&
                this.inputs_paso4[0].class_input == "form-control" &&
                this.inputs_paso4[1].class_input == "form-control" &&
                this.inputs_paso4[2].class_input == "form-control" &&
                this.inputs_paso4[3].class_input == "form-control")
            ) {
              if (
                this.experiencia_laboral.status_empleado == undefined &&
                Number(this.experiencia_laboral.fecha_salida) <
                Number(this.experiencia_laboral.fecha_ingreso)
              ) {
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.warning(
                  "El año final del periodo no puede ser menor al inicial",
                  "Advertencia",
                  { timeOut: 10000 }
                );
              } else {
                this.inputs_paso4[0].class_input = "form-control";
                this.inputs_paso4[0].text_error = "";
                this.inputs_paso4[1].class_input = "form-control";
                this.inputs_paso4[1].text_error = "";
                this.inputs_paso4[2].class_input = "form-control";
                this.inputs_paso4[2].text_error = "";
                this.inputs_paso4[3].class_input = "form-control";
                this.inputs_paso4[3].text_error = "";
                this.inputs_paso4[4].class_input = "form-control";
                this.inputs_paso4[4].text_error = "";

                let datos = this.experiencia_laboral;

                let contador = 0;
                for (let x = 0; x < this.data.experiencia_laboral.length; x++) {
                  if (
                    this.data.experiencia_laboral[x].fecha_salida ==
                    undefined ||
                    this.data.experiencia_laboral[x].fecha_salida == ""
                  ) {
                    contador = contador + 1;
                  }
                }

                if (this.data.experiencia_laboral.length > 0) {
                  if (
                    contador != 0 &&
                    (this.experiencia_laboral.fecha_salida == "" ||
                      this.experiencia_laboral.fecha_salida == undefined)
                  ) {
                    this.alert_toastr(
                      "warning",
                      "ya existe un empleo actual",
                      "Advertencia",
                      8000
                    );
                  } else {
                    this.add_experiencia();
                    this.experiencia_laboral.id_experiencia = "";
                    this.experiencia_laboral.institucion = "";
                    this.experiencia_laboral.cargo = "";
                    this.experiencia_laboral.institucion = "";
                    this.experiencia_laboral.fecha_ingreso = "";
                    this.experiencia_laboral.fecha_salida = "";
                    this.experiencia_laboral.actividades_laborales = "";
                    this.experiencia_laboral.status_empleado = false;
                    this.add_experiencia_laboral = false;
                  }
                } else {
                  this.add_experiencia();
                  this.experiencia_laboral.id_experiencia = "";
                  this.experiencia_laboral.institucion = "";
                  this.experiencia_laboral.cargo = "";
                  this.experiencia_laboral.institucion = "";
                  this.experiencia_laboral.fecha_ingreso = "";
                  this.experiencia_laboral.fecha_salida = "";
                  this.experiencia_laboral.actividades_laborales = "";
                  this.experiencia_laboral.status_empleado = false;
                  this.add_experiencia_laboral = false;
                }
              }
            } else {
              this.alert_toastr(
                "warning",
                "¡Falta información! <br> Debes completar los campos, por favor verifica la información",
                "Advertencia",
                8000
              );
            }
          }
        } else {
          if (
            (this.experiencia_laboral.actividades_laborales == "" &&
              this.experiencia_laboral.cargo == "" &&
              this.experiencia_laboral.institucion == "" &&
              this.experiencia_laboral.fecha_ingreso == "" &&
              this.experiencia_laboral.fecha_salida == "") ||
            (this.experiencia_laboral.actividades_laborales == "" &&
              this.experiencia_laboral.cargo == "" &&
              this.experiencia_laboral.institucion == "" &&
              this.experiencia_laboral.fecha_ingreso == "" &&
              this.experiencia_laboral.fecha_salida == "") ||
            (this.experiencia_laboral.status_empleado == true &&
              this.experiencia_laboral.actividades_laborales == "" &&
              this.experiencia_laboral.cargo == "" &&
              this.experiencia_laboral.institucion == "" &&
              this.experiencia_laboral.fecha_ingreso == "" &&
              this.experiencia_laboral.fecha_salida == "") ||
            (this.experiencia_laboral.status_empleado == true &&
              this.experiencia_laboral.actividades_laborales == "" &&
              this.experiencia_laboral.cargo == "" &&
              this.experiencia_laboral.institucion == "" &&
              this.experiencia_laboral.fecha_ingreso == "" &&
              this.experiencia_laboral.fecha_salida == "")
          ) {
            this.alert_toastr(
              "warning",
              "¡Falta información! <br>  completar los campos, por favor verifica la información",
              "Advertencia",
              8000
            );
            this.inputs_paso4[0].class_input = "form-control is-invalid";
            this.inputs_paso4[0].text_error =
              "Ingresa las actividades desempeñadas";
            this.inputs_paso4[1].class_input = "form-control is-invalid";
            this.inputs_paso4[1].text_error = "Ingresa el cargo";
            this.inputs_paso4[2].class_input = "form-control is-invalid";
            this.inputs_paso4[2].text_error = "Ingresa la institución";
            this.inputs_paso4[3].class_input = "form-control is-invalid";
            this.inputs_paso4[3].text_error =
              "Ingresa el año inicial del periodo";
            this.inputs_paso4[4].class_input = "form-control is-invalid";
            this.inputs_paso4[4].text_error =
              "Ingresa el año final del periodo";
          } else {
            if (
              this.experiencia_laboral.actividades_laborales == "" ||
              this.experiencia_laboral.actividades_laborales == ""
            ) {
              this.inputs_paso4[0].class_input = "form-control is-invalid";
              this.inputs_paso4[0].text_error =
                "Ingresa las actividades desempeñadas";
            } else {
              this.inputs_paso4[0].class_input = "form-control";
              this.inputs_paso4[0].text_error = "";
            }

            if (
              this.experiencia_laboral.cargo == "" ||
              this.experiencia_laboral.cargo == ""
            ) {
              this.inputs_paso4[1].class_input = "form-control is-invalid";
              this.inputs_paso4[1].text_error = "Ingresa el cargo";
            } else {
              this.inputs_paso4[1].class_input = "form-control";
              this.inputs_paso4[1].text_error = "";
            }

            if (
              this.experiencia_laboral.institucion == "" ||
              this.experiencia_laboral.institucion == ""
            ) {
              this.inputs_paso4[2].class_input = "form-control is-invalid";
              this.inputs_paso4[2].text_error = "Ingresa la institución";
            } else {
              this.inputs_paso4[2].class_input = "form-control";
              this.inputs_paso4[2].text_error = "";
            }

            if (
              this.experiencia_laboral.fecha_ingreso == "" ||
              this.experiencia_laboral.fecha_ingreso == ""
            ) {
              this.inputs_paso4[3].class_input = "form-control is-invalid";
              this.inputs_paso4[3].text_error =
                "Ingresa el año inicial del periodo";
            } else {
              this.inputs_paso4[3].class_input = "form-control";
              this.inputs_paso4[3].text_error = "";
            }

            if (
              (this.experiencia_laboral.status_empleado != true &&
                this.experiencia_laboral.fecha_salida == "") ||
              this.experiencia_laboral.fecha_salida == ""
            ) {
              this.inputs_paso4[4].class_input = "form-control is-invalid";
              this.inputs_paso4[4].text_error =
                "Ingresa el año final del periodo";
            } else {
              this.inputs_paso4[4].class_input = "form-control";
              this.inputs_paso4[4].text_error = "";
            }

            if (
              (this.inputs_paso4[0].class_input == "form-control" &&
                this.inputs_paso4[1].class_input == "form-control" &&
                this.inputs_paso4[2].class_input == "form-control" &&
                this.inputs_paso4[3].class_input == "form-control" &&
                this.inputs_paso4[4].class_input == "form-control") ||
              (this.experiencia_laboral.status_empleado == true &&
                this.inputs_paso4[0].class_input == "form-control" &&
                this.inputs_paso4[1].class_input == "form-control" &&
                this.inputs_paso4[2].class_input == "form-control" &&
                this.inputs_paso4[3].class_input == "form-control")
            ) {
              if (
                this.experiencia_laboral.status_empleado != true &&
                Number(this.experiencia_laboral.fecha_salida) <
                Number(this.experiencia_laboral.fecha_ingreso)
              ) {
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.warning(
                  "El año final del periodo no puede ser menor al inicial",
                  "Advertencia",
                  { timeOut: 10000 }
                );
              } else {
                this.inputs_paso4[0].class_input = "form-control";
                this.inputs_paso4[0].text_error = "";
                this.inputs_paso4[1].class_input = "form-control";
                this.inputs_paso4[1].text_error = "";
                this.inputs_paso4[2].class_input = "form-control";
                this.inputs_paso4[2].text_error = "";
                this.inputs_paso4[3].class_input = "form-control";
                this.inputs_paso4[3].text_error = "";
                this.inputs_paso4[4].class_input = "form-control";
                this.inputs_paso4[4].text_error = "";

                let contador = 0;
                for (let x = 0; x < this.data.experiencia_laboral.length; x++) {
                  if (
                    this.data.experiencia_laboral[x].fecha_salida == "" ||
                    this.data.experiencia_laboral[x].fecha_salida == ""
                  ) {
                    contador = contador + 1;
                  }
                }

                this.experiencia_laboral.status_empleado = false;
                this.update_experiencia();

                this.tipo_accion_experiencia_laboral = "Agregar";
                this.experiencia_laboral.id_experiencia = "";
                this.experiencia_laboral.institucion = "";
                this.experiencia_laboral.cargo = "";
                this.experiencia_laboral.fecha_ingreso = "";
                this.experiencia_laboral.fecha_salida = "";
                this.experiencia_laboral.actividades_laborales = "";
              }
            } else {
              this.alert_toastr(
                "warning",
                "¡Falta información! <br> Debes completar los campos, por favor verifica la información",
                "Advertencia",
                8000
              );
            }
          }
        }
      }

      if (tipo == "experiencia_comunidad") {
        if (accion == "Agregar") {
          let datos = this.nuevo_trabajo_comunidad;

          if (
            datos.actividad == undefined &&
            datos.lugar == undefined &&
            datos.fecha == undefined &&
            datos.institucion == undefined
          ) {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "Debes completar los campos, por favor verifica la información",
              "¡Falta información!",
              { timeOut: 13000 }
            );
            this.inputs_paso5[0].class_input = "form-control is-invalid";
            this.inputs_paso5[0].text_error = "Ingresa las actividades";
            this.inputs_paso5[1].class_input = "form-control is-invalid";
            this.inputs_paso5[1].text_error = "Ingresa el lugar";
            this.inputs_paso5[2].class_input = "form-control is-invalid";
            this.inputs_paso5[2].text_error =
              "Ingresa la organización / institución";
            this.inputs_paso5[3].class_input = "form-control is-invalid";
            this.inputs_paso5[3].text_error = "Ingresa la fecha";
          } else {
            if (datos.actividad == undefined) {
              this.inputs_paso5[0].class_input = "form-control is-invalid";
              this.inputs_paso5[0].text_error = "Ingresa las actividades";
            } else {
              this.inputs_paso5[0].class_input = "form-control";
              this.inputs_paso5[0].text_error = "";
            }
            if (datos.lugar == undefined) {
              this.inputs_paso5[1].class_input = "form-control is-invalid";
              this.inputs_paso5[1].text_error = "Ingresa el lugar";
            } else {
              this.inputs_paso5[1].class_input = "form-control";
              this.inputs_paso5[1].text_error = "";
            }
            if (datos.institucion == undefined) {
              this.inputs_paso5[2].class_input = "form-control is-invalid";
              this.inputs_paso5[2].text_error =
                "Ingresa la organización / institución";
            } else {
              this.inputs_paso5[2].class_input = "form-control";
              this.inputs_paso5[2].text_error = "";
            }
            if (datos.fecha == undefined) {
              this.inputs_paso5[3].class_input = "form-control is-invalid";
              this.inputs_paso5[3].text_error = "Ingresa la fecha";
            } else {
              this.inputs_paso5[3].class_input = "form-control";
              this.inputs_paso5[3].text_error = "";
            }

            if (
              datos.actividad != undefined &&
              datos.lugar != undefined &&
              datos.fecha != undefined &&
              datos.institucion != undefined
            ) {
              if (
                this.nuevo_trabajo_comunidad.actividad == "" ||
                this.nuevo_trabajo_comunidad.lugar == "" ||
                this.nuevo_trabajo_comunidad.fecha == "" ||
                this.nuevo_trabajo_comunidad.institucion == ""
              ) {
                toastr.warning(
                  "Debes completar los campos, por favor verifica la información",
                  "¡Falta información!",
                  { timeOut: 13000 }
                );
                if (datos.actividad == "") {
                  this.inputs_paso5[0].class_input = "form-control is-invalid";
                  this.inputs_paso5[0].text_error = "Ingresa las actividades";
                } else {
                  this.inputs_paso5[0].class_input = "form-control";
                  this.inputs_paso5[0].text_error = "";
                }
                if (datos.lugar == "") {
                  this.inputs_paso5[1].class_input = "form-control is-invalid";
                  this.inputs_paso5[1].text_error = "Ingresa el lugar";
                } else {
                  this.inputs_paso5[1].class_input = "form-control";
                  this.inputs_paso5[1].text_error = "";
                }
                if (datos.institucion == "") {
                  this.inputs_paso5[2].class_input = "form-control is-invalid";
                  this.inputs_paso5[2].text_error =
                    "Ingresa la organización / institución";
                } else {
                  this.inputs_paso5[2].class_input = "form-control";
                  this.inputs_paso5[2].text_error = "";
                }
                if (datos.fecha == "") {
                  this.inputs_paso5[3].class_input = "form-control is-invalid";
                  this.inputs_paso5[3].text_error = "Ingresa la fecha";
                } else {
                  this.inputs_paso5[3].class_input = "form-control";
                  this.inputs_paso5[3].text_error = "";
                }
              } else {
                this.add_experiencia_comunidad();
                this.nuevo_trabajo_comunidad.id_trabajo_comunidad = "";
                this.nuevo_trabajo_comunidad.actividad = "";
                this.nuevo_trabajo_comunidad.lugar = "";
                this.nuevo_trabajo_comunidad.fecha = "";
                this.nuevo_trabajo_comunidad.institucion = "";
                this.add_comunidad = false;
              }
            }
          }
        } else {
          if (
            this.nuevo_trabajo_comunidad.actividad == "" &&
            this.nuevo_trabajo_comunidad.lugar == "" &&
            this.nuevo_trabajo_comunidad.fecha == "" &&
            this.nuevo_trabajo_comunidad.institucion == ""
          ) {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "Debes completar los campos, por favor verifica la información",
              "¡Falta información!",
              { timeOut: 13000 }
            );
            this.inputs_paso5[0].class_input = "form-control is-invalid";
            this.inputs_paso5[0].text_error = "Ingresa las actividades";
            this.inputs_paso5[1].class_input = "form-control is-invalid";
            this.inputs_paso5[1].text_error = "Ingresa el lugar";
            this.inputs_paso5[2].class_input = "form-control is-invalid";
            this.inputs_paso5[2].text_error =
              "Ingresa la organización / institución";
            this.inputs_paso5[3].class_input = "form-control is-invalid";
            this.inputs_paso5[3].text_error = "Ingresa la fecha";
          } else {
            if (this.nuevo_trabajo_comunidad.actividad == "") {
              this.inputs_paso5[0].class_input = "form-control is-invalid";
              this.inputs_paso5[0].text_error = "Ingresa las actividades";
            } else {
              this.inputs_paso5[0].class_input = "form-control";
              this.inputs_paso5[0].text_error = "";
            }
            if (this.nuevo_trabajo_comunidad.lugar == "") {
              this.inputs_paso5[1].class_input = "form-control is-invalid";
              this.inputs_paso5[1].text_error = "Ingresa el lugar";
            } else {
              this.inputs_paso5[1].class_input = "form-control";
              this.inputs_paso5[1].text_error = "";
            }
            if (this.nuevo_trabajo_comunidad.institucion == "") {
              this.inputs_paso5[2].class_input = "form-control is-invalid";
              this.inputs_paso5[2].text_error =
                "Ingresa la organización / institución";
            } else {
              this.inputs_paso5[2].class_input = "form-control";
              this.inputs_paso5[2].text_error = "";
            }
            if (this.nuevo_trabajo_comunidad.fecha == "") {
              this.inputs_paso5[3].class_input = "form-control is-invalid";
              this.inputs_paso5[3].text_error = "Ingresa la fecha";
            } else {
              this.inputs_paso5[3].class_input = "form-control";
              this.inputs_paso5[3].text_error = "";
            }

            if (
              this.nuevo_trabajo_comunidad.actividad != "" &&
              this.nuevo_trabajo_comunidad.lugar != "" &&
              this.nuevo_trabajo_comunidad.fecha != "" &&
              this.nuevo_trabajo_comunidad.institucion != ""
            ) {
              this.update_comunidad();
              this.tipo_accion_trabajo_comunidad = "Agregar";
              this.nuevo_trabajo_comunidad.id_trabajo_comunidad = "";
              this.nuevo_trabajo_comunidad.actividad = "";
              this.nuevo_trabajo_comunidad.lugar = "";
              this.nuevo_trabajo_comunidad.fecha = "";
              this.nuevo_trabajo_comunidad.institucion = "";
              this.add_comunidad = false;
            } else {
              toastr.warning(
                "Debes completar los campos, por favor verifica la información",
                "¡Falta información!",
                { timeOut: 13000 }
              );
            }
          }
        }
      }

      if (tipo == "experiencia_academica") {
        if (accion == "Agregar") {
          if (
            Number(this.nuevo_experiencia_academica.fecha_inicio) >
            Number(this.nuevo_experiencia_academica.fecha_fin)
          ) {
            this.alert_toastr(
              "warning",
              "El año final del periodo no puede ser menor al inicial",
              "Advertencia",
              8000
            );
          } else {
            let datos = this.nuevo_experiencia_academica;

            if (
              (datos.cursos == "" &&
                datos.institucion == "" &&
                datos.fecha_inicio == "" &&
                datos.fecha_fin == "") ||
              (datos.cursos == undefined &&
                datos.institucion == undefined &&
                datos.fecha_inicio == undefined &&
                datos.fecha_fin == undefined)
            ) {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.warning(
                "Debe completar los campos, por favor verifique su informacion",
                "¡Falta información!",
                { timeOut: 13000 }
              );
              this.inputs_paso6[0].class_input = "form-control is-invalid";
              this.inputs_paso6[0].text_error = "Ingresa el curso";
              this.inputs_paso6[1].class_input = "form-control is-invalid";
              this.inputs_paso6[1].text_error = "Ingresa la institución";
              this.inputs_paso6[2].class_input = "form-control is-invalid";
              this.inputs_paso6[2].text_error =
                "Ingresa el año inicial del periodo";
              this.inputs_paso6[3].class_input = "form-control is-invalid";
              this.inputs_paso6[3].text_error =
                "Ingresa el año final del periodo";
            } else {
              if (datos.cursos == undefined || datos.cursos == "") {
                this.inputs_paso6[0].class_input = "form-control is-invalid";
                this.inputs_paso6[0].text_error = "Ingresa el curso";
              } else {
                this.inputs_paso6[0].class_input = "form-control";
                this.inputs_paso6[0].text_error = "";
              }
              if (datos.institucion == undefined || datos.institucion == "") {
                this.inputs_paso6[1].class_input = "form-control is-invalid";
                this.inputs_paso6[1].text_error = "Ingresa la institución";
              } else {
                this.inputs_paso6[1].class_input = "form-control";
                this.inputs_paso6[1].text_error = "";
              }
              if (datos.fecha_inicio == undefined || datos.fecha_inicio == "") {
                this.inputs_paso6[2].class_input = "form-control is-invalid";
                this.inputs_paso6[2].text_error =
                  "Ingresa el año inicial del periodo";
              } else {
                this.inputs_paso6[2].class_input = "form-control";
                this.inputs_paso6[2].text_error = "";
              }
              if (datos.fecha_fin == undefined || datos.fecha_fin == "") {
                this.inputs_paso6[3].class_input = "form-control is-invalid";
                this.inputs_paso6[3].text_error =
                  "Ingresa el año final del periodo";
              } else {
                this.inputs_paso6[3].class_input = "form-control";
                this.inputs_paso6[3].text_error = "";
              }

              if (
                datos.cursos != undefined &&
                datos.institucion != undefined &&
                datos.fecha_inicio != undefined &&
                datos.fecha_fin != undefined
              ) {
                this.add_experiencia_academica();
                this.nuevo_experiencia_academica.id_experiencia_academica = "";
                this.nuevo_experiencia_academica.cursos = "";
                this.nuevo_experiencia_academica.institucion = "";
                this.nuevo_experiencia_academica.fecha_inicio = "";
                this.nuevo_experiencia_academica.fecha_fin = "";
                this.add_academica = false;
              }
            }
          }
        } else {
          if (
            Number(this.nuevo_experiencia_academica.fecha_inicio) >
            Number(this.nuevo_experiencia_academica.fecha_fin)
          ) {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "El año final del periodo no puede ser menor al inicial",
              "Advertencia",
              { timeOut: 10000 }
            );
          } else {
            if (
              (this.nuevo_experiencia_academica.cursos == "" &&
                this.nuevo_experiencia_academica.institucion == "" &&
                this.nuevo_experiencia_academica.fecha_inicio == "" &&
                this.nuevo_experiencia_academica.fecha_fin == "") ||
              (this.nuevo_experiencia_academica.cursos == "" &&
                this.nuevo_experiencia_academica.institucion == "" &&
                this.nuevo_experiencia_academica.fecha_inicio == "" &&
                this.nuevo_experiencia_academica.fecha_fin == "")
            ) {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.warning(
                "Debe completar los campos, por favor verifique su informacion",
                "¡Falta información!",
                { timeOut: 13000 }
              );
              this.inputs_paso6[0].class_input = "form-control is-invalid";
              this.inputs_paso6[0].text_error = "Ingresa el curso";
              this.inputs_paso6[1].class_input = "form-control is-invalid";
              this.inputs_paso6[1].text_error = "Ingresa la institución";
              this.inputs_paso6[2].class_input = "form-control is-invalid";
              this.inputs_paso6[2].text_error =
                "Ingresa el año inicial del periodo";
              this.inputs_paso6[3].class_input = "form-control is-invalid";
              this.inputs_paso6[3].text_error =
                "Ingresa el año final del periodo";
            } else {
              if (
                this.nuevo_experiencia_academica.cursos == "" ||
                this.nuevo_experiencia_academica.cursos == ""
              ) {
                this.inputs_paso6[0].class_input = "form-control is-invalid";
                this.inputs_paso6[0].text_error = "Ingresa el curso";
              } else {
                this.inputs_paso6[0].class_input = "form-control";
                this.inputs_paso6[0].text_error = "";
              }
              if (
                this.nuevo_experiencia_academica.institucion == "" ||
                this.nuevo_experiencia_academica.institucion == ""
              ) {
                this.inputs_paso6[1].class_input = "form-control is-invalid";
                this.inputs_paso6[1].text_error = "Ingresa la institución";
              } else {
                this.inputs_paso6[1].class_input = "form-control";
                this.inputs_paso6[1].text_error = "";
              }
              if (
                this.nuevo_experiencia_academica.fecha_inicio == "" ||
                this.nuevo_experiencia_academica.fecha_inicio == ""
              ) {
                this.inputs_paso6[2].class_input = "form-control is-invalid";
                this.inputs_paso6[2].text_error =
                  "Ingresa el año inicial del periodo";
              } else {
                this.inputs_paso6[2].class_input = "form-control";
                this.inputs_paso6[2].text_error = "";
              }
              if (
                this.nuevo_experiencia_academica.fecha_fin == "" ||
                this.nuevo_experiencia_academica.fecha_fin == ""
              ) {
                this.inputs_paso6[3].class_input = "form-control is-invalid";
                this.inputs_paso6[3].text_error =
                  "Ingresa el año final del periodo";
              } else {
                this.inputs_paso6[3].class_input = "form-control";
                this.inputs_paso6[3].text_error = "";
              }

              if (
                this.nuevo_experiencia_academica.cursos != "" &&
                this.nuevo_experiencia_academica.institucion != "" &&
                this.nuevo_experiencia_academica.fecha_inicio != "" &&
                this.nuevo_experiencia_academica.fecha_fin != ""
              ) {
                this.update_academica();
                this.tipo_accion_trabajo_comunidad = "Agregar";
                this.nuevo_experiencia_academica.id_experiencia_academica = "";
                this.nuevo_experiencia_academica.cursos = "";
                this.nuevo_experiencia_academica.institucion = "";
                this.nuevo_experiencia_academica.fecha_inicio = "";
                this.nuevo_experiencia_academica.fecha_fin = "";
                this.add_academica = false;
              } else {
                toastr.warning(
                  "Debe completar los campos, por favor verifique su informacion",
                  "¡Falta información!",
                  { timeOut: 13000 }
                );
              }
            }
          }
        }
      }

      if (tipo == "trabajo_investigacion") {
        if (accion == "Agregar") {
          if (
            Number(this.nuevo_trabajos_investigacion.fecha_inicio) >
            Number(this.nuevo_trabajos_investigacion.fecha_fin)
          ) {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "El año final del periodo no puede ser menor al inicial",
              "Advertencia",
              { timeOut: 10000 }
            );
          } else {
            let datos = this.nuevo_trabajos_investigacion;

            if (
              (datos.nombre_proyecto == "" &&
                datos.resultados == "" &&
                datos.institucion == "" &&
                datos.fecha_inicio == "" &&
                datos.fecha_fin == "") ||
              (datos.nombre_proyecto == undefined &&
                datos.resultados == undefined &&
                datos.institucion == undefined &&
                datos.fecha_inicio == undefined &&
                datos.fecha_fin == undefined)
            ) {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.warning(
                "Debes completar los campos, por favor verifica la información",
                "¡Falta información!",
                { timeOut: 13000 }
              );
              this.inputs_paso7[0].class_input = "form-control is-invalid";
              this.inputs_paso7[0].text_error = "Ingresa el proyecto";
              this.inputs_paso7[1].class_input = "form-control is-invalid";
              this.inputs_paso7[1].text_error = "Ingresa el resultado";
              this.inputs_paso7[2].class_input = "form-control is-invalid";
              this.inputs_paso7[2].text_error = "Ingresa la institución";
              this.inputs_paso7[3].class_input = "form-control is-invalid";
              this.inputs_paso7[3].text_error =
                "Ingresa el año inicial del periodo";
              this.inputs_paso7[4].class_input = "form-control is-invalid";
              this.inputs_paso7[4].text_error =
                "Ingresa el año final del periodo";
            } else {
              if (
                datos.nombre_proyecto == undefined ||
                datos.nombre_proyecto == ""
              ) {
                this.inputs_paso7[0].class_input = "form-control is-invalid";
                this.inputs_paso7[0].text_error = "Ingresa el proyecto";
              } else {
                this.inputs_paso7[0].class_input = "form-control";
                this.inputs_paso7[0].text_error = "";
              }
              if (datos.resultados == undefined || datos.resultados == "") {
                this.inputs_paso7[1].class_input = "form-control is-invalid";
                this.inputs_paso7[1].text_error = "Ingresa el resultado";
              } else {
                this.inputs_paso7[1].class_input = "form-control";
                this.inputs_paso7[1].text_error = "";
              }
              if (datos.institucion == undefined || datos.institucion == "") {
                this.inputs_paso7[2].class_input = "form-control is-invalid";
                this.inputs_paso7[2].text_error = "Ingresa la institución";
              } else {
                this.inputs_paso7[2].class_input = "form-control";
                this.inputs_paso7[2].text_error = "";
              }

              if (datos.fecha_inicio == undefined || datos.fecha_inicio == "") {
                this.inputs_paso7[3].class_input = "form-control is-invalid";
                this.inputs_paso7[3].text_error =
                  "Ingresa el año inicial del periodo";
              } else {
                this.inputs_paso7[3].class_input = "form-control";
                this.inputs_paso7[3].text_error = "";
              }
              if (datos.fecha_fin == undefined || datos.fecha_fin == "") {
                this.inputs_paso7[4].class_input = "form-control is-invalid";
                this.inputs_paso7[4].text_error =
                  "Ingresa el año final del periodo";
              } else {
                this.inputs_paso7[4].class_input = "form-control";
                this.inputs_paso7[4].text_error = "";
              }

              if (
                datos.nombre_proyecto != undefined &&
                datos.resultados != undefined &&
                datos.institucion != undefined &&
                datos.fecha_inicio != undefined &&
                datos.fecha_fin != undefined
              ) {
                this.add_experiencia_investigacion();
                this.nuevo_trabajos_investigacion.id_investigacion_docente = "";
                this.nuevo_trabajos_investigacion.nombre_proyecto = "";
                this.nuevo_trabajos_investigacion.resultados = "";
                this.nuevo_trabajos_investigacion.institucion = "";
                this.nuevo_trabajos_investigacion.fecha_inicio = "";
                this.nuevo_trabajos_investigacion.fecha_fin = "";
                this.add_academica = false;
              } else {
                toastr.warning(
                  "Debes completar los campos, por favor verifica la información",
                  "¡Falta información!",
                  { timeOut: 13000 }
                );
              }
            }
          }
        } else {
          if (
            Number(this.nuevo_trabajos_investigacion.fecha_inicio) >
            Number(this.nuevo_trabajos_investigacion.fecha_fin)
          ) {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "El año final del periodo no puede ser menor al inicial",
              "Advertencia",
              { timeOut: 10000 }
            );
          } else {
            if (
              (this.nuevo_trabajos_investigacion.nombre_proyecto == "" &&
                this.nuevo_trabajos_investigacion.resultados == "" &&
                this.nuevo_trabajos_investigacion.institucion == "" &&
                this.nuevo_trabajos_investigacion.fecha_inicio == "" &&
                this.nuevo_trabajos_investigacion.fecha_fin == "") ||
              (this.nuevo_trabajos_investigacion.nombre_proyecto == "" &&
                this.nuevo_trabajos_investigacion.resultados == "" &&
                this.nuevo_trabajos_investigacion.institucion == "" &&
                this.nuevo_trabajos_investigacion.fecha_inicio == "" &&
                this.nuevo_trabajos_investigacion.fecha_fin == "")
            ) {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.warning(
                "Debes completar los campos, por favor verifica la información",
                "¡Falta información!",
                { timeOut: 13000 }
              );
              this.inputs_paso7[0].class_input = "form-control is-invalid";
              this.inputs_paso7[0].text_error = "Ingresa el proyecto";
              this.inputs_paso7[1].class_input = "form-control is-invalid";
              this.inputs_paso7[1].text_error = "Ingresa el resultado";
              this.inputs_paso7[2].class_input = "form-control is-invalid";
              this.inputs_paso7[2].text_error = "Ingresa la institución";
              this.inputs_paso7[3].class_input = "form-control is-invalid";
              this.inputs_paso7[3].text_error =
                "Ingresa el año inicial del periodo";
              this.inputs_paso7[4].class_input = "form-control is-invalid";
              this.inputs_paso7[4].text_error =
                "Ingresa el año final del periodo";
            } else {
              if (
                this.nuevo_trabajos_investigacion.nombre_proyecto == "" ||
                this.nuevo_trabajos_investigacion.nombre_proyecto == ""
              ) {
                this.inputs_paso7[0].class_input = "form-control is-invalid";
                this.inputs_paso7[0].text_error = "Ingresa el proyecto";
              } else {
                this.inputs_paso7[0].class_input = "form-control";
                this.inputs_paso7[0].text_error = "";
              }
              if (
                this.nuevo_trabajos_investigacion.resultados == "" ||
                this.nuevo_trabajos_investigacion.resultados == ""
              ) {
                this.inputs_paso7[1].class_input = "form-control is-invalid";
                this.inputs_paso7[1].text_error = "Ingresa el resultado";
              } else {
                this.inputs_paso7[1].class_input = "form-control";
                this.inputs_paso7[1].text_error = "";
              }
              if (
                this.nuevo_trabajos_investigacion.institucion == "" ||
                this.nuevo_trabajos_investigacion.institucion == ""
              ) {
                this.inputs_paso7[2].class_input = "form-control is-invalid";
                this.inputs_paso7[2].text_error = "Ingresa la institución";
              } else {
                this.inputs_paso7[2].class_input = "form-control";
                this.inputs_paso7[2].text_error = "";
              }

              if (
                this.nuevo_trabajos_investigacion.fecha_inicio == "" ||
                this.nuevo_trabajos_investigacion.fecha_inicio == ""
              ) {
                this.inputs_paso7[3].class_input = "form-control is-invalid";
                this.inputs_paso7[3].text_error =
                  "Ingresa el año inicial del periodo";
              } else {
                this.inputs_paso7[3].class_input = "form-control";
                this.inputs_paso7[3].text_error = "";
              }
              if (
                this.nuevo_trabajos_investigacion.fecha_fin == "" ||
                this.nuevo_trabajos_investigacion.fecha_fin == ""
              ) {
                this.inputs_paso7[4].class_input = "form-control is-invalid";
                this.inputs_paso7[4].text_error =
                  "Ingresa el año final del periodo";
              } else {
                this.inputs_paso7[4].class_input = "form-control";
                this.inputs_paso7[4].text_error = "";
              }

              if (
                this.nuevo_trabajos_investigacion.nombre_proyecto != "" &&
                this.nuevo_trabajos_investigacion.resultados != "" &&
                this.nuevo_trabajos_investigacion.institucion != "" &&
                this.nuevo_trabajos_investigacion.fecha_inicio != "" &&
                this.nuevo_trabajos_investigacion.fecha_fin != ""
              ) {
                this.update_investigacion();
                this.tipo_accion_trabajo_investigacion = "Agregar";
                this.nuevo_trabajos_investigacion.id_investigacion_docente = "";
                this.nuevo_trabajos_investigacion.nombre_proyecto = "";
                this.nuevo_trabajos_investigacion.resultados = "";
                this.nuevo_trabajos_investigacion.institucion = "";
                this.nuevo_trabajos_investigacion.fecha_inicio = "";
                this.nuevo_trabajos_investigacion.fecha_fin = "";
              } else {
                toastr.warning(
                  "Debes completar los campos, por favor verifica la información",
                  "¡Falta información!",
                  { timeOut: 13000 }
                );
              }
            }
          }
        }
      }
    },

    stteper() {
      this.viewSteper = this.data.id_status;
    },

    activate_sttepers(stteper) {
      if (stteper <= this.data.id_status) {
        this.viewSteper = stteper;
      }
    },

    keyNum(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[0-9]+$/.test(char)) return true;
      else e.preventDefault();
    },

    keyEmail(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[a-zA-Z1-9@.#!$%&-_]+$/.test(char)) return true;
      else e.preventDefault();
    },

    keyEstandar(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[1-9a-zA-ZáéíóúÁÉÍÓÚñÑ/#0,. ]+$/.test(char)) return true;
      else e.preventDefault();
    },

    send_datos_personales() {
      this.block[0].paso = true;
      let id_estado = $("#estado_domicilio").val();
      let id_municipio = $("#municipio_domicilio").val();
      let id_localidad = $("#localidad_domicilio").val();

      toastr.remove();
      if (this.search2 == false) {
        if (
          this.data.telfono_alt == "" &&
          this.data.email_alt == "" &&
          this.data.codigo_postal == "" &&
          id_estado == null &&
          id_municipio == null &&
          id_localidad == null &&
          this.data.calle == "" &&
          this.data.num_ext == "" &&
          this.data.referencias == ""
        ) {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.warning(
            "Debes completar los campos, por favor verifica la información",
            "¡Falta información!",
            { timeOut: 13000 }
          );
          this.inputs[0].class_input = "form-control is-invalid";
          this.inputs[0].text_error = "Escribe tu teléfono";
          this.inputs[1].class_input = "form-control is-invalid";
          this.inputs[1].text_error = "Escribe tu correo electrónico";
          this.inputs[2].class_input = "form-control is-invalid";
          this.inputs[2].text_error = "Escribe tu código postal";
          this.inputs[6].class_input = "form-control is-invalid";
          this.inputs[6].text_error = "Escribe tu calle";
          this.inputs[7].class_input = "form-control is-invalid";
          this.inputs[7].text_error = "Escribe tu numero exterior";
          this.inputs[10].class_input = "form-control is-invalid";
          this.inputs[10].text_error = "Escribe tu referencia";
          this.block[0].paso = false;
        } else {
          if (this.data.telfono_alt.length < 10) {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error =
              "El número telefónico debe ser de 10 dígitos";
            this.block[0].paso = false;
          } else if (this.data.telefono == this.data.telfono_alt) {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error =
              "El teléfono de contacto alterno y principal no pueden ser iguales";
            this.block[0].paso = false;
          } else {
            this.inputs[0].class_input = "form-control is-valid";
            this.inputs[0].text_error = "";
          }

          if (this.validarCorreo() == false || this.data.email_alt == "") {
            this.inputs[1].class_input = "form-control is-invalid";
            this.inputs[1].text_error = "El formato del correo es inválido";
            this.block[0].paso = false;
          } else if (this.data.email === this.data.email_alt) {
            this.inputs[1].class_input = "form-control is-invalid";
            this.inputs[1].text_error =
              "El correo alterno y el principal no pueden ser iguales";
            this.block[0].paso = false;
          } else {
            this.inputs[1].class_input = "form-control is-valid";
            this.inputs[1].text_error = "";
          }

          if (this.data.codigo_postal.length < 4) {
            this.inputs[2].class_input = "form-control is-invalid";
            this.inputs[2].text_error = "Escribe el código postal";
            this.inputs[3].class_input = "form-control";
            this.inputs[4].class_input = "form-control";
            this.inputs[5].class_input = "form-control";
            this.Estados = [];
            this.Municipio = [];
            this.Localidad = [];
            $("#localidad_domicilio").attr("disabled", true);
            this.block[0].paso = false;
          } else {
            this.inputs[2].class_input = "form-control is-valid";
            this.inputs[3].class_input = "form-control is-valid";
            this.inputs[4].class_input = "form-control is-valid";
            this.inputs[2].text_error = "";
            this.inputs[3].text_error = "";
            this.inputs[4].text_error = "";
            this.inputs[2].text_error = "";
          }
          if (
            this.data.codigo_postal.length === 0 &&
            $("#localidad_domicilio").val() == null
          ) {
          } else {
            if (
              $("#localidad_domicilio").val() == "" ||
              $("#localidad_domicilio").val() == null ||
              $("#localidad_domicilio").val() == 0
            ) {
              this.inputs[5].class_input = "form-control is-invalid";
              this.inputs[5].text_error = "Debes seleccionar una localidad";
              this.block[0].paso = false;
            } else {
              this.inputs[5].class_input = "form-control is-valid";
              this.inputs[5].text_error = "";
            }
          }

          if (this.data.calle.length == 0) {
            this.inputs[6].class_input = "form-control is-invalid";
            this.inputs[6].text_error = "Escribe la calle";
            this.block[0].paso = false;
          } else {
            this.inputs[6].class_input = "form-control is-valid";
            this.inputs[6].text_error = "";
          }

          if (this.data.num_ext.length == 0) {
            this.inputs[7].class_input = "form-control is-invalid";
            this.inputs[7].text_error = "Escribe el número exterior";
            this.block[0].paso = false;
          } else {
            this.inputs[7].class_input = "form-control is-valid";
            this.inputs[7].text_error = "";
          }

          if (this.data.referencias.length == 0) {
            this.inputs[10].class_input = "form-control is-invalid";
            this.inputs[10].text_error = " Escribe la referencia";
            this.block[0].paso = false;
          } else {
            this.inputs[10].class_input = "form-control is-valid";
            this.inputs[10].text_error = "";
          }

          if (
            this.inputs[0].class_input == "form-control is-valid" &&
            this.inputs[1].class_input == "form-control is-valid" &&
            this.inputs[2].class_input == "form-control is-valid" &&
            this.inputs[3].class_input == "form-control is-valid" &&
            this.inputs[4].class_input == "form-control is-valid" &&
            this.inputs[5].class_input == "form-control is-valid" &&
            this.inputs[6].class_input == "form-control is-valid" &&
            this.inputs[7].class_input == "form-control is-valid" &&
            this.inputs[10].class_input == "form-control is-valid"
          ) {
            ubbj_api
              .post("registro/docente/1", {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods":
                    "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                  "Access-Control-Allow-Headers":
                    "Origin, Content-Type, X-Auth-Token",
                },
                id_usuario: this.data.id_usuario,
                telefono_alt: this.data.telfono_alt,
                email_alt: this.data.email_alt,
                cp: this.data.codigo_postal,
                id_estado: this.data.id_estado,
                id_municipio: this.data.id_municipio,
                id_localidad: id_localidad,
                calle: this.data.calle,
                num_ext: this.data.num_ext,
                num_int: this.data.num_int,
                pais: "México",
                referencias: this.data.referencias,
              })
              .then((response) => {
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.success(response.data.message, "Datos personales", {
                  timeOut: 10000,
                });

                this.data.id_status = 4;
                this.data.localidad = $("#localidad_domicilio option:selected")
                  .text()
                  .trim();
                sessionStorage.data = JSON.stringify(this.data);

                setTimeout(() => {
                  document.getElementById("btn_paso2").click();
                  window.scroll(0, 830);
                }, 100);
              });
          } else {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            let errores = "";
            for (let i = 0; i < this.inputs.length; i++) {
              if (this.inputs[i].text_error != "") {
                errores =
                  errores + "* " + this.inputs[i].text_error + "<br><br>";
              }
            }
            toastr.warning("<br>" + errores, "Advertencia", { timeOut: 13000 });
            this.block[0].paso = false;
          }
        }
      } else {
        this.inputs[2].class_input = "form-control";
        this.inputs[2].text_error = "";

        if (
          this.data.telfono_alt == "" &&
          this.data.email_alt == "" &&
          $("#estadoManual").val() == 0 &&
          $("#municipioManual").val() == 0 &&
          $("#localidadManual").val() == 0 &&
          this.data.calle == "" &&
          this.data.num_ext == "" &&
          this.data.referencias == ""
        ) {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.warning(
            "Debe completar los campos, por favor verifique su informacion",
            "¡Falta información!",
            { timeOut: 13000 }
          );
          this.inputs[0].class_input = "form-control is-invalid";
          this.inputs[0].text_error = "Campo requerido";
          this.inputs[1].class_input = "form-control is-invalid";
          this.inputs[1].text_error = "Campo requerido";
          this.inputs[3].class_input = "form-control is-invalid";
          this.inputs[3].text_error = "Selecciona un estado";
          this.inputs[4].class_input = "form-control is-invalid";
          this.inputs[4].text_error = "Selecciona un municipio";
          this.inputs[5].class_input = "form-control is-invalid";
          this.inputs[5].text_error = "Selecciona una localidad";
          this.inputs[6].class_input = "form-control is-invalid";
          this.inputs[6].text_error = "Campo requerido";
          this.inputs[7].class_input = "form-control is-invalid";
          this.inputs[7].text_error = "Campo requerido";
          this.inputs[10].class_input = "form-control is-invalid";
          this.inputs[10].text_error = "Campo requerido";
          this.block[0].paso = false;
        } else {
          if (this.data.telfono_alt.length < 10) {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error =
              "El número telefónico debe ser de 10 dígitos";
          } else if (this.data.telefono == this.data.telfono_alt) {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error =
              "El teléfono de contacto alterno y principal no pueden ser iguales";
          } else {
            this.inputs[0].class_input = "form-control is-valid";
            this.inputs[0].text_error = "";
          }
          if (this.validarCorreo() == false || this.data.email_alt == "") {
            this.inputs[1].class_input = "form-control is-invalid";
            this.inputs[1].text_error = "El formato del correo es inválido";
          } else if (this.data.email === this.data.email_alt) {
            this.inputs[1].class_input = "form-control is-invalid";
            this.inputs[1].text_error =
              "El correo alterno y el principal no pueden ser iguales";
          } else {
            this.inputs[1].class_input = "form-control is-valid";
            this.inputs[1].text_error = "";
          }
          if (
            $("#estadoManual").val() == 0 ||
            $("#estadoManual").val() == undefined
          ) {
            this.inputs[3].class_input = "form-control is-invalid";
            this.inputs[3].text_error = "Debes seleccionar un estado";
          } else {
            this.inputs[3].class_input = "form-control is-valid";
            this.inputs[3].text_error = "";
          }

          if (
            $("#municipioManual").val() == 0 ||
            $("#municipioManual").val() == ""
          ) {
            this.inputs[4].class_input = "form-control is-invalid";
            this.inputs[4].text_error = "Debes seleccionar un municipio";
          } else {
            this.inputs[4].class_input = "form-control is-valid";
            this.inputs[4].text_error = "";
          }

          if (
            $("#localidadManual").val() == 0 ||
            $("#localidadManual").val() == ""
          ) {
            this.inputs[5].class_input = "form-control is-invalid";
            this.inputs[5].text_error = "Debes seleccionar una localidad";
          } else {
            this.inputs[5].class_input = "form-control is-valid";
            this.inputs[5].text_error = "";
          }

          if (this.data.calle.length == 0) {
            this.inputs[6].class_input = "form-control is-invalid";
            this.inputs[6].text_error = "Escribe la calle";
          } else {
            this.inputs[6].class_input = "form-control is-valid";
            this.inputs[6].text_error = "";
          }
          if (this.data.num_ext.length == 0) {
            this.inputs[7].class_input = "form-control is-invalid";
            this.inputs[7].text_error = "Escribe el número exterior";
          } else {
            this.inputs[7].class_input = "form-control is-valid";
            this.inputs[7].text_error = "";
          }

          if (this.data.referencias.length == 0) {
            this.inputs[10].class_input = "form-control is-invalid";
            this.inputs[10].text_error = " Escribe la referencia";
          } else {
            this.inputs[10].class_input = "form-control is-valid";
            this.inputs[10].text_error = "";
          }
          if (
            this.inputs[0].class_input == "form-control is-valid" &&
            this.inputs[1].class_input == "form-control is-valid" &&
            this.inputs[3].class_input == "form-control is-valid" &&
            this.inputs[4].class_input == "form-control is-valid" &&
            this.inputs[5].class_input == "form-control is-valid" &&
            this.inputs[6].class_input == "form-control is-valid" &&
            this.inputs[7].class_input == "form-control is-valid" &&
            this.inputs[10].class_input == "form-control is-valid"
          ) {
            ubbj_api
              .post("registro/docente/1", {
                headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods":
                    "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                  "Access-Control-Allow-Headers":
                    "Origin, Content-Type, X-Auth-Token",
                },
                id_usuario: this.data.id_usuario,
                telefono_alt: this.data.telfono_alt,
                email_alt: this.data.email_alt,
                id_estado: this.data.id_estado,
                id_municipio: this.id_municipio,
                id_localidad: this.id_localidad,
                calle: this.data.calle,
                num_ext: this.data.num_ext,
                num_int: this.data.num_int,
                pais: "México",
                referencias: this.data.referencias,
              })
              .then((response) => {
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.success(response.data.message, "Datos personales", {
                  timeOut: 10000,
                });

                this.data.codigo_postal = "Sin número";
                this.data.id_estado = $("#estadoManual").val();
                this.data.municipio = $("#municipioManual").val();
                this.data.municipio = $("#localidadManual").val();

                this.data.id_status = 4;

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
                sessionStorage.data = JSON.stringify(this.data);

                setTimeout(() => {
                  document.getElementById("btn_paso2").click();
                  window.scroll(0, 830);
                }, 100);
              });
          } else {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            let errores = "";
            for (let i = 0; i < this.inputs.length; i++) {
              if (this.inputs[i].text_error != "") {
                errores =
                  errores + "* " + this.inputs[i].text_error + "<br><br>";
              }
            }
            toastr.warning("<br>" + errores, "Advertencia", { timeOut: 13000 });
            this.block[0].paso = false;
          }
        }
      }
    },

    activateTitulo() {
      this.ejecutando1 = false;
    },
    activateCedula() {
      this.ejecutando2 = false;
    },

    activateReg() {
      this.get_cargos_academicos();
      this.nuevo_formacion_profesional.grado_academico = undefined;
      this.nuevo_formacion_profesional.periodo_salida = "";
      this.nuevo_formacion_profesional.carrera = "";
      this.nuevo_formacion_profesional.institucion = "";
      this.nuevo_formacion_profesional.cedula = "";
      $("#paso2_cedula_file").val("");
      $("#paso2_titulo_file").val("");
      this.ejecutando = false;
    },

    validacion_doc(charge, file, tipo_doc, charge2) {
      toastr.remove();
      let permiso = 1;

      $("#" + charge).show();
      let archivoInput = document.getElementById(file);
      let archivoRuta = archivoInput.value;
      let extPermitidas = /(.PDF|.pdf)$/i;
      let fi = document.getElementById(file);
      let totalFileSize = 0;

      if (fi.files.length > 0) {
        for (let i = 0; i <= fi.files.length - 1; i++) {
          let fsize = fi.files.item(i).size;
          totalFileSize = totalFileSize + fsize;
          let puerquismo = Math.round(fsize / 1024);
          let limite = 5 * 1024;
          if (puerquismo > limite) {
            $("#" + charge).hide();
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "Sólo se permiten archivos con un tamaño menor a 5Mb",
              "Aviso",
              { timeOut: 8000 }
            );
            if (file == "paso2_titulo_file") {
              this.inputs_paso2[6].class_input = "form-control is-invalid";
            } else {
              this.inputs_paso2[7].class_input = "form-control is-invalid";
            }
            permiso = 0;
            $("#" + file).val("");
            return false;
          }
        }
      } else {
        if (file == "paso2_titulo_file") {
          this.inputs_paso2[6].class_input = "form-control";
        } else {
          this.inputs_paso2[7].class_input = "form-control";
        }
      }

      if (!extPermitidas.exec(archivoRuta)) {
        $("#" + charge).hide();
        toastr.options.progressBar = true;
        toastr.options.closeButton = true;
        toastr.warning("Sólo se permiten archivos en formato .pdf", "Aviso", {
          timeOut: 8000,
        });
        if (file == "paso2_titulo_file") {
          this.inputs_paso2[6].class_input = "form-control is-invalid";
        } else {
          this.inputs_paso2[7].class_input = "form-control is-invalid";
        }
        permiso = 0;
        $("#" + file).val("");
        return false;
      } else {
        if (file == "paso2_titulo_file") {
          this.inputs_paso2[6].class_input = "form-control";
        } else {
          this.inputs_paso2[7].class_input = "form-control";
        }
      }

      if (this.tipo_accion_formacion_profesional == "Editar" && permiso == 1) {
        if (charge2 == "doc_chaer22") {
          this.ejecutando1 = true;
        } else {
          this.ejecutando2 = true;
        }

        $("#" + charge).hide();
        $("#" + charge2).show();
        var data = new FormData();
        data.append("id_usuario", this.data.id_usuario);
        data.append(
          "id_grado_academico",
          this.nuevo_formacion_profesional.id_grado_academico
        );
        data.append("id_tipodoc", tipo_doc);
        data.append("file", archivoInput.files[0]);
        var xhr = new XMLHttpRequest();
        xhr.addEventListener("readystatechange", function () {
          if (this.readyState === 4) {
            var str = xhr.responseText;
            var n = str.indexOf("Grado académico agregado exitosamente");
            if (n == -1) {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.success(
                "Documento reemplazado exitosamente",
                "Documento actualizado",
                { timeOut: 8000 }
              );
              $("#" + charge2).hide();

              if (charge2 == "doc_chaer22") {
                document.getElementById("block1").click();
              } else {
                document.getElementById("block2").click();
              }

              if (file == "paso2_titulo_file") {
                this.inputs_paso2[6].class_input = "form-control";
              } else {
                this.inputs_paso2[7].class_input = "form-control";
              }
            } else {
              setTimeout(() => {
                this.get_cargos_academicos();
              }, 500);
            }
          }
        });
        xhr.open(
          "POST",
          process.env.VUE_APP_UBBJ_API_CODE + "registro/docente/reemplazar/doc"
        );
        xhr.send(data);
      }
    },

    data_and_doc_paso2() {
      let titulo = document.getElementById("paso2_titulo_file");
      let cedula_file = document.getElementById("paso2_cedula_file");
      this.ejecutando = true;
      var data = new FormData();
      data.append("id_usuario", this.data.id_usuario);
      data.append(
        "grado_academico",
        this.nuevo_formacion_profesional.grado_academico
      );
      data.append(
        "fecha_titulacion",
        this.nuevo_formacion_profesional.periodo_salida
      );
      data.append("carrera", this.nuevo_formacion_profesional.carrera);
      data.append("titulo", titulo.files[0]);
      data.append("cedula_file", cedula_file.files[0]);
      data.append("institucion", this.nuevo_formacion_profesional.institucion);
      data.append("cedula", this.nuevo_formacion_profesional.cedula);
      var xhr = new XMLHttpRequest();

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          var str = xhr.responseText;
          var n = str.indexOf("Grado académico agregado exitosamente");

          document.getElementById("btnAction").click();
          if (n != -1) {
            setTimeout(() => {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.warning("A ocurrido un error", "Aviso", { timeOut: 8000 });
            }, 1000);
          } else {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.success(
              "Grado académico agregado exitosamente",
              "Formación profesional",
              { timeOut: 8000 }
            );
            $("#doc1_charge_paso2").hide();
            $("#doc2_charge_paso2").hide();
          }
        }
      });

      xhr.open(
        "POST",
        process.env.VUE_APP_UBBJ_API_CODE + "registro/docente/agregar/grado"
      );
      xhr.send(data);
    },

    get_cargos_academicos() {
      ubbj_api
        .post("mostrar/gacademicos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.data.formacion_profesional = response.data.grados_academicos;

          if (response.data.grados_academicos.length == 0) {
            this.opciones_formacion = [];
            this.opciones_formacion = [
              {
                value: undefined,
                text: "Selecciona una opción",
              },
              {
                value: "Licenciatura",
                text: "Licenciatura",
              },
            ];
            this.nuevo_formacion_profesional.grado_academico = "Licenciatura";
          }
          if (response.data.grados_academicos.length > 0) {
            if (
              this.data.formacion_profesional[0].grado_academico !=
              "Licenciatura"
            ) {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                {
                  value: "Licenciatura",
                  text: "Licenciatura",
                },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }

            if (
              this.data.formacion_profesional[0].grado_academico != "Maestría"
            ) {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                { value: "Maestría", text: "Maestría" },
                { value: "Doctorado", text: "Doctorado" },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }
            if (
              this.data.formacion_profesional[0].grado_academico == "Doctorado"
            ) {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                {
                  value: "Licenciatura",
                  text: "Licenciatura",
                },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }
          }
          if (response.data.grados_academicos.length > 1) {
            if (
              this.data.formacion_profesional[0].grado_academico ==
              "Licenciatura" ||
              this.data.formacion_profesional[1].grado_academico ==
              "Licenciatura"
            ) {
            } else {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                {
                  value: "Licenciatura",
                  text: "Licenciatura",
                },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }

            if (
              this.data.formacion_profesional[0].grado_academico ==
              "Maestría" ||
              this.data.formacion_profesional[1].grado_academico == "Maestría"
            ) {
            } else {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                { value: "Maestría", text: "Maestría" },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }

            if (
              this.data.formacion_profesional[0].grado_academico ==
              "Doctorado" ||
              this.data.formacion_profesional[1].grado_academico == "Doctorado"
            ) {
            } else {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                { value: "Doctorado", text: "Doctorado" },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }
          } else {
            if (
              this.data.formacion_profesional[0].grado_academico !=
              "Licenciatura"
            ) {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                {
                  value: "Licenciatura",
                  text: "Licenciatura",
                },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }

            if (
              this.data.formacion_profesional[0].grado_academico != "Maestría"
            ) {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                { value: "Maestría", text: "Maestría" },
                { value: "Doctorado", text: "Doctorado" },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }
            if (
              this.data.formacion_profesional[0].grado_academico == "Doctorado"
            ) {
              this.opciones_formacion = [];
              this.opciones_formacion = [
                {
                  value: undefined,
                  text: "Selecciona una opción",
                },
                {
                  value: "Licenciatura",
                  text: "Licenciatura",
                },
              ];
              this.nuevo_formacion_profesional.grado_academico = undefined;
            }
          }
        })
        .catch((e) => { });
    },

    update_cargos_academicos() {
      let cantidad = 0;
      ubbj_api
        .post("actualizar/gacademicos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_grado_academico:
            this.nuevo_formacion_profesional.id_grado_academico,
          id_usuario: this.data.id_usuario,
          fecha_ingreso: "",
          fecha_titulacion: this.nuevo_formacion_profesional.periodo_salida,
          carrera: this.nuevo_formacion_profesional.carrera,
          institucion: this.nuevo_formacion_profesional.institucion,
          cedula: this.nuevo_formacion_profesional.cedula,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Formación profesional", {
            timeOut: 8000,
          });
          this.get_cargos_academicos();
          this.nuevo_formacion_profesional.grado_academico = undefined;
        })
        .catch((e) => { });
    },

    delete_cargos_academicos() {
      ubbj_api
        .post("eliminar/gacademicos", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_grado_academico: this.reg_id_Formacion,
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Formación profesional", {
            timeOut: 8000,
          });
          this.get_cargos_academicos();
        })
        .catch((e) => { });
    },

    eliminar_historial(index) {
      this.reg_id_Formacion = index;
    },

    editar_formacion_profesional(index) {
      this.opciones_formacion = [];
      this.inputs_paso2[0].text_error = "";
      this.inputs_paso2[1].class_input = "form-control ";
      this.inputs_paso2[1].text_error = "";
      this.inputs_paso2[2].text_error = "";
      this.inputs_paso2[3].text_error = "";
      this.inputs_paso2[4].text_error = "";
      this.inputs_paso2[5].text_error = "";

      this.nuevo_formacion_profesional.id_grado_academico =
        this.data.formacion_profesional[index].id_grado_academico;
      this.nuevo_formacion_profesional.grado_academico = undefined;

      if (
        this.data.formacion_profesional[index].grado_academico == "Licenciatura"
      ) {
        this.opciones_formacion = [
          {
            value: undefined,
            text: "Selecciona una opción",
          },
          { value: "Licenciatura", text: "Licenciatura" },
        ];
        this.nuevo_formacion_profesional.grado_academico = "Licenciatura";
      }
      if (
        this.data.formacion_profesional[index].grado_academico == "Maestría"
      ) {
        this.opciones_formacion = [
          {
            value: undefined,
            text: "Selecciona una opción",
          },
          { value: "Maestría", text: "Maestría" },
        ];
        this.nuevo_formacion_profesional.grado_academico = "Maestría";
      }
      if (
        this.data.formacion_profesional[index].grado_academico == "Doctorado"
      ) {
        this.opciones_formacion = [
          {
            value: undefined,
            text: "Selecciona una opción",
          },
          { value: "Doctorado", text: "Doctorado" },
        ];
        this.nuevo_formacion_profesional.grado_academico = "Doctorado";
      }

      this.nuevo_formacion_profesional.periodo_salida =
        this.data.formacion_profesional[index].periodo_salida;
      this.nuevo_formacion_profesional.carrera =
        this.data.formacion_profesional[index].carrera;
      this.nuevo_formacion_profesional.institucion =
        this.data.formacion_profesional[index].institucion;
      this.nuevo_formacion_profesional.titulado =
        this.data.formacion_profesional[index].titulado;
      this.nuevo_formacion_profesional.cedula_bool =
        this.data.formacion_profesional[index].cedula_bool;
      this.nuevo_formacion_profesional.cedula =
        this.data.formacion_profesional[index].cedula;
      this.tipo_accion_formacion_profesional = "Editar";
      this.index_exp_pro = index;
      $("#doc1_charge_paso2").hide();
      $("#doc2_charge_paso2").hide();
      $("#paso2_cedula_file").val("");
      $("#paso2_titulo_file").val("");
    },

    send_paso2() {
      this.block[1].paso = true;
      toastr.remove();
      if (this.data.formacion_profesional.length > 0) {
        ubbj_api
          .post("registro/docente/2", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
            id_usuario: this.data.id_usuario,
          })
          .then((response) => {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.success(response.data.message, "Formación profesional", {
              timeOut: 8000,
            });

            this.data.id_status = 5;
            this.data.profesion_capturada = response.data.profesion_capturada;
            sessionStorage.data = JSON.stringify(this.data);

            setTimeout(() => {
              document.getElementById("btn_paso3").click();
              window.scroll(0, 830);
            }, 50);
          })
          .catch((e) => {
            this.block[1].paso = false;
            if (e.message == "Request failed with status code 400") {
              toastr.warning(
                "Debe registrar al menos una licenciatura para continuar",
                "Formación profesional",
                { timeOut: 13000 }
              );
            }
          });
      } else {
        toastr.warning(
          "Debe agregar por lo menos una formación profesional",
          "Formación profesional",
          { timeOut: 13000 }
        );
        this.block[1].paso = false;
      }
    },

    get_profesion() {
      ubbj_api
        .post("mostrar/areas/disponibles", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_convocatoria: this.data_convocatoria,
        })
        .then((response) => {
          const cantidad3 = response.data.Areas_conocimiento.length;
          for (let i = 0; i < cantidad3; i++) {
            this.area_conocimiento.push({
              id_area_conocimiento:
                response.data.Areas_conocimiento[i].id_area_conocimiento,
              area: response.data.Areas_conocimiento[i].area,
              tope: response.data.Areas_conocimiento[i].tope,
            });
          }
        })
        .catch((e) => {
          $("#selectPaso3").attr("disabled", true);
          this.area_conocimiento = undefined;
        });
    },

    paso3(option) {
      toastr.remove();
      if (option == "Guardar") {
        this.block[2].paso = true;
        if (this.areaDeConocimiento == undefined) {
          this.alert_toastr(
            "warning",
            "¡Falta información! <br> Debes seleccionar el área de conocimiento",
            "Advertencia",
            8000
          );
          this.inputs_paso3[0].class_input = "form-control is-invalid";
          this.inputs_paso3[0].text_error = "Selecciona una opción";
          this.block[2].paso = false;
        } else {
          this.inputs_paso3[0].class_input = "form-control is-valid";
          this.inputs_paso3[0].text_error = "";
        }
        if (this.inputs_paso3[0].class_input == "form-control is-valid") {
          ubbj_api
            .post("registro/docente/agregar/perfil", {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers":
                  "Origin, Content-Type, X-Auth-Token",
              },

              id_usuario: this.data.id_usuario,
              id_area_conocimiento: this.areaDeConocimiento,
              id_convocatoria: this.data_convocatoria,
            })
            .then((response) => {
              this.areaDeConocimiento = $(
                'select[name="areaConocimiento_paso3"] option:selected'
              )
                .text()
                .trim();

              this.data.area_seleccionada = [
                { area_conocimiento: this.areaDeConocimiento },
              ];

              sessionStorage.data = JSON.stringify(this.data);
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.success(
                "Datos del área de conocimiento guardados exitosamente",
                "Aviso",
                { timeOut: 8000 }
              );

              ubbj_api
                .post("registro/docente/3", {
                  headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods":
                      "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                    "Access-Control-Allow-Headers":
                      "Origin, Content-Type, X-Auth-Token",
                  },

                  id_usuario: this.data.id_usuario,
                })
                .then((response) => {
                  this.data.id_status = 6;

                  sessionStorage.data = JSON.stringify(this.data);

                  setTimeout(() => {
                    document.getElementById("btn_paso4").click();
                    window.scroll(0, 830);
                  }, 50);
                })
                .catch((e) => { });
            })
            .catch((e) => {
              this.block[2].paso = false;
            });
        }
      }
      if (option == "no_interes") {
        this.inputs_paso3[0].class_input = "form-control";
        this.inputs_paso3[0].text_error = "";
      }
    },

    no_interes() {
      ubbj_api
        .post("registro/docente/suspender", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Formación profesional", {
            timeOut: 8000,
          });

          this.cerrar_sesion();
        })
        .catch((e) => { });
    },

    add_experiencia() {
      ubbj_api
        .post("registro/docente/agregar/experiencia", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_usuario: this.data.id_usuario,
          institucion: this.experiencia_laboral.institucion,
          cargo: this.experiencia_laboral.cargo,
          fecha_ingreso: this.experiencia_laboral.fecha_ingreso,
          fecha_salida: this.experiencia_laboral.fecha_salida,
          actividades_laborales: this.experiencia_laboral.actividades_laborales,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia profesional", {
            timeOut: 8000,
          });
          this.get_experiencia();
        })
        .catch((e) => { });
    },

    get_experiencia() {
      ubbj_api
        .post("mostrar/experiencia", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.data.experiencia_laboral = response.data.experiencia_laboral;
        })
        .catch((e) => { });
    },

    editar_experiencia_laboral(index) {
      this.inputs_paso4[0].class_input = "form-control ";
      this.inputs_paso4[0].text_error = "";
      this.inputs_paso4[1].class_input = "form-control ";
      this.inputs_paso4[1].text_error = "";
      this.inputs_paso4[2].class_input = "form-control ";
      this.inputs_paso4[2].text_error = "";
      this.inputs_paso4[3].class_input = "form-control ";
      this.inputs_paso4[3].text_error = "";
      this.inputs_paso4[4].class_input = "form-control ";
      this.inputs_paso4[4].text_error = "";

      this.experiencia_laboral.id_experiencia =
        this.data.experiencia_laboral[index].id_experiencia;
      this.experiencia_laboral.actividades_laborales =
        this.data.experiencia_laboral[index].actividades_laborales;
      this.experiencia_laboral.cargo =
        this.data.experiencia_laboral[index].cargo;
      this.experiencia_laboral.fecha_ingreso =
        this.data.experiencia_laboral[index].fecha_ingreso;
      this.experiencia_laboral.fecha_salida =
        this.data.experiencia_laboral[index].fecha_salida;

      if (
        this.data.experiencia_laboral[index].status_empleado == true ||
        this.data.experiencia_laboral[index].status_empleado == undefined
      ) {
        document.getElementById("ultimoEmpleo").click();
        this.experiencia_laboral.status_empleado = true;
        this.experiencia_laboral.fecha_salida = "";
      } else {
        this.experiencia_laboral.status_empleado = false;
      }

      this.experiencia_laboral.institucion =
        this.data.experiencia_laboral[index].institucion;
      this.tipo_accion_experiencia_laboral = "Editar";
      this.index_experiencia_laboral = index;
    },

    update_experiencia() {
      ubbj_api
        .post("actualizar/experiencia", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_experiencia: this.experiencia_laboral.id_experiencia,
          id_usuario: this.data.id_usuario,
          institucion: this.experiencia_laboral.institucion,
          cargo: this.experiencia_laboral.cargo,
          fecha_ingreso: this.experiencia_laboral.fecha_ingreso,
          fecha_salida: this.experiencia_laboral.fecha_salida,
          actividades_laborales: this.experiencia_laboral.actividades_laborales,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia profesional", {
            timeOut: 8000,
          });
          this.get_experiencia();
        })
        .catch((e) => { });
    },

    delete_experiencia(index) {
      ubbj_api
        .post("eliminar/experiencia", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_experiencia: this.reg_id_porf,
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia profesional", {
            timeOut: 8000,
          });
          this.get_experiencia();
        })
        .catch((e) => { });
    },

    eliminar_experiencia_laboral(index) {
      this.reg_id_porf = index;
    },

    paso4() {
      this.block[3].paso = true;
      toastr.remove();
      if (this.data.experiencia_laboral.length == 0) {
        this.alert_toastr(
          "warning",
          "¡Falta información! <br> Debes agregar por lo menos un registro",
          "Advertencia",
          8000
        );
        this.block[3].paso = false;
      } else {
        ubbj_api
          .post("registro/docente/4", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },
            id_usuario: this.data.id_usuario,
          })
          .then((response) => {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.success(response.data.message, "Experiencia profesional", {
              timeOut: 8000,
            });

            this.data.id_status = 7;
            sessionStorage.data = JSON.stringify(this.data);

            setTimeout(() => {
              document.getElementById("btn_paso5").click();
              window.scroll(0, 830);
            }, 50);
          })
          .catch((e) => {
            this.block[3].paso = false;
          });
      }
    },

    add_experiencia_comunidad() {
      ubbj_api
        .post("registro/docente/agregar/tcomunidad", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_usuario: this.data.id_usuario,
          lugar: this.nuevo_trabajo_comunidad.lugar,
          actividad: this.nuevo_trabajo_comunidad.actividad,
          fecha: this.nuevo_trabajo_comunidad.fecha,
          institucion: this.nuevo_trabajo_comunidad.institucion,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia en comunidad", {
            timeOut: 8000,
          });
          this.get_comunidad();
        })
        .catch((e) => { });
    },

    get_comunidad() {
      ubbj_api
        .post("mostrar/tcomunidad", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.data.trabajo_comunidad = response.data.trabajos_comunidad;
        })
        .catch((e) => { });
    },

    update_comunidad() {
      this.inputs_paso5[0].class_input = "form-control ";
      this.inputs_paso5[0].text_error = "";
      this.inputs_paso5[1].class_input = "form-control ";
      this.inputs_paso5[1].text_error = "";
      this.inputs_paso5[2].class_input = "form-control ";
      this.inputs_paso5[2].text_error = "";
      this.inputs_paso5[3].class_input = "form-control ";
      this.inputs_paso5[3].text_error = "";
      ubbj_api
        .post("actualizar/tcomunidad", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_trabajo_comunidad:
            this.nuevo_trabajo_comunidad.id_trabajo_comunidad,
          id_usuario: this.data.id_usuario,
          lugar: this.nuevo_trabajo_comunidad.lugar,
          actividad: this.nuevo_trabajo_comunidad.actividad,
          fecha: this.nuevo_trabajo_comunidad.fecha,
          institucion: this.nuevo_trabajo_comunidad.institucion,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(
            response.data.message,
            "Experiencia en comunidad actualizada",
            { timeOut: 8000 }
          );
          this.get_comunidad();
        })
        .catch((e) => { });
    },

    editar_experiencia_comunidad(index) {
      toastr.remove();
      this.inputs_paso5[0].class_input = "form-control ";
      this.inputs_paso5[0].text_error = "";
      this.inputs_paso5[1].class_input = "form-control ";
      this.inputs_paso5[1].text_error = "";
      this.inputs_paso5[2].class_input = "form-control ";
      this.inputs_paso5[2].text_error = "";
      this.inputs_paso5[3].class_input = "form-control ";
      this.inputs_paso5[3].text_error = "";

      this.nuevo_trabajo_comunidad.id_trabajo_comunidad =
        this.data.trabajo_comunidad[index].id_trabajo_comunidad;
      this.nuevo_trabajo_comunidad.actividad =
        this.data.trabajo_comunidad[index].actividad;
      this.nuevo_trabajo_comunidad.lugar =
        this.data.trabajo_comunidad[index].lugar;
      this.nuevo_trabajo_comunidad.fecha =
        this.data.trabajo_comunidad[index].fecha;
      this.nuevo_trabajo_comunidad.institucion =
        this.data.trabajo_comunidad[index].institucion;
      this.tipo_accion_trabajo_comunidad = "Editar";
      this.index_trabajo_comunidad = index;
    },

    delete_comunidad() {
      ubbj_api
        .post("eliminar/tcomunidad", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_trabajo_comunidad: this.reg_id_comunidad,
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia en comunidad", {
            timeOut: 8000,
          });
          this.get_comunidad();
        })
        .catch((e) => { });
    },

    eliminar_experiencia_comunidad(index) {
      this.reg_id_comunidad = index;
    },

    paso5() {
      this.block[4].paso = true;
      ubbj_api
        .post("registro/docente/5", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.alert_toastr(
            "success",
            response.data.message,
            "Formación profesional",
            8000
          );

          this.data.id_status = 8;
          sessionStorage.data = JSON.stringify(this.data);

          setTimeout(() => {
            document.getElementById("btn_paso6").click();
            window.scroll(0, 830);
          }, 50);
        })
        .catch((e) => {
          this.block[4].paso = false;
        });
    },

    add_experiencia_academica() {
      ubbj_api
        .post("registro/docente/agregar/eacademica", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_usuario: this.data.id_usuario,
          cursos: this.nuevo_experiencia_academica.cursos,
          institucion: this.nuevo_experiencia_academica.institucion,
          fecha_inicio: this.nuevo_experiencia_academica.fecha_inicio,
          fecha_fin: this.nuevo_experiencia_academica.fecha_fin,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia académica", {
            timeOut: 8000,
          });
          this.get_academica();
        })
        .catch((e) => { });
    },

    get_academica() {
      ubbj_api
        .post("mostrar/eacademica", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.data.experiencia_academica = response.data.experiencia_academica;
        })
        .catch((e) => { });
    },

    update_academica() {
      this.inputs_paso6[0].class_input = "form-control ";
      this.inputs_paso6[0].text_error = "";
      this.inputs_paso6[1].class_input = "form-control ";
      this.inputs_paso6[1].text_error = "";
      this.inputs_paso6[2].class_input = "form-control ";
      this.inputs_paso6[2].text_error = "";
      this.inputs_paso6[3].class_input = "form-control ";
      this.inputs_paso6[3].text_error = "";
      ubbj_api
        .post("actualizar/eacademica", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_experiencia_academica:
            this.nuevo_experiencia_academica.id_experiencia_academica,
          id_usuario: this.data.id_usuario,
          cursos: this.nuevo_experiencia_academica.cursos,
          institucion: this.nuevo_experiencia_academica.institucion,
          fecha_inicio: this.nuevo_experiencia_academica.fecha_inicio,
          fecha_fin: this.nuevo_experiencia_academica.fecha_fin,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia académica", {
            timeOut: 8000,
          });
          this.get_academica();
          this.tipo_accion_experiencia_academica = "Agregar";
        })
        .catch((e) => { });
    },

    editar_experiencia_academica(index) {
      this.inputs_paso6[0].class_input = "form-control ";
      this.inputs_paso6[0].text_error = "";
      this.inputs_paso6[1].class_input = "form-control ";
      this.inputs_paso6[1].text_error = "";
      this.inputs_paso6[2].class_input = "form-control ";
      this.inputs_paso6[2].text_error = "";
      this.inputs_paso6[3].class_input = "form-control ";
      this.inputs_paso6[3].text_error = "";

      this.nuevo_experiencia_academica.id_experiencia_academica =
        this.data.experiencia_academica[index].id_experiencia_academica;
      this.nuevo_experiencia_academica.cursos =
        this.data.experiencia_academica[index].cursos;
      this.nuevo_experiencia_academica.institucion =
        this.data.experiencia_academica[index].institucion;
      this.nuevo_experiencia_academica.fecha_inicio =
        this.data.experiencia_academica[index].fecha_inicio;
      this.nuevo_experiencia_academica.fecha_fin =
        this.data.experiencia_academica[index].fecha_fin;
      this.tipo_accion_experiencia_academica = "Editar";
      this.index_experiencia_academica = index;
    },

    delete_academica() {
      toastr.remove();
      ubbj_api
        .post("eliminar/eacademica", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_experiencia_academica: this.reg_id_Academia,
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Experiencia académica", {
            timeOut: 8000,
          });
          this.get_academica();
          this.inputs_paso6[0].class_input = "form-control ";
          this.inputs_paso6[0].text_error = "";
          this.inputs_paso6[1].class_input = "form-control ";
          this.inputs_paso6[1].text_error = "";
          this.inputs_paso6[2].class_input = "form-control ";
          this.inputs_paso6[2].text_error = "";
          this.inputs_paso6[3].class_input = "form-control ";
          this.inputs_paso6[3].text_error = "";
        })
        .catch((e) => { });
    },

    eliminar_experiencia_academica(index) {
      this.reg_id_Academia = index;
    },

    paso6() {
      this.block[5].paso = true;
      ubbj_api
        .post("registro/docente/6", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.alert_toastr(
            "success",
            response.data.message,
            " Experiencia académica",
            8000
          );

          this.data.id_status = 9;
          sessionStorage.data = JSON.stringify(this.data);

          setTimeout(() => {
            document.getElementById("btn_paso7").click();
            window.scroll(0, 830);
          }, 50);
        })
        .catch((e) => {
          this.block[5].paso = false;
        });
    },

    add_experiencia_investigacion() {
      ubbj_api
        .post("registro/docente/agregar/investigacion", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_usuario: this.data.id_usuario,
          nombre_proyecto: this.nuevo_trabajos_investigacion.nombre_proyecto,
          resultados: this.nuevo_trabajos_investigacion.resultados,
          institucion: this.nuevo_trabajos_investigacion.institucion,
          fecha_inicio: this.nuevo_trabajos_investigacion.fecha_inicio,
          fecha_fin: this.nuevo_trabajos_investigacion.fecha_fin,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Investigación", {
            timeOut: 8000,
          });
          this.get_investigacion();
        })
        .catch((e) => { });
    },

    get_investigacion() {
      ubbj_api
        .post("mostrar/investigacion", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          this.data.trabajos_investigacion =
            response.data.trabajos_investigacion;
        })
        .catch((e) => { });
    },

    editar_trabajo_investigacion(index) {
      this.inputs_paso7[0].class_input = "form-control ";
      this.inputs_paso7[0].text_error = "";
      this.inputs_paso7[1].class_input = "form-control ";
      this.inputs_paso7[1].text_error = "";
      this.inputs_paso7[2].class_input = "form-control ";
      this.inputs_paso7[2].text_error = "";
      this.inputs_paso7[3].class_input = "form-control ";
      this.inputs_paso7[3].text_error = "";
      this.inputs_paso7[4].class_input = "form-control ";
      this.inputs_paso7[4].text_error = "";

      this.nuevo_trabajos_investigacion.id_investigacion_docente =
        this.data.trabajos_investigacion[index].id_investigacion_docente;
      this.nuevo_trabajos_investigacion.nombre_proyecto =
        this.data.trabajos_investigacion[index].nombre_proyecto;
      this.nuevo_trabajos_investigacion.resultados =
        this.data.trabajos_investigacion[index].resultados;
      this.nuevo_trabajos_investigacion.institucion =
        this.data.trabajos_investigacion[index].institucion;
      this.nuevo_trabajos_investigacion.fecha_inicio =
        this.data.trabajos_investigacion[index].fecha_inicio;
      this.nuevo_trabajos_investigacion.fecha_fin =
        this.data.trabajos_investigacion[index].fecha_fin;
      this.tipo_accion_trabajo_investigacion = "Editar";
      this.index_trabajo_investigacion = index;
    },

    update_investigacion() {
      ubbj_api
        .post("actualizar/investigacion", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_investigacion_docente:
            this.nuevo_trabajos_investigacion.id_investigacion_docente,
          id_usuario: this.data.id_usuario,
          nombre_proyecto: this.nuevo_trabajos_investigacion.nombre_proyecto,
          resultados: this.nuevo_trabajos_investigacion.resultados,
          institucion: this.nuevo_trabajos_investigacion.institucion,
          fecha_inicio: this.nuevo_trabajos_investigacion.fecha_inicio,
          fecha_fin: this.nuevo_trabajos_investigacion.fecha_fin,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Investigación", {
            timeOut: 8000,
          });
          this.get_investigacion();
          this.tipo_accion_trabajo_investigacion = "Agregar";
        })
        .catch((e) => { });
    },

    eliminar_trabajo_investigacion(index) {
      this.reg_id_Investigacion = index;
    },

    delete_investigacion() {
      ubbj_api
        .post("eliminar/investigacion", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },

          id_investigacion_docente: this.reg_id_Investigacion,
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Investigación", {
            timeOut: 8000,
          });
          this.get_investigacion();

          this.inputs_paso7[0].class_input = "form-control ";
          this.inputs_paso7[0].text_error = "";
          this.inputs_paso7[1].class_input = "form-control ";
          this.inputs_paso7[1].text_error = "";
          this.inputs_paso7[2].class_input = "form-control ";
          this.inputs_paso7[2].text_error = "";
          this.inputs_paso7[3].class_input = "form-control ";
          this.inputs_paso7[3].text_error = "";
          this.inputs_paso7[4].class_input = "form-control ";
          this.inputs_paso7[4].text_error = "";
        })
        .catch((e) => { });
    },

    paso7() {
      this.block[6].paso = true;
      ubbj_api
        .post("registro/docente/7", {
          headers: {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods":
              "GET, POST, PATCH, PUT, DELETE, OPTIONS",
            "Access-Control-Allow-Headers":
              "Origin, Content-Type, X-Auth-Token",
          },
          id_usuario: this.data.id_usuario,
        })
        .then((response) => {
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(response.data.message, "Formación profesional", {
            timeOut: 8000,
          });

          this.data.id_status = 10;
          sessionStorage.data = JSON.stringify(this.data);

          setTimeout(() => {
            document.getElementById("btn_paso8").click();
            window.scroll(0, 830);
          }, 50);
        })
        .catch((e) => {
          this.block[6].paso = false;
        });
    },

    paso8_send() {
      toastr.remove();
      this.block[7].paso = true;
      if (
        this.data.trabajo_extra == null &&
        this.data.movilidad == null &&
        this.lengua_originaria == "" &&
        this.data.disponibilidad === "" &&
        this.data.lengua_desc == ""
      ) {
        this.alert_toastr(
          "warning",
          "¡Falta información! <br> Debes seleccionar la sede y carrera",
          "Advertencia",
          8000
        );
        this.block[7].paso = false;
        this.paso2[5].error = "red";
        this.paso2[6].error = "red";
        this.paso2[7].error = "red";
        this.paso2[9].error = "red";
        if (this.data.lengua_originaria) {
          this.paso2[8].error = "red";
          this.inputs[15].class_input = "form-control is-invalid";
          this.inputs[15].text_error = "Escribe tu lengua originaria";
          this.block[7].paso = false;
        }
      } else {
        if (this.data.trabajo_extra == null) {
          this.paso2[9].error = "red";
        } else {
          this.paso2[9].error = "black";
        }

        if (this.data.movilidad == null) {
          this.paso2[6].error = "red";
        } else {
          this.paso2[6].error = "black";
        }

        if (this.data.lengua_originaria == null) {
          this.paso2[7].error = "red";
        } else {
          this.paso2[7].error = "black";
        }

        if (this.data.disponibilidad == "") {
          this.paso2[5].error = "red";
        } else {
          this.paso2[5].error = "black";
        }

        if (this.data.lengua_originaria && this.data.lengua_desc == "") {
          this.paso2[8].error = "red";
          this.inputs[15].class_input = "form-control is-invalid";
          this.inputs[15].text_error = "Escribe tu lengua originaria";
        } else {
          this.paso2[8].error = "black";
          this.inputs[15].class_input = "form-control valid";
          this.inputs[15].text_error = "";
        }

        if (
          (this.paso2[8].error == "black" &&
            this.paso2[7].error == "black" &&
            this.paso2[6].error == "black" &&
            this.paso2[5].error == "black") ||
          (this.data.lengua_originaria == "false" &&
            this.data.disponibilidad != "" &&
            this.data.movilidad != null &&
            this.data.trabajo_extra != null)
        ) {
          let movilidadR = "",
            lenguaR = "",
            trabajo_extra = "";

          if (this.data.trabajo_extra === "true") {
            trabajo_extra = 1;
          } else {
            trabajo_extra = 0;
          }
          if (this.data.movilidad === "true") {
            movilidadR = 1;
          } else {
            movilidadR = 0;
          }
          if (this.data.lengua_originaria === "true") {
            lenguaR = 1;
          } else {
            lenguaR = 0;
          }

          ubbj_api
            .post("registro/docente/8", {
              headers: {
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Methods":
                  "GET, POST, PATCH, PUT, DELETE, OPTIONS",
                "Access-Control-Allow-Headers":
                  "Origin, Content-Type, X-Auth-Token",
              },
              id_usuario: this.data.id_usuario,
              disponibilidad: this.data.disponibilidad,
              movilidad: movilidadR,
              trabajo_extra: trabajo_extra,
              lengua_originaria: lenguaR,
              lengua_desc: this.data.lengua_desc,
            })
            .then((response) => {
              toastr.options.progressBar = true;
              toastr.options.closeButton = true;
              toastr.success(
                response.data.message,
                "Información complementaria",
                { timeOut: 8000 }
              );

              this.data.id_status = 15;
              sessionStorage.data = JSON.stringify(this.data);

              setTimeout(() => {
                document.getElementById("btn_paso9").click();
                window.scroll(0, 830);
              }, 50);
            })
            .catch((e) => {
              this.block[7].paso = false;
            });
        } else {
          this.block[7].paso = false;
        }
      }
    },

    obtener_estados_manual() {
      this.Estados = [];
      this.Municipio = [];
      this.Localidad = [];

      this.data.id_estado = 0;
      this.id_municipio = 0;
      this.id_localidad = 0;

      ubbj_api
        .post("estados")
        .then((response) => {
          this.id_estado = 0;
          this.id_localidad = 0;
          var ccontado = response.data.Estados.length;
          this.Localidad.push({
            id_localidad: 0,
            localidad: "Seleccione una opción",
          });
          for (let i = 1; i < ccontado; i++) {
            this.Estados.push({
              id_estado: response.data.Estados[i].id_estado,
              estado: response.data.Estados[i].estado,
            });
          }
        })
        .catch((e) => { });
    },

    obtener_municipio: function () {
      this.id_municipio = 0;
      this.id_localidad = 0;
      this.inputs[4].class_input = "form-control";
      this.inputs[4].text_error = "";
      this.inputs[5].class_input = "form-control";
      this.inputs[5].text_error = "";
      this.Municipio = [];
      this.Localidad = [];
      if (this.data.id_estado != 0) {
        ubbj_api
          .post("municipios", {
            id_estado: this.data.id_estado,
          })
          .then((response) => {
            const cantidad2 = response.data.Municipios.length;
            for (let i = 1; i < cantidad2; i++) {
              this.Municipio.push({
                id_municipio: response.data.Municipios[i].id_municipio,
                municipio: response.data.Municipios[i].municipio,
              });
            }
          })
          .catch((e) => { });
      } else {
        this.Municipio = [];
        this.Localidad = [];
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

            for (let i = 1; i < cantidad2; i++) {
              this.Localidad.push({
                id_localidad: response.data.Localidades[i].id_localidad,
                localidad: response.data.Localidades[i].localidad,
              });
            }
          })
          .catch((e) => { });
      } else {
        this.Localidad = [];
        this.id_localidad = 0;
      }
    },

    obtener_cp: function (tipo) {
      this.Localidad = [];
      if (
        tipo == "manual" ||
        (tipo == "normal" &&
          this.inputs[2].text_error ==
          "No se encontró ningun resultado para el Código postal proporcionado.")
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
              "No se encontró ningun resultado para el Código postal proporcionado.";
            this.obtener_estados_manual();
            this.search2 = true;
          } else {
            ubbj_api
              .post("cp", {
                cp: this.data.codigo_postal,
              })
              .then((response) => {
                if (
                  response.data.message ==
                  "No se encontró ningun resultado para el Código postal proporcionado."
                ) {
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

                  for (let i = 0; i < cantidad; i++) {
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
              .catch((e) => { });
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

    obtener_estados() {
      this.Estados = [];
      this.municipio = [];
      this.localidad = [];
      this.data.id_estado = 0;

      ubbj_api
        .post("estados")
        .then((response) => {
          $("#municipioManual").html("");
          $("#localidadManual").html("");
          this.id_municipio = 0;
          $("#municipioManual").html(
            "<option value=0  selected>Selecciona una opción</option>"
          );
          this.id_localidad = 0;
          var ccontado = response.data.Estados.length;
          this.Estados.push({
            id_estado: 0,
            estado: "Selecciona una opción",
          });
          this.Localidad.push({
            id_localidad: 0,
            localidad: "Selecciona una opción",
          });
          for (let i = 1; i < ccontado; i++) {
            this.Estados.push({
              id_estado: response.data.Estados[i].id_estado,
              estado: response.data.Estados[i].estado,
            });
          }
        })
        .catch((e) => { });
    },

    enviar_solicitud: function (e) {
      this.block[8].paso = true;
      toastr.remove();
      e.preventDefault();
      if (
        this.data.doc_CartaMotivos != "" ||
        this.data.doc_actaNacimiento != "" ||
        this.data.doc_comprobanteDomicilio != "" ||
        this.data.doc_curp != "" ||
        this.data.doc_expProfesional != "" ||
        this.data.doc_formacionProfesional != "" ||
        this.data.doc_identificacion != "" ||
        this.data.doc_rfc != "" ||
        this.data.fotografia != ""
      ) {
        ubbj_api
          .post("registro/docente/10", {
            headers: {
              "Access-Control-Allow-Origin": "*",
              "Access-Control-Allow-Methods":
                "GET, POST, PATCH, PUT, DELETE, OPTIONS",
              "Access-Control-Allow-Headers":
                "Origin, Content-Type, X-Auth-Token",
            },

            id_usuario: this.data.id_usuario,
          })
          .then((response) => {
            (toastr.options.showDuration = "300"),
              (toastr.options.hideDuration = "1000"),
              (toastr.options.timeOut = 0),
              (toastr.options.positionClass = "toast-top-full-width"),
              toastr.success(
                '<p style="text-align: justify;text-justify: inter-word">Haz concluido tu solicitud de registro en la convocatoria para aspirantes a docente de las Universidades para el Bienestar Benito Juárez García. Sus datos han sido enviados a la Comisión Interna para su evaluación. Consulte las notificaciones en su correo electrónico para el seguimiento de su trámite o consulte los resultados en la página oficial.</p> <button style="float:right; color:black" type="button" class="btn clear">Aceptar</button> ',
                "<h5>Registro completado</h5>"
              );
            this.data.id_status = 17;
            sessionStorage.data = JSON.stringify(this.data);
          })
          .catch((e) => {
            this.block[8].paso = false;
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "Ocurrió un problema, por el momento no es posible guardar la información",
              "Advertencia",
              { timeOut: 10000 }
            );
          });
      } else {
        this.block[8].paso = false;
        this.alert_toastr(
          "warning",
          "¡Falta información! <br> Debes cargar al menos un documento o fotografía",
          "Advertencia",
          8000
        );
      }
    },
  },
};
</script>

<template>
  <div class="row mt-5" style="margin: 0px; padding: 0px" v-if="data">
    <div class="col-md-11 offset-md-1 text-left">
      <div class="opciones mb-3">
        <a @click="redirigir('/')"><i class="fas fa-home"></i> Inicio</a>
        <i class="ml-1 fas fa-chevron-right"></i>
        <a @click="redirigir('/')" class="ml-1"><i class="ml-1 fas fa-calendar-alt"></i> Registro de convocatoria</a>
        <i class="ml-1 fas fa-chevron-right"></i>
        <a class="ml-1"><i class="fas fa-address-card"></i> Registro de solicitud para
          aspirante a docente</a>
      </div>

      <div style="width: 91%" class="leyendaprincipal">
        <h1 class="txt-md-x1">
          Registro de solicitud para aspirante a docente
        </h1>
        <hr class="red" />
        <div class="alert alert-info">
          <strong>Completa los siguientes formularios para registrarte como aspirante
            a docente en esta convocatoria</strong>
        </div>
      </div>
    </div>

    <div style="width: 91%" class="col-md-11 offset-md-1 mt-5">
      <ul class="wizard-steps text-left">
        <li id="btn_paso1" :class="{ 'hand completed': data.id_status >= 1 }" data-toggle="collapse" data-target="paso1"
          @click="activate_sttepers(1)">
          <h5>Paso 1</h5>
          <span>Datos personales</span>
        </li>
        <li id="btn_paso2" :class="{ 'hand completed': data.id_status >= 4 }" data-toggle="collapse"
          data-target="pasos2" @click="activate_sttepers(4)">
          <h5>Paso 2</h5>
          <span>Formación profesional</span>
        </li>
        <li id="btn_paso3" :class="{ 'hand completed': data.id_status >= 5 }" data-toggle="collapse"
          data-target="pasos3" @click="activate_sttepers(5)">
          <h5>Paso 3</h5>
          <span>Área de conocimiento</span>
        </li>
        <li id="btn_paso4" :class="{ 'hand completed': data.id_status >= 6 }" data-toggle="collapse"
          data-target="pasos4" @click="activate_sttepers(6)">
          <h5>Paso 4</h5>
          <span>Experiencia profesional</span>
        </li>
        <li id="btn_paso5" :class="{ 'hand completed': data.id_status >= 7 }" data-toggle="collapse"
          data-target="pasos5" @click="activate_sttepers(7)">
          <h5>Paso 5</h5>
          <span>Trabajo en comunidad</span>
        </li>
      </ul>
      <ul style="margin-top: -15px" class="wizard-steps text-left">
        <li id="btn_paso6" :class="{ 'hand completed': data.id_status >= 8 }" data-toggle="collapse"
          data-target="pasos6" @click="activate_sttepers(8)">
          <h5>Paso 6</h5>
          <span>Experiencia académica</span>
        </li>
        <li id="btn_paso7" :class="{ 'hand completed': data.id_status >= 9 }" data-toggle="collapse"
          data-target="pasos7" @click="activate_sttepers(9)">
          <h5>Paso 7</h5>
          <span>Investigación</span>
        </li>
        <li id="btn_paso8" :class="{ 'hand completed': data.id_status >= 10 }" data-toggle="collapse"
          data-target="pasos8" @click="activate_sttepers(10)">
          <h5>Paso 8</h5>
          <span>Información complementaria</span>
        </li>
        <li id="btn_paso9" :class="{
          'hand completed':
            data.id_status === 15 ||
            data.id_status === 16 ||
            data.id_status === 17,
        }" data-toggle="collapse" data-target="pasos9" @click="activate_sttepers(15)">
          <h5>Paso 9</h5>
          <span>Documentos del expediente</span>
        </li>
        <li aria-expanded="false" :class="{ success: data.id_status == 16 || data.id_status == 17 }">
          <h5>Completado</h5>
          <span>&nbsp</span>
        </li>
      </ul>
    </div>

    <ModalAction v-on:delelte_formacion="delete_cargos_academicos" borrado="delelte_formacion" id="expFormacion"
      title="Eliminar formación profesional"
      question="¿Está seguro que quiere eliminar esta 'Formación profesional?' '" />

    <ModalAction v-on:noInteres="no_interes" borrado="noInteres" id="expSede"
      title="Confirmo que mi formación profesional no es requerida en la presente Convocatoria"
      question="¿Está seguro de que quiere continuar?" />

    <ModalAction v-on:experiencia="delete_experiencia" borrado="experiencia" id="expProf"
      title="Eliminar experiencia profesional"
      question=" ¿Está seguro que quiere eliminar esta 'Experiencia profesional' ?" />

    <ModalAction v-on:comunidad="delete_comunidad" borrado="comunidad" id="expComunidad"
      title="Eliminar experiencia de trabajo en comunidad" question=' ¿Está seguro que quiere eliminar esta "Experiencia de trabajo en
              comunidad"?' />

    <ModalAction v-on:academica="delete_academica" borrado="academica" id="expAcademia"
      title="Eliminar experiencia académica"
      question="¿Está seguro que quiere eliminar esta 'Experiencia académica'?" />

    <ModalAction v-on:investigacion="delete_investigacion" borrado="investigacion" id="expInvestigacion"
      title="Eliminar experiencia de investigación" question='¿Está seguro que quiere eliminar esta "Experiencia de
              investigación"?' />

    <!--card espaces-->
    <div class="col-md-11 offset-md-1">
      <!-- CONTENEDORES de wizard -->
      <div id="accordion" style="width: 91%">
        <div class="card">
          <!--card 1-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <!--Paso 1"-->
              <div v-if="viewSteper == 1" id="paso1" class="collapse" :class="{ show: viewSteper == 1 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body">
                  <div class="text-left">
                    <form role="form">
                      <div class="form-group">
                        <div class="row" style="margin-top: 20px">
                          <div class="col-md-12">
                            <h4><strong>Datos personales</strong></h4>
                            <hr class="red" />
                          </div>

                          <div class="col-md-4">
                            <label class="control-label" for="curp">CURP:</label>
                            <input disabled class="form-control" id="curpD" type="text" v-model="data.CURP" />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="nombre">Nombre(s):</label>
                            <input disabled class="form-control" id="nombre" type="text" v-model="data.nombre" />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="primer_a">Primer apellido:</label>
                            <input disabled class="form-control" id="primer_a" type="text" v-model="data.apaterno" />
                          </div>
                        </div>

                        <div class="row" style="margin-top: 20px">
                          <div class="col-md-4">
                            <label class="control-label" for="segundo_a">Segundo apellido:</label>
                            <input disabled class="form-control" id="segundo_a" type="text" v-model="data.amaterno" />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="email">Correo electrónico:</label>
                            <input disabled class="form-control" id="email" type="text" v-model="data.email" />
                          </div>
                          <div class="col-md-4">
                            <label class="control-label" for="telefono_contacto">Teléfono de contacto:</label>
                            <input disabled class="form-control" id="telefono_contacto" type="text"
                              v-model="data.telefono" />
                          </div>
                        </div>
                      </div>

                      <div class="row" style="margin-top: 20px">
                        <div class="col-md-4">
                          <label class="control-label" for="telefono_contacto_alterno">Teléfono de contacto alterno
                            <span :class="[
                              inputs[0].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <input :disabled="data.id_status > 1" :class="inputs[0].class_input"
                            id="telefono_contacto_alterno" type="text" placeholder="Ingresa tu número telefónico"
                            :maxlength="max_num_alter" v-model="data.telfono_alt" @keyup="validacion_input('tel_alt')"
                            required v-on:keypress="keyNum($event)" />
                          <div class="invalid-feedback">
                            {{ inputs[0].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label" for="correo">Correo electrónico alterno
                            <span :class="[
                              inputs[1].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <input :disabled="data.id_status > 1" :class="inputs[1].class_input" id="correo" type="email"
                            placeholder="Ingresa tu correo electrónico" :maxlength="max_estandar"
                            v-model="data.email_alt" @keyup="validacion_input('email_alt')" required
                            v-on:keypress="keyEmail($event)" />
                          <div class="invalid-feedback">
                            {{ inputs[1].text_error }}
                          </div>
                        </div>
                      </div>

                      <div class="row espacio">
                        <div class="col-md-12 espacio">
                          <h4><strong>Domicilio</strong></h4>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label" for="cp">Código postal
                            <span :class="[
                              inputs[2].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <div class="input-group">
                            <input placeholder="Ingresa tu código postal" :disabled="
                              data.id_status > 1 ||
                              search == true ||
                              search2 == true
                            " :maxlength="max_cp" :class="inputs[2].class_input" id="cp" type="text"
                              v-model="data.codigo_postal" @keyup="validacion_input('cp')"
                              v-on:keypress="keyNum($event)" />
                            <div class="input-group-append">
                              <span v-if="!search2" class="hand input-group-text" @click="obtener_cp('normal')">
                                <i :class="[
                                  search ? 'fa fa-undo-alt' : 'fa fa-search',
                                ]" aria-hidden="true"></i></span>
                              <span v-if="search2" class="hand input-group-text" @click="obtener_cp('manual')">
                                <i :class="[
                                  search2 ? 'fa fa-undo-alt' : 'fa fa-search',
                                ]" aria-hidden="true"></i></span>
                            </div>
                            <div class="invalid-feedback">
                              {{ inputs[2].text_error }}
                            </div>
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label" for="curp">Estado
                            <span class="black">*</span>
                            :</label>
                          <input v-if="!search2" disabled :class="inputs[3].class_input" type="text"
                            v-model="data.estado" />
                          <select hidden id="estado_domicilio" v-model="data.id_estado">
                            <option v-for="(item, index) of Estados" :value="item.id">
                              {{ item.estado }}
                            </option>
                          </select>
                          <select :disabled="data.id_status > 1" v-if="search2" :class="inputs[3].class_input"
                            v-model="data.id_estado" id="estadoManual" @change="
  validacion_input('edo_manual');
obtener_municipio();
                            ">
                            <option value="0">Seleccione una opción</option>
                            <option v-for="(item, index) of Estados" :value="item.id_estado">
                              {{ item.estado }}
                            </option>
                          </select>
                          <div class="invalid-feedback">
                            {{ inputs[3].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label" for="nombre">Municipio * :</label>
                          <input v-if="!search2" disabled :class="inputs[4].class_input" type="text"
                            v-model="data.municipio" />
                          <select hidden id="municipio_domicilio" v-model="data.id_municipio">
                            <option value="0" selected>
                              Seleccione una opción
                            </option>
                            <option v-for="(item, index) of Municipio" :value="item.id">
                              {{ item.municipio }}
                            </option>
                          </select>
                          <select :disabled="data.id_status > 1" v-if="search2" :class="inputs[4].class_input"
                            v-model="id_municipio" id="municipioManual" @change="
  validacion_input('mun_manual');
obtener_localidad();
                            ">
                            <option value="0" selected>
                              Seleccione una opción
                            </option>
                            <option v-for="(item, index) of Municipio" :value="item.id_municipio">
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
                          <label class="control-label" for="cp">Localidad
                            <span :class="[
                              inputs[5].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <input disabled :hidden="data.localidad == ''" :class="inputs[4].class_input" type="text"
                            v-model="data.localidad" />
                          <select v-if="!search2" :hidden="data.id_status > 1" disabled :class="inputs[5].class_input"
                            id="localidad_domicilio" @change="validacion_input('localidad')"
                            v-model="data.id_localidad">
                            <option v-for="(item, index) of Localidad" :value="item.id">
                              {{ item.localidad }}
                            </option>
                          </select>
                          <select :disabled="data.id_status > 1" v-if="search2" :class="inputs[5].class_input"
                            v-model="id_localidad" id="localidadManual" @change="validacion_input('loc_manual')">
                            <option value="0" selected>
                              Seleccione una opción
                            </option>
                            <option v-for="(item, index) of Localidad" :value="item.id_localidad">
                              {{ item.localidad }}
                            </option>
                          </select>
                          <div class="invalid-feedback">
                            {{ inputs[5].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label" for="curp">Calle
                            <span :class="[
                              inputs[6].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <input placeholder="Ingresa la calle" :disabled="data.id_status > 1"
                            :class="inputs[6].class_input" :maxlength="max_estandar" id="calle" type="text"
                            v-model="data.calle" @keyup="validacion_input('calle')"
                            v-on:keypress="keyEstandar($event)" />
                          <div class="invalid-feedback">
                            {{ inputs[6].text_error }}
                          </div>
                        </div>
                        <div class="col-md-4">
                          <label class="control-label" for="nombre">Número exterior
                            <span :class="[
                              inputs[7].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <input placeholder="Ingresa el número exterior" :disabled="data.id_status > 1"
                            :class="inputs[7].class_input" :maxlength="max_nums" id="numInt" type="text"
                            v-model="data.num_ext" @keyup="validacion_input('num_ext')"
                            v-on:keypress="keyEstandar($event)" />
                          <div class="invalid-feedback">
                            {{ inputs[7].text_error }}
                          </div>
                        </div>
                      </div>

                      <div class="row espacio">
                        <div class="col-md-4">
                          <label class="control-label" for="cp">Número interior:
                            <span :class="[
                              inputs[10].text_error != '' ? 'red' : 'black',
                            ]">&nbsp</span>
                          </label>
                          <input placeholder="Ingresa el número interior" :disabled="data.id_status > 1"
                            :class="inputs[8].class_input" :maxlength="max_nums" id="numExt" type="text"
                            v-model="data.num_int" v-on:keypress="keyEstandar($event)" />
                        </div>
                        <div hidden class="col-md-4">
                          <label class="control-label" for="curp">País * :</label>
                          <input :disabled="data.id_status > 1" :class="inputs[9].class_input" id="pais" type="text"
                            v-model="data.pais" @keyup="validacion_input('pais')" />
                          <div class="invalid-feedback">
                            {{ inputs[9].text_error }}
                          </div>
                        </div>
                        <div class="col-md-8">
                          <label class="control-label" for="nombre">Referencias
                            <span :class="[
                              inputs[10].text_error != '' ? 'red' : 'black',
                            ]">*</span>
                            :</label>
                          <input placeholder="Ingresa las referencias" :disabled="data.id_status > 1"
                            :class="inputs[10].class_input" :maxlength="max_referencia" id="referencia" type="text"
                            v-model="data.referencias" @keyup="validacion_input('referencias')"
                            v-on:keypress="keyEstandar($event)" />
                          <div class="invalid-feedback">
                            {{ inputs[10].text_error }}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <br /><br />
                  <div :hidden="data.id_status > 1" class="espacio text-alert alert alert-info">
                    <strong>En caso de no poder concluir el llenado de los datos
                      requeridos, la información se guarda automáticamente para
                      que posteriormente puedas continuar con el proceso en el
                      paso donde te quedaste. Una vez que des guardar no se
                      puede regresar a editar, verifica que los datos sean
                      correctos antes de guardar y continuar.</strong>
                  </div>
                  <div style="margin-top: 20px; margin-bottom: 20px; float: right">
                    <button :disabled="block[0].paso" :hidden="data.id_status > 1" id="send_datos_personales"
                      class="btn btn-primary pull-right" type="submit" @click="send_datos_personales()">
                      Guardar y continuar
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 2-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <!--PASO 2-->
              <div v-if="viewSteper == 4" id="paso2" class="collapse" :class="{ show: viewSteper == 4 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio text-left">
                  <h4><strong>Formación profesional</strong></h4>
                  <button hidden id="btnAction" @click="activateReg()"></button>
                  <button hidden id="block1" @click="activateTitulo()"></button>
                  <button hidden id="block2" @click="activateCedula()"></button>
                  <hr class="red" />
                  <div class="row espacio">
                    <div class="row">
                      <div class="col-md-12">
                        <br />
                        <div class="col-md-12" id="panel" style="width: 100%">
                          <div class="card" :hidden="data.id_status > 4">
                            <div class="card-body">
                              <div class="panel-body row espacio">
                                <div class="col-md-4">
                                  <label class="control-label" for="paso2_grado">Grado académico
                                    <span v-if="inputs_paso2[0].text_error != ''" class="red">*</span>
                                    :</label>
                                  <select v-if="data.formacion_profesional" :disabled="
                                    ejecutando == 'true' ||
                                    data.formacion_profesional.length > 2 ||
                                    tipo_accion_formacion_profesional ==
                                    'Editar' ||
                                    data.formacion_profesional.length == 0
                                  " :class="{
  'form-control':
    inputs_paso2[0].text_error == '',
  'form-control is-invalid':
    inputs_paso2[0].text_error != '',
}" v-model="
  nuevo_formacion_profesional.grado_academico
" id="paso2_grado" @change="validacion_input('paso2_grado')">
                                    <option v-for="item of opciones_formacion" :value="item.value">
                                      {{ item.text }}
                                    </option>
                                  </select>
                                  <div class="invalid-feedback">
                                    {{ inputs_paso2[0].text_error }}
                                  </div>
                                </div>

                                <div class="col-md-4">
                                  <label class="control-label" for="paso2_fechaEgreso_new">Fecha de titulación
                                    <span v-if="inputs_paso2[2].text_error != ''" class="red">*</span>
                                    :</label>
                                  <input :disabled="
                                    ejecutando == 'true' || data.id_status > 4
                                  " :class="{
  'form-control':
    inputs_paso2[2].text_error == '',
  'form-control is-invalid':
    inputs_paso2[2].text_error != '',
}" v-model="
  nuevo_formacion_profesional.periodo_salida
" type="date" id="paso2_fechaEgreso_new" @click="establecer_fecha('f20')"
                                    @change="validacion_input('paso2_fechafin')" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso2[2].text_error }}
                                  </div>
                                </div>

                                <div class="col-md-4">
                                  <label class="control-label" for="carrera_area_formacion">Carrera
                                    <span v-if="inputs_paso2[3].text_error != ''" class="red">*</span>
                                    :</label>
                                  <input @paste.prevent :maxlength="max_estandar" :disabled="
                                    ejecutando == 'true' || data.id_status > 4
                                  " :class="{
  'form-control':
    inputs_paso2[3].text_error == '',
  'form-control is-invalid':
    inputs_paso2[3].text_error != '',
}" placeholder="Ingresa tu carrera" v-on:keypress="keyEstandar($event)" v-model="
  nuevo_formacion_profesional.carrera
" id="carrera_area_formacion" type="text" @keyup="validacion_input('paso2_carrera')" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso2[3].text_error }}
                                  </div>
                                </div>
                                <div class="col-md-12"><br /></div>

                                <div class="col-md-4">
                                  <label class="control-label" for="institutcion_formacion">Institución
                                    <span v-if="inputs_paso2[4].text_error != ''" class="red">*</span>
                                    :</label>
                                  <input @paste.prevent :maxlength="max_referencia" :disabled="
                                    ejecutando == 'true' || data.id_status > 4
                                  " :class="{
  'form-control':
    inputs_paso2[4].text_error == '',
  'form-control is-invalid':
    inputs_paso2[4].text_error != '',
}" placeholder="Ingresa la institución" v-on:keypress="keyEstandar($event)" v-model="
  nuevo_formacion_profesional.institucion
" id="institutcion_formacion" type="text" @keyup="
  validacion_input('paso2_institucion')
" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso2[4].text_error }}
                                  </div>
                                </div>

                                <div class="col-md-4">
                                  <label class="control-label" for="cedula_profesional">No. de cédula profesional<span
                                      v-if="inputs_paso2[5].text_error != ''" class="red">*</span>
                                    :</label>
                                  <input @paste.prevent :disabled="
                                    ejecutando == 'true' || data.id_status > 4
                                  " :class="{
  'form-control':
    inputs_paso2[5].text_error == '',
  'form-control is-invalid':
    inputs_paso2[5].text_error != '',
}" placeholder="Ingresa la cédula profesional" :maxlength="max_cedula" v-model="nuevo_formacion_profesional.cedula"
                                    id="cedula_profesional" type="text" v-on:keypress="keyNum($event)"
                                    @keyup="validacion_input('paso2_cedula')" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso2[5].text_error }}
                                  </div>
                                </div>

                                <!--abjuntar-->
                                <div class="col-md-4" :hidden="ejecutando">
                                  <label v-if="ejecutando1" style="margin-top: 6%"
                                    class="btn-folder-disabled form-control btn btn-default btn-file">
                                    <i class="fas fa-upload"></i>
                                    Enviando título
                                    <img class="icon_position_charge3" width="9%" height="9%"
                                      src="@/assets/loading3.gif" />
                                  </label>

                                  <label v-if="!ejecutando1" style="margin-top: 6%" :class="[
                                    data.id_status > 5
                                      ? 'btn-folder-disabled form-control btn btn-default btn-file'
                                      : 'btn-folder form-control btn btn-default btn-file',
                                  ]">
                                    <i :class="[
                                      data.id_status > 5
                                        ? 'fas fa-lock'
                                        : 'fas fa-folder',
                                    ]"></i>
                                    Adjuntar título
                                    <span v-if="
                                      inputs_paso2[6].class_input ==
                                      'form-control is-invalid'
                                    " class="red">*</span>
                                    <input id="paso2_titulo_file" type="file" :disabled="data.id_status > 5"
                                      accept=".pdf" style="display: none" @change="
                                        validacion_doc(
                                          'doc2_charge_paso2',
                                          'paso2_titulo_file',
                                          19,
                                          'doc_chaer22'
                                        )
                                      " />

                                    <img id="doc2_charge_paso2" style="display: none" class="icon_position_charge3"
                                      width="9%" height="9%" src="@/assets/valida.png" />

                                    <img id="doc_chaer22" style="display: none" class="icon_position_charge3" width="9%"
                                      height="9%" src="@/assets/loading3.gif" />
                                  </label>
                                  <br />

                                  <label v-if="ejecutando2" style="margin-top: 6%"
                                    class="btn-folder-disabled form-control btn btn-default btn-file">
                                    <i class="fas fa-upload"></i>
                                    Enviando cédula
                                    <img class="icon_position_charge3" width="9%" height="9%"
                                      src="@/assets/loading3.gif" />
                                  </label>
                                  <label v-if="!ejecutando2" style="margin-top: 6%; margin-rigth: 5%" :class="[
                                    data.id_status > 5
                                      ? 'btn-folder-disabled form-control btn btn-default btn-file'
                                      : 'btn-folder form-control btn btn-default btn-file',
                                  ]">
                                    <i :class="[
                                      data.id_status > 5
                                        ? 'fas fa-lock'
                                        : 'fas fa-folder',
                                    ]"></i>
                                    Adjuntar cédula
                                    <span v-if="
                                      inputs_paso2[7].class_input ==
                                      'form-control is-invalid'
                                    " class="red">*</span>
                                    <input id="paso2_cedula_file" type="file" :disabled="data.id_status > 5"
                                      accept=".pdf" style="display: none" @change="
                                        validacion_doc(
                                          'doc1_charge_paso2',
                                          'paso2_cedula_file',
                                          20,
                                          'doc1_charge2'
                                        )
                                      " />
                                    <img id="doc1_charge2" style="display: none" class="icon_position_charge3"
                                      src="@/assets/loading3.gif" />

                                    <img id="doc1_charge_paso2" style="display: none" class="icon_position_charge3"
                                      src="@/assets/valida.png" />
                                  </label>
                                </div>

                                <div class="col-md-12"><br /></div>
                                <!--btn add edit-->
                                <div class="col-md-12">
                                  <button v-if="data.formacion_profesional" :disabled="ejecutando" style="float: right"
                                    :hidden="
                                      data.formacion_profesional.length > 2 ||
                                      data.id_status > 4
                                    " class="btn btn-primary pull-right" @click="
  acciones(
    'formacion',
    tipo_accion_formacion_profesional
  )
">
                                    <span style="margin: 0px; padding: 0px">
                                      <span v-if="ejecutando">
                                        Enviando...
                                      </span>
                                      <span :hidden="ejecutando">
                                        {{ tipo_accion_formacion_profesional }}
                                      </span>
                                    </span>
                                  </button>

                                  <button v-if="
                                    data.formacion_profesional.length > 2 &&
                                    tipo_accion_formacion_profesional ==
                                    'Editar'
                                  " :disabled="
  ejecutando || ejecutando2 || ejecutando1
" style="float: right" :hidden="data.id_status > 4" class="btn btn-primary pull-right" @click="
  acciones(
    'formacion',
    tipo_accion_formacion_profesional
  )
">
                                    {{ tipo_accion_formacion_profesional }}
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-md-12">
                      <table class="table table-responsive-sm table-responsive-md table-striped">
                        <tr>
                          <th>Grado</th>
                          <th>Carrera</th>
                          <th>Institución</th>
                          <th>Fecha titulación</th>
                          <th>Cédula</th>
                          <th :hidden="
                            data.id_status > 4 ||
                            tipo_accion_formacion_profesional == 'Editar'
                          ">
                            Acciones
                          </th>
                        </tr>
                        <tr v-if="data.formacion_profesional.length == 0">
                          <td class="text-center" colspan="7">
                            Sin registros de Formación profesional
                            <hr />
                          </td>
                        </tr>

                        <tr v-for="(item, index) of data.formacion_profesional"
                          style="text-align: justify; text-justify: inter-word">
                          <td>{{ item.grado_academico }}</td>
                          <td>{{ item.carrera }}</td>
                          <td>{{ item.institucion }}</td>
                          <td>{{ item.periodo_salida }}</td>
                          <td>{{ item.cedula }}</td>
                          <td :hidden="
                            data.id_status > 4 ||
                            add_formacion == true ||
                            tipo_accion_formacion_profesional == 'Editar'
                          ">
                            <i @click="editar_formacion_profesional(index)" class="hand ml-3 fas fa-pencil-alt">
                            </i>
                            <i @click="
                              eliminar_historial(item.id_grado_academico)
                            " data-toggle="modal" data-target="#expFormacion" class="hand ml-3 fas fa-trash-alt">
                            </i>
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                  <br /><br />
                  <div :hidden="data.id_status > 4" class="espacio text-alert alert alert-info">
                    <strong>En caso de no poder concluir el llenado de los datos
                      requeridos, la información se guarda automáticamente para
                      que posteriormente puedas continuar con el proceso en el
                      paso donde te quedaste. Una vez que des guardar no se
                      puede regresar a editar, verifica que los datos sean
                      correctos antes de guardar y continuar.</strong>
                  </div>
                  <div class="col-md-12 espacio">
                    <button :disabled="block[1].paso" :hidden="data.id_status > 4" id="paso2" style="float: right"
                      class="btn btn-primary pull-right" type="submit" @click="send_paso2()">
                      Guardar y continuar
                    </button>
                    <br /><br />
                  </div>
                </div>

              </div>
            </transition>
          </div>

          <!--card 3-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 5" id="paso3" class="collapse" :class="{ show: viewSteper == 5 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio">
                  <h4>Selección de área de conocimiento</h4>
                  <hr class="red" />
                  <div class="col-md-12 col-xl-12" id="panel2">
                    <div class="row">
                      <div class="col-md-12">
                        <label :hidden="area_conocimiento == undefined" class="control-label espacio"
                          for="Institución">Área de conocimiento
                          <span v-if="inputs_paso3[0].text_error != ''" class="red">*</span>
                          :</label>
                        <textarea v-if="data.id_status > 5" class="form-control" disabled type="text"
                          v-model="areaDeConocimiento"></textarea>

                        <div class="alert alert-warning" v-if="area_conocimiento == undefined">
                          <strong>Lo sentimos, No existe espacio para el área de
                            conocimiento</strong>
                        </div>

                        <select id="selectPaso3" :hidden="
                          data.id_status > 5 || area_conocimiento == undefined
                        " :class="{
  'form-control': inputs_paso3[0].text_error == '',
  'form-control is-invalid':
    inputs_paso3[0].text_error != '',
}" v-model="areaDeConocimiento" name="areaConocimiento_paso3" @change="validacion_input('areaDeInteres')">
                          <option disabled selected value="undefined">
                            Selecciona una opción
                          </option>
                          <option v-for="(item, key) in area_conocimiento" :value="item.id_area_conocimiento">
                            {{ item.area }}
                          </option>
                        </select>
                        <div class="invalid-feedback">
                          {{ inputs_paso3[0].text_error }}
                        </div>

                        <small :hidden="
                          data.id_status > 5 || area_conocimiento == undefined
                        ">
                          Se muestra el catálogo de las áreas de conocimiento
                          requeridas para la convocatoria. Elige el área de
                          conocimiento de tu interés y que sea de acuerdo a tu
                          formación profesional.</small>
                      </div>
                    </div>
                    <br />
                    <div :hidden="
                      data.id_status > 5 || area_conocimiento == undefined
                    " class="espacio text-alert alert alert-info">
                      <strong>En caso de no poder concluir el llenado de los datos
                        requeridos, la información se guarda automáticamente
                        para que posteriormente puedas continuar con el proceso
                        en el paso donde te quedaste. Una vez que des guardar no
                        se puede regresar a editar, verifica que los datos sean
                        correctos antes de guardar y continuar.</strong>
                    </div>

                    <div :hidden="data.id_status > 5" class="col-md-12 espacio" style="padding: 0px">
                      <button :disabled="
                        area_conocimiento == undefined || block[2].paso
                      " id="paso3_guardar_continuar" style="float: right; margin-left: 10px" class="btn btn-primary"
                        type="submit" @click="paso3('Guardar')">
                        Guardar y continuar
                      </button>
                      <button id="paso3_no_interes" style="float: right" class="btn btn-primary" data-toggle="modal"
                        data-target="#expSede" type="submit">
                        No es de mi interés
                      </button>
                    </div>
                    <br />
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 4-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 6" id="paso4" class="collapse text-left" :class="{ show: viewSteper == 6 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio">
                  <h4>Experiencia profesional</h4>
                  <hr class="red" />
                  <div class="col-md-12 col-xl-12">
                    <div class="row" :hidden="data.id_status > 6">
                      <div class="col-md-12">
                        <div class="form-check">
                          <input :disabled="data.experiencia_laboral.length > 4" type="checkbox"
                            class="form-check-input" id="ultimoEmpleo" v-model="experiencia_laboral.status_empleado"
                            @click="experiencia_laboral.fecha_salida = ''" />
                          <label class="form-check-label" style="margin-left: 20px" for="ultimoEmpleo">último
                            empleo</label>
                        </div>
                        <div class="row">
                          <div class="col-md-4">
                            <div>
                              <label class="control-label espacio" for="actividad">Actividades desempeñadas
                                <span :class="[
                                  inputs_paso4[0].text_error != ''
                                    ? 'red'
                                    : 'black',
                                ]">*</span>
                                :</label>

                              <textarea :disabled="data.experiencia_laboral.length > 4"
                                :class="inputs_paso4[0].class_input" placeholder="Ingresa las actividades" v-model="
                                  experiencia_laboral.actividades_laborales
                                " id="actividad" type="text" v-on:keypress="keyEstandar($event)"
                                :maxlength="max_referencia" rows="5"
                                @keyup="validacion_input('paso4_actividad')"></textarea>
                              <div class="invalid-feedback">
                                {{ inputs_paso4[0].text_error }}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="row">
                              <div class="col-md-6">
                                <div>
                                  <label class="control-label espacio" for="Institución">Cargo
                                    <span :class="[
                                      inputs_paso4[1].text_error != ''
                                        ? 'red'
                                        : 'black',
                                    ]">*</span>
                                    :</label>
                                  <input :disabled="
                                    data.experiencia_laboral.length > 4
                                  " :class="inputs_paso4[1].class_input" placeholder="Ingresa el cargo"
                                    :maxlength="max_estandar" v-model="experiencia_laboral.cargo" id="Institución"
                                    type="text" v-on:keypress="keyEstandar($event)"
                                    @keyup="validacion_input('paso4_cargo')" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso4[1].text_error }}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div>
                                  <label class="control-label espacio" for="Institución">Institución
                                    <span :class="[
                                      inputs_paso4[2].text_error != ''
                                        ? 'red'
                                        : 'black',
                                    ]">*</span>
                                    :</label>
                                  <input :disabled="
                                    data.experiencia_laboral.length > 4
                                  " :class="inputs_paso4[2].class_input" placeholder="Ingresa la institución"
                                    :maxlength="max_referencia" v-model="experiencia_laboral.institucion"
                                    id="Institución" type="text" v-on:keypress="keyEstandar($event)" @keyup="
                                      validacion_input('paso4_institucion')
                                    " />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso4[2].text_error }}
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div class="row">
                              <div class="col-md-5">
                                <div>
                                  <label class="control-label espacio" for="periodo_inicio_paso4">Periodo
                                    <span :class="[
                                      inputs_paso4[3].text_error != ''
                                        ? 'red'
                                        : 'black',
                                    ]">*</span>
                                    :</label>
                                  <input @paste.prevent :disabled="
                                    data.experiencia_laboral.length > 4
                                  " :class="inputs_paso4[3].class_input" v-model="experiencia_laboral.fecha_ingreso"
                                    placeholder="Ingresa el año inicial del periodo" type="text"
                                    id="periodo_inicio_paso4" v-on:keypress="keyNum($event)" :maxlength="max_date"
                                    @keyup="
                                      validacion_input('paso4_periodoIni')
                                    " />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso4[3].text_error }}
                                  </div>
                                </div>
                              </div>
                              <div v-if="!experiencia_laboral.status_empleado" class="col-md-2">
                                <div>
                                  <br /><br />
                                  <div class="center">
                                    <label style="float: rigth" class="control-label espacio">Al</label>
                                  </div>
                                </div>
                              </div>

                              <div class="col-md-5" v-if="!experiencia_laboral.status_empleado">
                                <div>
                                  <label class="control-label espacio">&nbsp</label>
                                  <input @paste.prevent :disabled="
                                    data.experiencia_laboral.length > 4
                                  " :class="inputs_paso4[4].class_input" v-model="experiencia_laboral.fecha_salida"
                                    :maxlength="max_date" placeholder="Ingresa el año final del periodo" type="text"
                                    id="periodo_fin_paso4" v-on:keypress="keyNum($event)" @keyup="
                                      validacion_input('paso4_periodoFin')
                                    " />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso4[4].text_error }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-12 espacio">&nbsp</div>

                        <div class="col-md-12">
                          <button style="float: right; margin-left: 10px" :hidden="data.experiencia_laboral.length > 4"
                            class="btn btn-primary pull-right" @click="
                              acciones(
                                'experiencia_profesional',
                                tipo_accion_experiencia_laboral
                              )
                            ">
                            {{ tipo_accion_experiencia_laboral }}
                          </button>
                          <label :hidden="data.experiencia_laboral.length > 4"
                            style="float: right; margin-top: 10px">Agregar información únicamente de los últimos 5
                            años</label>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-12 espacio">&nbsp</div>

                    <div class="row">
                      <div class="col-md-12">
                        <table class="table table-responsive-sm table-responsive-md table-striped">
                          <tr>
                            <th>Actividades desempeñadas</th>
                            <th>Cargo</th>
                            <th>Institución</th>
                            <th>Periodo</th>
                            <th></th>
                            <th :hidden="
                              data.id_status > 6 ||
                              tipo_accion_experiencia_laboral == 'Editar'
                            ">
                              Acciones
                            </th>
                          </tr>
                          <tr v-if="data.experiencia_laboral.length === 0">
                            <td class="text-center" colspan="6">
                              Sin registros del historial experiencia
                              profesional
                              <hr />
                            </td>
                          </tr>

                          <tr style="
                              text-align: justify;
                              text-justify: inter-word;
                            " v-for="(item, index) of data.experiencia_laboral">
                            <td>{{ item.actividades_laborales }}</td>
                            <td>{{ item.cargo }}</td>
                            <td>{{ item.institucion }}</td>
                            <td>{{ item.fecha_ingreso }}</td>
                            <td>
                              <p v-if="
                                item.fecha_salida == undefined ||
                                item.fecha_salida == ''
                              ">
                                Actual
                              </p>
                              <p v-else>{{ item.fecha_salida }}</p>
                            </td>
                            <td :hidden="
                              data.id_status > 6 ||
                              add_experiencia_laboral == true ||
                              tipo_accion_experiencia_laboral == 'Editar'
                            ">
                              <i @click="editar_experiencia_laboral(index)" class="hand ml-3 fas fa-pencil-alt"
                                :hidden="data.experiencia_laboral.length > 4">
                              </i>
                              <i data-toggle="modal" data-target="#expProf" @click="
                                eliminar_experiencia_laboral(
                                  item.id_experiencia
                                )
                              " class="hand ml-3 fas fa-trash-alt">
                              </i>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <br /><br />

                      <div :hidden="data.id_status > 6" class="espacio text-alert alert alert-info">
                        <strong>En caso de no poder concluir el llenado de los datos
                          requeridos, la información se guarda automáticamente
                          para que posteriormente puedas continuar con el
                          proceso en el paso donde te quedaste. Una vez que des
                          guardar no se puede regresar a editar, verifica que
                          los datos sean correctos antes de guardar y
                          continuar.</strong>
                      </div>
                      <div class="col-md-12 espacio">
                        <button :disabled="block[3].paso" :hidden="data.id_status > 6" id="paso4_guardar"
                          style="float: right" class="btn btn-primary pull-right" type="submit" @click="paso4()">
                          Guardar y continuar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 5-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 7" id="paso5" class="collapse" :class="{ show: viewSteper == 7 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio">
                  <h4>Experiencia de trabajo en comunidad</h4>
                  <hr class="red" />
                  <div class="col-md-12 col-xl-12">
                    <div class="row" :hidden="data.id_status > 7">
                      <div class="col-md-12">
                        <div class="row">
                          <div class="col-md-4">
                            <div>
                              <label class="control-label espacio" for="actividad_paso5">Actividad / Resultados
                                <span :class="[
                                  inputs_paso5[0].text_error != ''
                                    ? 'red'
                                    : 'black',
                                ]">*</span>
                                :</label>
                              <textarea :disabled="data.trabajo_comunidad.length > 5"
                                :class="inputs_paso5[0].class_input" placeholder="Ingresa las actividades"
                                :maxlength="max_referencia" v-model="nuevo_trabajo_comunidad.actividad"
                                id="actividad_paso5" type="text" v-on:keypress="keyEstandar($event)" rows="5"
                                @keyup="validacion_input('paso5_actividad')"></textarea>
                              <div class="invalid-feedback">
                                {{ inputs_paso5[0].text_error }}
                              </div>
                            </div>
                          </div>
                          <div class="col-md-8">
                            <div class="row">
                              <div class="col-md-6">
                                <div>
                                  <label class="control-label espacio" for="lugar_paso5">Lugar
                                    <span :class="[
                                      inputs_paso5[1].text_error != ''
                                        ? 'red'
                                        : 'black',
                                    ]">*</span>
                                    :</label>
                                  <input :disabled="
                                    data.trabajo_comunidad.length > 5
                                  " :class="inputs_paso5[1].class_input" placeholder="Ingresa el lugar"
                                    v-model="nuevo_trabajo_comunidad.lugar" id="lugar_paso5" :maxlength="max_referencia"
                                    type="text" v-on:keypress="keyEstandar($event)"
                                    @keyup="validacion_input('paso5_lugar')" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso5[1].text_error }}
                                  </div>
                                </div>
                              </div>
                              <div class="col-md-6">
                                <div>
                                  <label class="control-label espacio" for="Institución">Organización / Institución
                                    <span :class="[
                                      inputs_paso5[2].text_error != ''
                                        ? 'red'
                                        : 'black',
                                    ]">*</span>
                                    :</label>
                                  <input :disabled="
                                    data.trabajo_comunidad.length > 5
                                  " :class="inputs_paso5[2].class_input"
                                    placeholder="Ingresa la organización / institución" v-model="
                                      nuevo_trabajo_comunidad.institucion
                                    " id="Institución" type="text" :maxlength="max_referencia"
                                    v-on:keypress="keyEstandar($event)" @keyup="
                                      validacion_input('paso5_organizacion')
                                    " />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso5[2].text_error }}
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div class="row">
                              <div class="col-md-6">
                                <div>
                                  <label class="control-label espacio" for="fecha_paso4">Fecha
                                    <span :class="[
                                      inputs_paso5[3].text_error != ''
                                        ? 'red'
                                        : 'black',
                                    ]">*</span>
                                    :</label>
                                  <input :disabled="
                                    data.trabajo_comunidad.length > 5
                                  " :class="inputs_paso5[3].class_input" v-model="nuevo_trabajo_comunidad.fecha"
                                    type="date" :maxlength="max_referencia" id="fecha_paso4"
                                    @click="establecer_fecha('fpaso4')" @change="validacion_input('paso5_fecha')" />
                                  <div class="invalid-feedback">
                                    {{ inputs_paso5[3].text_error }}
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="col-md-4 espacio">&nbsp</div>

                        <div class="col-md-12" style="padding: 0px">
                          <br />
                          <button style="float: right; margin-left: 10px" :hidden="data.trabajo_comunidad.length > 5"
                            class="btn btn-primary pull-right" @click="
                              acciones(
                                'experiencia_comunidad',
                                tipo_accion_trabajo_comunidad
                              )
                            ">
                            {{ tipo_accion_trabajo_comunidad }}
                          </button>
                          <label :hidden="data.trabajo_comunidad.length > 5"
                            style="float: right; margin-top: 10px">Agregar información únicamente de los últimos 5
                            años</label>
                          <br /><br />
                          <br />
                        </div>
                      </div>
                    </div>

                    <div class="row espacio">
                      <div class="col-md-12">
                        <table class="table table-responsive-sm table-responsive-md table-striped">
                          <tr style="
                              text-align: justify;
                              text-justify: inter-word;
                            ">
                            <th>Actividades / Resultados</th>
                            <th>Lugar</th>
                            <th>Fecha</th>
                            <th>Organización / Institución</th>
                            <th :hidden="
                              data.id_status > 7 ||
                              tipo_accion_trabajo_comunidad == 'Editar'
                            ">
                              Acciones
                            </th>
                          </tr>
                          <tr v-if="data.trabajo_comunidad.length === 0">
                            <td class="text-center" colspan="6">
                              Sin registros de experiencia de trabajo en
                              comunidad
                              <hr />
                            </td>
                          </tr>

                          <tr v-for="(item, index) of data.trabajo_comunidad" style="
                              text-align: justify;
                              text-justify: inter-word;
                            ">
                            <td>{{ item.actividad }}</td>
                            <td>{{ item.lugar }}</td>
                            <td>{{ item.fecha }}</td>
                            <td>{{ item.institucion }}</td>
                            <td :hidden="
                              data.id_status > 7 ||
                              add_comunidad == true ||
                              tipo_accion_trabajo_comunidad == 'Editar'
                            ">
                              <i @click="editar_experiencia_comunidad(index)" class="hand ml-3 fas fa-pencil-alt">
                              </i>
                              <i data-toggle="modal" data-target="#expComunidad" @click="
                                eliminar_experiencia_comunidad(
                                  item.id_trabajo_comunidad
                                )
                              " class="hand ml-3 fas fa-trash-alt">
                              </i>
                            </td>
                          </tr>
                        </table>
                      </div>
                      <br /><br />
                      <div :hidden="data.id_status > 7" class="espacio text-alert alert alert-info">
                        <strong>En caso de no poder concluir el llenado de los datos
                          requeridos, la información se guarda automáticamente
                          para que posteriormente puedas continuar con el
                          proceso en el paso donde te quedaste. Una vez que des
                          guardar no se puede regresar a editar, verifica que
                          los datos sean correctos antes de guardar y
                          continuar.</strong>
                      </div>
                      <div class="col-md-12 espacio">
                        <button :disabled="block[4].paso" :hidden="data.id_status > 7" id="paso5" style="float: right"
                          class="btn btn-primary pull-right" type="submit" @click="paso5()">
                          Guardar y continuar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 6-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 8" id="paso6" class="collapse" :class="{ show: viewSteper == 8 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio text-left">
                  <h4>Experiencia académica</h4>
                  <hr class="red" />
                  <div class="col-md-12 col-xl-12" id="panel2">
                    <div class="row" :hidden="data.id_status > 8">
                      <div class="col-md-6">
                        <label class="control-label espacio" for="Institución">Cursos impartidos
                          <span :class="[
                            inputs_paso6[0].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input :disabled="data.experiencia_academica.length > 4" :class="inputs_paso6[0].class_input"
                          placeholder="Ingresa el lugar" v-model="nuevo_experiencia_academica.cursos"
                          :maxlength="max_referencia" id="cursos_paso6" type="text" v-on:keypress="keyEstandar($event)"
                          @keyup="validacion_input('paso6_cursos')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso6[0].text_error }}
                        </div>
                      </div>
                      <div class="col-md-6">
                        <label class="control-label espacio" for="Institución">Institución
                          <span :class="[
                            inputs_paso6[1].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input :disabled="data.experiencia_academica.length > 4" :class="inputs_paso6[1].class_input"
                          placeholder="Ingresa el lugar" v-model="nuevo_experiencia_academica.institucion"
                          id="institucion_paso6" :maxlength="max_referencia" type="text"
                          v-on:keypress="keyEstandar($event)" @keyup="validacion_input('paso6_institucion')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso6[1].text_error }}
                        </div>
                      </div>

                      <div class="col-md-5">
                        <label class="control-label espacio" for="fecha_inicio_paso6">Periodo
                          <span :class="[
                            inputs_paso6[2].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input @paste.prevent :maxlength="max_date" :disabled="data.experiencia_academica.length > 4"
                          :class="inputs_paso6[2].class_input" v-model="nuevo_experiencia_academica.fecha_inicio"
                          placeholder="Ingresa el año inicial del periodo" v-on:keypress="keyNum($event)" type="text"
                          id="fecha_inicio_paso6" @keyup="validacion_input('paso6_periodo_ingreso')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso6[2].text_error }}
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div>
                          <br /><br />
                          <div class="center">
                            <label style="float: rigth" class="control-label espacio">Al</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <label class="control-label espacio" for="fecha_fin_paso6">&nbsp</label>
                        <input @paste.prevent :maxlength="max_date" :disabled="data.experiencia_academica.length > 4"
                          :class="inputs_paso6[3].class_input" v-model="nuevo_experiencia_academica.fecha_fin"
                          placeholder="Ingresa el año final del periodo" v-on:keypress="keyNum($event)" type="text"
                          id="fecha_fin_paso6" @keyup="validacion_input('paso6_periodo_fin')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso6[3].text_error }}
                        </div>
                      </div>
                    </div>

                    <div class="col-md-12" style="padding: 0px" :hidden="data.id_status > 8">
                      <br />
                      <button style="float: right; margin-left: 10px" :hidden="data.experiencia_academica.length > 4"
                        class="btn btn-primary pull-right" @click="
                          acciones(
                            'experiencia_academica',
                            tipo_accion_experiencia_academica
                          )
                        ">
                        {{ tipo_accion_experiencia_academica }}
                      </button>
                      <label :hidden="data.experiencia_academica.length > 4"
                        style="float: right; margin-top: 10px">Agregar información únicamente de los últimos 5
                        años</label>
                      <br />
                    </div>
                  </div>

                  <br /><br />

                  <div class="col-md-12">
                    <br />
                    <table class="table table-responsive-sm table-responsive-md table-striped">
                      <tr>
                        <th>Cursos impartidos</th>
                        <th>Institución</th>
                        <th>Periodo</th>
                        <th :hidden="
                          data.id_status > 8 ||
                          tipo_accion_experiencia_academica == 'Editar'
                        ">
                          Acciones
                        </th>
                      </tr>
                      <tr v-if="data.experiencia_academica.length === 0">
                        <td class="text-center" colspan="4">
                          Sin registros de experiencia académica
                          <hr />
                        </td>
                      </tr>

                      <tr v-for="(item, index) of data.experiencia_academica"
                        style="text-align: justify; text-justify: inter-word">
                        <td>{{ item.cursos }}</td>
                        <td>{{ item.institucion }}</td>
                        <td>{{ item.fecha_inicio }} {{ item.fecha_fin }}</td>
                        <td :hidden="
                          data.id_status > 8 ||
                          add_academica == true ||
                          tipo_accion_experiencia_academica == 'Editar'
                        " class="text-center">
                          <i @click="editar_experiencia_academica(index)"
                            :hidden="data.experiencia_academica.length > 4" class="hand ml-3 fas fa-pencil-alt">
                          </i>
                          <i @click="
                            eliminar_experiencia_academica(
                              item.id_experiencia_academica
                            )
                          " data-toggle="modal" data-target="#expAcademia" class="hand ml-3 fas fa-trash-alt">
                          </i>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br /><br />

                  <div :hidden="data.id_status > 8" class="row mt-5 alert alert-info">
                    <strong>En caso de no poder concluir el llenado de los datos
                      requeridos, la información se guarda automáticamente para
                      que posteriormente puedas continuar con el proceso en el
                      paso donde te quedaste. Una vez que des guardar no se
                      puede regresar a editar, verifica que los datos sean
                      correctos antes de guardar y continuar.</strong>
                  </div>

                  <div class="col-md-12 col-sm-12 text-right espacio mb-5">
                    <button :disabled="block[5].paso" :hidden="data.id_status > 8" id="paso6_guard" style="float: right"
                      class="btn btn-primary pull-right" type="submit" @click="paso6()">
                      Guardar y continuar
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 7-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 9" id="paso7" class="collapse" :class="{ show: viewSteper == 9 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio text-left">
                  <h4>Investigación</h4>
                  <hr class="red" />
                  <div class="col-md-12 col-xl-12" id="panel2">
                    <div class="row" :hidden="data.id_status > 9">
                      <div class="col-md-4">
                        <label class="control-label espacio" for="Institución">Proyectos concluidos
                          <span :class="[
                            inputs_paso7[0].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input :disabled="data.trabajos_investigacion.length > 4" :class="inputs_paso7[0].class_input"
                          placeholder="Ingresa el proyecto" v-model="nuevo_trabajos_investigacion.nombre_proyecto"
                          :maxlength="max_referencia" id="paso7_proyectos_concluidos" type="text"
                          v-on:keypress="keyEstandar($event)" @keyup="validacion_input('paso7_proyectos')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso7[0].text_error }}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label class="control-label espacio" for="Institución">Resultados
                          <span :class="[
                            inputs_paso7[1].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input :disabled="data.trabajos_investigacion.length > 4" :class="inputs_paso7[1].class_input"
                          placeholder="Ingresa el resultado" v-model="nuevo_trabajos_investigacion.resultados"
                          :maxlength="max_referencia" id="paso7_resultados" type="text"
                          v-on:keypress="keyEstandar($event)" @keyup="validacion_input('paso7_resultados')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso7[1].text_error }}
                        </div>
                      </div>
                      <div class="col-md-4">
                        <label class="control-label espacio" for="Institución">Institución
                          <span :class="[
                            inputs_paso7[2].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input :disabled="data.trabajos_investigacion.length > 4" :class="inputs_paso7[2].class_input"
                          placeholder="Ingresa el lugar" v-model="nuevo_trabajos_investigacion.institucion"
                          :maxlength="max_referencia" id="paso7_institucion" type="text"
                          v-on:keypress="keyEstandar($event)" @click="establecer_fecha('f0paso7')"
                          @keyup="validacion_input('paso7_institucion')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso7[2].text_error }}
                        </div>
                      </div>

                      <div class="col-md-5">
                        <label class="control-label espacio" for="paso7_periodo_inicio">Periodo
                          <span :class="[
                            inputs_paso7[3].text_error != ''
                              ? 'red'
                              : 'black',
                          ]">*</span>
                          :</label>
                        <input @paste.prevent :disabled="data.trabajos_investigacion.length > 4"
                          :class="inputs_paso7[3].class_input" v-model="nuevo_trabajos_investigacion.fecha_inicio"
                          :maxlength="max_date" v-on:keypress="keyNum($event)"
                          placeholder="Ingresa el año inicial del periodo" type="text" id="paso7_periodo_inicio"
                          @keyup="validacion_input('paso7_fecha_ini')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso7[3].text_error }}
                        </div>
                      </div>
                      <div class="col-md-2">
                        <div>
                          <br /><br />
                          <div class="center">
                            <label style="float: rigth" class="control-label espacio">Al</label>
                          </div>
                        </div>
                      </div>
                      <div class="col-md-5">
                        <label class="control-label espacio" for="paso7_periodo_fin">&nbsp</label>
                        <input @paste.prevent :disabled="data.trabajos_investigacion.length > 4"
                          :class="inputs_paso7[4].class_input" v-model="nuevo_trabajos_investigacion.fecha_fin"
                          :maxlength="max_date" v-on:keypress="keyNum($event)"
                          placeholder="Ingresa el año inicial del periodo" type="text" id="paso7_periodo_fin"
                          @keyup="validacion_input('paso7_fecha_fini')" />
                        <div class="invalid-feedback">
                          {{ inputs_paso7[4].text_error }}
                        </div>
                      </div>
                    </div>

                    <div :hidden="data.id_status > 9" class="col-md-12" style="padding: 0px">
                      <br />
                      <button style="float: right; margin-left: 10px" :hidden="data.trabajos_investigacion.length > 4"
                        class="btn btn-primary pull-right" @click="
                          acciones(
                            'trabajo_investigacion',
                            tipo_accion_trabajo_investigacion
                          )
                        ">
                        {{ tipo_accion_trabajo_investigacion }}
                      </button>
                      <label :hidden="data.trabajos_investigacion.length > 4"
                        style="float: right; margin-top: 10px">Agregar información únicamente de los últimos 5
                        años</label>
                      <br />
                    </div>
                    <div class="col-md-12"><br /></div>
                  </div>
                  <br /><br />
                  <div class="col-md-12">
                    <table class="table table-responsive-sm table-responsive-md table-striped">
                      <tr>
                        <th>Proyectos concluidos</th>
                        <th>Resultados</th>
                        <th>Institución</th>
                        <th>Periodo</th>
                        <th></th>
                        <th :hidden="
                          data.id_status > 9 ||
                          tipo_accion_trabajo_investigacion == 'Editar'
                        ">
                          Acciones
                        </th>
                      </tr>
                      <tr v-if="data.trabajos_investigacion.length === 0">
                        <td class="text-center" colspan="6">
                          Sin registros de investigación
                          <hr />
                        </td>
                      </tr>

                      <tr v-for="(item, index) of data.trabajos_investigacion"
                        style="text-align: justify; text-justify: inter-word">
                        <td>{{ item.nombre_proyecto }}</td>
                        <td>{{ item.resultados }}</td>
                        <td>{{ item.institucion }}</td>
                        <td>{{ item.fecha_inicio }}</td>
                        <td>{{ item.fecha_fin }}</td>
                        <td :hidden="
                          data.id_status > 9 ||
                          add_investigacion == true ||
                          tipo_accion_trabajo_investigacion == 'Editar'
                        " class="text-center">
                          <i :hidden="data.trabajos_investigacion.length > 4"
                            @click="editar_trabajo_investigacion(index)" class="hand ml-3 fas fa-pencil-alt">
                          </i>
                          <i @click="
                            eliminar_trabajo_investigacion(
                              item.id_investigacion_docente
                            )
                          " data-toggle="modal" data-target="#expInvestigacion" class="hand ml-3 fas fa-trash-alt">
                          </i>
                        </td>
                      </tr>
                    </table>
                  </div>
                  <br /><br />
                  <div :hidden="data.id_status > 9" class="row espacio text-alert alert alert-info">
                    <strong>En caso de no poder concluir el llenado de los datos
                      requeridos, la información se guarda automáticamente para
                      que posteriormente puedas continuar con el proceso en el
                      paso donde te quedaste. Una vez que des guardar no se
                      puede regresar a editar, verifica que los datos sean
                      correctos antes de guardar y continuar.</strong>
                  </div>
                  <div class="col-md-12 espacio mb-5">
                    <button :disabled="block[6].paso" :hidden="data.id_status > 9" id="paso6" style="float: right"
                      class="btn btn-primary pull-right" type="submit" @click="paso7()">
                      Guardar y continuar
                    </button>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 8-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 10" id="paso8" class="collapse" :class="{ show: viewSteper == 10 }"
                aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body espacio text-left">
                  <h4>Información complementaria</h4>
                  <hr class="red" />
                  <div class="col-md-12 col-xl-12">
                    <div class="row">
                      <div class="col-md-6 espacio">
                        <label class="control-label" for="disponibilidad">1. ¿Tiene otro trabajo?
                          <span :class="paso2[9].error">*</span> :</label>
                        <br />
                        <label v-show="paso2[9].error == 'red'" style="color: red; font-size: 80%">Selecciona tu
                          respuesta</label>
                        <div id="tiene_trabajo" class="col-md-12 radio">
                          <label>
                            <input :disabled="data.id_status > 10" v-model="data.trabajo_extra" type="radio"
                              name="trabajo_extra" value="true" @click="validacion_input('trabajo_extra')" />
                            Sí
                          </label>
                          <br />
                          <label>
                            <input :disabled="data.id_status > 10" v-model="data.trabajo_extra" type="radio"
                              name="trabajo_extra" value="false" @click="validacion_input('trabajo_extra')" />
                            No
                          </label>
                        </div>
                      </div>

                      <div class="col-md-6 espacio">
                        <label class="control-label" for="disponibilidad">2. ¿Cuál es su disponibilidad de tiempo?
                          <span :class="paso2[5].error">*</span> :</label>
                        <br />
                        <label v-show="paso2[5].error == 'red'" style="color: red; font-size: 80%">Selecciona tu
                          respuesta</label>
                        <div id="disponibilidad" class="col-md-12 radio">
                          <label>
                            <input :disabled="data.id_status > 10" :checked="data.disponibilidad == 1" type="radio"
                              name="disponibilidad" value="1" v-model="data.disponibilidad"
                              @click="validacion_input('disponibilidad')" />4 horas a la semana
                          </label>
                          <br />
                          <label>
                            <input :disabled="data.id_status > 10" :checked="data.disponibilidad == 2" type="radio"
                              name="disponibilidad" value="2" v-model="data.disponibilidad"
                              @click="validacion_input('disponibilidad')" />
                            12 horas o más </label><br />
                          <label>
                            <input :disabled="data.id_status > 10" :checked="data.disponibilidad == 3" type="radio"
                              name="disponibilidad" value="3" v-model="data.disponibilidad"
                              @click="validacion_input('disponibilidad')" />
                            Dedicación exclusiva
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 espacio">
                        <label class="control-label" for="movilidad">3. ¿Estaría usted dispuesto a cambiar de
                          residencia?
                          <span :class="paso2[6].error">*</span> :</label><br />
                        <label v-show="paso2[6].error == 'red'"
                          style="color: red; font-size: 80%; font-size: 80%">Selecciona tu respuesta</label>
                        <div id="movilidad" class="col-md-12 radio">
                          <label>
                            <input :disabled="data.id_status > 10" v-model="data.movilidad" type="radio"
                              name="movilidad" value="true" @click="validacion_input('disposicion')" />
                            Sí
                          </label>
                          <br />
                          <label>
                            <input :disabled="data.id_status > 10" v-model="data.movilidad" type="radio"
                              name="movilidad" value="false" @click="validacion_input('disposicion')" />
                            No
                          </label>
                        </div>
                      </div>
                      <div class="col-md-6 espacio">
                        <label class="control-label" for="lengua_originaria">4. ¿Habla usted alguna lengua originaria?
                          <span :class="paso2[7].error">*</span> :</label>
                        <br />
                        <label v-show="paso2[7].error == 'red'" style="color: red; font-size: 80%">Selecciona tu
                          respuesta</label>
                        <div id="lengua_originaria" class="col-md-12 radio">
                          <label>
                            <input :disabled="data.id_status > 10" v-model="data.lengua_originaria" type="radio"
                              name="lengua_originaria" value="true" @click="
  option_lengua_originaria = 'false';
validacion_input('lengua_originaria');
paso2[8].error = 'black';
inputs[15].class_input = 'form-control';
inputs[15].text_error = '';
                              " />
                            Sí
                          </label>
                          <br />
                          <label>
                            <input :disabled="data.id_status > 10" v-model="data.lengua_originaria" type="radio"
                              name="lengua_originaria" value="false" @click="
  data.lengua_desc = '';
option_lengua_originaria = 'true';
paso2[8].error = 'black';
validacion_input('lengua_originaria');
                              " />
                            No
                          </label>
                        </div>
                      </div>
                      <transition name="slide-fade">
                        <div v-if="
                          data.lengua_originaria == 'true' ||
                          data.id_status > 10
                        " class="col-md-5 espacio" :hidden="
  data.id_status > 10 && data.lengua_desc == ''
">
                          <label class="control-label" for="lengua_desc">¿Cuál o cuáles?
                            <span :class="paso2[8].error">*</span></label>
                          <input :disabled="data.id_status > 10" :class="inputs[15].class_input"
                            v-model="data.lengua_desc" id="lengua_desc" placeholder="Ingresa tu lengua originaría"
                            type="text" :maxlength="max_referencia" @keyup="validacion_input('lengua_desc')" />
                          <div class="invalid-feedback">
                            {{ inputs[15].text_error }}
                          </div>
                        </div>
                      </transition>
                    </div>

                    <div :hidden="data.id_status > 10" class="col-md-12 espacio">
                      <input :disabled="block[7].paso" style="float: right" class="btn btn-primary pull-right"
                        type="button" value="Guardar y continuar" @click="paso8_send()" />
                      <br /><br />
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>

          <!--card 9-->
          <div class="card card_space">
            <transition :duration="animate_conf" name="nested">
              <div v-if="viewSteper == 15 || viewSteper == 16 || viewSteper == 17" id="paso9" class="collapse" :class="{
                show:
                  data.id_status === 15 ||
                  data.id_status === 16 ||
                  data.id_status === 17,
              }" aria-labelledby="headingOne" data-parent="#accordion">
                <div class="card-body text-left">
                  <div>
                    <form role="form">
                      <div class="row espacio">
                        <div class="col-md-12 espacio">
                          <h4>Documentos</h4>
                          <div :hidden="data.id_status == 17" class="espacio text-alert alert alert-info">
                            <strong>Ingresa los documentos que a continuación se
                              solicitan en un solo archivo .pdf por cada
                              uno</strong>
                          </div>
                        </div>

                        <!-- documents -->
                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5>
                              <strong>Acta de nacimiento</strong>
                            </h5>
                            <img v-if="docs[0].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-6">
                            <label style="font-weight: 300">Ingresa tu Acta de nacimiento en formato
                              .pdf</label><br /><br />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="Acta_Nacimiento"
                            collapse="collapseDocActa" tipo="acta" gif="actaCharge" embed="vistaPrevia_Acta_nacimiento"
                            title_doc_msg="Documento acta nacimiento" target="#collapseDocActa" tipo_doc="6"
                            convocatoria="docente" :id_usuario="data.id_usuario" :id_status="data.id_status" />
                          <br />
                        </div>

                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5>
                              <strong>CURP</strong>
                            </h5>
                            <img v-if="docs[1].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-6">
                            <label style="font-weight: 300">Ingresa tu CURP en formato .pdf</label><br /><br />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="CURP" collapse="collapseDoccurp"
                            tipo="curp" gif="curpCharge" embed="vistaPrevia_curp" title_doc_msg="Documento CURP"
                            target="#collapseDoccurp" tipo_doc="7" convocatoria="docente" :id_usuario="data.id_usuario"
                            :id_status="data.id_status" />

                          <br />
                        </div>

                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5>
                              <strong>RFC</strong>
                            </h5>
                            <img v-if="docs[2].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-6">
                            <label style="font-weight: 300">Ingresa tu RFC en formato .pdf</label><br /><br />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="RFC" collapse="collapseDocrfc"
                            tipo="rfc" gif="rfcCharge" embed="vistaPrevia_rfc" title_doc_msg="Documento RFC"
                            target="#collapseDocrfc" tipo_doc="18" convocatoria="docente" :id_usuario="data.id_usuario"
                            :id_status="data.id_status" />

                          <br />
                        </div>

                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5>
                              <strong>Identificación oficial</strong>
                            </h5>
                            <img v-if="docs[3].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-6">
                            <label style="font-weight: 300">Ingresa tu identificación oficial en formato
                              .pdf</label><br /><br />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="Identificacion"
                            collapse="collapseDocIdentificacion" tipo="identificacion" gif="IdentificacionCharge"
                            embed="vistaPrevia_Identificacion" title_doc_msg="Documento Identificacion"
                            target="#collapseDocIdentificacion" tipo_doc="8" convocatoria="docente"
                            :id_usuario="data.id_usuario" :id_status="data.id_status" />

                          <br />
                        </div>

                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5>
                              <strong> Comprobante de domicilio</strong>
                            </h5>
                            <img v-if="docs[4].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-7">
                            <label style="font-weight: 300">Ingresa tu comprobante de domicilio en formato
                              .pdf</label><br /><br />
                          </div>
                          <div class="col-md-6"></div>
                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="Comprobante_Domicilio"
                            collapse="collapseDocComprobante_Domicilio" tipo="comprobante_Domicilio"
                            gif="Comprobante_DomicilioCharge" embed="vistaPrevia_Comprobante_Domicilio"
                            title_doc_msg="Documento Comprobante de domicilio"
                            target="#collapseDocComprobante_Domicilio" tipo_doc="17" convocatoria="docente"
                            :id_usuario="data.id_usuario" :id_status="data.id_status" />

                          <br />
                        </div>
                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5>
                              <strong> Carta de motivos</strong>
                            </h5>
                            <img v-if="docs[5].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-6">
                            <label style="font-weight: 300">Ingresa tu carta de motivos en formato
                              .pdf</label><br /><br />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="Carta_Motivos"
                            collapse="collapseDocCarta_Motivos" tipo="carta_Motivos" gif="Carta_MotivosCharge"
                            embed="vistaPrevia_Carta_Motivos" title_doc_msg="Documento Carta de motivos"
                            target="#collapseDocCarta_Motivos" tipo_doc="4" convocatoria="docente"
                            :id_usuario="data.id_usuario" :id_status="data.id_status" />

                          <br />
                        </div>

                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5><strong>Fotografía</strong></h5>
                            <img v-if="docs[6].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <div class="col-md-12">
                            <label style="font-weight: 300">Ingresa tu Fotografía en formato de imagen .jpg |
                              .jpeg | .png | .bmp </label><br /><br />
                          </div>
                          <div class="col-md-6"></div>

                          <DocumentChargePreview v-on:activeIcon="checks_activate" id="Fotografia"
                            collapse="collapseFotografia" tipo="fotografia" gif="FotografiaCharge"
                            embed="vistaPrevia_Fotografia" title_doc_msg="Fotografía" target="#collapseFotografia"
                            tipo_doc="0" convocatoria="docente" :id_usuario="data.id_usuario"
                            :id_status="data.id_status" />
                          <br />
                        </div>

                        <div class="card col-md-11 ml-md-5 mg-md-3">
                          <br />
                          <div class="flex">
                            <h5><strong>Experiencia profesional</strong></h5>
                            <img v-if="docs[7].viewDoc" class="icon_position_success" src="@/assets/complete.png"
                              style="width: 2% !important;" />
                          </div>
                          <label style="font-weight: 300">
                            Cargue los archivos de las publicaciones de su
                            autoría juntos en un solo documento (opcional)
                            <br /><br />
                            ¿Cuenta con evidencias de cursos, diplomados u otras
                            referencias que desee agregar? * :</label>
                          <div class="col-md-12 radio">
                            <label>
                              <input type="radio" name="experiencia_profesional_radio" value="1"
                                :disabled="data.id_status == 17" id="si_expr" v-model="experiencia_profesional_radio"
                                @click="experiencia_profesional_radio = 1" />
                              Sí
                            </label>
                            <br />
                            <label>
                              <input type="radio" name="experiencia_profesional_radio" value="0"
                                :disabled="data.id_status == 17" v-model="experiencia_profesional_radio"
                                @click="experiencia_profesional_radio = 0" />
                              No
                            </label>
                          </div>
                          <transition name="slide-fade">
                            <div v-if="experiencia_profesional_radio == 1">
                              <DocumentChargePreview v-on:activeIcon="checks_activate" id="Experiencia_Profesional "
                                collapse="collapseDocExperiencia_Profesional" tipo="experiencia_Profesional"
                                gif="Experiencia_ProfesionalCharge" embed="vistaPrevia_Experiencia_Profesional"
                                title_doc_msg="Documento Carta de motivos" target="#collapseDocExperiencia_Profesional"
                                tipo_doc="5" convocatoria="docente" :id_usuario="data.id_usuario"
                                :id_status="data.id_status" />
                              <br /><br />
                            </div>
                          </transition>
                        </div>

                        <div class="col-md-11 ml-5 card_space">
                          <form @submit="enviar_solicitud" role="form">
                            <button :disabled="block[8].paso" :hidden="data.id_status == 17" style="float: right"
                              type="submit" class="btn btn-primary pull-right">
                              &nbsp&nbsp&nbsp Enviar solicitud &nbsp&nbsp&nbsp</button><br /><br />
                          </form>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </div>
        <!--close-->
        <div class="col-md-12 card_space">
          <button id="envio_solicitud" style="float: right" class="btn btn-primary pull-right" @click="cerrar_sesion()">
            <i class="fas fa-sign-in-alt"></i> Cerrar sesión</button><br /><br />
        </div>
        <!--Fin card espaces-->
      </div>
    </div>
  </div>
</template>

<style scoped>
.center {
  text-align: center;
}

.hand {
  cursor: pointer;
}

.modal-custom {
  margin-top: 20%;
  font-size: 18px;
  color: #5c5656;
}

.margen {
  margin: 10px;
}
</style>
