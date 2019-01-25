import Router from 'koa-router';
import data from '../../assets/data/advantage.json';
import {
  filter
}
from './utils/utils';

const router = new Router({
  prefix: '/product'
});

router.get('/advantage', async (ctx) => {
  const {
    id
  } = ctx.request.query;
  const {
    code,
    list,
  } = data;
  if (data.code === "0000") {
    const res = filter(id, list)[0]
    ctx.body = {
      code,
      data: res
    };
  } else {
    ctx.body = {
      code: '4004',
      msg: '服务端请求出错'
    }
  }
});


export default router;
