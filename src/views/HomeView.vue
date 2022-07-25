<template>
  <v-row class="fill-height">
    <v-col cols="12" md="6">
      <kg-rules />
    </v-col>
    <v-col cols="12" md="6">
      <!-- TEMP TESTING -->
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
          <div class="text-overline text-center">
            Track changes in Vue DevTools extension
          </div>
          <v-divider class="my-2" />
          <div class="d-flex align-center">
            <v-btn class="mx-1" x-small @click="clearStorage">Clear storage</v-btn>
          </div>
          <v-divider class="my-2" />
          <div class="d-flex align-center">
            <v-btn class="mx-1" x-small @click="onAddList">Add list</v-btn>
            <v-btn class="mx-1" x-small @click="onDeleteList">Delete list</v-btn>
          </div>
          <v-divider class="my-2" />
          <div class="d-flex align-center">
            <v-btn class="mx-1" x-small @click="onAddRules">Add rules</v-btn>
            <v-btn class="mx-1" x-small @click="onDeleteRules">Delete rules</v-btn>
          </div>
          <v-divider class="my-2" />
          <div class="d-flex align-center">
            <v-btn class="mx-1" x-small @click="onAddManipulator">Add manipulator</v-btn>
            <v-btn class="mx-1" x-small @click="onDeleteManipulator">Delete manipulator</v-btn>
          </div>
          <v-divider class="my-2" />
        </v-sheet>
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
import { mapState } from 'vuex';
import { storeMixin } from '@/mixins';

export default {
  name: 'HomeView',
  components: {},
  mixins: [storeMixin],
  data() {
    return {};
  },
  computed: {
    ...mapState(['lists', 'rules', 'manipulators', 'mainContentHeight']),
  },
  mounted() {},
  methods: {
    clearStorage() {
      window.localStorage.clear();
    },

    onAddList() {
      this.addList();
    },

    onDeleteList() {
      if (this.lists.length < 1) return;

      this.deleteList(this.lists[0].id);
    },

    onAddRules() {
      if (this.lists.length < 1) return;

      this.addRules(this.lists[0].id);
    },

    onDeleteRules() {
      if (this.rules.length < 1) return;

      this.deleteRules(this.rules[0].id);
    },

    onAddManipulator() {
      if (this.rules.length < 1) return;

      this.addManipulator(this.rules[0].id);
    },

    onDeleteManipulator() {
      if (this.manipulators.length < 1) return;

      this.deleteManipulator(this.manipulators[0].id);
    },
  },
};
</script>
