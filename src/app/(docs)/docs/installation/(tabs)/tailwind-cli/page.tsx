import dedent from "dedent";
import Link from "next/link";
import { Metadata } from "next";
import { type Step, Steps } from "@/components/installation-steps";

export const metadata: Metadata = {
  title: "Tailwind CLI",
  description:
    "从头开始使用 Tailwind CSS 的最简单和最快的方法是使用 Tailwind CLI 工具。",
  openGraph: {
    type: "article",
    title: "Tailwind CLI",
    description: "从头开始使用 Tailwind CSS 的最简单和最快的方法。",
    images: "https://tailwindcss.zhcndoc.com/api/og?path=/docs/installation/tailwind-cli",
    url: "https://tailwindcss.zhcndoc.com/docs/installation/tailwind-cli",
  },
};

const steps: Step[] = [
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>tailwindcss</code> 和 <code>@tailwindcss/cli</code>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: "npm install tailwindcss @tailwindcss/cli",
    },
  },
  {
    title: "在你的 CSS 中导入 Tailwind",
    body: (
      <p>
        将 <code>@import "tailwindcss";</code> 导入添加到你的主 CSS 文件中。
      </p>
    ),
    code: {
      name: "src/input.css",
      lang: "css",
      code: '@import "tailwindcss";',
    },
  },
  {
    title: "启动 Tailwind CLI 构建过程",
    body: <p>运行 CLI 工具来扫描源文件中的类并构建你的 CSS。</p>,
    code: {
      name: "终端",
      lang: "shell",
      code: "npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch",
    },
  },
  {
    title: "在你的 HTML 中开始使用 Tailwind",
    body: (
      <p>
        将编译后的 CSS 文件添加到 <code>{"<head>"}</code> 中，并开始使用 Tailwind 的工具类为你的内容设置样式。
      </p>
    ),
    code: {
      name: "src/index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
        <head>
          <meta charset="UTF-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <!-- [!code highlight:2] -->
          <link href="./output.css" rel="stylesheet">
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
        <h3 className="sr-only" data-title="true">
          安装 Tailwind CLI
        </h3>
        <p>
          从头开始使用 Tailwind CSS 的最简单和最快的方法是使用 Tailwind CLI 工具。CLI 也可以作为一个
          <Link href="/blog/standalone-cli">独立可执行文件</Link> 使用，如果你想在不安装 Node.js 的情况下使用它。
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
