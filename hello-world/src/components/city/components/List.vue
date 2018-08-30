<template>
  <div class="lsit">
    <div class="area">
      <!--标题-->
      <div class="title">当前城市</div>
      <!--按钮列表，因为可能很多按钮-->
      <div class="button-list">
        <!--具体的按钮-->
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title">热门城市</div>
      <div class="button-list">
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
        <div class="button-wrap">
          <div class="button">北京</div>
        </div>
      </div>
    </div>
    <div class="area">
      <div class="title">A</div>
      <div class="item-list">
        <div class="item">阿尔巴尼亚</div>
        <div class="item">阿尔巴尼亚</div>
        <div class="item">阿尔巴尼亚</div>
      </div>
    </div>
    <div class="area">
      <div class="title">B</div>
      <div class="item-list">
        <div class="item">阿尔巴尼亚</div>
        <div class="item">阿尔巴尼亚</div>
        <div class="item">阿尔巴尼亚</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name : 'CityList'
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

  .button-list{
    overflow: hidden;
    padding: .1rem .6rem .1rem .1rem;
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

  .item{
    line-height: .76rem;
    color: #666;
    padding-left: .2rem;
    border-bottom: #ccc solid 1px;
  }

</style>
