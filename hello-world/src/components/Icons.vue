<template>
  <div class="icons">
    <div class="icon" v-for="item of list" :key="item.id">
      <div class="icon-img">
        <img :src="item.imgUrl" class="one-img">
      </div>
      <p class="icon-text">{{item.text}}</p>

    </div>
  </div>
</template>

<script>
export default {
  name : 'HomeIcons',
  data(){
    return {
      list:[
        {id:'1',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',text:'景点门票'},
        {id:'2',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',text:'三亚必游'},
        {id:'3',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/89/55083b0f1951f302.png',text:'两江夜游'},
        {id:'4',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',text:'一日游'},
        {id:'5',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',text:'夏日玩水'},
        {id:'6',imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/95/8d02011d149bdb02.png',text:'汽车票'},
        {id:'7',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',text:'海上三亚'},
        {id:'8',imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/3e/86314b2af03b7502.png',text:'水上乐园'}
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .icons
    width : 100%
    //宽度的50%
    heigh : 50vw
    background : #ccc
    .icon
      /*因为要一行4个，显示2行共8个*/
      width:25%
      height : 25vw
      float : left
      background : white
      text-align :center
      .icon-img
        width : 1.1rem
        height : 1.1rem
        margin 0 auto
        margin-top .2rem
        .one-img
          width: 100%
      .icon-text
        margin-top : .1rem



</style>
