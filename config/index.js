/*
 * @Descripttion: 
 * @Author: jinxiaodong
 * @Date: 2020-09-27 19:37:12
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-10-21 10:33:34
 */

const Config = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://nest-api.jxderic.online/eric-api' : 'http://127.0.0.1:3008/eric-api',
  staticPath: 'resource.shirmy.me'
}

export default Config