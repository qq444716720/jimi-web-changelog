# 功能

1. cz -- 定制化 git 提交
2. log -- 自动生成 CHANGELOG.MD 日志文件
3. lint -- 校验 commit 信息

## 一、cz 模块

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

## 二、log 模块

### 1. 安装 conventional-changelog-cli 依赖包

```js
cnpm i conventional-changelog-cli --save-dev
```

### 2. 创建以下命令

```json
{
  ...
  "script": {
    "log": "conventional-changelog --config node_modules/jimi-web-changelog/lib/log -i CHANGELOG.md -s -r 0",
  }
}
> 结尾数字若为 1 ，生成当前版本的变化情况，若为 0， 生成所有的日志文件。
```

## 三、lint 模块

### 1. 安装 husky commitlint 依赖

```shall
cnpm i husky commitlint --save-dev
```

### 2. 在 package.json 中引入以下配置。

```json
{
  ...
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  },
}
```

### 3. 在项目根路径下创建 .commitlint.js 或者 commitlint.config.js

配置参考：

```js
module.exports = {
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 100],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [2, 'always',
      [
        '新功能',
        '修复',
        ...
      ]
    ],
    'scope-enum': [2, 'always',
      [
        'components/Button',
        '组件/按钮',
      ]
    ]
  }
}
```

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

## Q&A

### No files added to staging! Did you forget to run git add？

应该文件内容没有更新，重复提交导致的。试着更新项目中的某个内容试试。

### 提交后，跑 log 模块，CHANGELOG.MD 内容没有更新？

只有打标签的时候才会更新最新的日志信息。可以尝试打个版本标签。

### mac 无法运行 git cz，报错？

可以试试 xcode-select --install。
