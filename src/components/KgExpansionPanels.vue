<template>
  <v-expansion-panels accordion>
    <v-expansion-panel
      v-for="panel in panels"
      :key="panel.id"
    >
      <v-expansion-panel-header color="grey darken-3" hide-actions>
        {{ panel.header }}
      </v-expansion-panel-header>
      <v-expansion-panel-content class="pt-4" color="blue-grey">
        <component :is="panel.component" v-bind="panel.props" @change="panel.events.change" />
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'KgExpansionPanels',
  props: {
    panels: {
      type: Array,
      required: true,
      default: () => [],
    },
  },
};
</script>

<style scoped lang="scss">
.v-expansion-panels {
  .v-expansion-panel-header {
    font-size: 0.75rem;
    padding: 0 1rem;
    min-height: 32px;
  }
}

</style>
