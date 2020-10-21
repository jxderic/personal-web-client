/*
 * @Author: jinxiaodong
 * @Date: 2019-11-25 10:08:03
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2020-10-21 09:53:11
 * @Description: 配置文件
 */
const Config = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'https://nest-api.jxderic.online/eric-api' : 'http://127.0.0.1:3008/eric-api',
  staticPath: 'resource.shirmy.me'
}

export default Config