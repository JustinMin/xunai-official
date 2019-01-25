<template>
  <div class="content_container">
    <div class="title">{{ caseTitle }}</div>
    <div class="userInfo">
      <img 
        :src="userPic"
        class="userPic"
      >
      <div class="user">
        <div class="userName">{{ nickName }}</div>
        <div class="addTime">2019-09-09</div>
      </div>
    </div>
    <pre
      class="content"
      v-html="caseDetail"
    />
  </div>
</template>

<script>

import default_avatar from '@/assets/images/case/default_avatar.png'

export default {
  props:{
    data:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  data(){
    return {
      default_avatar,
    }
  },
  computed: {
    caseDetail(){
      return this.data.caseDetail ? this.data.caseDetail : ''
    },
    caseTitle(){
      return this.data.caseTitle ? this.data.caseTitle : ''
    },
    userPic(){
      return this.data.userPic ? this.data.userPic : default_avatar
    },
    nickName(){
      return this.data.nickName ? this.data.nickName : ''
    },
    addTime(){
      return this.data.addTime ? this.data.addTime  : ''
    }
  },
}
</script>


<style lang="scss" scoped>
@import "@/assets/css/case/content.scss";
</style>

