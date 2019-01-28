<template>
  <div class="acupoint_container">
    <div class="searchBarWrapper">
      <search-bar
        @change="handelSearch"
        @reset="handelReset"
      />
    </div>
    <div class="acupointWrpper">
      <acupoint-list
        :bodylist="bodylist"
        :acupointlist="acupointlist"
        :is_body_show="is_body_show"
        @change="handelChange"
        @imageView="handelView"
      />
    </div>
    <image-view
      :src="src"
      :dialog_visible="visible"
      :title="title"
      @close="handelClose"
    />
  </div>
</template>

<script>
import { stringify } from "qs";
import SearchBar  from "@/components/acupoint/searchBar";
import AcupointList from "@/components/acupoint/acupointList";
import ImageView from "@/components/acupoint/imageView";
import request from '@/service';

export default {
  components:{
    SearchBar,
    AcupointList,
    ImageView,
  },
  async asyncData(ctx) {
    const { data: bodylist } = await ctx.$axios.get('/acupoint/bodylist');
    return {
      bodylist,
      acupointlist: bodylist ? bodylist[0].acupointList:[],
    }
  },
  data(){
    return {
      bodylist:[],
      acupointlist:[],
      src:'',
      visible:false,
      title:'',
      is_body_show:true,
      currentList:[]
    }
  },
  methods: {
     async handelSearch(params){
        const {
          data,
        } = await this.$axios.get(`/acupoint/list?${stringify(params)}`);
        this.is_body_show = false;
        this.acupointlist =  data;
      },
     handelReset(name){
        this.is_body_show = true;
        this.acupointlist = this.currentList;
      },
      handelChange(bodyId){
       if(!bodyId) return;
       const list = [...this.bodylist];
       const curList= this._filter(bodyId,list)
       this.acupointlist= curList ? curList[0].acupointList:[]
       this.currentList = this.acupointlist;
      },
      handelView({acupointPic,acupointName}){
         this.src=  acupointPic;
         this.title= acupointName;
         this.visible = true ;
      },
      handelClose(){
         this.visible =false;
         this.src= ''
      },
      _filter(bodyId,list){
         if(bodyId&&list){
           return list.filter(item=>item.bodyId===bodyId) 
         }else{
           return []
         }
         
      }
  },
}
</script>

<style lang="scss" scoped>
@import "~assets/css/acupoint/index.scss"
</style>

