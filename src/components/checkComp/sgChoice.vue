<template>
  <div>
    <div id="container">

      <div class="qn">
        <div class="qn-options">
             <span class="qn-name"  v-show="this.choiceOptions">
          {{serialNum+1}}. {{choice.title}}

              <span class="mustWriteHide" :class="{ mustWriteShow: choice.necessary}" style="color: red">
             *</span>
        </span>

          <ul class="qn-list">
            <li class="qn-list-item"         v-for="(name, index)  in choiceOptions" v-bind:key="index">
              <!--:name 属性一定要用这种语法，不然不行-->
              <input class="item-checkbox"      :name="`${choice.title}`" :value="name" v-model="choiceValue" type="radio" />
              <label class="item-content">
                {{name}}
              </label>
            </li>
          </ul>
        </div>


      </div>
    </div>
  </div>


</template>


<script>
  export default {
    name: 'singleChoice',
    data () {
      return {
        choiceOptions: [],
        chart: null,
        choiceValue : ''
      }
    },
    watch: {
      choiceValue: function () {
        //如果是 点一次就 push ,那么每一次点都会增加。。。wtf
        this.$emit("isCheck",this.choice.title);
      }
    },
    created: function () {
      this.choiceOptions = this.choice.options;
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
  @import '../../common/style/choiceCheck';


</style>
