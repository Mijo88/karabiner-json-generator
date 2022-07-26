<template>
  <v-sheet
    class="fill-height pa-4 overflow-y-hidden"
    color="primary"
    :height="mainContentHeight"
  >
    <v-sheet
      class="overflow-y-auto"
      color="primary"
      :height="mainContentHeight - 32"
    >
      <v-expansion-panels color="primary" dense accordion>
        <v-expansion-panel
          v-for="list in lists"
          :key="`list-${list.id}`"
        >
          <v-expansion-panel-header>
              <div class="text-caption">
                {{ list.description || list.placeholder }}
              </div>
          </v-expansion-panel-header>
          <kg-rules-content
            :list="list"
          />
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-sheet>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'KgRules',
  computed: {
    ...mapState(['lists', 'mainContentHeight']),
  },
};
</script>
