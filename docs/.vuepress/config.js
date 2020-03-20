module.exports = {
    title: 'FooQooのメモ',
    description: '普段気になったことについて',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            { text: '開発', link: '/dev/' },
            { text: 'ライフハック', link: '/life-hack/' },
        ],
        sidebar: [
            {
                title: '2020-03',
                collapsable: true,
                children: [
                    '/dev/vuepress.html',
                    '/life-hack/shinkansen_2020_0320.html'
                ]
            }
       ]
    },
    displayAllHeaders: true,
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
