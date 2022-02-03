export default [
    {
        path: '/admin',
        name: 'admin',
        meta: {
            layout: "admin",
            protected: true,
        },
        component: () => import('../pages/AdminPage')
    },

    // categories
    {
        path: '/admin/categories',
        name: "admin.categories",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/categories/Index')
    },
    {
        path: '/admin/categories/create',
        name: "admin.categories.create",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/categories/Create')
    },
    {
        path: '/admin/categories/edit/:id',
        name: "admin.categories.edit",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/categories/Edit')
    },
    {
        path: '/admin/categories/view/:id',
        name: "admin.categories.view",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/categories/View')
    },
    // products
    {
        path: '/admin/products',
        name: "admin.products",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/products/Index')
    },
    {
        path: '/admin/products/test',
        name: "admin.products.test",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/products/TestIndex')
    },
    {
        path: '/admin/products/create',
        name: "admin.products.create",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/products/Create')
    },
    {
        path: '/admin/products/edit/:id',
        name: "admin.products.edit",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/products/Edit')
    },
    {
        path: '/admin/products/view/:id',
        name: "admin.products.view",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/products/View')
    },
    // users
    {
        path: '/admin/users',
        name: "admin.users",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/users/Index')
    },
    {
        path: '/admin/users/create',
        name: "admin.users.create",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/users/Create')
    },
    {
        path: '/admin/users/edit/:id',
        name: "admin.users.edit",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/users/Edit')
    },
    {
        path: '/admin/users/view/:id',
        name: "admin.users.view",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/users/View')
    },
    {
        path: '/admin/users/create-role',
        name: "admin.users.create-role",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/users/CreateRole')
    },
    // brands
    {
        path: '/admin/brands/Index2',
        name: "admin.brands.index2",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/brands/Index2')
    },
    {
        path: '/admin/brands',
        name: "admin.brands",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/brands/Index')
    },
    {
        path: '/admin/brands/create',
        name: "admin.brands.create",
        meta: {
            layout: "admin",
            protected: true,
        },
        component:  () => import('../pages/admin/brands/Create')
    },
    {
        path: '/admin/brands/edit/:id',
        name: "admin.brands.edit",
        meta: {
            layout: "admin",
            protected: true
        },
        component:  () => import('../pages/admin/brands/Edit')
    },
    {
        path: '/admin/brands/view/:id',
        name: "admin.brands.view",
        meta: {
            layout: "admin",
            protected: true
        },
        component:  () => import('../pages/admin/brands/View')
    },
    
]