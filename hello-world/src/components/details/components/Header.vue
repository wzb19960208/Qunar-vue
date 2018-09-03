<template>
  <div class="header">
    <router-link
      :to="'/'"
      tag="div"
      class="header-abs" v-show="showAbs">
      <i class="iconfont">&#xe618;</i>
    </router-link>
    <div class="header-fix"
         :style="styleObject"
         v-show="!showAbs">{{header}}</div>
  </div>
</template>

<script>
  export default {
    name : 'DetailHeader',
    props:['header'],
    data(){
      return{
        showAbs : 'true',
        styleObject : {
          opacity : 0
        }
      }
    },
    methods:{
      handleScroll(){
        // 每次滑动，这个对象的这个值都会改变
        var top = document.documentElement.scrollTop;
        console.log(top)
        if(top > 10){
          this.showAbs = false;
        }else{
          this.showAbs = true;
        }

        //到140的时候，完全显示！
        this.styleObject.opacity = top / 140;

      }
    },
    activated(){
      // 对window对像，的scroll的事件，绑定一个回调函数
      window.addEventListener('scroll',this.handleScroll)
    },
    deactivated(){
      window.removeEventListener('scroll',this.handleScroll)
    }
  }
</script>

<style scoped>

  .header{
    width: 100%;
  }

  .header-abs{
    position: absolute;
    left: .1rem;
    top: .1rem;
    width: .72rem;
    height: .72rem;
    border-radius: 50%;
    background: rgba(0,0,0,0.5);
    text-align: center;
  }

  .header-abs i{
    color: #fff;
    line-height: .72rem;
    font-size: .36rem;
  }

  .header-fix{
    line-height: .88rem;
    width: 100%;
    color: #fff;
    text-align: center;
    font-size: .32rem;
    background: #25a4bb;
  }

</style>
