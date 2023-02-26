import { createRouter, createWebHistory } from 'vue-router'

 
const routerHistory = createWebHistory()
const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            name:'layout',
            redirect:'/home',
            component: () => import('../views/layout/layout.vue'),
            children:[
                {
                    path:'/home',
                    name:'home',
                    component: () => import('../views/home/home.vue'),
                },
                {
                    path:'/hot',
                    name:'hot',
                    component: () => import('../views/hot/hot.vue'),
                }
                ,
                {
                    path:'/domestic',
                    name:'domestic',
                    component: () => import('../views/domestic/domestic.vue'),
                },
                {
                    path:'/variety',
                    name:'variety',
                    component: () => import('../views/variety/variety.vue'),
                },
                {
                    path:'/American',
                    name:'American',
                    component: () => import('../views/American/American.vue'),
                },
                {
                    path:'/Japanese',
                    name:'Japanese',
                    component: () => import('../views/Japanese/Japanese.vue'),
                },
                {
                    path:'/Drama',
                    name:'Drama',
                    component: () => import('../views/Drama/Drama.vue'),
                },
                {
                    path:'/anime',
                    name:'anime',
                    component: () => import('../views/anime/anime.vue'),
                },
                {
                    path:'/documentary',
                    name:'documentary',
                    component: () => import('../views/documentary/documentary.vue'),
                },
                {
                    path:'/voSearch/:title',
                    name:'voSearch',
                    component: () => import('../views/voSearch/voSearch.vue'),
                },
                {
                    path:'/voddetail/:void',
                    name:'voddetail',
                    component: () => import('../views/voddetail/voddetail.vue'),
                },
                
                {
                        path:'/vodplay',
                        name:'vodplay',
                        component: () => import('../views/vodplay/vodplay.vue'),
                },
               
            ]
        },
        
    ]
})
export default router