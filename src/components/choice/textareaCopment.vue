<template>
  <div>
    <div id="container">
      <p class="qn-name">
        {{serialNum+1}}. {{choice.title}}
        <span class="mustWriteHide" :class="{ mustWriteShow: choice.necessary}" style="color: red">
             *
          </span>
      </p>
      <div class="qn-required">
        <input type="checkbox" id="checkbox" v-model="choice.necessary"/>
        <label for="checkbox"> 必答题   </label>
      </div>

      <textarea class="item-text"  ></textarea>

      <choice-operation class="choice-operation"  v-on:deleteChoice="deleteChoice"
                        v-on:repeat="repeat"
                        v-on:up="up" v-on:down="down"
                        v-bind:canUp="canUp"  v-bind:canDown="canDown">
      </choice-operation>
    </div>
  </div>

</template>


<script>
  import choiceOperation from './choiceOperation.vue'
  import ChoiceOperation from "./choiceOperation";
    export default {
      name: 'textarea',
      data () {
        return {
          isMustWrite: true
        }
      },
      props: {
        choice: {
          type: Object,
          default: {}
        },
        serialNum: {
          type: Number,
          default: 0
        },
        canUp: {
          type: Boolean,
        },
        canDown: {
          type: Boolean,
        }
      },
      methods: {
        up: function () {
          this.$emit("up")
        },
        down: function () {
          this.$emit("down")
        },
        repeat: function () {
          this.$emit("repeat")
        },
        //        删除单选题
        deleteChoice: function () {
          this.$emit("deleteChoice");
        }
      },

      components: {
        ChoiceOperation,
        'choice-operation': choiceOperation
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

    }
    .choice-operation {
      position: absolute;
      right: 40px;
      bottom: 20px;

    }
  }


</style>
