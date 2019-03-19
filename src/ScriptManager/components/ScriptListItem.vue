<template lang="pug">
  - var rootClass = 'script-list-item'

  div(class=rootClass)
    div(class=`${rootClass}__info`)
      div(class=`${rootClass}__name`) {{ item.name }}
      div {{ item.description }}
    div(class=`${rootClass}__controls`)
      ButtonMain(
        alternate
        label="Запустить"
        @click="$emit('select', item.id)"
      )
</template>

<script>
import ButtonMain from '@/components/ButtonMain.vue';

export default {
  name: 'ScriptListItem',
  components: { ButtonMain },

  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.script-list-item {
  display: flex;

  &__info {
    padding: 0 36px 0 0;

    flex: 1;
  }

  &__name {
    font-size: 20px;
    font-weight: bold;
    color: #00985f;
  }

  &__description {
    line-height: 1.54;
    letter-spacing: normal;
    color: #444444;
  }
}
</style>


