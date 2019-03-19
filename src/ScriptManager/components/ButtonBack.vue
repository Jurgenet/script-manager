
<template lang="pug">
  - var rootClass = 'button-back'

  div(
    class=rootClass
    @click="$emit('click')"
  )
    img(
      class=`${rootClass}__icon`
      src="../../assets/img/left-arrow.svg"
      alt="left-arrow-img"  
    )
    div(class=`${rootClass}__label`) {{ label }}
</template>

<script>
export default {
  name: 'ButtonBack',

  props: {
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss">
.button-back {
  cursor: pointer;

  &__icon {
    display: inline-block;
  }

  &__label {
    display: inline-block;
    padding: 0 0 0 6px;

    text-align: center;
  }
}
</style>

