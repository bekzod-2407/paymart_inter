export default [
    {
        path: '/',
        name: 'home',
        meta: {
            layout: "home",
            breadcrumbItems: [
                {
                    name: 'home',
                    text: 'Home',
                    isDisabled: false,
                },
                {
                    name: 'checkout',
                    text: 'Checkout',
                    isDisabled: true,
                },
                {
                    name: 'store',
                    text: 'store',
                    isDisabled: true,
                },
            ]
        },
        component: () => import('../pages/HomePage')
    },
    {
        path: '/checkout',
        name: 'checkout',
        meta: {
            layout: "home",
            breadcrumbItems: [
                {
                    name: 'home',
                    text: 'Home',
                    isDisabled: false,
                },
                {
                    name: 'checkout',
                    text: 'Checkout',
                    isDisabled: true,
                },
                {
                    name: 'store',
                    text: 'store',
                    isDisabled: true,
                },
            ]
        },
        component: () => import('../pages/CheckoutPage')
    },
    {
        path: '/auth',
        name: "auth",
        meta: {
            layout: "empty",
        },
        component: () => import('../pages/AuthPage')
    },
    {
        path: '/store',
        name: "store",
        meta: {
            layout: "home",
            breadcrumbItems: [
                {
                    name: 'home',
                    text: 'Home',
                    isDisabled: false,
                },
                {
                    name: 'checkout',
                    text: 'Checkout',
                    isDisabled: true,
                },
                {
                    name: 'store',
                    text: 'store',
                    isDisabled: true,
                },
            ]
        },
        component: () => import('../pages/StorePage')
    },

    {
        path: '/home/product/view/:id',
        name: "home.product.view",
        meta: {
            layout: "home",
            
        },
        component: () => import('../pages/ViewProductPage')
    },
    {
        path: '/home/wishlist',
        name: "home.wishlist",
        meta: {
            layout: "home",
        },
        component: () => import('../pages/WishlistPage')
    },
    {
        path: '/home/user_order',
        name: "home.order.page",
        meta: {
            layout: "home",
        },
        component: () => import('../pages/OrderPage')
    },

    {
        path: '/cart',
        name: "cart",
        meta: {
            layout: "easy",
        },
        component: () => import('../pages/CartPage')
    },




    // not found page
    {
        path: '*',
        name: "notFound",
        meta: {
            layout: "home",
        },
        component: () => import('../pages/NotFound')
    },
]