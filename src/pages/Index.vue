<template>
  <Layout>

    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image alt="J. Alexander Curtis Profile Image" class="rounded" src="~/assets/images/me.jpg" width="135" />

    <h1 class="intro-header">J. Alexander Curtis</h1>
    <h4 class="lead-text">I am a marketer and web developer</h4>

    <p>
      I run the DevMarketer Youtube channel, which helps people from all over the world build and grown their next great idea. We don't only teach you to code, but also how to market it.
    </p>

    <p class="home-links">
      <a href="https://twitter.com/_jacurtis/" target="_blank" rel="noopener">Twitter</a>
      <a href="https://github.com/jacurtis" target="_blank" rel="noopener">GitHub</a>
    </p>

  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Welcome Home'
  }
}
</script>

<style>
.home-links a {
  margin-right: 1rem;
}

h1.intro-header {
  margin-bottom: 0;
}

h4.lead-text {
  margin-top: 0;
}

.rounded {
  border-radius: 999px;
}
</style>
