<template>
  <q-page padding>
    <q-card square class="my-card">
      <q-bar class="text-black">
        <div class="col">Pagos afectados</div>
      </q-bar>
      <q-card-section>
        <div class="row items-start">
          <div class="col-1">Codigo</div>
          <div class="col-2">
            <q-input
              dense
              hide-bottom-space
              hide-hint
              v-model="formulario.codigo"
              type="text"
              outlined
            >
              <template v-slot:after>
                <q-btn round dense flat icon="search" />
              </template>
            </q-input>
          </div>
        </div>
        <div class="row items-start">
          <div class="col-1">Nombre</div>
          <div class="col-2">
            <q-input
              dense
              hide-bottom-space
              hide-hint
              v-model="formulario.nombre"
              type="text"
            />
          </div>
        </div>
      </q-card-section>
      <q-card-section> </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup>
import { ref, reactive } from "vue";
const formulario = reactive({
  codigo: "",
  nombre: "",
});
</script>

<style scoped>
.my-card > .q-card__section.q-card__section--vert {
  height: 15% !important;
  padding: 12px !important;
}

.my-card > .q-card__section.q-card__section--vert > .row {
  height: 15% !important;
}

.q-field--dense > .q-field__control {
  height: 30px !important;
}
</style>
