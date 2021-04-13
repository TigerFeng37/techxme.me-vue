<template>
  <v-app>
    <v-toolbar
      app
      color="primary"
    >
      <div style="margin-top: .5em">
        <h2>1</h2>
      </div>

      <v-spacer></v-spacer>
      <div class="dark-mode-button-wrapper">
        <v-tooltip v-if="!$vuetify.theme.dark" bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="#fff" small elevation="0" rounded @click="darkMode" class="dark-mode-btn">
              <v-icon class="mr-1">mdi-moon-waxing-crescent</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode Off</span>
        </v-tooltip>

        <v-tooltip v-else bottom>
          <template v-slot:activator="{ on }">
            <v-btn v-on="on" color="#222" small elevation="0" rounded @click="darkMode" class="dark-mode-btn">
              <v-icon>mdi-white-balance-sunny</v-icon>
            </v-btn>
          </template>
          <span>Dark Mode On</span>
        </v-tooltip>
      </div>
    </v-toolbar>
    <v-main >
      <v-container fluid class="d-flex justify-content-between">
        <v-navigation-drawer :v-model="null" height="90vh" color="primary">
          <v-list
            nav
          >
            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="title">
                  Guest
                </v-list-item-title>
                <v-list-item-subtitle>
                  Login
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-divider></v-divider>
            <v-list nav dense>
              <v-list-item
                v-for="item in Link"
                :key="item.index"
                link
              >
                <v-list-item-icon>
                  <v-icon color="accent">{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                  <v-list-item-title style="margin-top: .25em">{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-list>
        </v-navigation-drawer>
        <MainView/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import MainView from './components/MainView';
import './styles/main.css';
import Links from './assets/data/Navigation.json';

export default {
  name: 'App',
  methods: {
    darkMode: function() {
        this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
        localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
  }},

  components: {
    MainView,
  },

  data () {
    return {
      Link: Links
    }
  },
};
</script>