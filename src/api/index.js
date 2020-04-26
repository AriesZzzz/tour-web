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

// 根据景点ID查询详情
export const findDetailById = (id) => request(`/json/scenicSpot/findById`, {
    id
})

// 添加订单
export const addOrder = (scenicSpotId, ticketNum) => request(`/json/user/order/add?scenicSpotId=${scenicSpotId}&ticketNum=${ticketNum}`, {}, "POST")

// 请求订单列表
export const reqOrderList = (page, limit) => request(`/json/user/order/list`, {
    page,
    limit
})

// 请求留言列表
export const reqFeedback = (page, limit) => request(`/json/user/feedback/list`,{page, limit})

// 发表留言
export const addComment = (content) => request(`/json/user/feedback/add?content=${content}`, {}, "POST")
