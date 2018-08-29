<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item in weekendList" :key="item.id">
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWeekend',
  props:{
    weekendList:Array
  },
  data(){
    return{

    }
  }
}
</script>

<style scoped>

  .weekend{
    background: #eee;
  }

  .title{
    line-height : .8rem;
    background : #eee;
    text-indent : .2rem;
  }

  .item{
    background: white;
    display : flex;
    flex-direction: column;
    width : 100%;
    height : 0;
    padding-bottom: 53.9077%;
    margin-bottom: .1rem;
  }

  .item-img-wrapper{
    width: 100%;
    height: 0;
    padding-bottom: 37.0868%;
    background: #00afc7;
  }

  .item-img{
    width: 100%;
  }

  .item-info{
    margin-top: .3rem;
    margin-left: .2rem;
  }

  .item-title{
    font-size: .28rem;
  }

  .item-desc{
    font-size: .24rem;
    color: #616161;
    margin-top: .15rem;
  }

</style>
