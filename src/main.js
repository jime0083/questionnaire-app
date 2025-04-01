

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';
import './style.css';

const app = createApp(App); // ✅ ここで `app` を作成
app.use(router);
app.use(vuetify);
app.mount('#app'); // ✅ 最後に `#app` にマウント
