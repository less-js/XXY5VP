import { DefaultTheme } from 'vitepress/dist/node'
import { vitePress } from './sidebar/vitePress'
import { awesome } from './sidebar/awesome'
import { tricks } from './sidebar/tricks'
import { nuxt3 } from './sidebar/nuxt3'

export const sidebar: DefaultTheme.Sidebar | undefined = {
  ...vitePress,
  ...awesome,
  ...tricks,
  ...nuxt3,
}
