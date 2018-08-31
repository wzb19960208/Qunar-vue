<template>
  <div>
    <city-header></city-header>
    <city-search :city="city"></city-search>
    <city-list></city-list>
  </div>
</template>

<script>
  import CityHeader from './components/Header'
  import CitySearch from "./components/Search"
  import CityList from "./components/List";
  import axios from 'axios'
export default {
  name:'City',
  components: {CityList, CitySearch, CityHeader},
  data(){
    return{
      city : ''
    }
  },
  methods:{
    getCityInfo(){
      axios.get('/static/mock/city.json').then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res){
      res = res .data
      if(res.ret && res.data){
        this.city = res.data;
      }

    }
  },
  mounted(){
    this.getCityInfo();
  }
}
</script>

<style>

</style>
