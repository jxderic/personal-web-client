<!--
 * @Author: jinxiaodong
 * @Date: 2019-11-25 10:08:03
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-30 17:53:59
 * @Description: 文章模块
 -->
<template>
  <div>
    <section class="article-wrapper">
      <article-list
        :articles="articles"
        :loading="loading"
        :total="total"
        @loadMore="onLoadMore"
      ></article-list>
    </section>
  </div>
</template>

<script>
import ArticleList from '@/components/layout/article-list/article-list';

export default {
  name: 'article-page',

  components: {
    ArticleList
  },

  async fetch({ store, params }) {
    await store.dispatch('article/getHomeArticles');
  },

  data() {
    return {
      page: 0
    };
  },

  computed: {
    articles() {
      return this.$store.state.article.articles;
    },

    total() {
      return this.$store.state.article.total;
    },

    loading() {
      return this.$store.state.article.loading;
    }
  },

  methods: {
    onLoadMore() {
      if (this.loading) {
        return;
      }
      this.page++;
      this.$store.dispatch('article/getMoreArticles', {
        page: this.page
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.article-wrapper {
  position: relative;
  width: 100%;
}
</style>
