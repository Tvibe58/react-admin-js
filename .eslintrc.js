module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb'
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }], // 限制可能包含JSX的文件扩展名
    'linebreak-style': ['error', 'unix'], // 强制使用Linux的LF换行符
    'comma-dangle': [ // 末尾逗号
      'error', {
        arrays: 'never',
        objects: 'never',
        imports: 'never',
        exports: 'never',
        functions: 'never'
      }
    ],
    'no-param-reassign': [
      'error', {
        props: false
      }
    ],
    'react/prop-types': 'error', // 防止React组件定义中缺少道具验证
    'jsx-a11y/click-events-have-key-events': 'off', // 关闭强制一个可单击的非交互元素至少有一个键盘事件监听器。
    'jsx-a11y/no-static-element-interactions': 'off', // 关闭强制要求有交互操作的静态标签设置role属性
    'jsx-a11y/no-noninteractive-element-interactions': 'off', // 关闭强制要求非交互语义标签(main,hX,ul,ol,liarea)不包含交互事件(onClick等)
    'react/ptop-types': 0
  }
};
