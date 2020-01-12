module.exports = {
  parserPreset: {
    parserOpts: {
      headerPattern: /^(:[a-z_]*:)(?:[\(\（](.*)[\)\）])?(.*)/,
      headerCorrespondence: [
        'type',
        'scope',
        'subject'
      ],
      referenceActions: [
        'close',
        'closes',
        'closed',
        'fix',
        'fixes',
        'fixed',
        'resolve',
        'resolves',
        'resolved'
      ],
      issuePrefixes: ['#'],
      noteKeywords: ['BREAKING CHANGE', '不兼容变更'],
      fieldPattern: /^-(.*?)-$/,
      revertPattern: /^Revert\s"([\s\S]*)"\s*This reverts commit (\w*)\./,
      revertCorrespondence: ['header', 'hash'],
      warn() { },
      mergePattern: null,
      mergeCorrespondence: null
    },
  },
  rules: {
    'body-leading-blank': [2, 'always'],
    'footer-leading-blank': [1, 'always'],
    'header-max-length': [2, 'always', 108],
    'subject-empty': [2, 'never'],
    'type-empty': [2, 'never'],
    'type-enum': [
      2,
      'always',
      [
        ':art:', // 🎨改进代码的结构/格式
        ':zap:', // ⚡️ 提高性能
        ':fire:', // 🔥 删除代码或文件
        ':bug:', // 🐛 修复错误
        ':ambulance:', // 🚑关键修补程序
        ':sparkles:', // ✨引入新功能
        ':pencil:', // 📝 编写文档
        ':rocket:', // 🚀 部署东西
        ':lipstick:', // 💄更新UI和样式文件
        ':tada:', // 🎉 初始提交
        ':white_check_mark:', // ✅ 更新测试
        ':lock:', // 🔒 解决安全问题
        ':apple:', // 🍎 在macOS上修复问题
        ':penguin:', // 🐧 在Linux上修复问题
        ':checkered_flag:', // 🏁 在Windows上修复问题
        ':robot:', // 🤖 在Android上修复问题
        ':green_apple:', // 🍏 在iOS上修复问题
        ':bookmark:', // 🔖 发布/版本标签
        ':rotating_light:', // 🚨 Removing linter warnings.
        ':construction:', // 🚧 工作正在进行中
        ':green_heart:', // 💚 修复CI构建
        ':arrow_down:', // ⬇️ 降级依赖
        ':arrow_up:', // ⬆️ 升级依赖关系
        ':pushpin:', // 📌 将依赖项固定到特定版本
        ':construction_worker:', // 👷添加CI构建系统
        ':chart_with_upwards_trend:', // 📈 添加分析或跟踪代码
        ':recycle:', // ♻️ 重构代码
        ':whale:', // 🐳 关于Docker的工作
        ':heavy_plus_sign:', // ➕ 添加依赖项
        ':heavy_minus_sign:', // ➖ 删除依赖项
        ':wrench:', // 🔧 更改配置文件
        ':globe_with_meridians:', // 🌐 国际化和本地化
        ':pencil2:', // ✏️ 修正错别字
        ':poop:', // 💩 编写需要改进的错误代码
        ':rewind:', // ⏪ 还原更改
        ':twisted_rightwards_arrows:', // 🔀 合并分支
        ':package:', // 📦 更新编译的文件或软件包
        ':alien:', // 👽 由于外部API的更改而更新了代码
        ':truck:', // 🚚 移动或重命名文件
        ':page_facing_up:', // 📄 添加或更新许可证
        ':boom:', // 💥 引入重大变化
        ':bento:', // 🍱 添加或更新资产
        ':ok_hand:', // 👌由于代码审查更改而更新代码
        ':wheelchair:', // ♿️ 改善可访问性
        ':bulb:', // 💡记录源代码
        ':beers:', // 🍻 Writing code drunkenly.
        ':speech_balloon:', // 💬 更新文本和文字
        ':card_file_box:', // 🗃 执行数据库相关的更改
        ':loud_sound:', // 🔊 添加日志
        ':mute:', // 🔇 删除日志
        ':busts_in_silhouette:', // 👥 添加贡献者
        ':children_crossing:', // 🚸 改善用户体验/可用性
        ':building_construction:', // 🏗 进行架构更改
        ':iphone:', // 📱 致力于响应式设计
        ':clown_face:', // 🤡 Mocking things
        ':egg:', // 🥚 Adding an easter egg
        ':see_no_evil:', // 🙈 添加或更新.gitignore文件
        ':camera_flash:', // 📸 添加或更新快照
        ':alembic:', // ⚗ 尝试新事物
        ':mag:', // 🔍 改善SEO
        ':wheel_of_dharma:', // ☸️ 关于Kubernetes的工作
        ':label:', // 🏷️ 添加或更新类型（Flow，TypeScript）
        ':seedling:', // 🌱 添加或更新种子文件
        ':triangular_flag_on_post:', // 🚩 Adding, updating, or removing feature flags
        ':goal_net:', // 🥅 捕捉错误
        ':dizzy:', // 💫 添加或更新动画和过渡
      ],
    ],
  },
};
