import React from 'react'

export default {
    // siteRoot: 'https://wala.energy',
    getSiteData: () => ({
        title: 'Wala',
    }),
    getRoutes: async() => {
        return [{
                path: '/',
                component: 'src/pages/HomePage/HomePage',
            },
            {
                is404: true,
                component: 'src/pages/404',
            },
        ]
    },

    // // This is used to inject dynamic meta data for each route
    Document: ({ Html, Head, Body, children, siteData, renderMeta, routeInfo }) => {
        // some hacky stuff to get this to work
        const data = routeInfo || {}
        const meta = data.allProps || {}
        const url = 'https://wala.energy'
        return (
            <Html lang="en-US">
                <Head>
                    <meta charSet="UTF-8" />
                    <title>Wala</title>
                    <meta name="description" content="Join the revolution. 100% renewable." />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <meta name="keywords" content="energy, renewables" />
                    <meta name="author" content="Empower Finance, Inc." />
                    <meta name="theme-color" content="#ffffff" />

                    <link rel="apple-touch-icon" sizes="180x180" href="/assets/apple-touch-icon.png" />
                    <link rel="icon" type="image/png" href="/assets/favicon-32x32.png" sizes="32x32" />
                    <link rel="icon" type="image/png" href="/assets/favicon-16x16.png" sizes="16x16" />
                    <link rel="mask-icon" href="/assets/safari-pinned-tab.svg" color="#5bbad5" />
                    <link rel="shortcut icon" href="/assets/favicon.ico" />
                    <link rel="canonical" href={url} />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={url} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:description" content={meta.desc} />
                    <meta property="og:image" content={meta.image} />
                    <meta property="og:image:width" content="1300" />
                    <meta property="og:image:height" content="740" />

                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content={meta.title} />
                    <meta name="twitter:description" content={meta.desc} />
                    <meta name="twitter:image" content={meta.image} />
                    <meta name="twitter:site" content="@empowermeapp" />
                    <meta name="twitter:creator" content="@empowermeapp" />
                </Head>
                <Body>{children}</Body>
            </Html>
        )
    },
}