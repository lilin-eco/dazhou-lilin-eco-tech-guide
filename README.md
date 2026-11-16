# 装饰工程项目管理系统使用指南

达州礼林生态科技有限责任公司项目的使用指南网站，采用 Nextra Docs Theme、Next.js App Router 和 MDX，静态导出并生成 Pagefind 中文全文索引。

## 本地运行

需要 Node.js 22 或以上。

```sh
npm ci
npm run dev
```

## 构建与预览

```sh
npm run build
npm run preview
```

静态文件输出至 `out/`，其中 `_pagefind/` 为全文搜索索引。使用支持目录 `index.html` 的静态托管服务。

## 内容维护

- 在 `content/*.mdx` 编辑指南，`content/_meta.js` 维护顺序与标题。
- 正式项目资料以钉钉知识库为准；指南更新先核对线上原文及实际部署版本。
- 记录适用范围，分别标明已有实现、限定验证、原型和未交付内容。
- 示例只使用虚拟资料，不提交真实业务数据、账号凭据或带签名的附件地址。
- 技术方案、开发及资料维护由曾元负责，后续需求和测试由罗娟核对，后续业务与验收由廖先礼核对；执行结果按实际登记。

## 部署

本仓库保持私有。Sites 以 `.openai/hosting.json` 关联站点并托管静态构建，默认仅所有者可访问。GitHub 是组织源码仓库；Sites 发布使用其关联源码仓库的同一提交和对应构建包。修改源码后须重新构建和发布，仅推送 GitHub 不会自动更新站点。

GitHub Actions 执行依赖安装、构建和产物归档，供后续持续发布使用。生产访问范围及共享另按项目安排设置。

## 官方技术文档

- [Nextra 文档主题](https://nextra.site/docs/docs-theme/start)
- [Nextra 静态导出](https://nextra.site/docs/guide/static-exports)

## 依赖兼容

Nextra Docs 4.6.1 的布局参数校验与当前 Zod 不兼容，按上游问题 [#4989](https://github.com/shuding/nextra/issues/4989) 将 `children` 校验设为可选。补丁保存在 `patches/`，由 `npm ci` 的 `postinstall` 应用；升级 Nextra 时需检查上游是否已发布修复。

当前依赖审计仍有构建工具及数学、图示渲染链的低、中等级告警，未启用来自访问者的 MDX 编译、公式或图示输入。生产托管仅包含静态产物，无 Node.js 运行服务。依赖升级后需重新核对审计与构建结果。

© 2026 达州礼林生态科技有限责任公司。指南内容及项目专有代码保留权利；第三方依赖遵循各自许可证。
