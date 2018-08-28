<template>

    <div class="wrapper">
      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="item of swiperList" v-bind:key="item.id">
          <img class="swiper-img" v-bind:src="item.imgUrl">
        </swiper-slide>

        <!--轮播点-->
        <div class="swiper-pagination"  slot="pagination"></div>

      </swiper>
    </div>

</template>

<script>
  export default{
    name : 'HomeSwiper',
    // es6写法
    data(){
      return {
        swiperOption :{
          pagination : '.swiper-pagination',
          loop : true
        },
        swiperList : [
          {id:'01',imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/59/0f1081cd8d155702.jpg_750x200_b78fcf48.jpg'},
          {id:'02',imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/26/16b22c607cdddb02.png_750x200_965508d9.png'},
          {id:'03',imgUrl:'http://img1.qunarzz.com/piao/fusion/1808/57/d3a8edda0e968402.jpg_750x200_65f02b29.jpg'}
          ]
      }
    }
  }

</script>

<style lang="stylus" scoped>

  .wrapper >>> .swiper-pagination-bullet-active
    background : white
  .wrapper
    width : 100%
    height : 0
    padding-bottom : 26.66%
    background : #ccc
  /*让图片大小和div一样大*/
    .swiper-img
      width : 100%
</style>
