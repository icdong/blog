/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-01 15:29:39
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-01 16:39:38
 */
import loadable from '../utils/loadable'

const webRoutes = [
    {
        menu: true,
        icon: 'home',
        title: '首页',
        path: '/web/index',
        component: loadable(() => import('../pages/web/list/list'))
    },
    {
        menu: true,
        icon: 'edit',
        title: '归档',
        path: '/web/archive',
        component: loadable(() => import('../pages/web/archive'))
    },
    {
        menu: true,
        icon: 'star',
        title: '收藏',
        path: '/web/star',
        component: loadable(() => import('../pages/web/star'))
    },
    {
        menu: true,
        icon: 'team',
        title: '关于',
        path: '/web/about',
        component: loadable(() => import('../pages/web/about'))
    },
    {
        icon: 'more',
        title: '文章详情',
        path: '/web/detail/:id',
        component: loadable(() => import('../pages/web/list/detail'))
    }
]

export default webRoutes
