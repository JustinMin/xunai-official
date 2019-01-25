<template>
  <div class="introduce_container">
    <div class="item first_item">
      <div class="item_title">产品介绍</div>
      <div class="split_line"/>
      <div class="item_text">Product Introduction</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_voice.png"
        class="item_icon"
      >
      <div class="item_text">语音识别</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_doctor.png"
        class="item_icon"
      >
      <div class="item_text">智能中医</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_ar.png"
        class="item_icon"
      >
      <div class="item_text">AR识别</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_3d.png"
        class="item_icon"
      >
      <div class="item_text">生物识别</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_community.png"
        class="item_icon"
      >
      <div class="item_text">智能社区</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_health.png"
        class="item_icon"
      >
      <div class="item_text">健康监测</div>
    </div>
    <div class="item">
      <img 
        src="~assets/images/product/product_more.png"
        class="item_icon"
      >
      <div class="item_text">探索更多</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.introduce_container{
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .item{
    margin-top: 13px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width:169px;
    height:150px;
    background:linear-gradient(360deg,rgba(14,114,151,1) 0%,rgba(67,197,202,1) 100%);
    .item_icon{
      width: 57px;
      height: 63px;
    }
    .item_text{
      padding-top: 8px;
      font-size:10px;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:14px;
    }
    &.first_item{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background:rgba(40,87,107,1);
      .item_title{
        font-size:18px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:25px;
      }
      .split_line{
        margin-top: 8px;
        width:92px;
        border-bottom:1px solid rgba(255,255,255,1);
      }
      .item_text{
        padding-top: 5px;
        font-size:9px;
        font-weight:400;
        color:rgba(255,255,255,1);
        line-height:13px;
      }
    }
  }
}
</style>

