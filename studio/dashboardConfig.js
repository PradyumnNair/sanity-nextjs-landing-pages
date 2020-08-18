export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
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
                  buildHookId: '5f3beb0391dbcfd3d3f4b9b4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-8rcufrqz',
                  apiId: 'b8e51fcb-770e-4327-ad6b-887851586423'
                },
                {
                  buildHookId: '5f3beb046b17ccc005355126',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-p97jeyec',
                  apiId: '70d51b63-f81e-41b6-93f8-a829a42e7c51'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/PradyumnNair/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-p97jeyec.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
