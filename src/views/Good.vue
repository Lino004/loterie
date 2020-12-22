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
            :src="require('@/assets/path49.png')"
            :lazy-src="require('@/assets/path49.png')"
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
          <div class="headline pt-4">Félicitation !!</div>
          <div class="body-1">Bienvenu sur TCE</div>
          <div class="body-1 my-4">Votre compte est desormais actif</div>
          <v-btn color="bg-green border-btn my-5" class="ma-0" to="home/menu1">
            <div class="text-none white--text">
              Terminer
            </div>
          </v-btn>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs6>
      <v-img
        :src="require('@/assets/good.png')"
        :lazy-src="require('@/assets/good.png')"
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

