import request from '@/utils/request'
import qs from 'qs'

const header = { 'Content-Type': 'application/x-www-form-urlencoded' }

export function login(data) {
  return request({
    headers: header,
    url: '/api/Page/LoginCode',
    method: 'post',
    data: qs.stringify(data)
  })
}
