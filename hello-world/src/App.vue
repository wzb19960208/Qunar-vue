<template>
  <div id="app">
    <!--使用header组件-->
    <home-header></home-header>
    <!--使用swiper组件-->
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
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
  import axios from 'axios'
export default {
  name: 'App',
  // 引入header组件,swiper组件
  components: {HomeWeekend, HomeHeader,HomeSwiper,HomeIcons,HomeRecommend},
  data(){
    return{
      // 传给子元素的数据
      city:'',
      swiperList: '',
      iconList:'',
      recommendList:'',
      weekendList: ''
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/static/mock/index.json').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data;

      if(res.ret && res.data){
        // 获取数据后，修改city，双向绑定
        this.city = res.data.city;
        this.swiperList = res.data.swiperList;
        this.iconList = res.data.iconList;
        this.recommendList = res.data.recommendList;
        this.weekendList = res.data.weekendList;

      }
    }
  },
  // 渲染完DOM之后调用的,在这里填数据
  mounted (){
    this.getHomeInfo()
  }
}
</script>

<style>
</style>
