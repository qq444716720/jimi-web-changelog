# 功能

* 定制化 git 提交（参考 Angular 规范）
* 自动生成 CHANGELOG.MD 文件

## 使用方法

### 1. 安装依赖包

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