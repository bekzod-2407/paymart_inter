<template>
  <div class="content">
    <h3>{{$t('editPage.main')}} {{brandByID.name}}</h3>
    <form @submit.prevent="editCategory">
      <div class="change-wrapper">
        <div class="input-wrapper">
          <p>{{$t('editPage.name')}}</p>
          <input type="text" v-model="brandByID.name" name='name' :placeholder="$t('editPage.placeholder')" >
        </div>
        <span class="btn-def">
          <button>{{$t('editPage.button')}}</button>
        </span>
      </div>
    </form>
  </div>
</template>

<script>

export default {
  data(){
    return{
      brandByID:{}
    }
  },
  methods: {
    async editCategory(){
      await this.$axios.put(`/api/dashboard/brands/${this.$route.params.id}`, this.brandByID)
      this.$router.push({name: 'admin.brands'})
    }
  },
  async created(){
    const {data} = await this.$axios.get(`/api/dashboard/brands/${this.$route.params.id}`)
    this.brandByID = data
  }
}
</script>

<style lang='scss' scoped>
  h3{
    text-align: center;
    margin: 30px;
  }
  .change-wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
    .input-wrapper{
      p{
        margin-bottom: 5px;
      }
      margin-bottom: 20px;
    }
    input{
      height:40px;
      outline: none;
      padding: 3px 20px;
    }
  }
  .btn-def{
    display: flex;
    justify-content: center;
    button{
      display:flex;
      align-items:center;
      justify-content: center;
      height: 50px;
      padding: 5px 20px;
      border:1px solid black;
      cursor: pointer;
      transition: all 0.3s ease;
      outline: none;
      &:hover{
        background-color: black;
        color:white;
      }
    }
  }
</style>