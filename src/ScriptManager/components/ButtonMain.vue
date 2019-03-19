<template lang="pug">
  - var rootClass = "button-main"

  div(class=rootClass)
    button(
      class=`${rootClass}__button`
      :class="{'button-main__button--alternate': alternate}"
      @click="$emit('click')"
    ) {{ label }}
</template>

<script>
export default {
  name: 'ButtonMain',

  props: {
    label: {
      type: String,
      required: true,
    },
    alternate: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
.button-main {
  width: 100%;

  &__button {
    border: none;
    padding: 0 0.875rem;
    height: 2.5rem;
    width: 100%;

    font-weight: bold;
    text-align: center;
    color: #fff;
    background-color: #00985f;

    outline: none;
    cursor: pointer;
  }

  &__button--default {
    border: solid 1px #dcdcdc;

    color: #333333;
    background-color: #f2f2f2;
  }

  &__button--active {
    color: #ffffff;
    background-color: #4f0380;
  }

  &__button--alternate {
    border: solid 1px #00985f;

    color: #00985f;
    background-color: #ffffff;
  }
}
</style>
