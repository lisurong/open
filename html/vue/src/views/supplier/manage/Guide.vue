<template>
  <div class="nonapp">

    <!--没有功能的情况结束-->
    <div v-if="!nonApp">
    <div class="but-div"  ><router-link :to="{name:'supplier.business.createguide'}"><a class="button btn-normal"><strong>+</strong>创建指南</a></router-link></div>
      <table class="table" cellspacing="0" cellpadding="0" border="0">
        <tr>
          <th width="460">文档名称</th>
          <th width="220">审核状态</th>
          <th width="220">操作</th>
        </tr>

        <tr  v-for="item in list.items">
          <td>
           <input type="checkbox" class="checkbox" :value="item.id" v-model="groupids"/>
           <a><router-link :to="{name:'supplier.business.queryguide',query:{docid:item.id}}" >{{item.docname}}</router-link></a></td>

           <td>{{item.status}}</td>
           <td>
            <a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >提交审核 </router-link></a><em class="width20"></em>
            <a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >编辑 </router-link></a><em class="width20"></em>
            <a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >删除 </router-link></a>
          </td>
        </tr>

      </table>
      <div class="pages">
        <div class="floatL">
          <input class="checkboxAll checkbox" type="checkbox" /><a class="yzm btn78" v-on:click="applydevelopergroup()">批量审核</a>
        </div>
        <div class="floatR pages-idx">
          <span class="total">共{{list.totalNumber}}条</span>
          <a class="pagepre" v-show="current != 1" v-on:click="current-- && goto(current)"></a>

          <a v-for="index in pages" v-on:click="goto(index)" :class="{'active':current == index,ym:true}" :key="index">{{index}}</a>

          <a class="pagenext" v-show="allpage != current && allpage != 0 " v-on:click="current++ && goto(current++)"></a>
        </div>
        <div class="clearfix"></div>
      </div>
    </div>
    <!--弹出层开始-->
    <div class="tck-wrap" style="" v-if="dialog">
      <a class="close"></a>
      <div class="tck-con">
        <div class="floatL">
          <span class="tck-icon"></span>
        </div>
        <div class="floatL">
          <h5 class="tck-h5">温馨提示</h5>
          <span class="tck-q">是否确认删除此应用？</span>
        </div>
        <div class="clearfix"></div>
      </div>
      <div class="tck-btn">
        <a class="button btn-normal normal64" style="margin-right:10px;">确认</a>
        <a class="yzm btn64">取消</a>
      </div>
    </div>
    <!--弹出层结束-->

  </div>
</template>

<script>
  export default {
    name: 'nonapp',
    data () {
      return {
        msg: 'consumer Hello 组件',
        dialog:false,
        list:{
        },
        nonApp:true,
        showItem:3,
        current:1,
        allpage:1,
        groupids:[],
        categoryid:this.$route.query.categoryid
      }
    },
    created: function () {
      this.$http.get($API.supplier.getalldocs.url,{categoryid:this.categoryid}).then((successData) => {
        console.log(successData.body)
              // this.dialog = true;
              var self = this;
              self.list = successData.body.data;
              self.list.items.length?self.nonApp=false:self.nonApp=true;
              self.current = this.list.currentPage;
              self.allpage = this.list.totalPage;
              console.log(self.current)
            },
            (fileData) => {

              console.log(fileData)
            })
      $(function(){
        $(".td-sl").hover(function(){
          $(this).siblings(".org_box").css("display","block");
        },function(){
          $(this).siblings(".org_box").css("display","none");
        });
      })
    },
    computed:{
      pages:function(){
        var pag = [];
                  if( this.current < this.showItem ){ //如果当前的激活的项 小于要显示的条数
                       //总页数和要显示的条数那个大就显示多少条
                       var i = Math.min(this.showItem,this.allpage);
                       while(i){
                         pag.unshift(i--);
                       }

                   }else{ //当前页数大于显示页数了
                       var middle = this.current - Math.floor(this.showItem / 2 ),//从哪里开始
                       i = this.showItem;
                       if( middle >  (this.allpage - this.showItem)  ){
                         middle = (this.allpage - this.showItem) + 1
                       }
                       while(i--){
                         pag.push( middle++ );
                       }
                     }
                     return pag
                   }
                 },
                 methods:{
                  deldeveloperapp(id){
                    this.$http.get($API.consumer.deldeveloperapp.url,{appId:id}).then((successData) => {
                      console.log(successData.body)

                    },
                    (fileData) => {

                      console.log(fileData)
                    })
                  },
                  goto:function(index){
                    console.log(index)
                    if(index == this.current) return;
                    this.current = index;
                    //这里可以发送ajax请求
                  }
                }
              }

            </script>

            <!-- Add "scoped" attribute to limit CSS to this component only -->
            <style scoped>

            </style>
