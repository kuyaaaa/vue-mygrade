<template>
  <div id="myChart" :style="{width: '1100px', height: '425px', margin: 'auto'}">

  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex'

export default {
  data () {
    return {
      newChartName: [],
      newChartNum: []
    }
  },
  methods: {
    ...mapActions({
      // 获取日期前12条考试数据
      getChartData: 'getChartData'
    }),
    // 获取考试名字
    getChartName (data) {
      // 初始化
      this.newChartName = []
      data.map(val => this.newChartName.push(val.name))
      // console.log(this.newChartName)
    },
    // 数据处理
    chartDataProcess (data, type) {
      // 初始化
      this.newChartNum = []
      if (type === 'sum') {
        data.map(val => this.newChartNum.push(val.sum))
      } else {
        data.map(val => this.newChartNum.push(val.grade[type]))
      }
      // console.log(this.newChartNum)
    },
    // y轴最值处理
    min (value) {
      return value.min - 10
    },
    max (value) {
      return value.max + 10
    },

    // 绘制图表
    drawLine () {
      let myChart = this.$echarts.init(document.getElementById('myChart'))
      // 绘制图表
      console.log(this.newChartName)
      myChart.setOption({
        title: { text: '仅显示最近日期的12条数据：' },
        tooltip: {},
        xAxis: {
          data: this.newChartName
        },
        yAxis: {
          min: this.min,
          max: this.max
        },
        series: [{
          name: '成绩',
          type: 'line',
          symbolSize: 10,
          lineStyle: {
            width: 5
          },
          markPoint: {
            itemStyle: {
              color: 'chocolate'
            },
            data: [
              {name: '最高分', type: 'max'},
              {name: '最低分', type: 'min'}
            ]
          },
          data: this.newChartNum
        }]
      })
    }
  },
  computed: {
    ...mapState({
      // 日期前12条考试数据
      chartData: state => state.chart.chartData,
      // 成绩类型
      gradeType: state => state.chart.type
    })
  },
  watch: {
    chartData (val) {
      this.getChartName(val)
    },
    gradeType (val) {
      this.chartDataProcess(this.chartData, val)
      this.drawLine()
    }
  },
  created () {
    this.getChartData()
  }
}
</script>

<style>
</style>
