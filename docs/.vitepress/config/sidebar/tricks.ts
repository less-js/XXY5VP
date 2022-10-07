import { DefaultTheme } from 'vitepress/dist/node'

export const tricks: DefaultTheme.Sidebar | undefined = {
  '/tricks': [
    // NodeJS
    // CSS - 技巧
    {
      text: 'CSS Tricks',
      collapsible: true,
      items: [
        {
          text: '2D 加载动画',
          link: '/tricks/css-2d-loading',
        },
        {
          text: '2D 环绕动画',
          link: '/tricks/css-2d-surround',
        },
        {
          text: '背景倾斜',
          link: '/tricks/css-background-tilt',
        },
        {
          text: '吸引力',
          link: '/tricks/css-appeal',
        },
        {
          text: '扎实的描绘',
          link: '/tricks/css-solid-drawing',
        },
        {
          text: '夸张手法',
          link: '/tricks/css-exaggeration',
        },
        {
          text: '时间节奏',
          link: '/tricks/css-timing',
        },
        {
          text: '次要动作',
          link: '/tricks/css-secondary-action',
        },
        {
          text: '弧线运动',
          link: '/tricks/css-arc',
        },
        {
          text: '缓入缓出',
          link: '/tricks/css-slow-in-and-slow-out',
        },
        {
          text: '跟随和重叠动作',
          link: '/tricks/css-follow-through-and-overlapping-action',
        },
        {
          text: '连续运动和姿态对应',
          link: '/tricks/css-straight-ahead-action-and-pose-to-pose',
        },
        {
          text: '演出布局',
          link: '/tricks/css-staging',
        },
        {
          text: '预备动作',
          link: '/tricks/css-anticipation',
        },
        {
          text: '挤压和拉伸',
          link: '/tricks/css-squash-and-stretch',
        },
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
    // 正则
    {
      text: '正则',
      collapsible: true,
      items: [
        {
          text: '常用正则',
          link: '/tricks/regexp-common.md',
        },
        {
          text: '常用操作符',
          link: '/tricks/regexp-operator.md',
        },
      ],
    },
    // Git
    {
      text: 'Git',
      collapsible: true,
      items: [
        {
          text: 'Git常用命令',
          link: '/tricks/git-common-command',
        },
        {
          text: 'Git commit 规范',
          link: '/tricks/git-commit-standard',
        },
        {
          text: 'Git版本管理',
          link: '/tricks/git-version-naming-convention',
        },
        {
          text: 'Git ignore',
          link: '/tricks/git-ignore',
        },
        {
          text: 'GitHub Actions自动部署',
          link: '/tricks/git-github-actions',
        },
      ],
    },
    // Mac
    {
      text: 'Mac',
      collapsible: true,
      items: [
        {
          text: 'Docker - MySQL',
          link: '/tricks/mac-docker-mysql.md',
        },
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
