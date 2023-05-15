<script>
import $ from "jquery";
import toastr from "toastr/toastr";
import ubbj_api from "@/services/api/ubbj";

export default {
  name: "DocumentsChargePreviewSedes",
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
    rs: String,
    id_status: Number,
  },
  emits: ["activeIcon"],
  data() {
    return {
      data: null,
      viewDoc: false,
      doc: false,
      pdf_view: false,
      tipos: [11, 12, 13, 14, 15, 16, 0],
      tipos_rs: [11, 12, 13],

    };
  },
  mounted() {
    this.carga_status();
  },
  methods: {
    carga_status() {
      this.data = JSON.parse(sessionStorage.data);
      setTimeout(() => {
        switch (this.id) {
          case "Acreditacion_Terreno":
            if (this.data.acreditacion_propiedad.length > 1) {
              this.$emit("activeIcon", {
                tipo: "acreditacion_propiedad",
                active: true,
              });
            }
            break;
          case "Carta_Solicitud":
            if (this.data.carta_solicitud.length > 1) {
              this.$emit("activeIcon", {
                tipo: "carta_solicitud",
                active: true,
              });
            }
            break;
          case "Levantamiento_Terreno":
            if (this.data.levantamiento_terreno.length > 1) {
              this.$emit("activeIcon", {
                tipo: "levantamiento_terreno",
                active: true,
              });
            }
            break;
          case "Carta_Respaldo":
            if (this.data.carta_respaldo.length > 1) {
              this.$emit("activeIcon", {
                tipo: "carta_respaldo",
                active: true,
              });
            }
            break;
          case "Acta_Asamblea":
            if (this.data.acta_asamblea.length > 1) {
              this.$emit("activeIcon", {
                tipo: "acta_asamblea",
                active: true,
              });
            }
            break;
          case "Identificacion":
            if (this.data.identificacion.length > 1) {
              this.$emit("activeIcon", {
                tipo: "identificacion",
                active: true,
              });
            }
            break;
          case "Imagen_Terreno1":
            if (this.data.imagenTerreno1.length > 1) {
              this.$emit("activeIcon", {
                tipo: "imagenTerreno1",
                active: true,
              });
            }
            break;
          case "Imagen_Terreno2":
            if (this.data.imagenTerreno2.length > 1) {
              this.$emit("activeIcon", {
                tipo: "imagenTerreno2",
                active: true,
              });
            }
            break;
          case "Imagen_Terreno3":
            if (this.data.imagenTerreno3.length > 1) {
              this.$emit("activeIcon", {
                tipo: "imagenTerreno3",
                active: true,
              });
            }
            break;
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
      let rs = this.rs;
      let tipos_rs = this.tipos_rs;
      let id_doc = this.tipo_doc;

      $("#" + gif).show();
      let archivoInput = document.getElementById(fileInput);
      let archivoRuta = archivoInput.value;
      let extPermitidas = /(.PDF|.pdf)$/i;
      let extPermitidasimg = /(.jpg|.jpeg|.png|.bmp)$/i;
      let fi = document.getElementById(fileInput);
      let totalFileSize = 0;

      switch (tipo) {
        case '0':
          if (fi.files.length > 0) {
            for (let i = 0; i <= fi.files.length - 1; i++) {
              let fsize = fi.files.item(i).size;
              totalFileSize = totalFileSize + fsize;
              let puerquismo = Math.round(fsize / 1024);
              let limite = 5 * 1024;
              if (puerquismo > limite) {
                $("#" + charge).hide();
                $("#" + icon).hide();
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.warning(
                  "Sólo se permiten archivos con un tamaño menor a 5Mb",
                  "Aviso",
                  { timeOut: 8000 }
                );
                if (rs == 11) {
                  this.doc = false;
                  this.data.imagenTerreno1 = "";
                  this.$emit("activeIcon", {
                    tipo: "imagenTerreno1",
                    active: false,
                  });
                }
                if (rs == 12) {
                  this.doc = false;
                  this.data.imagenTerreno2 = "";
                  this.$emit("activeIcon", {
                    tipo: "imagenTerreno2",
                    active: false,
                  });
                }
                if (rs == '13') {
                  this.doc = false;
                  this.data.imagenTerreno3 = "";
                  this.$emit("activeIcon", {
                    tipo: "imagenTerreno3",
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
            if (rs == 11) {
              this.doc = false;
              this.data.imagenTerreno1 = "";
              sessionStorage.data = JSON.stringify(this.data);

              this.$emit("activeIcon", {
                tipo: "imagenTerreno1",
                active: false,
              });

            }
            if (rs == 12) {
              this.doc = false;
              this.data.imagenTerreno2 = "";
              sessionStorage.data = JSON.stringify(this.data);

              this.$emit("activeIcon", {
                tipo: "imagenTerreno2",
                active: false,
              });
            }
            if (rs == 13) {
              this.doc = false;
              this.data.imagenTerreno3 = "";
              sessionStorage.data = JSON.stringify(this.data);

              this.$emit("activeIcon", {
                tipo: "imagenTerreno3",
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
              let limit = Math.round(fsize / 1024);
              let limite = 5 * 1024;
              if (limit > limite) {
                $("#" + gif).hide();
                $("#" + tipo).hide();
                toastr.options.progressBar = true;
                toastr.options.closeButton = true;
                toastr.warning(
                  "Sólo se permiten archivos con un tamaño menor a 5Mb",
                  "Aviso",
                  { timeOut: 8000 }
                );

                if (id_doc == 11) {
                  this.doc = false;
                  this.data.acreditacion_propiedad = "";
                  this.$emit("activeIcon", {
                    tipo: "acreditacion_propiedad",
                    active: false,
                  });
                  sessionStorage.data = JSON.stringify(this.data);

                }
                if (id_doc == 12) {
                  this.doc = false;
                  this.data.carta_solicitud = "";
                  this.$emit("activeIcon", {
                    tipo: "carta_solicitud",
                    active: false,
                  });
                  sessionStorage.data = JSON.stringify(this.data);

                }
                if (id_doc == 13) {
                  this.doc = false;
                  this.data.levantamiento_terreno = "";
                  this.$emit("activeIcon", {
                    tipo: "levantamiento_terreno",
                    active: false,
                  });
                  sessionStorage.data = JSON.stringify(this.data);

                }
                if (id_doc == 14) {
                  this.doc = false;
                  this.data.carta_respaldo = "";
                  this.$emit("activeIcon", {
                    tipo: "carta_respaldo",
                    active: false,
                  });
                  sessionStorage.data = JSON.stringify(this.data);

                }
                if (id_doc == 15) {
                  this.doc = false;
                  this.data.acta_asamblea = "";
                  this.$emit("activeIcon", {
                    tipo: "acta_asamblea",
                    active: false,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                }
                if (id_doc == 16) {
                  this.doc = false;
                  this.data.identificacion = "";
                  this.$emit("activeIcon", {
                    tipo: "identificacion",
                    active: false,
                  });
                  sessionStorage.data = JSON.stringify(this.data);
                }

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
            toastr.warning("Sólo se permiten archivos en formato .pdf", "Aviso", {
              timeOut: 8000,
            });
            if (id_doc == 11) {
              this.doc = false;
              this.data.acreditacion_propiedad = "";
              this.$emit("activeIcon", {
                tipo: "acreditacion_propiedad",
                active: false,
              });
              sessionStorage.data = JSON.stringify(this.data);

            }
            if (id_doc == 12) {
              this.doc = false;
              this.data.carta_solicitud = "";
              this.$emit("activeIcon", {
                tipo: "carta_solicitud",
                active: false,
              });
              sessionStorage.data = JSON.stringify(this.data);

            }
            if (id_doc == 13) {
              this.doc = false;
              this.data.levantamiento_terreno = "";
              this.$emit("activeIcon", {
                tipo: "levantamiento_terreno",
                active: false,
              });
              sessionStorage.data = JSON.stringify(this.data);

            }
            if (id_doc == 14) {
              this.doc = false;
              this.data.carta_respaldo = "";
              this.$emit("activeIcon", {
                tipo: "carta_respaldo",
                active: false,
              });
              sessionStorage.data = JSON.stringify(this.data);

            }
            if (id_doc == 15) {
              this.doc = false;
              this.data.acta_asamblea = "";
              this.$emit("activeIcon", {
                tipo: "acta_asamblea",
                active: false,
              });
              sessionStorage.data = JSON.stringify(this.data);
            }
            if (id_doc == 16) {
              this.doc = false;
              this.data.identificacion = "";
              this.$emit("activeIcon", {
                tipo: "identificacion",
                active: false,
              });
              sessionStorage.data = JSON.stringify(this.data);
            }

            $("#" + fileInput).val("");
            return;
          }
          this.cargar_documentos(this.tipo_doc);
          break;
      }
    },

    async cargar_documentos(tipo_doc) {

      this.data = JSON.parse(sessionStorage.data);
      const fileInput = this.id;
      const embed = this.embed;
      const gif = this.gif;
      const tipo = this.tipo;
      const rs = this.rs;

      toastr.remove();
      $("#" + gif).show();

      let archivoInput = document.getElementById(fileInput);
      let data = new FormData();

      data.append("id_usuario", this.id_usuario);
      data.append("doc", fileInput);
      if (tipo_doc != 0) data.append("id_tipodoc", tipo_doc);
      data.append("file", archivoInput.files[0]);
      data.append("id_rs", rs);

      ubbj_api
        .post("registro/sede/archivos", data)
        .then((response) => {

          toastr.options.progressBar = true;
          toastr.options.closeButton = true;
          toastr.success(
            response.data.message,
            "Documento",
            {
              timeOut: 8000,
            }
          );

          if (this.tipos.includes(parseInt(tipo_doc)) || this.tipos_rs.includes(parseInt(tipo_doc))) {
            document.getElementById("close_" + fileInput).click();
          }

          let pdffFile = document.querySelector("#" + fileInput)
            .files[0];
          let pdffFileURL =
            URL.createObjectURL(pdffFile) + "#toolbar=0";
          document
            .querySelector("#" + embed)
            .setAttribute("src", pdffFileURL);

          $("#" + gif).hide();
          $("#" + tipo).show();
          $("#" + fileInput).val("");


          if (this.tipos.includes(parseInt(tipo_doc)) || this.tipos_rs.includes(parseInt(tipo_doc))) {
            this.pdf_view = true;
            this.ver_pdf(fileInput);
          }

          if (tipo_doc != 0) {
            switch (tipo_doc) {
              case "11":
                this.doc = true;
                this.viewDoc = true;
                this.data.acreditacion_propiedad = "cargado";
                this.$emit("activeIcon", {
                  tipo: "acreditacion_propiedad",
                  active: true,
                });
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
      <label :class="[
        id_status == 6
          ? 'btn-folder-disabled form-control btn btn-default btn-file'
          : 'btn-folder form-control btn btn-default btn-file',
      ]">
        Buscar archivos...
        <input :id="id" type="file" :disabled="id_status == 17" @click="ver_pdf(id)" @change="validationFiles()"
          :accept="tipo_doc == 0 ? '.jpg, .jpeg, .png  .bmp' : '.pdf'" style="display: none" /><i
          :class="[id_status == 17 ? 'fas fa-lock' : 'fas fa-folder-open']"></i>
        <img :id="gif" style="display: none" class="icon_position_charge2" src="@/assets/loading3.gif" />
      </label>
    </div>
    <div :hidden="id_status == 17" v-if="doc" class="col-md-9">
      <label style="float: right" class="btn-folder form-control btn btn-default btn-file">
        {{ viewDoc ? "Cerrar" : "Ver documento" }}
        <input :disabled="id_status == 17" :id="id" type="button" style="display: none" data-toggle="collapse"
          :data-target="target" :aria-controls="id" aria-expanded="false" @click="viewDoc = !viewDoc" /><i
          :class="[viewDoc ? 'fas fa-eye-slash' : 'fas fa-eye']"></i></label>
    </div>
    <a hidden :id="'close_' + id" data-toggle="collapse" :data-target="target" :aria-controls="id" aria-expanded="false"
      class="btn btn-primary" @click="pdf_view = false">Cerrar</a>
  </div>
  <div class="col-md-12 d-none d-sm-block">
    <div class="collapse" :id="collapse">
      <div class="card card-body">
        <div class="center mt-3" style="text-align: center">
          <embed v-if="tipo_doc != 0" :id="embed" type="application/pdf" width="100%" height="300px" />
          <img v-else :id="embed" type="application/img" style="width: 100%; height: 100%; max-width: 100%" />
        </div>
        <br />
        <div class="center mt-3">
          <a hidden data-toggle="collapse" :data-target="target" :aria-controls="id" aria-expanded="false"
            class="btn btn-primary" @click="pdf_view = false">Cerrar</a>
        </div>
      </div>
    </div>
  </div>
</template>
