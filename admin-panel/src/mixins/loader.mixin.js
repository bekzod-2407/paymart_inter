export default {
    computed: {
        isLoading() {
            return this.$store.getters['common/getLoader']
        }
    }
}