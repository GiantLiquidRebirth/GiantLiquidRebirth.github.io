# 🔧 网站内容编辑指南

## 📍 个人基本信息

在 `index.html` 中找到并修改以下内容：

### 1. 姓名和标题
```html
<h1 class="name">李月</h1>                    <!-- 修改姓名 -->
<p class="title">计算机科学研究者</p>           <!-- 修改职业 -->
<p class="affiliation">博士研究生 @ 北京大学</p>  <!-- 修改单位 -->
```

### 2. 联系方式
```html
<a href="mailto:liyue@pku.edu.cn">liyue@pku.edu.cn</a>  <!-- 修改邮箱 -->
<span>北京，中国</span>                        <!-- 修改地址 -->
<span>+86 138-0000-0000</span>               <!-- 修改电话 -->
```

### 3. 社交媒体链接
```html
<a href="https://github.com/GiantLiquidRebirth" class="social-link" title="GitHub">
<a href="https://scholar.google.com" class="social-link" title="Google Scholar">
<a href="https://orcid.org" class="social-link" title="ORCID">
<a href="https://linkedin.com" class="social-link" title="LinkedIn">
<a href="https://twitter.com" class="social-link" title="Twitter">
```

## 📝 个人介绍

找到 `bio-section` 部分：

```html
<p class="bio-intro">
    我是一名专注于<strong>人工智能</strong>和<strong>机器学习</strong>的博士研究生...
    <!-- 在这里修改您的个人介绍 -->
</p>

<p class="bio-description">
    我的研究目标是开发更加智能、高效和可解释的AI系统...
    <!-- 在这里修改您的研究描述 -->
</p>
```

### 研究兴趣
```html
<div class="interest-item">
    <i class="fas fa-brain"></i>
    <span>深度学习理论</span>    <!-- 修改研究方向 -->
</div>
<!-- 可以添加更多研究兴趣 -->
```

## 📰 最新动态

在 `news-section` 中添加或修改新闻：

```html
<div class="news-item">
    <span class="news-date">2025-08</span>    <!-- 修改日期 -->
    <div class="news-content">
        <div class="news-icon">🎉</div>       <!-- 修改图标 -->
        <div class="news-text">
            <p>您的最新动态内容...</p>         <!-- 修改内容 -->
        </div>
    </div>
</div>
```

## 📚 发表论文

找到 `publications-list` 部分：

```html
<div class="publication-item">
    <div class="pub-content">
        <h4 class="pub-title">论文标题</h4>                    <!-- 修改标题 -->
        <p class="pub-authors"><strong>您的姓名</strong>, 其他作者</p>  <!-- 修改作者 -->
        <p class="pub-venue">
            <strong>会议/期刊名称</strong>, 2025              <!-- 修改发表信息 -->
            <span class="venue-rank">CCF A类</span>         <!-- 修改级别 -->
        </p>
        <p class="pub-abstract">论文摘要...</p>              <!-- 修改摘要 -->
        <div class="pub-links">
            <a href="#" class="pub-link">PDF</a>           <!-- 修改链接 -->
            <a href="#" class="pub-link">Code</a>
        </div>
    </div>
</div>
```

## 🚀 项目经历

在 `projects-grid` 中修改项目：

```html
<div class="project-card">
    <div class="project-header">
        <div class="project-icon">
            <i class="fas fa-mobile-alt"></i>               <!-- 修改图标 -->
        </div>
        <div class="project-meta">
            <h4 class="project-title">项目名称</h4>          <!-- 修改项目名 -->
            <p class="project-period">2024.03 - 至今</p>    <!-- 修改时间 -->
            <p class="project-role">项目负责人</p>           <!-- 修改角色 -->
        </div>
    </div>
    <p class="project-description">项目描述...</p>          <!-- 修改描述 -->
</div>
```

## 🏆 荣誉奖项

在 `honors-timeline` 中修改奖项：

```html
<div class="honor-item">
    <div class="honor-year">2025</div>                      <!-- 修改年份 -->
    <div class="honor-content">
        <div class="honor-icon">
            <i class="fas fa-medal"></i>                    <!-- 修改图标 -->
        </div>
        <div class="honor-info">
            <h4 class="honor-title">奖项名称</h4>            <!-- 修改奖项 -->
            <p class="honor-organization">颁发机构</p>       <!-- 修改机构 -->
            <p class="honor-description">获奖描述...</p>     <!-- 修改描述 -->
        </div>
    </div>
</div>
```

## 🎓 教育背景

在 `education-timeline` 中修改教育经历：

```html
<div class="education-item current">
    <div class="edu-period">2022 - 至今</div>               <!-- 修改时间 -->
    <div class="edu-content">
        <div class="edu-header">
            <div class="edu-info">
                <h4 class="edu-degree">计算机科学与技术 博士</h4>  <!-- 修改学位 -->
                <p class="edu-school">北京大学 信息科学技术学院</p>  <!-- 修改学校 -->
                <p class="edu-location">北京，中国</p>           <!-- 修改地点 -->
            </div>
        </div>
        <div class="edu-details">
            <p class="edu-supervisor"><strong>导师：</strong>张教授</p>  <!-- 修改导师 -->
            <p class="edu-research"><strong>研究方向：</strong>深度学习理论</p>  <!-- 修改研究方向 -->
            <p class="edu-gpa"><strong>学术成绩：</strong>GPA 3.9/4.0</p>      <!-- 修改成绩 -->
        </div>
    </div>
</div>
```

## 💼 工作经历

在 `experience-timeline` 中修改工作经历：

```html
<div class="experience-item">
    <div class="exp-period">2024.06 - 2024.09</div>         <!-- 修改时间 -->
    <div class="exp-content">
        <div class="exp-header">
            <div class="exp-info">
                <h4 class="exp-title">职位名称</h4>           <!-- 修改职位 -->
                <p class="exp-company">公司名称 部门</p>       <!-- 修改公司 -->
                <p class="exp-location">城市，国家</p>         <!-- 修改地点 -->
            </div>
        </div>
        <div class="exp-details">
            <p class="exp-description">工作描述...</p>        <!-- 修改工作描述 -->
            <div class="exp-achievements">
                <h5>主要成就：</h5>
                <ul>
                    <li>成就1...</li>                        <!-- 修改成就 -->
                    <li>成就2...</li>
                </ul>
            </div>
        </div>
    </div>
</div>
```

## ⚙️ 其他设置

### 网站标题和描述
在HTML文件顶部修改：

```html
<title>您的姓名 - 个人学术主页</title>
<meta name="description" content="您的个人描述">
<meta name="keywords" content="您的关键词, 研究领域">
```

### 颜色主题
在 `assets/styles.css` 中可以修改颜色：

```css
--primary-color: #2563eb;    /* 主色调 */
--secondary-color: #1d4ed8;  /* 次要色调 */
```

---

## 📝 编辑流程

1. 用文本编辑器打开 `index.html`
2. 按照上面的指南找到对应位置
3. 修改相关内容
4. 保存文件
5. 推送到GitHub:
   ```bash
   git add .
   git commit -m "Update website content"
   git push
   ```
6. 等待2-5分钟网站更新

## 💡 小贴士

- 修改前建议备份文件
- 可以先在本地测试：打开 `index.html` 预览
- HTML标签要保持完整，不要删除 `<` `>` 等符号
- 中文内容直接替换即可
- 链接记得更新为真实地址