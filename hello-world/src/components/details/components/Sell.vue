<template>
  <div class="content">
    <div class="area" v-for="item of onSell">
      <div class="area-title">
        <div class="img-item"></div>
        <div class="title-text">{{item.titleText}}</div>
      </div>
      <div class="sell-wrapper">
        <div class="sell-title" @click="handleClick">
          <div class="sell-text">
            {{item.sellText}}
          </div>
          <div class="sell-price">￥<span>{{item.price}}</span>起▼</div>
        </div>
        <div class="sell-list" v-show="showList">
          <div class="item-wrapper" v-for="listItem of item.list">
            <div class="item-text">{{listItem}}</div>
            <div class="button">预定</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name : 'DetailSell',
    props:['onSell'],
    data(){
      return{
        showList: false
      }
    },
    methods:{
      handleClick(){
        this.showList = !this.showList;
      }
    }
  }
</script>

<style scoped>

  .area-title{
    position: relative;
    display: flex;
    line-height: .88rem;
    border-bottom: #eee 1px solid;
  }

  .img-item{
    position: absolute;
    top: .26rem;
    left: .2rem;
    width: .36rem;
    height: .36rem;
    background: url('//s.qunarzz.com/piao/image/touch/sight/detail.png') 0 -.45rem no-repeat;
    background-size: .4rem 3rem;
  }

  .title-text{
    font-size: .32rem;
    text-indent: .4rem;
    padding: 0 .2rem;
  }

  .sell-title{
    /*为了打横*/
    display: flex;
    position: relative;
    line-height: .88rem;
    border-bottom: #eee 1px solid;
  }

  .sell-text{
    font-size: .32rem;
    line-height: .88rem;
    padding-left: .2rem;
  }

  .sell-price{
    position: absolute;
    right: .46rem;
    font-size: .24rem;
    color: #9e9e9e;
  }

  .sell-price span{
    color: #ff9800;
    font-size: .4rem;
  }

  .item-wrapper{
    position: relative;
    display: flex;
    line-height: .88rem;
    height: .88rem;
    background: #f5f5f5;
    border-bottom: #eee 1px solid;
  }

  .item-text{
    text-indent: .2rem;
    color:#616161;
    font-size: .28rem;
  }

  .button{
    position: absolute;
    top: .1rem;
    right: .2rem;
    border-radius: .08rem;
    line-height: .6rem;
    text-align: center;
    height: .6rem;
    width: 1.6rem;
    font-size: .28rem;
    color: #fff;
    background: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%);
  }

</style>
