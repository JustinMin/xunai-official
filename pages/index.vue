<template>
  <section class="container">
    <ai-carousel :list="bannerList"/>
    <div class="content">
      <div class="left">
        <ai-case 
          :caselist="caseList" 
          :total="caseTotals" 
          @search="onSearch"
        >
          <land-more
            v-if="hasMore"
            slot="landMore" 
            @landMore="handelLandMore"
          />
        </ai-case>
      </div>
      <div class="right">
        <ai-acupoint/>
        <ai-advert/>
        <ai-interest :interestlist="interestList"/>
        <ai-download/>
      </div>
    </div>
  </section>
</template>

<script>
import { stringify } from "qs";
import request from "@/service";
import AiCarousel from "@/components/home/carousel";
import AiCase from "@/components/home/case";
import AiAcupoint from "@/components/home/acupoint";
import AiAdvert from "@/components/home/advert";
import AiDownload from "@/components/home/download";
import AiInterest from "@/components/home/interest";
import LandMore from "@/components/home/landMore";

export default {
  components: {
    AiCarousel,
    AiAcupoint,
    AiAdvert,
    AiCase,
    AiDownload,
    AiInterest,
    LandMore
  },
  async asyncData(ctx) {
    const { data: bannerList } = await ctx.$axios.get("/home/getBannerList");
    const params = {
      current: 1,
      pageSize: 20
    };
    const {
      data: { rows, total }
    } = await ctx.$axios.get(`/home/getCaseList?${stringify(params)}`);
    const interestList =
      total >= 20 ? [...rows].slice(10, 20) : [...rows].slice(0, 10);
    return {
      bannerList,
      interestList,
      caseList: total >= 20 ? [...rows].slice(0, 10) : rows,
      caseTotals: total
    };
  },
  data() {
    return {
      isLoading:false,
      current:1,
      pageSize:10,
      searchVal:'',
      caseTotals:0,
      noResult:false,
      caseList: [],
      bannerList: [],
      interestList: []
    };
  },
   computed: {
    hasMore() {
      if (this.caseList.length >= this.caseTotals) {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    isLoading(newVal){
      if(newVal){
      this.loading = this.$loading({
          lock: true,
          text: '拼命加载中',
          spinner: 'el-icon-loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
      }else{
        if(this.loading){
          this.loading.close();
        }
      }
    }
  },
  methods: {
    async handelSearch({
      caseTitle,
      pageSize,
      current,
    }) {
      this.searchVal = caseTitle
      const params = {
        current,
        pageSize,
        caseTitle,
      };
      this.locked();
      const { rows, total } = await request.get(`/home/getCaseList?${stringify(params)}`);
      this.unlocked();
      this.caseList = rows;
      this.setTotal(total);
    },
    handelLandMore() {
      if(this.isLocked()) return; /* 如果正在请求 则锁住请求 */
       if (this.hasMore) {
        this.locked(); /* 使用锁 锁住 */
        this.handelSearch({
         current:1,
         pageSize: this.getCurrentStart(), 
         caseTitle: this.searchValue
        })
      }
    },
    onSearch(caseTitle){
      this.handelSearch({
          caseTitle,
          current:1,
          pageSize:10,
      })
    },
    getCurrentStart() {
      return this.caseList.length + 10;
    },
    setMoreData(array = []) {
      this.caseList = [...this.caseList, ...array];
    },
    setTotal(total = 0) {
      this.caseTotals = total;
      if(total===0){
        this._showNoResult()
      }
    },
    isLocked() {
      return this.isLoading ? true : false;
    },
    locked() {
      this.isLoading = true
    },
    unlocked() {
      this.isLoading = false;
    },
    _showNoResult(){
      this.noResult = true;
    },
    _hasSearchValue(){
     return this.searchVal ? true : false;
   }
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/css/home/index.scss";
</style>
