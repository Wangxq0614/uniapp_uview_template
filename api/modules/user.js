
// 用户登录
export const login = (data, config = {}) => uni.$u.http.post("/api/user/login", data, { auth:false });

// 获取手机号
export const phone = (data) => uni.$u.http.post("/api/user/getphone", data);

// 获取用户信息
export const userInfo = (data) => uni.$u.http.get("/api/user/userinfo", { params: data });

// 修改用户信息
export const updateUserInfo = (data) => uni.$u.http.post("/api/user/update", data);
