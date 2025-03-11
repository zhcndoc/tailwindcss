import { css, html, Page, shell, Step, Tile } from "./utils";
import Logo from "@/docs/img/guides/rails.react.svg";
import LogoDark from "@/docs/img/guides/rails-white.react.svg";

export let tile: Tile = {
  title: "Ruby on Rails",
  description: "全栈框架，具有构建出色的 Web 应用程序所需的所有工具。",
  Logo,
  LogoDark,
};

export let page: Page = {
  title: "在 Ruby on Rails 中安装 Tailwind CSS",
  description: "在 Ruby on Rails v7+ 项目中设置 Tailwind CSS。",

  // 注意：目前未使用此介绍，但作为参考保留在此，因为当 rails gem 更新为稳定版 v4 版本时，我们希望重新启用它。
  intro: (
    <div className="prose prose-slate dark:prose-dark relative z-10 mb-16 max-w-3xl">
      <p>
        在 Rails 项目中开始使用 Tailwind CSS 的最快方法是使用 <a href="https://github.com/rails/tailwindcss-rails">Tailwind CSS for Rails</a>，运行 <code>rails new my-project --css tailwind</code>。这将根据官方 Rails 示例自动配置 Tailwind 设置。如果您希望手动配置 Tailwind，请继续阅读本指南剩余部分。
      </p>
    </div>
  ),
};

export let steps: Step[] = [
  {
    title: "创建您的项目",
    body: (
      <p>
        首先，创建一个新的 Rails 项目，如果您还没有设置好。最常见的方法是使用 <a href="https://guides.rubyonrails.org/command_line.html">Rails 命令行</a>。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        rails new my-project
        cd my-project
      `,
    },
  },
  {
    title: "安装 Tailwind CSS",
    body: (
      <p>
        安装 <code>tailwindcss-ruby</code> 和 <code>tailwindcss-rails</code> gems，然后运行安装命令在项目中设置 Tailwind CSS。
      </p>
    ),

    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        ./bin/bundle add tailwindcss-ruby
        ./bin/bundle add tailwindcss-rails
        ./bin/rails tailwindcss:install
      `,
    },
  },
  {
    title: "启动您的构建过程",
    body: (
      <p>
        通过运行 <code>./bin/dev</code> 启动构建过程。
      </p>
    ),
    code: {
      name: "终端",
      lang: "shell",
      code: shell`
        ./bin/dev
      `,
    },
  },
  {
    title: "开始在您的项目中使用 Tailwind",
    body: <p>开始使用 Tailwind 的实用类来为您的内容设置样式。</p>,
    code: {
      name: "index.html.erb",
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