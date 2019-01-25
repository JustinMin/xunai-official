<template>
  <div class="acupoint-content">
    <div 
      class="acupoint_title" 
      @click="handelClick"
    >
      <img 
        src="~assets/images/index/home_points.png"
        class="find_point_icon"
      >
      <div 
        class="find"
      >
        找穴位
      </div>
      <div class="total">421个穴位</div>
    </div>
    <ul class="acupoint_list">
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
      <li class="item">
        <div class="acupoint_name">水沟穴</div>
        <div class="body_name">嘴巴</div>
      </li>
    </ul>
    <div 
      class="find_more"
      @click="handelClick"
    >
      更多穴位
      <img 
        src="~assets/images/index/more.png"
        class="more_icon"
      >
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handelClick(){
      this.$router.push({
        path:'/acupoint'
      })
    }
  },
}
</script>


<style lang="scss" scoped>
.acupoint-content{
  width: 100%;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 6px 0px rgba(199,199,199,1);
  .acupoint_title{
    width: 100%;
    display: flex;
    padding-top: 11px;
    padding-bottom: 8px;
    flex-direction: column;
    box-sizing: border-box;
    justify-content: center;
    align-items: center;
    width: 100%;
    background:rgba(112,143,226,1);
    color:rgba(255,255,255,1);
    .find_point_icon{
      width: 56px;
      height: 56px;
    }
    .find{
      padding-top: 4px;
      font-size:16px;
      font-weight:600;
      color:rgba(255,255,255,1);
      line-height:23px;
    }
    .total{
      padding-top: 4px;
      font-size:9px;
      font-weight:400;
      color:rgba(255,255,255,1);
      line-height:13px;
    }
  }
  .find_more{
    text-align: center;
    margin: 0 6px;
    line-height: 30px;
    font-size:9px;
    font-weight:400;
    color:rgba(10,32,43,1);
    height: 30px;
    border-top:1px solid rgba(192,196,204,1);
    .more_icon{
      margin-left: 3px;
    }
  }
  .acupoint_list{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      box-sizing: border-box;
      background:rgba(255,255,255,1);
      padding-bottom: 4px;
      .item{
        width: 50%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .acupoint_name{
          padding-top: 19px;
          font-size:10px;
          font-weight:400;
          color:rgba(10,32,43,1);
          line-height:14px;
        }
        .body_name{
          padding-top: 6px;
          padding-bottom: 9px;
          font-size:9px;
          font-weight:400;
          color:rgba(144,147,153,1);
          line-height:13px;
        }
      }
    }
}
</style>

