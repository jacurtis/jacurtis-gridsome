<template>
  <div class="layout">
    <div class="container">
      <header class="header">
        <strong>
          <g-link class="brand" to="/">{{ $static.metadata.siteName }}</g-link>
        </strong>
        <site-navigation></site-navigation>
      </header>
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
import SiteNavigation from '~/components/Site/Navigation';
export default {
  components: {
    SiteFooter,
    SiteNavigation,
  }
}
</script>

<style lang="scss">
body {
  font-family: 'Nunito Sans',-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
}

.container {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 20px;
  padding-right: 20px;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  height: 80px;
}

.brand {
  color: #ff3f34;
  text-decoration: none;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1.4em;
}


</style>
