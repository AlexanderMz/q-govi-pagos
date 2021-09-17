<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="300"
      >
        <q-page class="flex flex-center">
          <q-card bordered flat class="my-card q-pa-md text-caption">
            <q-img src="img/logob1.png" style="width: 25%" />
            <div class="login_split"></div>
            <q-card-section horizontal>
              <q-img class="col-4" style="width: 30%" src="img/pic.png"></q-img>
              <q-form class="q-pa-lg col-8">
                <div class="row">
                  <div class="col-4 q-pt-lg">Server</div>
                  <div class="col-8">
                    <q-select
                      v-model="server"
                      :options="servers"
                      dense
                      hide-hint
                      hide-bottom-space
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 q-pt-lg">Company</div>
                  <div class="col-8">
                    <q-select
                      v-model="loginData.company"
                      :options="companies"
                      dense
                      hide-hint
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 q-pt-lg">User ID</div>
                  <div class="col-8">
                    <q-input
                      v-model="loginData.userId"
                      type="text"
                      dense
                      hide-hint
                    />
                  </div>
                </div>
                <div class="row">
                  <div class="col-4 q-pt-lg">Password</div>
                  <div class="col-8">
                    <q-input
                      v-model="loginData.password"
                      type="password"
                      dense
                      hide-hint
                    />
                  </div>
                </div>
                <div class="q-pt-md">
                  <q-btn
                    class="float-right"
                    label="Log On"
                    unelevated
                    no-caps
                    type="submit"
                    size="sm"
                    color="primary"
                    text-color="dark"
                    @click.prevent="login"
                  />
                </div>
              </q-form>
            </q-card-section>
          </q-card>
        </q-page>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useStore } from "vuex";
import { reactive, toRefs, onMounted, computed } from "vue";

export default {
  name: "Login",

  setup() {
    const store = useStore();
    const pageData = reactive({
      servers: ["192.168.1.30:30015"],
      companies: computed(() => store.getters["auth/getCompanies"]),
      server: "",
      loginData: {
        company: "",
        userId: "",
        password: "",
      },
    });

    const login = () => {
      store.dispatch("auth/Login", pageData.loginData);
    };

    return {
      ...toRefs(pageData),
      login,
    };
  },
};
</script>

<style scoped>
.my-card {
  width: 580px;
  height: 350px;
  border: 4px solid #376fb6;
}
.login_split {
  background-image: url("/img/icons.png");
  background-position: 0px 0px;
  width: 550px;
  height: 15px;
}

.q-field--dense > .q-field__control {
  height: 30px !important;
}

form > div.row {
  height: 15%;
}
</style>
