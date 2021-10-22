import {createApp} from 'vue'
import '@v-ui/theme-chalk/src/index.scss'
import VIcon from '@v-ui/components/icon'
import App from './App.vue'

const app = createApp(App)
app.use(VIcon)
app.mount('#app')