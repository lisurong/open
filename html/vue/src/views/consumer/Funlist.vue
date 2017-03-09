<template>
  <div class="funlistpage">
   <h3 class="title">开放功能列表</h3>
   <!--没有功能的情况开始-->
   <div class="funlist" v-if="nonFunlist">
    <div class="funlist-con">
      <span class="fun-icon"></span>
      <p>请先至中企云平台购买中企产品！</p>
      <!--  <a class="button btn-normal"><span></span>去市场逛逛</a> -->
    </div>
  </div>
  <!--没有功能的情况结束-->
  <div v-if="!nonFunlist">
  <!--   <el-table
      :data="tableData4"
      border
      style="width: 100%"
      @selection-change="handleSelectionChange">
      <el-table-column
        type="selection"
        width="55">
      </el-table-column>
      <el-table-column
        label="功能组名称"
        width="120">
        <template scope="scope">
          <el-button  @click="apilist(scope.row.id)" type="text" size="small">{{ scope.row.groupname }}</el-button>
        </template>

      </el-table-column>
      <el-table-column
        prop="name"
        label="业务线"
        width="120">
        <template scope="scope">{{ scope.row.categoryName }}</template>
      </el-table-column>
      <el-table-column
        prop="address"
        label="功能描述"
        show-overflow-tooltip>
         <template scope="scope">{{ scope.row.desc }}</template>
      </el-table-column>
        <el-table-column
        prop="address"
        label="审核状态"
        show-overflow-tooltip>
         <template scope="scope">

            <span v-if="scope.row.approvedstate==0|scope.row.approvedstate==1">--</span>
            <div class="pass" v-if="scope.row.approvedstate==2"><span>已通过</span></div>
            <div class="fail" v-if="scope.row.approvedstate==3">
              <span>未通过</span>
              <em class="yiw"></em>
              <div class="org_box" style="display:none;">
                <span class="org_bot_cor_2"></span>
                  {{scope.row.reason}}
              </div>
            </div>

         </template>
      </el-table-column>
        <el-table-column
        prop="address"
        label="操作"
        show-overflow-tooltip>
         <template scope="scope">
          <el-button v-if="scope.row.approvedstate==0|scope.row.approvedstate==1"  @click="applydevelopergroup(scope.row.id)" type="text" size="small">申请</el-button>
          <span v-else="scope.row.approvedstate">--</span>
        </template>
      </el-table-column>
    </el-table>
     <div class="pages">
      <div class="floatL">
        <input class="checkboxAll checkbox" type="checkbox" /><a class="yzm btn78" v-on:click="applydevelopergroup()">批量申请</a>
      </div>

      <div class="clearfix"></div>
    </div>

  -->
  <el-select v-model="value" placeholder="请选择">
    <el-option
      v-for="item in options"
      :label="item.label"
      :value="item.value">
    </el-option>
  </el-select>

  <table class="table" cellspacing="0" cellpadding="0" border="0"  >
    <tr>
      <th width="162">功能组名称</th>
      <th width="65">业务线</th>
      <th width="503">功能描述</th>
      <th width="75">审核状态</th>
      <th width="49">操作</th>
    </tr>

    <tr v-for="item in list">
      <td>
        <input type="checkbox" class="checkbox" :value="item.id" v-model="groupids"/>
        <a><router-link :to="{name:'consumer.funlist.apilist',query:{groupid:item.id}}">{{item.groupname}}</router-link></a>
      </td>
      <td>{{item.categoryName}}</td>
      <td>{{item.desc}}</td>
      <td>
        <span v-if="item.approvedstate==0|item.approvedstate==1">--</span>
        <div class="pass" v-if="item.approvedstate==2"><span>已通过</span></div>
        <div class="fail" v-if="item.approvedstate==3">
          <span>未通过</span>
          <em class="yiw"></em>
          <div class="org_box" style="display:none;">
            <span class="org_bot_cor_2"></span>
            {{item.reason}}
          </div>
        </div>

      </td>
      <td>
       <a v-if="item.approvedstate==0|item.approvedstate==1" v-on:click="applydevelopergroup(item.id)">申请</a>
       <span v-else="item.approvedstate">--</span>

     </td>
   </tr>

 </table>
 <div class="pages">
  <div class="floatL">
    <input class="checkboxAll checkbox" type="checkbox" /><a class="yzm btn78" v-on:click="applydevelopergroup()">批量申请</a>
  </div>

  <div class="clearfix"></div>
</div>
</div>
</div>
</template>

<script>
  export default {
    name: 'funlist',
    data () {
      return {
        options: [],
        value: '',
        tableData4:[],
        multipleSelection: [],
        msg: 'consumer Hello 组件',
        list:{},
        nonFunlist:true,
        groupids:[],
        appid:''
      }
    },
    created:function(){
      var self = this;
      this.$http.get($API.consumer.getdevelopergroupall.url).then((successData) => {
              // this.dialog = true;
              var self = this;
              self.list = successData.body.data;
              self.list.length?self.nonFunlist=false:self.nonFunlist=true;
              self.tableData4 = successData.body.data;
              console.log(self.list )
            },
            (fileData) => {

              console.log(fileData)
            })
      this.$http.get($API.consumer.getdeveloperapplist.url).then((successData) => {
              // this.dialog = true;
              self.list = successData.body.data.items
              self.list.length?self.nonFunlist=false:self.nonFunlist=true;
              self.list.forEach(item=>{

                self.options.push({value:item.client_name,lable:item.id});
              })
              console.log(1)
              console.log(self.list )
            },
            (fileData) => {

              console.log(fileData)
            })

    },
    methods:{
      apilist(id){
        this.$router.push({name:'consumer.funlist.apilist',query:{groupid:id}});
      },
      handleApply(index,row){
        console.log(index,row)
      },
      handleClick() {
        console.log(1);
        console.log(this)
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(JSON.stringify(val,null,1))
      },
      applydevelopergroup:function(groupid){
        let params = {appId:this.appid, groupId:groupid};
        if(!groupid){
          params.groupId = this.groupids.join('&');
        }
        console.log(params);
        this.$http.get($API.consumer.applydevelopergroup.url,params).then((successData) => {
          console.log(successData.body)

        },
        (fileData) => {

          console.log(fileData)
        })
      }

    }
  }
  $(function(){
    $(".fail").hover(function(){
      $(".org_box").css("display","block");
    },function(){
      $(".org_box").css("display","none");
    });
  })
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .el-input__inner{

    width: 321px;
    height: 34px;
    line-height: 34px;
    border: 1px solid #e0e0e0;
    padding-left: 8px;
    color: #999;
  }
  .el-select{
    margin-bottom: 15px;
  }
  select{
    margin-bottom: 13px;
  }
</style>
