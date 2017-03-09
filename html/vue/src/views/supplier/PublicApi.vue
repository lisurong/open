<template>
  <div class="hello">
    <table border="1">
      <tr v-for="(value, key, index) in items">
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
          chname: '中文名称',
          enname: '英文名称',
          apigrp: '所属功能',
          httpmd: '调用方法',
          tstaddr: '测试URL',
          addr: '正式URL',
          desc: '接口描述',
          args: '参数信息',
          headers: '返回信息',
          rets: '返回示例',
          codes: '错误信息'
        }
      }
    },
    created: function () {
    // 这里mounted和created生命周期函数区别

      this.$http.get('supplier.showSupplierInfoApi').then(
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
