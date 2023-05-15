<template >
    <main class="page">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-6 offset-md-3"><br>
                    <h3 class="text-center">
                        Recuperación de contraseña
                    </h3>
                    <hr>
                    <form role="form">
                        <div class="form-group"><label for="email-01" class="control-label">Correo electrónico <span
                                    v-if="inputs[0].class_input == 'form-control is-invalid'" class='red'>*</span>
                                :</label>
                            <input :class="inputs[0].class_input" id="email" v-model="email"
                                placeholder="Correo electrónico" type="text" autocomplete="off" style="width: 100%;"
                                @keyup="validaciones()">
                            <div class="invalid-feedback">
                                {{  inputs[0].text_error  }}
                            </div>
                        </div>
                    </form>
                    <input class="btn btn-primary pull-right" type="submit" value="Enviar" id="Ingresar"
                        style="float:right;" name="Ingresar" @click="recuperaContrasena();">
                </div>
            </div>
        </div> <br><br>
    </main>
</template>
<script>

import toastr from "toastr/toastr"
import ubbj_api from '@/services/api/ubbj';

export default {
    data() {
        return {
            message: "",
            msgError: false,
            msgSucces: false,
            email: '',
            inputs: [
                {
                    class_input: 'form-control', text_error: '', error: 'black'
                }
            ],
        }
    },

    methods: {

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

        validaciones() {
            if (this.email.length > 1) {
                if (this.validEmail(this.email)) {
                    this.inputs[0].class_input = "form-control is-valid"
                } else {
                    this.inputs[0].class_input = "form-control "; this.inputs[0].text_error = ""; this.inputs[0].error = 'black'
                }
            }
            if (this.email == "") {
                this.inputs[0].class_input = "form-control"; this.inputs[0].text_error = ""; this.inputs[0].error = 'black'
            }
        },

        validEmail: function (email) {
            var re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            return re.test(email);
        },

        recuperaContrasena() {
            let correo_valido = this.validEmail(this.email);
            if (this.email == '') {
                this.alert_toastr('warning', 'Por favor, escriba un correo electrónico', 'Aviso', 8000);
                this.inputs[0].class_input = "form-control is-invalid";
                this.inputs[0].text_error = "Escriba el correo electrónico";
            } else {
                if (correo_valido == true) {
                    ubbj_api.post('forgotPassword', { email: this.email })
                        .then(respuesta => {
                            if (respuesta.data.message == 'No existe una cuenta con el correo ' + this.email) {
                                this.showToast('verifique su información', 'Aviso', 8000, "warning");
                                this.inputs[0].class_input = "form-control is-invalid";
                                this.inputs[0].text_error = "No existe una cuenta con el correo";
                            } else {
                                this.showToast(respuesta.data.message, 'Recuperación de contraseña', 8000, "success");
                                this.inputs[0].class_input = "form-control is-valid";
                                this.inputs[0].text_error = "N";
                            }
                        }).catch(error => {
                            console.log(error.request);
                        });
                } else {
                    this.showToast('Por favor, verifique el formato del correo electrónico', 'Aviso', 8000, "warning");
                    this.inputs[0].class_input = "form-control is-invalid";
                    this.inputs[0].text_error = "Formato incorrecto";
                }
            }
        },
        validEmail: function (email) {
            var re = /[\w-\.]{2,}@([\w-]{2,}\.)*([\w-]{2,}\.)[\w-]{2,4}$/;
            return re.test(email);
        },
    },
}
</script>