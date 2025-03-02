import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用 Vite 安装 Tailwind CSS",
  description:
    "将 Tailwind CSS 作为 Vite 插件安装是最无缝的方式，可将其与 Laravel、SvelteKit、React Router、Nuxt 和 SolidJS 等框架集成。",
  openGraph: {
    type: "article",
    title: "使用 Vite 安装",
    description: "将 Tailwind CSS 集成到 Laravel、SvelteKit、React Router 和 SolidJS 等框架中。",
    images: "https://tailwindcss.zhcndoc.com/api/og?path=/docs/installation/using-vite",
    url: "https://tailwindcss.zhcndoc.com/docs/installation/using-vite",
  },
};

const steps: Step[] = [
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>tailwindcss</code> 和 <code>@tailwindcss/vite</code>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: dedent`
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
      lang: "js",
      code: dedent`
        import { defineConfig } from 'vite'
        // [!code highlight:2]
        import tailwindcss from '@tailwindcss/vite'

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
          ],
        })
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在你的 CSS 文件中添加一个 <code>@import</code> 语句，用于导入 Tailwind CSS。
      </p>
    ),
    code: {
      name: "CSS",
      lang: "css",
      code: dedent`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "启动构建过程",
    body: (
      <p>
        运行 <code>npm run dev</code> 或 <code>package.json</code> 文件中配置好的其他命令来启动你的构建过程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "在 HTML 中开始使用 Tailwind",
    body: (
      <p>
        确保你的编译后的 CSS 被包含在 <code>{"<head>"}</code> 中 <em>（你的框架可能会为你处理这一点）</em>，然后开始使用 Tailwind 的工具类来样式化你的内容。
      </p>
    ),
    code: {
      name: "HTML",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="/src/styles.css" rel="stylesheet">
        </head>
        <body>
          <!-- [!code highlight:4] -->
          <h1 class="text-3xl font-bold underline">
            Hello world!
          </h1>
        </body>
        </html>
      `,
    },
  },
];

export default function Page() {
  return (
    <>
      <div id="content-wrapper" className="prose relative z-10 mb-10 max-w-3xl" data-content="true">
        <h3 data-title="true" className="sr-only">
          将 Tailwind CSS 作为 Vite 插件安装
        </h3>
        <p>
          将 Tailwind CSS 作为 Vite 插件安装是最无缝的方式，可将其与 Laravel、SvelteKit、React Router、Nuxt 和 SolidJS 等框架集成。
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="探索我们的框架指南" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">遇到困难了吗？</strong> 使用不同的构建工具设置 Tailwind 和 Vite 可能略有不同。检查我们的框架指南，看看有没有针对特定设置的更详细说明。
        </Cta>
      </div>
    </>
  );
}
