<template>
  <v-autocomplete
    class="compact"
    color="white"
    :value="selected"
    :items="items"
    :menu-props="{ bottom: true, offsetY: true, contentClass: 'options' }"
    :item-text="itemText"
    :item-value="itemValue"
    :hide-selected="true"
    :label="label"
    :multiple="multiple"
    :append-icon="null"
    clear-icon="$clear"
    hide-details
    outlined
    dense
    rounded
    chips
    deletable-chips
    small-chips
    return-object
    persistent-placeholder
    clearable
    @change="(items) => $emit('change', items)"
  />
</template>

<script>
export default {
  name: 'KgOptionsList',
  props: {
    label: {
      type: String,
      required: true,
      default: 'Label',
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      required: true,
      default: () => [],
    },
    itemText: {
      type: String,
      required: false,
      default: null,
    },
    itemValue: {
      type: String,
      required: false,
      default: null,
    },
    selected: {
      type: [String, Array, Object],
      default: '',
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
::v-deep .listbox {
  background: red;
}
</style>
