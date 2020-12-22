<template>
  <v-layout align-center justify-center row fill-height>
    <v-btn
      absolute
      fab
      top
      left
      color="white"
      class="mt-5"
      to="home/menu1"
    >
      <v-icon color="grey">home</v-icon>
    </v-btn>
    <v-flex xs4>
      <v-layout align-center justify-center column fill-height>
        <v-flex>
          <v-img
            :src="require('@/assets/smile404.png')"
            :lazy-src="require('@/assets/smile404.png')"
            aspect-ratio="2" contain
            class="ma-3"
          >
            <template v-slot:placeholder>
            <v-layout
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
            </v-layout>
            </template>
          </v-img>
          <div class="headline pt-4">Toute nos excuses</div>
          <div class="body-1">La page que vous rechercher n'existe pas</div>
          <v-btn color="bg-green border-btn my-5" class="ma-0" to="home/menu1">
            <div class="text-none white--text">
              Retour
            </div>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs6>
      <v-img
        :src="require('@/assets/error404.png')"
        :lazy-src="require('@/assets/error404.png')"
        aspect-ratio="2" contain
      >
        <template v-slot:placeholder>
        <v-layout
          fill-height
          align-center
          justify-center
          ma-0
        >
          <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
        </v-layout>
        </template>
      </v-img>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data: () => ({
      checkbox: false
    }),
  }
</script>

<style>

</style>

