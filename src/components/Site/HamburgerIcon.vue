<template>
  <div id="hamburger-menu" :class="{'open':active}" @click="toggle">
    <span></span>
    <span></span>
    <span></span>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    toggle: function() {
      this.$emit('toggle', !this.active);

      !this.active ? this.$emit('open') : this.$emit('close')
    }
  }
}
</script>

<style lang="scss" scoped>
@import "~/assets/scss/_variables";
<<<<<<< HEAD
@import "~/assets/scss/_media-queries.scss";

=======
@import "~/assets/scss/_media-queries";
>>>>>>> ad45f1a17a2c1b0179ca30593c874a81fa14adf4
#hamburger-menu {
  z-index: 999;
  width: 30px;
  height: 24px;
  position: relative;
  // margin: 50px auto;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: .5s ease-in-out;
  -moz-transition: .5s ease-in-out;
  -o-transition: .5s ease-in-out;
  transition: .5s ease-in-out;
  background-color: transparent;
  cursor: pointer;

  @include desktop() {
<<<<<<< HEAD
    visibility: hidden;
=======
    display: none;
>>>>>>> ad45f1a17a2c1b0179ca30593c874a81fa14adf4
  }

  span {
    display: block;
    position: absolute;
    height: 4px;
    width: 100%;
    background: $brand;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
    -webkit-transition: .25s ease-in-out;
    -moz-transition: .25s ease-in-out;
    -o-transition: .25s ease-in-out;
    transition: .25s ease-in-out;
  }

  span:nth-child(1) {
    top: 0px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  span:nth-child(2) {
    top: 10px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  span:nth-child(3) {
    top: 20px;
    -webkit-transform-origin: left center;
    -moz-transform-origin: left center;
    -o-transform-origin: left center;
    transform-origin: left center;
  }

  &.open span:nth-child(1) {
    -webkit-transform: rotate(45deg);
    -moz-transform: rotate(45deg);
    -o-transform: rotate(45deg);
    transform: rotate(45deg);
    top: -3px;
    left: 8px;
  }

  &.open span:nth-child(2) {
    width: 0%;
    opacity: 0;
  }

  &.open span:nth-child(3) {
    -webkit-transform: rotate(-45deg);
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    transform: rotate(-45deg);
    top: 18px;
    left: 8px;
  }
}
</style>