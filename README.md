# 李月的个人学术网站

这是一个使用纯HTML、CSS和JavaScript构建的个人学术网站，托管在GitHub Pages上。

## 🌐 网站地址

https://giantliquidrebirth.github.io

## ✨ 功能特点

- **响应式设计**: 完美适配PC、平板和手机设备
- **现代UI**: 简洁专业的学术风格设计
- **完整的学术信息**: 包含论文、项目、教育背景、工作经历等
- **交互式体验**: 平滑滚动、动画效果、快捷键支持
- **SEO优化**: 搜索引擎友好的结构和元数据
- **性能优化**: 快速加载，图片懒加载
- **无框架依赖**: 纯原生代码，维护简单

## 📁 文件结构

```
homepage/
├── index.html          # 主页面文件
├── assets/            # 静态资源目录
│   ├── styles.css     # 样式文件
│   ├── script.js      # JavaScript文件
│   ├── profile.jpg    # 个人照片 (需要替换)
│   └── favicon.ico    # 网站图标 (可选)
├── README.md          # 说明文档
└── .gitignore         # Git忽略文件 (将自动创建)
```

## 🚀 快速开始

### 1. 个性化配置

编辑 `index.html` 文件，修改以下内容：

#### 基本信息
- 姓名、职业、联系方式
- 个人介绍和研究兴趣
- 社交媒体链接

#### 学术内容
- 发表论文列表
- 研究项目经历
- 教育背景
- 工作经历
- 荣誉奖项

#### 个人照片
- 将您的照片命名为 `profile.jpg` 放在 `assets/` 目录下
- 推荐尺寸: 400x400 像素
- 格式: JPG 或 PNG

### 2. 推送到GitHub

```bash
# 初始化Git仓库
git init
git branch -m main

# 添加远程仓库
git remote add origin https://github.com/GiantLiquidRebirth/giantliquidrebirth.github.io.git

# 提交所有文件
git add .
git commit -m "Initial website setup"

# 推送到GitHub
git push -u origin main
```

### 3. 启用GitHub Pages

1. 进入GitHub仓库页面
2. 点击 Settings 标签
3. 在左侧菜单中找到 "Pages"
4. 在 "Source" 中选择 "Deploy from a branch"
5. 选择 "main" 分支和 "/ (root)" 文件夹
6. 点击 "Save"

等待几分钟后，您的网站将在 `https://giantliquidrebirth.github.io` 上线！

## 🎨 自定义样式

### 颜色主题

在 `assets/styles.css` 中修改CSS变量：

```css
:root {
    --primary-color: #2563eb;    /* 主色调 */
    --secondary-color: #1d4ed8;  /* 次要色调 */
    --accent-color: #3b82f6;     /* 强调色 */
    --text-color: #333;          /* 主文本颜色 */
    --background-color: #fff;    /* 背景色 */
}
```

### 字体

更改Google Fonts导入：

```html
<link href="https://fonts.googleapis.com/css2?family=您选择的字体" rel="stylesheet">
```

然后在CSS中应用：

```css
body {
    font-family: '您的字体', sans-serif;
}
```

## 📱 响应式设计

网站已针对以下断点进行优化：

- **Desktop**: > 1024px
- **Tablet**: 768px - 1024px
- **Mobile**: < 768px

## ⚡ 性能优化

### 图片优化
- 使用WebP格式（带PNG/JPG后备）
- 实现了懒加载
- 压缩图片文件

### JavaScript优化
- 事件防抖和节流
- 延迟加载非关键功能
- 错误处理机制

### CSS优化
- 最小化重绘和回流
- 使用CSS变量
- 响应式图片

## 🔧 高级功能

### Google Analytics (可选)

在 `index.html` 的注释部分找到Google Analytics代码，取消注释并替换您的跟踪ID：

```javascript
gtag('config', 'YOUR-GA-MEASUREMENT-ID');
```

### 评论系统 (可选)

可以集成第三方评论系统如：
- Disqus
- Gitalk
- Valine

### 搜索功能

对于静态网站，可以使用：
- Algolia DocSearch
- 简单的客户端搜索

## 🛠️ 维护和更新

### 添加新论文

1. 在 `publications` 部分找到对应年份的 `year-group`
2. 复制现有的 `publication-item` 模板
3. 修改论文信息

### 更新个人信息

直接编辑 `index.html` 中的相关部分即可。

### 备份网站

定期将代码推送到GitHub即可实现备份。

## 📞 技术支持

如果您在使用过程中遇到问题：

1. 检查浏览器控制台是否有错误信息
2. 确保所有文件路径正确
3. 验证HTML语法是否正确
4. 检查图片文件是否存在

## 📄 许可证

本项目采用MIT许可证，您可以自由使用、修改和分发。

## 🙏 致谢

感谢以下开源项目：
- Font Awesome (图标)
- Google Fonts (字体)
- MathJax (数学公式渲染)

---

**最后更新**: 2025年8月11日

**作者**: Claude Code AI Assistant

如果这个网站模板对您有帮助，欢迎给个⭐️！