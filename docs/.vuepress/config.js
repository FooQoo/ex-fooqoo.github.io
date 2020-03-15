module.exports = {
    title: 'FooQooのメモ',
    description: '普段気になったことについて',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '開発', link: '/dev/' },

        ],
        sidebar: [
            '/',
            {
                title: '開発',
                collapsable: true,
                children: [
                    '/dev/vuepress.html'
                ],
                path: '/dev/'
            }
       ]
    },
    displayAllHeaders: true
    head: [
        [
            'script',
            {
                'async src': '//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js'
            }
        ],
        [
            'script',
            {},
            '(adsbygoogle = window.adsbygoogle = window.adsbygoogle || []).push({ google_ad_client: "ca-pub-1144207358103797", enable_page_level_ads: true  });'
        ]
    ]
}
