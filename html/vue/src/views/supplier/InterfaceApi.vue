<template>
  <div class='hello'>
    <table border='1'>
      <tr v-for='(value, key, index) in items'>
        <td>{{infoZh[key]}}</td>
        <td>{{value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>

  export default {
    name: 'hello',
    data () {
      return {
        items: {},
        infoZh: {
          enname: '英文名称',
          chname: '所属应用',
          tstaddr: '测试URL',
          addr: '正式URL',
          exname: '示例名称',
          extype: '示例类型',
          excode: '示例代码',
          exval: '示例值',
          apigrp: '所属分组标识',
          httpmd: '调用方法',
          headers: {}
        }
      }
    },
    created: function () {
    // 这里mounted和created生命周期函数区别

      this.$http.get('supplier.showApiDetailApi').then(
        (successData) => {
          console.log(successData.body)
          this.items = successData.body
        },
        (fileData) => {
          console.log(fileData)
        }
        )
     // console.log(Api.mockApi('consumer.showInfoApi'));
    }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }
</style>
