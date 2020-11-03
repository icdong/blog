import loadable from '../utils/loadable'

const routes = [
    {
        menu: true,
        icon: 'home',
        title: '首页',
        path: '/admin/page',
        component: loadable(() => import('../pages/admin/home'))
    },
    {
        menu: true,
        icon: 'edit',
        title: '文章',
        path: '/admin/article',
        component: loadable(() => import('../pages/admin/article'))
    },
    {
        menu: true,
        icon: 'tags',
        title: '标签',
        path: '/admin/tags',
        component: loadable(() => import('../pages/admin/tags'))
    },
    {
        menu: true,
        icon: 'folder',
        title: '分类',
        path: '/admin/category',
        component: loadable(() => import('../pages/admin/category'))
    },
    {
        menu: true,
        icon: 'star',
        title: '收藏',
        path: '/admin/star',
        component: loadable(() => import('../pages/admin/star'))
    },
    {
        icon: 'edit',
        title: '新增文章',
        path: '/admin/article-add',
        component: loadable(() => import('../pages/admin/article/item'))
    },
    {
        icon: 'edit',
        title: '文章详情',
        path: '/admin/article-edit/:id',
        component: loadable(() => import('../pages/admin/article/item'))
    }
]

export default routes
