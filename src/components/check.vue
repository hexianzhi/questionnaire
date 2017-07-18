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
         <tr v-for="col in columns">
           <td>
             <input type="checkbox"  v-model="checked"/>
           </td>
           <td>
             {{col.title}}
           </td>
           <td>
             {{col.endTime}}
           </td>
           <td>
             {{classMap[col.status]}}
           </td>
           <td>
             <button>
               <router-link to="/edit">
               编辑
               </router-link>
             </button>


             <button  class="list-delete">
               <router-link to="/edit">
                 删除
               </router-link>
             </button>

             <button class="list-detail">
               <router-link to="/detail">
                 查看数据
               </router-link>
             </button>
           </td>

         </tr>
      </tbody>
      <tfoot class="list-foot">
        <tr>
          <td>
            <label ><input type="checkbox" class="isCheckAll" v-model="checked"/>
               全选
            </label>
            <button class="delete-all">
              删除
            </button>

          </td>
        </tr>
      </tfoot>
    </table>
  </div>

</template>


<script>
  import {loadAllData} from '../common/js/store.js';

  export default {
    name: 'check',
    data () {
      return {
        //初始化为全不选
        checked: false
      }
    },
    created: function () {
      this.classMap = ['未发布', '发布中', '已结束']
      this.columns = loadAllData();
    }

  }
</script>


<style lang="scss" scoped>
  @import "../common/style/mixins/flex-center";
  @import "../common/style/mixins/table-th";
  @import "../common/style/mixins/table-td";
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
      }

      @include table-td(
        $font-size: 16
      );
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
            margin-left: 40px;
          }
        }
      }




    }
  }

  h1{
    background-color: red;
  }
</style>
