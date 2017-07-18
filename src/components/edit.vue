<template>

    <div id="container">
        <div class="qn-head">
          <p contentEditable="true">
            第一份问卷
          </p>
        </div>

        <div class="qn-body">
          <div class="qn-list">
            <single-choice>

            </single-choice>
          </div>
          <div class="add-qn">
            <div class="add-single choice">
              <img src="../assets/single-choice.png"/>
              <span>单选题</span>
            </div>
            <div class="add-multiple choice">
              <img src="../assets/multiple-choice.png"/>
              <span>多选题</span>
            </div>
            <div class="add-textarea choice">
              <img src="../assets/textarea.png"/>
              <span>文本题</span>
            </div>
            <div class="add-qn-hint">
                + 选择上述题型添加问题
            </div>
          </div>
        </div>

        <div class="qn-foot">
          问卷尾部
        </div>
    </div>

</template>


<script>
  import singleChoice from './choice/singleChoice.vue'
  export default {
    name: 'edit',
    data () {
      return {
      }
    },
    components:{
        'single-choice': singleChoice
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

  }

</style>
