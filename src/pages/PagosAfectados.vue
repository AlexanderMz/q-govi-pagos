<template>
  <q-page padding>
    <q-card square class="my-card">
      <q-bar class="text-black">
        <div class="col">Pagos afectados</div>
      </q-bar>
      <q-card-section class="row no-wrap">
        <div class="col-4">
          <q-input
            v-model="formulario.codigo"
            label="Codigo"
            dense
            hide-bottom-space
            color="dark"
            hide-hint
            type="text"
          >
            <template #append>
              <q-icon
                round
                dense
                flat
                name="search"
                style="cursor: pointer"
                @click="confirm = true"
              />
            </template>
          </q-input>
          <q-input
            v-model="formulario.nombre"
            label="Nombre"
            color="dark"
            dense
            hide-bottom-space
            hide-hint
            type="text"
          />
          <q-select
            v-model="pagarA"
            color="dark"
            :options="pagarA"
            option-label="u_DB"
            option-value="u_DB"
            dense
            emit-value
            map-options
            hide-hint
            @update:model-value="void 0"
          />
          <q-input
            v-model="formulario.nombre"
            dense
            color="dark"
            label="Pagar a"
            hide-bottom-space
            hide-hint
            filled
            type="textarea"
          />
          <q-input
            v-model="formulario.nombre"
            label="Persona de contacto"
            color="dark"
            dense
            hide-bottom-space
            hide-hint
            type="text"
          />
          <q-input
            v-model="formulario.nombre"
            label="Proyecto"
            color="dark"
            dense
            hide-bottom-space
            hide-hint
            type="text"
          />
          <q-input
            v-model="formulario.nombre"
            label="Acuerdo global"
            color="dark"
            dense
            hide-bottom-space
            hide-hint
            type="text"
          />
          <q-input
            v-model="formulario.nombre"
            label="Sucursal"
            color="dark"
            dense
            hide-bottom-space
            hide-hint
            type="text"
          />
          <q-select
            v-model="pagarA"
            label="Número de reg. de sucursal"
            color="dark"
            :options="pagarA"
            option-label="u_DB"
            option-value="u_DB"
            dense
            emit-value
            map-options
            hide-hint
            @update:model-value="void 0"
          />
          <q-checkbox
            dense
            label="Visualizar factura con misma dirección de facturación"
          />
        </div>
        <div class="col-4 column">
          <q-radio
            v-for="(opt, i) in optionstypes"
            :key="i"
            v-model="formulario.tipo"
            :label="opt"
            :val="opt"
            dense
          />
        </div>
        <div class="col-4">
          <div class="row">
            <q-select
              v-model="pagarA"
              color="dark"
              :options="pagarA"
              option-label="u_DB"
              option-value="u_DB"
              dense
              class="col-3 q-pr-sm"
              emit-value
              map-options
              hide-hint
              @update:model-value="void 0"
            />
            <q-input
              v-model="formulario.nombre"
              class="col"
              dense
              color="dark"
              label="N°."
              hide-bottom-space
              hide-hint
              filled
              type="text"
            />
          </div>
          <q-input
            v-model="formulario.fecha"
            type="date"
            label="Fecha de contabilización"
          />
          <q-input
            v-model="formulario.fecha"
            type="date"
            label="Fecha de vencimiento"
          />
          <q-input
            v-model="formulario.fecha"
            type="date"
            label="Fecha de documento"
          />
          <q-input
            v-model="formulario.nombre"
            dense
            color="dark"
            label="Referencia"
            hide-bottom-space
            hide-hint
            filled
            type="text"
          />
          <q-input
            v-model="formulario.nombre"
            dense
            color="dark"
            label="Número de operación"
            hide-bottom-space
            hide-hint
            filled
            disable
            type="text"
          />
          <q-select
            v-model="pagarA"
            label="Dispersion"
            color="dark"
            :options="pagarA"
            option-label="u_DB"
            option-value="u_DB"
            dense
            emit-value
            map-options
            hide-hint
            @update:model-value="void 0"
          />
          <q-select
            v-model="pagarA"
            label="Domiciliado"
            color="dark"
            :options="pagarA"
            option-label="u_DB"
            option-value="u_DB"
            dense
            emit-value
            map-options
            hide-hint
            @update:model-value="void 0"
          />
        </div>
      </q-card-section>
      <q-card-section>
        <q-table
          dense
          hide-no-data
          :rows="rows"
          :columns="columns"
          row-key="name"
          selection="multiple"
          style="min-height: 200px"
        />
        <div class="row justify-end">
          <q-checkbox dense class="q-pr-sm" label="Pago a cuenta" />
          <q-input
            dense
            color="dark"
            hide-bottom-space
            hide-hint
            filled
            disable
            type="text"
            v-text="0.0"
          />
        </div>
        <div class="row justify-end">
          <q-input
            label="Comentarios"
            dense
            class="col q-pr-sm"
            color="dark"
            hide-bottom-space
            hide-hint
            filled
            type="text"
          />
          <q-input
            label="Importe vencido total"
            dense
            color="dark"
            hide-bottom-space
            hide-hint
            filled
            disable
            type="text"
          />
        </div>
        <div class="row justify-end">
          <q-input
            label="Descripcion dispersion"
            dense
            class="col q-pr-sm"
            color="dark"
            hide-bottom-space
            hide-hint
            filled
            type="text"
          />
          <q-input
            label="Saldo pendiente"
            dense
            color="dark"
            hide-bottom-space
            hide-hint
            filled
            disable
            type="text"
          />
        </div>
        <div class="row">
          <q-checkbox dense label="Creado por asistente de pagos" />
        </div>
      </q-card-section>
      <q-card-actions class="row">
        <div class="col">
          <q-btn
            unelevated
            no-caps
            size="sm"
            class="q-pr-sm"
            color="warning"
            label="Crear"
          />
          <q-btn unelevated no-caps size="sm" color="grey" label="Cancelar" />
        </div>
        <div class="justify-end">
          <q-btn
            unelevated
            no-caps
            size="sm"
            color="grey"
            label="Desmarcar todo"
          />
          <q-btn
            unelevated
            no-caps
            size="sm"
            color="grey"
            label="Añadir en serie"
          />
        </div>
      </q-card-actions>
    </q-card>
    <q-dialog v-model="confirm" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm"
            >You are currently not connected to any network.</span
          >
        </q-card-section>
        <q-card-actions align="right">
          <q-btn v-close-popup flat label="Cancel" color="primary" />
          <q-btn v-close-popup flat label="Turn on Wifi" color="primary" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
import { ref, reactive, toRefs } from "vue";
export default {
  name: "PagosAfectados",
  setup() {
    const fecha = new Date().toISOString().substr(0, 10);
    console.log(fecha);
    const pagarA = ref([]);
    const rows = ref([]);
    const columns = ref([]);
    const confirm = ref(false);
    const optionstypes = ref(["Proveedor", "Cliente", "Cuenta"]);
    const formulario = reactive({
      codigo: "",
      nombre: "",
      tipo: "",
      fecha: fecha,
    });

    return {
      formulario,
      pagarA,
      rows,
      columns,
      confirm,
      optionstypes,
    };
  },
};
</script>

<style lang="scss" scoped>
.my-card {
  .q-card__section {
    &--vert {
      min-height: 15% !important;
      padding: 12px !important;
    }
  }
}

// .my-card {
//   .q-card__section {
//     &--vert {
//       .row {
//         height: 15% !important;
//       }
//     }
//   }
// }
</style>
