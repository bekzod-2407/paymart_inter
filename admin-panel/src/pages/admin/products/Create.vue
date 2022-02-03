<template>
  <div class="content">
    <div class="center">
      <Loader v-if="loading"/>
      <form v-else>
        <vue-form-generator
          :schema="schema"
          :model="model"
          :options="formOptions"
        ></vue-form-generator>
        <!-- <input type="file" name="" id="" @change="change"> -->
      </form>
      <div class="row"> 
        <img 
          v-for="(image, index) in previews" 
          :key="index" 
          :src="image" 
          alt="preview"
          width="400px"
        >
      </div>
    </div>
  </div>
</template>

<script>

import VueFormGenerator from "vue-form-generator/dist/vfg-core.js";

export default {
  name: "createProduct",
  data() {
    return {
      loading: true,
      previews: [],
      pullCat: "",
      pullBrand: "",
      model: {
        id: Date.now(),
        images: [],
        name: "",
        brand_id: '',
        category_id: "",
        price: "",
        description: "",
        quantity: null,
        created_at: new Date().toLocaleString(),
      },
      schema: {},
      formOptions: {
        validateBeforeSubmit: true,
        validateAfterLoad: false,
        validateAfterChanged: true,
        validateAsync: true,
      },
    };
  },
  methods: {
    change(e) {
      this.model.images = e.target.files;
    },
    async getCategory() {
      const resp = await this.$axios.get(
        `/api/dashboard/categories`
      );
      const resp2 = await this.$axios.get(
        `/api/dashboard/brands`
      );
      
      this.pullCat = resp.data
      this.pullBrand = resp2.data
      
    },
  },
  async created() {
   
  },
  async mounted(){

     await this.getCategory();
    const $this = this;
    const fields = {
      fields: [
        {
          type: "select",
          label: "Выберите категорию",
          model: "category_id",
          values: () => this.pullCat,
        },
        {
          type: "select",
          label: "Выберите бренд",
          model: "brand_id",
          values: () => this.pullBrand,
        },
        {
          type: "input",
          inputType: "text",
          label: "Название товара",
          model: "name",
          required: true,
          validator: VueFormGenerator.validators.string.locale({
            fieldIsRequired: "Введите корректное название",
          }),
        },

       
        {
          type: "input",
          inputType: "number",
          label: "Назовите цену",
          model: "price",
          required: true,
          validator: "number",
        },
        {
          type: "input",
          inputType: "number",
          label: "Выберите колличество",
          model: "quantity",
          default: 0,
          validator: "number",
        },
        {
          
          type:'upload',
          // model: "images",
          files: true,
          multiple: true,
          onChanged(model, schema, event) {
            let files = event.target.files;

            Object.entries(files).forEach(([key, file]) => {
              console.log(key);
              $this.previews.push(URL.createObjectURL(file))
            });

            return model.images = event.target.files;
          } 
        },
        {
            type: "textArea",
            inputType: "text",
            placeholder: "Order  Notes",
            model: "description",
            hint: "Max 500 characters",
            required: true,
            validator: "string",

          },
        {
          type: "submit",
          label: "",
          buttonText: "добавить",
          validateBeforeSubmit: true,
          async onSubmit(model) {
            console.log(model.images);

            const formData = new FormData()
            formData.append('category_id', model.category_id)
            formData.append('brand_id', model.brand_id)
            formData.append('description', model.description)
            formData.append('name', model.name)
            formData.append('price', model.price)
            formData.append('quantity', model.quantity)

            Object.entries(model.images).forEach(([ , image ]) => {
              formData.append('images[]', image)
            })
            
            await $this.$axios.post(`/api/dashboard/products`, formData);
            console.log('success');
            await $this.$router.push({ name: "admin.products.test" });
          },
        },
      ],
    };

    this.schema = fields;

    this.loading = false
  }
};
</script>

<style lang="scss" scoped>
.content {
  width: 100%;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: rgb(238, 238, 238);
  height: calc(100vh - 100px);
  overflow-y: auto;
}
.center {
  max-width: 500px;
  width: 100%;
  height: 700px;
}
</style>
