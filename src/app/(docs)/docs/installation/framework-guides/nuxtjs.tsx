import { css, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/nuxtjs.react.svg";

export let tile: Tile = {
  title: "Nuxt",
  description: "构建通用应用程序的直观 Vue 框架。",
  Logo,
};

export let page: Page = {
  title: "使用 Nuxt 安装 Tailwind CSS",
  description: "在 Nuxt 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果您还没有设置 Nuxt 项目，请首先创建一个新的 Nuxt 项目。最常见的方法是使用 <a href="https://nuxt.zhcndoc.com/docs/4.x/getting-started/installation#new-project">Create Nuxt</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm create nuxt my-project
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
        将 <code>@tailwindcss/vite</code> 插件添加到您的 Nuxt 配置作为 Vite 插件。
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2025-07-15",
          devtools: { enabled: true },
          vite: {
            plugins: [
              // [!code highlight:2]
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        创建一个 <code>./app/assets/css/main.css</code> 文件，并添加一个 <code>@import</code> 来导入 Tailwind CSS。
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
    title: "全局添加 CSS 文件",
    body: (
      <p>
        将您新创建的 <code>./app/assets/css/main.css</code> 添加到 <code>nuxt.config.ts</code> 文件中的 <code>css</code> 数组。
      </p>
    ),
    code: {
      name: "nuxt.config.ts",
      lang: "ts",
      code: js`
        import tailwindcss from "@tailwindcss/vite";

        export default defineNuxtConfig({
          compatibilityDate: "2025-07-15",
          devtools: { enabled: true },
          // [!code highlight:2]
          css: ['./app/assets/css/main.css'],
          vite: {
            plugins: [
              tailwindcss(),
            ],
          },
        });
      `,
    },
  },
  {
    title: "启动你的构建过程",
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
    title: "在你的项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的工具类来设计您的内容。</p>,
    code: {
      name: "app.vue",
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
