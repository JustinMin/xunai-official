<template>
  <div class="product_link_container">当前位置:产品介绍
    <span>&gt;</span>我们的优势
    <span>&gt;</span>
    {{ title }}
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default() {
        return "";
      }
    }
  }
};
</script>



<style lang="scss" scoped>
@import "~assets/css/product/product_link.scss";
</style>

