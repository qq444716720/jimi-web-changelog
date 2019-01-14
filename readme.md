# 功能

* 定制化 git 提交（参考 Angular 规范）
* 规范版本
* 自动生成 CHANGELOG.MD 文件

## cz 使用方法

### 1. 安装 commitizen 依赖包

> cnpm i commitizen --save-dev

### 2. 在 package.json 中加入以下内容

```json
{
  ...
  "config": {
    "commitizen": {
      "path": "./node_modules/jimi-web-changelog/dist/cz"
    }
  },
}
```

### 3. 在 Package.json 中创建以下 script 命令

```json
{
  "cz": "git add . && git cz"
}
```

按照提示正确输出 commit 信息内容。

## 版本管理使用方法

### 1. 安装 standard-version 依赖包

```js
cnpm i standard-version --save-dev
```

```json
{
  "script": {
    "release-major": "standard-version -r major",
    "release-minor": "standard-version -r minor",
    "release-patch": "standard-version -r patch"
  }
}
major: 通常代表一个大的版本更新(1.0.0 -> 2.0.0)
minor: 代表一个小的版本更新(1.0.0 -> 1.1.0)
patch: 代表 bug 修复(1.0.0 -> 1.0.1)
```