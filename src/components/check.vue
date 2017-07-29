<template>

  <div id="container">
    <div class="qn-head">
      <p contentEditable="true"  v-on:keyup="titleChange" >
        {{qnMessage.title}}
      </p>
    </div>

    <div class="qn-body">
      <ul class="qn-list">
        <!--以后这里的组件是由函数拼凑出来的-->
        <!--还要传是不是最后一个-->
        <li v-for="(choice, index ) in topics">
          <single-choice   v-if="(choice.type === 'radio')"
                           :key="choice.id"
                           v-bind:choice = "choice"
                           v-bind:serialNum = "index">
          </single-choice>
          <multiple-choice v-if="(choice.type === 'checkbox')" :key="choice.id"
                           v-bind:choice = "choice"
                           v-bind:serialNum = "index">
          </multiple-choice>

          <textareaCopment v-if="(choice.type === 'textarea')"  :key="choice.id"
                           v-bind:choice = "choice"
                           v-bind:serialNum = "index">
          </textareaCopment>

        </li>

      </ul>

    </div>

    <div class="qn-foot">



        <div class="qn-operation">
          <el-button type="text"   @click="submitQn"  class="publish-qn" style="color: white">提交</el-button>
        </div>

    </div>
  </div>


</template>


<script>
  import singleChoice from './checkComp/sgChoice.vue'
  import multipleChoice from './checkComp/multipleChoice.vue'
  import textareaCopment from './checkComp/textCopment.vue'
  import {loadFromLocal,loadNewQn,isNewPage} from '../common/js/store.js'
  export default {
    name: 'edit',
    data () {
      return {
        qnMessage: null,
        topics: {

        }
      }
    },
    created: function () {


      if (isNewPage()){
        this.qnMessage = loadNewQn();
      }else{
        this.qnMessage = loadFromLocal()
      }
      if (this.qnMessage === undefined){
        this.qnMessage = loadNewQn();
      }

      this.topics = this.qnMessage.topics

    },

    methods: {
      submitQn: function () {
        this.$confirm('确定提交答卷?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '提交成功!'
          });
          this.$router.push('main')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消提交'
          });
        });
      }
    },

    components: {
      'multiple-choice': multipleChoice,
      'single-choice': singleChoice,
      'textareaCopment': textareaCopment

    }
  }
</script>



<style lang="scss" scoped>

  #container{
    position: relative;
    box-shadow: 0 0 3px grey;
    background-color: #fff;
    box-shadow: 0 0 5px #ccc;
    width: 1040px;
    margin: 0 auto;
    margin-top: 80px;
    padding: 20px;

    .qn-head {
      position: relative;
      border-bottom: 2px solid #CCC;
      width: 1000px;
      text-align: center;
      padding-bottom: 10px;

      p{
        font-size: 20px;
        padding: 10px;
        &:hover{
          background-color: #fef1e8;
        }
      }
    }

    .add-qn{
      margin-top: 80px;
      border: 2px solid #CCC;
      padding: 10px;
      .choice{
        margin: 20px;
        padding: 10px 20px 10px 20px;
        display: inline-block;
        text-align: center;
        width: 100px;
        height: 20px;
        background-color: #eeeeee;
        border: 1px solid #CCC ;
        cursor: pointer;
        span{
          padding-left: 5px;
          font-size: 16px;
        }
      }
      .add-qn-hint{
        padding: 20px;
        font-size: 18px;
        background-color: #eeeeee;
      }

    }

    .qn-foot{
      border-top: 1px solid #CCC  ;
      margin-top: 20px;
      padding: 60px;
      text-align: left;


      .demonstration{
        font-size: 16px;
      }
      .qn-operation{
        float: right;

        .save-qn,.publish-qn{
          border: 1px solid #CCC ;
          padding: 8px;
          font-size: 16px;
          text-align: center;
          cursor: pointer;
          color: black;

          /*element-ui 字体不是浏览器默认的,需要手动设置*/
          font-family: inherit;
        }
        .save-qn{
          margin-right: 20px;
        }

        .publish-qn{
          background-color:  #EE7419;

          a{
            display: inline-block;
            width: 100%;
            height: 100%;
          }
        }
      }

    }

  }

</style>
