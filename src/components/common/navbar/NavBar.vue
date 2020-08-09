<template>
  <div>
    <div class="nav-bar">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <div class="shadow" v-if="isShadow"></div>
  </div>
</template>

<script>
  export default {
    name: "NavBar",
    props:{
      isShadow:{
        type:Boolean,
        default(){
          return false;
        }
      }
    }
  }
</script>

<style scoped>

  .nav-bar {
    display: flex;
    line-height: 44px;
    height: 44px;
    text-align: center;
    box-shadow: 0 3px 3px rgba(100, 100, 100, 0.3);
  }

  .left, .right {
    width: 60px;
    text-align: center;
  }

  .center {
    flex: 1;
    text-align: center;
  }

  .shadow {
    height: 3px;
    background-color: #eee;
    color: #eee;
  }

</style>
