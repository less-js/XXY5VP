import { DefaultTheme } from 'vitepress/dist/node'
import { guideVitePress } from './sidebar/guideVitePress'
import { awesome } from './sidebar/awesome'
import { tricks } from './sidebar/tricks'

export const sidebar: DefaultTheme.Sidebar | undefined = {
  ...guideVitePress,
  ...awesome,
  ...tricks,
}
