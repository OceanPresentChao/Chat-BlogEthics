module.exports = {
    title: '网络博客中的伦理道德',
    description: 'Can you hear me ?',
    base: '/',
    themeConfig: {
        nav: [{// 右上导航航条 docs/.vuepress 文件夹下
            text: '概述',
            link: '/'
        }, {
            text: '博客伦理',
            items: [
                { text: '关于博客', link: '/guide/blog' }, // 可不写后缀 .md
                { text: '博客伦理道德', link: '/guide/problems' },// 外部链接
                { text: '博客伦理失范原因', link: '/guide/reasons' },// 外部链接
                { text: '思考', link: '/guide/think' },// 外部链接
                { text: 'Reference', link: '/guide/reference' },// 外部链接
            ]
        }],
        sidebar: {
            '/guide/': [
                {
                    title: '网络博客中的伦理道德',
                    collapsable: true,
                    children: [{
                        title: '关于博客',
                        path: 'blog'
                    }, {
                        title: '博客传播中的伦理道德',
                        path: 'problems'
                    }, {
                        title: '博客传播中伦理失范原因',
                        path: 'reasons'
                    }, {
                        title: '网络伦理建设的思考',
                        path: 'think'
                    }, {
                        title: 'Reference',
                        path: 'reference'
                    }]
                }
            ],
            '/': ['']
        },
        sidebarDepth: 2
    }
}