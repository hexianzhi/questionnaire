<template>
  <div>
    <table class="list-page" >
      <tr class="list-des">
        <th>
        </th>
        <th>
         标题
         </th>
        <th>
         时间
         </th>
        <th>
          状态
        </th>
        <th>
        操作
         </th>
        <th>
          <button class="new-questionnaire">
            <router-link to="/newbuild">
              + 新建问卷
            </router-link>
          </button>
        </th>
      </tr>
      <tbody class="list-body" >
         <tr v-for="(col,index) in qnPages">
           <td>
             <input type="checkbox" v-bind:value="index"  v-model="deleteChecked"/>
           </td>
           <td>
             {{col.title}}
           </td>
           <td>
            {{col.endTime}}
           </td>
           <td >
             {{classMap[col.status]}}
           </td>
           <td>
             <button @click="checkPage(index)">
               查看问卷
             </button>


             <button @click="qnDetail(index)" class="list-detail"  >
               查看数据
             </button>
             <button @click="editPage(index)" v-show="col.status == 0">
                  编辑
             </button>
             <el-button type="text" @click="deleteQn(index)" class="list-delete" v-show="col.status == 0">  删除</el-button>


           </td>

         </tr>
      </tbody>
      <tfoot class="list-foot">
        <tr>
          <td>
            <label ><input type="checkbox"   class="isCheckAll" v-model="AllQnChoose"/>
              全选
            </label>
            <el-button type="text" @click="deleteAll" class="delete-all">删除选中文件</el-button>
          </td>
        </tr>
      </tfoot>
    </table>
  </div>

</template>


<script>
  import {loadAllData,saveToLocal} from '../common/js/store.js';

  export default {
    name: 'check',
    data () {
      return {
        //单选框
        deleteChecked: [],
        AllQnChoose: false,
        qnPages: []
      }
    },
    created: function () {
      this.classMap = ['未发布', '发布中', '已结束']
      this.qnPages = loadAllData();
      if (this.qnPages.length === 0 ){
        this.$router.push('newbuild')
      }
    },
    watch: {
      deleteChecked: function () {
          if (this.deleteChecked.length === this.qnPages.length){
            this.AllQnChoose = true
          }else {
            this.AllQnChoose = false
          }
      },
      AllQnChoose: function() {
        if (this.AllQnChoose){
          //清空数组，不然就多添加index
          this.deleteChecked = []
          for (let index of this.qnPages.keys()) {
            this.deleteChecked.push(index);
          }
        }
      }
    },
    computed: {
      //TODO 全选功能有bug。
      isPublish: function (status) {
        if (status === 1){
          return 'publish-statue';
        }else {
          return ;
        }
      }
    },
    methods: {
      checkPage: function (index) {
        saveToLocal(this.qnPages[index].id)
        this.$router.push('check')
      },
      editPage: function (index) {
        saveToLocal(this.qnPages[index].id)
        this.$router.push('edit')
      },
      qnDetail: function (index) {
        saveToLocal(this.qnPages[index].id)
        this.$router.push('detail')
      },
      deleteQn: function (index) {
        this.$confirm('此操作将永久删除该问卷, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '删除成功!'
          });
          this.qnPages.splice(index,1);
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });
        });

        //如果没有数据则跳转到新建问卷列表
        if (this.qnPages.length === 0 ){
          this.$router.push('newbuild')
        }
      },
      deleteAll: function () {
        if (this.AllQnChoose || this.deleteChecked){
            //TODO delete
          this.$confirm('此操作将永久删除全部问卷, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {

            //错误的方法：该变量指针指向新的引用，原引用并没有完成删除！！
            //this.qnPages = []

            //正确的方法：
            this.qnPages.length = 0
            this.$message({
              type: 'success',
              message: '删除成功!'
            });
            this.$router.push('newbuild')
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });
          });
        }

      }
    }

  }

</script>


<style lang="scss" scoped>
  @import "../common/style/mixins/flex-center";
  @import "../common/style/mixins/table-th.scss";
  @import "../common/style/mixins/table-td.scss";

  .list-page{

    position: relative;
    margin: 0 auto;
    margin-top: 80px;

    .list-des{
      position: relative;
      width: 100%;
      height: 50px;

      @include table-th(
        $font-size: 16px
      );

      .new-questionnaire{
        position: absolute;
        left: 904px;
        width: 95px;
        height: 25px;
        background-color: #EE7419;
        color: #fff;
        border: 1px solid #EE7419;
        border-radius: 3px;
        a{
          color: #fff;
        }
      }
    }
    .list-body{
      background-color: white;
      text-align: left;
      width: 100%;

      tr{
        display: block;
        padding: 20px;
        transition: background-color .3s cubic-bezier(0,0,0,1);
        border-bottom: 1px solid #EFEFEF;
        &:hover{
          background-color: #EE7419;
        }
        &:nth-child(1){
          padding-top: 40px;
        }

        .publish-statue{
          color: green;
        }

      }

      @include table-td(
        $font-size: 16
      )


      .list-delete{
        span{
          color: black;
        }
      }


    }
    .list-foot{
      text-align: left;
      background-color: white;
      width: 100%;

      @include my-button($btn-font-size: 16);

      tr{
        height: 80px;
        font-size: 16px;

        td{
          padding-left: 40px;

          .isCheckAll{
            padding-left: 40px;
          }
          .delete-all{
            width: auto;
            border: 1px solid #777;
            border-radius: 2px;
            background-color: #fff;
            padding-top: 3px;
            padding-bottom: 3px;
            padding: 10px;
            font-family: inherit;
            margin-left: 20px;
            color: black;
          }

        }
      }




    }
  }

  h1{
    background-color: red;
  }
</style>
