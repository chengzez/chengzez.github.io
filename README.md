# 星跃 AI 编程营首页

使用 `Vite + React + TypeScript + CSS Modules` 搭建的中文 AI 编程营官网，支持 GitHub Pages 自动部署。

## 本地开发

```bash
npm install
npm run dev
```

如果要本地测试联系表单：

```bash
cp .env.example .env
```

然后把 `.env` 里的以下变量替换成你自己的值：

- `VITE_STATICFORMS_API_KEY`
- `VITE_RECAPTCHA_SITE_KEY`

说明：

- `.env.example` 是提交到仓库里的示例文件，所以应该只放占位值
- 真正的 `.env` 已经被 [`.gitignore`](/C:/Users/zcz20/Documents/chengzegithub/chengzez.github.io/.gitignore) 忽略，不会被提交

## GitHub Pages 自动部署

仓库已经包含 GitHub Actions 工作流：

- [deploy.yml](/C:/Users/zcz20/Documents/chengzegithub/chengzez.github.io/.github/workflows/deploy.yml)

首次启用时，请在 GitHub 仓库中确认：

1. `Settings > Pages`
2. `Source` 选择 `GitHub Actions`
3. 在 `Settings > Secrets and variables > Actions` 中新增：
   `VITE_STATICFORMS_API_KEY`
4. 在 `Settings > Secrets and variables > Actions > Variables` 中新增：
   `VITE_RECAPTCHA_SITE_KEY`

推送到 `main` 或 `master` 后，GitHub 会自动构建并部署站点。

## 联系表单

当前联系表单接入了：

- Static Forms 邮件转发
- Google reCAPTCHA 前端验证

前端会把验证码 token 一起提交给 Static Forms，所以如果验证码未完成，表单不会发送。
