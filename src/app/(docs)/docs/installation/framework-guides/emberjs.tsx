import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/ember.react.svg";

export let tile: Tile = {
  title: "Ember.js",
  description: "一个面向有抱负的 Web 开发人员的 JavaScript 框架。",
  Logo,
};

export let page: Page = {
  title: "在 Ember.js 中安装 Tailwind CSS",
  description: "在 Ember.js 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你尚未设置 Ember.js 项目，请先创建一个新项目。最常用的方法请参阅{" "}
        <a href="https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application">
          Ember.js 快速入门
        </a>
        。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx ember-cli@latest new my-project --no-welcome
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/vite</code> 及其对等依赖项。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/vite
      `,
    },
  },
  {
    title: "配置 Vite 插件",
    body: (
      <p>
        将 <code>@tailwindcss/vite</code> 插件添加到你的 Vite 配置中。
      </p>
    ),
    code: {
      name: "vite.config.mjs",
      lang: "js",
      code: js`
        import { defineConfig } from 'vite';
        import { extensions, classicEmberSupport, ember } from '@embroider/vite';
        import { babel } from '@rollup/plugin-babel';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            classicEmberSupport(),
            ember(),
            // 在此处添加其他插件
            babel({
              babelHelpers: 'runtime',
              extensions,
            }),
          ],
        });
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./app/styles/app.css</code> 中添加 <code>@import</code>，以导入 Tailwind CSS。
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "链接 CSS 文件",
    body: (
      <p>
        在 <code>./index.html</code> 文件中，将 <code>@embroider/virtual/app.css</code> 样式表链接替换为直接指向{" "}
        <code>./app/styles/app.css</code> 的链接，以便由 Vite 处理。
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: html`
        {{content-for "head"}}

        <link integrity="" rel="stylesheet" href="/@embroider/virtual/vendor.css" />
        <!-- [!code --:2] -->
        <link integrity="" rel="stylesheet" href="/@embroider/virtual/app.css" />
        <!-- [!code ++:2] -->
        <link integrity="" rel="stylesheet" href="/app/styles/app.css" />

        {{content-for "head-footer"}}
      `,
    },
  },
  {
    title: "启动构建过程",
    body: (
      <p>
        运行 <code>npm run start</code> 启动构建过程。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run start
      `,
    },
  },
  {
    title: "在你的项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的工具类来样式化你的内容。</p>,
    code: {
      name: "application.gjs",
      lang: "glimmer-js",
      code: js`
        import { pageTitle } from 'ember-page-title';

        <template>
          {{pageTitle "MyProject"}}

          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>

          {{outlet}}
        </template>
      `,
    },
  },
];
