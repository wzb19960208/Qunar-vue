<template>
  <div>
    <detail-banner :banner="banner"></detail-banner>
    <detail-header :header="header" class="header"></detail-header>
    <detail-sell :onSell="onSell"></detail-sell>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import axios from 'axios'
import DetailSell from "./components/Sell";
export default {
    name : 'Details',
  data(){
      return{
        banner : '',
        header : '',
        onSell:''
      }
  },
  components: {DetailSell, DetailHeader, DetailBanner},
  methods:{
    getDetailInfo(){
      axios.get('/static/mock/detail.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res){
      res = res.data;
      this.banner = res.data.banner;
      this.header = res.data.header;
      this.onSell = res.data.sell;
    }
  },
  mounted(){
      this.getDetailInfo()
  }
}
</script>

<style scoped>

  .content{
    height: 50vh;
  }

  .header{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 99;
  }

</style>
