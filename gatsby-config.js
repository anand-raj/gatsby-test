module.exports = {
    pathPrefix: "/gatsby-test",

    siteMetadata: {
        title: 'Gatsby test',
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