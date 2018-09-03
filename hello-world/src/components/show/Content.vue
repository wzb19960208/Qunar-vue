<template>
  <div class="content">
    <div class="header">
      <router-link tag="div" :to="'/detail/'" class="back-wrapper">
        <i class="iconfont back-item">&#xe618;</i>
      </router-link>
      <div class="title">景区图片</div>
    </div>
    <div class="img-list">
      <div class="img-wrapper" v-for="item of list">
        <img :src="item" class="img-item"/>
      </div>
    </div>
  </div>
</template>

<script>

  import axios from 'axios'
  export default {
    name : 'Content',
    data(){
      return{
        list : []
      }
    },
    methods:{
      getShowInfo(){
        axios.get('/static/mock/show.json').then(this.getShowInfoSucc)
      },
      getShowInfoSucc(res){
        res = res.data;
        this.list = res.data.imgUrl;
      }
    },
    mounted(){
      this.getShowInfo()
    }
  }
</script>

<style scoped>

  .content{
    background: #eee;
    /*因为里面图片都是浮动的，如果不加这个，父元素就没有高度，看不见背景色了*/
    overflow: hidden;
  }

  .header{
    position: fixed;
    width: 100%;
    height: .88rem;
    background: #fff;
  }

  .back-wrapper{
    position: absolute;
    left: .2rem;
    width: .8rem;
    height: .88rem;
  }

  .back-item{
    font-size: .48rem;
    line-height: .88rem;
  }

  .title{
    font-size: .32rem;
    line-height: .88rem;
    text-align: center;
    color: #333;
  }

  .img-list{
    padding : 1.08rem .2rem .4rem .2rem;
  }

  .img-wrapper{
    width: 50%;
    float: left;
    padding: 0 .05rem;
    margin-bottom: .1rem;
    /*带上padding才是50%，总的一整个*/
    box-sizing: border-box;
  }

  .img-item{
    width: 100%;
  }

</style>
