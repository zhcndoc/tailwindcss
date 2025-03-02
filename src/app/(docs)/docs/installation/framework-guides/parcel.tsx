import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/parcel.react.svg";

export let tile: Tile = {
  title: "Parcel",
  description: "适用于 Web 的零配置构建工具。",
  Logo,
};

export let page: Page = {
  title: "使用 Parcel 安装 Tailwind CSS",
  description: "在 Parcel 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        首先，创建一个新的 Parcel 项目，如果你还没有设置项目的话。最常见的方法是将 Parcel 作为开发依赖项添加到你的项目中，具体步骤请参考他们的{" "}
        <a href="https://parceljs.org/getting-started/webapp/">入门指南</a>。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        mkdir my-project
        cd my-project
        npm init -y
        npm install parcel
        mkdir src
        touch src/index.html
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/postcss</code> 及其对等依赖项。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss
      `,
    },
  },
  {
    title: "配置 PostCSS",
    body: (
      <p>
        在你的项目根目录下创建一个 <code>.postcssrc</code> 文件，并启用 <code>@tailwindcss/postcss</code>{" "}
        插件。
      </p>
    ),
    code: {
      name: ".postcssrc",
      lang: "json",
      code: js`
        {
          "plugins": {
            "@tailwindcss/postcss": {}
          }
        }
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        创建一个 <code>./src/index.css</code> 文件，并添加一个 <code>@import</code> 用于导入 Tailwind CSS。
      </p>
    ),
    code: {
      name: "index.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "启动你的构建过程",
    body: (
      <p>
        运行 <code>npx parcel src/index.html</code> 启动构建过程。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx parcel src/index.html
      `,
    },
  },
  {
    title: "开始在你的项目中使用 Tailwind",
    body: (
      <p>
        将你的 CSS 文件添加到 <code>{"<head>"}</code> 中，开始使用 Tailwind 的实用类来为你的内容添加样式。
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: html`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <link href="./index.css" type="text/css" rel="stylesheet" />
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
