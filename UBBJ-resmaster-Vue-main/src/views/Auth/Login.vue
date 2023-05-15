<template>
  <Transition :duration="{ enter: 500, leave: 800 }" name="nested">
    <div v-if="show" class="container">
      <div class="opciones mt-4 mb-2 text-left">
        <a @click="redirigir('/')"><i class="fas fa-home"></i> Inicio</a>
        <i style="margin-left: 5px; margin-right: 5px" class="fas fa-chevron-right"></i>
        <a> <i class="fas fa-sign-in-alt"></i> Iniciar sesión</a>
      </div>
      <div class="text-left">
        <h1 class="title-principal">Inicio de sesión</h1>
      </div>
      <hr class="red" />
      <div class="alert alert-info">
        <strong> Capture sus credenciales para el inicio de sesión</strong>
      </div>

      <div clas="row">
        <div class="col-md-12">
          <form @submit="login" role="form">
            <div class="form-group">
              <div class="row mt-5">
                <div class="col-md-4 offset-md-4 text-left">
                  Correo electrónico
                  <label class="control-label" for="email">
                    <span :class="[inputs[0].text_error != '' ? 'red' : 'black']">*</span>
                    :</label>
                  <input id="email" :class="inputs[0].class_input" type="text"
                    placeholder="Ingresa tu correo electrónico" v-model="email" v-on:keypress="keyEmail($event)"
                    @keyup="validaciones('email')" />
                  <div class="invalid-feedback">
                    {{ inputs[0].text_error }}
                  </div>
                </div>

                <div class="col-md-12"><br /></div>
                <div class="col-md-4 offset-md-4 text-left">
                  Contraseña
                  <label class="control-label" for="Contraseña">
                    <span :class="[inputs[1].text_error != '' ? 'red' : 'black']">*</span>
                    :</label>
                  <div class="input-group">
                    <input :maxlength="max_password" :class="inputs[1].class_input" id="Contraseña"
                      :type="[showPassword ? 'text' : 'password']" placeholder="Ingresa tu contraseña"
                      v-model="password" v-on:keypress="keyEmail($event)" @keyup="validaciones('pass')"
                      v-on:keyup.enter="login" />
                    <div class="input-group-append">
                      <span style="cursor: pointer" class="input-group-text" @click="showPassword = !showPassword"><i
                          :class="[
                            showPassword ? 'fa fa-eye' : 'fa fa-eye-slash',
                          ]" aria-hidden="true"></i></span>
                    </div>
                    <div class="invalid-feedback">
                      {{ inputs[1].text_error }}
                    </div>
                  </div>
                </div>

                <div class="col-md-12 mt-3"><br /></div>
                <div class="col-md-2 offset-md-5">
                  <img v-show="cargando" style="margin-left: 30%" class="" src="" width="40%" />
                </div>
                <div class="col-md-1">
                  <button :disabled="statusLog" :hidden="cargando == true" style="float: right" type="submit"
                    class="btn btn-primary pull-right">
                    &nbsp;&nbsp;&nbsp;&nbsp; Enviar &nbsp;&nbsp;&nbsp;&nbsp;
                  </button>
                </div>
              </div>

              <div class="col-md-12 mt-5"><br /></div>
              <div class="col-md-4 offset-md-4">
                <a class="link-secondary" @click="redirigir('/recuperacion')"><b>¿OLVIDASTE TU CONTRASEÑA?</b></a>
              </div>
              <div class="col-md-2 offset-md-10">
                <small class="version"> Versión: {{ version_ubbj }} </small>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Transition>
</template>
<script>

import toastr from "toastr/toastr";
import ubbj_api from "@/services/api/ubbj";

export default {
  props: {
    id: { type: String, required: true },
    rolUsuario: { type: String, required: true },
  },

  data() {
    return {
      embedSrc: "",
      show: false,
      secret: "стон",
      tipos: ["aspirante_estudiante", "aspirante_Docente", "aspirante_Sede"],
      ids: [5, 6, 7],
      version_ubbj: 12,
      statusLog: false,
      id_convocatoria: 0,
      showPassword: false,
      max_password: 8,
      decision: false,
      email: "",
      password: "",
      inputs: [
        {
          class_input: "form-control",
          text_error: "",
        },
        {
          class_input: "form-control",
          text_error: "",
        },
      ],
      cargando: false,
    };
  },

  mounted() {
    window.scroll(0, 800);
    sessionStorage.clear();
    this.getEstatusConvocatorias();
    setTimeout(() => {
      this.show = true;
    }, 200);

    if (!this.id || !this.rolUsuario) {
      this.$router.push({ path: "/" });
    }
  },

  methods: {
    redirigir(ruta) {
      if (ruta != "/") {
        this.$router.push({ path: ruta });
      } else {
        location.href = "/";
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

    getEstatusConvocatorias() {
      ubbj_api
        .post("listar/convocatorias", {
          id_tipoconv: this.id,
        })
        .then((resp) => {
          const filter = resp.data.Convocatorias.reduce(
            (max, item) => (item.inicio > max ? item.inicio : max),
            resp.data.Convocatorias[0].inicio
          );

          let respuesta = resp.data.Convocatorias.find((item) => {
            return item.inicio == filter;
          });

          this.id_convocatoria = respuesta.id_convocatoria;
          this.status = respuesta.status;

          if (this.status != "vigente") {
            this.$router.push({ path: "/" });
          }
        });
    },

    login: function (e) {
      this.statusLog = true;
      e.preventDefault();
      toastr.remove();
      if (
        this.inputs[0].class_input === "form-control is-valid" &&
        this.inputs[1].class_input === "form-control is-valid"
      ) {
        /**Login */
        ubbj_api
          .post("login", {
            email: this.email,
            password: this.password,
          })
          .then((resp) => {
            let mensaje = resp.data.message;

            switch (mensaje) {
              case "Está intentando iniciar sesión como miembro del comité, favor de dirigirse al login de miembros del comité.":
                this.showToast(message, "Aviso", 10000, "warning");
                this.statusLog = false;
                break;

              case "No existe un usuario con el correo " + this.email:
                this.showToast(
                  "Usuario / Correo incorrecto.",
                  "Aviso",
                  10000,
                  "warning"
                );
                this.inputs[0].class_input = "form-control is-invalid";
                this.inputs[0].text_error = "Usuario / Correo incorrecto";
                this.statusLog = false;
                break;

              case "Credenciales incorrectas":
                this.showToast(message, "Aviso", 10000, "warning");
                this.inputs[1].class_input = "form-control is-invalid";
                this.inputs[1].text_error = "Contraseña incorrecta";
                this.statusLog = false;
                break;

              default:
                let id_rol = resp.data.id_rol;
                this.cargando = true;
                window.scroll(0, 800);

                if (id_rol == 5) {
                  sessionStorage.data = JSON.stringify(resp.data);
                  this.$router.push({
                    path: "/registro_estudiante",
                    replace: true,
                  });
                }
                if (id_rol == 6) {
                  sessionStorage.data = JSON.stringify(resp.data);
                  sessionStorage.idConvocatoria = this.id_convocatoria;

                  this.$router.push({
                    path: "/registro_docente",
                    replace: true,
                  });
                }
                if (id_rol == 7) {
                  sessionStorage.data = JSON.stringify(resp.data);
                  this.$router.push({ path: "/registro_sedes", replace: true });
                }
                break;
            }
          })
          .catch((e) => {
            let message = e.response.data.message;
            switch (e.response.status) {
              case 400:
                this.showToast(message, "Aviso", 13000, "warning");
                this.cargando = false;
                sessionStorage.removeItem("user-token");
                sessionStorage.clear();

                setTimeout(() => {
                  this.statusLog = false;
                  this.$router.push({
                    path: "/registro_usuarios",
                    query: { rolUsuario: "6" },
                  });
                }, 13000);
                break;

              case 403:
                this.showToast(message, "Aviso", 13000, "warning");
                this.cargando = false;
                sessionStorage.removeItem("user-token");
                sessionStorage.clear();
                setTimeout(() => {
                  this.statusLog = false;
                }, 13000);
                break;
            }
          });
      } else {
        if (this.email == "" && this.password == "") {
          this.inputs = [
            {
              class_input: "form-control is-invalid",
              text_error: "Escribe tu correo electrónico",
            },
            {
              class_input: "form-control is-invalid",
              text_error: "Escribe tu Contraseña",
            },
          ];
          this.statusLog = false;
          this.showToast(
            "¡Falta información! Revisa que todos los campos estén completos",
            "Aviso",
            10000,
            "warning"
          );
        } else {
          let activeAlert = "";
          if (this.email == "") {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error = "Escribe tu correo electrónico";
            activeAlert = "Escribe tu correo electrónico";
          } else {
            this.inputs[0].class_input = "form-control is-valid";
            this.inputs[0].text_error = "";
          }

          if (this.password == "") {
            this.inputs[1].class_input = "form-control is-invalid";
            this.inputs[1].text_error = "Escribe tu Contraseña";
            activeAlert = "Escribe tu Contraseña";
          } else {
            this.inputs[1].class_input = "form-control is-valid";
            this.inputs[1].text_error = "";
          }
          if (activeAlert != "") {
            this.showToast(activeAlert, "Aviso", 10000, "warning");
            this.statusLog = false;
          }
        }
      }
    },

    validaciones(input) {
      if (input == "email") {
        if (this.email.length > 1) {
          if (this.validEmail(this.email)) {
            this.inputs[0].class_input = "form-control is-valid";
            this.inputs[0].text_error = "";
          } else {
            this.inputs[0].class_input = "form-control is-invalid";
            this.inputs[0].text_error = "Formato de Correo inválido";
          }
        } else {
          this.inputs[0].class_input = "form-control";
          this.inputs[0].text_error = "";
        }
      }
      if (input == "pass") {
        if (this.password.length > 1) {
          if (this.validPass(this.password)) {
            this.inputs[1].class_input = "form-control is-valid";
            this.inputs[1].text_error = "";
          } else {
            this.inputs[1].class_input = "form-control is-invalid";
            this.inputs[1].text_error = "Formato de contraseña inválido";
          }
        } else {
          this.inputs[1].class_input = "form-control";
          this.inputs[1].text_error = "";
        }
      }
    },

    /**Regex */
    keyEmail(e) {
      let char = String.fromCharCode(e.keyCode);
      if (/^[a-zA-Z1-9@.#!$%&-_]+$/.test(char)) return true;
      else e.preventDefault();
    },

    validEmail: function (email) {
      var re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
      return re.test(email);
    },

    validPass: function (pass) {
      var re =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8}$/;
      return re.test(pass);
    },
  },
  watch: {
    id(value, oldvalue) {
      this.getEstatusConvocatorias();
    },
    rolUsuario(value, oldvalue) {
      this.getEstatusConvocatorias();
    },
  },
};
</script>
<style>
.title-principal {
  color: #6b6b6e;
  font-weight: 600;
}
</style>
