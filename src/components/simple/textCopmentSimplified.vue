<template>
  <div>
    <div id="container">
      <div class="qn">
        <div class="qn-options">
          <p class="qn-name">
            {{serialNum + 1}}. {{choice.title}}
          </p>
        </div>

        <div class="data-analysic">
          <p class="analysic-name">
            数据占比
          </p>
          <div v-bind:id="this.chartId" class="data-echart"></div>
        </div>

      </div>
    </div>
  </div>

</template>


<script>
  import echarts from 'echarts'
  export default {
    name: 'textarea',
    data () {
      return {
        choiceOptions: [],
        chart: null,
        chartId: '',
        chartOptions: {},

        //mock 数据
        choiceChoose: [],
      }
    },
    created: function () {
      this.choiceOptions = ['有效回答','无效回答']
      this.chartId = "data-chart-" + this.serialNum;
      this.mockData();
    },
    mounted: function () {
      this.$nextTick(function () {
        this.drawPie()
      })
    },
    methods: {
      drawPie: function () {
        let elemment = document.getElementById(this.chartId)
        this.chart = echarts.init(elemment);
        this.chartOptions = {
          color: ['#3398DB', '#c23531', '#91c7ae', '#d48265'],
          tooltip: {
            trigger: 'item'
          },
          series: [
            {
              type: 'pie',
              radius: '55%',
              center: ['52%', '50%'],
              data: this.choiceChoose,

              itemStyle: {
                emphasis: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };
        this.chart.setOption(this.chartOptions);
      },
      mockData: function () {
        this.choiceChoosedCount = 0;
        //模拟pie data 对象
        for (let index = 0; index < this.choiceOptions.length; index++) {
          let echartOb = {};
          echartOb.value = Math.floor(Math.random() * (  100 - 0) + 0);
          echartOb.name = this.choiceOptions[index];
          this.choiceChoose.push(echartOb);
        }
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
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import '../../common/style/choiceSimplified';

  .qn{
    height: 150px;
  }

</style>
