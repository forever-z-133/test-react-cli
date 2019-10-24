import env from 'config/env';

let baseUrl = '';
if (process.env.NODE_ENV === 'production') {
  baseUrl = env.prd.baseUrl;
} else {
  baseUrl = env.sat.baseUrl;
}

export default {
  baseUrl
}