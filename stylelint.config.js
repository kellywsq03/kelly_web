export default {
  extends: ['stylelint-config-standard'],
  rules: {
    // Keep one blank line between adjacent CSS rules for easy scanning and editing.
    'alpha-value-notation': null,
    'at-rule-empty-line-before': null,
    'color-function-alias-notation': null,
    'color-function-notation': null,
    'declaration-block-no-redundant-longhand-properties': null,
    'keyframes-name-pattern': null,
    'media-feature-range-notation': null,
    'no-descending-specificity': null,
    'rule-empty-line-before': ['always', { except: ['first-nested'] }],
    'selector-class-pattern': null,
    'value-keyword-case': null,
  },
};
