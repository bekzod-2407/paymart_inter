<template>
  <div class="view">
    <h2>{{$t('user.view_title')}}</h2>
    <div class="info">
     <Vuetable
            :data=" UserId"
            :fields="fields"
            :api-mode="false"
        >
            <template slot="actions">
                <button  @click="$router.push({name: 'admin.users'})">{{$t('user.view_btn')}}</button>
            </template>
        </Vuetable>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import Vuetable from "vuetable-2";
import UserFields from  './UserFields';
export default {
  components: {
    Vuetable
  },
  data() {
    return {
      UserId: {},
      fields: UserFields(this.$i18n),
    };
  },
  async created() {
    try {
      const { data } = await axios.get(
        `https://marketpaymart.herokuapp.com/api/dashboard/users/${this.$route.params.id}`
      );
      this.UserId = [data];
      console.log(data);
    } catch (e) {
      console.log(e);
    }
  },
};
</script>
<style scoped lang="scss">
$back-color: rgb(31, 7, 110);
.view {
  padding: 50px;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
  width: 100%;
}
table thead {
  padding: 20px;
  background: rgb(235, 235, 235);
}
table th {
  padding: 20px;
  text-align: left;
  &:last-child {
    text-align: left;
  }
}
table tbody {
  margin-top: 10px;
  & tr {
    box-shadow: 0 0 2px rgb(195, 195, 195);
  }
}
table tbody td {
  padding: 20px;
  text-align: left;
  background-color: #fff;
  &:last-child {
    text-align: left;
  }
}
button {
  padding: 10px ;
  border: 1px solid $back-color;
  background-color: transparent;
  color: $back-color;
  cursor: pointer;
  transition: all 300ms linear;
  border-radius: 3px;
  &:hover {
    background-color: $back-color;
    color: #fff;
  }
}
</style>