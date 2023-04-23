<template>
  <v-app>
    <v-app-bar app>
      <v-btn class="font-weight-bold" large @click="toHome">
        <v-img :width="32" src="@/assets/vernissage_logo.png"></v-img>
        VERNISSAGE
      </v-btn>
      

      <v-spacer></v-spacer>

      <v-btn text small class="ma-1">PRICING</v-btn>
      <v-btn text small class="ma-1">HILFE</v-btn>
      <v-btn text small class="ma-1">REGISTRIEREN</v-btn>
      <v-btn text small class="ma-1">EINLOGGEN</v-btn>

      <v-app-bar-nav-icon @click="switchDrawer"></v-app-bar-nav-icon>
    </v-app-bar>


    <v-main>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <card>
          <v-list nav dense>
            <v-list-item-group>
              <v-list-item v-for="(item, index) in items" :key="index">
                {{ item.title }}-{{ index }}-{{ item.value }}
              </v-list-item>

            </v-list-item-group>

          </v-list>
        </card>
      </v-navigation-drawer>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import Component from 'vue-class-component';
import router from './router';



@Component({})
export default class App extends Vue {
  drawer = false;

  items = [
    {
      title: 'Title 1',
      value: 'Item1',
    },
    {
      title: 'Title 1',
      value: 'Item1',
    },
    {
      title: 'Title 1',
      value: 'Item1',
    },
    {
      title: 'Title 1',
      value: 'Item1',
    },
  ]

  switchDrawer() {
    this.drawer = !this.drawer;
  }

  toHome() {
    router.push({ name: 'home' });
  }

}
</script>

<style>
.v-application {
  font-family: Ysabeau !important;
}


#logo-btn {
  font-weight: black !important;
}
</style>