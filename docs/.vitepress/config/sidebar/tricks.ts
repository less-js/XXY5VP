import { DefaultTheme } from 'vitepress/dist/node'

export const tricks: DefaultTheme.Sidebar | undefined = {
  '/tricks': [
    // NodeJS

    // JavaScript 常用函数
    {
      text: 'JavaScript Functions',
      collapsible: true,
      items: [
        {
          text: '列表转树结构',
          link: '/tricks/js-array-to-tree',
        },
        {
          text: '树结构转列表',
          link: '/tricks/js-array-tree-to-array',
        },
        {
          text: '遍历树结构',
          link: '/tricks/js-array-foreach-tree',
        },
        {
          text: '筛选树结构',
          link: '/tricks/js-array-filter-tree',
        },
        {
          text: '查询树结构',
          link: '/tricks/js-array-find-tree',
        },
        {
          text: '数组排序',
          link: '/tricks/js-array-order-by',
        },
        {
          text: '对象深拷贝',
          link: '/tricks/js-object-deep-copy',
        },
      ],
    },
    // CSS - 技巧
    {
      text: 'CSS Tricks',
      collapsible: true,
      items: [
        {
          text: 'Flex 文本省略号',
          link: '/tricks/css-flex-text-ellipsis',
        },
        {
          text: 'Flex 底部固定',
          link: '/tricks/css-flex-footer-fixed',
        },
        {
          text: '修改 placeholder 样式',
          link: '/tricks/css-input-placeholder',
        },
        {
          text: 'CSS 画三角形',
          link: '/tricks/css-triangle',
        },
        {
          text: 'CSS 画三角箭头',
          link: '/tricks/css-arrow',
        },
        {
          text: '打字效果',
          link: '/tricks/css-typing',
        },
        {
          text: '手风琴效果',
          link: '/tricks/css-accordion',
        },
        {
          text: '首字母大写',
          link: '/tricks/css-first-letter',
        },
        {
          text: 'Tip气泡效果',
          link: '/tricks/css-tooltip',
        },
        {
          text: '1px边框',
          link: '/tricks/css-one-pixel-line',
        },
      ],
    },
    // Git
    {
      text: 'Mac',
      collapsible: true,
      items: [
        {
          text: 'Git常用命令',
          link: '/tricks/git-common-command.md',
        },
      ],
    },
    // Mac
    {
      text: 'Mac',
      collapsible: true,
      items: [
        {
          text: 'Chrome网页截图',
          link: '/tricks/mac-chrome-capture.md',
        },
        {
          text: '启动项',
          link: '/tricks/mac-boot-item.md',
        },
      ],
    },
  ],
}
