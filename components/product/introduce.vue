<template>
  <div class="introduce_container">
    <div class="item first_item">
      <div class="item_title">产品介绍</div>
      <div class="split_line"/>
      <div class="item_text">Product Introduction</div>
    </div>
    <div 
      class="item"
      @mouseenter="changeOver(1)"
      @mouseleave="changeOut(1)"
    >
      <img
        v-if="currentIndex!==1"
        src="~assets/images/product/product_voice.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==1"
        class="item_text"
      >语音识别
      </div>
      <div 
        v-if="currentIndex===1"
        class="item_content"
      >
        智能中医小艾，小艾可进行智能语音的对聊，包括可对平台的各个功能的检索，病症治疗方式的问答，日常问题的交流，更多的知识，小艾也在不断学习中。小艾--致力做一个你的智能健康小管家。
      </div>
    </div>
    <div 
      class="item"
      @mouseenter="changeOver(2)"
      @mouseleave="changeOut(2)"
    >
      <img
        v-if="currentIndex!==2"
        src="~assets/images/product/product_doctor.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==2"
        class="item_text"
      >智能中医</div>
      <div 
        v-if="currentIndex===2"
        class="item_content"
      >
        用现代智能技术将中医中所讲的穴位及中医治疗病症的方法数据化呈现出来，对穴位的身体部位的详细注解；对中医的治疗方式进行古籍提取。让用户在智能时代感受中医的博大精深。
      </div>
    </div>
    <div 
      class="item"
      @mouseenter="changeOver(3)"
      @mouseleave="changeOut(3)"
    >
      <img
        v-if="currentIndex!==3"
        src="~assets/images/product/product_ar.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==3"
        class="item_text"
      >
        AR识别
      </div>
      <div 
        v-if="currentIndex===3"
        class="item_content"
      >
        通过3D建模将中草药植物以AR技术呈现出来，可以放大缩小，360度观看植物的每一个细节，植物的药用价值详细科普，将古老药用植物的从二维书本到三维视角，一键可查。
      </div>
    </div>
    <div 
      class="item"
      @mouseenter="changeOver(4)"
      @mouseleave="changeOut(4)"
    >
      <img
        v-if="currentIndex!==4"
        src="~assets/images/product/product_3d.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==4"
        class="item_text"
      >生物识别</div>
      <div 
        v-if="currentIndex===4"
        class="item_content"
      >
        运用大数据算法技术，将中医古老的穴位定点与拍照技术结合，通过人体的全身部位拍照进行人体的穴位识别，也可选择部位分离识别，将生物识别技术应用在博大穴位知识上，让中医可以亲近更多人。
      </div>
    </div>
    <div 
      class="item"
      @mouseenter="changeOver(5)"
      @mouseleave="changeOut(5)"
    >
      <img
        v-if="currentIndex!==5" 
        src="~assets/images/product/product_community.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==5"
        class="item_text"
      >
        智能社区
      </div>
      <div 
        v-if="currentIndex===5"
        class="item_content"
      >
        用户在社区探讨关注的问题，获取自己个性关注的病症情况，及健康咨询。用户在其中不仅仅是观光者也是创造者，将自己对问题的看法及治疗的案例进行分享，用智慧来共造一个社区。
      </div>
    </div>
    <div 
      class="item"
      @mouseenter="changeOver(6)"
      @mouseleave="changeOut(6)"
    >
      <img
        v-if="currentIndex!==6"
        src="~assets/images/product/product_health.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==6"
        class="item_text"
      >健康监测</div>
      <div 
        v-if="currentIndex===6"
        class="item_content"
      >
        将某种病症的呈现方式，以问题来展现出来，以问答的形式来结合自身日常，看是否契合自身情况进行病症的检测，随时随地，安全快速。
      </div>
    </div>
    <div
      class="item"
      @mouseenter="changeOver(7)"
      @mouseleave="changeOut(7)"
    >
      <img
        v-if="currentIndex!==7"
        src="~assets/images/product/product_more.png"
        class="item_icon"
      >
      <div
        v-if="currentIndex!==7"
        class="item_text"
      >探索更多
      </div>
      <div 
        v-if="currentIndex===7"
        class="item_content"
      >
        寻艾里还有更多使你健康的生活方式，失眠之后的治愈音乐，各种作用的呼吸方式，更加健康的生活理念...寻艾，从现在出发，让智能帮助我们看见未来。
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      currentIndex:'',
    }
  },
  methods: {
    changeOver(index){
      this.currentIndex = index ;
    },
    changeOut(index){
      this.currentIndex = '' ;
    }
  },
}
</script>


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
    &:hover{
      background:rgba(255,255,255,1);
      box-shadow:0px 3px 6px 0px rgba(199,199,199,1);
    }
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
    .item_content{
      padding: 0 10px;
      font-size:10px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:16px;
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

