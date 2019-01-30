<template>
  <div class="acupoint-container">
    <div class="title">
      <div class="text">优选案例</div>
      <div class="search_bar">
        <input
          v-model="searchVal"
          type="text"
          class="search_input"
          placeholder="请输入案例名称"
        >
        <img
          v-if="searchVal"
          class="reset_icon"
          src="~assets/images/public/delete.png"
          @click="handelReset"
        >
        <div 
          class="search_btn" 
          @click="handelSearch"
        >
          <div class="search_icon"/>
        </div>
      </div>
    </div>
    <nuxt-link
      v-for="(item,index) in caselist"
      :key="index"
      :to="item.id|prefix" 
      class="item"
    >
      <div class="acupoint_picture">
        <img
          v-lazy="item.casePic"
          class="current_pic"
        >
      </div>
      <div class="item_content">
        <div class="item_title"> {{ item.caseTitle }} </div>
        <p class="item_text">{{ item.caseDetail| limit }} </p>
        <div class="item_footer">
          <div class="item_footer_content">
            <img 
              :src="item.userPic" 
              class="item_footer_logo"
            >
            <div class="item_copany">{{ item.nickName }}</div>
          </div>
          <div class="item_footer_date">{{ item.addTime }}</div>
        </div>
      </div>
    </nuxt-link>
    <slot
      name="landMore"
    />
  </div>
</template>

<script>
export default {
 filters:{
   limit(value) {
    if (!value) return ''
    value = value.toString()
    return value.length >20 ? value.substring(0,50)+'...':value
  },
  prefix(id){
    return `/case/${id}`
  }
 },
 props:{
    caselist:{
      type:Array,
      default(){
        return []
      }
    },
    total:{
      type:Number,
      default(){
        return 0
      }
    }
 },
 data(){
   return {
     searchVal:''
   }
 },
 methods: {
   handelSearch(){
     if(!this._hasSearchValue())  return;
     const currentVal = this.searchVal;
     this.$emit('search',currentVal)
   },
   handelReset(){
     this._rersetValue()
     this.$emit('search','')
   },
   _rersetValue(){
     this.searchVal = ''
   },
   _hasSearchValue(){
     return this.searchVal ? true : false;
   }
 },
}
</script>


<style lang="scss" scoped>
.acupoint-container {
  box-sizing: border-box;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 3px 6px 0px rgba(199, 199, 199, 1);
  .title {
    display: flex;
    justify-content: space-between;
    padding-left: 48px;
    padding-top: 35px;
    padding-right: 43px;
    padding-bottom: 40px;
    font-size:26px;
    font-weight: 600;
    color: rgba(10, 32, 43, 1);
    line-height: 40px;
    .search_bar{
      display: flex;
      height: 40px;
      position: relative;
      .search_input{
        border: none;
        outline: none;
        width:226px;
        height:100%;
        background:rgba(238,243,245,1);
        padding-left: 10px;
        font-size: 18px;
        &::-webkit-input-placeholder {
          font-size:18px;
          font-weight:400;
          color:rgba(192,196,204,1);
          line-height:25px;
          padding-left: 10px;
        }
      }
      .reset_icon{
        position:absolute;
        right:60px;
        z-index: 999;
        width: 40px;
        height: 40px;
      }
      .search_btn{
        display: flex;
        box-sizing: border-box;
        text-align: center;
        justify-items: center;
        align-items: center;
        padding: 6px 16px;
        height:100%;
        background:rgba(67,197,202,1);
        .search_icon{
          width: 20px;
          height: 20px;
          background-size: 20px 20px;
          background-repeat: no-repeat;
          background-image: url("~assets/images/index/search.png")
        }
      }
    }
  }
  .item {
    padding-left: 48px;
    padding-bottom: 38px;
    padding-right: 44px;
    display: flex;
    justify-content:space-between;
    align-items: center;
    .acupoint_picture {
      width: 241px;
      height: 157px;
      .current_pic{
        width: 241px;
        height: 157px;
      }
    }
    .item_content {
      padding-left: 20px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      .item_title{
        width:100%;
        font-size:18px;
        font-weight:600;
        color:rgba(10,32,43,1);
        line-height:32px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
      .item_text{
        width:100%;
        font-size:18px;
        font-weight:400;
        color:rgba(96,98,102,1);
        line-height:29px;
        word-wrap: break-word;
      }
      .item_footer{
        margin-top: 18px;
        width:100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        font-size:16px;
        font-weight:400;
        color:rgba(144,147,153,1);
        line-height:22px;
        .item_footer_content{
          display: flex;
          justify-content: center;
          align-items: center;
          .item_footer_logo{
            margin-top: -2px;
            width:30px;
            height:30px;
            border-radius: 50%;
          }
          .item_copany{
            padding-left: 6px;
          }
        }
      }
    }
  }
}
</style>

