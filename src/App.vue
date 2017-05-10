<template>
  <div id="app">
    <top></top>
    <router-view></router-view>
    <bot></bot>
  </div>
</template>

<script>
  import top from './components/header.vue';
  import bot from './components/footer.vue';
  export default {
    name: 'app',
    components:{
      top,
      bot
    },
  }
</script>

<style>
  #app {
    font-family: PingFang SC,Helvetica Neue,Helvetica,Arial,Hiragino Sans GB,Microsoft Yahei,\\5FAE\8F6F\96C5\9ED1,STHeiti,\\534E\6587\7EC6\9ED1,sans-serif;;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
</style>
