import { astro, css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/astro.react.svg";
import LogoDark from "@/docs/img/guides/astro-white.react.svg";

export let tile: Tile = {
  title: "Astro",
  description: "为速度而生的一体化 Web 框架。",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "在 Astro 中安装 Tailwind CSS",
  description: "在 Astro 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果您还没有设置 Astro 项目，请先创建一个。最常见的方法是使用{" "}
        <a href="https://docs.astro.build/en/install-and-setup/#install-from-the-cli-wizard">create astro</a>.
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm create astro@latest my-project
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/vite</code> 和它的对等依赖。
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
        在你的 Astro 配置文件中添加 <code>@tailwindcss/vite</code> 插件到 Vite 插件中。
      </p>
    ),
    code: {
      name: "astro.config.mjs",
      lang: "js",
      code: js`
        // @ts-check
        import { defineConfig } from "astro/config";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        // https://astro.build/config
        export default defineConfig({
          // [!code highlight:4]
          vite: {
            plugins: [tailwindcss()],
          },
        });
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        创建一个 <code>./src/styles/global.css</code> 文件，并添加一个 <code>@import</code> 用于 Tailwind CSS。
      </p>
    ),
    code: {
      name: "global.css",
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
        使用 <code>npm run dev</code> 启动构建过程。
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
    title: "开始在你的项目中使用 Tailwind",
    body: (
      <p>
        开始使用 Tailwind 的实用程序类来样式化你的内容，并确保导入新创建的 CSS 文件。
      </p>
    ),
    code: {
      name: "index.astro",
      lang: "astro",
      code: astro`
        ---
        // [!code highlight:2]
        import "../styles/global.css";
        ---

        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          Hello world!
        </h1>
      `,
    },
  },
];
