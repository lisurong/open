<template>
  <div class="apidetail">
   <h3 class="title">{{apiinfo.apienname}}（{{apiinfo.apichname}}）</h3>
        <div class="det-item item-p">
          <h4><em></em><span>接口描述</span></h4>
          <p>{{apiinfo.desc}}</p>
        </div>
        <div class="det-item item-p">
          <h4><em></em><span>基础参数</span></h4>
          <p>Http方法：{{apiinfo.httpmethod}} </p>
          <p>测试URL：{{apiinfo.testendpoint}} </p>
          <p>正式URL：{{apiinfo.endpoint}} </p>
          <p>状态： {{apiinfo.testendpoint}} </p>
        </div>
        <div class="det-item">
          <h4><em></em><span>Header参数</span></h4>
          <table class="table" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th width="15%">参数名称</th>
              <th width="15%">参数类型</th>
              <th width="15%">是否必须</th>
              <th width="15%">示例值</th>
              <th>描述</th>
            </tr>
            <tr v-for="h in apiinfo.headers">
              <td>{{h.argname}}</td>
              <td>{{h.argtype}}</td>
              <td>{{h.required}}</td>
              <td>{{h.example}}</td>
              <td>{{h.desc}}</td>
            </tr>

          </table>
        </div>
        <div class="det-item">
          <h4><em></em><span>应用参数</span></h4>
          <table class="table" width="100%" cellspacing="0" cellpadding="0" border="0">
             <tr >
              <th width="15%">参数名称</th>
              <th width="15%">参数类型</th>
              <th width="15%">是否必须</th>
              <th width="15%">示例值</th>
              <th>描述</th>
            </tr>
            <tr v-for="h in apiinfo.args">
              <td>{{h.argname}}</td>
              <td>{{h.argtype}}</td>
              <td>{{h.required}}</td>
              <td>{{h.example}}</td>
              <td>{{h.desc}}</td>
            </tr>

          </table>
        </div>
        <div class="det-item">
          <h4><em></em><span>返回类型参数</span></h4>
          <table class="table" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th width="15%">参数名称</th>
              <th width="15%">参数类型</th>
              <th width="15%">是否必须</th>
              <th width="15%">示例值</th>
              <th>描述</th>
            </tr>
             <tr v-for="h in apiinfo.result">
              <td>{{h.retname}}</td>
              <td>{{h.rettype}}</td>
              <td>{{h.required}}</td>
              <td>{{h.example}}</td>
              <td>{{h.desc}}</td>
            </tr>

          </table>
        </div>
        <div class="det-item">
          <h4><em></em><span>错误代码</span></h4>
          <table class="table" width="100%" cellspacing="0" cellpadding="0" border="0">
            <tr>
              <th width="20%">名称</th>
              <th>描述</th>
            </tr>
            <tr v-for="err in apiinfo.errcode">
              <td style="padding:8px 10px;">
                  <p >返回值示例：</p>
                  <p>名称：{{err.codename.name}}</p>
                  <p>类型：{{err.codename.type}}</p>
                  <p>状态码：{{err.codename.status}}</p>
                  <p>示例值：{{err.codename.demo}}</p>
              </td>
              <td>{{err.desc}}</td>
            </tr>
          </table>
        </div>
</div>
</template>

<script>
  export default {
    name: 'apidetail',
    data () {
      return {
        msg: 'consumer Hello 组件',
        apiid:this.$route.query.apiid,
        apiinfo:{}
      }
    },
    created: function () {
      var self = this;
      console.log(this.apiid)
      this.$http.post($API.supplier.showapidetail.url,{apiid:this.apiid}).then(
        (successData) => { console.log(successData.body)
       // self.getedeveloperapp();
       this.apiinfo = successData.body.data;
     },
     (fileData) => { console.log(fileData) }
     )


    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
