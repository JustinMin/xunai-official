/**
 * Created by Administrator on 2018/7/13.
 */
import {
  stringify
} from 'qs';
import request from '../utils/request';

export async function getCaseList(params = {}) {
  return request(`/xunai-community/api/h5/v1/official-case-page?${stringify(params)}`);
}

export async function getCaseDetail(id) {
  return request(`/xunai-community/api/h5/v1/official-case-detail?id=${id}`)
}

export async function getBannerList() {
  return request(`/xunai-community/api/h5/v1/official-banner-list`)
}
