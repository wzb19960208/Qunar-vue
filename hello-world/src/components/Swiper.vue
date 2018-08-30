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
    props:['swiperList'],
    // es6写法
    data(){
      return {
        swiperOption :{
          pagination : '.swiper-pagination',
          loop : true
        }
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
