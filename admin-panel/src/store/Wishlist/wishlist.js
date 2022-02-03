export default {
    namespaced: true,
    state: {
        wishlist: [

        ]
    },
    mutations: {
        addWish(state, productId) {
            if (!state.wishlist.includes(productId)) {
                state.wishlist.push(productId);
            }
        },
        removeWishItem(state, productId) {
            console.log(state);

            let index = state.wishlist.indexOf(productId);
            state.wishlist.splice(index,1)
            // state.wishlist = state.wishlist.filter(item => {
                // item !== productId
                // let index = state.wishlist.indexOf(productId)
                // state.wishlist.splice(index, 1)
            // },

            // )
            console.log(
                state.wishlist
            );
            // 

        },
        replaceWishItem(state, items) {
            state.items = items;
        }
    },

    actions: {
        addWish({ commit }, payload) {
            commit('addWish', payload)
        },
        removeWishItem({ commit }, payload) {
            commit('removeWishItem', payload);
        },


    },
    getters: {
        getList(state) {
            return state.wishlist
        },
        getCount(state) {
            console.log(state.wishlist.length);
            return state.wishlist.length;

        }
        // getProduct: (state) => (id) => {
        //     return state.wishlist.find(product => product.id == id)
        // }
    }
}