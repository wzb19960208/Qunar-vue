<template>
  <div class="weekend">
    <div class="title">周末去哪儿</div>
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
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name:'HomeWeekend',
  data(){
    return{
      list:[
        {id:'1',imgUrl:'http://img1.qunarzz.com/sight/source/1505/5e/6e13db8af6ec30.jpg_r_640x214_5c1b0fa9.jpg',title:'三亚必游TOP10',desc:'玩转海岛热带雨林，感受独特黎苗文化'},
        {id:'2',imgUrl:'http://img1.qunarzz.com/sight/source/1505/a4/df8543b6b8506d.jpg_r_640x214_660e1e3a.jpg',title:'就是要看海',desc:'海上摩托，拖曳伞什么的爽歪歪了'},
        {id:'3',imgUrl:'http://img1.qunarzz.com/sight/source/1505/3d/f99f5c73b52c4d.jpg_r_640x214_4e60b24c.jpg',title:'寻找最佳潜水地',desc:'潜入梦幻海底，看鱼儿穿梭'},
        {id:'4',imgUrl:'http://img1.qunarzz.com/sight/source/1602/bf/a2ac57b8bfe7cd.jpg_r_640x214_406d4c7e.jpg',title:'城会玩儿游艇大趴',desc:'酷炫游艇派对，私人订制心跳回忆'},
        {id:'5',imgUrl:'http://img1.qunarzz.com/sight/source/1505/3e/a588a413145dbe.jpg_r_640x214_b3729b6e.jpg',title:'小清新帆船出海',desc:'帆船出海体验，不一样的海上休闲'}
      ]
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
