<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <i class="iconfont back-icon">&#xe618;</i>
    </router-link>

  </div>

</template>


<script>
export default {
  name:'CityHeader'
}
</script>

<style scoped>

  .header{
    position: relative;
    height: .86rem;
    line-height: .86rem;
    text-align: center;
    color: #fff;
    background: #00bcd4;
  }

  .back-icon{
    position: absolute;
    left: .1rem;
    font-size: .4rem;
    color: white;
  }


</style>
