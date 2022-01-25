import { router } from './providers/router';
import { store } from './providers/store'
import { createApp } from 'vue'
import App from './index.vue'

import { Quasar, quasarConfig } from "./quasar"

export const app = createApp(App).use(Quasar, quasarConfig).use(router).use(store)
