<template>
  <v-app>
    <v-app-bar
      app
      color="tertiary"
      dark
    >
      <div class="text-overline mx-auto">
        Karabiner JSON Generator - Work In Progress
      </div>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height justify-start" fluid>
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
