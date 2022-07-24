<template>
  <v-app>
    <v-app-bar
      app
      color="tertiary"
      dark
    >
      <div>bar</div>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
    <v-footer></v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    //
  }),
};
</script>
