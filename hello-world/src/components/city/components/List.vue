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
        <div class="button-wrap">
          <div class="button" @click="handleClick">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button" @click="handleClick">上海</div>
        </div>
        <div class="button-wrap">
          <div class="button" @click="handleClick">杭州</div>
        </div>
        <div class="button-wrap">
          <div class="button" @click="handleClick">香港</div>
        </div>
        <div class="button-wrap">
          <div class="button" @click="handleClick">苏州</div>
        </div>
        <div class="button-wrap">
          <div class="button" @click="handleClick">成都</div>
        </div>
        <div class="button-wrap">
          <div class="button" @click="handleClick">深圳</div>
        </div>
      </div>
    </div>

    <div class="area">
      <!--标题-->
      <div class="title">字母排序</div>
      <!--按钮列表，因为可能很多按钮-->
      <div class="button-list">
        <!--具体的按钮-->
        <div class="button-wrap">
          <div class="button"><a href="#A">A</a></div>
        </div>
        <div class="button-wrap">
          <div class="button"><a href="#B">B</a></div>
        </div>
        <div class="button-wrap">
          <div class="button"><a href="#C">C</a></div>
        </div>
        <div class="button-wrap">
          <div class="button"><a href="#D">D</a></div>
        </div>
        <div class="button-wrap">
          <div class="button"><a href="#E">E</a></div>
        </div>
      </div>
    </div>

    <div class="area">
      <div class="title"><a name="A" href="javascript:void(0)">A</a></div>
      <div class="item-list">
        <div class="item">澳门</div>
        <div class="item">安康</div>
        <div class="item">安庆</div>
      </div>
    </div>
    <div class="area">
      <div class="title"><a name="B" href="javascript:void(0)">B</a></div>
      <div class="item-list">
        <div class="item">保定</div>
        <div class="item">宝鸡</div>
        <div class="item">包头</div>
        <div class="item">蚌埠</div>
        <div class="item">毫州</div>
        <div class="item">百色</div>
      </div>
    </div>
    <div class="area">
      <div class="title"><a name="C" href="javascript:void(0)">C</a></div>
      <div class="item-list">
        <div class="item">沧州</div>
        <div class="item">常德</div>
        <div class="item">重庆</div>
      </div>
    </div>
    <div class="area">
      <div class="title"><a name="D" href="javascript:void(0)">D</a></div>
      <div class="item-list">
        <div class="item">达州</div>
        <div class="item">大连</div>
        <div class="item">德阳</div>
      </div>
    </div>
    <div class="area">
      <div class="title"><a name="E" href="javascript:void(0)">E</a></div>
      <div class="item-list">
        <div class="item">鄂尔多斯</div>
        <div class="item">鄂州</div>
        <div class="item">恩施</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'CityList',
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
