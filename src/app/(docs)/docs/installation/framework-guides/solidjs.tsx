import { js, css, shell, type Page, type Step, type Tile } from "./utils";
import Logo from "@/docs/img/guides/solidjs.react.svg";

export let tile: Tile = {
  title: "SolidJS",
  description: "用于构建简单、高性能和响应式用户界面的工具。",
  Logo,
};

export let page: Page = {
  title: "在 SolidJS 中安装 Tailwind CSS",
  description: "在 SolidJS 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你还没有设置 SolidJS 项目，可以首先创建一个新的项目。最常见的方法是使用{" "}
        <a href="https://www.solidjs.com/guides/getting-started">SolidJS Vite 模板</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npx degit solidjs/templates/js my-project
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/vite</code> 及其对等依赖。
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
        在你的 Vite 配置中添加 <code>@tailwindcss/vite</code> 插件。
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite';
        import solidPlugin from 'vite-plugin-solid';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            solidPlugin(),
          ],
          server: {
            port: 3000,
          },
          build: {
            target: 'esnext',
          },
        });
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在 <code>./src/index.css</code> 中添加一个 <code>@import</code> 导入 Tailwind CSS。
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
    title: "启动构建过程",
    body: (
      <p>
        使用 <code>npm run dev</code> 启动你的构建过程。
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
      name: "App.jsx",
      lang: "jsx",
      code: js`
        export default function App() {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];
