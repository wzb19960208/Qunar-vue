<template>
  <div class="lsit">
    <div class="area">
      <!--标题-->
      <div class="title">当前城市</div>
      <!--按钮列表，因为可能很多按钮-->
      <div class="button-list">
        <!--具体的按钮-->
        <div class="button-wrap">
          <div class="button">{{this.$store.state.city}}</div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="title">热门城市</div>
      <div class="button-list">
        <div class="button-wrap"
             v-for="item of city.hot"
             :key="item.id">
          <div class="button" @click="handleClick">{{item.name}}</div>
        </div>
      </div>
    </div>

    <div class="area">
      <!--标题-->
      <div class="title">字母排序</div>
      <!--按钮列表，因为可能很多按钮-->
      <div class="button-list">
        <!--具体的按钮-->
        <div class="button-wrap" v-for="item of city.alpha">
          <!--属性绑定表达式-->
          <div class="button"><a :href="'#'+item">{{item}}</a></div>
        </div>
      </div>
    </div>

    <!--属于该首字母开头的所有城市-->
    <template v-for="group of city.all">
      <div class="area">
        <div class="title"><a :name="group.type" href="javascript:void(0)">{{group.type}}</a></div>
        <div class="item-list">
          <div class="item"
               v-for="item of group.city"
               @click="handleClick"
          >{{item.name}}</div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name : 'CityList',
  props:['city'],
  methods:{
    handleClick(event){
      console.log(event.srcElement.innerHTML);
      var city = event.srcElement.innerHTML;
      this.$store.dispatch('changeCity',city);
      this.$router.push('/');
    }
  }
}
</script>

<style scoped>

  .title{
    height: .44rem;
    line-height: .4rem;
    background: #eee;
    padding-left: .2rem;
    color: #666;
    font-size: .26rem;
    border-bottom: #ccc 1px solid;
    border-top: #ccc 1px solid;
  }

  .title a{
    color: #666;
  }

  .button-list{
    overflow: hidden;
    padding: .1rem;
  }

  .button-wrap{
    float: left;
    width: 33.33%;
  }

  .button{
    margin: .1rem;
    padding: .1rem ;
    text-align: center;
    border: .02rem solid #ccc;
    border-radius: .06rem;
  }

  .button a{
    color: #666;
  }

  .item{
    line-height: .76rem;
    color: #666;
    padding-left: .2rem;
    border-bottom: #ccc solid 1px;
  }

</style>
