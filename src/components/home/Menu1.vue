<template>
  <v-layout>
    <v-flex xs3>
      <v-layout pa-4 row wrap>
        <div>Resume</div>
        <v-flex py-2 xs12>
          <v-card class="border">
            <v-toolbar class="white" flat>
              Utilisateur(s) connecte(s)
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title class="pt-0">
              <div class="pl-1 headline"> 1/2 </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex py-2 xs12>
          <v-card class="border">
            <v-toolbar class="white" flat>
              Uilisateur(s) desactive(s)
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title class="pt-0">
              <div class="pl-1 headline">1 utilisateur</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex py-2 xs12>
          <v-card class="border">
            <v-toolbar class="white" flat>
              Series generes
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title class="pt-0">
              <div class="pl-1 headline"> 3 series </div>
            </v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex xs9 white>
      <v-content>
        <v-toolbar class="white" flat>
          <div>
            <p>Bienvenue, <strong>Prenom Nom</strong> </p>
            <p class="headline">Tableau de bord</p>
          </div>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-content>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>
