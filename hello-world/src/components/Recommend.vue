<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>

      <router-link
        :to="'/detail/'+item.id"
        tag="li"
        v-for="item in recommendList" :key="item.id"
        class="item border-bottom">
        <!--图片部分-->
        <!--可以看到，图片都是用一个div去包裹，然后设置div大小，让图片width=100%-->
        <!--图片都选择公网地址-->
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl">
        </div>
        <!--文字部分-->
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <p class="item-price">￥<span>{{item.price}}</span>起</p>
        </div>
      </router-link>

    </ul>
  </div>
</template>

<script>
export default {
  name : 'HomeRecommend',
  props:['recommendList'],
  data(){
    return{

    }
  }

}
</script>

<style scoped>
  .recommend-title{
    line-height : .8rem;
    background : #eee;
    text-indent : .2rem;
  }

  .item{
    display : flex;
    width : 100%;
    height : 2.4rem;
  }

  .item-img-wrapper{
    width : 2rem;
    height: 2rem;
    margin-top: .2rem;
    margin-left: .2rem;
  }

  .item-img{
    width: 100%;
  }

  .item-info{
    margin-top: .2rem;
    margin-left: .2rem;
    position: relative;
  }

  .item-title{
    font-size: .32rem;
    margin-top: .26rem;
  }

  .item-desc{
    margin-top: .2rem;
    color: #ccc;
  }

  .item-price{
    position: absolute;
    bottom: .2rem;
  }

  .item-price span{
    font-size: .4rem;
    color: #ff8300;
  }

</style>
