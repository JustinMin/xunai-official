<template>
  <div class="link-container">
    <span>当前位置：<span 
      class="link"
      @click.stop="handelClick"
    >优选案例
    </span> &gt;</span>
    <span class="currentPosition">{{ linkname }}</span>
  </div>
</template>

<script>
export default {
  props:{
    linkname:{
      type:String,
      default(){
        return ''
      }
    }
  },
  methods: {
    handelClick(){
      this.$router.push({
        path:'/'
      })
    }
  },
}
</script>


<style lang="scss" scoped>
@import "@/assets/css/case/link.scss";
</style>


