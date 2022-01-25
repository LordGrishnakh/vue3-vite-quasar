import Routing from "./index.vue"

export const routes = [
  { path: "/", component: () => import('./home/index.vue') }
]

export default Routing