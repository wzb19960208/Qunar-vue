<template>
  <div class="wrapper">
    <input class="search" type="text" placeholder="输入城市名或拼音"/>
  </div>
</template>


<script>
export default {
  name : 'CitySearch'
}
</script>


<style scoped>

  .wrapper{
    height: .72rem;
    background: #00bcd4;
  }

  .search{
    height: .62rem;
    text-align: center;
    display: block;
    margin: 0 auto;
    border-radius: .1rem;
    padding-left: .1rem;
    padding-right: .1rem;
  }

</style>
