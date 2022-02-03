export default [
  { 
    path: '/',
    name: 'home',
    meta:{
      title:'home',
      layout:'main'
    },
    component: () => import ('../pages/HomePage.vue')
  },
  { 
    path: '/about',
    name: 'about',
    meta:{
      title:'about',
      layout:'main'
    },
    component: () => import( '../pages/AboutPage.vue')
  },
  { 
    path: '/newpage',
    name: 'newpage',
    meta:{
      title:'newpage',
      layout:'empty'
    },
    component: () => import( '../pages/NewPage.vue')
  },
  { 
    path: '/cardpage/:id',
    name: 'cardpage',
    meta:{
      title:'cardpage',
      layout:'main'
    },
    component: () => import( '../pages/CardPage.vue'),
    props:true
  }
]