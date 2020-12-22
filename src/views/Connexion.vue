<template>
  <v-layout align-center justify-center row fill-height>
    <v-btn
      absolute
      top
      left
      flat
      color="white"
      class="mt-5 pt-5"
      to="home/menu1"
    >
      <v-img
        :src="require('@/assets/lonato.png')"
        :lazy-src="require('@/assets/lonato.png')"
        aspect-ratio="" contain
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
    </v-btn>
    <v-flex xs4>
      <v-layout column align-center>
        <div class="size18 font-weight-medium text-green">Bienvenu sur TCE</div>
        <div class="caption text-default">Entrez vos indentifiants pour pouvoir acceder a votre tableau de bord</div>
        <div class="bar ma-4"></div>
        <div class="max-width px-5">
          <v-text-field
            solo
            color="bg-green"
            label="Identifiant"
            prepend-inner-icon="mdi-account-outline"
          ></v-text-field>

          <v-text-field
            solo
            color="bg-green"
            label="Mot de passe"
            prepend-inner-icon="mdi-key-variant"
          ></v-text-field>

          <v-checkbox
            v-model="checkbox"
            label="Se souvenir de moi"
          ></v-checkbox>
          
          <v-layout justify-space-between>
            <v-btn color="bg-green" class="ma-0" to="home/menu1">
                <div class="text-none white--text">
                    Se connecter
                </div>
            </v-btn>
            <v-btn color="tce-bg" class="ma-0" to="good">
                <div class="text-none">
                    J'ai oublié mon mot de passe
                </div>
            </v-btn>
          </v-layout>
        </div>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>

  export default {
    data: () => ({
      checkbox: false
    })
  }
</script>

<style>
.bar{
  width: 48px;
  height: 2px;
  background: #365337;
}
.max-width{
  width: 100%
}
</style>

