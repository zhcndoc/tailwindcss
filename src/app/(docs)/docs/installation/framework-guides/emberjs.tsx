import { css, handlebars, js, Page, shell, Step, Tile } from "./utils";
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
        如果你还没有设置 Ember.js 项目，请先创建一个新项目。最常见的方法是使用{" "}
        <a href="https://guides.emberjs.com/release/getting-started/quick-start/#toc_create-a-new-application">
          Ember CLI
        </a>
        。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx ember-cli new my-project --embroider --no-welcome
        cd my-project
      `,
    },
  },
  {
    title: "安装Tailwind CSS",
    body: (
      <p>
        使用 npm 安装 <code>@tailwindcss/postcss</code> 及其对等依赖项，以及 <code>postcss-loader</code>。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-loader
      `,
    },
  },
  {
    title: "启用 PostCSS 支持",
    body: (
      <p>
        在你的 <code>ember-cli-build.js</code> 文件中，配置 PostCSS 以处理你的 CSS 文件。
      </p>
    ),
    code: {
      name: "ember-cli-build.js",
      lang: "js",
      code: js`
        'use strict';

        const EmberApp = require('ember-cli/lib/broccoli/ember-app');

        module.exports = function (defaults) {
          const app = new EmberApp(defaults, {
            // 在这里添加选项
          });

          const { Webpack } = require('@embroider/webpack');
          return require('@embroider/compat').compatBuild(app, Webpack, {
            skipBabel: [
              {
                package: 'qunit',
              },
            ],
            // [!code highlight:22]
            packagerOptions: {
              webpackConfig: {
                module: {
                  rules: [
                    {
                      test: /\.css$/i,
                      use: ['postcss-loader'],
                    },
                  ],
                },
              },
            },
          });
        };
      `,
    },
  },
  {
    title: "配置 PostCSS 插件",
    body: (
      <p>
        在项目根目录下创建 <code>postcss.config.mjs</code> 文件，并将 <code>@tailwindcss/postcss</code> 插件添加到 PostCSS 配置中。
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        }
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        创建一个 <code>./app/app.css</code> 文件，并添加一个 <code>@import</code> 导入 Tailwind CSS。
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
    title: "导入 CSS 文件",
    body: (
      <p>
        在你的 <code>./app/app.js</code> 文件中导入新创建的 <code>./app/app.css</code> 文件。
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        import Application from '@ember/application';
        import Resolver from 'ember-resolver';
        import loadInitializers from 'ember-load-initializers';
        import config from 'my-project/config/environment';
        // [!code highlight:2]
        import 'my-project/app.css';

        export default class App extends Application {
          modulePrefix = config.modulePrefix;
          podModulePrefix = config.podModulePrefix;
          Resolver = Resolver;
        }

        loadInitializers(App, config.modulePrefix);
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
      name: "application.hbs",
      lang: "hbs",
      code: handlebars`
        {{page-title "MyProject"}}

        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>

        {{outlet}}
      `,
    },
  },
];
