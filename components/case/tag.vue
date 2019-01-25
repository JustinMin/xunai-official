<template>
  <div class="tag_list">
    <div
      v-for="item in tags"
      :key="item.id"
      class="item"
    ># {{ item }} </div>
  </div>
</template>

<script>
export default {
  props:{
    tags:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import "@/assets/css/case/tag.scss";
</style>

