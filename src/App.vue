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

<style lang="scss">
.v-menu__content {
  &.options {
    .v-list {
      background: #000 !important;
      color: #222;
    }
  }
}

.compact {
  .v-select__selections,
  .v-input__slot,
  .v-list-item {
    min-height: 0 !important;
    height: 32px;
  }

  .v-input__append-inner {
    margin-top: 4px !important;

    .v-icon {
      font-size: 1rem;
    }
  }

  .v-chip {
    height: 1rem !important;

    .v-chip__content {
      font-size: 0.7rem;
    }

    .v-icon {
      font-size: 0.75rem !important;
    }
  }

  .v-select__selections {
    input {
      padding: 0px;
    }
  }
}

.v-select-list {
  .v-list-item {
    min-height: 0 !important;
  }

  .v-list-item__content {
    padding: 4px 0 !important;
  }
}
</style>
