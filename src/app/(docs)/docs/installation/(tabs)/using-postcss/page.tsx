import { Cta } from "@/components/cta";
import { type Step, Steps } from "@/components/installation-steps";
import dedent from "dedent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "使用 PostCSS 安装 Tailwind CSS",
  description:
    "将 Tailwind CSS 安装为 PostCSS 插件是将其与 Next.js 和 Angular 等框架集成的最无缝方式。",
  openGraph: {
    type: "article",
    title: "使用 PostCSS 进行安装",
    description: "将 Tailwind CSS 与 Next.js 和 Angular 等框架集成。",
    images: "https://tailwindcss.zhcndoc.com/api/og?path=/docs/installation/using-postcss",
    url: "https://tailwindcss.zhcndoc.com/docs/installation/using-postcss",
  },
};

const steps: Step[] = [
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>tailwindcss</code>、<code>@tailwindcss/postcss</code> 和 <code>postcss</code>。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm install tailwindcss @tailwindcss/postcss postcss
      `,
    },
  },
  {
    title: "添加 Tailwind 到你的 PostCSS 配置",
    body: (
      <p>
        将 <code>@tailwindcss/postcss</code> 添加到你的 <code>postcss.config.mjs</code> 文件，或者你的项目中任何 PostCSS 已配置的地方。
      </p>
    ),
    code: {
      name: "postcss.config.mjs",
      lang: "js",
      code: dedent`
        export default {
          plugins: {
            // [!code highlight:2]
            "@tailwindcss/postcss": {},
          }
        }
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        在你的 CSS 文件中添加一个 <code>@import</code> 来导入 Tailwind CSS。
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
    title: "启动你的构建过程",
    body: (
      <p>
        使用 <code>npm run dev</code> 或者任何在你的 <code>package.json</code> 文件中配置的命令来运行你的构建过程。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: dedent`
        npm run dev
      `,
    },
  },
  {
    title: "在你的 HTML 中开始使用 Tailwind",
    body: (
      <p>
        确保你的编译后的 CSS 文件包含在 <code>{"<head>"}</code>{" "}
        <em>（你的框架可能会为你处理这一点）</em>，然后开始使用 Tailwind 的实用类来为你的内容添加样式。
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
          <link href="/dist/styles.css" rel="stylesheet">
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
          将 Tailwind CSS 安装为 PostCSS 插件
        </h3>
        <p>
          将 Tailwind CSS 安装为 PostCSS 插件是将其与 Next.js 和 Angular 等框架集成的最无缝方式。
        </p>
      </div>
      <Steps steps={steps} />
      <div className="my-4 md:my-16">
        <Cta label="探索我们的框架指南" href="/docs/installation/framework-guides">
          <strong className="font-semibold text-gray-950 dark:text-white">你遇到困难了吗？</strong> 在不同的构建工具中设置 Tailwind 与 PostCSS 可能会有所不同。查看我们的框架指南，看看我们是否有针对你的特定设置的更具体的说明。
        </Cta>
      </div>
    </>
  );
}
