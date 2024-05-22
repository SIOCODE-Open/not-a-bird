import { defineConfig } from 'vitepress'
import tasklist from 'markdown-it-task-lists'
import markdownItTextualUml from 'markdown-it-textual-uml';

export default defineConfig({
    title: "Not A Bird",
    description: "A crafting game, where elements are full-fledged cryptocurrencies, and players can win a prize.",
    head: [['link', { rel: 'icon', href: 'https://placehold.it/32x32' }]],
    markdown: {
        config: (md) => {
            md
                .use(markdownItTextualUml)
                .use(tasklist)
        }
    },
    themeConfig: {
        nav: [
            { text: 'Learn', link: '/learn/index' },
        ],
        logo: "https://placehold.it/120x80",
        sidebar: [
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/SIOCODE-Open/not-a-bird' }
        ]
    }
})