<template>
  <div class="about_container">
    <img 
      src="~assets/images/about/app_banner.png" 
      class="banner"
    >
    <div class="content">
      <section class="item">
        <div class="item_content">
          <div class="item_title">全新改版</div>
          <div class="item_slogan">沟通连接你我的世界</div>
          <div class="item_text">首页一键查找穴位和病症，3D模特穴位演示，详尽的调理方案，具体的病症介绍实时更新。每一天，我们都在为你的健康护航。</div>
        </div>
        <img src="~assets/images/about/app_1.png">
      </section>
      <section class="item">
        <img src="~assets/images/about/app_2.png">
        <div class="item_content">
          <div class="item_title">社区</div>
          <div class="item_slogan">沟通连接你我的世界</div>
        </div>
      </section>
      <section class="item">
        <div class="item_content">
          <div class="item_title">每日天气</div>
          <div class="item_slogan">健康养生每日提示</div>
          <div class="item_text">根据每日气温变化来推荐穴位，一点生活小常识，精心保养受益一生。</div>
        </div>
        <img src="~assets/images/about/app_3.png">
      </section>
      <section class="item">
        <img src="~assets/images/about/app_4.png">
        <div class="item_content">
          <div class="item_title">专属案例</div>
          <div class="item_slogan">分享就是帮助别人</div>
          <div class="item_text">地球上有70亿人，你不是孤独一个，在这里，有很多人能帮你，他们分享了自己的有关健康的故事，各种常见病症、男女小儿等社区的优秀案例能让你在生活的困惑中找到出路。</div>
        </div>
      </section>
      <section class="item">
        <div class="item_content">
          <div class="item_title">精品问答</div>
          <div class="item_slogan">一搜直达，看尽干货</div>
          <div class="item_text">专家撰写各种病症相关干货文章，详细解读你的健康困扰。</div>
        </div>
        <img src="~assets/images/about/app_5.png">
      </section>
      <section class="item">
        <img src="~assets/images/about/app_6.png">
        <div class="item_content">
          <div class="item_title">今日步数</div>
          <div class="item_slogan">走出健康体态</div>
        </div>
      </section>
      <section class="item">
        <div class="item_content">
          <div class="item_title">艾呼吸</div>
          <div class="item_slogan">呼吸养生，健康好身体</div>
          <div class="item_text">更多科学的呼吸疗法，改善你的体内循环，每一天更健康。</div>
        </div>
        <img src="~assets/images/about/app_7.jpg">
      </section>
      <section class="item">
        <img src="~assets/images/about/app_8.jpg">
        <div class="item_content">
          <div class="item_title">艾睡眠</div>
          <div class="item_slogan">音乐疗法深度睡眠</div>
          <div class="item_text">让你舒缓情绪、有助于睡眠的音乐陆续上线，人在听觉、触觉或感知上受到一些刺激的时候，大脑和脊柱所产生的一种酥酥麻麻痒痒的感觉，适当的刺激更有助于你放松自己压力。</div>
        </div>
      </section>
      <section class="item">
        <div class="item_content">
          <div class="item_title">健康计划</div>
          <div class="item_slogan">数字健康管理</div>
        </div>
        <img src="~assets/images/about/app_9.jpg">
      </section>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.about_container{
  width: 100%;
  display: flex;
  flex-direction: column;
  background:rgba(255,255,255,1);
  .banner{
    width: 100%;
  }
  .content{
    padding-top: 63px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 78px;
    .item{
      width: 65%;
      display: flex;
      flex-wrap: wrap;
      justify-content:space-between;
      align-items: center;
      margin-bottom: 63px;
      .item_title{
        font-size:74px;
        font-weight:600;
        color:rgba(10,32,43,1);
        line-height:104px;
      }
      .item_slogan{
        padding-top: 4px;
        font-size:35px;
        font-weight:400;
        color:rgba(144,147,153,1);
        line-height:49px;
      }
      .item_text{
        padding-top: 16px;
        width:306px;
        height:128px;
        font-size:16px;
        font-weight:400;
        color:rgba(51,51,51,1);
        line-height:22px;
      }
    }
  }
}
</style>

