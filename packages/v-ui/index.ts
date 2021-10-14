import { App } from 'vue'

import Button from '@v-ui/button'
import Icon from '@v-ui/Icon'

const components = [
  Button,
  Icon
]
const install = (app:App):void => {
  components.forEach(component => {
    app.component(component.name, component)
  })
}

// 在使用组件库的时候可以使用 createApp().use(xxx)
export default {
  install
}

// 组件库 看效果的网址
