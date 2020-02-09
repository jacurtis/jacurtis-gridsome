<template>
  <Layout>
    <div class="post-container">
      <h1 class="post-heading">{{ $page.post.title }}</h1>
      <div class="post-date">Published {{ $page.post.date }}</div>
      <div class="post-tags">
        <jac-tag v-for="tag in $page.post.tags" :key="tag.id" :tag="tag"></jac-tag>
      </div>
      <div class="markdown-body mb-8" v-html="$page.post.content" />
      <div class="journal-back-button">
        <g-link to="/journal">👈 Back to Journal</g-link>
      </div>
    </div>
  </Layout>
</template>

<page-query>
query Post ($path: String!) {
  post: post (path: $path) {
    title
    date (format: "MMMM D, Y")
    content
    tags {
      title
      path
    }
  }
}
</page-query>

<script>
import JacTag from './../components/Tag'
export default {
  components: {
    JacTag
  },
  metaInfo() {
    return {
      title: this.$page.post.title
    }
  }
}
</script>

<style lang="scss" scoped>
h1 {
  line-height: 1.1;
  letter-spacing: -1px;
}
.post-date {
  font-size: 18px;
  color: rgb(70, 70, 70);
  font-style: italic;
  margin-bottom: 15px;
}

.post-tags {
  display: flex;
  margin: 10px 0;
}

.journal-back-button {
  margin: 25px 0;
  font-weight: 700;
  font-size: 16px;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  a {
    color: #444;
    text-decoration: none;
  }

  &:hover {
    transform: translate(-20px, 0);
    transition: all 0.25s ease-in-out;
  }
}
</style>

<style lang="scss">
.markdown-body {
  a {
    color: #111;
    text-decoration: none;
    background-image: linear-gradient(transparent 0%,transparent calc(50% - 8px),#ff967e ,calc(50% - 8px),#ff967e 100%);
    background-size: 100% 230%;
    background-position: 0 0;
    transition: background-position 120ms ease-in-out, padding 120ms ease-in-out, color 100ms ease-in-out;

    &:hover {
      color: white;
      background-image: linear-gradient(transparent 0%,transparent calc(50% - 8px),#ff3f34,calc(50% - 8px),#ff3f34 100%); 
      background-position: 0 100%;
    }
  }

  .g-image {
    max-width: 100%;
  }
}
</style>