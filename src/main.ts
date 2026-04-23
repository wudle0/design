import { createApp } from 'vue';
import 'material-symbols';
import '@/styles/assets';
import App from './CommonUIApp.vue';
import router from './router';
import Antd from 'ant-design-vue';
import { createPinia } from 'pinia';
import piniaPluginPersistedState from 'pinia-plugin-persistedstate';
import VueGridLayout from 'vue3-grid-layout-next';

const app = createApp(App);

app.use(Antd);
app.use(router);
app.use(VueGridLayout);
app.use(createPinia().use(piniaPluginPersistedState));
app.mount('#app');
