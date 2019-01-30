<template>
  <div class="link-container">
    <span>
      当前位置：
      <nuxt-link 
        to="/" 
        class="link">优选案例</nuxt-link>
      &gt;
    </span>
    <span class="currentPosition">{{ linkname }}</span>
  </div>
</template>

<script>
export default {
  props: {
    linkname: {
      type: String,
      default() {
        return "";
      }
    }
  },
  methods: {
    handelClick() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/case/link.scss";
</style>


