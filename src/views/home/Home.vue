<template>
  <div id="home" >
    <div class="home-nav"><nav-bar :is-shadow="true"><div slot="center">购物街</div></nav-bar></div>
    <!--轮播图-->
    <div>
      <home-swiper :banners="banners"/>
    </div>

    <div>
      <recommend-view :recommends="recommends"/>
    </div>
    <h2>主页</h2>
  </div>
</template>

<script>
  import NavBar from "../../components/common/navbar/NavBar";
  import HomeSwiper from "./childComps/HomeSwiper";
  import {getHomeMultidata} from "../../network/home";
  import RecommendView from "./childComps/RecommendView";


  export default {
    name: "home",
    components: {
      RecommendView,
      HomeSwiper,
      NavBar,
    },
    data(){
      return {
        banners:[],
        recommends:[]
      }
    },
    created() {
      getHomeMultidata()
        .then( res => {
          console.log(res);
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        })
    }
  }
</script>

<style scoped>
  .home-nav{
    background-color: var(--color-tint);
    color: white;
  }
</style>
