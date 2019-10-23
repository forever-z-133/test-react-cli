import request from './request';

export default {
  login: (params) => request('post', 'api/v1/admin/login', params),  // 登录
  getUser: () => request('get', 'api/v1/userinfo/user', null),  // 获取登录人信息
}