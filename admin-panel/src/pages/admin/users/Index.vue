<template>
  <div class="content">
    <h1>{{ $t("sidebar.users") }}</h1>
    <button
      class="btn btn__add"
      @click="$router.push({ name: 'admin.users.create' })"
    >
      {{ $t("msg.btn") }}
    </button>

    <!-- table -->
    <div class="wrapper__table">
      <!-- api-url="https://61ade31fd228a9001703b022.mockapi.io/api/users" -->
      <Vuetable :data="users" :api-mode="false" :fields="fields">
        <template slot="actions" slot-scope="props">
          <div class="icons__flex">
            <i
              class="fa fa-search-plus"
              style="color: rgb(109, 109, 184)"
              @click="
                $router.push({
                  name: 'admin.users.view',
                  params: { id: props.rowData.id },
                })
              "
            >
            </i>
            <i
              tag="i"
              class="fa fa-edit"
              style="color: green"
              @click="
                $router.push({
                  name: 'admin.users.edit',
                  params: { id: props.rowData.id },
                })
              "
            >
            </i>
            <i
              class="fa fa-close"
              style="color: red"
              @click="removeUser(props.rowData.id)"
            >
            </i>
          </div>
        </template>
      </Vuetable>
      <div class="pagination">
        <button
          v-for="pageNumber in this.totalPages"
          :key="pageNumber"
          @click="changePage(pageNumber)"
          :class="{
            btn__active: page === pageNumber,
          }"
        >
          {{ pageNumber }}
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Vuetable from "vuetable-2";
import UserFields from "./UserFields";


export default {
  name: "users",
  components: {
    Vuetable,
  },
  data() {
    return {
      fields: UserFields(this.$i18n),
      users: [],
      perPage: 10,
      page: 1,
      totalPages: "",
    };
  },
  async created() {
    this.fetchData();
  },
  watch: {
    page() {
      this.fetchData();
    },
  },
  methods: {
    async removeUser(id) {
      if (window.confirm("Are you want to  delete ?")) {
        this.users = this.users.filter((user) => user.id !== id);
        await this.$axios.delete(`/api/dashboard/users/${id}`);
        this.fetchData()
      }
    },
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    async fetchData() {
      const resp = await this.$axios.get(`/api/dashboard/users`, {
        params: {
          limit: 9,
          page: this.page,
        },
      });
      this.totalPages = Math.ceil(resp.data.meta.total / this.perPage);
      console.log(this.totalPages);
      this.users = resp.data.data;
    },
  },
};
</script>

<style lang="scss" scoped>
$main-color: rgb(31, 7, 110);

.wrapper__table {
  width: 100%;
}
.content__table {
  width: 100%;
  min-width: 720px;
  margin: 50px 0;
  border-collapse: collapse;
  background-color: red;
}
.icons__flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 22px;
  i {
    cursor: pointer;
    margin-right: 5px;
    &:hover {
      opacity: 0.7;
    }
  }
  i:nth-child(2) {
    padding-top: 5px;
  }
}
.btn {
  margin: 20px 5px;
  padding: 10px 20px;
  background-color: transparent;
  border: 1px solid $main-color;
  color: $main-color;
  cursor: pointer;
  font-weight: bold;
  transition: all 300ms linear;
  &:hover {
    background-color: $main-color;
    color: #fff;
  }
  margin-bottom: 10px;
}
.btn__add {
  align-self: flex-start;
}
.btn__submit {
  margin-top: 10px;
}
// popup
.overlay {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: rgba(0, 0, 0, 0.548);
  left: 0;
  right: 0;
  bottom: 0;
  .form {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400px;
    justify-content: center;
    padding: 30px;
    border-radius: 5px;
    background-color: #fff;
    h3 {
      text-align: center;
      margin-bottom: 5px;
    }
    form {
      display: flex;
      flex-direction: column;
      transition: all 300ms linear;
      input {
        padding: 10px;
        outline: none;
        &:focus {
          border: 1px solid rgb(105, 175, 0);
        }
      }
    }
    &__close {
      position: absolute;
      right: -10px;
      top: -30px;
      border: none;
      background-color: transparent;
      font-size: 24px;
      cursor: pointer;
      opacity: 0.7;
      i {
        color: red;
      }
      &:hover {
        opacity: 1;
      }
    }
  }
}
.pagination {
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;
  button {
    width: 30px;
    margin-left: 10px;
    height: 30px;
    background-color: transparent;
    border: 1px solid $main-color;
    color: $main-color;
    cursor: pointer;
    font-weight: bold;
    transition: all 300ms linear;
    &:hover {
      background-color: $main-color;
      color: #fff;
    }
  }
}
// adaptive
@media (max-width: 991px) {
  .wrapper__table {
    overflow-x: scroll;
  }
  .btn {
    margin: 0 auto;
  }
}
</style>