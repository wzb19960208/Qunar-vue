<template>
  <div id="app">
    <!--使用header组件-->
    <home-header></home-header>
    <!--使用swiper组件-->
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-recommend></home-recommend>
    <home-weekend></home-weekend>
  </div>
</template>

<script>
  // 引入header组件
  import HomeHeader from './components/Header'
  // 引入swiper组件,省略了.vue
  import HomeSwiper from './components/Swiper'
  import HomeIcons from './components/Icons'
  import HomeRecommend from './components/Recommend'
  import HomeWeekend from './components/Weekend'
export default {
  name: 'App',
  // 引入header组件,swiper组件
  components: {HomeWeekend, HomeHeader,HomeSwiper,HomeIcons,HomeRecommend}
}
</script>

<style>
</style>
