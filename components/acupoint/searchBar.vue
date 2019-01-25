<template>
  <div class="search_container">
    <input
      v-model="searchVal"
      placeholder="请输入需要查询的部位或穴位"
      type="text" 
      class="search_input"
      autofocus
    >
    <img
      v-if="searchVal"
      src="~assets/images/public/delete.png"
      class="reset_icon"
      @click="handelReset"
    >
    <div 
      class="search_btn"
      @click="handelSearch"
    >查询</div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      searchVal:''
    }
  },
  methods: {
    handelSearch(){
       if(!this.searchVal) return;
       const currentVal = this.searchVal;
       this.$emit('change',currentVal)
    },
    handelReset() {
       this.searchVal = ''
       this.$emit('reset','')
    },
  },
}
</script>


<style lang="scss" scoped>
@import "~assets/css/acupoint/searchBar.scss"
</style>
