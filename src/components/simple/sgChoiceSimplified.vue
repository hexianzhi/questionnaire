<template>
  <div>
    <div id="container">

      <div class="qn">
        <div class="qn-options">
            <span class="qn-name"  v-show="this.choiceOptions">
          {{serialNum+1}}. {{choice.title}}
        </span>

          <ul class="qn-list">
            <li class="qn-list-item"         v-for="(name, index)  in choiceOptions" v-bind:key="index">
              <input class="item-checkbox"   name="radio-check" type="radio"/>
              <label class="item-content">
                {{name}}
              </label>
            </li>
          </ul>
        </div>


        <div class="data-analysic">
          <p class="analysic-name">
            数据占比
          </p>
          <div v-bind:id="this.chartId" class="data-echart">

          </div>

        </div>

      </div>
    </div>
  </div>


</template>


<script>
  import echarts from 'echarts'
  export default {
    name: 'singleChoice',
    data () {
      return {
        choiceOptions: [],
        chart: null,
        chartId : '',
        chartOptions: {
        },
        //mock 数据
        choiceChoosedCount: 0,
        choiceChoose: [],
        choicePercentage: []

      }
    },
    created: function () {
      this.choiceOptions = this.choice.options;
      this.chartId =  "data-chart-" + this.serialNum;
      this.mockData();
    },
    mounted: function () {
      this.$nextTick(function() {
        this.drawBar()
      })
    },
    methods: {
      drawBar: function () {
        let elemment = document.getElementById(this.chartId)
        this.chart = echarts.init(elemment);
        this.chartOptions = {
          color: ['#3398DB'],
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            }
          },
          grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            top: "10%",
            containLabel: true
          },
          yAxis: [
            {
              type: 'category',
              data: this.choicePercentage,
              axisTick: {
                alignWithLabel: true
              }
            }
          ],
          xAxis: [
            {
              show: false,
              type: 'value'
            }
          ],
          series: [
            {
              label: {
                normal : {
                  show: true,
                  position: 'inside'
                }
              },
              type: 'bar',
              barWidth: '60%',
              data:  this.choiceChoose
            }
          ]
        };
        this.chart.setOption(this.chartOptions);
      },
      mockData: function () {

        this.choiceChoosedCount = 0;
        //模拟选择各个选项的人数
        for (let index = 0; index < this.choiceOptions.length; index++) {
          this.choiceChoose[index] = Math.floor(Math.random() * (  200 - 0) + 0);
        }

        this.choiceChoose.forEach((ele) => {
          this.choiceChoosedCount += ele
        })

        //模拟百分比
        this.choiceChoose.forEach((ele,index) => {
          this.choicePercentage[index] = Math.floor( (ele / this.choiceChoosedCount) * 100) + "%";
        })


      },

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
  @import '../../common/style/choiceSimplified';


</style>
