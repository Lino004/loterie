<template>
  <v-app id="tce-app">
    <v-container pa-0 fluid class="tce-bg">
      <router-view/>
    </v-container>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      //
    }
  }
}
</script>

<style>
.tce-bg{
  background-color: #E5E5E5 !important
}
.size18{
  font-size: 18px !important
}
.text-green{
  color: #365337 !important
}
.bg-green{
  background-color: #365337 !important
}
.text-default{
  color: #777777 !important
}
.border {
  border-radius: 10px;
}.border-btn {
  border-radius: 6px;
}
</style>

