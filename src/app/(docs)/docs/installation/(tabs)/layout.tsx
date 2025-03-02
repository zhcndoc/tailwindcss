import { Metadata } from "next";
import { TabBar } from "@/components/installation-tabs";

export const metadata: Metadata = {
  title: {
    template: "%s - Tailwind CSS 中文文档",
    default: "安装",
  },
  openGraph: {
    type: "article",
    title: {
      template: "%s - Tailwind CSS 中文文档",
      default: "安装",
    },
  },
};

const tabs = {
  "使用 Vite": "/docs/installation/using-vite",
  "使用 PostCSS": "/docs/installation/using-postcss",
  "Tailwind CLI": "/docs/installation/tailwind-cli",
  "框架指南": "/docs/installation/framework-guides",
  "体验 CDN": "/docs/installation/play-cdn",
};

const readNext = [
  {
    title: "使用实用类样式",
    href: "/docs/styling-with-utility-classes",
    body: (
      <p>使用以实用性为主的工作流，从一组限定的基本实用工具构建复杂的组件。</p>
    ),
    // icon: {
    //   className: "dark:bg-indigo-500 dark:highlight-white/20",
    //   // light: require("@/img/icons/home/utility-first.png").default.src,
    //   // dark: require("@/img/icons/home/dark/utility-first.png").default.src,
    // },
    icon: require("@/components/home/icons/css-grid-icon").default,
  },
  {
    title: "响应式设计",
    href: "/docs/responsive-design",
    body: <p>使用响应式修饰符构建完全响应的用户界面，适应任意屏幕尺寸。</p>,
    icon: {
      className: "dark:bg-indigo-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/mobile-first.png").default.src,
      // dark: require("@/img/icons/home/dark/mobile-first.png").default.src,
    },
  },
  {
    title: "悬停、聚焦及其他状态",
    href: "/docs/hover-focus-and-other-states",
    body: <p>在交互状态（如悬停、聚焦等）下通过条件修饰符样式化元素。</p>,
    icon: {
      className: "dark:bg-blue-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/state-variants.png").default.src,
      // dark: require("@/img/icons/home/dark/state-variants.png").default.src,
    },
  },
  {
    title: "暗黑模式",
    href: "/docs/dark-mode",
    body: <p>直接在 HTML 中使用暗黑模式修饰符优化您的网站以适应暗黑模式。</p>,
    icon: {
      className: "dark:bg-slate-600 dark:highlight-white/20",
      // light: require("@/img/icons/home/dark-mode.png").default.src,
      // dark: require("@/img/icons/home/dark/dark-mode.png").default.src,
    },
  },
  {
    title: "样式重用",
    href: "/docs/reusing-styles",
    body: <p>通过创建可重用的抽象体管理重复内容并保持项目的可维护性。</p>,
    icon: {
      className: "dark:bg-sky-500 dark:highlight-white/20",
      // light: require("@/img/icons/home/component-driven.png").default.src,
      // dark: require("@/img/icons/home/dark/component-driven.png").default.src,
    },
  },
  {
    title: "自定义框架",
    href: "/docs/adding-custom-styles",
    body: <p>自定义框架以匹配您的品牌，并使用自己的自定义样式扩展框架。</p>,
    icon: {
      className: "dark:bg-pink-500 dark:highlight-white/30",
      // light: require("@/img/icons/home/customization.png").default.src,
      // dark: require("@/img/icons/home/dark/customization.png").default.src,
    },
  },
];

export default function Page({ children }: { children: React.ReactNode }) {
  return (
    <>
      {/* Add a placeholder div so the Next.js router can find the scrollable element. */}
      <div hidden />

      <div className="isolate mx-auto grid w-full max-w-2xl grid-cols-1 gap-10 pt-10 md:pb-24 xl:max-w-5xl">
        <div className="px-4 sm:px-6">
          <p
            data-section="true"
            className="font-mono text-xs/6 font-medium tracking-widest text-gray-600 uppercase dark:text-gray-400"
          >
            安装
          </p>
          <h1 className="mt-2 text-3xl font-medium tracking-tight text-gray-950 dark:text-white">
            开始使用 Tailwind CSS
          </h1>
          <p data-description="true" className="mt-6 text-base/7 text-gray-700 dark:text-gray-300">
            Tailwind CSS 通过扫描所有 HTML 文件、JavaScript 组件以及其他模板中的类名来工作，生成相应的样式，然后将其写入静态 CSS 文件。
          </p>
          <p className="mt-4 text-base/7 text-gray-700 dark:text-gray-300">
            它快速、灵活且可靠——无运行时。
          </p>

          <div className="mt-10" data-content="true">
            <section className="relative mb-16">
              <div className="relative z-10">
                <h2
                  data-docsearch-ignore
                  className="mb-6 text-lg font-semibold tracking-tight text-gray-950 dark:text-white"
                >
                  安装
                </h2>
                <TabBar
                  tabs={Object.entries(tabs).map(([title, url]) => ({
                    title,
                    url,
                  }))}
                />
              </div>
              {children}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
