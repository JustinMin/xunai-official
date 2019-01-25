<template>
  <div class="acupoint_container">
    <ul
      v-if="is_body_show"
      class="bodyPart_list"
    >
      <li
        v-for="item in bodylist"
        :key="item.bodyId"
        :class="['body_part_item',item.bodyId===currentBodyId? 'active':'']"
        @click="handelClickBody(item)"
      >
        {{ item.bodyName }}
      </li>
    </ul>
    <ul class="acupoint_list">
      <li
        v-for="item in acupointlist"
        :key="item.acupointId"
        class="acupoint_item"
        @click="handelImageView(item)"
      >
        <img
          v-lazy="item.acupointPic"
          class="acupoint_pic"
        >
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    bodylist:{
      type:Array,
      default(){
        return []
      }
    },
    is_body_show:{
      type:Boolean,
      default(){
        return true;
      }
    },
    acupointlist:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentBodyId:1,
    }
  },
  methods: {
    handelClickBody({bodyId}){
      if(!bodyId) return
      this.currentBodyId = bodyId;
      this.$emit('change',bodyId)
    },
    handelImageView({acupointPic,acupointName}){
      this.$emit('imageView',{acupointPic,acupointName})
    }
  },
}
</script>


<style lang="scss" scoped>
@import "~assets/css/acupoint/acupointList.scss";
</style>
