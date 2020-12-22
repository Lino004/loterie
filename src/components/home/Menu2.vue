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
              En attente d'activation
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
      </v-layout>
    </v-flex>
    <v-flex xs9 white>
      <v-content>
        <v-toolbar class="white" flat>
          <div>
            <p>Bienvenue, <strong>Prenom Nom</strong> </p>
            <p class="headline">Utilisateurs</p>
          </div>
          <v-spacer></v-spacer>
          <v-btn color="bg-green" large class="ma-0 border" @click="dialog = true">
            <v-icon color="white">add</v-icon>
            <div class="text-none white--text">
              Ajouter un utilisateur
            </div>
          </v-btn>
        </v-toolbar>
        <div class="pa-4">
          <v-data-table
            :headers="headers"
            :items="tab"
            class="elevation-1"
            hide-actions
          >
            <template v-slot:items="props">
              <td class="text-xs-center">{{ props.item.num }}</td>
              <td class="text-xs-center">{{ props.item.ref }}</td>
              <td class="text-xs-center">{{ props.item.date }}</td>
              <td class="text-xs-center">{{ props.item.name }}</td>
              <td class="text-xs-center">{{ props.item.profil }}</td>
              <td class="text-xs-center">{{ props.item.pays }}</td>
              <td class="text-xs-center">{{ props.item.statut }}</td>
              <td class="text-xs-center">
                <v-btn fab small flat>
                  <v-icon color="success">check_circle</v-icon>
                </v-btn>
                <v-btn fab small flat>
                  <v-icon color="error">remove_circle</v-icon>
                </v-btn>
              </td>
            </template>
          </v-data-table>
        </div>
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
              <v-flex xs12 sm6>
                <v-select
                  :items="items"
                  label="Pays"
                  outline
                  prepend-inner-icon="far fa-flag"
                  append-icon="keyboard_arrow_down"
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="items"
                  label="Type"
                  outline
                  prepend-inner-icon="fa-user-tag"
                  append-icon="keyboard_arrow_down"
                ></v-select>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-inner-icon="far fa-address-card" outline label="Nom" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-inner-icon="far fa-address-card" outline label="Prenom (s)" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-inner-icon="fa-user-alt" outline label="Nom d'utilisateur" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field prepend-inner-icon="far fa-envelope" outline label="Email" required></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          <v-checkbox
            v-model="checkbox"
            color="green darken-4"
            label="Activer cet utilisateur à la creation"
          ></v-checkbox>
        </v-card-text>
        <v-card-actions>
          <v-btn color="bg-green" class="white--text border-btn" block @click="dialog = false">Créer l'utilisateur</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      headers: [
        { text: '#', align: 'center', value: 'num' },
        { text: 'Ref', align: 'center', value: 'ref' },
        { text: 'Date', align: 'center', value: 'date' },
        { text: "Nom de l'utilisateur", align: 'center', value: 'name' },
        { text: 'Profil', align: 'center', value: 'profil' },
        { text: 'Pays', align: 'center', value: 'pays' },
        { text: 'Statut', align: 'center', value: 'statut' },
        { text: '', align: 'center' }
      ],
      tab: [
        {
          num: 1,
          ref: 'R12345',
          date: '09/06/19',
          name: 'Koffi KOUADOU',
          profil: 'Admin',
          pays: 'Benin',
          statut: 'Connecte'
        },
        {
          num: 2,
          ref: 'R67890',
          date: '10/06/19',
          name: 'Ernest ALAVE',
          profil: 'Admin',
          pays: 'Togo',
          statut: 'Actif'
        },
        {
          num: 3,
          ref: 'R13579',
          date: '09/06/19',
          name: 'Gregorie ATAKPE',
          profil: 'Utilisateur',
          pays: 'Burkina Faso',
          statut: 'Desactive'
        },
        {
          num: 4,
          ref: 'R24680',
          date: '10/06/19',
          name: 'Kikiki KOTE',
          profil: 'Utilisateur',
          pays: "Cote d'Ivoire",
          statut: 'En attente'
        }
      ],
      dialog: false,
      items: ['Foo', 'Bar', 'Fizz', 'Buzz'],
      checkbox: true
    }
  },
  methods: {}
}
</script>

<style>

</style>
