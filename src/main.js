import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 导入全局样式表
import './assets/css/global.css'
import 'element-ui/lib/theme-chalk/index.css';

//导入element
import { Button, Form, FormItem, Input, Message } from 'element-ui'

// 导入axios
import axios from 'axios'

// 配置请求的根路径
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$http = axios


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')