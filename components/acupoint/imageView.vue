<template>
  <div class="imageView_container">
    <el-dialog 
      :title="title" 
      :visible="dialog_visible"
      width="30%"
      center
      @close="close"
    >
      <img
        v-if="src"
        :src="src"
        alt=""
        width="100%"
      >
    </el-dialog>
  </div>
</template>

<script>
export default {
    props:{
      title:{
          type:String,
          default(){
            return '提示'
          }
      },
      src:{
        type:String,
        default(){
            return ''
        }
      },
      dialog_visible:{
        type:Boolean,
        default(){
          return false;
        }
      }
    },
    methods: {
      close(){
       this.$emit('close')
      }
    },
}
</script>


