# Xue Yuquan — Personal Academic Homepage

个人学术主页源码：[xxreinsno.github.io](https://xxreinsno.github.io/)。

网站采用纯静态 HTML、CSS 和少量原生 JavaScript，不需要安装依赖或执行构建命令。主页内容直接维护在 `index.html`，项目列表维护在 `projects.html`。

## 文件结构

```text
.
├── index.html                         # 主页：简介、论文、奖项
├── projects.html                      # Projects 展示页
├── static/
│   ├── assets/img/                    # 背景、头像和项目封面
│   ├── css/main.css                   # 全站样式
│   └── js/scripts.js                  # 移动端导航
└── README.md
```

## 本地预览

在仓库根目录运行：

```bash
python -m http.server 8000
```

然后访问：

- 主页：`http://localhost:8000/`
- Projects：`http://localhost:8000/projects.html`

不要直接双击 HTML 文件预览，否则部分浏览器行为可能和 GitHub Pages 不一致。

## 修改主页内容

主页内容都在 `index.html` 中。建议通过搜索下面的 `id` 或类名定位，不依赖容易变化的行号。

### 修改姓名、简介和联系方式

- 页面标题和搜索描述：修改 `<title>`、`meta name="description"`。
- 首页姓名：搜索 `id="hero-title"`。
- 首页简介：搜索 `class="hero-lead"`。
- Email、GitHub、LinkedIn、arXiv：搜索 `class="social-links"`。
- 页脚年份：搜索 `class="site-footer"`。

修改链接时同时更新 `href`，例如：

```html
<a href="mailto:name@example.com">name@example.com</a>
```

### 修改 Profile

搜索 `id="profile"`。Profile 卡片包含三个固定区块：

- `Education`
- `Research Interests`
- `Contact`

在对应的 `<ul class="plain-list">` 中增加或删除 `<li>` 即可：

```html
<li><strong>2026—Present:</strong> Position, Institution</li>
```

### 添加论文

搜索 `class="publication-list"`，复制一个完整的 `publication-item`，然后修改年份、标题、作者和链接：

```html
<article class="publication-item">
    <p class="publication-meta">Preprint · 2026</p>
    <h3>Paper Title</h3>
    <p class="publication-authors">
        <strong>Yuquan Xue</strong>, Coauthor One, Coauthor Two
    </p>
    <a class="text-link" href="https://arxiv.org/abs/xxxx.xxxxx">View on arXiv</a>
</article>
```

没有公开链接时，可以暂时删除最后的 `<a>`。论文按从新到旧的顺序排列。

### 添加奖项

搜索 `class="awards-list"`。

向已有年份添加奖项时，只需增加一个 `<li>`：

```html
<li>Award Name, Institution, 2026</li>
```

添加新年份时，复制整个 `award-year`：

```html
<section class="award-year" aria-labelledby="awards-2026">
    <h3 id="awards-2026">2026</h3>
    <ul>
        <li>Award Name, Institution, 2026</li>
    </ul>
</section>
```

确保 `aria-labelledby` 和 `<h3 id>` 使用相同且不重复的值。

## 添加 Project

项目列表位于 `projects.html`。搜索 `class="projects-list"`，复制一个完整的 `project-card` 并修改：

- 项目封面和图片说明
- 分类与年份
- 项目名称和副标题
- 简介与标签
- `View project` 的目标地址

简化模板：

```html
<article class="project-card">
    <a class="project-media" href="https://project.example.com/">
        <img src="static/assets/img/project-name.webp"
             width="1200" height="410"
             alt="Short description of the project cover">
    </a>
    <div class="project-content">
        <div class="project-meta">
            <span>Robot Learning</span>
            <span>2026</span>
        </div>
        <h2>Project Name</h2>
        <p class="project-subtitle">One-line project subtitle</p>
        <p>Short project description.</p>
        <ul class="project-tags">
            <li>Topic One</li>
            <li>Topic Two</li>
        </ul>
        <a class="project-link" href="https://project.example.com/">View project</a>
    </div>
</article>
```

项目封面放到 `static/assets/img/`，建议使用 WebP：

- 推荐宽度：1200 px 左右
- 推荐体积：150 KB 以下
- `width` 和 `height` 应填写图片的真实尺寸，避免页面加载时跳动
- 不要直接放入数 MB 的 PNG、PDF 截图或 GIF

## 替换首页图片

- 校园背景：`static/assets/img/background.webp`
- 头像：`static/assets/img/profile.webp`

头像建议使用 1:1 正方形图片，网页会自动裁剪为圆形。替换图片时保持文件名不变最方便；如果修改文件名，需要同步修改 `index.html` 中的路径。

原始 PNG 可以作为备份，但页面应优先引用压缩后的 WebP。

## 修改颜色和排版

全站样式位于 `static/css/main.css`。

- 全局颜色：文件开头的 `:root` 变量
- 顶部导航：`.site-header`、`.nav-links`
- 首页 Hero：`.hero`、`.hero-layout`
- 通用卡片：`.content-card`
- 论文卡片：`.publication-item`
- 项目卡片：`.project-card`
- 移动端布局：文件末尾的 `@media` 规则

优先修改已有变量和类，避免在 HTML 中添加内联样式。

## 发布到 GitHub Pages

确认本地预览正常后执行：

```bash
git status
git add index.html projects.html static README.md
git commit -m "update homepage"
git push origin main
```

GitHub Pages 会直接发布 `main` 分支。通常等待几十秒到几分钟后即可看到更新。

发布前建议检查：

- 桌面端和手机端没有横向滚动
- 所有外部链接可以打开
- 图片路径和大小写完全正确
- HTML 中没有重复的 `id`
- 没有重新加入 Google Fonts、MathJax、Bootstrap 等不必要的阻塞资源

## License

See [LICENSE](LICENSE).
