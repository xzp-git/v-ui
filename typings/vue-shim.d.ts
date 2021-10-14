

declare module '*.vue' {
  import type { App, DefineComponent } from 'vue'
  // eslint-disable-next-line @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>& {
    install(app: App): void
  }
  export default component
}


//定义所有.vue结尾的类型