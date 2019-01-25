<template>
  <div
    v-if="data"
    class="advantage_detail" 
  >
    <div class="title">{{ data.title }}</div>
    <div
      class="content"
    >
      <p
        v-for="item in data.texts"
        :key="item.id"
        class="item"
      >
        {{ item.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    data:{
      type:Object,
      default(){
        return {}
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.advantage_detail {
  padding: 40px 68px 117px;
  .title {
    text-align: center;
    font-size: 23px;
    font-weight: 400;
    color: rgba(51, 51, 51, 1);
    line-height: 31px;
  }
  .content{
      font-size:10px;
      font-weight:400;
      color:rgba(51,51,51,1);
      line-height:16px;
      .item{
        padding-top: 20px;
      }
    }
}
</style>


