/*
 * @Description:
 * @Author: Do not edit
 * @Date: 2020-11-03 20:43:07
 * @LastEditors: Do not edit
 * @LastEditTime: 2020-11-03 23:19:22
 */
import axios from 'axios'
import { message } from 'antd'

axios.defaults.timeout = 5000
axios.defaults.baseURL = '/api'

//http request 拦截器
axios.interceptors.request.use(
    config => {
        config.headers = {
            // 'Content-Type':'application/x-www-form-urlencoded'
        }
        return config
    },
    error => {
        message.error('请求出错了， 请稍后重试')
        return Promise.reject(error)
    }
);

//http response 拦截器
axios.interceptors.response.use(
    res => {
        // const data = res.data
        // if (data.code !== 1000) {
        //   message.error(data.desc)
        //   return Promise.reject(data)
        // }
        return res
    },
    error => {
        message.error('请求出错了， 请稍后重试')
        return Promise.reject(error)
    }
)

class http {
    /**
     * url: 请求URL
     * parame: 请求参数
     * otherConfig: 其他配置项
     * Created by icdong on 2019-08-23
     */
    static get(url, params = {}) {
        return new Promise((resolve, reject) => {
            axios.get(url, {
                params
            }).then(res => {
                resolve(res.data);
            })
        })
    }
    static post(url, data = {}) {
        return new Promise((resolve, reject) => {
            axios.post(url, data)
                .then(res => {
                    resolve(res.data)
                })
        })
    }

    static download(url, target = false, fileName = '') {
        try {
            const downloadEl = document.createElement('a')
            downloadEl.href = url
            if (target) downloadEl.target = '_blank'
            if (fileName) downloadEl.download = fileName
            document.body.appendChild(downloadEl)
            downloadEl.click()
            document.body.removeChild(downloadEl)
        } catch (error) {
            window.open(url)
        }
    }
}

export default http
