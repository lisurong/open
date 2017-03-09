<template>
  <div class="createbusiness">
   <h3 class="title">上传接口</h3>
   <div class="acc-f">
    <ul class="acc-list">
      <li>
        <div class="f-title"><span>中文名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" placeholder="请输入2-15个汉字" v-model="api.chname"/>
        </div>
      </li>
      <li>
        <div class="f-title"><span>英文名称</span><i>*</i></div>
        <div class="f-input">
          <input type="text" class="com-input input320" placeholder="请输入英文名称" v-model="api.enname"/>
          <em class="red">请输入正确的手机号码</em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>所属功能</span><i>*</i></div>
        <div class="f-input">
          <select class="select error"  v-model="api.groupid">
            <option v-for="option in categories" :value="option.value">{{option.text}}</option>
          </select>
          <em class="red">请选择所属功能</em>
        </div>
      </li>
      <li>
        <div class="f-title"><span>调用方法</span><i>*</i></div>
        <div class="f-input">
          <select class="select error" v-model="api.httpmd">
           <option  v-for="option in options" :value="option.value">{{option.text}}</option>
         </select>
         <em class="red">请选择调用方法</em>
       </div>
     </li>
     <li>
      <div class="f-title"><span>测试URL</span><i>*</i></div>
      <div class="f-input">
        <input type="text" class="com-input input320" placeholder="请输入URL地址" v-model="api.tstaddr"/>
      </div>
    </li>
    <li>
      <div class="f-title"><span>正式URL</span><i>*</i></div>
      <div class="f-input">
        <input type="text" class="com-input input320" placeholder="请输入URL地址" v-model="api.addr"/>
      </div>
    </li>
    <li>
      <div class="f-title"><span>接口描述</span><i>*</i></div>
      <div class="f-input">
        <textarea v-model="api.desc" placeholder="请输入接口描述，不超过500字符"></textarea>
      </div>
    </li>
    <li>
      <div class="f-title"><span>Header参数</span><i>*</i></div>
      <div class="f-input">
        <div class="but-div"><a class="button btn-normal" v-on:click="api.headers.push(iteminit)"><strong>+</strong>新增</a></div>
        <table class="table jk-table" cellspacing="0" cellpadding="0" border="0" width="960">
          <tr>
            <th width="70">参数名称</th>
            <th width="70">参数类型</th>
            <th width="100">是否必须</th>
            <th width="140">示例值</th>
            <th width="295">描述</th>
            <th width="">操作</th>
          </tr>
          <tr v-for="(demo,index) in api.headers">
            <td>
              <input type="text" class="com-input" style="width:80px;" v-model="demo.name" />
            </td>
            <td>
              <input type="text" class="com-input" style="width:80px;"  v-model="demo.type" />
            </td>
            <td>
              <select class="select" style="width:100%;" v-model="demo.require">
                <option  v-for="option in demo.options" :value="option.value">{{option.text}}</option>
              </select>
            </td>
            <td>
              <input type="text" class="com-input" style="width:120px;" v-model="demo.value"/>
            </td>
            <td><input type="text" class="com-input" style="width:120px;" v-model="demo.desc"/></td>
            <td><a v-on:click="api.headers.splice(index,1)">删除</a></td>
          </tr>

        </table>
      </div>
    </li>
    <li>
      <div class="f-title"><span>应用参数</span><i>*</i></div>
      <div class="f-input">
        <div class="but-div"><a class="button btn-normal" v-on:click="api.args.push(iteminit)"><strong>+</strong>新增</a></div>
        <table class="table jk-table" cellspacing="0" cellpadding="0" border="0" width="960">
          <tr>
            <th width="70">参数名称</th>
            <th width="70">参数类型</th>
            <th width="100">是否必须</th>
            <th width="140">示例值</th>
            <th width="295">描述</th>
            <th width="">操作</th>
          </tr>
          <tr v-for="(demo,index) in api.args">
            <td>
              <input type="text" class="com-input" style="width:80px;" v-model="demo.name" />
            </td>
            <td>
              <input type="text" class="com-input" style="width:80px;"  v-model="demo.type" />
            </td>
            <td>
              <select class="select" style="width:100%;" v-model="demo.require">
                <option  v-for="option in demo.options" :value="option.value">{{option.text}}</option>
              </select>
            </td>
            <td>
              <input type="text" class="com-input" style="width:120px;" v-model="demo.value"/>
            </td>
            <td><input type="text" class="com-input" style="width:120px;" v-model="demo.desc"/></td>
            <td><a v-on:click="api.args.splice(index,1)">删除</a></td>
          </tr>

        </table>
      </div>
    </li>
    <li>
      <div class="f-title"><span>返回信息</span><i>*</i></div>
      <div class="f-input">
        <div class="but-div"><a class="button btn-normal" v-on:click="api.rets.push(iteminit)"><strong>+</strong>新增</a></div>
        <table class="table jk-table" cellspacing="0" cellpadding="0" border="0" width="960">
          <tr>
            <th width="70">参数名称</th>
            <th width="70">参数类型</th>
            <th width="100">是否必须</th>
            <th width="140">示例值</th>
            <th width="295">描述</th>
            <th width="">操作</th>
          </tr>
          <tr v-for="(demo, index) in api.rets">
            <td>
              <input type="text" class="com-input" style="width:80px;" v-model="demo.name" />
            </td>
            <td>
              <input type="text" class="com-input" style="width:80px;"  v-model="demo.type" />
            </td>
            <td>
              <select class="select" style="width:100%;" v-model="demo.require">
                <option  v-for="option in demo.options" :value="option.value">{{option.text}}</option>
              </select>
            </td>
            <td>
              <input type="text" class="com-input" style="width:120px;" v-model="demo.value"/>
            </td>
            <td><input type="text" class="com-input" style="width:120px;" v-model="demo.desc"/></td>
            <td><a v-on:click="api.rets.splice(index,1)">删除</a></td>
          </tr>

        </table>
      </div>
    </li>
    <li>
      <div class="f-title"><span>返回示例</span><i>*</i></div>
      <div class="f-input">
        <div class="but-div"><a class="button btn-normal" v-on:click="api.demos.push(iteminit)"><strong>+</strong>新增</a></div>
        <table class="table jk-table" cellspacing="0" cellpadding="0" border="0" width="960">
          <tr>
            <th width="70">参数名称</th>
            <th width="70">参数类型</th>
            <th width="100">是否必须</th>
            <th width="140">示例</th>
            <th width="295">描述</th>
            <th width="">操作</th>
          </tr>
          <tr v-for="(demo,index) in api.demos">
            <td>
              <input type="text" class="com-input" style="width:80px;" v-model="demo.name" />
            </td>
            <td>
              <input type="text" class="com-input" style="width:80px;"  v-model="demo.type" />
            </td>
            <td>
              <select class="select" style="width:100%;" v-model="demo.require">
                <option  v-for="option in demo.options" :value="option.value">{{option.text}}</option>
              </select>
            </td>
            <td>
              <input type="text" class="com-input" style="width:120px;" v-model="demo.value"/>
            </td>
            <td><input type="text" class="com-input" style="width:120px;" v-model="demo.desc"/></td>
            <td><a v-on:click="api.demos.splice(index,1)">删除</a></td>
          </tr>

        </table>
      </div>
    </li>
    <li>
      <div class="f-title"><span>错误信息</span><i>*</i></div>
      <div class="f-input">
        <div class="but-div"><a class="button btn-normal" v-on:click="api.errcode.push({})"><strong>+</strong>新增</a></div>
        <table class="table jk-table" cellspacing="0" cellpadding="0" border="0" width="960">
          <tr>
            <th width="70">错误代码</th>
            <th width="">描述</th>
            <th width="60">操作</th>
          </tr>
          <tr v-for="(err,index) in api.errcode">
            <td>
              <input type="text" class="com-input" style="width:80px;" v-model="err.status" />
            </td>
            <td>
              <input type="text" class="com-input" style="width:680px;"  v-model="err.desc" />
            </td>
            <td><a v-on:click="api.errcode.splice(index,1)">删除</a></td>
          </tr>

        </table>
      </div>
    </li>
  </ul>
  <div class="f-cz">
    <a class="button btn-normal" v-on:click="review">提交审核</a><a class="yzm btn96" style="margin-left:10px;" v-on:click="submitinfo">保存</a>
  </div>
</div>

</div>
</template>

<script>
  export default {
    name: 'createbusiness',
    data () {
      return {
        msg: 'consumer Hello 组件',
        api:{
          enname :'',
          chname :'',
          httpmd :'GET',
          tstaddr :'',
          addr :'',
          exname :'',
          extype :'',
          excode :'',
          exval :'',
          groupid :'',
          headers :[{
            require:1,
            options:[{
              text:"是",value:1
            },{
              text:"否",value:0
            }]
          }],
          args :[{
            require:1,
            options:[{
              text:"是",value:1
            },{
              text:"否",value:0
            }]
          }],
          rets  :[{
            require:1,
            options:[{
              text:"是",value:1
            },{
              text:"否",value:0
            }]
          }],
          demos :[{
            require:1,
            options:[{
              text:"是",value:1
            },{
              text:"否",value:0
            }]
          }],
          codes :[],
          desc :'',
          st:'',
          errcode:[{}]
        },
        categoryname:this.$route.query.categoryname,
        options:[{
          text:'GET',value:'GET'
        },{
          text:'POST',value:'POST'
        }],
        iteminit:{
          require:1,
          options:[{
            text:"是",value:1
          },{
            text:"否",value:0
          }]
        },
        categoryid:this.$route.query.categoryid,
        categories:[]
      }
    },
    created: function () {
      this.$http.get($API.supplier.showapigroup.url,{categoryid:this.categoryid}).then((successData) => {
       console.log(successData.body)
              // this.dialog = true;
              var self = this;
              let list = successData.body.data.items;
              console.log(list)
              list.forEach(item=>{
                self.api.groupid?'':self.api.groupid=item.id;
                self.categories.push({
                  text:item.groupname,value:item.id
                });
              })
            },
            (fileData) => {

              console.log(fileData)
            })

    },
    methods: {
      review: function () {
        this.submitinfo();
        var apiid = 1;
        this.$http.post($API.supplier.reviewapi.url,{apiid:apiid}).then(
          (successData) => {
              // this.dialog = true;
              console.log(successData.body.data)
              var self = this;

            },
            (fileData) => { console.log(fileData)
              console.log(2) }
              )
      },
      submitinfo:function(){
        var self = this;
        //console.log(self.api)
      //  console.log(JSON.stringify(self.api,null,2))
    /*    self.api.forEach(item=>{
          if(typeof item == 'Array'){
            console.log(item)
          }
        })*/
        for(var o in self.api){
          var item = self.api[o];
          if(typeof item == 'object'){
           self.api[o]= JSON.stringify(item)
          }
        }
       console.log(JSON.stringify(self.api,null,1))
        this.$http.post($API.supplier.publishapi.url,self.api).then(
          (successData) => {
              // this.dialog = true;
           //      console.log(successData.body.data)
            var self = this;

          },
          (fileData) => { console.log(fileData)
                //  console.log(2)
              }
          )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
