<template>
  <v-expansion-panel-content color="tertiary">
    <div class="d-flex align-center">
      <v-text-field
        v-model="$attrs.list.description"
        :placeholder="$attrs.list.placeholder"
        label="Description"
        outlined
        dense
        persistent-placeholder
        hide-details
        @blur="onUpdateList"
      />
      <v-icon
        class="ml-2"
        color="red"
        medium
        @click="() => onDeleteList($attrs.list.id)"
      >
        mdi-delete
      </v-icon>
    </div>
  </v-expansion-panel-content>
</template>

<script>
import { storeMixin } from '@/mixins';

export default {
  name: 'KgRulesContent',
  mixins: [storeMixin],
  computed: {

  },
  methods: {
    onDeleteList(listId) {
      this.deleteList(listId);
    },
    onUpdateList() {
      this.updateList(this.$attrs.list);
    },
  },
};
</script>
