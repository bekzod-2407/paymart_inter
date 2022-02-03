<template>
    <section class="collection">
        <div class="container">
            <div class="card__link-wrapper row">
                <my-card-link
                    :srcImage="srcImageLaptop"
                />
                <my-card-link
                    :srcImage="srcImageAccessories"
                />
                <my-card-link
                    :srcImage="srcImageCamera"
                />
            </div>
        </div>
    </section>
</template>
<script>
import MyCardLink from '../components/home/MyCardLink.vue'

export default {
    components: { MyCardLink },
    data(){
        return{
            srcImageAccessories: 'https://st.depositphotos.com/1203063/2785/i/950/depositphotos_27856497-stock-photo-headphones.jpg',
            srcImageLaptop: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QfaPWOIyXNa0rq9vjtQ0OusYrU3ztKzR-g&usqp=CAU',
            srcImageCamera: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdc8v84ZjbEfCS7O5jB0uWSUIYSUMjcrPsmA&usqp=CAU',
        }
    },
}
</script>
<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>