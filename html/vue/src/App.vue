<template>

  <div id="app">

    <headnav ></headnav>
    <Consumerindex ></Consumerindex>

  </div>
</template>

<script>
  import Headnav from './views/common/Headnav.vue'
  import Consumerindex from './views/consumer/Consumerindex.vue'
  /* eslint-disable */
  export default {
    name: 'app',

    components: {Consumerindex,Headnav},
    created: function () {  // 这里mounted和created生命周期函数区别
      // this.$http.get('consumer.showInfoApi',{a:1}).then(
      //   (successData) => { console.log(successData.body) },
      //   (fileData) => { console.log(fileData) }
      //   )
     // console.log(Api.mockApi('consumer.showInfoApi'));
   }
 }
</script>

<style lang='scss'>


</style>
