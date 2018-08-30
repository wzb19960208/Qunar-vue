<template>
  <div class="icons">
    <div class="icon" v-for="item of iconList" :key="item.id">
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
  props:['iconList'],
  data(){
    return {

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
