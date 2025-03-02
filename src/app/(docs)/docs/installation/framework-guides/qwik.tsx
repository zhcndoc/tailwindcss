import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/qwik.react.svg";

export let tile: Tile = {
  title: "Qwik",
  description: "无需费力构建即时互动的 Web 应用。",
  Logo,
};

export let page: Page = {
  title: "在 Qwik 中安装 Tailwind CSS",
  description: "在 Qwik 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建项目",
    body: (
      <p>
        如果你还没有设置一个新的 Qwik 项目，请先创建一个。最常见的方法是使用{" "}
        <a href="https://qwik.dev/docs/getting-started/#create-an-app-using-the-cli">Create Qwik</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm create qwik@latest empty my-project
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
        将 <code>@tailwindcss/vite</code> 插件添加到你的 Vite 配置中。
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { defineConfig } from 'vite'
        import { qwikVite } from "@builder.io/qwik/optimizer";
        import { qwikCity } from "@builder.io/qwik-city/vite";
        // …

        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig(({ command, mode }): UserConfig => {
          return {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
              qwikCity(),
              qwikVite(),
              tsconfigPaths(),
            ],

            // …
          }
        })
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        添加一个 <code>@import</code> 到 <code>./src/global.css</code> 中以导入 Tailwind CSS。
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
    title: "启动构建过程",
    body: (
      <p>
        通过 <code>npm run dev</code> 启动你的构建过程。
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
    body: <p>开始使用 Tailwind 的实用类来为你的内容设置样式。</p>,
    code: {
      name: "index.tsx",
      lang: "tsx",
      code: js`
        import { component$ } from '@builder.io/qwik'

        export default component$(() => {
          return (
            // [!code highlight:4]
            <h1 class="text-3xl font-bold underline">
              Hello World!
            </h1>
          )
        })
      `,
    },
  },
];