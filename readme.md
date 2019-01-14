# 功能

* cz -- 定制化 git 提交
* log -- 自动生成 CHANGELOG.MD 日志文件
* lint -- 校验 commit 信息

## cz 模块使用方法

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

### 3. 在 package.json 中创建以下 script 命令

```json
{
  "cz": "git add . && git cz"
}
```

按照提示正确输出 commit 信息内容。

## log 模块使用方法

### 1. 安装 conventional-changelog-cli 依赖包

```js
cnpm i conventional-changelog-cli --save-dev
```

## 2. 创建以下命令

```json
{
  ...
  "script": {
    "log": "conventional-changelog --config node_modules/jimi-web-changelog/lib/log -i CHANGELOG.md -s -r 0",
  }
}
> 结尾数字若为 1 ，生成当前版本的变化情况，若为0， 生成所有的日志文件。
```

## lint 模块校验使用方法

开发中...

## 版本管理使用方法

### 1. 安装 standard-version 依赖包

```js
cnpm i standard-version --save-dev
```

### 2. 在 package.json 里配置脚本

```json
{
  ...
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

> 每次提交会自动更新 changelog 文件

## 小结
