import { App } from 'vue'

import Button from '@v-ui/button'
import Icon from '@v-ui/Icon'
import ButtonGroup from '@v-ui/button-group'
import Col from '@v-ui/col'
import Row from '@v-ui/row'

const components = [
  Icon,
  Button,
  ButtonGroup,
  Col,
  Row

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
