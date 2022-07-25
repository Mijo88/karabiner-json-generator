<template>
  <v-row>
    <v-col cols="12" md="6"></v-col>
    <v-col cols="12" md="6">
      <!-- TEMP TESTING -->
      <v-sheet class="pa-4">
        <v-btn class="mx-1" x-small @click="clearStorage">Clear storage</v-btn>
        <div class="d-flex align-center">
          <v-btn class="mx-1" x-small @click="onAddList">Add list</v-btn>
          <v-btn class="mx-1" x-small @click="onDeleteList">Delete list</v-btn>
        </div>
        <div class="d-flex align-center">
          <v-btn class="mx-1" x-small @click="onAddRules">Add rules</v-btn>
          <v-btn class="mx-1" x-small @click="onDeleteRules">Delete rules</v-btn>
        </div>
        <div class="d-flex align-center">
          <v-btn class="mx-1" x-small @click="onAddManipulator">Add manipulator</v-btn>
          <v-btn class="mx-1" x-small @click="onDeleteManipulator">Delete manipulator</v-btn>
        </div>
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
    ...mapState(['lists', 'rules', 'manipulators']),
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
      this.addRules(this.lists[0].id);
    },

    onDeleteRules() {
      if (this.rules.length < 1) return;

      this.deleteRules(this.rules[0].id);
    },

    onAddManipulator() {
      this.addManipulator(this.rules[0].id);
    },

    onDeleteManipulator() {
      if (this.manipulators.length < 1) return;

      this.deleteManipulator(this.manipulators[0].id);
    },
  },
};
</script>
