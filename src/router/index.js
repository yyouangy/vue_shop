import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/home.vue'
import Welcome from '../components/welcome.vue'
import Users from '../components/user/Users.vue'

Vue.use(VueRouter)

const routes = [

    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/home',
        component: Home,
        redirect: '/welcome',
        children: [{ path: '/welcome', component: Welcome },
            { path: '/users', component: Users }
        ]
    }

]

const router = new VueRouter({
    routes
})

// 挂载路由导航守卫
router.beforeEach((to, from, next) => {
    // to表示将要访问的路径
    //from代表从哪个路径跳转过来
    //next()  放行   Next('/login')强制跳转/login
    //如果访问login页 直接放行
    if (to.path === '/login') return next()
        // 从sessionStorage中获取到保存的token值
    const tokenstr = sessionStorage.getItem('token')
        //没有token，强制跳转到login页
    if (!tokenstr) return next('/login')
    next()
})
export default router