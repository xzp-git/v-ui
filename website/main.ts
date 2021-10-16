import { createApp } from 'vue'
import App from './App.vue'
import VUI from 'v-ui'
// import VUI from '../lib/index.js'
// import VUI from '../lib/index.esm.js'
// import Button from '../lib/button/index.js'

import 'theme-chalks/src/index.scss'

// 创建应用 并使用组件库
createApp(App).use(VUI).mount('#app')
