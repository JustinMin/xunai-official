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
  margin-top: 20px;
  width: 100%;
  background:rgba(255,255,255,1);
  box-shadow:0px 5px 10px 0px rgba(199,199,199,1);
  .title{
    padding: 20px 0 20px 11px;
    font-size:28px;
    font-weight:400;
    color:rgba(10,32,43,1);
    line-height:40px;
    border-bottom:1px solid rgba(235,238,245,1);
  }
  .content{
      padding-top: 48px;
      padding-bottom: 45px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .qrcode{
         width: 144px;
         height: 144px;
         margin-bottom: 9px;
      }
      .text{
        font-size:14px;
        font-weight:400;
        color:rgba(10,32,43,1);
        line-height:20px;
      }
    }
}
</style>

