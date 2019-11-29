/*
 * @Author: jinxiaodong
 * @Date: 2019-11-25 10:08:03
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-28 16:04:25
 * @Description: 博客model
 */
import {
  get,
  put
} from '../services/http/axios'

class Article {
  // 获取所有文章
  async getArticles(params = {}) {
    let query = {
      title: params.title || '',
      statusName: params.statusName || '',
      page: params.page || 1,
      limit: 10
    }
    const {
      data
    } = await get('articles', query)
    return data
  }

  // 获取所有精选文章
  async getStarArticles() {
    const res = await get('v1/blog/article/star/articles')
    return res
  }

  // 获取历史归档
  async getArchive() {
    const res = await get('v1/blog/article/archive')
    return res
  }

  // 获取某篇文章详情
  async getArticleDetail(id) {
    const {
      data
    } = await get(`articles/getItem/${id}`)
    return data
  }

  // 获取这篇文章下的所有评论
  async getComments(query) {
    const res = await get('v1/blog/article/get/comment', query)
    return res
  }

  // 点赞文章
  async likeArticle(id) {
    const res = await put('v1/blog/article/like', {
      id
    })
    return res
  }

  // 搜索文章
  async searchArticles(params) {
    let query = {
      page: params.page ? params.page : 0,
      search: params.search
    }
    const res = await get('v1/blog/article/search/articles', query)
    return res
  }
}

export default new Article()