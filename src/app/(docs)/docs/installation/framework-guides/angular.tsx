import { css, html, js, shell, Page, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/angular.react.svg";
import LogoDark from "@/docs/img/guides/angular-white.react.svg";

export let tile: Tile = {
  title: "Angular",
  description: "用于构建移动和桌面 Web 应用的平台。",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "在 Angular 中安装 Tailwind CSS",
  description: "在 Angular 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你还没有设置一个项目，请首先创建一个新的 Angular 项目。最常见的方法是使用{" "}
        <a href="https://angular.dev/tools/cli/setup-local">Angular CLI</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        ng new my-project --style css
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/postcss</code> 及其对等依赖。
      </p>
    ),

    // 注意: `--force` 标志用于确保安装成功。Angular 对 `tailwindcss` v3 有对等依赖，这在安装 `tailwindcss` v4 时会导致错误。
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        npm install tailwindcss @tailwindcss/postcss postcss --force
      `,
    },
  },
  {
    title: "配置 PostCSS 插件",
    body: (
      <p>
        在项目根目录创建一个 <code>.postcssrc.json</code> 文件，并将 <code>@tailwindcss/postcss</code> 插件添加到你的 PostCSS 配置中。
      </p>
    ),
    code: {
      name: ".postcssrc.json",
      lang: "js",
      code: js`
        {
          "plugins": {
            // [!code highlight:2]
            "@tailwindcss/postcss": {}
          }
        }
      `,
    },
  },
  {
    title: "引入 Tailwind CSS",
    body: (
      <p>
        添加一个 <code>@import</code> 到 <code>./src/styles.css</code> 以引入 Tailwind CSS。
      </p>
    ),
    code: {
      name: "styles.css",
      lang: "css",
      code: css`
        @import "tailwindcss";
      `,
    },
  },
  {
    title: "启动你的构建过程",
    body: (
      <p>
        使用 <code>ng serve</code> 运行你的构建过程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        ng serve
      `,
    },
  },
  {
    title: "在项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的工具类来样式化你的内容。</p>,
    code: {
      name: "app.component.html",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          Hello world!
        </h1>
      `,
    },
  },
];