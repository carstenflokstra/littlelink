import { createApp } from 'vue';
import App from './views/App.vue';
import router from './router'; // Import the router instance

const app = createApp(App);

app.use(router); // Tell the app to use the router
app.mount('#app');
