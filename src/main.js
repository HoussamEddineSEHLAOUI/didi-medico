import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
const Medico = createApp(App).use(store).use(router)
Medico.use(Loading)
Medico.mount('#app')
