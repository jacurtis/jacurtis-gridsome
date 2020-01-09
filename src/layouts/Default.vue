<template>
  <div class="layout">
    <div class="container">
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
h1, h2, h3, h4, .h1, .h2, .h3, .h4 {
  font-family: henriette, sans-serif;
  font-weight: 700;
}

h1, .h1 {
  font-size: 2.3rem;
}

h2, .h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.8rem;
  font-weight: 400;
}

h4 {
  font-size: 1.5rem;
  font-weight: 400;
}

body {
  font-family: basic-sans, sans-serif;
  font-weight: 400;
  font-size: 10px;
  margin:0;
  padding:0;
  line-height: 1.5;
}

p {
  font-size: 1.2rem;
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
