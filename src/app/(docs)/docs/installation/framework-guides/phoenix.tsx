import { css, elixir, html, js, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/phoenix.react.svg";

export let tile: Tile = {
  title: "Phoenix",
  description: "一个使用 Elixir 构建丰富、交互式应用的框架.",
  Logo,
};

export let page: Page = {
  title: "在 Phoenix 项目中安装 Tailwind CSS",
  description: "在 Phoenix 项目中设置 Tailwind CSS.",
};

export let steps: Step[] = [
  {
    title: "创建你的项目",
    body: (
      <p>
        首先，如果你还没有设置，请创建一个新的 Phoenix 项目。你可以按照他们的{" "}
        <a href="https://hexdocs.pm/phoenix/installation.html">安装指南</a>来快速启动和运行.
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        mix phx.new myproject
        cd myproject
      `,
    },
  },
  {
    title: "安装 Tailwind 插件",
    body: (
      <p>
        将 Tailwind 插件添加到你的依赖项中，并运行 <code>mix deps.get</code> 来安装它.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp deps do
          [
            # …
            # [!code highlight:2]
            {:tailwind, "~> 0.3", runtime: Mix.env() == :dev},
          ]
        end
      `,
    },
  },
  {
    title: "配置 Tailwind 插件",
    body: (
      <p>
        在你的 <code>config/config.exs</code> 文件中，你可以设置你想要使用的 Tailwind CSS 版本并且自定义你的资产路径.
      </p>
    ),
    code: {
      name: "config.exs",
      lang: "elixir",
      code: elixir`
        config :tailwind,
          # [!code highlight:2]
          version: "4.1.10",
          myproject: [
            args: ~w(
              # [!code highlight:3]
              --input=assets/css/app.css
              --output=priv/static/assets/app.css
            ),
            # [!code highlight:2]
            cd: Path.expand("..", __DIR__)
          ]
      `,
    },
  },
  {
    title: "更新部署脚本",
    body: (
      <p>
        配置你的 <code>assets.deploy</code> 别名，以便在部署时构建你的 CSS.
      </p>
    ),
    code: {
      name: "mix.exs",
      lang: "elixir",
      code: elixir`
        defp aliases do
          [
            # …
            "assets.deploy": [
              # [!code highlight:2]
              "tailwind myproject --minify",
              "esbuild myproject --minify",
              "phx.digest"
            ]
          ]
        end
      `,
    },
  },
  {
    title: "在开发环境中启用 watcher",
    body: (
      <p>
        在你的 <code>./config/dev.exs</code> 文件中将 Tailwind 添加到 watcher 列表中.
      </p>
    ),
    code: {
      name: "dev.exs",
      lang: "elixir",
      code: elixir`
        watchers: [
          # 通过调用 Esbuild.install_and_run(:default, args) 启动 esbuild watcher
          esbuild: {Esbuild, :install_and_run, [:myproject, ~w(--sourcemap=inline --watch)]},
          # [!code highlight:2]
          tailwind: {Tailwind, :install_and_run, [:myproject, ~w(--watch)]}
        ]
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: <p>运行安装命令以下载独立的 Tailwind CLI.</p>,
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        mix tailwind.install
      `,
    },
  },
  {
    title: "导入 Tailwind CSS",
    body: (
      <p>
        添加一个 <code>@import</code> 到 <code>./assets/css/app.css</code> 中以导入 Tailwind CSS。
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
    title: "删除默认的 CSS 导入",
    body: (
      <p>
        从 <code>./assets/js/app.js</code> 中删除 CSS 导入，因为 Tailwind 现在为你处理此问题.
      </p>
    ),
    code: {
      name: "app.js",
      lang: "js",
      code: js`
        // [!code --:3]
        // 如果你添加了自己的 CSS 构建管道（例如 postcss），请删除此行.
        import "../css/app.css"
      `,
    },
  },
  {
    title: "启动你的构建过程",
    body: (
      <p>
        使用 <code>mix phx.server</code> 运行你的构建过程.
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        mix phx.server
      `,
    },
  },
  {
    title: "开始在你的项目中使用 Tailwind",
    body: <p>开始使用 Tailwind 的实用类来样式化你的内容.</p>,
    code: {
      name: "index.html.heex",
      lang: "html",
      code: html`
        <!-- [!code highlight:4] -->
        <h1 class="text-3xl font-bold underline">
          <!-- prettier-ignore -->
          你好, 世界！
        </h1>
      `,
    },
  },
];