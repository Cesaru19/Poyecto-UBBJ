<template>
    <div class="row mb-5" style="margin:0px;padding:0px;">
        <div class="container"> <br>
            <div class="opciones mb-2 text-left"><a @click="redirigir('/')"><i class="fas fa-home ml-1"></i> Inicio</a>
                <i class="fas fa-chevron-right ml-1"></i> <a><i class="fas fa-address-card ml-2"></i> Registrar
                    usuario</a>
            </div>
            <div style="width:91%; color:#404041" class="leyendaprincipal txt-md-x1">
                <h1 v-if="rolUsuario != '7'">{{ nameRolUsuario }}</h1>
                <h1 style="color:#404041" v-if="rolUsuario === '7'">
                    Convocatoria para instalación de nuevas sedes</h1>
            </div>
            <div class="alert alert-info"><strong> Completa el siguiente formulario para la creación de la solicitud de
                    candidato a {{ tipo }} </strong> </div>
        </div>
        <div class="container "> <br>
            <div v-if="rolUsuario == '7'" style=" text-align: justify; text-justify: inter-word;"
                class="alert alert-info">
                La presente Convocatoria es exclusiva para autoridades comunitarias, ejidales, comunales o municipales,
                que
                busquen proponer la instalación de una sede educativa de Universidades para el Bienestar Benito Juárez
                García en su localidad.
                <br><br>
                Con el fin de ampliar la información sobre los propósitos y Normas de este Programa les recomendamos la
                atenta lectura de los Lineamientos para la Instalación/Rehabilitación, Equipamiento y Operación de sedes
                educativas del Programa de Universidades para el Bienestar Benito Juárez García. <br>
                Puedes consultar <strong><a target="_blank"
                        href="https://framework-gb.cdn.gob.mx/applications/ubbj/basicos/Lineamientos_de_sedes.pdf">
                        <strong style="color: #106876"> aquí </strong></a></strong>
            </div>
            <h2 style="color:#404041" class="text-left">Datos para el registro</h2>
            <hr class="red">

            <h6 class="titulos text-left">Captura tus datos para el registro del perfil de usuario:</h6>

        </div>
        <div class="container text-left">
            <form role="form" v-if="status_est == 'vigente' || status_doc == 'vigente' || status == 'vigente'">
                <div class="form-group">
                    <div class="row espacio">
                        <div class="col-md-4 ">
                            <label class="control-label " for="CURP">CURP <span
                                    :class="inputs[0].error">*</span>:</label>
                            <div class="input-group">
                                <input id="CURP" :class="inputs[0].class_input" type="text" @input="upper($event)"
                                    placeholder="Ingresa tu CURP"
                                    :disabled="registro[0].nombre != '' || bloqueo == true" v-model="registro[0].curp"
                                    v-on:keypress="keyCurp($event)" :maxlength="max_curp"
                                    @keyup="validaciones('curp');">
                                <div class="input-group-append">
                                    <span style="cursor:pointer" :class="inputs[9].class_input" @click="validar_CURP()">
                                        <i :class="[search ? 'fa fa-undo-alt' : 'fa fa-search']"
                                            aria-hidden="true"></i></span>
                                    <span class="input-group-text">

                                        <label style="margin:0px; cursor:pointer;">
                                            <i @mouseover="hover_tol('curp')" @mouseleave="hover_tol_out('curp')"
                                                class="fa fa-info" aria-hidden="true"></i>
                                        </label>
                                    </span>
                                </div>
                                <div class="invalid-feedback">
                                    {{ inputs[0].text_error }}
                                </div>
                            </div>
                            <a style="color: #2b95a5 !important;  text-decoration: none !important;"
                                href="https://www.gob.mx/curp/" target="_blank">¿No conoces tu CURP?</a>
                        </div>
                        <div class="col-md-4 toll_curp">
                            <input id="chek_curp" type="checkbox">
                            <span v-show="tool_bol">
                                Para completar los campos nombre, apellido materno y apellido paterno da clic en el
                                ícono de buscar <br>
                            </span>
                        </div>
                    </div>

                    <div class="row" style="margin-top:20px;">
                        <div class="col-md-4">
                            <label class="control-label" for="Nombre">Nombre(s) <span :class="inputs[6].error">*</span>
                                :</label>
                            <input disabled :class="inputs[6].class_input" id="Nombre" type="text"
                                placeholder="Nombre(s)" v-model="registro[0].nombre">
                            <div class="invalid-feedback">
                                {{ inputs[6].text_error }}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label class="control-label" for="pa">Primer apellido :</label>
                            <input disabled :class="inputs[7].class_input" id="pa" type="text"
                                placeholder="Apellido paterno" v-model="registro[0].primer_apellido">
                            <div class="invalid-feedback">
                                {{ inputs[7].text_error }}
                            </div>
                        </div>

                        <div class="col-md-4">
                            <label class="control-label" for="pm">Segundo apellido :</label>
                            <input disabled :class="inputs[8].class_input" id="pm" type="text"
                                placeholder="Apellido materno" v-model="registro[0].segundo_apellido">
                            <div class="invalid-feedback">
                                {{ inputs[8].text_error }}
                            </div>
                        </div>
                    </div>

                    <div class="row" style="margin-top:20px;">
                        <div class="col-md-4">
                            <label class="control-label" for="email">Correo electrónico <span
                                    :class="inputs[1].error">*</span> :</label>
                            <input :class="inputs[1].class_input" :disabled="bloqueo == true" id="email" type="text"
                                placeholder="Ingresa tu correo electrónico" v-model="registro[0].email"
                                v-on:keypress="keyEmail($event)" @keyup="validaciones('email')">
                            <div class="invalid-feedback">
                                {{ inputs[1].text_error }}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label class="control-label" for="email_alt">Confirmar correo electrónico <span
                                    :class="inputs[2].error">*</span> :</label>
                            <input :class="inputs[2].class_input" :disabled="bloqueo == true" id="email_alt" type="text"
                                placeholder="Repite el correo electrónico" v-model="registro[0].email_confir"
                                v-on:keypress="keyEmail($event)" @keyup="validaciones('email_alt')">
                            <div class="invalid-feedback">
                                {{ inputs[2].text_error }}
                            </div>
                        </div>
                        <div class="col-md-4">
                            <label class="control-label" for="telefono">Teléfono celular <span
                                    :class="inputs[4].error">*</span> :</label>
                            <input :class="inputs[4].class_input" id="telefono" type="text"
                                placeholder="Ingresa tu número telefónico" :disabled="bloqueo == true"
                                :maxlength="max_tel" v-model="registro[0].telefono" v-on:keypress="keyNum($event)"
                                @keyup="validaciones('tel')">
                            <div class="invalid-feedback">
                                {{ inputs[4].text_error }}
                            </div>
                        </div>
                    </div>
                    <div class="row mb-8" style="margin-top:20px;">
                        <div class="col-md-4">
                            <label class="control-label" for="Contraseña">Contraseña <span
                                    :class="inputs[3].error">*</span>
                                :</label>
                            <div class="input-group">
                                <input :disabled="bloqueo == true" :maxlength="max_password"
                                    :class="inputs[3].class_input" id="Contraseña"
                                    v-bind:type="[showPassword ? 'text' : 'password']" placeholder="Contraseña"
                                    v-model="registro[0].pass" v-on:keypress="keyEmail($event)"
                                    @keyup="validaciones('pass')">
                                <div class="input-group-append">
                                    <span style="cursor:pointer" class="input-group-text"
                                        @click="showPassword = !showPassword;"><i
                                            :class="[showPassword ? 'fa fa-eye' : 'fa fa-eye-slash']"
                                            aria-hidden="true"></i></span>
                                    <span class="input-group-text">
                                        <label style="margin:0px; cursor:pointer;">
                                            <i @mouseover="hover_tol('pass')" @mouseleave="hover_tol_out('pass')"
                                                class="fa fa-info" aria-hidden="true"></i>
                                        </label>
                                    </span>
                                </div>

                                <input hidden :class="inputs[5].class_input">
                                <div class="invalid-feedback">
                                    {{ inputs[3].text_error }}
                                </div>
                            </div>
                        </div>


                        <div class="custom-control custom-checkbox mb-4" style="margin-top:40px; margin-left:20px">
                            <input hidden :disabled="bloqueo == true" type="checkbox" :class="inputs[5].class_input"
                                id="confirmInfo" required v-model="registro[0].check" @click="validaciones('check')">
                            <label class="custom-control-label" for="confirmInfo">Declaro que esta información
                                es correcta *</label>
                            <div class="invalid-feedback">Confirma que esta información es correcta </div>
                        </div>

                        <div v-if="status_est == 'vigente' || status_doc == 'vigente' || status == 'vigente'"
                            class="col-md-4" style="margin-top:35px">
                            <button :disabled="bloqueo == true" style="float:right" type="button"
                                class="btn btn-primary pull-right" @click="registrar()">
                                &nbsp&nbsp&nbsp
                                Enviar &nbsp&nbsp&nbsp </button>

                        </div>
                        <div class="col-md-12"><br></div>
                        <div class="col-md-4 tool">
                            <input id="check_over" type="checkbox">
                            <span v-show="tool_bol" style=" text-align: center; ">
                                La contraseña debe de cumplir con lo siguiente: <br>
                                Longitud de 8 caracteres<br>
                                Al menos una letra mayúscula<br>
                                Al menos una letra minúscula<br>
                                Al menos un número<br>
                                Un carácter especial (@!%*?&#$)
                            </span>
                        </div>
                    </div>

                </div>
            </form>
        </div>
    </div>
</template>
<script>
import ubbj_api from "@/services/api/ubbj";
import toastr from "toastr/toastr"

export default {

    props: {
        rolUsuario: { type: String, required: true },
    },

    data() {
        return {
            max_curp: 18,
            max_password: 8,
            max_tel: 10,
            search: false,
            registro: [
                {
                    curp: '',
                    nombre: '',
                    primer_apellido: '',
                    segundo_apellido: '',
                    email: '',
                    email_confir: '',
                    telefono: '',
                    pass: '',
                    check: false
                }
            ],

            showPassword: false,
            nameRolUsuario: sessionStorage.rolNombre,
            tipo: '',
            status_est: '',
            status_doc: '',
            btn_curp: 'Validar CURP',
            id_convocatoria: '',
            tool_bol: false,
            inputs: [
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'cstom-control-input ',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'form-control',
                    text_error: '',
                    error: 'black'
                },
                {
                    class_input: 'input-group-text',
                    text_error: '',
                    error: 'black'
                }
            ],
            bloqueo: false
        }
    },

    mounted() {
        window.scroll(0, 800)
        this.Convocatoria(this.rolUsuario);
    },

    methods: {

        upper(e) {
            e.target.value = e.target.value.toUpperCase()
        },

        redirigir(ruta) {
            if (ruta != '/') {
                this.$router.push({ path: ruta })
            } else {
                sessionStorage.clear()
                location.href = '/'
            }
        },

        keyCurp(e) {
            let char = String.fromCharCode(e.keyCode)
            if (/^[a-zA-Z1-90]+$/.test(char)) return true
            else e.preventDefault()
        },

        keyNum(e) {
            let char = String.fromCharCode(e.keyCode)
            if (/^[0-9]+$/.test(char)) return true
            else e.preventDefault()
        },

        keyEmail(e) {
            let char = String.fromCharCode(e.keyCode)
            if (/^[a-zA-Z1-9@.#!$%&-_]+$/.test(char)) return true
            else e.preventDefault()
        },

        validaciones(input) {
            if (input == 'curp') {
                if (this.registro[0].curp.length > 1) {
                    if (this.curpValida(this.registro[0].curp)) {
                        this.inputs[0].class_input = 'form-control is-valid'
                        this.inputs[0].text_error = ''
                        this.inputs[0].error = 'black'
                    } else {
                        this.inputs[0].class_input = 'form-control is-invalid'
                        this.inputs[0].text_error = 'Formato de la CURP inválido'
                        this.inputs[0].error = 'red'
                    }
                } else {
                    this.inputs[0].class_input = 'form-control'
                    this.inputs[0].text_error = ''
                    this.inputs[0].error = ''
                }
            }
            if (input == 'email') {
                if (this.registro[0].email.length > 1) {
                    if (this.validEmail(this.registro[0].email)) {
                        this.inputs[1].class_input = 'form-control is-valid'
                        this.inputs[1].text_error = ''
                        this.inputs[1].error = 'black'
                    } else {
                        this.inputs[1].class_input = 'form-control is-invalid'
                        this.inputs[1].text_error = 'Formato Correo electrónico inválido'
                        this.inputs[1].error = 'red'
                    }

                    if (this.inputs[1].class_input == 'form-control is-valid') {
                        if (this.registro[0].email === this.registro[0].email_confir) {
                            this.inputs[2].class_input = 'form-control is-valid'
                            this.inputs[2].text_error = ''
                            this.inputs[2].error = 'black'
                        } else {
                            this.inputs[2].class_input = 'form-control is-invalid'
                            this.inputs[2].text_error =
                                'Las cuentas de correo electrónico no coinciden.'
                            this.inputs[2].error = 'red'
                        }
                    }

                    if (this.inputs[1].class_input == 'form-control is-invalid') {
                        if (this.registro[0].email === this.registro[0].email_confir) {
                            this.inputs[2].class_input = 'form-control is-valid'
                            this.inputs[2].text_error = ''
                            this.inputs[2].error = 'black'
                        } else {
                            this.inputs[2].class_input = 'form-control'
                            this.inputs[2].text_error = ''
                            this.inputs[2].error = 'black'
                        }
                    }
                } else {
                    this.inputs[1].class_input = 'form-control'
                    this.inputs[1].text_error = ''
                    this.inputs[1].error = 'black'
                }
            }
            if (input == 'email_alt') {
                if (this.registro[0].email_confir.length > 1) {
                    if (this.validEmail(this.registro[0].email_confir)) {
                        this.inputs[2].class_input = 'form-control is-valid'
                        if (this.registro[0].email_confir === this.registro[0].email) {
                            this.inputs[2].class_input = 'form-control is-valid'
                            this.inputs[2].text_error = ''
                            this.inputs[2].error = 'black'
                        } else {
                            this.inputs[2].class_input = 'form-control is-invalid'
                            this.inputs[2].text_error =
                                'Las cuentas de correo electrónico no coinciden.'
                            this.inputs[2].error = 'red'
                        }
                    } else {
                        this.inputs[2].class_input = 'form-control is-invalid'
                        this.inputs[2].text_error =
                            'Formato de confirmación de correo inválido'
                        this.inputs[2].error = 'red'
                    }
                } else {
                    this.inputs[2].class_input = 'form-control'
                    this.inputs[2].text_error = ''
                    this.inputs[2].error = 'black'
                }
            }
            if (input == 'pass') {
                if (this.registro[0].pass.length > 1) {
                    if (this.validPass(this.registro[0].pass)) {
                        this.inputs[3].class_input = 'form-control is-valid'
                        this.inputs[3].text_error = ''
                        this.inputs[3].error = 'black'
                    } else {
                        this.inputs[3].class_input = 'form-control is-invalid'
                        this.inputs[3].text_error = 'Formato Contraseña inválida'
                        this.inputs[3].error = 'red'
                    }
                } else {
                    this.inputs[3].class_input = 'form-control'
                    this.inputs[3].text_error = ''
                    this.inputs[3].error = 'black'
                }
            }
            if (input == 'tel') {
                if (this.registro[0].telefono.length == 10) {
                    this.inputs[4].class_input = 'form-control is-valid'
                    this.inputs[4].text_error = ''
                    this.inputs[4].error = 'black'
                } else {
                    this.inputs[4].class_input = 'form-control is-invalid'
                    this.inputs[4].text_error = 'Formato teléfono inválido'
                    this.inputs[4].error = 'red'
                }
                if (this.registro[0].telefono.length == 0) {
                    this.inputs[4].class_input = 'form-control'
                    this.inputs[4].text_error = ''
                    this.inputs[4].error = 'black'
                }
            }
            if (input == 'check') {
                if (this.registro[0].check == false) {
                    this.inputs[5].class_input = 'custom-control-input is-valid'
                    this.inputs[5].text_error = ''
                    this.inputs[5].error = 'black'
                } else {
                    this.inputs[5].class_input = 'custom-control-input is-invalid'
                    this.inputs[5].text_error =
                        'Confirma que esta información es correcta'
                    this.inputs[5].error = 'red'
                }
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

        validar_CURP() {
            this.registro[0].curp = this.registro[0].curp.toUpperCase()
            if (this.btn_curp === 'Validar CURP') {
                if (this.registro[0].curp == null || this.registro[0].curp == '') {
                    this.showToast("Por favor, escribe tu CURP", "Aviso", 8000, "warning");
                } else {
                    if (this.curpValida(this.registro[0].curp)) {
                        ubbj_api.post('registro/renapo/validarCurp', {
                            headers: {
                                'Access-Control-Allow-Origin': '*',
                                'Access-Control-Allow-Methods':
                                    'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                                'Access-Control-Allow-Headers':
                                    'Origin, Content-Type, X-Auth-Token'
                            },
                            curp: this.registro[0].curp
                        })
                            .then(response => {

                                this.btn_curp = 'Validar otra CURP'
                                this.showToast(response.data.message, "CURP", 8000, "success");

                                this.registro[0].nombre = response.data.nombre
                                this.registro[0].primer_apellido = response.data.apaterno
                                this.registro[0].segundo_apellido = response.data.amaterno
                                this.inputs[0].class_input = 'form-control is-valid'
                                this.inputs[0].text_error = ''
                                this.inputs[0].error = 'black'
                                this.inputs[6].class_input = 'form-control is-valid'
                                this.inputs[6].text_error = ''
                                this.inputs[6].error = 'black'
                                this.inputs[9].class_input = 'input-group-text'
                                this.search = true
                            })
                            .catch(e => {
                                this.showToast('Por favor, verifique la CURP.', 'Aviso', 8000, "warning");

                                this.inputs[0].class_input = 'form-control is-invalid'
                                this.inputs[0].text_error = 'Formato de CURP inválido '
                                this.inputs[0].error = 'red'

                                this.search = false
                            })
                    } else {
                        this.showToast('Por favor, verifique la CURP.', 'Aviso', 8000, "warning");

                        this.inputs[0].class_input = 'form-control is-invalid'
                        this.inputs[0].text_error = 'Formato de CURP inválido'
                        this.inputs[0].error = 'red'

                        this.search = false
                    }
                }
            } else {
                this.inputs[0].class_input = 'form-control'
                this.inputs[6].class_input = 'form-control'
                this.inputs[6].text_error = ''
                this.btn_curp = 'Validar CURP'
                this.registro[0].curp = ''
                this.registro[0].nombre = ''
                this.registro[0].primer_apellido = ''
                this.registro[0].segundo_apellido = ''
                this.search = false
            }
        },

        registrar() {
            toastr.remove();
            if (
                this.registro[0].curp == '' &&
                this.registro[0].nombre == '' &&
                this.registro[0].email == '' &&
                this.registro[0].email_confir == '' &&
                this.registro[0].telefono.length < 10 &&
                this.registro[0].pass == '' &&
                this.registro[0].check == false
            ) {
                this.showToast('¡Falta información! Revisa que todos los campos estén completos',
                    'Advertencia', 13000, "warning");

                this.inputs[0].class_input = 'form-control is-invalid'
                this.inputs[0].text_error = 'Escribe tu CURP '
                this.inputs[0].error = 'red'
                this.inputs[1].class_input = 'form-control is-invalid'
                this.inputs[1].text_error = 'Escribe tu correo electrónico'
                this.inputs[1].error = 'red'
                this.inputs[2].class_input = 'form-control is-invalid'
                this.inputs[2].text_error = 'Repite tu correo electrónico'
                this.inputs[2].error = 'red'
                this.inputs[3].class_input = 'form-control is-invalid'
                this.inputs[3].text_error = 'Escribe tu contraseña '
                this.inputs[3].error = 'red'
                this.inputs[4].class_input = 'form-control is-invalid'
                this.inputs[4].text_error = 'Escribe tu teléfono celular '
                this.inputs[4].error = 'red'
                this.inputs[5].class_input = 'custom-control-input is-invalid'
                this.inputs[5].text_error = 'Confirma que esta información es correcta'
                this.inputs[5].error = 'red'
                this.inputs[6].class_input = 'form-control is-invalid'
                this.inputs[6].text_error = 'Nombre requerido'
                this.inputs[6].error = 'red'
            } else {
                if (
                    this.inputs[0].class_input != 'form-control is-valid' ||
                    this.inputs[1].class_input != 'form-control is-valid' ||
                    this.inputs[2].class_input != 'form-control is-valid' ||
                    this.inputs[3].class_input != 'form-control is-valid' ||
                    this.inputs[4].class_input != 'form-control is-valid' ||
                    this.registro[0].check == false ||
                    this.inputs[6].class_input != 'form-control is-valid'
                ) {
                    if (this.inputs[0].class_input == 'form-control is-valid') {
                        this.inputs[0].text_error = ''
                    }

                    if (
                        this.inputs[0].class_input == 'form-control is-valid' &&
                        this.registro[0].nombre == ''
                    ) {
                        this.inputs[0].text_error = 'Por favor, busque su CURP'
                        this.inputs[6].class_input = 'form-control is-invalid'
                        this.inputs[6].text_error = 'Nombre requerido'
                        this.inputs[6].error = 'red'
                        this.inputs[9].class_input = 'input-group-text red'
                    }

                    if (this.registro[0].curp == '') {
                        this.inputs[0].class_input = 'form-control is-invalid'
                        this.inputs[0].text_error = 'Escribe tu CURP'
                        this.inputs[0].error = 'red'
                    }
                    if (this.inputs[1].class_input == 'form-control is-valid') {
                        this.inputs[1].text_error = ''
                    }
                    if (this.registro[0].email == '') {
                        this.inputs[1].class_input = 'form-control is-invalid'
                        this.inputs[1].text_error = 'Escribe tu correo electrónico '
                        this.inputs[1].error = 'red'
                    }

                    if (this.inputs[2].class_input == 'form-control is-valid') {
                        this.inputs[2].text_error = ''
                    }
                    if (this.registro[0].email_confir == '') {
                        this.inputs[2].class_input = 'form-control is-invalid'
                        this.inputs[2].text_error = 'Repite tu correo electrónico'
                        this.inputs[2].error = 'red'
                    }

                    if (this.inputs[4].class_input == 'form-control is-valid') {
                        this.inputs[4].text_error = ''
                    }
                    if (this.registro[0].telefono == '') {
                        this.inputs[4].class_input = 'form-control is-invalid'
                        this.inputs[4].text_error = 'Escribe tu teléfono celular'
                        this.inputs[4].error = 'red'
                    }

                    if (this.inputs[3].class_input == 'form-control is-valid') {
                        this.inputs[3].text_error = ''
                    }
                    if (this.registro[0].pass == '') {
                        this.inputs[3].class_input = 'form-control is-invalid'
                        this.inputs[3].text_error = 'Escribe tu Contraseña'
                        this.inputs[3].error = 'red'
                    }

                    if (
                        this.inputs[0].class_input == 'form-control is-valid' &&
                        this.inputs[1].class_input == 'form-control is-valid' &&
                        this.inputs[2].class_input == 'form-control is-valid' &&
                        this.inputs[3].class_input == 'form-control is-valid' &&
                        this.inputs[4].class_input == 'form-control is-valid' &&
                        this.registro[0].check == false
                    ) {
                        this.inputs[5].class_input = 'custom-control-input is-invalid'
                        this.inputs[5].text_error =
                            'Confirma que esta información es correcta'
                    }
                    if (this.registro[0].check == false) {
                        this.inputs[5].class_input = 'custom-control-input is-invalid'
                        this.inputs[5].text_error =
                            'Confirma que esta información es correcta'
                        this.inputs[5].error = 'red'
                    }

                    if (
                        this.inputs[0].class_input == 'form-control is-valid' &&
                        this.inputs[1].class_input == 'form-control is-valid' &&
                        this.inputs[2].class_input == 'form-control is-valid' &&
                        this.inputs[3].class_input == 'form-control is-valid' &&
                        this.inputs[4].class_input == 'form-control is-valid' &&
                        this.registro[0].check == true &&
                        this.inputs[6].class_input == 'form-control is-valid'
                    ) {
                    } else {

                        let errores = ''
                        for (let i = 0; i < this.inputs.length; i++) {
                            if (this.inputs[i].text_error != '') {
                                errores =
                                    errores + '* ' + this.inputs[i].text_error + '<br><br>'
                            }
                        }
                        this.showToast('<br>' + this.inputs.length + errores, 'Advertencia', 13000, "warning");
                        this.bloqueo = false
                    }
                }
                if (
                    this.inputs[0].class_input == 'form-control is-valid' &&
                    this.inputs[1].class_input == 'form-control is-valid' &&
                    this.inputs[2].class_input == 'form-control is-valid' &&
                    this.inputs[3].class_input == 'form-control is-valid' &&
                    this.inputs[4].class_input == 'form-control is-valid' &&
                    this.registro[0].check == true &&
                    this.registro[0].nombre != ''
                ) {
                    this.bloqueo = true
                    ubbj_api.post('registro', {
                        headers: {
                            'Access-Control-Allow-Origin': '*',
                            'Access-Control-Allow-Methods':
                                'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                            'Access-Control-Allow-Headers':
                                'Origin, Content-Type, X-Auth-Token'
                        },
                        id_rol: this.rolUsuario,
                        id_status: 1,
                        curp: this.registro[0].curp,
                        nombre: this.registro[0].nombre,
                        apaterno: this.registro[0].primer_apellido,
                        amaterno: this.registro[0].segundo_apellido,
                        email: this.registro[0].email,
                        password: this.registro[0].pass,
                        numTel: this.registro[0].telefono,
                        b_estado: 1,
                        id_convocatoria: this.id_convocatoria
                    })
                        .then(response => {

                            this.bloqueo = true
                            const mensaje = response.data.message
                            const folioRP = response.data.folio

                            if (response.data.access_token === undefined) {
                                this.bloqueo = false
                                toastr.options.progressBar = true
                                toastr.options.closeButton = true
                                toastr.warning(mensaje, { timeOut: 8000 })
                            }

                            if (response.data.access_token !== undefined) {
                                this.bloqueo = false
                                toastr.options.progressBar = true
                                toastr.options.closeButton = true

                                toastr.success(mensaje, { timeOut: 8000 })
                            }

                            if (folioRP != undefined) {
                                if (this.rolUsuario == '7') {

                                    this.showToast('El usuario fue creado exitosamente. Sera redireccionado a la pantalla de login captura el correo y contraseña que acabas de crear para ingresar al sistema y registrar la información de la sede que deseas donar.',
                                        'Aviso', 8000, "success");
                                        
                                        this.$router.push({
                                            path: "/login",
                                            query: { rolUsuario: "aspirante_Sede", id: "7" },
                                        });

                                } else {

                                    this.bloqueo = true;
                                    this.showToast('El usuario fue creado exitosamente. Serás redireccionado a la pantalla de inicio de sesión, captura tu correo y contraseña que acabas de crear para ingresar al sistema y registrar la información',
                                        'Aviso', 8000, "success");

                                    
                                        if (this.rolUsuario === '5') {
                                            this.$router.push({
                                                path: "/login",
                                                query: { rolUsuario: "aspirante_estudiante", id: "5" },
                                            });
                                        }
                                        if (this.rolUsuario === '6') {
                                            this.$router.push({
                                                path: "/login",
                                                query: { rolUsuario: "aspirante_Docente", id: "6" },
                                            });
                                        }
                                }
                            }
                        })
                        .catch(e => {
                            this.showToast(e.response.data.message, 'Aviso', 8000, "warning");
                            this.bloqueo = false;
                        })
                }
            }
        },

        validEmail: function (email) {
            var re = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
            return re.test(email)
        },

        hover_tol(x) {
            if (x == 'pass') {
                document.getElementById('check_over').click()
                this.tool_bol = true
            } else {
                document.getElementById('chek_curp').click()
                this.tool_bol = true
            }
        },

        hover_tol_out(x) {
            if (x == 'pass') {
                document.getElementById('check_over').click()
                this.tool_bol = false
            } else {
                document.getElementById('chek_curp').click()
                this.tool_bol = false
            }
        },

        validPass: function (pass) {
            var re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8}$/
            return re.test(pass)
        },

        curpValida: function (curp, e) {
            var re = /^[A-Za-z]{4}([0-9]{6})[HMhm][A-Za-z]{5}([A-Za-z0-9]{1})[0-9]{1}$/
            return re.test(curp)
        },

        async Convocatoria(tipo) {

            console.log("convocatorias");
            ubbj_api.post("listar/convocatorias", {
                id_tipoconv: this.rolUsuario
            })
                .then((respuesta) => {

                    switch (tipo) {
                        case 0:
                            this.$router.push({ path: '/nconvocatorias' })
                            break
                        case '5':
                            const filter = respuesta.data.Convocatorias.reduce(
                                (max, item) => (item.inicio > max ? item.inicio : max),
                                respuesta.data.Convocatorias[0].inicio
                            );

                            let resp = respuesta.data.Convocatorias.find((item) => {
                                return item.inicio == filter;
                            });

                            this.status_est = resp.status;
                            this.id_convocatoria = resp.id_convocatoria;

                            if (this.status_est != 'vigente') {
                                location.href = '/'
                            }
                            if (this.rolUsuario == 5 && this.status == 'cerrada') {
                                this.$router.push({ path: '/nconvocatorias' })
                            }
                            this.tipo = 'estudiante'

                            break
                        case '6':
                            const filterDoc = respuesta.data.Convocatorias.reduce(
                                (max, item) => (item.inicio > max ? item.inicio : max),
                                respuesta.data.Convocatorias[0].inicio
                            );

                            let respDoc = respuesta.data.Convocatorias.find((item) => {
                                return item.inicio == filterDoc;
                            });
                            this.status_doc = respDoc.status;
                            this.id_convocatoria = respDoc.id_convocatoria;

                            if (this.status_doc != 'vigente') {
                                location.href = '/'
                            }
                            if (this.rolUsuario == 6 && this.status == 'cerrada') {
                                this.$router.push({ path: '/nconvocatorias' })
                            }
                            this.tipo = 'docente'
                            break
                        case '7':
                            
                        const filterSed = respuesta.data.Convocatorias.reduce(
                                (max, item) => (item.inicio > max ? item.inicio : max),
                                respuesta.data.Convocatorias[0].inicio
                            );

                            let respSed = respuesta.data.Convocatorias.find((item) => {
                                return item.inicio == filterSed;
                            });
                            this.status = respSed.status;
                            this.id_convocatoria = respSed.id_convocatoria;

                            if (this.status != 'vigente') {
                               location.href = '/'
                            }
                            if (this.rolUsuario == 7 && this.status == 'cerrada') {
                                this.$router.push({ path: '/nconvocatorias' })
                            }
                            this.tipo = 'sede'
                            break
                    }
                });
        },
    }
}
</script>
<style>

</style>