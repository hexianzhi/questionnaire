<template>
  <div>
    <div id="container">
      <p class="qn-name">
          {{this.serialNumber}}. 文本题
        <span class="mustWriteHide" :class="{ mustWriteShow: isMustWrite}" style="color: red">
             *
          </span>
      </p>
      <div class="qn-required">
        <input type="checkbox" id="checkbox" v-model="isMustWrite"/>
        <label for="checkbox"> 是否是必填项   </label>
      </div>

      <textarea class="item-text"  ></textarea>

      <choice-operation class="choice-operation"  v-on:deleteChoice="deleteChoice" v-on:repeat="repeat"
                        v-bind:islast="islastChoice"  v-bind:isfirst="isfirstChoice">
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
        serialNumber: {
          type: Number,
          default: 1
        },
        islastChoice: {
          type: Boolean,
          default: true
        },
        isfirstChoice: {
          type: Boolean,
          default: false
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
