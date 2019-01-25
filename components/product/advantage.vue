<template>
  <div class="advantage_container">
    <div class="head">
      <div class="title">我们的优势</div>
      <div class="line"/>
      <div class="head_text">Our Absolute Advantage</div>
    </div>
    <div class="list">
      <div class="item">
        <div class="advantage_content">
          <div class="line odd"/>
          <div class="text">智能穴位识别</div>
        </div>
        <img 
          src="~assets/images/product/advantage_1.png"
          class="item_icon"
        >
      </div>
      <div class="item">
        <img 
          src="~assets/images/product/advantage_2.png"
          class="item_icon"
        >
        <div class="advantage_content">
          <div class="text">治疗案例云享</div>
          <div class="line even"/>
        </div>
      </div>
      <div class="item">
        <div class="advantage_content">
          <div class="line odd"/>
          <div class="text">养生智库推荐</div>
        </div>
        <img 
          src="~assets/images/product/advantage_3.png"
          class="item_icon"
        >
      </div>
      <div class="item">
        <img 
          src="~assets/images/product/advantage_4.png"
          class="item_icon"
        >
        <div class="advantage_content">
          <div class="text">中医精髓数据化</div>
          <div class="line even"/>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantage_container{
  margin-top: 73px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .head{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .title{
      text-align: center;
      font-size:18px;
      font-weight:400;
      color:rgba(10,32,43,1);
      line-height:25px;
    }
    .line{
      margin-top: 8px;
      width:92px;
      border-bottom:1px solid rgba(192,196,204,1);
    }
    .head_text{
      padding-top: 5px;
      font-size:9px;
      font-weight:400;
      color:rgba(144,147,153,1);
      line-height:13px;
    }
  }
  .list{
    margin-top: 25px;
    width:100%;
    display: flex;
    justify-content: space-between;
    .item{
      position: relative;
      background:rgba(255,255,255,1);
      display: flex;
      flex-direction: column;
      .item_icon{
        width:175px;
        height:200px;
      }
      .advantage_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 61px;
        .line{
          width:25px;
          height:1px;
          background:rgba(67,197,202,1);
          border-radius:1px;
          &.odd{
            margin-bottom: 9px;
          }
          &.even{
            margin-top: 9px;
          }
        }
        .text{
          font-size:13px;
          font-weight:400;
          color:rgba(10,32,43,1);
          line-height:18px;
        }
      }
    }
  }
}
</style>
