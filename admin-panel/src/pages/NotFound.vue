<template>
    <div class="container">
        <div class="wrapper">
            <h1>404</h1>
            <h2>Упс страница не найдено</h2>
            <router-link :to="{name: 'home'}">Вернутся назад</router-link>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="scss" scoped>
    $green-color:#72E019;
    $green-shadow: #64c515;
    .wrapper{
        padding-top: 80px;
        text-align: center;
        min-height: calc(100vh - 1000px);
        h1{
            color: $green-color;
            font-size: 100px;
        }
       
        a{
            margin-top: 20px;
            display: inline-block;
            padding: 10px 20px;
            background-color: $green-color;
            color: #fff;
            border: none;
            border-radius: 5px;
            font-weight: bold;
            cursor: pointer;
            &:hover{
                box-shadow: 0 0 3px  $green-shadow;
            }
        }
    }
</style>