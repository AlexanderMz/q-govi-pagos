<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          text-color="dark"
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-black">
          Portal
        </q-toolbar-title>
        <q-space />
        <q-btn dense flat text-color="dark" icon="logout" @click="logout" />
      </q-toolbar>
    </q-header>    

    <q-page-container>
      <transition
        enter-active-class="animated fadeIn"
        leave-active-class="animated fadeOut"
        appear
        :duration="300"
      >
        <keep-alive>
          <router-view />
        </keep-alive>
      </transition>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const router = useRouter()
    const store = useStore()
    return {      
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      logout: () => {
        store.dispatch("auth/Logout")
        router.push('/login')
      }
    }
  }
})
</script>
