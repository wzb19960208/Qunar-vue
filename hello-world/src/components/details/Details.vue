<template>
  <div>
    <detail-banner :banner="banner"></detail-banner>
    <detail-header :header="header" class="header"></detail-header>
    <div class="content"></div>
  </div>
</template>

<script>
import DetailBanner from "./components/Banner";
import DetailHeader from "./components/Header";
import axios from 'axios'
export default {
    name : 'Details',
  data(){
      return{
        banner : '',
        header : ''
      }
  },
  components: {DetailHeader, DetailBanner},
  methods:{
    getDetailInfo(){
      axios.get('/static/mock/detail.json').then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res){
      res = res.data;
      console.log(res);
      this.banner = res.data.banner;
      this.header = res.data.header;
    }
  },
  mounted(){
      this.getDetailInfo()
  }
}
</script>

<style scoped>

  .content{
    height: 2000px;
  }

  .header{
    position: fixed;
    top: 0;
    left: 0;
  }

</style>
