import Link from "next/link";
import { Metadata } from "next";
import { Steps, type Step } from "@/components/installation-steps";
import dedent from "dedent";

export const metadata: Metadata = {
  title: "体验 CDN",
  description: "使用体验 CDN 直接在浏览器中尝试 Tailwind，无需任何构建步骤。",
  openGraph: {
    type: "article",
    title: "体验 CDN",
    description: "直接在浏览器中尝试 Tailwind CSS，不需要任何构建步骤。",
    images: "https://tailwindcss.zhcndoc.com/api/og?path=/docs/installation/play-cdn",
    url: "https://tailwindcss.zhcndoc.com/docs/installation/play-cdn",
  },
};

const steps: Step[] = [
  {
    title: "将体验 CDN 脚本添加到您的 HTML 中",
    body: (
      <p>
        将体验 CDN 脚本标签添加到 HTML 文件的 <code>&lt;head&gt;</code> 中，并开始使用 Tailwind 的工具类来设置内容样式。
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <!-- [!code highlight:2] -->
            <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
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
  {
    title: "尝试添加一些自定义 CSS",
    body: (
      <p>
        使用 <code>type="text/tailwindcss"</code> 添加自定义 CSS，它支持所有的 Tailwind CSS 功能。
      </p>
    ),
    code: {
      name: "index.html",
      lang: "html",
      code: dedent`
        <!doctype html>
        <html>
          <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <script src="https://unpkg.com/@tailwindcss/browser@4"></script>
            <!-- [!code highlight:6] -->
            <style type="text/tailwindcss">
              @theme {
                --color-clifford: #da373d;
              }
            </style>
          </head>
          <body>
            <!-- [!code word:text-clifford] -->
            <h1 class="text-3xl font-bold underline text-clifford">
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
          使用体验 CDN
        </h3>
        <p>
          使用体验 CDN 直接在浏览器中尝试 Tailwind，无需任何构建步骤。体验 CDN 仅用于开发目的，不适用于生产环境。
        </p>
      </div>
      <Steps steps={steps} />
    </>
  );
}
