<template>
  <div class="nonapp">

   <h3 class="title">应用管理</h3>
   <!--没有功能的情况开始-->
   <div class="con-go" v-if="nonApp">
    <span class="go-icon">您还没有创建应用，<a>  <router-link :to="{name:'consumer.app.createapp'}">去创建GO>> </router-link> </a></span>
  </div>
  <!--没有功能的情况结束-->
  <div v-if="!nonApp">
    <div class="but-div"  ><keep-alive><router-link :to="{name:'consumer.app.createapp'}"><a class="button btn-normal"><strong>+</strong>创建应用</a></router-link></keep-alive></div>
    <table class="table" cellspacing="0" cellpadding="0" border="0">
      <tr>
        <th width="138">应用名称</th>
        <th width="130">APPID</th>
        <th width="66">业务线</th>
        <th width="162">已申请功能组</th>
        <th width="140">应用描述</th>
        <th width="179">操作</th>
      </tr>

      <tr  v-for="item in list.items">
        <td><a><router-link :to="{name:'consumer.app.queryapp',query:{appid:item.client_id}}" >{{item.client_name}}</router-link></a></td>
        <td>{{item.client_id}}</td>
        <td>{{item.categoryName}}</td>
        <td>
          <div class="td-fc">
            <div class="td-sl">{{item.groupNames.join('，')}}</div>
            <div class="org_box" style="display: none;">
              <span class="org_bot_cor_2"></span>
              {{item.groupNames.join('，')}}
            </div>
          </div>
        </td>
        <td>{{item.description}}</td>
        <td><a><router-link :to="{name:'consumer.app.updategroup',query:{appid:item.client_id}}" >修改申请 </router-link></a><em class="width20"></em><a><router-link :to="{name:'consumer.app.updateapp',query:{appid:item.client_id}}">修改信息 </router-link></a><em class="width20"></em><a v-on:click="deldeveloperapp(item.client_id)">删除</a></td>
      </tr>

    </table>
    <div class="pages">

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
        allpage:1
      }
    },
    created: function () {
      this.$http.get($API.consumer.getdeveloperapplist.url,this.pages).then((successData) => {
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
