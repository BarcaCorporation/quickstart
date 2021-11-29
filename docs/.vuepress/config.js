const version = require("./../../package.json").version;

module.exports = {
  head: [
    ['link', { rel: 'manifest', href: '/public/manifest.webmanifest' }],
    ['meta', { name: 'theme-color', content: '#fff' }],
    // ...other tags
  ],
  lang: 'en-US',
  title: `Barca CLI ${version}`,
  description: 'This is my first VuePress site',
  theme: '@vuepress/theme-default',
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: 'pt-BR',
      title: 'Barca CLI',
      description: 'Gerador de Projetos'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Barca CLI',
      description: 'Vue-powered Static Site Generator'
    }
  },
  plugins: [
    '@vuepress/back-to-top', 
    '@vuepress/medium-zoom', 
    '@vuepress/plugin-search',
    {
      // allow searching the `tags` frontmatter
      getExtraFields: (page) => page.frontmatter.tags ?? [],
    },
    [
      '@vuepress/plugin-google-analytics',
      {
        id: 'G-XXXXXXXXXX',
      },
    ],
    [
      '@vuepress/pwa',
      {
        skipWaiting: true,
      },
    ],
  ],
  themeConfig: {
    navbar: [
      // NavbarItem
      {
        text: 'Foo',
        link: '/foo/',
      },
      // NavbarGroup
      {
        text: 'Group',
        children: ['/group/foo.md', '/group/bar.md'],
      },
      // string - page file path
      '/bar/README.md',
    ],
    backToHome: 'voltar ao inicio',
    //logoDark: '/public/img/logo/logo.jpeg',
    locales: {
      '/': {
        selectLanguageName: 'English',
      },
      '/zh/': {
        selectLanguageName: '简体中文',
      },
    },
    logo: 'https://vuejs.org/images/logo.png',
    logoDark: 'https://vuejs.org/images/logo.png',
    lastUpdated: false,
    sidebar: [
      {
        title: 'Group 1',   // required
        path: '/foo/',      // optional, which should be a absolute path.
        collapsable: false, // optional, defaults to true
        sidebarDepth: 1,    // optional, defaults to 1
        children: [
          '/guide/',
          '/installation/',
          '/advanced/',
        ]
      },
      {
        text: 'Requisitos',
        link: 'requeriments',
        children: [],
      },
      {
        text: 'Início Rápido',
        link: '/tutorial/',
        children: [
          // SidebarItem
          {
            text: 'Instalação',
            link: 'install',
            children: [],
          },
          {
            text: 'Executando Barca',
            link: 'exec/barca',
            children: [],
          },
          {
            text: 'Atualizações',
            link: 'versions',
            children: [],
          },
          {
            text: 'Configuração',
            link: 'settings',
            children: [],
          },
          {
            text: 'Soluções para problemas',
            link: 'feeds',
            children: [],
          },
          {
            text: 'Repositórios do Projeto',
            link: 'repos',
            children: [],
          },
        ],
      },
      {
        text: 'Seu Primeiro Aplicativo',
        link: '/tutorial/',
        children: [
          // SidebarItem
          {
            text: 'Criar uma API REST',
            link: '/api/create',
            children: [],
          },
          {
            text: 'Criar um Blog',
            link: '/blog/create',
            children: [],
          },
          {
            text: 'Criar um Site',
            link: '/site/create',
            children: [],
          },
          {
            text: 'Criar uma Loja Virtual',
            link: '/ecommerce/create',
            children: [],
          },
          {
            text: 'Criar um App Desktop',
            link: '/desktop/create',
            children: [],
          },
          {
            text: 'Criar uma Landing Page',
            link: '/lp/create',
            children: [],
          },
        ],
      },
      {
        text: 'Crie seu App',
        link: 'app',
        children: [],
      },
      "Início Rápido",
      "Configurações",
      "Integrações",
    ],
    nav: [
      { text: "Home", link: "/" }
    ],
    repoLabel: "Contribute an Example !",
    displayAllHeaders: true
  },
}