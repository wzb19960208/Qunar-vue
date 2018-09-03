<template>
  <router-link
    tag="div"
    :to="'/show/'"
    class="banner">
    <div class="img-wrapper">
      <img :src="banner.cover" class="banner-img"/>
    </div>
    <div class="banner-info">
      <div class="banner-number">
        <i class="iconfont banner-iconfont">&#xe678;</i>
        <i class="banner-text">{{banner.number}}</i>
      </div>
      <div class="banner-title">
        {{banner.title}}
      </div>
    </div>
  </router-link>
</template>

<script>
  export default {
    name : 'DetailBanner',
    props:['banner']
  }
</script>

<style scoped>

  .banner{
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 55%;
  }

  .img-wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 55%;
  }

  .banner-img{
    width: 100%;
  }

  .banner-info{
    width: 100%;
    position: absolute;
    height: .8rem;
    bottom: 0;
    color: #fff;
    background: linear-gradient(180deg,rgba(0,0,0,0),rgba(0,0,0,0.8));
  }


  .banner-title{
    position: absolute;
    left: .2rem;
    bottom: .36rem;
    font-size: .36rem;
    line-height: .4rem;
    text-shadow: 0 1px 2px rgba(0,0,0,0.70);
  }

  .banner-number{
    position: absolute;
    bottom: .86rem;
    width: 1.2rem;
    height: .4rem;
    background: rgba(0,0,0,0.5);
    border-radius: .2rem;
    text-align: center;
    font-size: .24rem;
    line-height: .4rem;
    margin-left: .2rem;
  }

  .banner-iconfont{
    font-size: .1rem;
  }

  .banner-text{
    margin-left: .05rem;
  }

</style>
