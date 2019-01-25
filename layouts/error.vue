<template>
  <div class="error_container">
    <img 
      src="~assets/images/error/404.png"
      clas="error_icon"
    >
    <div class="error_text">数据加载失败</div>
    <nuxt-link 
      class="return_back_btn" 
      to="/"
    >返回</nuxt-link>
  </div>
</template>

<style lang="scss" scoped>
@import "~assets/css/error/index.scss";
</style>

