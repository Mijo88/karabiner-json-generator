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
      <v-expansion-panels color="primary" dense>
        <v-expansion-panel
          v-for="list in lists"
          :key="`list-${list.id}`"
        >
          <v-expansion-panel-header>
            {{ list.description || list.placeholder }}
          </v-expansion-panel-header>
          <v-expansion-panel-content color="tertiary">
            <!-- PLACEHOLDER -->
            <div class="text-overline">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-sheet>
  </v-sheet>
</template>

<script>
import { mapState } from 'vuex';

import { storeMixin } from '@/mixins';

export default {
  name: 'KgRules',
  mixins: [storeMixin],
  computed: {
    ...mapState(['lists', 'rules', 'manipulators', 'mainContentHeight']),
  },
};
</script>
