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
}
