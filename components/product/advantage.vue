<template>
  <div class="advantage_container">
    <div class="head">
      <div class="title">我们的优势</div>
      <div class="line"/>
      <div class="head_text">Our Absolute Advantage</div>
    </div>
    <div class="list">
      <nuxt-link 
        to="/product/1" 
        class="item"
      >
        <div class="advantage_content">
          <div class="line odd"/>
          <div class="text">智能穴位识别</div>
        </div>
        <img 
          src="~assets/images/product/advantage_1.png"
          class="item_icon"
        >
      </nuxt-link>
      <nuxt-link 
        to="/product/2" 
        class="item"
      >
        <img 
          src="~assets/images/product/advantage_2.png"
          class="item_icon"
        >
        <div class="advantage_content">
          <div class="text">治疗案例云享</div>
          <div class="line even"/>
        </div>
      </nuxt-link>
      <nuxt-link 
        to="/product/3"
        class="item"
      >
        <div class="advantage_content">
          <div class="line odd"/>
          <div class="text">养生智库推荐</div>
        </div>
        <img 
          src="~assets/images/product/advantage_3.png"
          class="item_icon"
        >
      </nuxt-link>
      <nuxt-link 
        to="/product/4" 
        class="item"
      >
        <img 
          src="~assets/images/product/advantage_4.png"
          class="item_icon"
        >
        <div class="advantage_content">
          <div class="text">中医精髓数据化</div>
          <div class="line even"/>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.advantage_container{
  margin-top: 116px;
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
      font-size:28px;
      font-weight:400;
      color:rgba(10,32,43,1);
      line-height:40px;
    }
    .line{
      margin-top: 13px;
      width:147px;
      border-bottom:1px solid rgba(192,196,204,1);
    }
    .head_text{
      padding-top: 5px;
      font-size:14px;
      font-weight:400;
      color:rgba(144,147,153,1);
      line-height:20px;
    }
  }
  .list{
    margin-top: 32px;
    width:100%;
    display: flex;
    justify-content: space-between;
    .item{
      position: relative;
      background:rgba(255,255,255,1);
      display: flex;
      flex-direction: column;
      .item_icon{
        width:290px;
        height:332px;
      }
      .advantage_content{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 61px;
        color:rgba(10,32,43,1);
        &:hover{
           background:rgba(67,197,202,1);
           .text{
             color:rgba(255,255,255,1);
           }
           .line{
             background-color: rgba(255,255,255,1)
           }
        }
        .line{
          width:40px;
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
          font-size:20px;
          font-weight:400;
          color:rgba(10,32,43,1);
          line-height:28px;
        }
      }
    }
  }
}
</style>
