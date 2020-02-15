<template>
  <header class="header">
    <strong>
      <g-link class="brand" to="/">JACURTIS</g-link>
    </strong>
    <hamburger-icon :active="menuActive" @toggle="toggleMenu"></hamburger-icon>
    <div class="background-overlay" @click="toggleMenu(false)" :class="{'active':menuActive}"></div>
    <nav class="nav" :class="{'active':menuActive}">   
      <div class="link-list">
        <g-link class="nav__link" to="/" exact>Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/journal">Journal</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
      </div>
    </nav>
  </header>
</template>

<script>
import HamburgerIcon from '~/components/Site/HamburgerIcon'
export default {
  data: function() {
    return {
      menuActive: false
    }
  },
  components: {
    HamburgerIcon
  },
  methods: {
    toggleMenu: function(val) {
      this.menuActive = val
    }
  }
}
</script>

<style lang="scss" scoped>
  @import "~/assets/scss/_variables";
  @import "~/assets/scss/_media-queries";

  @include touch {
    .background-overlay {
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background-color: rgba(45, 55, 72, 0.0);
      z-index: 99;
      transform: translateX(100%);
      transition: background-color 125ms ease-in-out 125ms;

      &.active {
        background-color: rgba(45, 55, 72, 0.25);
        transform: translateX(0);
      }
    }
    .nav {
      width: 90%;
      max-width: 400px;
      background-color: white;
      position: fixed;
      top: 0;
      right: 0;
      bottom: 0;
      border-radius: 10px 0 0 10px;
      transform: translateX(100%);
      transition: transform 250ms ease-in-out, box-shadow 250ms ease-in-out;
      z-index: 100;
      &.active {
        transform: translateX(0%);
        box-shadow: 0px 0 25px 10px rgba(45, 55, 72, 0.3);

        &::after {
          transform: translateX(0);
        }
      }

      .link-list {
        display: flex;
        flex-direction: column;
        text-align: right;
        padding: 100px 25px 0 25px;

        .nav__link {
          padding: 8px 0;
        }
      }
    }
  }

  .brand {
    font-size: 1.3rem;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    height: 80px;
  }

  .nav__link {
    color: #2D3748;
    margin-left: 20px;
    text-decoration: none;
    font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.3rem;

    &.active--exact,
    &.active,
    &.active--exact:hover,
    &.active:hover {
      color: #ff3f34;
    }

    &:hover {
      color: #718096;
    }
  }
</style>