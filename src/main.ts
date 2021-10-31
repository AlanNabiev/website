import { createApp } from "vue";
import App from "./App.vue";
import registerBaseComponents from './helpers/registerBaseComponents'
import '@/assets/styles/tailwind.css'

export const app = createApp(App)

registerBaseComponents(app)

app.mount("#app");
