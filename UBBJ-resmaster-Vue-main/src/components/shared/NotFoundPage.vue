<template>
  <div
    style="
      color: #444;
      margin: 0;
      font: normal 14px/20px Arial, Helvetica, sans-serif;
      height: 100%;
      background-color: #fff;
    "
  >
    <div style="height: auto; min-height: 100%">
      <div class="content404">
        <h1 class="title">404</h1>
        <h2 class="subtitle">Página no encontrada</h2>
        <p>¡El recurso solicitado no se pudo encontrar en este servidor!</p>
      </div>
    </div>

    <div class="footer404">
      <br />Por favor, ingrese más tarde o verifique la dirección a la que desea
      acceder.
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
/* estilos 404 */
.content404 {
  text-align: center;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 150px;
  line-height: 150px;
  font-weight: bold;
}

.subtitle {
  margin-top: 20px;
  font-size: 30px;
}

.footer404 {
  text-align: center;
  color: #f0f0f0;
  font-size: 12px;
  margin: auto;
  padding: 0px 30px 0px 30px;
  clear: both;
  height: 50%;
  background-color: #474747;
  border-top: 1px solid rgba(0, 0, 0, 0.15);
  box-shadow: 0 1px 0 rgba(255, 255, 255, 0.3) inset;
  padding-bottom: 10px;
}
</style>
