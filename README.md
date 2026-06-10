# ImgBed - 现代化个人图床

基于 **Vercel + GitHub 私有仓库** 的独立图床服务，采用 React + Tailwind CSS 构建现代化管理界面。

## ✨ 功能特点

- 🖼️ **随机图片 API** - 支持 `/api/random` 接口，每次返回随机图片
- 📂 **分类管理** - 支持横屏（wallpaper）和竖屏（cover）两种分类
- 📤 **批量上传** - 支持多文件选择和拖拽上传，自动压缩大图
- 🔒 **私有仓库** - 图片存储在 GitHub 私有仓库中，安全可控
- 🌐 **代理访问** - 通过 `/wallpaper/` 和 `/cover/` 代理访问图片
- 📊 **统计信息** - 提供 `/api/stats` 接口查看各类图片数量
- 📋 **图片列表** - 提供 `/api/list` 接口查看所有图片
- 📦 **JSON 格式** - 提供 `/api/json` 接口返回随机图片的 JSON 信息
- 🎨 **自动压缩** - 大图片自动压缩至 3MB 以内，确保上传成功
- 🚀 **现代化界面** - React + Tailwind CSS + 毛玻璃效果

## 📁 项目结构

```
imgbed/
├── api/                        # Vercel Serverless Functions
│   ├── img/
│   │   └── [filename].js      # 图片代理服务
│   ├── random.js              # 随机图片接口（全部分类）
│   ├── wallpaper.js           # 横屏图片接口
│   ├── cover.js               # 竖屏图片接口
│   ├── json.js                # JSON 格式接口
│   ├── list.js                # 图片列表接口
│   ├── stats.js               # 统计信息接口
│   └── upload.js              # 图片上传接口
├── src/                       # React 前端源码
│   ├── components/            # UI 组件
│   ├── lib/
│   │   └── api.js             # API 调用封装
│   ├── App.jsx                # 主应用
│   ├── main.jsx               # 入口文件
│   └── index.css              # 全局样式
├── public/
│   └── favicon.ico            # 网站图标
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## 📡 API 接口

| 接口 | 方法 | 说明 |
|------|------|------|
| `/api/random` | GET | 随机返回一张图片（全部分类） |
| `/api/wallpaper` | GET | 随机返回横屏图片 |
| `/api/cover` | GET | 随机返回竖屏图片 |
| `/api/json` | GET | 返回随机图片的 JSON 信息 |
| `/api/list` | GET | 返回所有图片列表 |
| `/api/stats` | GET | 返回统计信息 |
| `/api/upload` | POST | 上传图片（multipart/form-data） |
| `/wallpaper/:filename` | GET | 代理访问横屏图片 |
| `/cover/:filename` | GET | 代理访问竖屏图片 |

## 🔧 用户需要修改的内容

### 1. 修改 GitHub 配置（必改）

在以下文件中，将默认的 GitHub 用户名和仓库名改为你自己的：

| 文件 | 位置 | 修改内容 |
|------|------|----------|
| `api/random.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/wallpaper.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/cover.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/json.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/list.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/stats.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/upload.js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |
| `api/img/[filename].js` | 第 1-3 行 | `GITHUB_USER`、`GITHUB_REPO` |

**修改示例：**
```javascript
// 原代码
const GITHUB_USER = process.env.GITHUB_USER || 'chnbsdan'
const GITHUB_REPO = process.env.GITHUB_REPO || 'imgbed-storage'

// 改为你自己的
const GITHUB_USER = process.env.GITHUB_USER || '你的GitHub用户名'
const GITHUB_REPO = process.env.GITHUB_REPO || '你的图片仓库名'
```

### 2. 修改左上角 LOGO 链接（可选）

在 `src/App.jsx` 中找到 LOGO 链接部分：

```jsx
<a 
  href="https://github.com/chnbsdan/imgbed" 
  target="_blank" 
  rel="noopener noreferrer"
  ...
>
```

将 `href` 改为你的 GitHub 仓库地址。

### 3. 修改页面标题（可选）

在 `index.html` 中修改 `<title>` 标签：

```html
<title>你的图床名称</title>
```

### 4. 修改网站图标（可选）

替换 `public/favicon.ico` 文件为你自己的图标。

### 5. 修改 API 帮助页面的示例域名（可选）

在 `index.html` 中，将示例 URL 改为你的实际域名。

## 🔧 环境变量配置（Vercel 中必须设置）

在 Vercel 项目设置中添加以下环境变量：

| 变量名 | 说明 | 必填 |
|--------|------|------|
| `GITHUB_TOKEN` | GitHub Personal Access Token（需 `repo` 权限） | ✅ 是 |
| `GITHUB_USER` | GitHub 用户名 | 可选（默认 chnbsdan） |
| `GITHUB_REPO` | 存储图片的仓库名 | 可选（默认 imgbed-storage） |

### 获取 GitHub Token 步骤

1. 访问 GitHub → Settings → Developer settings → Personal access tokens
2. 点击 **Generate new token (classic)**
3. 勾选 `repo` 权限（完整控制私有仓库）
4. 生成并复制 Token（以 `ghp_` 开头）

## 📦 部署步骤

### 1. 创建 GitHub 存储仓库

创建一个新的私有仓库用于存储图片，例如 `imgbed-storage`，并创建两个文件夹：

```
imgbed-storage/
├── wallpaper/   # 横屏图片存放目录
└── cover/       # 竖屏图片存放目录
```

### 2. Fork 或克隆本项目

```bash
git clone https://github.com/chnbsdan/imgbed.git
cd imgbed
```

### 3. 安装依赖

```bash
npm install
```

### 4. 本地开发测试

```bash
npm run dev
```

### 5. 部署到 Vercel

**方法一：使用 Vercel CLI**

```bash
npm install -g vercel
vercel --prod
```

**方法二：通过 Vercel 网页**

1. 访问 [Vercel](https://vercel.com)
2. 点击 **Add New** → **Project**
3. 导入你的 GitHub 仓库
4. 在 **Environment Variables** 中添加 `GITHUB_TOKEN`
5. 点击 **Deploy**

### 6. 绑定自定义域名（可选）

1. 在 Vercel 项目设置中进入 **Domains**
2. 添加你的域名
3. 按提示配置 DNS 解析

## 🎨 界面效果

- 🖼️ **随机背景** - 每次刷新页面，背景随机变化
- 🔗 **左上角 LOGO** - 点击跳转 GitHub 仓库
- 📊 **统计卡片** - 实时显示各类图片数量
- 📤 **分类上传** - 支持横屏/竖屏选择
- 🖱️ **一键复制** - 点击复制图片链接
- 👁️ **图片预览** - 上传后可直接预览
- 🌫️ **毛玻璃效果** - 卡片区域采用毛玻璃设计

## ⚠️ 注意事项

1. **私有仓库** - 图片存储在私有仓库中，需要通过代理接口访问
2. **Token 安全** - 不要将 `GITHUB_TOKEN` 暴露在客户端代码中
3. **文件大小** - 单张图片限制 10MB，超过 3MB 会自动压缩
4. **支持格式** - JPG、PNG、WebP、GIF（PNG 大图会转为 JPG）
5. **API 限制** - GitHub API 限制 5000 次/小时（已认证）

## 📝 常见问题

### Q: 上传失败怎么办？

A: 检查 Vercel 环境变量 `GITHUB_TOKEN` 是否正确配置，Token 是否有 `repo` 权限。

### Q: 图片无法显示？

A: 检查 `api/img/[filename].js` 中的 `GITHUB_USER` 和 `GITHUB_REPO` 是否正确。

### Q: 如何修改卡片毛玻璃效果？

A: 在 `src/App.jsx` 中找到 `backdrop-blur-md bg-white/30`，调整数值即可。

### Q: 如何修改左上角 LOGO 大小？

A: 在 `src/App.jsx` 中修改 `w-10 h-10` 为其他值（如 `w-12 h-12`）。

## 🛠️ 技术栈

| 技术 | 说明 |
|------|------|
| 前端 | React 18 + Vite + Tailwind CSS |
| 图标 | Font Awesome 6 |
| 后端 | Vercel Serverless Functions |
| 存储 | GitHub 私有仓库 |
| API | GitHub REST API |

## 📄 许可证

MIT License

## 🔗 相关链接

- [GitHub 仓库](https://github.com/chnbsdan/imgbed)
- [Vercel 部署](https://vercel.com)
- [GitHub Token 申请](https://github.com/settings/tokens)

## 👤 作者

- GitHub: [chnbsdan](https://github.com/chnbsdan)
- 博客: [Aoso Blog](https://aoso.hangdn.com)

---

如果觉得这个项目有用，欢迎 Star ⭐
