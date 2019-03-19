<template lang="pug">
  - var rootClass = 'script-list'

  div(class=rooClass)
    template(v-for="item in items")
      div(class=`${rootClass}__script` :key="item.id")
        ScriptListItem(:item="item" @select="handleSelectItem")
</template>

<script>
import ScriptListItem from '@/components/ScriptListItem.vue';

export default {
  name: 'ScriptList',
  components: { ScriptListItem },

  props: {
    items: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleSelectItem(id) {
      this.$emit('select', { scriptId: id });
    },
  },
};
</script>

<style lang="scss">
.script-list {
  &__script {
    margin: 10px 0 0 0;
    border-bottom: solid 1px #dcdcdc;
    padding: 0 0 10px 0;
  }
}
</style>
