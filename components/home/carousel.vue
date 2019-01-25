<template>
  <el-row>
    <el-col :span="24">
      <el-carousel 
        indicator-position="none"
      >
        <el-carousel-item 
          v-for="item in list" 
          :key="item.id"
        >
          <img
            :src="item.bannerUrl"
            class="swiper_pic" 
          >
        </el-carousel-item>
      </el-carousel>
    </el-col>
  </el-row>
</template>

<script>
export default {
  props:{
    list:{
      type:Array,
       default(){
          return[]
      }
    }
  },
};
</script>
<style lang="scss" scoped>
.el-carousel__container {
  .swiper_pic {
    width: 100%;
    height: 100%;
  }
}
</style>