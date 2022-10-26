import axios from 'axios'
import router from '@/router'
import { Toast } from 'vant'

// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 10000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  (config) => {
    // do something before request is sent
    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    // if the Status code is not 200, it is judged as an error.

    if (response.status === 302) {
      Toast({
        message: '302 参数错误！',
        type: 'error',
        duration: 5 * 1000
      })
      return
    }

    if (response.status === 500) {
      Toast({
        message: '500 参数错误！',
        type: 'error',
        duration: 5 * 1000
      })
      return
    }

    const res = response.data

    if (res.code === 401) {
      router.replace(`/login`)
      return
    }

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 200) {
      return Promise.reject(new Error(res.msg || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log('err' + error) // for debug
    Toast({
      message: error,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
