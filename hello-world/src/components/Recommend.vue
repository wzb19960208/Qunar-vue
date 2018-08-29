<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item in list" :key="item.id">
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
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name : 'HomeRecommend',
  data(){
    return{
      list:[
        {id:'1',imgUrl:'http://img1.qunarzz.com/sight/p0/1707/c7/c7f3baa7a5094e3ca3.img.jpg_200x200_1e7123ce.jpg',title:'三亚海上观光巴士',desc:'三亚海上观光巴士',price:'90'},
        {id:'2',imgUrl:'http://img1.qunarzz.com/sight/p0/1412/e9/d5c72454d47eda983bd4e857c9c361d8.water.jpg_200x200_5870d2ca.jpg',title:'分界洲岛',desc:'分界洲岛',price:'118'},
        {id:'3',imgUrl:'http://img1.qunarzz.com/wugc/p189/201206/12/a3ace34bc010041193835fbb.jpg_200x200_84bd8f96.jpg',title:'南山文化旅游区',desc:'南山文化旅游区',price:'115'},
        {id:'4',imgUrl:'http://img1.qunarzz.com/sight/p0/1702/e1/e10c8c5bec0c8e02a3.img.png_200x200_efcaf78c.png',title:'亚龙湾热带天堂森林公园',desc:'亚龙湾热带天堂森林公园',price:'135'},
        {id:'5',imgUrl:'http://img1.qunarzz.com/sight/p0/1412/43/1217ccf8106bca9a077b58bf56bb2598.water.jpg_200x200_318d0773.jpg',title:'三亚宋城千古情景区',desc:'三亚宋城千古情景区',price:'280'},
        {id:'6',imgUrl:'http://img1.qunarzz.com/sight/p0/1411/d8/eec44461ecfd83df9c1669e7846b1c53.water.jpg_200x200_c2941eec.jpg',title:'蜈支洲岛',desc:'蜈支洲岛',price:'150'},
      ]
    }
  }

}
</script>

<style>
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
