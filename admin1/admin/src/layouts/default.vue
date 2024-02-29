<template>
  <div>

    <div class="">
      <q-layout view="lhh lpR lfr" container style="height: 100vh" class="shadow-2 ">
        <q-header elevated :class="$q.dark.isActive ? 'bg-secondary' : 'bg-black'">
          <q-toolbar>
            <q-btn flat @click="miniState = !miniState" round dense icon="menu" />
            <q-toolbar-title>Header</q-toolbar-title>
          </q-toolbar>
        </q-header>

        <q-drawer v-model="drawer" show-if-above :mini="!drawer || miniState" @click.capture="drawerClick" :width="200"
          :breakpoint="500" bordered :class="$q.dark.isActive ? 'bg-grey-9' : 'bg-grey-3'">
          <q-scroll-area class="fit">
            <q-list>
              <q-item :to="item.url" clickable v-ripple v-for="item, index in navMenus" :key="index">

                <q-item-section avatar>
                  <q-icon :name="item.icon" />
                </q-item-section>

                <q-item-section>
                  {{ item.name }}
                </q-item-section>
              </q-item>

            </q-list>
          </q-scroll-area>


        </q-drawer>

        <q-page-container>
          <q-page class="q-px-lg q-py-md">
            <router-view />
          </q-page>
        </q-page-container>
      </q-layout>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'


const navMenus = ref([
  {
    name: 'Dashboard',
    url: '/',
    icon: 'drafts'
  },
  {
    name: 'Ombor',
    url: '/about',
    icon: 'drafts'
  },
  {
    name: 'Xodimlar',
    url: '/home',
    icon: 'drafts'
  },
])

const miniState = ref(false)

const drawer = ref(false)

const drawerClick = (e) => {
  if (miniState.value) {
    miniState.value = false
    e.stopPropagation()
  }
}

</script>