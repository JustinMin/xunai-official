/**
 * Created by Administrator on 2018/7/5.
 */
export const version = '1.0.0';

export const devUrl = 'https://xunaiv2.szaiaitie.com';

export const prodUrl = 'https://dyxunapi.szaiaitie.com';

export const isProd = process.env.NODE_ENV === "production";

export const apiUrl = isProd ? prodUrl : devUrl;

export const uploadUrl = `${apiUrl}/xunai-v2/api/common/v2/upload`;

export const DEFAULT_IMAGE = "https://xunai-bucket.oss-cn-shenzhen.aliyuncs.com/XunaiBucket/2019/01/04/N306N306N/1546581617489.png";

export const pagination = {
  current: 1,
  pageSize: 100,
};

// https://dyxunapi.szaiaitie.com/xunai-v2/api/health/v2/detail?planId=113&userId=897517&type=0
