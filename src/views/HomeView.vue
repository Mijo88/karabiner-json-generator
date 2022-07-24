<template>
  <v-row>
    <v-col cols="12" md="6"></v-col>
    <v-col cols="12" md="6">
      <v-sheet class="pa-4">
        <kg-options-list
          :items="items"
          item-text="a"
          item-value="b"
          :multiple="true"
          :selected="selected"
          label="Test"
          @change="(items) => onChange('foo', items)"
        />
        <kg-expansion-panels
          :panels="panels"
        />
      </v-sheet>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'HomeView',
  components: {},
  data(...arg) {
    console.log(arg);
    return {
      items: [
        { a: 'foo', b: 1 },
        { a: 'bar', b: 2 },
        { a: 'baz', b: 3 },
      ],
      selected: [],
      panels: [],
    };
  },
  mounted() {
    this.selected = [this.items[2]];
    this.panels = [
      {
        id: 'panel-1',
        header: 'Panel #1',
        component: 'KgOptionsList',
        props: {
          items: [...this.items],
          itemText: 'a',
          itemValue: 'b',
          selected: this.selected,
          label: 'Key',
          multiple: true,
        },
        events: {
          change: (item) => this.onChange('panel-1', item),
        },
      },
      {
        id: 'panel-2',
        header: 'Panel #2',
        component: 'KgOptionsList',
        props: {
          items: [...this.items],
          itemText: 'a',
          itemValue: 'b',
          selected: this.selected,
          label: 'Key',
          multiple: true,
        },
        events: {
          change: (item) => this.onChange('panel-2', item),
        },
      },
      {
        id: 'panel-3',
        header: 'Panel #3',
        component: 'KgOptionsList',
        props: {
          items: [...this.items],
          itemText: 'a',
          itemValue: 'b',
          selected: this.selected,
          label: 'Key',
          multiple: true,
        },
        events: {
          change: (item) => this.onChange('panel-3', item),
        },
      },
    ];
  },
  methods: {
    onChange(field, items) {
      console.log(field, items);
      this.selected = items;
    },
    getItems() {
      console.log(this.items);
      return this.items;
    },
  },
};
</script>
