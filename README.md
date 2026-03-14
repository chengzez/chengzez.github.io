# 星跃 AI 编程营首页

使用 `Vite + React + TypeScript + CSS Modules` 搭建的中文 AI 编程营首页。

## 本地开发

```bash
npm install
npm run dev
```

## GitHub Pages 自动部署

仓库已经包含 GitHub Actions 工作流：

- [deploy.yml](/C:/Users/zcz20/Documents/chengzegithub/chengzez.github.io/.github/workflows/deploy.yml)

首次启用时，请在 GitHub 仓库设置中确认：

1. 进入 `Settings > Pages`
2. `Source` 选择 `GitHub Actions`
3. 推送到 `main` 分支后等待 Actions 完成部署

当前配置按用户名主页仓库方式处理，适合 `chengzez.github.io` 这类仓库名。
