<template>
  <!--modal-->
  <div class="modal fade" :id="id" role="dialog">
    <div class="modal-dialog modal-custom">
      <!-- Modal content-->
      <div class="modal-content modal-custom">
        <div class="modal-header">
          <h4 class="modal-title">
            <strong>{{ title }}</strong>
          </h4>
        </div>
        <div class="modal-body">
          <p>{{ question }}</p>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary pull-righ"
            @click="action_modal()"
            data-dismiss="modal"
          >
            Aceptar
          </button>
          <button type="button" class="btn btn-default" data-dismiss="modal">
            Cerrar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ModalAction",
  props: {
    id: String,
    title: String,
    question: String,
    borrado: String,
  },
  methods: {
    action_modal() {
      this.$emit(this.borrado);
    },
  },
};
</script>
<style lang=""></style>
