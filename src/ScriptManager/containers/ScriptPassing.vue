<template lang="pug">
  - var rootClass = 'script-passing'

  div(class=rootClass)
    div(class=`${rootClass}__sidebar`)
      div(class=`${rootClass}__back-to-main`)
        ButtonBack(label="Вернуться к каталогу сценариев" @click="$emit('cancel')")
      div(class=`${rootClass}__tabs`)
        div(class=`${rootClass}__tab-controls`)
          ButtonMain(
            label="Текущий шаг"
            :alternate="!isCurrentCurrentPostionTab"
            @click="isCurrentCurrentPostionTab = true"
          )
          ButtonMain(
            label="Все шаги"
            :alternate="isCurrentCurrentPostionTab"
            @click="isCurrentCurrentPostionTab = false"
          )
        div(class=`${rootClass}__tab-content`)
          div(
            class=`${rootClass}__current-position`
            key="current-position"
            v-if="isCurrentCurrentPostionTab"
          ) Current Position
          div(
            class=`${rootClass}__checkpoints`
            key="checkpoints"
            v-else
          ) Checkpoints
      div(class=`${rootClass}__information`) Information
    div(class=`${rootClass}__content`)
      div {{ script.name }}
</template>

<script>
import ButtonBack from '@/components/ButtonBack.vue';
import ButtonMain from '@/components/ButtonMain.vue';

export default {
  name: 'ScriptPassing',
  components: { ButtonBack, ButtonMain },

  props: {
    script: {
      type: Object,
      required: true,
    },
  },

  data: () => ({
    isCurrentCurrentPostionTab: true,
  }),

  computed: {
    tabs() {
      return [{ name: 'Текущий Шаг' }, { name: 'Все шаги' }];
    },
  },
};
</script>

<style lang="scss">
$border: 1px solid #999999;

.script-passing {
  display: flex;

  &__sidebar {
    border-right: $border;
    width: 400px;
  }

  &__back-to-main {
    padding: 15px 15px 15px 25px;
    border-bottom: $border;

    color: #999999;
  }

  &__tabs {
    padding: 15px;
  }

  &__tab-controls {
    display: flex;
  }

  &__tab-content {
    padding: 20px 0;
  }

  &__information {
    border-top: $border;
    padding: 20px;
  }
}
</style>
