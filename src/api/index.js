import request from './request'
// api地址
const BASE = 'http://120.24.186.190:8080/travel'
// 注册
export const reqRegister = (number, password) => request(`/json/register/direct?number=${number}&password=${password}`, {}, 'POST')
// 登录
export const reqLogin = (number, password) => request(`/json/login/user`, {
    number,
    password
})
// 景点列表
export const reqTourInfo = ( name, page, limit = 8) => request(`/json/scenicSpot/list`, {
    page,
    limit,
    name
})
