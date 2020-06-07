export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-blog'
      }
    },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'Achtung: Die Seiten sind statische builds und müssen re-deployed werden, um Änderungen live zu sehen, wenn Dokumente veröffentlicht werden.',
              sites: [
                {
                  buildHookId: '5ed4d5b08db2b87edfdbdd54',
                  title: 'Sanity Studio',
                  name: 'sanity-blog-studio-raqd4d55',
                  apiId: '667bab4e-2e6a-484f-8098-07c53149f851'
                },
                {
                  buildHookId: '5ed4d5b077d227e3a23793f6',
                  title: 'Webseiten-Blog mit Sanity',
                  name: 'sanity-blog-web-1wo6e126',
                  apiId: '0ed17ad3-2aa1-46df-8fdf-1421f85b9897'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/saarcoder/sanity-blog',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-blog-web-1wo6e126.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Letzte Artikel', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
