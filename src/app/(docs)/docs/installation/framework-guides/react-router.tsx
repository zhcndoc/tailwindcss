import { css, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/react-router.react.svg";
import LogoDark from "@/docs/img/guides/react-router-white.react.svg";

export let tile: Tile = {
  title: "React Router",
  description: "一个以标准为中心的路由器，你可以在任何地方部署。",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "使用 React Router 安装 Tailwind CSS",
  description: "在 React Router 项目中设置 Tailwind CSS。",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        如果你还没有设置好的话，首先创建一个新的 React Router 项目。最常见的方法是使用 <a href="https://reactrouter.com/start/framework/installation">Create React Router</a>。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npx create-react-router@latest my-project
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        通过 npm 安装 <code>@tailwindcss/vite</code> 及其对等依赖项。
      </p>
    ),
    code: {
      name: "Terminal",
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
        import { reactRouter } from "@react-router/dev/vite";
        import { defineConfig } from "vite";
        import tsconfigPaths from "vite-tsconfig-paths";
        // [!code highlight:2]
        import tailwindcss from "@tailwindcss/vite";

        export default defineConfig({
          plugins: [
            // [!code highlight:2]
            tailwindcss(),
            reactRouter(),
            tsconfigPaths(),
          ],
        });
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        添加一个 <code>@import</code> 到 <code>./app/app.css</code> 以导入 Tailwind CSS。
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
        运行 <code>npm run dev</code> 来启动你的构建过程。
      </p>
    ),
    code: {
      name: "Terminal",
      lang: "shell",
      code: shell`
        npm run dev
      `,
    },
  },
  {
    title: "在你的项目中开始使用 Tailwind",
    body: <p>开始使用 Tailwind 的实用类来装饰你的内容。</p>,
    code: {
      name: "home.tsx",
      lang: "tsx",
      code: js`
        export default function Home() {
          return (
            // [!code highlight:4]
            <h1 className="text-3xl font-bold underline">
              Hello world!
            </h1>
          )
        }
      `,
    },
  },
];