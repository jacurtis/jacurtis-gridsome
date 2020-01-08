<template>
    <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/about/">About</g-link>
        <g-link class="nav__link" to="/journal/">Journal</g-link>
        <g-link class="nav__link" to="/contact/">Contact</g-link>
    </nav>
</template>

<style lang="scss" scoped>
.nav__link {
  color: #2D3748;
  margin-left: 20px;
  text-decoration: none;
  font-family: 'Nunito Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 1em;

  &.active--exact, &.active--exact:hover {
    color: #ff3f34;
  }

  &:hover {
    color: #718096;
  }
}
</style>