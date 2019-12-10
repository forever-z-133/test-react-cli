import request from "./request";

export const login = params => request("post", "api/v1/admin/login", params); // 登录
export const getUser = () => request("get", "api/v1/userinfo/user", null); // 获取登录人信息
