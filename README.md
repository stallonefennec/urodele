# 欢迎使用Urodele

Urodele是什么？

它是一个基于Github Pages纯静态博客生成系统，允许创建者随意创建、分享和编辑博客文章，而不需要担心服务器或者其他问题，只需要一个fork即可使用！

不需要担心图片问题，它会自动处理图片，无需第三方图床服务！

你可以以富文本方式编辑你的文章，比Markdown功能更强大

```javascript
// also support code block
const code = "javascript";
```

你可以直接在[这里在线试用](https://glink25.github.io/edit/?new)Urodele编辑器！

欢迎使用Urodele来创建你的第一个博客！

[>在博客站点里查看](https://glink25.github.io/post/Welcome-to-Urodele/)

[>使用Urodele创建的博客站点](https://glink25.github.io)

# 如何使用

## 1. Fork 仓库

将Urodele仓库fork到自己的Github，并重新命名为YOUR_NAME.github.io，其中YOUR_NAME为你的Github登录名（而非用户名）

> Github会将仓库名称作为Github Pages的子域名，例如将Urodele直接fork到自己的仓库后，启用Github Pages部署之后，可访问的域名为 YOUR_NAME.github.io/urodele ，目前urodele尚不支持子域名部署，因此在fork时需要将urodele仓库重新命名为YOUR_NAME.github.io，这种情况下Github Pages会将构建产物部署在域名根目录。

## 2. 启用Github Actions

在fork后的仓库页面，点击Actions tab，此时Github Actions为默认关闭状态，点击启用

## 3. 修改 urodele.config.ts 配置
在fork之后的仓库根目录，找到urodele.config.ts文件，并将其中的内容更换为自己的仓库信息：

```typescript
// urodele.config.ts
export const config = {
  github: {
    login: "glink25", // Github的登录名（而非用户名）
    repo: "test-for-anything", // 仓库名称 YOUR_NAME.github.io
    // 默认情况下，urodele仅支持使用github token登录，你需要在登录界面
    logInUrl: "", // 启用Github OAuth登录，这里填入Github OAuth的登录地址
    logInAuthUrl: "", // 启用Github OAuth登录，，这里填入Github OAuth获取token的地址
  },
  head: {
    title: "Urodele", // 页面title
  },
  footer: { // 页脚设置
    copyright: "© Glink", // 页脚版权文本
    copyrightUrl: "https://github.com/glink25", // 页脚版权文本跳转链接
  },
  giscus: false as object | false,
} as const;
```

修改完成后提交修改，此时如果已启用 Github Actions ，则会触发第一次构建。

## 3. 启用Github Pages

在fork后的仓库页面，点击Settings - Pages，选择Build and deployment source为 deploy from branch，此时如果已经触发过Github Actions构建，则会多出一个gh-pages分支，选择使用该分支的 /(root) 目录部署，并保存设置。

## 4. 自定义

在完成上述配置后稍等片刻，Github Pages部署好后，属于你的Urodele博客就已经部署完成了。现在你可以使用默认的博客主题和编辑器，开始编写自己的博客了，你也可以通过系列文章（TODO）了解Urodele默认主题和编辑器的使用方法。

如果你需要自定义自己的博客，也可以通过学习Astro.js，来随心所欲地修改自己的博客行为，例如修改样式，增加更多的交互功能等；如果你想要详细了解Urodele的技术方案，以便更好地自定义自己的主题，可以通过系列文章（TODO）来了解Urodele的内部实现，相信我，这真的十分简单！


# Welcome to Urodele

what is urodele? 

It is a fully-static Blog system based on Github Pages, you can create, share, and edit any post you wrote anywhere, without worrying about server or any other problems, just fork it on your Github, and it just works!

No worrying about images, it handles your images automatically, NO THIRD-PARTY IMAGE HOSTING NEEDED!

You can type any rich-text you want, more powerful than markdown!

```javascript
// also support code block
const code = "javascript";
```

Hurry up and join Urodele!

[>See more in blog](https://glink25.github.io/post/Welcome-to-Urodele/)

[>Blog based on Urodele](https://glink25.github.io)