<template>
  <div>
    <div id="container">
      <div class="data-header">
          <div class="data-return" >
            <span class="data-return-icon" @click="returnToMain"> < 返回</span>
          </div>
          <div class="header-main">
            <p class="header-title">
              {{qnMessage.title}}
            </p>
            <p class="header-des">
              此统计分析只包含完整回收的数据
            </p>
          </div>
      </div>
      <div class="data-body">
        <ul class="qn-list">
          <!--以后这里的组件是由函数拼凑出来的-->
          <!--还要传是不是最后一个-->

          <li v-for="(choice,index ) in topics">
            <single-choice   v-if="(choice.type === 'radio')" :key="choice.id"
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

      <div class="data-foot">
        <div class="data-return" >
          <span class="data-return-icon" @click="returnToMain"> < 返回</span>
        </div>
      </div>

    </div>

  </div>
</template>


<script>
  import echarts from 'echarts'
  import sgChoiceSimplified from './simple/sgChoiceSimplified.vue'
  import multipleChoiceSimplified from './simple/multipleChoiceSimplified.vue'
  import textCopmentSimplified from './simple/textCopmentSimplified.vue'
  import {loadFromLocal} from '../common/js/store.js'

  export default {
    name: 'detail',
    data () {
      return {
        chart: null,
        qnMessage: null,
        topics: {
        }
      }
    },
    created: function () {
      this.qnMessage = loadFromLocal()
      this.topics = this.qnMessage.topics
    },
    methods: {
      returnToMain: function () {
          this.$router.push('check')
      }

    },
    components: {
      'multiple-choice': multipleChoiceSimplified,
      'single-choice': sgChoiceSimplified,
      'textareaCopment': textCopmentSimplified
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

    .data-header{
      margin: 20px;
      padding: 20px;
      border-bottom: 1px solid #ccc;

      .header-main{
        text-align: center;
        font-size: 18px;
        .header-title{
          margin-bottom: 10px;
          font-weight: bold;
        }
      }
    }

    .data-return{
      text-align: left;
      font-size: 18px;

      .data-return-icon{
        cursor: pointer;
      }
    }

    .data-foot{

      .data-return{
        display: inline-block;
        padding: 10px;
        margin: 40px;
        text-align: center;
        font-size: 18px;
        color: white;
        width: 100px;
        background-color: coral;
      }

      }
  }

</style>
