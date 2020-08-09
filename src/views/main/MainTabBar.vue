<template>
  <tab-bar>
    <tab-bar-item path="/home" :active-class-object="active">
      <img src="~assets/img/tabbar/home.svg" alt="首页" slot="item-icon">
      <img src="../../assets/img/tabbar/home_active.svg" alt="首页" slot="item-icon-active">
      <div slot="item-text">
        首页
      </div>
    </tab-bar-item>
    <tab-bar-item path="/category">
      <img src="../../assets/img/tabbar/category.svg" alt="分类" slot="item-icon">
      <img src="../../assets/img/tabbar/category_active.svg" alt="分类" slot="item-icon-active">
      <div slot="item-text">
        分类
      </div>
    </tab-bar-item>
    <tab-bar-item path="/cart">
      <img src="../../assets/img/tabbar/shopcart.svg" alt="购物车" slot="item-icon">
      <img src="../../assets/img/tabbar/shopcart_active.svg" alt="购物车" slot="item-icon-active">
      <div slot="item-text">
        购物车
      </div>
    </tab-bar-item>
    <tab-bar-item path="/profile">
      <img src="../../assets/img/tabbar/user.svg" alt="我的" slot="item-icon">
      <img src="../../assets/img/tabbar/user_active.svg" alt="我的" slot="item-icon-active">
      <div slot="item-text">
        我的
      </div>
    </tab-bar-item>
  </tab-bar>
</template>

<script>
  import TabBar from 'components/tabbar/TabBar'
  import TabBarItem from 'components/tabbar/TabBarItem'
  export default {
    name: "MainTabBar",
    components:{
      TabBarItem,
      TabBar
    },
    computed:{
      active(){
        return {
          color:'red',
        }
      }
    }
  }
</script>

<style scoped>

</style>