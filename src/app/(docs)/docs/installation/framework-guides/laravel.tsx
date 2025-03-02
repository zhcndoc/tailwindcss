import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/laravel.react.svg";

export let tile: Tile = {
  title: "Laravel",
  description: "具有丰富、优雅语法的 PHP Web 应用框架。",
  Logo,
};

export let page: Page = {
  title: "使用 Laravel 安装 Tailwind CSS",
  description: "在 Laravel 项目中设置 Tailwind CSS。",
};

export let tabs: Tab[] = [
  {
    slug: "vite",
    title: "使用 Vite",
  },
  {
    slug: "mix",
    title: "使用 Laravel Mix",
  },
];

export let steps: Step[] = [
  {
    tabs: ["vite"],
    title: "创建项目",
    body: (
      <p>
        首先创建一个新的 Laravel 项目，如果尚未设置。最常见的方法是使用{" "}
        <a href="https://laravel.com/docs/11.x#creating-an-application">Laravel 安装器</a>。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        laravel new my-project
        cd my-project
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/vite</code> 及其对等依赖包。
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
    tabs: ["mix"],
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/postcss</code> 及其对等依赖包。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "配置 Vite 插件",
    body: (
      <p>
        在你的 Vite 配置中添加 <code>@tailwindcss/vite</code> 插件。
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            // …
          ],
        })
      `,
    },
  },

  {
    tabs: ["mix"],
    title: "添加 Tailwind 到你的 Laravel Mix 配置",
    body: (
      <p>
        在你的 <code>webpack.mix.js</code> 文件中，添加 <code>tailwindcss</code> 作为 PostCSS 插件。
      </p>
    ),
    code: {
      name: "webpack.mix.js",
      lang: "js",
      code: js`
        mix
          .js("resources/js/app.js", "public/js")
          .postCss("resources/css/app.css", "public/css", [
            // [!code highlight:2]
            require("@tailwindcss/postcss"),
          ]);
      `,
    },
  },

  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        添加一个 <code>@import</code> 到 <code>./resources/css/app.css</code> 以导入 Tailwind CSS。此外，
        告诉 Tailwind CSS 扫描你的 <code>resources/views</code> 目录以便获取工具类。
      </p>
    ),
    code: {
      name: "app.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
        @source "../views";
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "开始构建过程",
    body: (
      <p>
        使用 <code>npm run dev</code> 运行你的构建过程。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },

  {
    tabs: ["mix"],
    title: "开始构建过程",
    body: (
      <p>
        使用 <code>npm run watch</code> 运行你的构建过程。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run watch
      `,
    },
  },

  {
    tabs: ["vite"],
    title: "在项目中开始使用 Tailwind",
    body: (
      <p>
        确保你的已编译 CSS 包含在 <code>{"<head>"}</code> 中，然后开始使用 Tailwind 的工具类来样式你的内容。
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite('resources/css/app.css')
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
  {
    tabs: ["mix"],
    title: "在项目中开始使用 Tailwind",
    body: (
      <p>
        确保你的已编译 CSS 包含在 <code>{"<head>"}</code> 中，然后开始使用 Tailwind 的工具类来样式你的内容。
      </p>
    ),
    code: {
      name: "app.blade.php",
      lang: "blade",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
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