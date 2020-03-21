module.exports = {
    title: 'FooQooのメモ',
    description: '普段気になったことについて',
    ga: 'UA-161520690-1',
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
        ],
        [
            'link',
            {
                rel: 'stylesheet',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.10.0/katex.min.css'
            }

        ]
    ],
    markdown: {
        anchor: { permalink: false},
        toc: {includeLevel: [1, 2]},
        extendMarkdown: md => {
            md.use(require('markdown-it-emoji'));
            md.use(require('markdown-it-footnote'));
            md.use(require('@iktakahiro/markdown-it-katex'), {"throwOnError" : false, "errorColor" : " #cc0000"});
            md.use(require('markdown-it-imsize'), {autofil: true});
            md.use(require('markdown-it-checkbox'));
            md.use(require('markdown-it-sub'));
        }
    },
    plugins: {
        '@vuepress/medium-zoom': 
        {
            selector: 'img',
            delay: 1000,
            options: {
                margin: 24,
                background: 'rgba(0,0,0,0.7)',
                scrolloffset: 0,
            }
        }
    }
}
