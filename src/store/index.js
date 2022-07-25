import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import { v4 as uuid } from 'uuid';

import {
  ADD_LIST,
  DELETE_LIST,
  ADD_RULES,
  DELETE_RULES,
  ADD_MANIPULATOR,
  DELETE_MANIPULATOR,
} from '@/constants/mutations';

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

Vue.use(Vuex);

// TODO: split into modules
export default new Vuex.Store({
  state: {
    lists: [],
    rules: [],
    manipulators: [],
  },
  getters: {
  },
  mutations: {
    // LISTS
    [ADD_LIST](state) {
      const id = uuid();
      const list = {
        id,
        placeholder: `Rules ${id}`,
        description: '',
      };
      state.lists = [...state.lists, list];
    },
    [DELETE_LIST](state, payload) {
      state.lists = state.lists.filter(({ id }) => id !== payload.id);
    },
    // RULES
    [ADD_RULES](state, payload) {
      const id = uuid();
      const rules = {
        id,
        placeholder: `Manipulators ${id}`,
        label: '',
        list_id: payload.list_id,
      };
      state.rules = [...state.rules, rules];
    },
    [DELETE_RULES](state, payload) {
      state.rules = state.rules.filter(({ id }) => id !== payload.id);
    },
    // MANIPULATORS
    [ADD_MANIPULATOR](state, payload) {
      const id = uuid();
      const manipulator = {
        id,
        rules_id: payload.rules_id,
        placeholder: `Manipulator ${id}`,
        label: '',
        data: {},
      };
      state.manipulators = [...state.manipulators, manipulator];
    },
    [DELETE_MANIPULATOR](state, payload) {
      state.manipulators = state.manipulators.filter(({ id }) => id !== payload.id);
    },
  },
  actions: {
  },
  modules: {
  },
  plugins: [vuexLocal.plugin],
});
