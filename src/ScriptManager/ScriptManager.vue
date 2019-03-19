<template lang="pug">
  - var rootClass = "script-manager"

  div(class=rootClass)
    div(
      class=`${rootClass}__script-passing`
      key="script-passing"
      v-if="isScriptSelected"
    )
      ScriptPassing(
        :script="selectedScript"
        @cancel="handleScriptCancel"
      )
    div(
      class=`${rootClass}__script-selection`
      key="script-selection"
      v-else
    )
      ScriptSelection(
        :scripts="scripts"
        @select="handleScriptSelect"
      )
</template>

<script>
import store from './store';
import { mapGetters, mapActions } from 'vuex';

import ScriptSelection from '@/containers/ScriptSelection.vue';
import ScriptPassing from '@/containers/ScriptPassing.vue';

export default {
  name: 'ScriptManager',
  store,
  components: { ScriptSelection, ScriptPassing },

  props: {
    initProps: {
      sender: String,
    },
    onSubmit: {
      type: Function,
      required: false,
      default: () => {},
    },
  },

  data: () => ({}),

  computed: {
    ...mapGetters({
      scripts: 'Base/scripts',
      selectedScript: 'Base/selectedScript',
      isScriptSelected: 'Base/isScriptSelected',
    }),
  },

  created() {
    this.init();
  },

  methods: {
    ...mapActions({
      init: 'Base/init',
      setPassingScriptId: 'Base/setPassingScriptId',
    }),

    handleSelectTab({ tabName }) {
      alert(tabName);
    },

    handleScriptCancel() {
      this.setPassingScriptId({ scriptId: null });
    },

    handleScriptSelect({ scriptId }) {
      this.setPassingScriptId({ scriptId });
    },

    handleSubmit() {
      alert('event');
      this.onSubmit({ msg: 'something needful' });
    },
  },
};
</script>

<style lang="scss">
.script-manager {
  &__script-selection {
    padding: 0 42px 0 44px;
  }
}
</style>

