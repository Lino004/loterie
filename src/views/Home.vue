<template>
  <div>
    <v-toolbar app id="toolbar">
      <v-btn fab flat>
        <v-icon>dehaze</v-icon>
      </v-btn>
      <v-toolbar-title class="headline text-uppercase">
        <span>TCE</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-flex>
        <v-text-field
          solo
          background-color="tce-bg"
          flat
          append-icon="search"
        ></v-text-field>
      </v-flex>
      <v-btn fab flat small>
        <v-icon>settings</v-icon>
      </v-btn>
      <v-avatar
        :size="45"
        color="grey lighten-4"
      >
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTwQsMkCG8zExu4BhINX1Ywjd81p6E4lATHyVBy2oXVjZvZw5h" alt="avatar">
      </v-avatar>
    </v-toolbar>

    <v-content :style="`height: ${heightContent}px`">
      <v-layout justify-start row fill-height>
        <div xs1>
          <v-navigation-drawer
              v-model="drawer"
              :mini-variant="true"
              hide-overlay
              stateless
              class="shadow"
            >
              <v-list class="pt-0" dense>
                <v-divider></v-divider>

                <v-list-tile
                  v-for="item in items"
                  :key="item.title"
                  class="my-4"
                  @click="$router.push(item.route)"
                >
                  <v-list-tile-action>
                    <v-icon ma-2 medium>{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
              </v-list>
              <v-list-tile
                  style="position: absolute; bottom: 0px"
                  class="red"
                  @click="$router.push('/connexion')"
                >
                  <v-list-tile-action>
                    <v-icon color="white" medium>exit_to_app</v-icon>
                  </v-list-tile-action>
                </v-list-tile>
          </v-navigation-drawer>
        </div>
        <router-view/>
      </v-layout>
    </v-content>
  </div>
</template>

<script>
  export default {
    components: {
    },
    data: () => ({
      heightContent: 0,
        drawer: true,
        items: [
          { route: 'menu1', icon: 'mdi-microsoft' },
          { route: 'menu2', icon: 'fa-users' },
          { route: 'menu3', icon: 'fa-list-ul' },
          { route: '/error', icon: 'fa-ticket-alt' }
        ],
        mini: true,
        right: null
    }),
    mounted () {
      const heightApp = window.getComputedStyle(document.getElementById('tce-app'), null);
      this.heightContent = (parseInt(heightApp.getPropertyValue('height'), 10));
    }
  }
</script>

<style>
.shadow{
  box-shadow: 3px 3px 3px rgba(0, 0, 0, .33);
}
</style>

