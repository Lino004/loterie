<template>
  <v-layout>
    <v-flex xs3>
      <v-layout pa-4 row wrap>
        <div>Resume</div>
        <v-flex py-2 xs12>
          <v-card class="border">
            <v-toolbar class="white" flat>
              Série générées
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title class="pt-0">
              <div class="pl-1 headline"> 3 séries </div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex py-2 xs12>
          <v-card class="border">
            <v-toolbar class="white" flat>
              Séries pour le &nbsp; <strong>Togo</strong>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title class="pt-0">
              <div class="pl-1 headline">2 séries</div>
            </v-card-title>
          </v-card>
        </v-flex>
        <v-flex py-2 xs12>
          <v-card class="border">
            <v-toolbar class="white" flat>
              Séries pour le &nbsp; <strong>Bénin</strong>
              <v-spacer></v-spacer>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-title class="pt-0">
              <div class="pl-1 headline">1 séries</div>
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
            <p class="headline">Séries</p>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="bg-green" large class="ma-0 border" @click="dialog = true">
            <v-icon color="white">add</v-icon>
            <div class="text-none white--text">
              Ajouter une série
            </div>
          </v-btn>
        </v-toolbar>
        <v-container>
          <v-toolbar class="white" flat>
            <v-flex xs2>
              <v-select
                :items="itemPays"
                v-model="pays"
                append-icon="keyboard_arrow_down"
              ></v-select>
            </v-flex>
            <v-spacer></v-spacer>
            <v-flex xs2>
              <v-select
                :items="itemSeries"
                v-model="serie"
                append-icon="keyboard_arrow_down"
              ></v-select>
            </v-flex>
            <v-btn fab medium flat @click="dialog2 = true">
              <v-icon color="yellow">fa-download</v-icon>
            </v-btn> 
          </v-toolbar>
        </v-container>
      </v-content>
    </v-flex>
    <v-dialog v-model="dialog" persistent max-width="500px">
      <v-card class="border">
        <v-card-title>
          <span class="headline">Nouvel utilisateur</span>
          <v-spacer></v-spacer>
          <v-btn @click="dialog = false" fab medium flat>
            <v-icon color="grey">far fa-times-circle</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12>
                <v-select
                  :items="itemPays"
                  label="Pays"
                  outline
                  prepend-inner-icon="far fa-flag"
                  append-icon="keyboard_arrow_down"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-select
                  :items="itemSeries"
                  label="Type"
                  outline
                  prepend-inner-icon="fa-list"
                  append-icon="keyboard_arrow_down"
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="bg-green" class="white--text border-btn" block @click="dialog = false">Créer la série</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialog2" persistent max-width="500px">
      <v-card class="border">
        <v-card-title>
          <span class="headline">Choisissez un format</span>
          <v-spacer></v-spacer>
          <v-btn @click="dialog2 = false" fab medium flat>
            <v-icon color="grey">far fa-times-circle</v-icon>
          </v-btn>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout align-center justify-center wrap>
              <v-flex>
                <v-img
                  :src="require('@/assets/Path 5.png')"
                  :lazy-src="require('@/assets/Path 5.png')"
                  aspect-ratio="1"
                  contain
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
              <v-flex>
                <v-img
                  :src="require('@/assets/Path 6.png')"
                  :lazy-src="require('@/assets/Path 6.png')"
                  aspect-ratio="1"
                  contain
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
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-btn color="white" class="text-green border-btn" block @click="dialog2 = false">Annuler</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      dialog: false,
      dialog2: false,
      itemPays: ['TOGO', 'BENIN', 'CI'],
      itemSeries: ['Serie Y'],
      checkbox: true,
      pays: 'TOGO',
      serie: 'Serie Y'
    }
  },
  methods: {}
}
</script>

<style>
.tabClass {
  border: 1px solid black;
  border-collapse: collapse;
}

.tabClass2 {
  padding: 15px;
}
</style>
