
'format cjs';

const _keys = require('babel-runtime/core-js/object/keys');

const _keys2 = _interopRequireDefault(_keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const wrap = require('word-wrap');
const longest = require('longest');
const rightPad = require('right-pad');

const filter = function filter(array) {
  return array.filter((x) => {
    return x;
  });
};

module.exports = function (options) {
  const types = options.types;

  const length = longest((0, _keys2.default)(types)).length * 2 + 1;

  const choices = (0, _keys2.default)(types).map((key) => {
    return {
      name: `${rightPad(`${key}:`, length / 2, '  ')} ${types[key].description}`,
      value: key
    };
  });

  return {
    prompter: function prompter(cz, commit) {
      console.log('\n标题会在100个字符后进行裁剪。 主体内容每行会在100个字符后自动换行，手动换行请直接输入"\\n"。\n');

      cz.prompt([{
        type: 'list',
        name: 'type',
        message: '选择你提交的信息类型:',
        choices
      }, {
        type: 'input',
        name: 'scope',
        message: '本次提交的改变所影响的范围？ (按 enter 键跳过)\n'
      }, {
        type: 'input',
        name: 'subject',
        message: '写一个简短的变化描述，尽量包含主谓宾结构，杜绝简单的单词:\n'
      }, {
        type: 'input',
        name: 'body',
        message: '提供更详细的变更描述: (按 enter 跳过)\n'
      }, {
        type: 'confirm',
        name: 'isBreaking',
        message: '是否存在不兼容变更?',
        default: false
      }, {
        type: 'input',
        name: 'breaking',
        message: '列出所有的不兼容变更:\n',
        when: function when(answers) {
          return answers.isBreaking;
        }
      }, {
        type: 'confirm',
        name: 'isIssueAffected',
        message: '此次变更是否影响某些打开的 issue ?',
        default: false
      }, {
        type: 'input',
        name: 'issues',
        message: '列出此次改动引用的所有 issues （如："fix #123", "Closes #123, #124"）:\n',
        when: function when(answers) {
          return answers.isIssueAffected;
        }
      }]).then((answers) => {
        const maxLineWidth = 100;

        const wrapOptions = {
          trim: true,
          newline: '\n',
          indent: '',
          width: maxLineWidth
        };

        // parentheses are only needed when a scope is present
        let scope = answers.scope.trim();
        scope = scope ? `(${answers.scope.trim()})` : '';

        // Hard limit this line
        const head = (`${answers.type + scope}: ${answers.subject.trim()}`).slice(0, maxLineWidth);

        // Wrap these lines at 100 characters
        const body = wrap(answers.body, wrapOptions);

        // Apply breaking change prefix, removing it if already present
        let breaking = answers.breaking ? answers.breaking.trim() : '';
        breaking = breaking ? `\u4E0D\u517C\u5BB9\u53D8\u66F4: ${breaking.replace(/^不兼容变更: /, '')}` : '';
        breaking = wrap(breaking, wrapOptions);

        const issues = answers.issues ? wrap(answers.issues, wrapOptions) : '';

        const footer = filter([breaking, issues]).join('\n\n');

        commit(`${head}\n\n${body}\n\n${footer}`);
      });
    }
  };
};
