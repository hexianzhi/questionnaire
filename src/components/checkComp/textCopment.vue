<template>
  <div>
    <div id="container">
      <div class="qn">
        <div class="qn-options">
          <span class="qn-name">
            {{serialNum + 1}}. {{choice.title}}
          </span>

          <span class="mustWriteHide" :class="{ mustWriteShow: choice.necessary}" style="color: red;font-size: 16px;">
             *
          </span>
        </div>

        <textarea class="item-text"  v-model="choiceValue"></textarea>
      </div>
    </div>
  </div>

</template>


<script>
  export default {
    name: 'textarea',
    data () {
      return {
        choiceOptions: [],
        chart: null,
        choiceValue: ''
      }
    },
    watch: {
      choiceValue: function () {
        this.$emit("isCheck",this.choice.title);
      }
    },
    created: function () {
      this.choiceOptions = ['有效回答','无效回答']

    },
    props: {
      choice: {
        type: Object,
        default: {}
      },
      serialNum: {
        type: Number,
        default: 0
      }
    }
  }
</script>


<style lang="scss" scoped>
  #container{
    text-align: left;
    padding: 20px;
    position: relative;

    .qn-name {
      font-size: 18px;
      font-weight: bold;

      .mustWriteHide{
        display: none;
      }
      .mustWriteShow{
        display: inline;
      }
    }
    .qn-required{
      display: inline-block;
      float: right;
      margin-right: 40px;
      font-size: 16px;
    }

    .item-text{
      height: 150px;
      width: 600px;
      margin: 20px 0 0 50px;

      @media (max-width: 992px) {
        width: 80%;
      }
    }


    .choice-operation {
      position: absolute;
      right: 40px;
      bottom: 20px;

    }
  }

</style>
