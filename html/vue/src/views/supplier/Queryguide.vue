<template>
  <div class="createbusiness">
   <h3 class="title">{{doc.categoryName}}</h3>
   <div class="det-item item-p">
    <div class="det2">
      <h5>所属业务线：{{doc.categorytype}}</h5>
      <p style="margin-left:0;">{{doc.content}}</p>


    </div>
  </div>

</div>
</template>

<script>
  export default {
    name: 'createbusiness',
    data () {
      return {
        doc:{

        },
        docid:this.$route.query.docid
      }
    },
    created:function(){
      console.log(this.docid);
      this.$http.get($API.supplier.getdoc.url,{docid:this.docid}).then((successData) => {
              // this.dialog = true;
              var self = this;
              self.doc = successData.body.data;

            },
            (fileData) => {

              console.log(fileData)
            })
    },
    methods: {
      uploadimg: function () {

      },
      submitinfo:function(){
        var self = this;
        console.log(this.doc);
        this.$http.get($API.supplier.categoryadddoc.url,this.doc).then(
          (successData) => { console.log(successData.body)
            var self = this;

            this.$router.push({name:'supplier.business.querybusiness.guide',query:{categoryid:this.doc.categoryid}});
          },
          (fileData) => { console.log(fileData) }
          )
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
