import Vue from 'vue';
import VueLazyLoad from 'vue-lazyload';

export default () => {
  Vue.use(VueLazyLoad, {
    loading: require('@/assets/images/acupoint/default.png')
  })
}