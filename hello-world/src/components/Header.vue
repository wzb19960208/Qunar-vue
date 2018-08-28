<!--内容-->
<template>
  <div class="header">
    <div class="header-left">
      <i class="iconfont back-icon">&#xe618;</i>
    </div>
    <div class="header-input">
      <i class="iconfont">&#xe604;</i>
      输入城市/景点/游玩主题
    </div>
    <div class="header-right">
      城市
      <i class="iconfont">&#xe64a;</i>
    </div>
  </div>
</template>

<!--定义组件名-->
<script>
  export default {
    name: 'HomeHeader'
  }
</script>

<!--样式-->
<!--scoped是为了避免继承的影响，让一个选择器只对自己生效-->
<style lang="stylus" scoped>
  /*1rem是相对于font-size的尺寸 reset.css里面字体是50px*/
  /*header高是43px，转换就是0.86rem*/
  @import "~@/assets/styles/vavribles.styl"
  .header
    //为了左右两边固定，中间自适应
    display : flex
    height : .86rem
    /*background : #00bcd4*/
    background : $bgColor
    color : white
    line-height : .86rem
    .header-left
      width : .64rem
      float : left
      .back-icon
        display : block
        text-align : center
        font-size .4rem
    .header-input
      flex:1
      background : white
      border-radius : .1rem
      //样式微调
      margin-top : .12rem
      margin-left : .2rem
      height : .64rem
      color : #ccc
      line-height : .64rem
    .header-right
      width : 1.24rem
      float : right
      text-align : center

</style>
