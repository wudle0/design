export default {
  extends: [
    'stylelint-config-standard',
    'stylelint-config-standard-scss',
    'stylelint-scss',
    'stylelint-config-recess-order',
  ],
  ignoreFiles: ['assets/scss/themes/_tokens.scss', 'assets/css/*.css'],
  rules: {
    // 'max-nesting-depth': 4, // 최대 nesting
    // 'selector-class-pattern': /^([a-z][a-z0-9]*)([-]|[--][a-z0-9]+)*$/, // class name 컨벤션 (현재 kebab-case or kebab--case)
    'selector-class-pattern': null, // class name 컨벤션 (현재 kebab-case or kebab--case)
    // 'keyframes-name-pattern': /^([a-z][a-z0-9]*)(-[a-z0-9]+)*$/, // keyframe name 컨벤션 (현재 kebab-case)
    'scss/dollar-variable-pattern':
      /^([a-z][a-zA-Z0-9]*|[a-z][a-z0-9]*(?:-[a-z0-9]+)*)$/, // scss 변수 컨벤션 (현재 camel-case)
    'scss/at-rule-conditional-no-parentheses': null, // 조건부 @ 규칙(if, elsif, while)(자동 수정 가능)에서 괄호를 허용
    'scss/at-extend-no-missing-placeholder': null, // 허용하지 않는 placeholder를 사용할 수 있도록 허용
    'scss/operator-no-newline-after': null, // 연산자 앞에 개행을 허용
    'at-rule-no-unknown': null, // scss를 사용하기 때문에 css영역에선 null로 처리
    'at-rule-empty-line-before': [
      null,
      {
        'first-nested': 'always',
      },
    ], // at-rule 앞에 빈 줄 X
    'no-descending-specificity': null, // 명시도 우선순위를 무시
    'declaration-empty-line-before': 'never', // 선언 앞에 빈 줄 X
    'declaration-property-value-no-unknown': null, // 선언된 속성값을 알 수 없을 때 경고
    'custom-property-empty-line-before': 'never', // 커스텀 프로퍼티 앞에 빈 줄 X
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'vertical', 'horizontal'],
      },
    ],
    'rule-empty-line-before': [
      'always', // 중첩시 개행
      {
        except: ['first-nested'],
        ignore: ['after-comment'],
      },
    ],
    'order/order': [
      [
        { type: 'at-rule', name: 'include' },
        'dollar-variables',
        'custom-properties',
        'declarations',
        'rules',
        { type: 'at-rule' },
      ],
    ],
  },
};
