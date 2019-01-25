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
    name
  } = ctx.request.query;
  const data = await getAcupoint({
    acupointName: name,
  });
  ctx.body = data;
});

export default router;
