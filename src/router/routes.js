
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: 'pagos', component: () => import('pages/PagosAfectados.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Login.vue'),
    meta: { desc: 'Iniciar session' },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
