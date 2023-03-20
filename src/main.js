import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router'
import { createPinia } from 'pinia'
import ClickOutsideDirective from './plugins/ClickOutsideDirective'
import PageScrollDirective from './plugins/PageScrollDirective'
import VeeValidatePlugin from './plugins/VeeValidatePlugin'

const forumApp = createApp(App)
forumApp.use(router)
forumApp.use(createPinia())
forumApp.use(ClickOutsideDirective)
forumApp.use(PageScrollDirective)
forumApp.use(VeeValidatePlugin)

forumApp.mount('#app')
