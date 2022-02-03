<template>
  <div class="breadcrumb" v-if="links.length > 1">
    <div class="container">
      <ul class="list">
        <li class="item" v-for="link in links" :key="link.name">
          <router-link :to="{ name: link.name }" class="link">
            {{ link.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
git init
<script>
export default {
  computed: {
    links() {
      let links = this.$route.meta.breadcrumbItems || false;
      let currentRoutePath = 0;

      if (links) {
        currentRoutePath = links.findIndex(
          (route) => route.name == this.$route.name
        );
        return links.slice(0, currentRoutePath + 1);
      }

      return links;
    },
  },
};
</script>

<style lang="scss" scoped>
$green-color: #72e019;

.breadcrumb {
  padding: 30px 0px;
  background: #fbfbfc;
  border-bottom: 1px solid #e4e7ed;
  margin-bottom: 30px;

  .list {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    list-style-type: none;

    .item {
      font-size: 12px;
      font-weight: 500;
      text-transform: uppercase;
      
      .link {
        margin: 0 5px;
        color: #000;

        &:after {
          content: "/";
        }
        &.router-link-exact-active {
          color: $green-color;
          font-size: 14px;
        }
      }
      &:last-child{
        .link{
          &:after{
            display: none;
          }
        }
      }
    }
  }
}
</style>