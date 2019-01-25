// fade/zoom 等
import 'element-ui/lib/theme-chalk/base.css';
// collapse 展开折叠
import CollapseTransition from 'element-ui/lib/transitions/collapse-transition';
import Vue from 'vue';

export default () => {
  Vue.component(CollapseTransition.name, CollapseTransition)
}
