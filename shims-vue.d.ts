declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const comp: DefineComponent
  export default comp
}

declare module '*.md' {
  import { DefineComponent } from 'vue'
  const comp: DefineComponent
  export default comp
}

declare module 'prismjs'
declare module 'prismjs/components/index'
declare module 'escape-html'
declare module '@docsearch/js'
declare module 'virtual:pwa-register/vue'

interface ImportMeta {
  env: {
    MODE: string
    BASE_URL: string
    PROD: boolean
    DEV: boolean
    SSR: boolean
  }
}
