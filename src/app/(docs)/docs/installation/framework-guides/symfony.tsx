import { css, html, js, Page, shell, Step, Tile, twig } from "./utils";
import Logo from "@/docs/img/guides/symfony.react.svg";
import LogoDark from "@/docs/img/guides/symfony-white.react.svg";

export let tile: Tile = {
  title: "Symfony",
  description: "一个用于创建网站和网络应用的 PHP 框架。",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "在 Symfony 中安装 Tailwind CSS",
  description: "在 Symfony 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        首先创建一个新的 Symfony 项目，如果你还没有设置的话。最常见的方法是使用{" "}
        <a href="https://symfony.com/download">Symfony 安装程序</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        symfony new --webapp my-project
        cd my-project
      `,
    },
  },
  {
    title: "安装 Webpack Encore",
    body: (
      <p>
        安装 Webpack Encore，用于处理资产的构建。查看{" "}
        <a href="https://symfony.com/doc/current/frontend.html">文档</a>了解更多信息。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        composer remove symfony/ux-turbo symfony/asset-mapper symfony/stimulus-bundle
        composer require symfony/webpack-encore-bundle symfony/ux-turbo symfony/stimulus-bundle
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        使用 npm，安装 <code>@tailwindcss/postcss</code> 及其对等依赖项，以及{" "}
        <code>postcss-loader</code>。
      </p>
    ),
    code: {
      name: "终端",
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
        在你的 <code>webpack.config.js</code> 文件中，启用 PostCSS Loader。查看{" "}
        <a href="https://symfony.com/doc/current/frontend/encore/postcss.html">文档</a>了解更多信息。
      </p>
    ),
    code: {
      name: "webpack.config.js",
      lang: "js",
      code: js`
        Encore
          .enablePostCssLoader()
        ;
      `,
    },
  },
  {
    title: "配置 PostCSS 插件",
    body: (
      <p>
        在项目根目录中创建一个 <code>postcss.config.mjs</code> 文件，并将{" "}
        <code>@tailwindcss/postcss</code> 插件添加到你的 PostCSS 配置中。
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
        };
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./assets/styles/app.css</code> 文件中添加导入 Tailwind CSS 的 <code>@import</code>。
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
    title: "启动构建进程",
    body: (
      <p>
        使用 <code>npm run watch</code> 启动你的构建进程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm run watch
      `,
    },
  },
  {
    title: "开始在你的项目中使用 Tailwind",
    body: (
      <p>
        确保编译后的 CSS 包含在 <code>{"<head>"}</code> 中，然后开始使用 Tailwind 的工具类来样式化你的内容。
      </p>
    ),
    code: {
      name: "base.html.twig",
      lang: "twig",
      code: twig`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0"
            />
            <!-- [!code highlight:4] -->
            {% block stylesheets %}
              {{ encore_entry_link_tags('app') }}
            {% endblock %}
          </head>
          <body>
            <!-- [!code highlight:4] -->
            <h1 class="text-3xl font-bold underline">
              <!-- prettier-ignore -->
              Hello world!
            </h1>
          </body>
        </html>
      `,
    },
  },
];