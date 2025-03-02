import { css, js, shell, html, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/adonis.react.svg";
import LogoDark from "@/docs/img/guides/adonis-white.react.svg";

export let tile: Tile = {
  title: "AdonisJS",
  description: "一个为 Node.js 提供的全方位功能的 Web 框架。",

  Logo,
  LogoDark,
};

export let page: Page = {
  title: "在 AdonisJS 中安装 Tailwind CSS",
  description: "在 AdonisJS 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建项目",
    body: (
      <p>
        如果你还没有设置项目，首先创建一个新的 AdonisJS 项目。最常见的方法是使用<a href="https://docs.adonisjs.com/guides/getting-started/installation">Create AdonisJS</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm init adonisjs@latest my-project -- --kit=web
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
      name: "终端",
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
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        import adonisjs from '@adonisjs/vite/client'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            adonisjs({
              // …
            }),
          ],
        })
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./resources/css/app.css</code> 中添加 <code>@import</code>，以导入 Tailwind CSS 的样式。此外，告诉 Tailwind CSS 扫描你的 <code>resources/views</code> 目录中的实用工具。
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
    title: "启动构建流程",
    body: (
      <p>
        使用 <code>npm run dev</code> 运行构建过程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: "npm run dev",
    },
  },
  {
    title: "开始在项目中使用 Tailwind",
    body: (
      <p>
        确保在 <code>{"<head>"}</code> 中包含编译后的 CSS，然后开始使用 Tailwind 的实用类来为你的内容添加样式。
      </p>
    ),
    code: {
      name: "home.edge",
      lang: "edge",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            @vite(['resources/css/app.css', 'resources/js/app.js'])
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
