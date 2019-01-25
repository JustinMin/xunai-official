<template>
  <div class="download_container">
    <div class="title">下载</div>
    <div class="content">
      <img 
        src="~assets/images/index/download.png"
        class="qrcode"
      >
      <div class="text">扫描二维码</div>
      <div class="text">即可下载寻艾APP</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.download_container{
  box-sizing: border-box;
  margin-top: 13px;
  width: 100%;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 6px 0px rgba(199,199,199,1);
  .title{
    padding: 13px 0 7px 13px;
    font-size:18px;
    font-weight:400;
    color:rgba(10,32,43,1);
    border-bottom:1px solid rgba(235,238,245,1);
  }
  .content{
      padding-top: 30px;
      padding-bottom: 28px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .qrcode{
         width: 93px;
         height: 90px;
         margin-bottom: 9px;
      }
      .text{
        font-size:9px;
        font-weight:400;
        color:rgba(10,32,43,1);
        line-height:13px;
      }
    }
}
</style>

