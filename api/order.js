import request from '@/utils/requestUtil'

export function generateConfirmOrder(data) {
	return request({
		method: 'POST',
		url: '/portal/order/generateConfirmOrder',
		data: data
	})
}

export function generateOrder(data) {
	return request({
		method: 'POST',
		url: '/portal/order/generateOrder',
		data: data
	})
}

export function fetchOrderList(params) {
	return request({
		method: 'GET',
		url: '/portal/order/list',
		params: params
	})
}

export function payOrderSuccess(data) {
	return request({
		method: 'POST',
		url: '/portal/order/paySuccess',
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		data: data
	})
}

export function fetchOrderDetail(orderId) {
	return request({
		method: 'GET',
		url: `/portal/order/detail/${orderId}`
	})
}

export function cancelUserOrder(data) {
	return request({
		method: 'POST',
		url: '/portal/order/cancelUserOrder',
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		data: data
	})
}

export function confirmReceiveOrder(data) {
	return request({
		method: 'POST',
		url: '/portal/order/confirmReceiveOrder',
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		data: data
	})
}

export function deleteUserOrder(data) {
	return request({
		method: 'POST',
		url: '/portal/order/deleteOrder',
		header: {
			'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
		},
		data: data
	})
}

export function fetchAliapyStatus(params) {
	return request({
		method: 'GET',
		url: '/alipay/query',
		params: params
	})
}
