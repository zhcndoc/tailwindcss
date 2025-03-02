import { css, html, js, Page, shell, Step, Tab, Tile } from "./utils";
import Logo from "@/docs/img/guides/rspack.react.svg";

export let tile: Tile = {
  title: "Rspack",
  description: "一个快速的基于 Rust 的网页打包工具。",
  Logo,
};

export let page: Page = {
  title: "使用 Rspack 安装 Tailwind CSS",
  description: "在 Rspack 项目中设置 Tailwind CSS。",
};

export let tabs: Tab[] = [
  {
    slug: "react",
    title: "使用 React",
  },
  {
    slug: "vue",
    title: "使用 Vue",
  },
];

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你还没有设置一个新的 Rspack 项目，请首先创建一个。最常见的方法是使用{" "}
        <a href="https://rspack.dev/guide/start/quick-start#using-the-rspack-cli">Rspack CLI</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm create rspack@latest
      `,
    },
  },

  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        安装 <code>@tailwindcss/postcss</code> 及其对等依赖项。
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
        在你的 <code>rspack.config.js</code> 文件中启用 PostCSS 加载器。请参阅{" "}
        <a href="https://rspack.dev/guide/tech/css#tailwind-css">文档</a>{" "}了解更多信息。
      </p>
    ),
    code: {
      name: "rspack.config.ts",
      lang: "ts",
      code: js`
        export default defineConfig({
          // ...
          module: {
            rules: [
              // [!code highlight:6]
              {
                test: /\.css$/,
                use: ["postcss-loader"],
                type: "css",
              },
              // ...
            ],
          },
        }
      `,
    },
  },
  {
    title: "配置 PostCSS 插件",
    body: (
      <p>
        在项目根目录创建一个 <code>postcss.config.mjs</code> 文件，并将 <code>@tailwindcss/postcss</code> 插件添加到你的 PostCSS 配置中。
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
    tabs: ["react"],
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./src/index.css</code> 中添加一个 <code>@import</code> 语句来导入 Tailwind CSS。
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
    tabs: ["vue"],
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./src/style.css</code> 中添加一个 <code>@import</code> 语句来导入 Tailwind CSS。
      </p>
    ),
    code: {
      name: "style.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "启动你的构建流程",
    body: (
      <p>
        通过运行 <code>npm run dev</code> 来启动你的构建流程。
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
    tabs: ["react"],
    title: "在项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的工具类来设置你的内容样式。</p>,
    code: {
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
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
  {
    tabs: ["vue"],
    title: "在项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的工具类来设置你的内容样式。</p>,
    code: {
      name: "App.vue",
      lang: "vue",
      code: html`
        <template>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            <!-- prettier-ignore -->
            Hello world!
          </h1>
        </template>
      `,
    },
  },
];

// let tabs = [
//       {
//   {
//     name: "Using Vue",
//     href: "#vue",
//     steps: [
//       {
//         title: "Start your build process",
//         body: (
//           <p>
//             Run your build process with <code>npm run dev</code>.
//           </p>
//         ),
//         code: {
//           name: "Terminal",
//           lang: "shell",
//           code: "npm run dev",
//         },
//       },
//       {
//         title: "Start using Tailwind in your project",
//         body: (
//           <p>Start using Tailwind’s utility classes to style your content.</p>
//         ),
//         code: {
//           name: "App.vue",
//           lang: "html",
//           code: `  <template>
// >   <h1 class="text-3xl font-bold underline">
// >     Hello world!
// >   </h1>
//   </template>`,
//         },
//       },
//     ],
//   },
// ];
