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
                               v-bind:serialNum = "index"

                               v-on:up="up(index)" v-on:down="down(index)"
                               v-on:repeat="repeat(index,choice)" v-on:deleteChoice="deleteChoice(index)"

                               v-bind:canUp="notFirstSerialNum(index)"
                               v-bind:canDown="notLastSerialNum(index,topics.length)">
              </single-choice>
              <multiple-choice v-if="(choice.type === 'checkbox')" :key="choice.id"
                               v-bind:choice = "choice"
                               v-bind:serialNum = "index"

                               v-on:up="up(index)" v-on:down="down(index)"
                               v-on:repeat="repeat(index,choice)" v-on:deleteChoice="deleteChoice(index)"

                               v-bind:canUp="notFirstSerialNum(index)"
                               v-bind:canDown="notLastSerialNum(index,topics.length)">
              </multiple-choice>

              <textareaCopment v-if="(choice.type === 'textarea')"  :key="choice.id"
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
              v-model="endTime"
              format="yyyy-MM-dd"
              type="date"
              placeholder="选择日期"
              :picker-options="pickerOptions0">
            </el-date-picker>

            <span class="mustWriteHide" style="color: red; font-size: 36px;">*</span>

            <div class="qn-operation">
              <el-button :plain="true" @click="saveQn"          class="save-qn">保存问卷</el-button>
              <el-button type="text"   @click="publishConfirm"  class="publish-qn">发布问卷</el-button>
            </div>
          </div>
        </div>
    </div>


</template>


<script>
  import singleChoice from './choice/singleChoice.vue'
  import multipleChoice from './choice/multipleChoice.vue'
  import textareaCopment from './choice/textareaCopment.vue'
  import {loadFromLocal,saveQuestion,loadNewQn,isNewPage} from '../common/js/store.js'
  export default {
    name: 'edit',
    data () {
      return {
        qnMessage: null,
        topics: {

        },
        pickerOptions0: {
          disabledDate (time) {
            return time.getTime() < Date.now() - 8.64e7;
          }
        },
        endTime: ''
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
      this.endTime = new Date()
    },
    watch: {
      // a computed getter
      endTime: function () {
        // `this` points to the vm instance
        //在未加载日期控件时候 endTime 值为 string,会报错，因此需要判断
        if (this.endTime instanceof Date){
          let year = this.endTime.getFullYear();
          let month = this.endTime.getMonth();
          let day = this.endTime.getDate();
          if (day < 10){
              day = "0" + day
          }
          if (month < 10){
            month = "0" + month
          }
          this.endTime = year +"-" + month + "-" + day
        }
      }
    },

    methods: {
      titleChange: function(){
        this.qnMessage.title = event.target.innerText;
      },

      publishConfirm: function() {
        this.$confirm('再次确认发布问卷？该问卷截止日期为（' + this.endTime + '）', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$message({
            type: 'success',
            message: '发布成功!'
          });
          this.publishQn();

        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消发布'
          });
        });
      },
      up: function (index) {

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
        this.$message('保存成功');
          //保存一下回到 qn 中
        this.qnMessage.topics= this.topics
        this.qnMessage.endTime = this.endTime;
        saveQuestion(this.qnMessage)
      },

      publishQn: function () {
        this.qnMessage.topics= this.topics
        this.qnMessage.endTime = this.endTime;
        this.qnMessage.status = 1
        saveQuestion(this.qnMessage)
        this.$router.push('main');
      },
      deleteChoice: function (index) {
        this.topics.splice(index,1);
      },

      repeat: function (index,choice) {
        //变量是引用，新创建的变量指针仍然指向原引用，因此不能用浅拷贝的方法。
        let newChoice = JSON.parse( JSON.stringify(choice) )

        //看 choice 是否 变化,不变化，问题出现在 vue 中 :key 中！
        //给模拟数据加上id 是为了防止问题复用后，因为 vue 将同一个 id 的问题视为一个组件来渲染，导致同样 id 的问题同生共死。。。
        newChoice.id= Math.floor(Math.random() * (1000000 - 1) + 1)

        //TODO
        ///生成一个数组判断随机数是否重复
        this.topics.splice(index,0,newChoice);
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
