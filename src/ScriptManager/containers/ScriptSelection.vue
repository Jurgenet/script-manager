<template lang="pug">
  - var rootClass = 'script-selection'

  div(class=rootClass)
    div(class=`${rootClass}__heading`)
      div(class=`${rootClass}__title`) Сценарии
    div(class=`${rootClass}__body`)
      ScriptList(:items="scripts" @select="handleSelectScript")
</template>

<script>
import ScriptList from '@/components/ScriptList.vue';

export default {
  name: 'ScriptSelection',
  components: { ScriptList },

  props: {
    scripts: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleSelectScript({ scriptId }) {
      this.$emit('select', { scriptId });
    },
  },
};
</script>

<style lang="scss">
.script-selection {
  &__heading {
    border-bottom: 1px solid #e5e5e5;
  }

  &__title {
    padding: 0 0 27px 0;
    font-size: 30px;
    line-height: 1.24;
    color: #000000;
  }

  &__body {
    margin: 28px 0 0 0;
  }
}
</style>

