<!--
 * @Author: jinxiaodong
 * @Date: 2019-11-30 17:23:51
 * @LastEditors: jinxiaodong
 * @LastEditTime: 2019-11-30 17:31:18
 * @Description: 首页
 -->
<template>
  <div>
    <carousel
      class="carousel-container"
      :showRightArrow="starArticles.length > 1"
      :showLeftArrow="starArticles.length > 1"
      :autoplay="starArticles.length > 1"
    >
      <carousel-item v-for="article in starArticles" :key="article.id">
        <carousel-card :article="article"></carousel-card>
      </carousel-item>
    </carousel>
    <section class="article-wrapper"></section>
  </div>
</template>

<script>
import Carousel from '@/components/base/carousel/carousel';
import CarouselItem from '@/components/base/carousel/carousel-item';
import CarouselCard from '@/components/layout/carousel-card/carousel-card';

const defaultStar = {
  id: 0,
  title: '空',
  category: {
    id: 0,
    name: '空'
  },
  authors: [
    {
      id: 0,
      name: '西麦'
    }
  ],
  created_date: Date.now(),
  cover: 'https://resource.shirmy.me/lighthouse.jpeg'
};

export default {
  name: 'home-page',

  components: {
    Carousel,
    CarouselItem,
    CarouselCard
  },

  async fetch({ store, params }) {
    await store.dispatch('article/getHomeArticles');
  },

  data() {
    return {};
  },

  computed: {
    starArticles() {
      const starArticles = this.$store.state.article.starArticles;
      if (!starArticles.length) {
        return [defaultStar];
      }
      return starArticles;
    }
  },

  methods: {}
};
</script>

<style lang="scss" scoped>
.carousel-container {
  height: calc(100vh - 245px);

  @media (max-width: 1023px) {
    margin-top: -160px;
    height: 100vh;
  }

  @media (max-width: 479px) {
    margin-top: -100px;
  }
}

.article-wrapper {
  position: relative;
  width: 100%;
  margin-top: -10vh;
}
</style>
