<template>
  <div class="product_detail">
    <img
      class="product_detail_bg"
      src="~assets/images/product/advantage_details.png"
    >
    <div
      v-if="detail"
      class="product_content"
    >
      <product-link 
        :title="detail.title"
      />
      <advantage-detail
        :data="detail"
      />
    </div>
  </div>
</template>

<script>
import {
  stringify
} from 'qs';
import ProductLink from "@/components/product/link"
import AdvantageDetail from "@/components/product/advantageDetail"

export default {
  components:{
    ProductLink,
    AdvantageDetail,
 },
 async asyncData(ctx) {
     const  { params } = ctx;
     const { data:res } = await ctx.$axios.get(`/product/advantage?${stringify(params)}`);
     return {
       detail:res.data,
     }
  },
  data(){
    return {
      detail:{}
    }
  }
}
</script>


<style lang="scss" scoped>
@import "~assets/css/product/product_detail.scss"
</style>


