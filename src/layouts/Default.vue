<template>
  <div class="layout">
    <div class="top-accent-bar"></div>
    <div class="container flex-1">
      <site-header></site-header>
      <slot/>
    </div>
    <site-footer></site-footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import SiteFooter from '~/components/Site/Footer';
import SiteHeader from '~/components/Site/Header';
export default {
  components: {
    SiteFooter,
    SiteHeader,
  }
}
</script>

<style lang="scss">

.top-accent-bar {
  width: 100%;
  background-color: #ff3f34;
  height: 5px;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
</style>
