/**
 * Created by Administrator on 2018/7/5.
 */
import axios from 'axios';
import {
  apiUrl
} from './config';

const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

/* eslint-disable */
async function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    const {
      code,
      data
    } = response.data;
    if (code === '0000') {
      return data || code;
    }
  } else {
    const error = new Error(codeMessage[response.status] || response.statusText);
    error.name = String(response.status);
    throw error;
  }
}

export default async function request(url, params = {}, options) {
  const newOptions = Object.assign({
    method: 'get',
    toastInfo: true,
    withCredentials: true,
  }, options);
  const [_params, _data] = newOptions.method === 'get' ? [params, ''] : ['', params];
  const response = await axios({
    method: newOptions.method,
    params: _params,
    data: _data,
    withCredentials: newOptions.withCredentials,
    url: `${apiUrl}${url}`,
  });
  return checkStatus(response, newOptions.body);
}
