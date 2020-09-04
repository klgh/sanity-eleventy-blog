export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f524a09ba816f1f7f7961e8',
                  title: 'Sanity Studio',
                  name: 'sanity-eleventy-blog-studio-4vjke9iu',
                  apiId: '772ebf89-865e-444a-b208-fd7a0f86ada7'
                },
                {
                  buildHookId: '5f524a0964515f1ae2ce60ae',
                  title: 'Blog Website',
                  name: 'sanity-eleventy-blog-web-ikc6pgd9',
                  apiId: '6d4ddce1-376d-47f0-9a09-3332b7e5fd10'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/klgh/sanity-eleventy-blog',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-eleventy-blog-web-ikc6pgd9.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
