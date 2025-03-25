import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'

createApp(App).mount('#app')
app.use(router);
app.use(vuetify);
app.mount('#app');

