import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/meteor.react.svg";

export let tile: Tile = {
  title: "Meteor",
  description: "用于开发跨平台应用程序的全栈 JavaScript 框架。",
  Logo,
};

export let page: Page = {
  title: "在 Meteor 中安装 Tailwind CSS",
  description: "在 Meteor 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你还没有设置 Meteor 项目，请首先创建一个新的 Meteor 项目。最常见的方法是使用
        <a href="https://docs.meteor.com/about/install.html">Meteor CLI</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npx meteor create my-project
        cd my-project
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
      name: "终端",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss postcss-load-config
      `,
    },
  },
  {
    title: "配置 PostCSS 插件",
    body: (
      <p>
        在项目根目录下创建一个 <code>postcss.config.mjs</code> 文件，并将
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
        将 <code>@import</code> Tailwind CSS 添加到你的 <code>./client/main.css</code> 文件中。
      </p>
    ),
    code: {
      name: "main.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "启动构建过程",
    body: (
      <p>
        使用 <code>npm run start</code> 运行你的构建过程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm run start
      `,
    },
  },
  {
    title: "开始在项目中使用 Tailwind",
    body: <p>开始使用 Tailwind 的实用类来设计你的内容。</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export const App = () => (
          // [!code highlight:4]
          <h1 className="text-3xl font-bold underline">
            Hello world!
          </h1>
        )
      `,
    },
  },
];