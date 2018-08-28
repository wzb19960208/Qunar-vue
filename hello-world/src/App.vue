<template>
  <div id="app">
    <!--使用header组件-->
    <home-header></home-header>
    <!--使用swiper组件-->
    <home-swiper></home-swiper>
    <p>test</p>
  </div>
</template>

<script>
  // 引入header组件
  import HomeHeader from './components/Header'
  // 引入swiper组件,省略了.vue
  import HomeSwiper from './components/Swiper'
export default {
  name: 'App',
  // 引入header组件,swiper组件
  components: {HomeHeader,HomeSwiper}
}
</script>

<style>
</style>
