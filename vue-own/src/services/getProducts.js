import store from '../store'


const products = [
    {
        id: 1,
        name: 'Macbook 13 Air',
        category: 'Computers',
    },
    {
        id: 2,
        name: 'Iphone 7',
        category: 'Smartphones',
    },
    {
        id: 3,
        name: 'iWatch 6',
        category: 'Accessories',
    },
];

// store.dispatch('setProduct', products)

export default {
    products,
}