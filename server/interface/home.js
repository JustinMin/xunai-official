import Router from 'koa-router';
import {
  getCaseList,
  getCaseDetail,
  getBannerList,
} from './api/home';

const router = new Router({
  prefix: '/home'
})

router.get('/getCaseList', async (ctx) => {
  const params = ctx.request.query;
  const data = await getCaseList(params)
  ctx.body = data;
})

router.get('/getCaseDetail', async (ctx) => {
  const {
    id
  } = ctx.request.query;
  const data = await getCaseDetail(id);
  ctx.body = data;
})

router.get('/getBannerList', async (ctx) => {
  const data = await getBannerList();
  ctx.body = data;
})

export default router;
