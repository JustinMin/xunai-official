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
    padding-top: 11px;
    padding-left: 13px;
    padding-bottom: 7px;
    font-size:18px;
    font-weight:400;
    color:rgba(10,32,43,1);
    line-height:25px;
    border-bottom:1px solid rgba(235,238,245,1);
  }
  .list{
      padding-left: 13px;
      padding-bottom: 13px;
      font-size:10px;
      font-weight:400;
      color:rgba(10,32,43,1);
      line-height:14px;
      .item{
        width:113px;
        padding-top: 8px;
        font-size:10px;
        overflow: hidden;
        text-overflow:ellipsis;
        white-space: nowrap;
      }
    }
}
</style>

