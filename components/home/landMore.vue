<template>
  <div 
    class="land_more"
    @click.stop="handelClick"
  >加载更多</div>
</template>

<script>
export default {
  methods: {
    handelClick(){
      this.$emit('landMore')
    }
  },
}
</script>


<style lang="scss" scoped>
.land_more{
  padding-bottom: 34px;
  width: 100%;
  text-align: center;
  font-size:18px;
  font-weight:400;
  color:rgba(144,147,153,1);
  line-height:25px;
  background:rgba(255,255,255,1);
}
</style>
