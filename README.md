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

- [`.env.example`](/C:/Users/zcz20/Documents/chengzegithub/chengzez.github.io/.env.example) 只放占位值
- 真正的 `.env` 已经被 [`.gitignore`](/C:/Users/zcz20/Documents/chengzegithub/chengzez.github.io/.gitignore) 忽略，不会被提交
- `VITE_RECAPTCHA_SITE_KEY` 是公开的前端 Site Key
- `reCAPTCHA Secret Key` 不应该放进 `.env`，而是要填进 Static Forms 后台

## GitHub Pages 自动部署

仓库已经包含 GitHub Actions 工作流：

- [deploy.yml](/C:/Users/zcz20/Documents/chengzegithub/chengzez.github.io/.github/workflows/deploy.yml)

首次启用时，请在 GitHub 仓库中确认：

1. `Settings > Pages`
2. `Source` 选择 `GitHub Actions`
3. 在 `Settings > Secrets and variables > Actions > Secrets` 中新增 `VITE_STATICFORMS_API_KEY`
4. 在 `Settings > Secrets and variables > Actions > Variables` 中新增 `VITE_RECAPTCHA_SITE_KEY`

现在工作流会在构建前检查这两个值；如果漏配，Action 会直接失败并给出明确报错，而不是部署一个无法发送表单的站点。

## Static Forms 与 reCAPTCHA 完整配置

GitHub Actions 只负责把站点构建并部署到 GitHub Pages。真正的邮件转发发生在用户提交表单时，由浏览器把表单发到 Static Forms，再由 Static Forms 转发到你的邮箱。

### 1. Static Forms

1. 注册并登录 Static Forms，确认接收邮件的邮箱已经验证完成
2. 复制你的 API Key，填到 GitHub Actions Secret `VITE_STATICFORMS_API_KEY`
3. 打开 `Settings -> CAPTCHA Settings`
4. 选择 `reCAPTCHA v2 Checkbox`
5. 把 Google 提供的 `reCAPTCHA Secret Key` 填进去并保存

### 2. Google reCAPTCHA

1. 在 Google reCAPTCHA Admin Console 新建一个 `reCAPTCHA v2` 的 `I'm not a robot` Checkbox
2. 域名至少加入：
   - `chengzez.github.io`
   - `staticforms.dev`
   - `localhost`
3. 保存后拿到 `Site Key` 和 `Secret Key`
4. 把 `Site Key` 填到 GitHub Actions Variable `VITE_RECAPTCHA_SITE_KEY`
5. 把 `Secret Key` 填到 Static Forms 的 CAPTCHA Settings，不要放进前端代码
### 3. 部署和测试

1. 推送到 `main` 或 `master`
2. 等待 GitHub Actions 构建完成
3. 打开 `https://chengzez.github.io`
4. 提交一次联系表单，确认页面提示发送成功
5. 如果没有收到邮件，先检查垃圾邮箱，并把 `noreply@staticforms.dev` 加入联系人

## 当前表单行为

当前联系表单已经接入：

- Static Forms 邮件转发
- Google reCAPTCHA 前端验证
- GitHub Actions 构建期注入 API Key 和 Site Key

如果配置缺失，页面会直接提示缺少哪一层配置；如果 Static Forms 返回常见错误，例如 API Key 无效、邮箱未验证或 reCAPTCHA 配置不完整，前端也会显示更明确的错误提示。
