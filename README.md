[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)

## 特性

- ⚡️ [Vue 3](https://github.com/vuejs/vue-next), [Vite 2](https://github.com/vitejs/vite), [pnpm](https://pnpm.js.org/) - 快！
- 💪 [Typescript](https://www.typescriptlang.org/) - 当然！必不可少
- 🎉 [Element Plus 开箱即用](https://github.com/element-plus/element-plus) - 基于 Vue.js 3 的强大 UI 库
- 🔥 [Axios 配置和封装](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- 💡 [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- 📦 [组件自动按需加载](https://github.com/antfu/unplugin-vue-components) - 自动按需注册组件, 无需 import
- 📥 [API 自动按需加载](https://github.com/antfu/unplugin-auto-import) - 无需手动 import 进行引入
- 🍍 [Pinia 状态管理](https://pinia.esm.dev/) - 你将会喜欢上的 Vue Store
- 🎨 [Windi CSS](https://github.com/windicss/windicss) - 下一代实用的原子 css 框架
- 😃 [icones](https://github.com/antfu/unplugin-icons) - 强大的图标库，各种图标集为你所用
- 📑 [Markdown 支持](https://github.com/antfu/vite-plugin-md) - 随意的在页面中嵌入 Markdown
- 🔑 完整支持的代码风格规范和代码提交规范

## 已配置

### UI 框架

- [Windi CSS](https://github.com/windicss/windicss) (按需的 [TailwindCSS](https://tailwindcss.com/)) - 更轻，更快和和一系列额外的特性!
  - [Windi CSS Typography](https://windicss.org/plugins/official/typography.html)
- [Element Plus](https://github.com/element-plus/element-plus) - 基于 Vue.js 3 的强大 UI 库

### Icons

- [🔍Icônes](https://icones.netlify.app/) - 使用任意的图标集
  - [unplugin-icons](https://github.com/antfu/unplugin-icons) - 自动按需引入你所需要的图标！

### 插件

- [Vue Router 4](https://router.vuejs.org/zh/) - Vuejs 的官方路由
- [Pinia](https://pinia.esm.dev) - 新一代的 Vue Store 状态管理
- [Axios](https://github.com/axios/axios) - 基于 Promise 的 HTTP 请求库
- [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) - 自动按需加载组件
- [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) - 自动按需加载 API
- [vite-plugin-windicss](https://github.com/antfu/vite-plugin-windicss) - Windi CSS 的整合
- [VueUse](https://github.com/antfu/vueuse) - 实用的 Composition API 工具合集
- [vite-plugin-optimize-persist](https://github.com/antfu/vite-plugin-optimize-persist) - 允许你在 vite 中显式设置依赖项

### 编码风格

- [ESLint](https://eslint.org/) 配置为 vue3-recommended

### 开发工具

- [TypeScript](https://www.typescriptlang.org/)
- [VS Code 扩展](./.vscode/extensions.json)
  - [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) - Vue 3 IDE 支持
  - [Iconify IntelliSense](https://marketplace.visualstudio.com/items?itemName=antfu.iconify) - 图标内联显示和自动补全
  - [Windi CSS 智能感知](https://marketplace.visualstudio.com/items?itemName=voorjaar.windicss-intellisense) - Windi CSS 的 IDE 支持
  - [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) - 代码质量和规则检查
  - [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) - 专注于代码格式化、美化代码

## 现在可以试试!

### 克隆到本地

```bash
git clone https://github.com/kazimics/vitesaber.git my-vitesaber-app
cd my-vitesaber-app
pnpm i # 如果你没装过 pnpm, 可以先运行: npm install -g pnpm
```

## 使用

### 开发

只需要执行以下命令就可以在 http://localhost:4000 中看到

```bash
pnpm dev
```

### 构建

构建该应用只需要执行以下命令

```bash
pnpm build
```

然后你会看到用于发布的 `dist` 文件夹被生成。
