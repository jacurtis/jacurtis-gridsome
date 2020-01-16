<template>
  <Layout>
    <div class="container-inner mx-auto py-16">
      
      <journal-preview 
        v-for="post in $page.posts.edges" 
        :key="post.id" 
        :post="post"
      />

      
      <!-- <pagination-posts
        v-if="$page.posts.pageInfo.totalPages > 1"
        base="/blog"
        :totalPages="$page.posts.pageInfo.totalPages"
        :currentPage="$page.posts.pageInfo.currentPage"
      /> -->
    </div>
  </Layout>
</template>

<page-query>
query Posts ($page: Int) {
  posts: allPost (sortBy: "date", order: DESC, perPage: 3, page: $page, filter: { published: {in: true}}) {
    totalCount
    pageInfo {
      totalPages
      currentPage
    }
    edges {
      node {
        id
        title
        date (format: "MMMM D, Y")
        description
        path
      }
    }
  }
}
</page-query>

<script>
// import PaginationPosts from '../components/PaginationPosts'
import JournalPreview from '~/components/JournalPreview'
export default {
  metaInfo: {
    title: 'Journal'
  },
  components: {
    JournalPreview
  }
}
</script>

<style lang="scss">
.journal-preview:last-of-type {
  border-bottom: transparent 0px solid;
}
</style>