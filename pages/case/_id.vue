<template>
  <div class="caseDetail_container">
    <div class="left">
      <ai-link :linkname ="linkname" />
      <case-content :data="caseDetail"/>
      <case-tag :tags="tags"/>
    </div>
    <div class="right">
      <ai-acupoint/>
      <ai-advert/>
      <ai-interest
        :interestlist="interestList"
      />
      <ai-download/>
    </div>
  </div>
</template>

<script>
import {
  stringify
} from 'qs';
import AiAcupoint from "@/components/home/acupoint";
import AiAdvert from "@/components/home/advert";
import AiDownload from "@/components/home/download";
import AiInterest from "@/components/home/interest";
import AiLink from "@/components/case/link";
import CaseContent from "@/components/case/content";
import CaseTag from "@/components/case/tag";

export default {
 async asyncData(ctx) {
   const { params } =ctx;
    const { data:caseDetail } = await ctx.$axios.get(`/home/getCaseDetail?${stringify(params)}`)
     const CaseParams={
      current:1,
      pageSize:20,
    };
    const { data:{
      rows,
      total,
    } } = await ctx.$axios.get(`/home/getCaseList?${stringify(CaseParams)}`)
    const interestList = total >=20 ? [...rows].slice(10,20):[...rows].slice(0,10) ;
    return {
      caseDetail,
      interestList
    }
  },
  validate({ params }) {
    // 必须是number类型
    return /^\d+$/.test(params.id);
  },
  components: {
    AiAcupoint,
    AiAdvert,
    AiDownload,
    AiInterest,
    AiLink,
    CaseContent,
    CaseTag
  },
  data(){
    return {
      caseDetail:{},
      interestList:[],
    }
  },
  computed: {
    linkname(){
      return this.caseDetail.caseTitle ? this.caseDetail.caseTitle :' '
    },
    tags(){
      return this.caseDetail.tags ? this.caseDetail.tags.split(',') : []
    }
  },
};
</script>


<style lang="scss" scoped>
@import "@/assets/css/case/index.scss";
</style>

