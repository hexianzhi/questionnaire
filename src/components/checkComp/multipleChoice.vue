<template>
  <div>
    <div id="container">
      <div class="qn">
        <div class="qn-options">
            <span class="qn-name"  v-show="this.choiceOptions">
          {{serialNum+1}}. {{choice.title}}
                <span class="mustWriteHide" :class="{ mustWriteShow: choice.necessary}" style="color: red">
             *
          </span>
        </span>
          <ul class="qn-list">
            <li class="qn-list-item"         v-for="(name,index)  in choiceOptions" v-bind:key="index">
              <input class="item-checkbox" type="checkbox"   :value="name" v-model="choiceValue"  />
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
    name: 'multipleChoice',
    data () {
      return {
        choiceOptions: [],
        chart: null,
        choiceValue : []
      }
    },
    watch: {
      choiceValue: function () {
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
