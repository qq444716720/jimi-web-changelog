

module.exports = {
  headerPattern: /^(:[a-z_]*:)(?:[\(\（](.*)[\)\）])?(.*)/,
  headerCorrespondence: [
    'type',
    'scope',
    'subject'
  ],
  noteKeywords: ['BREAKING CHANGE', '不兼容变更'],
  revertPattern: /^revert:\s([\s\S]*?)\s*This reverts commit (\w*)\./,
  revertCorrespondence: ['header', 'hash']
};
