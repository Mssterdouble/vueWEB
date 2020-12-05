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
    name: 'Mine.Index',
    path: '/Mine.Index',
    component: () => import('@/pages/mine/index')
  },
  {
    name: 'Propety.Heros',
    path: '/Propety.Heros',
    component: () => import('@/pages/propety/heros')
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
    name: 'Strategies.Index',
    path: '/Strategies.Index',
    component: () => import('@/pages/strategies/index')
  },
  {
    name: 'Actives.Index',
    path: '/Actives.Index',
    component: () => import('@/pages/actives/index')
  },
  {
    name: 'ContralPanel.Index',
    path: '/ContralPanel.Index',
    component: () => import('@/pages/contralPanel/index')
  },
  {
    name: 'CiticTest',
    path: '/CiticTest',
    component: () => import('@/pages/citictest')
  }
]

export default mRouters