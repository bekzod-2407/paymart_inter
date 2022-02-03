<template>
  <div class="add">
    <form @submit.prevent="editOneUser">
      <h2>{{ $t("user.edit_title") }}</h2>
      <VueFormGenerator :schema="schema" :model="model" :options="formOptions">
      </VueFormGenerator>
      <!-- <button type="submit">{{ $t("user.edit_title") }}</button> -->
    </form>
  </div>
</template>
<script>
import VueFormGenerator from "vue-form-generator";
import i18n from "../../../i18n/i18n";

export default {
  name: "editOneUser",
  data() {
    return {
      userData: {},
      model: {
        username: "",
        full_name: "",
        avatar: "",
        email: "",
      },
      schema: {
        fields: [],
      },
      formOptions: {
        validateAfterChanged: true,
      },
    };
  },
  methods: {
    async editOneUser() {
      try {
        const resp = await this.$axios.put(
          `/api/dashboard/users/${this.$route.params.id}`,
          this.userData
        );
        this.$router.push({ name: "admin.users" });
        console.log(resp.data);
      } catch (error) {
        console.log(error);
      }
    },
  },
  async created() {
    const { data } = await this.$axios.get(
      `/api/dashboard/users/${this.$route.params.id}`
    );
    this.userData = data;
    console.log('DATA:', data);
    this.model.username = this.userData.username;
    this.model.full_name = this.userData.full_name;
    this.model.avatar = this.userData.avatar;
    this.model.email = this.userData.email;
    const $this = this;

    const fields = [
      {
        type: "input",
        inputType: "text",
        name: "username",
        model: "username",
        label: i18n.t("user.edit_label"),
        validator: VueFormGenerator.validators.string.locale({
          fieldIsRequired: "Поля не может быть пустым",
        }),
      },
      {
        type: "input",
        inputType: "text",
        name: "first_name",
        model: "first_name",
        label: i18n.t("user.edit_fullname"),
        validator: VueFormGenerator.validators.string.locale({
          fieldIsRequired: "Поля не может быть пустым",
        }),
      },
      {
        type: "input",
        inputType: "text",
        name: "avatar",
        model: "avatar",
        label: i18n.t("user.edit_ava"),
        validator: VueFormGenerator.validators.string.locale({
          fieldIsRequired: "Поля не может быть пустым",
        }),
      },
      {
        type: "input",
        inputType: "email",
        name: "email",
        model: "email",
        label: i18n.t("user.edit_email"),
        validator: VueFormGenerator.validators.string.locale({
          fieldIsRequired: "Поля не может быть пустым",
        }),
      },
      {
        type: "submit",
        buttonText: i18n.t("user.edit_btn"),
        async onSubmit(model) {
          console.log('MODEL:', model);
          await $this.$axios.put(
            `/api/dashboard/users/${$this.$route.params.id}`,
            model
          );
          $this.$router.push({ name: "users" });
        },
        label: "",
        validateBeforeSubmit: true,
      },
    ];

    this.schema.fields = fields;
  },
};
</script>
<style lang="scss" scoped>
$main-color: rgb(122, 123, 184);
.add {
  width: 100%;
  height: calc(100vh - 100px);
  background-color: #fff;
  form {
    display: flex;
    flex-direction: column;
    width: 500px;
    margin: auto;
    h2 {
      padding: 20px 0;
    }
    input {
      width: 100%;
      height: 50px;
      padding: 10px;
      outline: none;
      transition: all 200ms ease-in;
      margin-top: 10px;
      border: none;
      border-bottom: 1px solid #ccc;
      &:focus {
        border-bottom: 1px solid rgb(0, 167, 56);
      }
    }
    button {
      align-self: flex-end;
      transition: all 300ms linear;
      width: 30%;
      padding: 10px;
      border: 1px solid $main-color;
      background-color: transparent;
      color: rgb$main-color;
      margin: 10px 0;
      font-weight: bold;
      cursor: pointer;
      color: $main-color;
      &:hover {
        background-color: $main-color;
        color: #fff;
      }
    }
  }
}
</style>