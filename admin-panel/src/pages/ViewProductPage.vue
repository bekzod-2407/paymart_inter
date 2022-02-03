<template>
  <div class="wrapper bg">
    <div class="container">
      <div class="wrapper-product d-flex">
        <div class="wrapper-sliders">
          <div 
            v-if="imagesLength > 1"
            class="swiper-container gallery-thumbs"  
            :options="swiperOption"
          >
            <!-- <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div> -->
            <div class="swiper-wrapper">
              
              <div
                class="swiper-slide"
                v-for="image in product.image"
                :key="image.id"
              >
                <img :src="`${configURL}/storage/product_images/${image.product_id}/${image.name}`" alt="">
              </div>
            </div>
          </div>
          <div class="swiper-container gallery-top">
            <div class="swiper-wrapper">
              <div class="swiper-button-next"></div>
              <div class="swiper-button-prev"></div>
              <div 
                class="swiper-slide image"   
                v-for="image in product.image"
                :key="image.id"
                :style="{ 
                  background: `url(${configURL}/storage/product_images/${image.product_id}/${image.name})`, 
                  backgroundSize: 'cover'
                }"
              >
                <!-- <img class="swiper-image" :src="`${configURL}/storage/product_images/${image.product_id}/${image.name}`" alt=""> -->
              </div>
            </div>
          </div>
        </div>

        <div class="product-content">
          <div class="product-wrapper">
            <p class="product-name">{{product.name}}</p>
            <p class="product-brand"><span>By </span> {{brandName}}</p>
            <div class="review-block d-flex">
              <div class="stars">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <a href="" class="review-link"
                >{{}} Review(s) | Add your review
              </a>
            </div>
            <div class="price-block d-flex">
              <p class="price">${{product.price}}</p>
              <p v-if="product.old_price" class="old-price">{{product.old_price}}</p>
            </div>
            <p class="product-description">
              {{product.description}}
            </p>
            <div class="add-wrapper d-flex">
              <div class="qty d-flex">
                <p class="qty-label">QTY</p>
                <h2 class="qty-count">{{amount}}</h2>
                <div class="qty-buttons">
                  <p class="qty-plus btn" @click="plus()"><i class="fa fa-plus"></i></p>
                  <p class="qty-minus btn" @click="minus()"><i class="fa fa-minus"></i></p>
                </div>
              </div>
              <button class="add-cart" 
              @click="addToCart"
              >
                <i class="fa fa-shopping-cart" aria-hidden="true"></i>Add to
                Cart
              </button>
            </div>
            <div class="product-wish-compare">
              <a href=""
                ><i class="fa fa-heart-o" aria-hidden="true"></i>add to
                wishlist</a
              >
              <a href=""><i class="fa fa-exchange"></i>add to compare</a>
            </div>
            <div class="product-category d-flex">
              <p class="category-title">category:</p>
              <div class="d-flex">
                <p class="category-name">notebook</p>
                <p class="category-name">laptop</p>
              </div>
            </div>
            <div class="share d-flex">
              <p class="share-title">share:</p>
              <div class="socials d-flex">
                <a href=""><i class="fa fa-facebook" aria-hidden="true"></i></a>
                <a href=""><i class="fa fa-twitter"></i></a>
                <a href=""><i class="fa fa-google"></i></a>
                <a href=""><i class="fa fa-envelope"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.min.js";
import "swiper/swiper-bundle.min.css";
import config from '../config';

export default {
  data() {
    return {
      categories: [],
      categoryName: '',
      brands: [],
      brandName:'',
      swiperOption: {
        slidesPerView: 4,
        spaceBetween: 32,
        freeMode: true,
        breakpoints: {
          // when window width is >= 320px
          200: { slidesPerView: 1.1, spaceBetween: 20, freeMode: false },
          // when window width is >= 480px
          576: {
            slidesPerView: 1,
            spaceBetween: 30,
            freeMode: false,
          },
          // when window width is >= 640px
          768: { slidesPerView: 1, spaceBetween: 32, freeMode: false },
          992: { slidesPerView: 1, spaceBetween: 32 },
          1200: { slidesPerView: 1, spaceBetween: 25 },
        },
        pagination: { el: ".swiper-pagination", clickable: true },
      },
      product: {},
      imagesLength: 0,
      imagesWidth: (100 / this.imagesLength) + '%',
      configURL: config.URL,
      amount: 0,
    };
  },
  methods:{
    plus(){
      this.amount++
    },
    minus(){
      if(this.amount > 1){
        this.amount = 1

      }

       
    
    },
     async addToCart(){
            await this.$axios.post('api/cart', {product_id: this.product.id, amount: this.amount})
        }

  },
  components: {},
  async mounted() {
    const {data} = await this.$axios.get(`/api/products/${this.$route.params.id}`)
    this.product = data;
    
    this.imagesLength = this.product.image.length
    try{
            const category = await this.$axios.get(`/api/categories`)
            const brands = await this.$axios.get(`/api/dashboard/brands`)
            this.categories = category.data
            this.brands = brands.data
            this.categoryName = this.categories.find(cat => cat.id === data.category_id).name
            this.brandName = this.brands.find(brand => brand.id === data.brand_id).name
            
        }catch(err){
            console.log(err);
      }
    console.log(this.product.image.length);
    var galleryThumbs = new Swiper(".gallery-thumbs", {
      spaceBetween: 5,
      slidesPerView: this.product.image.length ,
      freeMode: false,
      direction: 'vertical',
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      //  navigation: {
        
      //   nextEl: ".swiper-button-next",
      //   prevEl: ".swiper-button-prev",
      // },
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: this.product.image.length ,
          spaceBetween: 4,
        },
        // when window width is >= 480px
        576: {
          slidesPerView: this.product.image.length ,
          spaceBetween: 4,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: this.product.image.length ,
          spaceBetween: 5,
        },
        992: {
          slidesPerView: this.product.image.length ,
          spaceBetween: 5,
        },
        1200: {
          slidesPerView: this.product.image.length,
          spaceBetween: 20,
        },
      },
    });
    new Swiper(".gallery-top", {
      spaceBetween: 10,
      effect: 'fade',
      disableOnInteraction: false,
      // autoplay: {
      //   delay: 7000,
      //   disableOnInteraction: false,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      thumbs: this.product.image.length > 1 ? { swiper: galleryThumbs } : null,
    });
  },
};
</script>

<style scoped lang="scss">
.bg {
  background: #fbfbfc;
}

.d-flex {
  display: flex;
}
.wrapper-sliders {
  
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;

  .gallery-top {
    margin-left: 30px;
    margin-right: 30px;
    overflow: hidden;
    width: 70%;
    height: 340px;
    border: 1px solid #72e019; 
    transition: all 0.5s linear;
    display: flex;
      justify-content: center;
      align-items: center;
    .swiper-image{
      max-width: 100%;
      
    }
    .swiper-button-next, .swiper-button-prev{
      opacity: 0;
      pointer-events: none;
      transition: all 0.3s ease;
      &:after{
         color: #72e019;
         font-size: 16px;
         font-weight: bold;
        background: rgba(0, 0, 0, 0.781);
        border-radius: 50%;
        padding: 10px 15px;
    }
     
        }
      .swiper-slide{
        background: #eee;
      }
      &:hover{
        .swiper-button-next, .swiper-button-prev{
          opacity: 1;
          pointer-events: auto;
        }
      }
      .swiper-button-disabled{
    opacity: 0 !important;
  }
  }
  .gallery-thumbs {
    overflow:hidden;
    width: 17%;
    
    height: 410px;
    .swiper-wrapper {
      .swiper-slide{ 
        cursor: pointer;
        border: 1px solid #e4e7ed;
        margin-top: 10px;
        width: 95px !important;
        height: auto !important;
        
        
        overflow: hidden;
        img{
          max-width: 100%;

        }
      }
      .swiper-slide-thumb-active {
        border: 1px solid #72e019;
      }
    }
  }
  
}
.wrapper-product {
  padding: 50px 0;

  margin: 0 auto;
  height: auto;
}

.product-wrapper {
  padding: 0 15px;
  .product-name {
    font-size: 20px;
    color: #1a1a1a;
    font-weight: bold;
    margin-bottom: 10px;
  }
  .product-brand{
    margin-top: 10px;
    margin-bottom: 10px;
    text-transform: uppercase;

  }
  .review-block {
    .stars {
      font-size: 9px;
      i {
        margin: 0px 2px;
        color: #72e019;
      }
      margin-right: 15px;
    }
    .review-link {
      font-size: 12px;
      color: #1a1a1a;
      text-decoration: underline;
      transition: all 0.3s ease;
      &:hover {
        color: #72e019;
      }
    }
  }
  .price-block {
    margin: 15px 0;
    align-items: end;
    .price {
      font-size: 24px;
      font-weight: 900;
      color: #72e019;
    }
    .old-price {
      margin-left: 6px;
      font-size: 20px;
      font-weight: 200;
      text-decoration: line-through;
      color: #e4e7ed;
    }
  }
  .selects {
    max-width: 450px;
    width: 100%;

    margin-top: 30px;
    align-items: center;
    .select-wrapper {
      align-items: center;
      margin: 0 10px;
      .select-label {
        text-transform: uppercase;
        margin-right: 5px;
        color: #1a1a1a;
        font-weight: bold;
      }
      .product-select {
        width: 100px;
        height: 40px;
        border: 1px solid #e4e7ed;
        &:focus {
          border: 2px solid #e4e7ed;
          outline: none;
        }
      }
    }
  }
  .add-wrapper {
    margin-top: 30px;
    .qty {
      align-items: center;
      margin-right: 30px;
      .qty-count {
        color: #72e019;
        font-weight: bold;
        font-size: 18px;
        margin-left: 10px;
        padding: 10px 30px;
        border: 1px solid #e4e7ed;
      }
      .qty-buttons {
        .btn {
          padding: 4px 5px;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-bottom: 1px;
          border: 1px solid #e4e7ed;
          cursor: pointer;
          i {
            color: #72e019;
          }
        }
        .qty-minus {
          padding-bottom: 4px;
        }
      }
    }
    .add-cart {
      text-transform: uppercase;
      color: #fff;
      padding: 5px 20px;
      align-items: center;
      border: 2px solid #1a1a1a;
      z-index: 2;
      font-size: 12px;
      font-weight: 600;
      background: #1a1a1a;
      cursor: pointer;
      border-radius: 30px;
      transition: all 0.3s ease;
      i {
        opacity: 0;
        display: inline-block;
        margin-right: -10px;
        color: #1a1a1a;
      }
      &:hover {
        display: flex;
        padding: 5px 30px;
        color: #72e019;
        background: #fff;
        border: 2px solid #72e019;
        i {
          opacity: 1;
          margin-bottom: 2px;
          margin-right: 20px;
          color: #72e019;
        }
      }
    }
  }
  .product-wish-compare {
    margin-top: 30px;
    a {
      text-transform: uppercase;
      text-decoration: underline;
      color: #1a1a1a;
      cursor: pointer;
      font-size: 12px;
      margin-right: 10px;
      i {
        margin: 0 5px;
      }
      &:hover {
        color: #72e019;
        i {
          color: #72e019;
        }
      }
    }
  }
  .product-category {
    margin-top: 10px;
    .category-title {
      color: #1a1a1a;
      text-transform: uppercase;
    }
    .category-name {
      margin: 0 10px;
      text-transform: uppercase;
      color: #1a1a1a;
      text-decoration: underline;
      &:hover {
        color: #1a1a1a;
      }
    }
  }
  .share {
    margin-top: 10px;
    .share-title {
      text-transform: uppercase;
      color: #1a1a1a;
    }
    .socials {
      a {
        color: red;
        display: block;
        margin: 0 5px;
        transition: all 0.3s ease;
        i {
          color: #1a1a1a;
        }
        &:hover {
          i {
            color: #72e019;
          }
        }
      }
    }
  }
}
.product-description {
  max-width: 450px;
  width: 100%;
  font-size: 9px;
  color: #1a1a1a;
}
</style>
