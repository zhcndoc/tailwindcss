import { css, js, html, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/svelte.react.svg";

export let tile: Tile = {
  title: "SvelteKit",
  description: "使用 Svelte.js 快速构建所有规模的应用程序。",
  Logo,
};

export let page: Page = {
  title: "在 SvelteKit 中安装 Tailwind CSS",
  description: "在 SvelteKit 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建您的项目",
    body: (
      <p>
        如果还没有设置，请首先创建一个新的 SvelteKit 项目。最常见的方法在 <a href="https://svelte.dev/docs/kit/creating-a-project">SvelteKit</a> 文档中有详细说明。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npx sv create my-project
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/vite</code> 及其对等依赖包。
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
        在 Vite 配置中添加 <code>@tailwindcss/vite</code> 插件。
      </p>
    ),
    code: {
      name: "vite.config.ts",
      lang: "ts",
      code: js`
        import { sveltekit } from '@sveltejs/kit/vite';
        import { defineConfig } from 'vite';
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite';

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            sveltekit(),
          ],
        });
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        创建一个 <code>./src/app.css</code> 文件，并添加一个导入 Tailwind CSS 的 <code>@import</code> 语句。
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
    title: "导入 CSS 文件",
    body: (
      <p>
        创建一个 <code>./src/routes/+layout.svelte</code> 文件，并导入新创建的 <code>app.css</code> 文件。
      </p>
    ),
    code: {
      name: "+layout.svelte",
      lang: "svelte",
      code: html`
        <script>
          let { children } = $props();
          // [!code highlight:2]
          import "../app.css";
        </script>

        {@render children()}
      `,
    },
  },
  {
    title: "启动构建过程",
    body: (
      <p>
        运行 <code>npm run dev</code> 启动构建过程。
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
    title: "在项目中开始使用 Tailwind",
    body: (
      <p>
        开始使用 Tailwind 的工具类来设置您的内容样式，确保为所有需要由 Tailwind 处理的 <code>&lt;style&gt;</code> 块导入 Tailwind CSS 主题。
      </p>
    ),
    code: {
      name: "+page.svelte",
      lang: "svelte",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>

        <style lang="postcss">
          /* [!code highlight:2] */
          @reference "tailwindcss";

          :global(html) {
            background-color: theme(--color-gray-100);
          }
        </style>
      `,
    },
  },
];
