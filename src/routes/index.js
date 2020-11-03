import loadable from '../utils/loadable'

const routes = [
    {
        path: '/admin',
        component: loadable(() => import('../pages/admin/layout'))
    },
    {
        path: '/web',
        component: loadable(() => import('../pages/web/layout'))
    }
]

export default routes
