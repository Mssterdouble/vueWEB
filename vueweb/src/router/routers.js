const mRouters = [
  {
    path: '*',
    redirect: '/Home',
    component: () => import('@/home/index')
  },
  {
    name: 'Home',
    path: '/Home',
    component: () => import('@/home/index')
  },
  {
    name: 'Main',
    path: '/Main',
    component: () => import('@/pages/main')
  },
  {
    name: 'Mine',
    path: '/Mine',
    component: () => import('@/pages/mine')
  },
  {
    name: 'Test',
    path: '/Test',
    component: () => import('@/pages/test')
  },
  {
    name: 'World',
    path: '/World',
    component: () => import('@/pages/world')
  },
  {
    name: 'Strategies',
    path: '/Strategies',
    component: () => import('@/pages/strategies')
  },
  {
    name: 'Actives',
    path: '/Actives',
    component: () => import('@/pages/actives')
  },
  {
    name: 'ContralPanel.Index',
    path: '/ContralPanel.Index',
    component: () => import('@/pages/contralPanel/index')
  }
]

export default mRouters