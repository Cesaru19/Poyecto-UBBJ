<script>
import $ from "jquery";
import toastr from "toastr/toastr";
import ubbj_api from "@/services/api/ubbj";

export default {
  name: "DocumentChargePreview",
  props: {
    id: String,
    collapse: String,
    target: String,
    tipo: String,
    gif: String,
    embed: String,
    title_doc_msg: String,
    id_usuario: String,
    tipo_doc: String,
    id_status: Number,
    convocatoria: String,
  },
  emits: ["activeIcon"],
  data() {
    return {
      data: null,
      viewDoc: false,
      doc: false,
      pdf_view: false,
      tipos: [6, 7, 18, 8, 17, 4, 5, 0, 6, 7, 8, 9, 10, 17, 11],
    };
  },
  mounted() {
    this.carga_status();
  },
  methods: {
    carga_status() {
      this.data = JSON.parse(sessionStorage.data);
      setTimeout(() => {
        if (this.convocatoria != "estudiante") {
          switch (this.id) {
            case "Acta_Nacimiento":
              if (this.data.doc_actaNacimiento.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_actaNacimiento",
                  active: true,
                });
              }
              break;
            case "CURP":
              if (this.data.doc_curp.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_curp",
                  active: true,
                });
              }
              break;
            case "RFC":
              if (this.data.doc_rfc.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_rfc",
                  active: true,
                });
              }
              break;
            case "Identificacion":
              if (this.data.doc_identificacion.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_identificacion",
                  active: true,
                });
              }
              break;

            case "Comprobante_Domicilio":
              if (this.data.doc_comprobanteDomicilio.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_comprobanteDomicilio",
                  active: true,
                });
              }
              break;
            case "Carta_Motivos":
              if (this.data.doc_CartaMotivos.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_CartaMotivos",
                  active: true,
                });
              }
            case "Experiencia_Profesional":
              if (this.data.doc_expProfesional.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_expProfesional",
                  active: true,
                });
              }
              break;
            case "Fotografia":
              if (this.data.fotografia.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "Fotografia",
                  active: true,
                });
              }
              break;
            default:
              break;
          }
        } else {
          switch (this.id) {
            case "Acta_nacimiento":
              if (this.data.doc_actadeNacimiento.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_actaNacimiento",
                  active: true,
                });
              }
              break;

            case "CURP":
              if (this.data.doc_curp.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_curp",
                  active: true,
                });
              }
              break;

            case "Identificación":
              if (this.data.doc_identificacionOficial.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_identificacionOficial",
                  active: true,
                });
              }
              break;

            case "Certificado":
              if (this.data.doc_Certificado.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_Certificado",
                  active: true,
                });
              }
              break;
            case "Carta_intencion":
              if (this.data.doc_CartaIntencion.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_CartaIntencion",
                  active: true,
                });
              }
              break;
            case "Comprobante_domicilio":
              if (this.data.doc_comprobante.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "doc_comprobante",
                  active: true,
                });
              }
              break;
            case "Fotografia":
              if (this.data.fotografia.length > 1) {
                this.$emit("activeIcon", {
                  tipo: "fotografia",
                  active: true,
                });
              }
              break;
          }
        }
      }, 500);
    },
    ver_pdf(opt) {
      if (opt == this.id) {
        if (this.viewDoc == true) {
          document.getElementById("close_" + this.id).click();
          this.viewDoc = false;
        }
      }
    },

    validationFiles() {
      let fileInput = this.id;
      let gif = this.gif;
      let tipos = this.tipos;
      let tipo = this.tipo;
      let id_doc = this.tipo_doc;

      $("#" + gif).show();
      let archivoInput = document.getElementById(fileInput);
      let archivoRuta = archivoInput.value;
      let extPermitidas = /(.PDF|.pdf)$/i;
      let extPermitidasimg = /(.jpg|.jpeg|.png|.bmp)$/i;
      let fi = document.getElementById(fileInput);
      let totalFileSize = 0;

      switch (tipo) {
        case "fotografia":
          if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
              let fsize = fi.files.item(i).size;
              totalFileSize = totalFileSize + fsize;
              let limit = Math.round(fsize / 1024);
              let limite = 5 * 1024;
              if (limit > limite) {
                $("#" + charge).hide();
                $("#" + icon).hide();
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.warning(
                  "Sólo se permiten archivos con un tamaño menor a 5Mb",
                  "Aviso",
                  { timeOut: 8000 }
                );
                if (id_doc == 0) {
                  this.doc = false;
                  this.data.fotografia = "";
                  this.$emit("activeIcon", {
                    tipo: "fotografia",
                    active: false,
                  });
                }
                if (id_doc == 11) {
                  this.doc = false;
                  this.data.fotografia = "";
                  this.$emit("activeIcon", {
                    tipo: "fotografia",
                    active: false,
                  });
                }
                sessionStorage.data = JSON.stringify(this.data);
                $("#" + fileInput).val("");
                permiso = 0;
                return;
              }
            }
          }

          if (!extPermitidasimg.exec(archivoRuta)) {
            $("#" + gif).hide();
            $("#" + tipo).hide();
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "Sólo se permiten archivos en formatos .jpg | .jpeg | .png | .bmp",
              "Aviso",
              { timeOut: 8000 }
            );

            if (id_doc == 0) {
              this.doc = false;
              this.data.fotografia = "";
              this.$emit("activeIcon", {
                tipo: "fotografia",
                active: false,
              });
            }
            if (id_doc == 11) {
              this.doc = false;
              this.data.fotografia = "";
              this.$emit("activeIcon", {
                tipo: "fotografia",
                active: false,
              });
            }

            permiso = 0;
            $("#" + fileInput).val("");
            return;
          }

          this.cargar_documentos(this.tipo_doc);
          break;

        default:
          toastr.remove();

          if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
              let fsize = fi.files.item(i).size;
              totalFileSize = totalFileSize + fsize;
              let puerquismo = Math.round(fsize / 1024);
              let limite = 5 * 1024;
              if (puerquismo > limite) {
                $("#" + gif).hide();
                $("#" + tipo).hide();
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.warning(
                  "Sólo se permiten archivos con un tamaño menor a 5Mb",
                  "Aviso",
                  { timeOut: 8000 }
                );
                if (id_doc == 6) {
                  this.doc = false;
                  this.data.doc_actaNacimiento = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_actaNacimiento",
                    active: false,
                  });
                }
                if (id_doc == 6) {
                  this.doc = false;
                  this.data.doc_actaNacimiento = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_actaNacimiento",
                    active: false,
                  });
                }
                if (id_doc == 7) {
                  this.doc = false;
                  this.data.curp = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_curp",
                    active: false,
                  });
                }
                if (id_doc == 8) {
                  this.doc = false;
                  this.data.curp = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_identificacionOficial",
                    active: false,
                  });
                }
                if (id_doc == 9) {
                  this.doc = false;
                  this.data.curp = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_Certificado",
                    active: false,
                  });
                }
                if (id_doc == 10) {
                  this.doc = false;
                  this.data.curp = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_CartaIntencion",
                    active: false,
                  });
                }
                if (id_doc == 17) {
                  this.doc = false;
                  this.data.curp = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_comprobante",
                    active: false,
                  });
                }

                if (id_doc == 7) {
                  this.doc = false;
                  this.data.curp = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_curp",
                    active: false,
                  });
                }
                if (id_doc == 18) {
                  this.doc = false;
                  this.data.doc_rfc = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_rfc",
                    active: false,
                  });
                }
                if (id_doc == 8) {
                  this.doc = false;
                  this.data.doc_identificacion = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_identificacion",
                    active: false,
                  });
                }
                if (id_doc == 17) {
                  this.data.doc_comprobanteDomicilio = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_comprobanteDomicilio",
                    active: false,
                  });
                }
                if (id_doc == 4) {
                  this.doc = false;
                  this.data.doc_CartaMotivos = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_CartaMotivos",
                    active: false,
                  });
                }
                if (id_doc == 5) {
                  this.doc = false;
                  this.data.doc_expProfesional = "";
                  this.$emit("activeIcon", {
                    tipo: "doc_expProfesional",
                    active: false,
                  });
                }

                sessionStorage.data = JSON.stringify(this.data);
                $("#" + fileInput).val("");

                return;
              }
            }
          }

          if (!extPermitidas.exec(archivoRuta)) {
            $("#" + gif).hide();
            $("#" + tipo).hide();
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.warning(
              "Sólo se permiten archivos en formato .pdf",
              "Aviso",
              {
                timeOut: 8000,
              }
            );
            if (id_doc == 6) {
              this.doc = false;
              this.data.doc_actaNacimiento = "";
              this.$emit("activeIcon", {
                tipo: "doc_actaNacimiento",
                active: false,
              });
            }
            if (id_doc == 7) {
              this.doc = false;
              this.data.curp = "";
              this.$emit("activeIcon", {
                tipo: "doc_curp",
                active: false,
              });
            }
            if (id_doc == 8) {
              this.doc = false;
              this.data.curp = "";
              this.$emit("activeIcon", {
                tipo: "doc_identificacionOficial",
                active: false,
              });
            }
            if (id_doc == 9) {
              this.doc = false;
              this.data.curp = "";
              this.$emit("activeIcon", {
                tipo: "doc_Certificado",
                active: false,
              });
            }
            if (id_doc == 10) {
              this.doc = false;
              this.data.curp = "";
              this.$emit("activeIcon", {
                tipo: "doc_CartaIntencion",
                active: false,
              });
            }
            if (id_doc == 17) {
              this.doc = false;
              this.data.curp = "";
              this.$emit("activeIcon", {
                tipo: "doc_comprobante",
                active: false,
              });
            }

            if (id_doc == 18) {
              this.doc = false;
              this.data.doc_rfc = "";
              this.$emit("activeIcon", {
                tipo: "doc_rfc",
                active: false,
              });
            }
            if (id_doc == 8) {
              this.doc = false;
              this.data.doc_identificacion = "";
              this.$emit("activeIcon", {
                tipo: "doc_identificacion",
                active: false,
              });
            }
            if (id_doc == 17) {
              this.doc = false;
              this.data.doc_comprobanteDomicilio = "";
              this.$emit("activeIcon", {
                tipo: "doc_comprobanteDomicilio",
                active: false,
              });
            }
            if (id_doc == 4) {
              this.doc = false;
              this.data.doc_CartaMotivos = "";
              this.$emit("activeIcon", {
                tipo: "doc_CartaMotivos",
                active: false,
              });
            }
            if (id_doc == 5) {
              this.doc = false;
              this.data.doc_expProfesional = "";
              this.$emit("activeIcon", {
                tipo: "doc_expProfesional",
                active: false,
              });
            }

            sessionStorage.data = JSON.stringify(this.data);
            $("#" + fileInput).val("");
            return;
          }

          this.cargar_documentos(this.tipo_doc);
          break;
      }
    },

    async cargar_documentos(tipo_doc) {
      let rename = "";
      this.data = JSON.parse(sessionStorage.data);
      const fileInput = this.id;
      const embed = this.embed;
      const gif = this.gif;
      const tipo = this.tipo;
      const rs = this.rs;
      const slug = this.convocatoria == "est" ? "" : "";
      toastr.remove();
      $("#" + gif).show();

      let archivoInput = document.getElementById(fileInput);
      let data = new FormData();

      if (this.convocatoria != "estudiante") {
        data.append("id_usuario", this.id_usuario);
        data.append("doc", fileInput);
        if (tipo_doc != 0) data.append("id_tipodoc", tipo_doc);
        data.append("file", archivoInput.files[0]);
        data.append("id_rs", rs);
      } else {
        data.append("doc", fileInput);
        data.append("file", archivoInput.files[0]);
        data.append("id_usuario", this.id_usuario);
      }

      ubbj_api
        .post(
          `registro/${this.convocatoria}/${
            this.convocatoria == "estudiante" ? "archivo" : "archivos"
          }`,
          data
        )
        .then((response) => {
          switch (this.convocatoria) {
            case "estudiante":
              if (tipo_doc == 6) {
                rename = "Acta de Nacimiento";
              }
              if (tipo_doc == 7) {
                rename = "CURP";
              }
              if (tipo_doc == 8) {
                rename = "Identificacion";
              }
              if (tipo_doc == 9) {
                rename = "Certificado";
              }
              if (tipo_doc == 10) {
                rename = "Carta Intencion";
              }
              if (tipo_doc == 17) {
                rename = "Comprobante Domicilio";
              }
              if (tipo_doc == 11) {
                rename = "Fotografia";
              }

              ubbj_api
                .post("registro/estudiante/4", {
                  id_usuario: this.id_usuario,
                  id_tipodoc: tipo_doc,
                  documento: rename,
                })
                .then(() => {
                  actionBeforeCharge();
                })
                .catch((err) => {
                  return;
                });
              break;

            default:
              actionBeforeCharge();
              break;
          }

          const actionBeforeCharge = () => {
            toastr.options.progressBar = true;
            toastr.options.closeButton = true;
            toastr.success(response.data.message, "Documento", {
              timeOut: 8000,
            });

            if (
              this.tipos.includes(parseInt(tipo_doc)) ||
              this.tipos_rs.includes(parseInt(tipo_doc))
            ) {
              document.getElementById("close_" + fileInput).click();
            }

            let pdffFile = document.querySelector("#" + fileInput).files[0];
            let pdffFileURL = URL.createObjectURL(pdffFile) + "#toolbar=0";
            document
              .querySelector("#" + embed)
              .setAttribute("src", pdffFileURL);

            $("#" + gif).hide();
            $("#" + tipo).show();
            $("#" + fileInput).val("");

            if (
              this.tipos.includes(parseInt(tipo_doc)) ||
              this.tipos_rs.includes(parseInt(tipo_doc))
            ) {
              this.pdf_view = true;
              this.ver_pdf(fileInput);
            }

            if (tipo_doc != 0) {
              switch (tipo_doc) {
                case "6":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.doc_actadeNacimiento = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "doc_actadeNacimiento",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "7":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.doc_curp = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "doc_curp",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "8":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.doc_identificacionOficial = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "doc_identificacionOficial",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "9":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.doc_Certificado = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "doc_Certificado",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "10":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.doc_CartaIntencion = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "doc_CartaIntencion",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "17":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.doc_comprobante = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "doc_comprobante",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "11":
                  this.doc = true;
                  this.viewDoc = true;
                  if (this.convocatoria == "estudiante") {
                    this.data.fotografia = "cargado";
                    this.$emit("activeIcon", {
                      tipo: "fotografia",
                      active: true,
                    });
                  } else {
                    this.data.acreditacion_propiedad = "cargado";
                    this.$emit("activeIcon", {
                      tipo: "acreditacion_propiedad",
                      active: true,
                    });
                  }
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "12":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.carta_solicitud = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "carta_solicitud",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "13":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.levantamiento_terreno = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "levantamiento_terreno",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "14":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.carta_respaldo = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "carta_respaldo",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "15":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.acta_asamblea = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "acta_asamblea",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
                case "16":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.identificacion = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "identificacion",
                    active: true,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                  break;
              }
            } else {
              switch (rs) {
                case "11":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.imagenTerreno1 = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "imagenTerreno1",
                    active: true,
                  });

                  break;
                case "12":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.imagenTerreno2 = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "imagenTerreno2",
                    active: true,
                  });
                  break;
                case "13":
                  this.doc = true;
                  this.viewDoc = true;
                  this.data.imagenTerreno3 = "cargado";
                  this.$emit("activeIcon", {
                    tipo: "imagenTerreno3",
                    active: true,
                  });

                  break;
              }
            }
          };
        })
        .catch((e) => {
          $("#" + gif).hide();
          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.warning("A ocurrido un error", "Documento", {
            timeOut: 8000,
          });
        });
    },
  },
};
</script>

<template>
  <div class="col-md-12 flex responsive_texto">
    <div class="col-md-3">
      <label
        :class="[
          id_status == 17 || id_status == 8
            ? 'btn-folder-disabled form-control btn btn-default btn-file'
            : 'btn-folder form-control btn btn-default btn-file',
        ]"
      >
        Buscar archivos...
        <input
          :id="id"
          type="file"
          :disabled="id_status == 17 || id_status == 8"
          @click="ver_pdf(id)"
          @change="validationFiles()"
          :accept="
            tipo_doc == 0 || (tipo_doc == 11 && convocatoria == 'estudiante')
              ? '.jpg, .jpeg, .png  .bmp'
              : '.pdf'
          "
          style="display: none" /><i
          :class="[
            id_status == 17 || id_status == 8
              ? 'fas fa-lock'
              : 'fas fa-folder-open',
          ]"
        ></i>

        <img
          :id="gif"
          style="display: none"
          class="icon_position_charge3"
          src="@/assets/loading3.gif"
      /></label>
    </div>
    <div
      :hidden="id_status == 17 || id_status == 8"
      v-if="doc"
      class="col-md-9"
    >
      <label
        style="float: right"
        class="btn-folder form-control btn btn-default btn-file"
      >
        {{ viewDoc ? "Cerrar" : "Ver documento" }}
        <input
          :disabled="id_status == 17 || id_status == 8"
          :id="id"
          type="button"
          style="display: none"
          data-toggle="collapse"
          :data-target="target"
          :aria-controls="id"
          aria-expanded="false"
          @click="viewDoc = !viewDoc" /><i
          :class="[viewDoc ? 'fas fa-eye-slash' : 'fas fa-eye']"
        ></i
      ></label>
    </div>
    <a
      hidden
      :id="'close_' + id"
      data-toggle="collapse"
      :data-target="target"
      :aria-controls="id"
      aria-expanded="false"
      class="btn btn-primary"
      @click="pdf_view = false"
      >Cerrar</a
    >
  </div>
  <div class="col-md-12 d-none d-sm-block">
    <div class="collapse" :id="collapse">
      <div class="card card-body">
        <div class="center mt-3" style="text-align: center">
          <img
            v-if="
              tipo_doc == 0 || (tipo_doc == 11 && convocatoria == 'estudiante')
            "
            :id="embed"
            type="application/img"
            style="width: 100%; height: 100%; max-width: 100%"
          />
          <embed
            v-else
            :id="embed"
            type="application/pdf"
            width="100%"
            height="300px"
          />
        </div>
        <br />
        <div class="center mt-3">
          <a
            hidden
            data-toggle="collapse"
            :data-target="target"
            :aria-controls="id"
            aria-expanded="false"
            class="btn btn-primary"
            @click="pdf_view = false"
            >Cerrar</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
