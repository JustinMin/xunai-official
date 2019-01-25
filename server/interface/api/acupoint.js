import {
  stringify
} from 'qs';
import request from '../utils/request';

export async function getAcupointList() {
  return request(`/xunai-v2/api/common/v2/acupoint-list-group-by-body`)
}

export async function getAcupoint(params={}) {
  return request(`/xunai-v2/api/common/v2/acupoint-list-by-name?${stringify(params)}`)
};
