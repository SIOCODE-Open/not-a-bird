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
            { text: 'Wiki', link: '/wiki/index' },
            { text: 'Play', link: 'https://polkadot-global-na-2024-not-a-bird-game.surge.sh' }
        ],
        logo: "https://placehold.it/120x80",
        sidebar: [
            {
                text: 'Learn',
                items: [
                    { text: 'Learn about the game', link: '/learn/index' },
                ]
            },
            {
                text: 'Wiki',
                items: [
                    { text: 'Wiki', link: '/wiki/index' },
                    { text: 'Games', link: '/wiki/games' },
                    { text: 'Elements', link: '/wiki/elements' },
                    { text: 'Recipes', link: '/wiki/recipes' },
                ]
            },
            {
                text: 'Play',
                items: [
                    { text: 'Play the game', link: 'https://polkadot-global-na-2024-not-a-bird-game.surge.sh' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/SIOCODE-Open/not-a-bird' }
        ]
    }
})