<template>
    <main class="page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 offset-md-3"><br>
                    <h3 class="text-left"> Restablecer contraseña </h3>
                    <hr class="red">
                    <div class="alert alert-info text-justify" style="font-family: 'Montserrat',sans-serif;f"> La
                        contraseña
                        debe tener una longitud de 8 caracteres <br>
                        Debe tener al menos un caracter en mayúscula (A-Z)<br>
                        Debe tener al menos un caracter numérico (0-9)<br>
                        Debe tener al menos un caracter especial </div>

                    <form role="form">
                        <div class="form-group">
                            <label class="control-label" for="password-01">Contraseña <span
                                    v-if="inputs[0].class_input == 'form-control is-invalid'" class='red'>*</span>
                                :</label>
                            <span class="alerta" v-show="valid_password == true">
                                <img src="../resources/img/valida.png" width="20" height="20" /></span>
                            <div class="input-group">
                                <input id="inicial" :class="inputs[0].class_input" v-model="password"
                                    placeholder="Contraseña" v-bind:type="[showPassword ? 'text' : 'password']"
                                    maxlengtFh="8" autocomplete="off" @keyup="validaciones('pass')">
                                <div class="input-group-append">
                                    <span style="cursor:pointer" class="input-group-text"
                                        @click="showPassword = !showPassword;"><i
                                            :class="[showPassword ? 'fa fa-eye' : 'fa fa-eye-slash']"
                                            aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div class="invalid-feedback">
                                {{  inputs[0].text_error  }}
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="control-label" for="password-01">Confirma tu contraseña <span
                                    v-if="inputs[1].class_input == 'form-control is-invalid'" class='red'>*</span>
                                :</label><span class="alerta" v-show="valid == true"><img
                                    src="../resources/img/valida.png" width="20" height="20"></span>
                            <div class="input-group">
                                <input id="confir" :class="inputs[1].class_input" v-model="confirm_password"
                                    placeholder="Confirma tu contraseña"
                                    v-bind:type="[showPassword_confirm ? 'text' : 'password']" maxlength="8"
                                    autocomplete="off" @keyup="validaciones('pass_confirm')">
                                <div class="input-group-append">
                                    <span style="cursor:pointer" class="input-group-text"
                                        @click="showPassword_confirm = !showPassword_confirm;"><i
                                            :class="[showPassword_confirm ? 'fa fa-eye' : 'fa fa-eye-slash']"
                                            aria-hidden="true"></i></span>
                                </div>
                            </div>
                            <div class="invalid-feedback">
                                {{  inputs[1].text_error  }}
                            </div>
                        </div>
                        <br /> <br /> <br /> <br />
                        <div v-show="msgError">
                            <pre class="alert alert-danger"
                                style="font-family: 'Montserrat',sans-serif;font-size: 15px;">{{     errmessage     }}</pre>
                        </div>
                    </form>
                    <input class="btn btn-primary pull-right" type="submit" value="Actualizar" id="Ingresar"
                        style="margin-left:20px;float:right;" name="Ingresar" @click="recuperaContrasena();">

                    <div class="alert alert-success" v-show="msgSucces">
                        <img src="../resources/img/valida.png" width="20" height="20" />
                        {{  message  }}
                    </div>
                </div>
            </div>
        </div> <br /> <br />
    </main>
</template>
<script>
export default {
    data() {
        return {
            message: "",
            password: "",
            confirm_password: "",
            errmessage: "",
            msgError: false,
            msgSucces: false,
            confirmPass: null,
            contains_lowercase: false,
            contains_number: false,
            contains_uppercase: false,
            valid_password_length: false,
            valid_password: false,
            valid: false,
            inputs: [
                {
                    class_input: (string = "form-control"),
                    text_error: (string = ""),
                    error: "black"
                },
                {
                    class_input: (string = "form-control"),
                    text_error: (string = ""),
                    error: "black"
                }
            ],
            showPassword: false,
            showPassword_confirm: false
        };
    },

    methods: {
        validaciones(input) {
            if (input == "pass") {
                if (this.password === this.confirm_password) {
                    this.inputs[0].class_input = "form-control is-valid";
                    this.inputs[1].class_input = "form-control is-valid";
                }
                if (this.password.length > 1) {
                    if (this.validPass(this.password)) {
                        this.inputs[0].class_input = "form-control is-valid";
                    } else {
                        this.inputs[0].class_input = "form-control ";
                        this.inputs[0].text_error = "";
                        this.inputs[0].error = "black";
                    }
                }
                if (this.password == "") {
                    this.inputs[0].class_input = "form-control";
                    this.inputs[0].text_error = "";
                    this.inputs[0].error = "black";
                }
            }
            if (input == "pass_confirm") {
                if (this.password === this.confirm_password) {
                    this.inputs[0].class_input = "form-control is-valid";
                    this.inputs[1].class_input = "form-control is-valid";
                }
                if (this.confirm_password.length > 1) {
                    if (this.validPass(this.confirm_password)) {
                        this.inputs[1].class_input = "form-control is-valid";
                    } else {
                        this.inputs[1].class_input = "form-control ";
                        this.inputs[1].text_error = "";
                        this.inputs[1].error = "black";
                    }
                }
                if (this.confirm_password == "") {
                    this.inputs[1].class_input = "form-control";
                    this.inputs[1].text_error = "";
                    this.inputs[1].error = "black";
                }
            }
        },

        validPass: function (pass) {
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8}$/;
            return re.test(pass);
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

        recuperaContrasena() {
            if (this.password == "" && this.confirm_password == "") {
                this.alert_toastr(
                    "warning",
                    "Por favor, llene los campos requeridos",
                    "Aviso",
                    8000
                );
                this.inputs[0].class_input = "form-control is-invalid";
                this.inputs[0].text_error = "Escriba la contraseña";
                this.inputs[1].class_input = "form-control is-invalid";
                this.inputs[1].text_error = "Repita la contraseña";
            } else {
                var password = this.password;
                var confirm_password = this.confirm_password;
                this.msgError = false;
                this.msgSucces = false;
                var patt = new RegExp(/[!@#$%^&*]+/);
                $("#message").text("");
                this.errmessage = "";
                if (password.length != 8) {
                    this.msgError = true;
                    this.errmessage +=
                        "La contraseña debe tener una longitud de 8 caracteres" + "\n";
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[1].class_input = "form-control is-invalid";
                }
                if (password.length - password.replace(/[A-Z]/g, "").length < 1) {
                    this.msgError = true;
                    this.errmessage +=
                        "Debe tener al menos un caracter en mayúscula (A-Z)" + "\n";
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[1].class_input = "form-control is-invalid";
                }
                if (password.length - password.replace(/[a-z]/g, "").length < 1) {
                    this.msgError = true;
                    this.errmessage +=
                        "Debe tener al menos un caracter en minúscula (a-z)" + "\n";
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[1].class_input = "form-control is-invalid";
                }
                if (password.length - password.replace(/[0-9]/g, "").length < 1) {
                    this.msgError = true;
                    this.errmessage +=
                        "Debe tener al menos un caracter numérico (0-9)" + "\n";
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[1].class_input = "form-control is-invalid";
                }
                if (password.match(patt) == null) {
                    this.msgError = true;
                    this.errmessage += "Debe tener al menos un caracter especial" + "\n";
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[1].class_input = "form-control is-invalid";
                }
                if (this.password != this.confirm_password) {
                    this.msgError = true;
                    this.errmessage +=
                        "No coinciden la contraseña y su confirmación" + "\n";
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[1].class_input = "form-control is-invalid";
                }

                if (this.msgError) {
                    return false;
                }

                axios
                    .post(api + "resetPassword", {
                        token: this.$route.query.token,
                        password: this.password,
                        confirm_password: this.confirm_password
                    })
                    .then(respuesta => {
                        this.inputs[0].class_input = "form-control";
                        this.inputs[1].class_input = "form-control";
                        this.alert_toastr(
                            "success",
                            respuesta.data.message +
                            " ,hemos enviado un correo electrónico con la confirmación del cambio de contraseña",
                            "Contraseña restablecida",
                            8000
                        );
                        this.password = "";
                        this.confirm_password = "";
                        this.valid_password = false;
                        this.valid = false;
                    })
                    .catch(error => {
                        if (error.response) {
                            if (error.response.status == 401) {
                                this.alert_toastr(
                                    "warning",
                                    "Enlace caducado, realizar nuevamente el proceso",
                                    "Token caducado",
                                    8000
                                );
                            }
                        }
                    });
            }
        }
    }
}
</script>
