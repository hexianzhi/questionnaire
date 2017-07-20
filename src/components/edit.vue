<template>

    <div id="container">
        <div class="qn-head">
          <p contentEditable="true">
            {{qnMessage.title}}
          </p>
        </div>

        <div class="qn-body">
          <ul class="qn-list">
            <!--以后这里的组件是由函数拼凑出来的-->
            <!--还要传是不是最后一个-->
            <li v-for="(choice, index ) in topics">
              <single-choice   v-show="(choice.type === 'radio')" :key="choice.title"
                               v-bind:choice = "choice"
                               v-bind:serialNum = "index"

                               v-on:up="up(index)" v-on:down="down(index)"
                               v-on:repeat="repeat(index,choice)" v-on:deleteChoice="deleteChoice(index)"

                               v-bind:canUp="notFirstSerialNum(index)"
                               v-bind:canDown="notLastSerialNum(index,topics.length)">
              </single-choice>
              <multiple-choice v-show="(choice.type === 'checkbox')"
                               v-bind:choice = "choice"
                               v-bind:serialNum = "index"

                               v-on:up="up(index)" v-on:down="down(index)"
                               v-on:repeat="repeat(index,choice)" v-on:deleteChoice="deleteChoice(index)"

                               v-bind:canUp="notFirstSerialNum(index)"
                               v-bind:canDown="notLastSerialNum(index,topics.length)">
              </multiple-choice>

              <textareaCopment v-show="(choice.type === 'textarea')"
                               v-bind:choice = "choice"
                               v-bind:serialNum = "index"

                               v-on:up="up(index)" v-on:down="down(index)"
                               v-on:repeat="repeat(index,choice)" v-on:deleteChoice="deleteChoice(index)"

                               v-bind:canUp="notFirstSerialNum(index)"
                               v-bind:canDown="notLastSerialNum(index,topics.length)">
              </textareaCopment>

            </li>

          </ul>

          <div class="add-qn" >
            <div class="add-single choice" @click="addSingle">
              <img src="../assets/single-choice.png"/>
              <span>单选题</span>
            </div>
            <div class="add-multiple choice" @click="addMultiple">
              <img src="../assets/multiple-choice.png"/>
              <span>多选题</span>
            </div>
            <div class="add-textarea choice"  @click="textareaChoice">
              <img src="../assets/textarea.png"/>
              <span>文本题</span>
            </div>
            <div class="add-qn-hint">
                + 选择上述题型添加问题
            </div>
          </div>
        </div>

        <div class="qn-foot">
          <div class="block">
            <span class="demonstration">问卷截止日期：</span>
            <el-date-picker
              v-model="value1"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0">
            </el-date-picker>
            <div class="qn-operation">
              <span class="save-qn"    @click="saveQn">保存问卷</span>
              <span class="publish-qn" @click="publishQn">发布问卷</span>
            </div>
          </div>
        </div>
    </div>


</template>


<script>
  import singleChoice from './choice/singleChoice.vue'
  import multipleChoice from './choice/multipleChoice.vue'
  import textareaCopment from './choice/textareaCopment.vue'
  import {loadFromLocal} from '../common/js/store.js'
  export default {
    name: 'edit',
    data () {
      return {
        qnMessage: {

        },
        topics: {

        },
        singleChoiceList: 1,
        multipleChoiceCount: 0,
        textareaCount:  0,
        totalCount: 0,
        singleChoiceID: 0,
        multipleChoiceID: 1,
        textareaID: 2,
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        value1: ''
      }
    },
    created: function () {
        this.qnMessage = loadFromLocal()
      this.topics = this.qnMessage.topics
    },
    methods: {
      up: function (index) {
//        this.topics[index].title = "fuck";
        //跟深拷贝和浅拷贝有关？
        let temp = this.topics[index]
        this.$set(this.topics, index, this.topics[index - 1])
        this.$set(this.topics, index - 1, temp)
      },
      down: function (index) {
        let temp = this.topics[index]
        this.$set(this.topics, index, this.topics[index + 1])
        this.$set(this.topics, index + 1, temp)
      },
        //判断序号是否是最后一个或者是第一个，来决定是否有上移下移操作
      notFirstSerialNum : function (index) {
        return (index !== 0);
      },

      notLastSerialNum: function (index,count) {
        count--;
        return (index !== count);
      },
      addSingle: function () {
          let newSingle =  {
              "title": "单选题",
              "options": ["选项一", "选项二", "选项三"],
              "necessary": true,
              "type": "radio"
            }
        this.topics.push(newSingle);
      },
      addMultiple: function () {
        let newMul = {
          "title": "多选题1",
          "options": ["选项一", "选项二", "选项三"],
          "necessary": true,
          "type": "checkbox"
        }
        this.topics.push(newMul);
      },
      textareaChoice: function () {
        let newTextChoice =  {
          "title": "文本框1",
          "necessary": true,
          "type": "textarea"
        }
        this.topics.push(newTextChoice);
      },
      saveQn: function () {

      },
      publishQn: function () {

      },
      deleteChoice: function (index) {
        //TODO

        this.topics.splice(index,1);
        console.log( this.topics)

      },
      repeat: function (index,choice) {

        //TODO
        this.topics.splice(index,0,choice);
        console.log(    this.topics)
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
    .qn-body{

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
          padding: 5px;
          font-size: 16px;
          text-align: center;
          margin-left: 20px;
        }

        .publish-qn{
          background-color:  #EE7419;
          margin-right: 60px;
        }
      }

    }

  }

</style>
