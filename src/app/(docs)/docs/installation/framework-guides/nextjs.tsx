import { css, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nextjs.react.svg";
import LogoDark from "@/docs/img/guides/nextjs-white.react.svg";

export let tile: Tile = {
  title: "Next.js",
  description: "功能齐全的 React 框架，具有出色的开发者体验。",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "在 Next.js 中安装 Tailwind CSS",
  description: "在 Next.js 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你还没有设置项目的话，首先创建一个新的 Next.js 项目。最常见的方法是使用{" "}
        <a href="https://nextjs.org/docs/api-reference/create-next-app">Create Next App</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npx create-next-app@latest my-project --typescript --eslint --app
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
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "配置 PostCSS 插件",
    body: (
      <p>
        在项目根目录下创建一个 <code>postcss.config.mjs</code> 文件，并将 <code>@tailwindcss/postcss</code> 插件添加到你的 PostCSS 配置中。
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: js`
        const config = {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          },
        };

        export default config;
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./src/app/globals.css</code> 中添加一个 <code>@import</code> 来导入 Tailwind CSS。
      </p>
    ),
    code: {
      name: "globals.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "启动你的构建进程",
    body: (
      <p>
        使用 <code>npm run dev</code> 来运行你的构建进程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },
  {
    title: "在你的项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的工具类来样式化你的内容。</p>,
    code: {
      name: "page.tsx",
      lang: "jsx",
      code: js`
        export default function Home() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];