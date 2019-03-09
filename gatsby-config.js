module.exports = {
    pathPrefix: "/gatsby-starter",

    siteMetadata: {
        title: 'Gatsby blog',
    },
    
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
              name: 'files',
              path: `${__dirname}/src/markdown`,
            },
        },
        'gatsby-transformer-remark'        
    ]

}