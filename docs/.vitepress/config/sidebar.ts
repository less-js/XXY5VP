import { DefaultTheme } from 'vitepress/dist/node'
import { guideVitePress } from './sidebar/guideVitePress'
import { awesome } from './sidebar/awesome'
import { tricks } from './sidebar/tricks'
import { nuxt3 } from './sidebar/nuxt3'

export const sidebar: DefaultTheme.Sidebar | undefined = {
  ...guideVitePress,
  ...awesome,
  ...tricks,
  ...nuxt3,
}
