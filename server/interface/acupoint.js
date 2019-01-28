import Router from 'koa-router';
import {
  getAcupointList,
  getAcupoint,
} from './api/acupoint';

const router = new Router({
  prefix: '/acupoint'
});

router.get('/bodylist', async (ctx) => {
  const data = await getAcupointList();
  ctx.body = data;
});


router.get('/list', async (ctx) => {
  const {
    acupointName
  } = ctx.request.query;
  const data = await getAcupoint({
    acupointName,
  });
  ctx.body = data;
});

export default router;
