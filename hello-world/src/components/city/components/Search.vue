<template>

      <div class="wrapper">
        <input class="search" v-model="content" type="text" placeholder="输入城市名或拼音"/>
        <div class="search-content" v-show="content">
          <ul>
            <li class="search-item"
                v-for="item of allCity"
                :key="item.id"
                @click="handleClick"
            >{{item.name}}</li>
          </ul>
        </div>

      </div>

</template>


<script>
export default {
  name : 'CitySearch',
  props:['city'],
  data(){
    return{
      content:'',
      allCity : []
    }
  },
  methods:{
    handleClick(event){
      var city = event.srcElement.innerHTML;
      this.$store.dispatch('changeCity',city);
      this.$router.push('/');
    }
  },
  watch :{
    // 对content属性进行监听
    content (){

      var result = [];

      for(let i of this.city.hot){
        if(i.name.indexOf(this.content)>-1 || i.spell.indexOf(this.content)>-1){
          result.push(i)
        }
      }

      for(let i of this.city.all){
        for(let j of i.city){
          if(j.name.indexOf(this.content)>-1 || j.spell.indexOf(this.content)>-1){
            result.push(j)
          }
        }
      }

      if (result.length === 0) {
        result.push({id:'999',name:'没有找到匹配数据'})
      }

      this.allCity = result

    }
  }
}
</script>


<style scoped>

  .wrapper{
    position: relative;
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

  .search-content{
    width: 100%;
    position: absolute;
    top: .72rem;
    background: #fff;
  }

  .search-item{
    width: 100%;
    line-height: .76rem;
    padding-left: .2rem;
    border-bottom: #eee solid 1px;

  }


</style>
