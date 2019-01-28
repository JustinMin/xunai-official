<template>
  <div class="product_container">
    <img 
      src="~assets/images/product/product_intro.jpg"
      class="product_banner"
    >
    <div class="product_content">
      <ai-introduce/>
      <ai-advantage/>
    </div>
  </div>
</template>

<script>
import AiIntroduce from '@/components/product/introduce';
import AiAdvantage from '@/components/product/advantage';

export default {
  components:{
     AiIntroduce,
     AiAdvantage,
  }
}
</script>

<style lang="scss" scoped>
.product_container{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background:rgba(255,255,255,1);
  .product_banner{
    width: 100%;
  }
  .product_content{
    padding-top: 100px;
    padding-bottom: 159px;
    width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>

