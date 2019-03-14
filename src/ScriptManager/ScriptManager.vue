<template lang="pug">
  - var rootClass = "script-manager"

  div(class=rootClass)
    div(class=`${rootClass}__title`) {{ title }}
</template>

<script>
import store from './store';
import { mapState } from 'vuex';

export default {
  name: 'ScriptManager',

  store,

  computed: {
    ...mapState(['title']),
  },
};
</script>

<style lang="scss">
.script-manager {
  font-size: 24px;
}
</style>

