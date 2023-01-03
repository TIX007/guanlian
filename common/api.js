import {baseUrl} from './config.js'
const { http } = uni.$u
// 获取菜单
export const fetchMenu = (params, config = {}) => http.post('/ebapi/public_api/index', params, config)

export function list(id){
	return uni.request({
		url: `${baseUrl}/playlist/detail?id=${id}`,
		method:'GET'
	});
}