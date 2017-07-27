<template>
  <div>
    <div id="container">

      <div class="single-qn">

        <span class="qn-name"  v-show="this.options">
          {{serialNum+1}}. {{choice.title}}
          <span class="mustWriteHide" :class="{ mustWriteShow: choice.necessary}" style="color: red">
             *
          </span>
        </span>
        <div class="qn-required">
          <input type="checkbox" id="checkbox" v-model="choice.necessary"/>
          <label for="checkbox"> 必答题   </label>
        </div>

        <ul class="qn-list">
          <li class="qn-list-item"         v-for="(name, index)  in options" v-bind:key="index">
            <span class="list-item-new "   @click="addNewItem(index)"  title="在此题的下方新增一个选项">＋</span>
            <span class="list-item-delete" @click="deleteItem(index)"  title="删除这个选项">－</span>

            <input class="item-checkbox"   name="radio-check" type="radio"/>
            <label class="item-content"    v-on:keyup="itemNameChange(index)"   contenteditable="true"   >
              {{name}}
            </label>

          </li>
        </ul>

        <choice-operation class="choice-operation"  v-on:deleteChoice="deleteChoice"
                          v-on:repeat="repeat"
                          v-on:up="up" v-on:down="down"
                          v-bind:canUp="canUp"  v-bind:canDown="canDown">
        </choice-operation>

      </div>
    </div>
  </div>


</template>


<script>
  import choiceOperation from './choiceOperation.vue'

    export default {
      name: 'singleChoice',
      data () {
        return {
          options: [0]
        }
      },
      created: function () {
        this.options = this.choice.options
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
          type: Boolean
        }
      },
      watch: {
        // 仅读取，值只须为函数
        options: function () {
          if (this.options.length === 0){
            this.deleteChoice()
          }
        }
      },
      methods: {
        up: function () {
          this.$emit("up")
        },
        down: function () {
          this.$emit("down")
        },
        itemNameChange:  function(index) {
          //     获取内容有变化的选项的位置
          this.options[index] = event.target.innerText;
        },

        addNewItem: function (index) {
          console.log(this.options)
          this.options.splice(index,0,this.options[index])
        },

        //删除选项
        deleteItem: function (index) {
          this.options.splice(index,1)
        },

        // 删除单选题
        deleteChoice: function () {
          this.$emit("deleteChoice");
        },

        // 复用单选题
        repeat: function () {
          this.$emit("repeat");
        }
      },
      components: {
          'choice-operation': choiceOperation
      }

    }
</script>


<style lang="scss" scoped>
  @import '../../common/style/choice';


</style>
