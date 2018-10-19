import Vue from 'vue'
import App from './App.vue'
import router from './router'

import axios from 'axios'
import VueAxios from 'vue-axios'

// import Vue from 'vue'
import {
  // 布局
  Layout,
  Header,
  Footer,
  Row,
  Col,
  Card,
  Content,
  Sider,
  Divider,
  // 导航
  Breadcrumb,
  BreadcrumbItem,
  Menu,
  MenuItem,
  Submenu,
  Icon,
  // 组件
  Tag
  // Carousel,
  // CarouselItem
} from 'iview'

// import iView from 'iview'
import 'iview/dist/styles/iview.css'
Vue.use(VueAxios, axios)

// Vue.use(iView)
/* 布局 */
Vue.component('Layout', Layout)
Vue.component('Header', Header)
Vue.component('Footer', Footer)
Vue.component('Content', Content)
Vue.component('Card', Card)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Sider', Sider)
Vue.component('Divider', Divider)

/* 导航相关 */
Vue.component('Breadcrumb', Breadcrumb)
Vue.component('BreadcrumbItem', BreadcrumbItem)
Vue.component('Menu', Menu)
Vue.component('Submenu', Submenu)
Vue.component('MenuItem', MenuItem)

Vue.component('Icon', Icon)

/* 组件 */
Vue.component('Tag', Tag)
// Vue.component('Carousel', Carousel)
// Vue.component('CarouselItem', CarouselItem)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
