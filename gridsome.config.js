// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'J. Alexander Curtis',
  siteDescription: 'Personal website of J. Alexander Curtis including his daily journal of personal and professional thoughts and learnings.',
  siteUrl: 'https://jacurtis.com',
  templates: {
    Post: '/journal/:slug',
    Tag: '/tag/:id'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Post',
        path: 'content/journal/**/*.md',
        refs: {
          tags: {
            typeName: 'Tag',
            create: true
          }
        }
      }
    },
    {
      use: 'gridsome-plugin-rss',
      options: {
        contentTypeName: 'Post',
        latest: true,
        feedOptions: {
          title: 'My Awesome Blog',
          feed_url: 'https://jacurtis.com/rss.xml',
          site_url: 'https://jacurtis.com'
        },
        feedItemOptions: node => ({
          title: node.title,
          description: node.description,
          url: 'https://jacurtis.com/journal/' + node.slug,
          author: 'J. Alexander Curtis', //node.fields.author
          categories: node.tags
        }),
        output: {
          dir: './static',
          name: 'rss.xml'
        }
      }
    }
  ],
  transformers: {
    // Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        '@gridsome/remark-prismjs'
      ]
    }
  }
}
