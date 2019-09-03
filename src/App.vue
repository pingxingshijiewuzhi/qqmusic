<template>
  <div >
  <m-header></m-header>
  <m-tab></m-tab>
  <!-- 四大组件渲染出口 -->
  <router-view></router-view>
  </div>
</template>
<script>
import  MHeader from './components/m-header.vue'
import  MTab from './components/m-tab.vue'

export default {
  components:{
    MHeader,
    MTab
  }
}
</script>
<style >

</style>
