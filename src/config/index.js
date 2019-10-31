import env from 'config/env';

// 接口与本站链接前缀
let baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = env.prd.baseUrl;
} else {
  baseUrl = env.sat.baseUrl;
}

export default {
  baseUrl
}