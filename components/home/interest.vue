<template>
  <div class="interest-container">
    <div class="title">猜你喜欢</div>
    <ul class="list">
      <li
        v-for="(item,index) in interestlist"
        :key="item.id"
        class="item"
        @click.stop="handelClick(item.id)"
      > {{ index+1 }} 、{{ item.caseTitle }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    interestlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  methods: {
    handelClick(id){
      this.$router.push({
        path:`/case/${id}`
      })
    }
  },
}
</script>

<style lang="scss" scoped>
.interest-container{
  box-sizing: border-box;
  background:rgba(255,255,255,1);
  box-shadow:0px 3px 6px 0px rgba(199,199,199,1);
  .title{
    padding-top: 18px;
    padding-left: 20px;
    padding-bottom: 11px;
    font-size:28px;
    font-weight:400;
    color:rgba(10,32,43,1);
    line-height:40px;
    border-bottom:1px solid rgba(235,238,245,1);
  }
  .list{
      padding-top: 20px;
      padding-bottom: 21px;
      padding-right: 20px;
      padding-left: 20px;
      font-weight:400;
      color:rgba(10,32,43,1);
      line-height:14px;
      .item{
        padding-top: 13px;
        font-size:16px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
}
</style>

