import {
  ADD_LIST,
  DELETE_LIST,
  ADD_RULES,
  DELETE_RULES,
  ADD_MANIPULATOR,
  DELETE_MANIPULATOR,
  SET_MAIN_CONTENT_HEIGHT,
  UPDATE_LIST,
} from '@/constants/mutations';

export default {
  methods: {
    // LISTS
    addList() {
      this.$store.commit(ADD_LIST);
    },
    deleteList(listId) {
      this.$store.commit(DELETE_LIST, { id: listId });
    },
    updateList(list) {
      this.$store.commit(UPDATE_LIST, list);
    },
    // RULES
    addRules(listId) {
      this.$store.commit(ADD_RULES, { list_id: listId });
    },
    deleteRules(rulesId) {
      this.$store.commit(DELETE_RULES, { id: rulesId });
    },
    // MANIPULATORS
    addManipulator(rulesId) {
      this.$store.commit(ADD_MANIPULATOR, { rules_id: rulesId });
    },
    deleteManipulator(manipulatorId) {
      this.$store.commit(DELETE_MANIPULATOR, { id: manipulatorId });
    },
    commitMainContentHeight(heightPx) {
      this.$store.commit(SET_MAIN_CONTENT_HEIGHT, heightPx);
    },
  },
};
